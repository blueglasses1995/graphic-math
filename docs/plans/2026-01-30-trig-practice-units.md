# 三角関数 実践編 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 6 practice units to the trigonometry category: 3 physics applications (waves, circular motion, vibration) and 3 formula visualizations (double-angle, half-angle, triple-angle).

**Architecture:** Each unit follows Template v4 (Hook → Touch → Example → Example → Predict → Alternate → Summary). Each needs a dedicated Canvas scene component in `apps/web/src/components/scene/`. Tutorial definitions go in `packages/tutorials/src/trigonometry/`. Scene routing goes through `renderScene()` in `TutorialPage.tsx`.

**Tech Stack:** React, HTML5 Canvas, TypeScript, `@learnmath/tutorials` package, `@learnmath/core` (Vector3)

---

## Context for Implementer

### Existing patterns

- **Canvas scene components** live in `apps/web/src/components/scene/`. See `PendulumScene.tsx` and `TrigGraphScene.tsx` for the pattern: `useRef<HTMLCanvasElement>`, `requestAnimationFrame` loop, `useTutorialStore((s) => s.isPlaying)` to control animation, `window.devicePixelRatio` for HiDPI.
- **Tutorial definitions** live in `packages/tutorials/src/trigonometry/`. Export a `Tutorial` object with `steps: TutorialStep[]`. Each step has `customScene` string that maps to a component in `renderScene()`.
- **Scene routing** in `apps/web/src/pages/TutorialPage.tsx:13-38`: `renderScene()` switch on `customScene` string.
- **Tutorial registration**: Export from `packages/tutorials/src/trigonometry/index.ts`, add to `trigonometryCategory.tutorials` array.
- **After adding tutorials**: Must run `pnpm --filter @learnmath/tutorials build` to update dist.

### Color constants (reuse)

```
BG: '#0f172a', GRID: '#334155', AXIS: '#64748b', TEXT: '#cbd5e1'
COS/RED: '#ff4444', SIN/GREEN: '#44ff44', CIRCLE: '#8888ff'
POINT: '#ffffff', YELLOW: '#fbbf24'
```

### Template v4 step structure

Each tutorial has 7 steps: hook (animation), touch (interactive), example-1 (explanation), example-2 (explanation), predict (quiz), alternate (explanation), summary (interactive).

---

## Task 1: WaveScene Component

**Files:**
- Create: `apps/web/src/components/scene/WaveScene.tsx`

**Description:** Canvas component showing two sine waves being superimposed. Top panel: two individual waves (different colors). Bottom panel: their sum. Slider-like animation that sweeps through time. Shows constructive/destructive interference.

**Step 1: Create WaveScene.tsx**

```tsx
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
```

**Step 2: Typecheck**

Run: `npx tsc --project apps/web/tsconfig.json --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add apps/web/src/components/scene/WaveScene.tsx
git commit -m "feat(web): add WaveScene component for wave superposition"
```

---

## Task 2: CircularMotionScene Component

**Files:**
- Create: `apps/web/src/components/scene/CircularMotionScene.tsx`

**Description:** Canvas component showing a point moving in a circle (like a ferris wheel car). Right panel shows the Y-coordinate traced as sin graph in real time — demonstrating that circular motion projected onto one axis = sin wave.

**Step 1: Create CircularMotionScene.tsx**

```tsx
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
      const graphW = w * 0.6;

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
```

**Step 2: Typecheck**

Run: `npx tsc --project apps/web/tsconfig.json --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add apps/web/src/components/scene/CircularMotionScene.tsx
git commit -m "feat(web): add CircularMotionScene for circular motion → sin projection"
```

---

## Task 3: SpringScene Component

**Files:**
- Create: `apps/web/src/components/scene/SpringScene.tsx`

**Description:** Canvas showing a spring-mass system oscillating vertically. Right side traces displacement as sin graph. Shows how SHM (simple harmonic motion) = sin.

**Step 1: Create SpringScene.tsx**

```tsx
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
      const graphAreaW = w * 0.65;

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
        const yStart = springTop + (i / coils) * springLen;
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
```

**Step 2: Typecheck**

Run: `npx tsc --project apps/web/tsconfig.json --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add apps/web/src/components/scene/SpringScene.tsx
git commit -m "feat(web): add SpringScene for spring-mass SHM visualization"
```

---

## Task 4: DoubleAngleScene Component

**Files:**
- Create: `apps/web/src/components/scene/DoubleAngleScene.tsx`

**Description:** Canvas showing unit circle with angle θ and angle 2θ simultaneously. Below: graphs of sin(θ), sin(2θ), cos(θ), cos(2θ) overlaid. Animates θ from 0→2π. Shows visually that sin(2θ) = 2sin(θ)cos(θ) and cos(2θ) = cos²θ - sin²θ.

**Step 1: Create DoubleAngleScene.tsx**

```tsx
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
const ORIGINAL_COS = '#ff4444';

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
```

**Note:** This component takes `multiplier` and `label` props, reusable for double-angle (2, '2θ'), triple-angle (3, '3θ'), and half-angle (0.5, 'θ/2').

**Step 2: Typecheck**

Run: `npx tsc --project apps/web/tsconfig.json --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add apps/web/src/components/scene/DoubleAngleScene.tsx
git commit -m "feat(web): add DoubleAngleScene for multi-angle formula visualization"
```

---

## Task 5: Register scene components in TutorialPage

**Files:**
- Modify: `apps/web/src/pages/TutorialPage.tsx:1-38`

**Step 1: Add imports and switch cases**

Add to imports (after existing scene imports):
```tsx
import WaveScene from '@/components/scene/WaveScene';
import CircularMotionScene from '@/components/scene/CircularMotionScene';
import SpringScene from '@/components/scene/SpringScene';
import DoubleAngleScene from '@/components/scene/DoubleAngleScene';
```

Add to `renderScene()` switch before `default:`:
```tsx
    case 'wave-superposition':
      return <WaveScene />;
    case 'circular-motion':
      return <CircularMotionScene />;
    case 'spring':
      return <SpringScene />;
    case 'double-angle':
      return <DoubleAngleScene multiplier={2} label="2θ" />;
    case 'half-angle':
      return <DoubleAngleScene multiplier={0.5} label="θ/2" />;
    case 'triple-angle':
      return <DoubleAngleScene multiplier={3} label="3θ" />;
```

**Step 2: Typecheck**

Run: `npx tsc --project apps/web/tsconfig.json --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add apps/web/src/pages/TutorialPage.tsx
git commit -m "feat(web): register practice scene components in TutorialPage"
```

---

## Task 6: Tutorial — 波の足し算（Wave Superposition）

**Files:**
- Create: `packages/tutorials/src/trigonometry/wave-superposition.ts`

**Description:** Physics practice unit. Shows how two sin waves combine. Constructive and destructive interference. Template v4.

**Step 1: Create tutorial**

```typescript
import { Tutorial } from '../types';

export const waveSuperpositionTutorial: Tutorial = {
  id: 'wave-superposition',
  title: '【実践】波の足し算',
  description: '2つのsin波を足すと、強め合ったり弱め合ったりする',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '2つの波が出会うとき',
      content:
        '2つのsin波が同時に存在するとき、何が起こるでしょうか？\n\n上のパネルに赤と緑の2つの波が見えます。下のパネルはその合計です。\n\n再生して、波が徐々にずれていく様子を見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '強め合いと弱め合い',
      content:
        '再生と一時停止を切り替えて、合成波の変化をじっくり観察してください。\n\n波が「大きくなる瞬間」と「消える瞬間」があるはずです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-constructive',
      title: '山 + 山 = 大きな山',
      content:
        '2つの波の山が重なると、合成波の山は2倍の高さになります。\n\nsin(x) + sin(x) = 2sin(x)\n\nこれを「強め合い（constructive interference）」と呼びます。\n\nスピーカーを2つ並べて同じ音を出すと音が大きくなるのはこの原理です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-destructive',
      title: '山 + 谷 = 消える',
      content:
        '一方の山がもう一方の谷と重なると、打ち消し合って合成波はゼロに近づきます。\n\nsin(x) + sin(x + π) = 0\n\nこれを「弱め合い（destructive interference）」と呼びます。\n\nノイズキャンセリングヘッドフォンはまさにこの原理。外の音波に逆位相の波をぶつけて消しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '2つの波の位相差がπ/2（90°）のとき、合成波はどうなるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '位相差π/2のとき、合成波は？',
        options: [
          { id: 'a', label: '完全に消える', correct: false },
          { id: 'b', label: '元の√2倍の振幅になる', correct: true },
          { id: 'c', label: '元の2倍の振幅になる', correct: false },
          { id: 'd', label: '波の形が崩れる', correct: false },
        ],
        explanation:
          '位相差π/2では、sin(x) + sin(x+π/2) = sin(x) + cos(x) = √2 · sin(x + π/4)。振幅は√2倍（約1.41倍）になり、位相がπ/4だけずれます。完全な強め合い（2倍）でも弱め合い（0）でもない、中間の状態です。',
      },
    },
    {
      id: 'alternate',
      title: '身近な波の重ね合わせ',
      content:
        '水面に石を2つ投げると、波紋が重なって複雑な模様ができます。あれも波の足し算です。\n\nギターの弦を弾くとき、基本音と倍音（周波数が2倍、3倍...）が同時に鳴り、それぞれの楽器特有の「音色」が生まれます。\n\nこのように、複雑に見える波も「sinの足し算」で分解できます。これがフーリエ解析の出発点です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '波の重ね合わせ: 2つのsin波を足すと、位相差によって強め合い（大きくなる）や弱め合い（消える）が起きます。\n\nよくある誤解: 波は足すと必ず大きくなると思うこと。逆位相なら完全に消えます。\n\n音、光、電波、水面波...すべての波にこの法則が適用されます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'wave-superposition',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
```

**Step 2: Typecheck**

Run: `npx tsc --project packages/tutorials/tsconfig.json --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add packages/tutorials/src/trigonometry/wave-superposition.ts
git commit -m "feat(trig): add wave superposition practice tutorial"
```

---

## Task 7: Tutorial — 円運動とsin（Circular Motion）

**Files:**
- Create: `packages/tutorials/src/trigonometry/circular-motion.ts`

**Step 1: Create tutorial**

```typescript
import { Tutorial } from '../types';

export const circularMotionTutorial: Tutorial = {
  id: 'circular-motion',
  title: '【実践】円運動とsin',
  description: '円を回る点のY座標を追跡すると、sinの波が現れる',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '観覧車の高さ',
      content:
        '観覧車に乗っている人の高さは、時間とともにどう変わるでしょうか？\n\n左の円が観覧車、右のグラフがその人のY座標（高さ）の変化です。\n\n再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '投影を観察しよう',
      content:
        '再生と一時停止を切り替えて、円上の点の位置とグラフの対応をじっくり見てください。\n\n黄色い点が円の上半分にいるとき、グラフはどうなっていますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-top',
      title: '真上 = sinの山',
      content:
        '点が円の一番上（90°）にいるとき、Y座標は1で最大。これがsinの山です。\n\n観覧車の一番高い位置ですね。この瞬間、横方向（cos）はゼロ。真上にいるから横の距離はありません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-side',
      title: '真横 = sinがゼロを通過',
      content:
        '点が真横（0°や180°）にいるとき、Y座標はゼロ。sinのグラフがゼロを横切る瞬間です。\n\nただし0°→90°では上昇中、180°→270°では下降中。ゼロを通る速さが最大の瞬間でもあります。\n\n物理では、この「ゼロを通る瞬間」が速度最大の点です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '円運動の速さを2倍にすると、sinグラフはどう変わるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '角速度を2倍にすると？',
        options: [
          { id: 'a', label: '波の高さ（振幅）が2倍になる', correct: false },
          { id: 'b', label: '波の幅（周期）が半分になる', correct: true },
          { id: 'c', label: 'グラフが上にずれる', correct: false },
          { id: 'd', label: '何も変わらない', correct: false },
        ],
        explanation:
          '速く回ると、同じ時間に2周します。つまり波が2倍「詰まる」= 周期が半分。振幅（山の高さ）は変わりません。sin(2ωt) は sin(ωt) と同じ高さの波ですが、2倍速く振動します。',
      },
    },
    {
      id: 'alternate',
      title: '惑星の見かけの動き',
      content:
        '太陽系を横から見ると、惑星は円軌道上を回っています。地球から見た惑星の位置の変化は、まさに円運動の射影（sin/cos）です。\n\nガリレオが木星の衛星を観測したとき、衛星が「左右に行ったり来たり」しているように見えたのは、円軌道をほぼ真横から見ていたから。彼が見ていたのはsinカーブだったのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '等速円運動の射影（影）= sin/cos波。これが三角関数と物理を結ぶ最も基本的なつながりです。\n\nよくある誤解: sinは「三角形だけ」の関数だと思うこと。実は回転運動を記述するために最も自然な関数です。\n\n観覧車、惑星、回転する機械部品...円運動を見つけたら、そこにsinがあります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'circular-motion',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
```

**Step 2: Typecheck + Commit**

```bash
npx tsc --project packages/tutorials/tsconfig.json --noEmit
git add packages/tutorials/src/trigonometry/circular-motion.ts
git commit -m "feat(trig): add circular motion practice tutorial"
```

---

## Task 8: Tutorial — ばねとsin（Spring Vibration）

**Files:**
- Create: `packages/tutorials/src/trigonometry/spring-vibration.ts`

**Step 1: Create tutorial**

```typescript
import { Tutorial } from '../types';

export const springVibrationTutorial: Tutorial = {
  id: 'spring-vibration',
  title: '【実践】ばねとsin',
  description: 'ばねに吊るした重りの振動はsinそのもの',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: 'ばねが描く波',
      content:
        'ばねに重りを付けて引っ張り、手を離す。重りは上下に揺れます。\n\nその変位（平衡点からのずれ）をグラフにすると...sinの波が現れます。\n\n再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ばねを観察しよう',
      content:
        '再生と一時停止を使って、重りの位置とグラフの対応を確認してください。\n\n重りが一番下にいるとき、グラフのどこにいますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-extreme',
      title: '最も伸びた瞬間 = sinの山',
      content:
        '重りが最も下がったとき、変位は最大（+1）。sinの山です。\n\nこの瞬間、重りは一瞬止まっています。速度ゼロ。\n\nsinの山では微分（cos）がゼロ。数学と物理が一致しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-equilibrium',
      title: '平衡点通過 = 最速の瞬間',
      content:
        '重りが平衡点を通るとき、変位はゼロ。sinがゼロを横切る瞬間です。\n\nこの瞬間が最も速い。なぜか？\n\nsinの変化率（微分）= cosで、cos(0) = 1は最大値。変位がゼロのとき速度が最大、変位が最大のとき速度がゼロ。\n\n変位 = sin(ωt)、速度 = ωcos(ωt)、加速度 = -ω²sin(ωt)。すべてsinとcosで書けます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'ばねを硬いものに交換すると（ばね定数を大きくすると）、振動はどう変わるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ばねを硬くすると？',
        options: [
          { id: 'a', label: '振幅が大きくなる', correct: false },
          { id: 'b', label: '周期が短くなる（速く揺れる）', correct: true },
          { id: 'c', label: '振動が止まる', correct: false },
          { id: 'd', label: '周期が長くなる（ゆっくり揺れる）', correct: false },
        ],
        explanation:
          '硬いばねは強い力で元に戻すため、振動が速くなります。周期 T = 2π√(m/k) なので、ばね定数kが大きいほど周期は短くなります。振幅は初期条件（どれだけ引っ張ったか）で決まり、ばねの硬さとは無関係です。',
      },
    },
    {
      id: 'alternate',
      title: '地震計もばね',
      content:
        '地震計の中にはばねと重りが入っています。地面が揺れると重りが振動し、その変位を記録します。\n\n記録されるのはsinの波（地震波）。P波、S波、表面波、すべてsinの重ね合わせです。\n\n楽器の弦もばねと同じ原理。弦の振動 = sin波 = 音。ギター、ピアノ、バイオリン...すべてのばねの振動です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '単振動（ばね・振り子）の変位はsin(ωt)で記述されます。速度はcos(ωt)、加速度は-sin(ωt)。三角関数は振動現象の言語です。\n\nよくある誤解: 振動は「減衰して止まる」と思うこと。理想的な単振動は永遠に続きます。減衰は空気抵抗や摩擦による追加効果です。\n\nもう一度ばねの動きを観察してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
```

**Step 2: Typecheck + Commit**

```bash
npx tsc --project packages/tutorials/tsconfig.json --noEmit
git add packages/tutorials/src/trigonometry/spring-vibration.ts
git commit -m "feat(trig): add spring vibration practice tutorial"
```

---

## Task 9: Tutorial — 2倍角の公式（Double Angle）

**Files:**
- Create: `packages/tutorials/src/trigonometry/double-angle.ts`

**Step 1: Create tutorial**

```typescript
import { Tutorial } from '../types';

export const doubleAngleTutorial: Tutorial = {
  id: 'double-angle',
  title: '【実践】2倍角の公式',
  description: 'sin(2θ)とcos(2θ)をグラフで見ると公式が見える',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '角度を2倍にすると',
      content:
        'θが動くとき、2θはその2倍の速さで動きます。\n\n黄色がθ、紫が2θの動き。下のグラフではsin(θ)（薄緑）とsin(2θ)（紫）を重ねています。\n\n再生して波の違いを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '速さの違いを感じよう',
      content:
        '再生と一時停止で、2つの点の動きの違いを確認してください。\n\nθが半周（180°）したとき、2θはどこにいますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-sin2',
      title: 'sin(2θ) = 2sin(θ)cos(θ)',
      content:
        'グラフを見ると、sin(2θ)はsin(θ)の2倍の周波数（2倍速い振動）です。\n\nでも振幅は同じ1。なぜ「2倍」が付くのに高さが変わらないのか？\n\nsin(2θ) = 2·sin(θ)·cos(θ)\n\n2倍するけど、sin(θ)とcos(θ)を掛けている。掛け算は値を「小さくする」方向にも働くので、結果的に-1〜1に収まります。\n\n具体例: θ=45°のとき sin(90°) = 1 = 2 × 0.71 × 0.71 ✓',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-cos2',
      title: 'cos(2θ) = cos²θ − sin²θ',
      content:
        'cos(2θ)はcos²θとsin²θの差です。\n\n具体例: θ=60°\ncos(120°) = cos²(60°) − sin²(60°)\n= 0.25 − 0.75 = −0.5 ✓\n\ncos²θ + sin²θ = 1 を使うと別の形にもなります:\ncos(2θ) = 2cos²θ − 1\ncos(2θ) = 1 − 2sin²θ\n\n同じ公式の3つの顔です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'sin(2θ) = 2sin(θ)cos(θ) を使って考えてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(2θ) が最大値1をとるのは θ = ？',
        options: [
          { id: 'a', label: 'θ = 90°', correct: false },
          { id: 'b', label: 'θ = 45°', correct: true },
          { id: 'c', label: 'θ = 60°', correct: false },
          { id: 'd', label: 'θ = 30°', correct: false },
        ],
        explanation:
          'sin(2θ) = 1 となるのは 2θ = 90° のとき、つまり θ = 45°。\n\n2sin(45°)cos(45°) = 2 × 0.71 × 0.71 = 2 × 0.5 = 1 ✓\n\nsin(θ)とcos(θ)が等しくなる45°で、その積が最大になります。',
      },
    },
    {
      id: 'alternate',
      title: '回転行列との関係',
      content:
        '線形代数で学ぶ回転行列 R(θ) を2回かけると R(2θ) になります。\n\nR(θ)·R(θ) = R(2θ)\n\nこの行列の掛け算を成分で書き下すと、2倍角の公式がそのまま出てきます。\n\nつまり2倍角の公式 = 「2回回転すること」の数式表現。公式が覚えにくくても、「2回回す」と考えれば自然に導けます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'sin(2θ) = 2sin(θ)cos(θ)\ncos(2θ) = cos²θ − sin²θ\n\n2倍角は「2倍速い波」。周波数が2倍で振幅は同じ。公式は「回転を2回重ねる」ことの表現です。\n\nよくある誤解: sin(2θ) = 2sin(θ) だと思うこと。sin(60°) = 0.87 だけど sin(120°) = 0.87 ≠ 2 × 0.87。cosが掛かっています。\n\nもう一度アニメーションで確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'double-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
```

**Step 2: Typecheck + Commit**

```bash
npx tsc --project packages/tutorials/tsconfig.json --noEmit
git add packages/tutorials/src/trigonometry/double-angle.ts
git commit -m "feat(trig): add double angle formula practice tutorial"
```

---

## Task 10: Tutorial — 半角の公式（Half Angle）

**Files:**
- Create: `packages/tutorials/src/trigonometry/half-angle.ts`

**Step 1: Create tutorial**

```typescript
import { Tutorial } from '../types';

export const halfAngleTutorial: Tutorial = {
  id: 'half-angle',
  title: '【実践】半角の公式',
  description: 'sin(θ/2)とcos(θ/2)はゆっくりした波。2倍角の逆を辿る',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '角度を半分にすると',
      content:
        'θの半分の角度 θ/2 は、θの半分の速さで動きます。\n\n黄色がθ、紫がθ/2。下のグラフではsin(θ)（薄緑）とsin(θ/2)（紫）を比較しています。\n\n再生して波の違いを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ゆっくりな波を観察',
      content:
        '再生と一時停止で確認してください。\n\nθが一周（360°）したとき、θ/2はどこまで進んでいますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-derive',
      title: '2倍角から半角を導く',
      content:
        '2倍角の公式 cos(2α) = 1 − 2sin²(α) を変形します。\n\nα = θ/2 とすると:\ncos(θ) = 1 − 2sin²(θ/2)\n\n整理すると:\nsin²(θ/2) = (1 − cos θ) / 2\nsin(θ/2) = ±√((1 − cos θ) / 2)\n\n同様に:\ncos²(θ/2) = (1 + cos θ) / 2\ncos(θ/2) = ±√((1 + cos θ) / 2)\n\n半角の公式は2倍角の「裏返し」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-concrete',
      title: '具体例: sin(15°)',
      content:
        'sin(15°) = sin(30°/2) を半角公式で計算:\n\nsin²(15°) = (1 − cos 30°) / 2\n= (1 − 0.866) / 2\n= 0.134 / 2 = 0.067\n\nsin(15°) = √0.067 ≈ 0.259\n\n検算: 電卓で sin(15°) = 0.2588... ✓\n\n30°のcosさえ知っていれば、15°のsinが求められる。それが半角公式の力です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'cos(θ/2) = ±√((1 + cos θ) / 2) を使って考えてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cos(45°) = cos(90°/2) は？',
        options: [
          { id: 'a', label: '0.5', correct: false },
          { id: 'b', label: '√(1/2) ≈ 0.707', correct: true },
          { id: 'c', label: '√(3)/2 ≈ 0.866', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          'cos(45°) = √((1 + cos 90°) / 2) = √((1 + 0) / 2) = √(1/2) ≈ 0.707\n\ncos 90° = 0 なので、式がとてもシンプルになります。これは単位円上で45°の点の x 座標と一致しますね。',
      },
    },
    {
      id: 'alternate',
      title: '積分との関係',
      content:
        '半角公式は積分でよく使います。\n\n∫sin²(x)dx を計算するとき、sin²(x) = (1 − cos 2x)/2 と変形すると積分が簡単になります。\n\nこれは半角公式を θ/2 → x、θ → 2x と読み替えたものです。\n\n微積分を学ぶとき、半角公式は「覚える公式」ではなく「自然に必要になる変形」として再登場します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'sin(θ/2) = ±√((1−cosθ)/2)\ncos(θ/2) = ±√((1+cosθ)/2)\n\n半角公式は2倍角公式の逆。cosの値から半分の角度のsin/cosが求められます。\n\nよくある誤解: sin(θ/2) = sin(θ)/2 だと思うこと。sin(90°)/2 = 0.5 だけど sin(45°) ≈ 0.707。半分にはなりません。\n\nアニメーションで、θ/2の波がθの波の半分の速さであることを再確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'half-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
```

**Step 2: Typecheck + Commit**

```bash
npx tsc --project packages/tutorials/tsconfig.json --noEmit
git add packages/tutorials/src/trigonometry/half-angle.ts
git commit -m "feat(trig): add half angle formula practice tutorial"
```

---

## Task 11: Tutorial — 3倍角の公式（Triple Angle）

**Files:**
- Create: `packages/tutorials/src/trigonometry/triple-angle.ts`

**Step 1: Create tutorial**

```typescript
import { Tutorial } from '../types';

export const tripleAngleTutorial: Tutorial = {
  id: 'triple-angle',
  title: '【実践】3倍角の公式',
  description: 'sin(3θ)とcos(3θ)は3倍速い波。パターンを見つける',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '3倍速の波',
      content:
        'θを3倍にした3θは、3倍の速さで動きます。\n\n黄色がθ、紫が3θ。sin(3θ)の波はsin(θ)の3倍詰まっています。\n\n再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '3つの山を数えよう',
      content:
        'sin(θ)が1周する間に、sin(3θ)は何周しますか？\n\n再生と一時停止で確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-sin3',
      title: 'sin(3θ) = 3sinθ − 4sin³θ',
      content:
        '3倍角の公式は2倍角を応用して導けます:\nsin(3θ) = sin(2θ + θ)\n= sin(2θ)cos(θ) + cos(2θ)sin(θ)\n= 2sinθcos²θ + (1−2sin²θ)sinθ\n= 2sinθ(1−sin²θ) + sinθ − 2sin³θ\n= 3sinθ − 4sin³θ\n\n具体例: θ=30°\nsin(90°) = 1\n3sin(30°) − 4sin³(30°) = 3(0.5) − 4(0.125) = 1.5 − 0.5 = 1 ✓',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-cos3',
      title: 'cos(3θ) = 4cos³θ − 3cosθ',
      content:
        '同様に:\ncos(3θ) = 4cos³θ − 3cosθ\n\n具体例: θ=60°\ncos(180°) = −1\n4cos³(60°) − 3cos(60°) = 4(0.125) − 3(0.5) = 0.5 − 1.5 = −1 ✓\n\n面白い対称性に気づきましたか？\nsin(3θ) = 3sinθ − 4sin³θ\ncos(3θ) = 4cos³θ − 3cosθ\n\n係数が 3 と 4 で逆順に現れます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'sin(3θ) = 3sinθ − 4sin³θ を使って答えてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin(3×30°) = sin(90°) = 1。では sin(3×60°) = sin(180°) は？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '−1', correct: false },
          { id: 'd', label: '0.5', correct: false },
        ],
        explanation:
          'sin(180°) = 0。\n\n公式で確認: 3sin(60°) − 4sin³(60°) = 3(0.866) − 4(0.650) = 2.598 − 2.598 = 0 ✓\n\nsin(60°) ≈ 0.866 のように中途半端な値でも、3倍角では0°, 90°, 180°のようなきれいな値になることがあります。',
      },
    },
    {
      id: 'alternate',
      title: 'チェビシェフ多項式',
      content:
        '2倍角 → 3倍角 → 4倍角...と続けると、cos(nθ) は cosθ の n次多項式で表せることがわかります。\n\ncos(2θ) = 2cos²θ − 1\ncos(3θ) = 4cos³θ − 3cosθ\ncos(4θ) = 8cos⁴θ − 8cos²θ + 1\n\nこれらを「チェビシェフ多項式」と呼びます。数値解析やフーリエ解析で重要な役割を果たします。\n\n三角関数の公式は孤立した事実ではなく、美しい数学の体系の一部です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'sin(3θ) = 3sinθ − 4sin³θ\ncos(3θ) = 4cos³θ − 3cosθ\n\n3倍角は2倍角の加法定理での展開から導けます。n倍角公式は美しいパターン（チェビシェフ多項式）に従います。\n\nよくある誤解: sin(3θ) = 3sin(θ) だと思うこと。sin は線形ではないので、3倍しても値は3倍にはなりません。\n\nアニメーションでθと3θの動きの違いをもう一度確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triple-angle',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
```

**Step 2: Typecheck + Commit**

```bash
npx tsc --project packages/tutorials/tsconfig.json --noEmit
git add packages/tutorials/src/trigonometry/triple-angle.ts
git commit -m "feat(trig): add triple angle formula practice tutorial"
```

---

## Task 12: Register all practice tutorials in index

**Files:**
- Modify: `packages/tutorials/src/trigonometry/index.ts`

**Step 1: Add exports and imports for all 6 new tutorials**

Update `packages/tutorials/src/trigonometry/index.ts`:

```typescript
export { unitCircleTutorial } from './unit-circle';
export { cosineTutorial } from './cosine';
export { sineTutorial } from './sine';
export { shadowJourneyTutorial } from './shadow-journey';
export { cosWaveTutorial } from './cos-wave';
export { sinWaveTutorial } from './sin-wave';
export { periodicityTutorial } from './periodicity';
export { pendulumTutorial } from './pendulum';
export { waveSuperpositionTutorial } from './wave-superposition';
export { circularMotionTutorial } from './circular-motion';
export { springVibrationTutorial } from './spring-vibration';
export { doubleAngleTutorial } from './double-angle';
export { halfAngleTutorial } from './half-angle';
export { tripleAngleTutorial } from './triple-angle';

import { TutorialCategory } from '../types';
import { unitCircleTutorial } from './unit-circle';
import { cosineTutorial } from './cosine';
import { sineTutorial } from './sine';
import { shadowJourneyTutorial } from './shadow-journey';
import { cosWaveTutorial } from './cos-wave';
import { sinWaveTutorial } from './sin-wave';
import { periodicityTutorial } from './periodicity';
import { pendulumTutorial } from './pendulum';
import { waveSuperpositionTutorial } from './wave-superposition';
import { circularMotionTutorial } from './circular-motion';
import { springVibrationTutorial } from './spring-vibration';
import { doubleAngleTutorial } from './double-angle';
import { halfAngleTutorial } from './half-angle';
import { tripleAngleTutorial } from './triple-angle';

export const trigonometryCategory: TutorialCategory = {
  id: 'trigonometry',
  name: '三角関数',
  description: '単位円、波形、回転を使って三角関数を視覚的に理解する',
  tutorials: [
    // 基礎編
    unitCircleTutorial,
    cosineTutorial,
    sineTutorial,
    shadowJourneyTutorial,
    cosWaveTutorial,
    sinWaveTutorial,
    periodicityTutorial,
    pendulumTutorial,
    // 実践編 — 物理応用
    waveSuperpositionTutorial,
    circularMotionTutorial,
    springVibrationTutorial,
    // 実践編 — 公式の視覚化
    doubleAngleTutorial,
    halfAngleTutorial,
    tripleAngleTutorial,
  ],
};
```

**Step 2: Typecheck all packages + build + rebuild tutorials dist**

```bash
npx tsc --project packages/tutorials/tsconfig.json --noEmit
npx tsc --project apps/web/tsconfig.json --noEmit
pnpm --filter @learnmath/tutorials build
pnpm --filter @learnmath/core test
```

**Step 3: Commit**

```bash
git add packages/tutorials/src/trigonometry/index.ts
git commit -m "feat(trig): register 6 practice tutorials in trigonometry category"
```

---

## Task 13: Final build verification and commit

**Step 1: Full build**

```bash
pnpm --filter @learnmath/web build
```

**Step 2: Verify clean working tree**

```bash
git status
```

Expected: `nothing to commit, working tree clean`

**Step 3: If any uncommitted changes remain, commit them**

```bash
git add -A
git commit -m "chore: final integration for trig practice tutorials"
```
