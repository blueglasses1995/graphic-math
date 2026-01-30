import { useRef, useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store';

const BG = '#0f172a';
const GRID_COLOR = '#334155';
const AXIS_COLOR = '#64748b';
const TEXT_COLOR = '#cbd5e1';
const CIRCLE_COLOR = '#8888ff';
const POINT_COLOR = '#fbbf24';
const PROJ_COLOR = '#44ff44';

const SPEED = 1.0;
const MAX_ANGLE = 4 * Math.PI;

export default function CircularMotionScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isPlaying = useTutorialStore((s) => s.isPlaying);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);

      const angle = angleRef.current;
      const padding = 20;

      // Layout: left side = circle, right side = graph
      const circleW = w * 0.4;


      // --- Left: Circular motion ---
      const cx = circleW / 2;
      const cy = h / 2;
      const radius = Math.min(circleW, h) / 2 - padding * 3;

      // Label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('円運動', padding, padding + 12);

      // Circle track
      ctx.strokeStyle = CIRCLE_COLOR;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Axes
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(cx - radius - 10, cy);
      ctx.lineTo(cx + radius + 10, cy);
      ctx.moveTo(cx, cy - radius - 10);
      ctx.lineTo(cx, cy + radius + 10);
      ctx.stroke();

      // Moving point
      const px = cx + Math.cos(angle) * radius;
      const py = cy - Math.sin(angle) * radius;

      // Radius line
      ctx.strokeStyle = '#ffffff44';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Y-projection dotted line
      ctx.strokeStyle = PROJ_COLOR;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(circleW, py);
      ctx.stroke();
      ctx.setLineDash([]);

      // Point
      ctx.fillStyle = POINT_COLOR;
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, 2 * Math.PI);
      ctx.fill();

      // Y-coordinate label
      ctx.fillStyle = PROJ_COLOR;
      ctx.font = '11px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`y = ${Math.sin(angle).toFixed(2)}`, px + 10, py - 8);

      // --- Separator ---
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(circleW, 0);
      ctx.lineTo(circleW, h);
      ctx.stroke();

      // --- Right: Sin graph ---
      const gLeft = circleW + padding + 20;
      const gRight = w - padding;
      const gTop = padding + 20;
      const gBottom = h - padding - 4;
      const gW = gRight - gLeft;
      const gH = gBottom - gTop;
      const gCy = gTop + gH / 2;

      // Label
      ctx.fillStyle = PROJ_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Y座標 = sin θ', circleW + padding, padding + 12);

      // Grid
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 0.5;
      for (const val of [-1, 0, 1]) {
        const gy = gCy - val * (gH / 2);
        ctx.beginPath();
        ctx.moveTo(gLeft, gy);
        ctx.lineTo(gRight, gy);
        ctx.stroke();
      }

      // Axes
      ctx.strokeStyle = AXIS_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(gLeft, gCy);
      ctx.lineTo(gRight, gCy);
      ctx.moveTo(gLeft, gTop);
      ctx.lineTo(gLeft, gBottom);
      ctx.stroke();

      // Y-axis labels
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('1', gLeft - 4, gTop + 4);
      ctx.fillText('0', gLeft - 4, gCy + 4);
      ctx.fillText('-1', gLeft - 4, gBottom + 4);

      // Draw sin graph up to current angle
      ctx.strokeStyle = PROJ_COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      const steps = Math.min(Math.floor((angle / MAX_ANGLE) * gW), gW);
      for (let i = 0; i <= steps; i++) {
        const a = (i / gW) * MAX_ANGLE;
        if (a > angle) break;
        const gx = gLeft + i;
        const gy = gCy - Math.sin(a) * (gH / 2);
        if (i === 0) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.stroke();

      // Graph marker
      if (angle > 0) {
        const markerX = gLeft + (angle / MAX_ANGLE) * gW;
        const markerY = gCy - Math.sin(angle) * (gH / 2);
        if (markerX <= gRight) {
          // Horizontal connector from circle projection to graph
          ctx.strokeStyle = PROJ_COLOR;
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.globalAlpha = 0.4;
          ctx.beginPath();
          ctx.moveTo(circleW, py);
          ctx.lineTo(markerX, markerY);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.globalAlpha = 1;

          ctx.fillStyle = PROJ_COLOR;
          ctx.beginPath();
          ctx.arc(markerX, markerY, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    },
    [],
  );

  const animate = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;

      if (lastTimeRef.current > 0 && isPlaying) {
        const dt = (time - lastTimeRef.current) / 1000;
        angleRef.current += SPEED * dt;
        if (angleRef.current > MAX_ANGLE) angleRef.current = 0;
      }
      lastTimeRef.current = time;

      draw(ctx, cw, ch);
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
      style={{ background: BG }}
    />
  );
}
