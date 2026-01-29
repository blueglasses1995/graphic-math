import { useRef, useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store';

interface TrigGraphSceneProps {
  mode: 'cos' | 'sin' | 'both';
}

const BG_COLOR = '#0f172a';
const CIRCLE_COLOR = '#8888ff';
const COS_COLOR = '#ff4444';
const SIN_COLOR = '#44ff44';
const GRID_COLOR = '#334155';
const AXIS_COLOR = '#64748b';
const TEXT_COLOR = '#cbd5e1';
const POINT_COLOR = '#ffffff';
const DOTTED_COLOR = '#94a3b8';

const SPEED = 0.5; // radians per second
const MAX_ANGLE = 4 * Math.PI;

export default function TrigGraphScene({ mode }: TrigGraphSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isPlaying = useTutorialStore((s) => s.isPlaying);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const angle = angleRef.current;
      const dpr = window.devicePixelRatio || 1;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);

      const panelCount = mode === 'both' ? 3 : 2;
      const panelHeight = height / panelCount;
      const padding = 20;

      // --- Unit Circle Panel ---
      const circlePanel = { x: 0, y: 0, w: width, h: panelHeight };
      drawCirclePanel(ctx, circlePanel, angle, padding);

      // --- Graph Panels ---
      if (mode === 'cos' || mode === 'both') {
        const cosPanel = {
          x: 0,
          y: panelHeight,
          w: width,
          h: panelHeight,
        };
        drawGraphPanel(ctx, cosPanel, angle, 'cos', padding);
      }

      if (mode === 'sin') {
        const sinPanel = {
          x: 0,
          y: panelHeight,
          w: width,
          h: panelHeight,
        };
        drawGraphPanel(ctx, sinPanel, angle, 'sin', padding);
      }

      if (mode === 'both') {
        const sinPanel = {
          x: 0,
          y: panelHeight * 2,
          w: width,
          h: panelHeight,
        };
        drawGraphPanel(ctx, sinPanel, angle, 'sin', padding);
      }
    },
    [mode],
  );

  const animate = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      if (lastTimeRef.current > 0 && isPlaying) {
        const dt = (time - lastTimeRef.current) / 1000;
        angleRef.current += SPEED * dt;
        if (angleRef.current > MAX_ANGLE) {
          angleRef.current = 0;
        }
      }
      lastTimeRef.current = time;

      draw(ctx, width, height);
      rafRef.current = requestAnimationFrame(animate);
    },
    [draw, isPlaying],
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ background: BG_COLOR }}
    />
  );
}

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

function drawCirclePanel(ctx: CanvasRenderingContext2D, rect: Rect, angle: number, padding: number) {
  const { x, y, w, h } = rect;
  const cx = x + w / 2;
  const cy = y + h / 2;
  const radius = Math.min(w, h) / 2 - padding * 2;

  // Grid lines
  ctx.strokeStyle = GRID_COLOR;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(cx - radius, cy);
  ctx.lineTo(cx + radius, cy);
  ctx.moveTo(cx, cy - radius);
  ctx.lineTo(cx, cy + radius);
  ctx.stroke();

  // Axes
  ctx.strokeStyle = AXIS_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x + padding, cy);
  ctx.lineTo(x + w - padding, cy);
  ctx.moveTo(cx, y + padding);
  ctx.lineTo(cx, y + h - padding);
  ctx.stroke();

  // Unit circle
  ctx.strokeStyle = CIRCLE_COLOR;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // Current angle point
  const px = cx + Math.cos(angle) * radius;
  const py = cy - Math.sin(angle) * radius;

  // Radius arrow
  ctx.strokeStyle = POINT_COLOR;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(px, py);
  ctx.stroke();

  // Cos projection (red dotted line from point to x-axis)
  ctx.strokeStyle = DOTTED_COLOR;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(px, cy);
  ctx.stroke();
  ctx.setLineDash([]);

  // Cos component on x-axis (red)
  ctx.strokeStyle = COS_COLOR;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(px, cy);
  ctx.stroke();

  // Sin projection (green dotted line from point to y-axis)
  ctx.strokeStyle = DOTTED_COLOR;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(cx, py);
  ctx.stroke();
  ctx.setLineDash([]);

  // Sin component on y-axis (green)
  ctx.strokeStyle = SIN_COLOR;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx, py);
  ctx.stroke();

  // Point on circle
  ctx.fillStyle = POINT_COLOR;
  ctx.beginPath();
  ctx.arc(px, py, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Angle arc
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  const arcRadius = radius * 0.2;
  ctx.arc(cx, cy, arcRadius, 0, -angle, angle > 0);
  ctx.stroke();

  // Angle label
  const degrees = ((angle * 180) / Math.PI) % 360;
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '12px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(`θ = ${degrees.toFixed(0)}°`, cx + arcRadius + 4, cy - 4);

  // Panel label
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '13px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('単位円', x + padding, y + padding + 12);
}

function drawGraphPanel(ctx: CanvasRenderingContext2D, rect: Rect, currentAngle: number, type: 'cos' | 'sin', padding: number) {
  const { x, y, w, h } = rect;
  const graphColor = type === 'cos' ? COS_COLOR : SIN_COLOR;
  const label = type === 'cos' ? 'cos θ' : 'sin θ';

  const graphLeft = x + padding + 30;
  const graphRight = x + w - padding;
  const graphTop = y + padding + 16;
  const graphBottom = y + h - padding - 4;
  const graphW = graphRight - graphLeft;
  const graphH = graphBottom - graphTop;
  const graphCy = graphTop + graphH / 2;

  // Separator line
  ctx.strokeStyle = GRID_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.stroke();

  // Grid horizontal lines at -1, 0, 1
  ctx.strokeStyle = GRID_COLOR;
  ctx.lineWidth = 0.5;
  for (const val of [-1, 0, 1]) {
    const gy = graphCy - val * (graphH / 2);
    ctx.beginPath();
    ctx.moveTo(graphLeft, gy);
    ctx.lineTo(graphRight, gy);
    ctx.stroke();
  }

  // Grid vertical lines at pi/2 intervals
  const totalAngleRange = MAX_ANGLE;
  for (let a = 0; a <= totalAngleRange; a += Math.PI / 2) {
    const gx = graphLeft + (a / totalAngleRange) * graphW;
    ctx.strokeStyle = GRID_COLOR;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(gx, graphTop);
    ctx.lineTo(gx, graphBottom);
    ctx.stroke();
  }

  // Axis labels
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '10px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('1', graphLeft - 4, graphTop + 4);
  ctx.fillText('0', graphLeft - 4, graphCy + 4);
  ctx.fillText('-1', graphLeft - 4, graphBottom + 4);

  // X-axis angle labels
  ctx.textAlign = 'center';
  const angleLabels = [
    { val: 0, text: '0' },
    { val: Math.PI, text: 'π' },
    { val: 2 * Math.PI, text: '2π' },
    { val: 3 * Math.PI, text: '3π' },
    { val: 4 * Math.PI, text: '4π' },
  ];
  for (const al of angleLabels) {
    const gx = graphLeft + (al.val / totalAngleRange) * graphW;
    if (gx >= graphLeft && gx <= graphRight) {
      ctx.fillText(al.text, gx, graphBottom + 14);
    }
  }

  // Axes
  ctx.strokeStyle = AXIS_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(graphLeft, graphCy);
  ctx.lineTo(graphRight, graphCy);
  ctx.moveTo(graphLeft, graphTop);
  ctx.lineTo(graphLeft, graphBottom);
  ctx.stroke();

  // Draw the graph line up to currentAngle
  const fn = type === 'cos' ? Math.cos : Math.sin;
  ctx.strokeStyle = graphColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const steps = Math.min(Math.floor((currentAngle / totalAngleRange) * graphW), graphW);
  for (let i = 0; i <= steps; i++) {
    const a = (i / graphW) * totalAngleRange;
    if (a > currentAngle) break;
    const gx = graphLeft + i;
    const gy = graphCy - fn(a) * (graphH / 2);
    if (i === 0) {
      ctx.moveTo(gx, gy);
    } else {
      ctx.lineTo(gx, gy);
    }
  }
  ctx.stroke();

  // Current value marker
  if (currentAngle > 0) {
    const markerX = graphLeft + (currentAngle / totalAngleRange) * graphW;
    const markerY = graphCy - fn(currentAngle) * (graphH / 2);
    if (markerX <= graphRight) {
      ctx.fillStyle = graphColor;
      ctx.beginPath();
      ctx.arc(markerX, markerY, 4, 0, 2 * Math.PI);
      ctx.fill();

      // Value label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '11px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(fn(currentAngle).toFixed(2), markerX + 8, markerY - 6);
    }
  }

  // Panel label
  ctx.fillStyle = graphColor;
  ctx.font = '13px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(label, x + padding, y + padding + 12);
}
