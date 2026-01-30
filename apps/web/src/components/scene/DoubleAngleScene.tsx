import { useRef, useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store';

const BG = '#0f172a';
const GRID_COLOR = '#334155';
const AXIS_COLOR = '#64748b';
const TEXT_COLOR = '#cbd5e1';
const CIRCLE_COLOR = '#8888ff';
const THETA_COLOR = '#fbbf24';
const DOUBLE_COLOR = '#ff44ff';
const ORIGINAL_SIN = '#44ff44';
// ORIGINAL_COS = '#ff4444' reserved for future cos overlay

const SPEED = 0.4;
const MAX_ANGLE = 2 * Math.PI;

interface DoubleAngleSceneProps {
  multiplier: number; // 2 for double, 3 for triple
  label: string;      // '2θ' or '3θ'
}

export default function DoubleAngleScene({ multiplier, label }: DoubleAngleSceneProps) {
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

      const theta = angleRef.current;
      const nTheta = multiplier * theta;
      const padding = 20;

      // Layout: top = unit circle, bottom = graphs
      const topH = h * 0.45;

      // --- Top: Unit circle with both angles ---
      const cx = w / 2;
      const cy = topH / 2;
      const radius = Math.min(w, topH) / 2 - padding * 3;

      // Label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`θ と ${label}`, padding, padding + 12);

      // Circle
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

      // θ point
      const px1 = cx + Math.cos(theta) * radius;
      const py1 = cy - Math.sin(theta) * radius;
      ctx.strokeStyle = THETA_COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px1, py1);
      ctx.stroke();
      ctx.fillStyle = THETA_COLOR;
      ctx.beginPath();
      ctx.arc(px1, py1, 5, 0, 2 * Math.PI);
      ctx.fill();

      // θ arc
      ctx.strokeStyle = THETA_COLOR;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.2, 0, -theta, theta > 0);
      ctx.stroke();

      // nθ point
      const px2 = cx + Math.cos(nTheta) * radius;
      const py2 = cy - Math.sin(nTheta) * radius;
      ctx.strokeStyle = DOUBLE_COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px2, py2);
      ctx.stroke();
      ctx.fillStyle = DOUBLE_COLOR;
      ctx.beginPath();
      ctx.arc(px2, py2, 5, 0, 2 * Math.PI);
      ctx.fill();

      // nθ arc
      ctx.strokeStyle = DOUBLE_COLOR;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.3, 0, -nTheta, nTheta > 0);
      ctx.stroke();

      // Labels
      const deg = ((theta * 180) / Math.PI) % 360;
      ctx.font = '11px monospace';
      ctx.textAlign = 'left';
      ctx.fillStyle = THETA_COLOR;
      ctx.fillText(`θ = ${deg.toFixed(0)}°`, cx + radius * 0.22 + 4, cy - 4);
      ctx.fillStyle = DOUBLE_COLOR;
      ctx.fillText(`${label} = ${(deg * multiplier).toFixed(0)}°`, cx + radius * 0.32 + 4, cy - 18);

      // --- Separator ---
      const sepY = topH;
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, sepY);
      ctx.lineTo(w, sepY);
      ctx.stroke();

      // --- Bottom: Overlaid graphs ---
      const gLeft = padding + 40;
      const gRight = w - padding;
      const gTop = sepY + padding + 24;
      const gBottom = h - padding - 16;
      const gW = gRight - gLeft;
      const gH = gBottom - gTop;
      const gCy = gTop + gH / 2;

      // Label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('グラフ比較', padding, sepY + padding + 12);

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

      // Y labels
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('1', gLeft - 4, gTop + 4);
      ctx.fillText('0', gLeft - 4, gCy + 4);
      ctx.fillText('-1', gLeft - 4, gBottom + 4);

      // X labels
      ctx.textAlign = 'center';
      const xLabels = [
        { val: 0, text: '0' },
        { val: Math.PI, text: 'π' },
        { val: 2 * Math.PI, text: '2π' },
      ];
      for (const xl of xLabels) {
        const gx = gLeft + (xl.val / MAX_ANGLE) * gW;
        ctx.fillText(xl.text, gx, gBottom + 14);
      }

      // Draw full sin(θ) — faint
      drawFullWave(ctx, gLeft, gW, gCy, gH, ORIGINAL_SIN + '66', Math.sin, MAX_ANGLE);
      // Draw full sin(nθ) — bright
      drawFullWave(ctx, gLeft, gW, gCy, gH, DOUBLE_COLOR, (a) => Math.sin(multiplier * a), MAX_ANGLE);

      // Current angle marker on sin(nθ)
      if (theta > 0.01) {
        const mx = gLeft + (theta / MAX_ANGLE) * gW;
        const my = gCy - Math.sin(nTheta) * (gH / 2);
        if (mx <= gRight) {
          ctx.fillStyle = DOUBLE_COLOR;
          ctx.beginPath();
          ctx.arc(mx, my, 4, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = TEXT_COLOR;
          ctx.font = '10px monospace';
          ctx.textAlign = 'left';
          ctx.fillText(`sin(${label}) = ${Math.sin(nTheta).toFixed(2)}`, mx + 8, my - 6);
        }
      }

      // Legend
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillStyle = ORIGINAL_SIN + '88';
      ctx.fillText('sin(θ)', gRight, sepY + padding + 12);
      ctx.fillStyle = DOUBLE_COLOR;
      ctx.fillText(`sin(${label})`, gRight, sepY + padding + 28);
    },
    [multiplier, label],
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

function drawFullWave(
  ctx: CanvasRenderingContext2D,
  left: number, gW: number, cy: number, gH: number,
  color: string, fn: (a: number) => number, maxAngle: number
) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= gW; i++) {
    const a = (i / gW) * maxAngle;
    const gx = left + i;
    const gy = cy - fn(a) * (gH / 2);
    if (i === 0) ctx.moveTo(gx, gy);
    else ctx.lineTo(gx, gy);
  }
  ctx.stroke();
}
