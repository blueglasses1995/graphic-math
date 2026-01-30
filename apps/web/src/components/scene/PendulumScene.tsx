import { useRef, useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store';

const BG = '#0f172a';
const ROPE_COLOR = '#94a3b8';
const BOB_COLOR = '#fbbf24';
const GRAPH_COLOR = '#44ff44';
const GRID_COLOR = '#334155';
const AXIS_COLOR = '#64748b';
const TEXT_COLOR = '#cbd5e1';

const SPEED = 1.5;
const MAX_ANGLE = Math.PI / 4;
const TOTAL_TIME = 10;

export default function PendulumScene() {
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
      const pendAngle = MAX_ANGLE * Math.sin(SPEED * t);
      const padding = 20;

      // --- Top panel: Pendulum ---
      const topH = h * 0.5;
      const pivotX = w / 2;
      const pivotY = 30;
      const ropeLen = topH - 80;

      // Pivot bar
      ctx.strokeStyle = ROPE_COLOR;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(pivotX - 30, pivotY);
      ctx.lineTo(pivotX + 30, pivotY);
      ctx.stroke();

      // Dotted rest line
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(pivotX, pivotY + ropeLen + 14);
      ctx.stroke();
      ctx.setLineDash([]);

      // Bob position
      const bobX = pivotX + Math.sin(pendAngle) * ropeLen;
      const bobY = pivotY + Math.cos(pendAngle) * ropeLen;

      // Rope
      ctx.strokeStyle = ROPE_COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(bobX, bobY);
      ctx.stroke();

      // Bob
      ctx.fillStyle = BOB_COLOR;
      ctx.beginPath();
      ctx.arc(bobX, bobY, 14, 0, 2 * Math.PI);
      ctx.fill();

      // Displacement label
      const dispPx = bobX - pivotX;
      if (Math.abs(dispPx) > 2) {
        ctx.strokeStyle = GRAPH_COLOR;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(pivotX, bobY);
        ctx.lineTo(bobX, bobY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = GRAPH_COLOR;
        ctx.font = '11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(Math.sin(pendAngle).toFixed(2), (pivotX + bobX) / 2, bobY + 24);
      }

      // Top-left label
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('\u632F\u308A\u5B50', padding, padding + 12);

      // --- Separator ---
      const sepY = topH;
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, sepY);
      ctx.lineTo(w, sepY);
      ctx.stroke();

      // --- Bottom panel: sin graph ---
      const graphLeft = padding + 30;
      const graphRight = w - padding;
      const graphTop = sepY + padding + 20;
      const graphBottom = h - padding - 4;
      const graphW = graphRight - graphLeft;
      const graphH = graphBottom - graphTop;
      const graphCy = graphTop + graphH / 2;

      // Graph label
      ctx.fillStyle = GRAPH_COLOR;
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('sin(\u03C9t) \u2014 \u632F\u308A\u5B50\u306E\u5909\u4F4D', padding, sepY + padding + 12);

      // Grid horizontal lines
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 0.5;
      for (const val of [-1, 0, 1]) {
        const gy = graphCy - val * (graphH / 2);
        ctx.beginPath();
        ctx.moveTo(graphLeft, gy);
        ctx.lineTo(graphRight, gy);
        ctx.stroke();
      }

      // Grid vertical lines (1s intervals)
      for (let s = 0; s <= TOTAL_TIME; s++) {
        const gx = graphLeft + (s / TOTAL_TIME) * graphW;
        ctx.beginPath();
        ctx.moveTo(gx, graphTop);
        ctx.lineTo(gx, graphBottom);
        ctx.stroke();
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

      // Y-axis labels
      ctx.fillStyle = TEXT_COLOR;
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('1', graphLeft - 4, graphTop + 4);
      ctx.fillText('0', graphLeft - 4, graphCy + 4);
      ctx.fillText('-1', graphLeft - 4, graphBottom + 4);

      // Draw graph up to current time
      ctx.strokeStyle = GRAPH_COLOR;
      ctx.lineWidth = 2;
      ctx.beginPath();
      const tClamped = Math.min(t, TOTAL_TIME);
      const steps = Math.floor((tClamped / TOTAL_TIME) * graphW);
      for (let i = 0; i <= steps; i++) {
        const ti = (i / graphW) * TOTAL_TIME;
        const gx = graphLeft + i;
        const val = Math.sin(SPEED * ti);
        const gy = graphCy - val * (graphH / 2);
        if (i === 0) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.stroke();

      // Graph marker
      if (t > 0 && tClamped <= TOTAL_TIME) {
        const markerX = graphLeft + (tClamped / TOTAL_TIME) * graphW;
        const markerVal = Math.sin(SPEED * tClamped);
        const markerY = graphCy - markerVal * (graphH / 2);

        ctx.fillStyle = GRAPH_COLOR;
        ctx.beginPath();
        ctx.arc(markerX, markerY, 4, 0, 2 * Math.PI);
        ctx.fill();

        // Dotted connector from bob through separator to graph marker
        ctx.strokeStyle = GRAPH_COLOR;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.moveTo(bobX, bobY);
        ctx.lineTo(bobX, sepY);
        ctx.lineTo(markerX, sepY);
        ctx.lineTo(markerX, markerY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
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
        tRef.current += dt;
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
