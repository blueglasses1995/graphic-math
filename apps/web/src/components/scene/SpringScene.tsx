import { useRef, useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store';

const BG = '#0f172a';
const GRID_COLOR = '#334155';
const AXIS_COLOR = '#64748b';
const TEXT_COLOR = '#cbd5e1';
const SPRING_COLOR = '#94a3b8';
const MASS_COLOR = '#ff4444';
const GRAPH_COLOR = '#44ff44';

const OMEGA = 2.0;
const TOTAL_TIME = 10;

export default function SpringScene() {
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
      const displacement = Math.sin(OMEGA * t); // -1 to 1
      const padding = 20;

      // Layout: left = spring, right = graph
      const springW = w * 0.35;


      // --- Left: Spring ---
      const anchorX = springW / 2;
      const anchorY = 40;
      const restLength = h * 0.35;
      const amplitude = h * 0.15;
      const massY = anchorY + restLength + displacement * amplitude;
      const massSize = 30;

      // Label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('ばね', padding, padding + 12);

      // Anchor (ceiling)
      ctx.fillStyle = GRID_COLOR;
      ctx.fillRect(anchorX - 40, anchorY - 6, 80, 6);

      // Spring coils (zigzag)
      const coils = 8;
      const springTop = anchorY;
      const springBottom = massY - massSize / 2;
      const springLen = springBottom - springTop;
      const coilW = 16;
      ctx.strokeStyle = SPRING_COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(anchorX, springTop);
      for (let i = 0; i < coils; i++) {

        const yMid = springTop + ((i + 0.5) / coils) * springLen;
        const dir = i % 2 === 0 ? 1 : -1;
        ctx.lineTo(anchorX + dir * coilW, yMid);
        ctx.lineTo(anchorX, springTop + ((i + 1) / coils) * springLen);
      }
      ctx.stroke();

      // Mass
      ctx.fillStyle = MASS_COLOR;
      ctx.beginPath();
      ctx.roundRect(anchorX - massSize / 2, massY - massSize / 2, massSize, massSize, 4);
      ctx.fill();

      // Equilibrium dotted line
      const eqY = anchorY + restLength;
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(anchorX - 50, eqY);
      ctx.lineTo(anchorX + 50, eqY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Displacement arrow
      if (Math.abs(displacement) > 0.05) {
        ctx.strokeStyle = GRAPH_COLOR;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(anchorX + 40, eqY);
        ctx.lineTo(anchorX + 40, massY);
        ctx.stroke();
        // Arrow tip
        const dir = displacement > 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(anchorX + 40, massY);
        ctx.lineTo(anchorX + 36, massY - dir * 6);
        ctx.lineTo(anchorX + 44, massY - dir * 6);
        ctx.closePath();
        ctx.fillStyle = GRAPH_COLOR;
        ctx.fill();

        ctx.fillStyle = GRAPH_COLOR;
        ctx.font = '11px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(displacement.toFixed(2), anchorX + 48, (eqY + massY) / 2 + 4);
      }

      // Equilibrium label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('平衡点', anchorX - 54, eqY + 4);

      // --- Separator ---
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(springW, 0);
      ctx.lineTo(springW, h);
      ctx.stroke();

      // --- Right: sin graph ---
      const gLeft = springW + padding + 20;
      const gRight = w - padding;
      const gTop = padding + 20;
      const gBottom = h - padding - 4;
      const gW = gRight - gLeft;
      const gH = gBottom - gTop;
      const gCy = gTop + gH / 2;

      ctx.fillStyle = GRAPH_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('変位 = sin(ωt)', springW + padding, padding + 12);

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

      // Draw graph
      ctx.strokeStyle = GRAPH_COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      const tClamped = Math.min(t, TOTAL_TIME);
      const steps = Math.floor((tClamped / TOTAL_TIME) * gW);
      for (let i = 0; i <= steps; i++) {
        const ti = (i / gW) * TOTAL_TIME;
        const gx = gLeft + i;
        const val = Math.sin(OMEGA * ti);
        const gy = gCy - val * (gH / 2);
        if (i === 0) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.stroke();

      // Marker
      if (t > 0 && tClamped <= TOTAL_TIME) {
        const mx = gLeft + (tClamped / TOTAL_TIME) * gW;
        const my = gCy - displacement * (gH / 2);
        ctx.fillStyle = GRAPH_COLOR;
        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, 2 * Math.PI);
        ctx.fill();
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
        tRef.current += dt;
        if (tRef.current > TOTAL_TIME) tRef.current = 0;
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
