import { useRef, useEffect, useCallback, useState } from 'react';

interface Props {
  angle?: number;
  onAngleChange?: (angle: number) => void;
  showCos?: boolean;
  showSin?: boolean;
  showQuadrants?: boolean;
  highlightQuadrant?: number;
}

const BG = '#0f172a';
const CIRCLE_COLOR = '#8888ff';
const COS_COLOR = '#ff4444';
const SIN_COLOR = '#44ff44';
const ARC_COLOR = '#fbbf24';
const POINT_COLOR = '#ffffff';
const AXIS_COLOR = '#64748b';
const TEXT_COLOR = '#cbd5e1';
const DOTTED_COLOR = '#94a3b8';

export default function InteractiveUnitCircle({
  angle: externalAngle,
  onAngleChange,
  showCos = true,
  showSin = true,
  showQuadrants = false,
  highlightQuadrant,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [internalAngle, setInternalAngle] = useState(Math.PI / 4);
  const isDragging = useRef(false);

  const angle = externalAngle ?? internalAngle;

  const setAngle = useCallback(
    (a: number) => {
      if (onAngleChange) onAngleChange(a);
      else setInternalAngle(a);
    },
    [onAngleChange],
  );

  const getCanvasMetrics = useCallback((canvas: HTMLCanvasElement) => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) / 2 - 60;
    return { w, h, cx, cy, radius };
  }, []);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) / 2 - 60;

      // Quadrant highlights
      if (showQuadrants && highlightQuadrant) {
        ctx.fillStyle = 'rgba(99,102,241,0.08)';
        const startAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
        const sa = startAngles[highlightQuadrant - 1];
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, -sa - Math.PI / 2, -(sa + Math.PI / 2) - Math.PI / 2, true);
        ctx.closePath();
        ctx.fill();
      }

      // Quadrant labels
      if (showQuadrants) {
        ctx.fillStyle = TEXT_COLOR;
        ctx.font = '12px sans-serif';
        ctx.globalAlpha = 0.5;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const off = radius * 0.5;
        ctx.fillText('I', cx + off, cy - off);
        ctx.fillText('II', cx - off, cy - off);
        ctx.fillText('III', cx - off, cy + off);
        ctx.fillText('IV', cx + off, cy + off);
        ctx.globalAlpha = 1;
      }

      // Axes
      ctx.strokeStyle = AXIS_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(20, cy);
      ctx.lineTo(w - 20, cy);
      ctx.moveTo(cx, 20);
      ctx.lineTo(cx, h - 40);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('1', cx + radius, cy + 16);
      ctx.fillText('-1', cx - radius, cy + 16);
      ctx.fillText('1', cx - 16, cy - radius);
      ctx.fillText('-1', cx - 20, cy + radius);

      // Unit circle
      ctx.strokeStyle = CIRCLE_COLOR;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      const px = cx + Math.cos(angle) * radius;
      const py = cy - Math.sin(angle) * radius;
      const cosVal = Math.cos(angle);
      const sinVal = Math.sin(angle);

      // Cos projection
      if (showCos) {
        // Dotted line from point to x-axis
        ctx.strokeStyle = DOTTED_COLOR;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, cy);
        ctx.stroke();
        ctx.setLineDash([]);

        // Cos line on x-axis
        ctx.strokeStyle = COS_COLOR;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, cy);
        ctx.stroke();

        // Cos value label
        ctx.fillStyle = COS_COLOR;
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`cos=${cosVal.toFixed(2)}`, (cx + px) / 2, cy + 20);
      }

      // Sin projection
      if (showSin) {
        // Dotted line from point to y-axis
        ctx.strokeStyle = DOTTED_COLOR;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(cx, py);
        ctx.stroke();
        ctx.setLineDash([]);

        // Sin line on y-axis
        ctx.strokeStyle = SIN_COLOR;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, py);
        ctx.stroke();

        // Sin value label
        ctx.fillStyle = SIN_COLOR;
        ctx.font = '12px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`sin=${sinVal.toFixed(2)}`, cx + 8, (cy + py) / 2);
      }

      // Radius line
      ctx.strokeStyle = POINT_COLOR;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Angle arc
      ctx.strokeStyle = ARC_COLOR;
      ctx.lineWidth = 1.5;
      const arcR = radius * 0.2;
      ctx.beginPath();
      // Canvas arc goes clockwise; math angle is counterclockwise
      const drawAngle = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      ctx.arc(cx, cy, arcR, 0, -drawAngle, true);
      ctx.stroke();

      // Degree label
      const deg = ((angle * 180) / Math.PI) % 360;
      const displayDeg = deg < 0 ? deg + 360 : deg;
      ctx.fillStyle = ARC_COLOR;
      ctx.font = '12px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`${displayDeg.toFixed(0)}°`, cx + arcR + 4, cy - 6);

      // Draggable point
      ctx.fillStyle = POINT_COLOR;
      ctx.beginPath();
      ctx.arc(px, py, 7, 0, 2 * Math.PI);
      ctx.fill();

      // Coordinate label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '11px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`(${cosVal.toFixed(2)}, ${sinVal.toFixed(2)})`, px + 12, py - 10);

      // Hint text at bottom
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'center';
      ctx.globalAlpha = 0.6;
      ctx.fillText('\u25CF \u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u89D2\u5EA6\u3092\u5909\u3048\u3066\u307F\u3088\u3046', w / 2, h - 16);
      ctx.globalAlpha = 1;
    },
    [angle, showCos, showSin, showQuadrants, highlightQuadrant],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    draw(ctx, w, h);
  }, [draw]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const { cx, cy, radius } = getCanvasMetrics(canvas);
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const px = cx + Math.cos(angle) * radius;
      const py = cy - Math.sin(angle) * radius;
      const dist = Math.hypot(mx - px, my - py);
      if (dist < 20) {
        isDragging.current = true;
        canvas.setPointerCapture(e.pointerId);
      }
    },
    [angle, getCanvasMetrics],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!isDragging.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const { cx, cy } = getCanvasMetrics(canvas);
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const newAngle = Math.atan2(-(my - cy), mx - cx);
      setAngle(newAngle < 0 ? newAngle + 2 * Math.PI : newAngle);
    },
    [getCanvasMetrics, setAngle],
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ background: BG, cursor: 'pointer' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    />
  );
}
