import { useRef, useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store';

const BG = '#0f172a';
const GRID_COLOR = '#334155';
const AXIS_COLOR = '#64748b';
const TEXT_COLOR = '#cbd5e1';
const WAVE1_COLOR = '#ff4444';
const WAVE2_COLOR = '#44ff44';
const SUM_COLOR = '#fbbf24';

const SPEED = 0.5;
const TOTAL_TIME = 12;

export default function WaveScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);
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

      const t = tRef.current;
      const padding = 20;

      // --- Top panel: Two waves ---
      const topH = h * 0.55;
      const topGraphLeft = padding + 30;
      const topGraphRight = w - padding;
      const topGraphTop = padding + 20;
      const topGraphBottom = topH - padding;
      const topGraphW = topGraphRight - topGraphLeft;
      const topGraphH = topGraphBottom - topGraphTop;
      const topCy = topGraphTop + topGraphH / 2;

      // Label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('2つの波', padding, padding + 12);

      // Grid + axes
      drawGraphGrid(ctx, topGraphLeft, topGraphRight, topGraphTop, topGraphBottom, topCy);

      // Wave 1: sin(x)
      drawWaveLine(ctx, topGraphLeft, topGraphW, topCy, topGraphH, WAVE1_COLOR, (x) => Math.sin(x), t);
      // Wave 2: sin(x + phase) where phase changes over time
      const phase = t * 0.5; // slowly shifts
      drawWaveLine(ctx, topGraphLeft, topGraphW, topCy, topGraphH, WAVE2_COLOR, (x) => Math.sin(x + phase), t);

      // Y-axis labels
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('1', topGraphLeft - 4, topGraphTop + 4);
      ctx.fillText('0', topGraphLeft - 4, topCy + 4);
      ctx.fillText('-1', topGraphLeft - 4, topGraphBottom + 4);

      // Legend
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillStyle = WAVE1_COLOR;
      ctx.fillText('sin(x)', topGraphRight - 130, topGraphTop + 14);
      ctx.fillStyle = WAVE2_COLOR;
      ctx.fillText(`sin(x + ${(phase % (2 * Math.PI)).toFixed(1)})`, topGraphRight - 130, topGraphTop + 30);

      // --- Separator ---
      const sepY = topH;
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, sepY);
      ctx.lineTo(w, sepY);
      ctx.stroke();

      // --- Bottom panel: Sum ---
      const botGraphLeft = padding + 30;
      const botGraphRight = w - padding;
      const botGraphTop = sepY + padding + 20;
      const botGraphBottom = h - padding - 4;
      const botGraphW = botGraphRight - botGraphLeft;
      const botGraphH = botGraphBottom - botGraphTop;
      const botCy = botGraphTop + botGraphH / 2;

      // Label
      ctx.fillStyle = SUM_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('合成波（足し算）', padding, sepY + padding + 12);

      // Grid + axes
      drawGraphGrid(ctx, botGraphLeft, botGraphRight, botGraphTop, botGraphBottom, botCy);

      // Sum wave (amplitude can reach 2)
      drawWaveLine(ctx, botGraphLeft, botGraphW, botCy, botGraphH, SUM_COLOR,
        (x) => (Math.sin(x) + Math.sin(x + phase)) / 2, t);

      // Y-axis labels for sum
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('1', botGraphLeft - 4, botGraphTop + 4);
      ctx.fillText('0', botGraphLeft - 4, botCy + 4);
      ctx.fillText('-1', botGraphLeft - 4, botGraphBottom + 4);

      // Phase indicator text
      const phaseNorm = phase % (2 * Math.PI);
      let interferenceLabel = '';
      if (phaseNorm < 0.3 || phaseNorm > 5.98) interferenceLabel = '強め合い（constructive）';
      else if (Math.abs(phaseNorm - Math.PI) < 0.3) interferenceLabel = '弱め合い（destructive）';
      if (interferenceLabel) {
        ctx.fillStyle = SUM_COLOR;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(interferenceLabel, w / 2, botGraphBottom + 16);
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
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;

      if (lastTimeRef.current > 0 && isPlaying) {
        const dt = (time - lastTimeRef.current) / 1000;
        tRef.current += SPEED * dt;
        if (tRef.current > TOTAL_TIME) tRef.current = 0;
      }
      lastTimeRef.current = time;

      draw(ctx, w, h);
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

function drawGraphGrid(
  ctx: CanvasRenderingContext2D,
  left: number, right: number, top: number, bottom: number, cy: number
) {
  ctx.strokeStyle = GRID_COLOR;
  ctx.lineWidth = 0.5;
  for (const val of [-1, 0, 1]) {
    const gy = cy - val * ((bottom - top) / 2);
    ctx.beginPath();
    ctx.moveTo(left, gy);
    ctx.lineTo(right, gy);
    ctx.stroke();
  }

  // Axes
  ctx.strokeStyle = AXIS_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, cy);
  ctx.lineTo(right, cy);
  ctx.moveTo(left, top);
  ctx.lineTo(left, bottom);
  ctx.stroke();
}

function drawWaveLine(
  ctx: CanvasRenderingContext2D,
  left: number, graphW: number, cy: number, graphH: number,
  color: string, fn: (x: number) => number, _t: number
) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const xRange = 4 * Math.PI;
  for (let i = 0; i <= graphW; i++) {
    const x = (i / graphW) * xRange;
    const gx = left + i;
    const gy = cy - fn(x) * (graphH / 2);
    if (i === 0) ctx.moveTo(gx, gy);
    else ctx.lineTo(gx, gy);
  }
  ctx.stroke();
}
