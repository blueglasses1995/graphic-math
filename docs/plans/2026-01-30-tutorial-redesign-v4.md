# Tutorial System Redesign v4 — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the tutorial system to be animation-driven with interactive elements (drag, slider, quiz), following Template v4 (Hook → Touch → Example → Predict → Experience → Alternate View → Summary). Start with 8 trigonometry units.

**Architecture:** Extend `TutorialStep` with new step types (interactive, quiz, sandbox). Create new interactive scene components (InteractiveUnitCircle with drag, AngleSlider, QuizOverlay). Rewrite all 4 trig tutorials into 8 focused units each following Template v4. Each unit has exactly 1 main animation and 1 core insight.

**Tech Stack:** React 18, TypeScript, HTML5 Canvas (for 2D trig scenes), React Three Fiber (for 3D LA scenes), Zustand, Tailwind CSS.

---

## Scope Overview

### What Changes

1. **Type system:** Add `stepType`, `quiz`, `interactiveConfig` to `TutorialStep`
2. **New components:** `InteractiveUnitCircle` (drag point), `AngleSlider`, `QuizOverlay`, `PendulumScene`
3. **Tutorial content:** Replace 4 trig tutorials with 8 new ones following v4 template
4. **TutorialPage:** Support new step types (interactive, quiz, sandbox)
5. **TutorialControls:** Integrate with quiz state and slider interactions

### What Stays

- Core math library (@learnmath/core) — unchanged
- Linear algebra tutorials — unchanged (redesign in separate plan)
- Glossary system — add a few entries, but keep architecture
- Scene3D, Vector3D, Grid3D, Axes3D, Circle3D, TransformableGroup — unchanged
- App routing, HomePage, SandboxPage — unchanged
- Mobile app — unchanged

---

## Task 1: Extend Tutorial Type System

**Files:**
- Modify: `packages/tutorials/src/types.ts`

**Step 1: Add new types to TutorialStep**

Add the following to `packages/tutorials/src/types.ts`:

```typescript
import { Matrix3, Vector3 } from '@learnmath/core';

export type StepType = 'explanation' | 'interactive' | 'quiz' | 'animation';

export interface QuizOption {
  id: string;
  label: string;
  correct: boolean;
}

export interface QuizConfig {
  question: string;
  options: QuizOption[];
  explanation: string; // shown after answer
}

export interface InteractiveConfig {
  type: 'drag-unit-circle' | 'angle-slider' | 'parameter-sliders';
  /** For angle-slider: initial angle in radians */
  initialAngle?: number;
  /** For parameter-sliders: which params to show */
  parameters?: { name: string; min: number; max: number; step: number; initial: number }[];
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  sceneConfig: SceneConfig;
  interactive: boolean;
  nextCondition?: 'click' | 'timeout' | 'interaction';
  duration?: number;
  customScene?: string;
  /** NEW: Step type determines rendering behavior */
  stepType?: StepType;
  /** NEW: Quiz config for quiz steps */
  quiz?: QuizConfig;
  /** NEW: Interactive config for drag/slider steps */
  interactiveConfig?: InteractiveConfig;
}
```

Keep all existing interfaces (SceneConfig, VectorConfig, CircleConfig, Tutorial, TutorialCategory) unchanged.

**Step 2: Run typecheck**

Run: `cd /Users/toshikimatsukuma/WorkSpace/LearnMath && pnpm --filter @learnmath/tutorials tsc --noEmit`
Expected: PASS (new fields are optional, so no existing code breaks)

**Step 3: Commit**

```bash
git add packages/tutorials/src/types.ts
git commit -m "feat(types): add StepType, QuizConfig, InteractiveConfig to TutorialStep"
```

---

## Task 2: Build InteractiveUnitCircle Component

**Files:**
- Create: `apps/web/src/components/scene/InteractiveUnitCircle.tsx`

This is the core interactive component. User drags a point around the unit circle; cos/sin projections update in real-time. Used for "触ってみる" (Touch) steps.

**Step 1: Create the component**

```typescript
// apps/web/src/components/scene/InteractiveUnitCircle.tsx
import { useRef, useEffect, useCallback, useState } from 'react';

const BG = '#0f172a';
const CIRCLE = '#8888ff';
const COS_COLOR = '#ff4444';
const SIN_COLOR = '#44ff44';
const GRID = '#334155';
const AXIS = '#64748b';
const TEXT = '#cbd5e1';
const POINT = '#ffffff';
const DOTTED = '#94a3b8';

interface Props {
  /** If provided, angle is controlled externally (for slider mode) */
  angle?: number;
  /** Callback when user drags the point */
  onAngleChange?: (angle: number) => void;
  /** Show cos projection */
  showCos?: boolean;
  /** Show sin projection */
  showSin?: boolean;
  /** Show quadrant labels */
  showQuadrants?: boolean;
  /** Highlight current quadrant */
  highlightQuadrant?: number;
}

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

  const getAngleFromMouse = useCallback((canvas: HTMLCanvasElement, clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const mx = clientX - rect.left - cx;
    const my = -(clientY - rect.top - cy); // flip Y
    let a = Math.atan2(my, mx);
    if (a < 0) a += 2 * Math.PI;
    return a;
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const a = getAngleFromMouse(canvasRef.current!, e.clientX, e.clientY);
    if (onAngleChange) onAngleChange(a);
    else setInternalAngle(a);
  }, [getAngleFromMouse, onAngleChange]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const a = getAngleFromMouse(canvasRef.current!, e.clientX, e.clientY);
    if (onAngleChange) onAngleChange(a);
    else setInternalAngle(a);
  }, [getAngleFromMouse, onAngleChange]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

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
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Clear
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    const padding = 30;
    const radius = Math.min(w, h) / 2 - padding;

    // Quadrant highlighting
    if (showQuadrants && highlightQuadrant) {
      ctx.fillStyle = 'rgba(99, 102, 241, 0.08)';
      const startAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
      const start = startAngles[highlightQuadrant - 1];
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, -start - Math.PI / 2, -(start + Math.PI / 2), true);
      // Note: canvas Y is inverted, so we negate angles
      ctx.closePath();
      ctx.fill();
    }

    // Quadrant labels
    if (showQuadrants) {
      ctx.fillStyle = '#475569';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      const offset = radius * 0.65;
      ctx.fillText('第1象限', cx + offset, cy - offset);
      ctx.fillText('第2象限', cx - offset, cy - offset);
      ctx.fillText('第3象限', cx - offset, cy + offset);
      ctx.fillText('第4象限', cx + offset, cy + offset);
    }

    // Grid
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(cx - radius, cy); ctx.lineTo(cx + radius, cy);
    ctx.moveTo(cx, cy - radius); ctx.lineTo(cx, cy + radius);
    ctx.stroke();

    // Axes
    ctx.strokeStyle = AXIS;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, cy); ctx.lineTo(w - padding, cy);
    ctx.moveTo(cx, padding); ctx.lineTo(cx, h - padding);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = TEXT;
    ctx.font = '11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('1', cx + radius, cy + 14);
    ctx.fillText('-1', cx - radius, cy + 14);
    ctx.fillText('1', cx + 14, cy - radius + 4);
    ctx.fillText('-1', cx + 18, cy + radius + 4);

    // Circle
    ctx.strokeStyle = CIRCLE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Point position
    const px = cx + Math.cos(angle) * radius;
    const py = cy - Math.sin(angle) * radius;

    // Cos projection (red)
    if (showCos) {
      ctx.strokeStyle = DOTTED;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, cy); ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = COS_COLOR;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke();

      // Label
      ctx.fillStyle = COS_COLOR;
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`cos = ${Math.cos(angle).toFixed(2)}`, (cx + px) / 2, cy + 18);
    }

    // Sin projection (green)
    if (showSin) {
      ctx.strokeStyle = DOTTED;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(cx, py); ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = SIN_COLOR;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, py); ctx.stroke();

      // Label
      ctx.fillStyle = SIN_COLOR;
      ctx.font = '12px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`sin = ${Math.sin(angle).toFixed(2)}`, cx - 8, (cy + py) / 2);
    }

    // Radius line
    ctx.strokeStyle = POINT;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();

    // Point
    ctx.fillStyle = POINT;
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, 2 * Math.PI);
    ctx.fill();

    // Angle arc
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.2, 0, -angle, true);
    ctx.stroke();

    // Angle label
    const deg = ((angle * 180) / Math.PI).toFixed(0);
    ctx.fillStyle = '#fbbf24';
    ctx.font = '13px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`θ = ${deg}°`, cx + radius * 0.22 + 4, cy - 6);

    // Coordinate label at point
    ctx.fillStyle = TEXT;
    ctx.font = '11px monospace';
    ctx.textAlign = 'left';
    const labelX = px + 12;
    const labelY = py - 10;
    ctx.fillText(`(${Math.cos(angle).toFixed(2)}, ${Math.sin(angle).toFixed(2)})`, labelX, labelY);

    // "ドラッグしてみよう" hint
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('● をドラッグして角度を変えてみよう', cx, h - 8);
  }, [angle, showCos, showSin, showQuadrants, highlightQuadrant]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block cursor-grab active:cursor-grabbing"
      style={{ background: BG }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    />
  );
}
```

**Step 2: Verify it compiles**

Run: `cd /Users/toshikimatsukuma/WorkSpace/LearnMath && pnpm --filter web tsc --noEmit`
Expected: PASS

**Step 3: Commit**

```bash
git add apps/web/src/components/scene/InteractiveUnitCircle.tsx
git commit -m "feat(web): add InteractiveUnitCircle with drag interaction"
```

---

## Task 3: Build QuizOverlay Component

**Files:**
- Create: `apps/web/src/components/ui/QuizOverlay.tsx`

This component renders a multiple-choice question overlaid on the scene. Used for "予測" (Predict) steps.

**Step 1: Create the component**

```typescript
// apps/web/src/components/ui/QuizOverlay.tsx
import { useState } from 'react';
import { QuizConfig } from '@learnmath/tutorials';
import Button from './Button';

interface Props {
  quiz: QuizConfig;
  onComplete: (correct: boolean) => void;
}

export default function QuizOverlay({ quiz, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (optionId: string) => {
    if (answered) return;
    setSelected(optionId);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setAnswered(true);
    const correct = quiz.options.find((o) => o.id === selected)?.correct ?? false;
    // Don't auto-advance; let user read explanation then click next
    onComplete(correct);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10">
      <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4 space-y-4">
        <h3 className="text-lg font-semibold text-white">{quiz.question}</h3>
        <div className="space-y-2">
          {quiz.options.map((opt) => {
            let style = 'border-slate-600 hover:border-indigo-400';
            if (answered && selected === opt.id) {
              style = opt.correct
                ? 'border-green-400 bg-green-900/30'
                : 'border-red-400 bg-red-900/30';
            } else if (answered && opt.correct) {
              style = 'border-green-400 bg-green-900/20';
            } else if (selected === opt.id) {
              style = 'border-indigo-400 bg-indigo-900/20';
            }
            return (
              <button
                key={opt.id}
                className={`w-full text-left p-3 rounded border-2 text-gray-200 transition-colors ${style}`}
                onClick={() => handleSelect(opt.id)}
                disabled={answered}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {!answered && (
          <Button variant="primary" onClick={handleSubmit} disabled={!selected}>
            回答する
          </Button>
        )}
        {answered && (
          <div className="space-y-2">
            <p className="text-gray-300 text-sm leading-relaxed">{quiz.explanation}</p>
            <p className="text-xs text-gray-500">「次へ」をクリックして進みましょう</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

**Step 2: Verify it compiles**

Run: `pnpm --filter web tsc --noEmit`
Expected: PASS

**Step 3: Commit**

```bash
git add apps/web/src/components/ui/QuizOverlay.tsx
git commit -m "feat(web): add QuizOverlay component for prediction quizzes"
```

---

## Task 4: Build PendulumScene Component

**Files:**
- Create: `apps/web/src/components/scene/PendulumScene.tsx`

Canvas-based pendulum animation synced with a sin graph. Used for the physics application unit.

**Step 1: Create the component**

```typescript
// apps/web/src/components/scene/PendulumScene.tsx
import { useRef, useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store';

const BG = '#0f172a';
const ROPE_COLOR = '#94a3b8';
const BOB_COLOR = '#fbbf24';
const GRAPH_COLOR = '#44ff44';
const GRID = '#334155';
const AXIS = '#64748b';
const TEXT = '#cbd5e1';
const TRAIL_COLOR = 'rgba(251, 191, 36, 0.3)';

const SPEED = 1.5; // angular frequency

export default function PendulumScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isPlaying = useTutorialStore((s) => s.isPlaying);

  const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const t = timeRef.current;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, w, h);

    const halfH = h / 2;

    // --- Top panel: Pendulum ---
    const pivotX = w / 2;
    const pivotY = 40;
    const ropeLen = halfH - 80;
    const maxAngle = Math.PI / 4; // 45 degrees max swing
    const pendAngle = maxAngle * Math.sin(SPEED * t);
    const bobX = pivotX + Math.sin(pendAngle) * ropeLen;
    const bobY = pivotY + Math.cos(pendAngle) * ropeLen;

    // Pivot
    ctx.fillStyle = AXIS;
    ctx.fillRect(pivotX - 30, pivotY - 4, 60, 4);

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

    // Height reference line (at rest position)
    const restY = pivotY + ropeLen;
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(w * 0.2, restY);
    ctx.lineTo(w * 0.8, restY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Height indicator
    const displacement = Math.sin(pendAngle) * ropeLen; // horizontal displacement
    ctx.fillStyle = TEXT;
    ctx.font = '12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`変位 = ${(displacement / ropeLen).toFixed(2)}`, 20, halfH - 20);
    ctx.fillText('振り子', 20, 24);

    // Separator
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, halfH);
    ctx.lineTo(w, halfH);
    ctx.stroke();

    // --- Bottom panel: sin graph ---
    const gLeft = 50;
    const gRight = w - 20;
    const gTop = halfH + 30;
    const gBottom = h - 20;
    const gW = gRight - gLeft;
    const gH = gBottom - gTop;
    const gCy = gTop + gH / 2;

    // Grid
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 0.5;
    for (const v of [-1, 0, 1]) {
      const gy = gCy - v * (gH / 2);
      ctx.beginPath();
      ctx.moveTo(gLeft, gy);
      ctx.lineTo(gRight, gy);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = AXIS;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gLeft, gCy);
    ctx.lineTo(gRight, gCy);
    ctx.moveTo(gLeft, gTop);
    ctx.lineTo(gLeft, gBottom);
    ctx.stroke();

    // Labels
    ctx.fillStyle = TEXT;
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillText('1', gLeft - 4, gTop + 4);
    ctx.fillText('0', gLeft - 4, gCy + 4);
    ctx.fillText('-1', gLeft - 4, gBottom + 4);

    // Draw sin wave over time
    const totalTime = 10; // seconds of graph
    ctx.strokeStyle = GRAPH_COLOR;
    ctx.lineWidth = 2;
    ctx.beginPath();
    const drawUpTo = Math.min(t, totalTime);
    for (let i = 0; i <= gW; i++) {
      const tAtPixel = (i / gW) * totalTime;
      if (tAtPixel > drawUpTo) break;
      const val = Math.sin(SPEED * tAtPixel);
      const gx = gLeft + i;
      const gy = gCy - val * (gH / 2);
      if (i === 0) ctx.moveTo(gx, gy);
      else ctx.lineTo(gx, gy);
    }
    ctx.stroke();

    // Current position marker
    const markerX = gLeft + (drawUpTo / totalTime) * gW;
    const markerY = gCy - Math.sin(SPEED * t) * (gH / 2);
    if (markerX <= gRight) {
      // Connector line from pendulum bob to graph marker
      ctx.strokeStyle = BOB_COLOR;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      ctx.moveTo(bobX, halfH);
      ctx.lineTo(markerX, halfH);
      ctx.lineTo(markerX, markerY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = GRAPH_COLOR;
      ctx.beginPath();
      ctx.arc(markerX, markerY, 4, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Graph label
    ctx.fillStyle = GRAPH_COLOR;
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('sin(ωt) — 振り子の変位', gLeft, halfH + 18);
  }, []);

  const animate = useCallback((time: number) => {
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
      timeRef.current += dt;
    }
    lastTimeRef.current = time;

    draw(ctx, w, h);
    rafRef.current = requestAnimationFrame(animate);
  }, [draw, isPlaying]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
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

**Step 2: Verify it compiles**

Run: `pnpm --filter web tsc --noEmit`
Expected: PASS

**Step 3: Commit**

```bash
git add apps/web/src/components/scene/PendulumScene.tsx
git commit -m "feat(web): add PendulumScene with synchronized sin graph"
```

---

## Task 5: Update TutorialPage to Support New Step Types

**Files:**
- Modify: `apps/web/src/pages/TutorialPage.tsx`
- Modify: `apps/web/src/components/ui/TutorialControls.tsx`

**Step 1: Update TutorialPage**

Replace the scene rendering logic in `TutorialPage.tsx` to handle new step types and customScene values. The key changes:

1. Import `InteractiveUnitCircle`, `QuizOverlay`, `PendulumScene`
2. Add `renderScene()` that dispatches on `customScene` and `stepType`
3. When `stepType === 'quiz'`, overlay `QuizOverlay` on top of the scene
4. When `stepType === 'interactive'` and `interactiveConfig.type === 'drag-unit-circle'`, render `InteractiveUnitCircle`

```typescript
// Updated renderScene function in TutorialPage.tsx
import InteractiveUnitCircle from '@/components/scene/InteractiveUnitCircle';
import TrigGraphScene from '@/components/scene/TrigGraphScene';
import PendulumScene from '@/components/scene/PendulumScene';
import QuizOverlay from '@/components/ui/QuizOverlay';

// Inside the component:
const [quizCompleted, setQuizCompleted] = useState(false);

// Reset quiz state on step change
useEffect(() => {
  setQuizCompleted(false);
}, [currentStepIndex]);

function renderScene() {
  const step = currentStep;

  // Custom scene types
  if (step.customScene) {
    switch (step.customScene) {
      case 'cos-graph': return <TrigGraphScene mode="cos" />;
      case 'sin-graph': return <TrigGraphScene mode="sin" />;
      case 'trig-sync-animation': return <TrigGraphScene mode="both" />;
      case 'pendulum': return <PendulumScene />;
      case 'interactive-unit-circle':
        return <InteractiveUnitCircle
          showCos={step.interactiveConfig?.type === 'drag-unit-circle'}
          showSin={step.interactiveConfig?.type === 'drag-unit-circle'}
          showQuadrants={!!step.sceneConfig.highlightElements?.includes('quadrants')}
        />;
      case 'interactive-cos':
        return <InteractiveUnitCircle showCos showSin={false} />;
      case 'interactive-sin':
        return <InteractiveUnitCircle showCos={false} showSin />;
      default:
        return <Scene3D sceneConfig={step.sceneConfig} />;
    }
  }

  return <Scene3D sceneConfig={step.sceneConfig} />;
}

// In JSX, wrap scene with quiz overlay:
<div className="flex-1 relative">
  {renderScene()}
  {currentStep.stepType === 'quiz' && currentStep.quiz && !quizCompleted && (
    <QuizOverlay quiz={currentStep.quiz} onComplete={() => setQuizCompleted(true)} />
  )}
</div>
```

**Step 2: Update TutorialControls**

The play button should appear for any step with `customScene` that is an animation type (not interactive):

```typescript
const hasAnimation = currentStep?.sceneConfig?.animateTransform === true
  || (!!currentStep?.customScene && !currentStep.customScene.startsWith('interactive'));
```

**Step 3: Verify build**

Run: `pnpm --filter web tsc --noEmit`
Expected: PASS

**Step 4: Commit**

```bash
git add apps/web/src/pages/TutorialPage.tsx apps/web/src/components/ui/TutorialControls.tsx
git commit -m "feat(web): support interactive, quiz, and animation step types in TutorialPage"
```

---

## Task 6: Write Trigonometry Tutorial 1 — 単位円とは

**Files:**
- Replace: `packages/tutorials/src/trigonometry/unit-circle.ts`

Template v4: Hook → Touch → Example → Predict → Experience → Alternate View → Summary

**わかってもらいたいこと:** 半径1の円上の点の座標が (cosθ, sinθ) になる

**Step 1: Rewrite unit-circle.ts**

```typescript
import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const unitCircleTutorial: Tutorial = {
  id: 'unit-circle',
  title: '単位円とは',
  description: '半径1の円の上を点が動く。その座標がsin, cosになる',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '円の上を歩く',
      content:
        '白い点が円の上を動いています。\n\n' +
        '赤い線と緑の線が伸びたり縮んだりしていますね。\n\n' +
        'この赤と緑の長さが、数学で最も重要な関数 ── cosとsin ── の正体です。\n\n' +
        '再生ボタンを押してアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }], cameraPosition: [0, 0, 5] },
      customScene: 'trig-sync-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '白い点をドラッグして動かしてみてください。\n\n' +
        '何が起きますか？\n\n' +
        '自由に触って、感覚をつかんでください。説明はまだしません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 4] },
      customScene: 'interactive-unit-circle',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '角度0°の場合',
      content:
        '最もシンプルなケースから始めましょう。\n\n' +
        '角度0°では、点は真横にあります。座標は (1, 0) です。\n\n' +
        '赤い線（横の成分）は最大で 1、緑の線（縦の成分）は 0。\n\n' +
        'つまり cos 0° = 1、sin 0° = 0 です。\n\n' +
        '「横にどれだけいるか」が cos、「上にどれだけいるか」が sin。\n' +
        'この2つの数が、円上の点の住所です。',
      sceneConfig: {
        showGrid: true, showAxes: true,
        vectors: [
          { id: 'a0', vector: new Vector3(1, 0, 0), color: '#ff4444', label: '0°: cos=1', showComponents: true },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '角度45°の場合',
      content:
        '角度を45°にすると、点は対角線の方向に移動します。\n\n' +
        '座標は (0.71, 0.71)。横も縦もまったく同じ長さです。\n\n' +
        'cos 45° = 0.71、sin 45° = 0.71。\n\n' +
        'なぜ 0.5 ではなく 0.71 なのか？\n' +
        '(0.5, 0.5) だと原点からの距離は約0.71で、1になりません。\n' +
        '円上にいるためには距離が必ず1なので、(0.71, 0.71) が正解です。',
      sceneConfig: {
        showGrid: true, showAxes: true,
        vectors: [
          { id: 'a0', vector: new Vector3(1, 0, 0), color: '#ff444444', label: '0°' },
          { id: 'a45', vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0), color: '#ffff44', label: '45°: (0.71, 0.71)', showComponents: true },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content: '90°にしたら、cosとsinはどうなると思いますか？',
      sceneConfig: { showGrid: true, showAxes: true, circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }], cameraPosition: [0, 0, 4] },
      customScene: 'interactive-unit-circle',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '角度90°のとき、cosとsinの値は？',
        options: [
          { id: 'a', label: 'cos=1, sin=0', correct: false },
          { id: 'b', label: 'cos=0.5, sin=0.5', correct: false },
          { id: 'c', label: 'cos=0, sin=1', correct: true },
          { id: 'd', label: 'cos=0.71, sin=0.71', correct: false },
        ],
        explanation:
          '正解はcos=0, sin=1です。\n\n' +
          '90°は真上。横の成分（cos）はゼロ、縦の成分（sin）が最大の1になります。\n\n' +
          '0°では cos=1, sin=0 でした。90°ではちょうど逆。\n' +
          '「横から縦へ」成分が移り変わったのです。',
      },
    },
    {
      id: 'experience',
      title: '0°→90°の変化を見る',
      content:
        '0°から90°まで、点がゆっくり動きます。\n\n' +
        '赤い線（cos）が縮み、緑の線（sin）が伸びていく様子を観察してください。\n\n' +
        '横の成分が縦の成分に「受け渡される」感覚がわかりますか？\n\n' +
        '再生ボタンで動きを確認しましょう。',
      sceneConfig: {
        showGrid: true, showAxes: true,
        vectors: [
          { id: 'a0', vector: new Vector3(1, 0, 0), color: '#ff4444', label: '0°' },
          { id: 'a30', vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0), color: '#ff8844', label: '30°' },
          { id: 'a45', vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0), color: '#ffff44', label: '45°' },
          { id: 'a60', vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0), color: '#44ff44', label: '60°' },
          { id: 'a90', vector: new Vector3(0, 1, 0), color: '#4444ff', label: '90°' },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'alternate',
      title: '影で考える',
      content:
        '懐中電灯で横から照らすことを想像してみてください。\n\n' +
        '壁にできる影の高さが sin です。\n\n' +
        '上から照らしたときに床にできる影の長さが cos です。\n\n' +
        '点が回転すると影が伸びたり縮んだりする。\n' +
        'これが三角関数の本質です。\n\n' +
        'cos²θ + sin²θ = 1 という公式も、影2つの長さの二乗和が\n' +
        '必ず1になる（ピタゴラスの定理）という意味でしかありません。',
      sceneConfig: {
        showGrid: true, showAxes: true,
        vectors: [
          { id: 'r', vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0), color: '#ffffff', label: '光源からの距離 = 1', showComponents: true },
          { id: 'cos-shadow', vector: new Vector3(Math.cos(Math.PI / 3), 0, 0), color: '#ff4444', label: 'cos = 横の影' },
          { id: 'sin-shadow', vector: new Vector3(0, Math.sin(Math.PI / 3), 0), color: '#44ff44', label: 'sin = 縦の影' },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '単位円（半径1の円）の上を点が動くと、その座標が (cosθ, sinθ) になります。\n\n' +
        'cos は「横にどれだけいるか」── 壁への影の長さ\n' +
        'sin は「上にどれだけいるか」── 床への影の高さ\n\n' +
        'よくある誤解: sinがX座標だと思ってしまうこと。\n' +
        '覚え方: cos は「Co-ordinate のX」、sin は「上にSin（昇る）」。\n\n' +
        '次の単元で、cosの動きを詳しく見ていきます。',
      sceneConfig: { showGrid: true, showAxes: true, circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }], cameraPosition: [0, 0, 4] },
      customScene: 'interactive-unit-circle',
      interactiveConfig: { type: 'drag-unit-circle' },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
```

**Step 2: Typecheck**

Run: `pnpm --filter @learnmath/tutorials tsc --noEmit`
Expected: PASS

**Step 3: Commit**

```bash
git add packages/tutorials/src/trigonometry/unit-circle.ts
git commit -m "feat(trig): rewrite unit-circle tutorial with v4 template"
```

---

## Task 7: Write Tutorials 2 & 3 — cos横の影 / sin縦の影

**Files:**
- Replace: `packages/tutorials/src/trigonometry/cosine.ts`
- Replace: `packages/tutorials/src/trigonometry/sine.ts`

Each follows Template v4 with the same 7-step structure. The content focuses on one function and uses drag interaction + quiz. Cos uses red (#ff4444), Sin uses green (#44ff44).

Follow the exact same pattern as Task 6: Hook (animation showing the function), Touch (drag), Example 1 (simple angle), Example 2 (another angle), Predict (quiz about a third angle), Alternate View (percentage framing from Better Explained), Summary.

**Key content for cosine.ts:**
- わかってもらいたいこと: cosθは回転する点のX軸への射影（横の影）
- Hook: cos-graph animation showing cosine wave building as point rotates
- Touch: interactive-cos (drag with only cos projection shown)
- Example 1: cos 60° = 0.5 → 「斜辺の50%」(percentage framing)
- Example 2: cos 0° = 1 → 「真横なので影は最大」
- Predict: 「cos 180° は？」→ 答え: -1（左にいるので影も左）
- Alternate: 「時計で3時の位置が cos=1。9時なら cos=-1」
- Summary: cosは横の影。右にいればプラス、左にいればマイナス。

**Key content for sine.ts:**
- わかってもらいたいこと: sinθは回転する点のY軸への射影（縦の影）
- Same structure but with green, Y-axis focus
- Example 1: sin 30° = 0.5 → 「斜辺の半分の高さ」
- Example 2: sin 90° = 1 → 「真上なので影は最大」
- Predict: 「sin 270° は？」→ 答え: -1（真下にいる）
- Alternate: 「エレベーター。上の階は sin > 0、地下は sin < 0」
- Summary: sinは縦の影。上にいればプラス、下にいればマイナス。

The implementer should write complete tutorial files following the exact patterns established in Task 6.

**Step: Typecheck and commit**

```bash
pnpm --filter @learnmath/tutorials tsc --noEmit
git add packages/tutorials/src/trigonometry/cosine.ts packages/tutorials/src/trigonometry/sine.ts
git commit -m "feat(trig): rewrite cos and sin tutorials with v4 template"
```

---

## Task 8: Write Tutorial 4 — 影の旅：一周の物語

**Files:**
- Create: `packages/tutorials/src/trigonometry/shadow-journey.ts`

This is the core unit that merges all 4 quadrants into one continuous animation. **わかってもらいたいこと:** 円を一周すると影の向きが変わる（±の変化は影の方向転換）

Template v4 structure:

1. **Hook:** Full 360° animation — point goes around the circle, both shadows (red cos, green sin) continuously change. At quadrant boundaries, a flash highlights the sign change.
2. **Touch:** `interactive-unit-circle` with `showQuadrants: true`. Let the user drag and observe how signs change.
3. **Example 1:** Start in Q1 (30°) — both shadows point right and up: cos > 0, sin > 0.
4. **Example 2:** Move to Q2 (150°) — shadow flips left: cos < 0, sin > 0. 「影が壁の反対側に出た」
5. **Predict:** Quiz: 「第3象限(210°)では cos と sin はそれぞれ正？負？」→ 答え: 両方負（左下にいる）
6. **Alternate View:** 「マップアプリ。北東=Q1(両方+), 北西=Q2(cos-, sin+), 南西=Q3(両方-), 南東=Q4(cos+, sin-)」
7. **Summary:** 象限ごとの符号表 + 「影の向きが±の意味」

Use `customScene: 'trig-sync-animation'` for hook (full animation), `customScene: 'interactive-unit-circle'` for touch.

**Step: Typecheck and commit**

```bash
pnpm --filter @learnmath/tutorials tsc --noEmit
git add packages/tutorials/src/trigonometry/shadow-journey.ts
git commit -m "feat(trig): add shadow-journey tutorial covering all 4 quadrants"
```

---

## Task 9: Write Tutorials 5 & 6 — cosの波 / sinの波

**Files:**
- Replace: `packages/tutorials/src/trigonometry/trig-graphs.ts` → rename concept, split into two
- Create: `packages/tutorials/src/trigonometry/cos-wave.ts`
- Create: `packages/tutorials/src/trigonometry/sin-wave.ts`
- Delete: `packages/tutorials/src/trigonometry/trig-graphs.ts`

**cos-wave.ts:** わかってもらいたいこと: cosを角度の関数として見ると波になる
- Hook: cos-graph animation (circle + cos graph synced)
- Touch: interactive-cos with drag → graph point lights up correspondingly
- Example 1: 0°→90° で cos は 1→0 に下がる（波の下り坂）
- Example 2: 90°→180° で cos は 0→-1（波はさらに下がって谷へ）
- Predict: 「cos の波は何度で元の値に戻る？」→ 360°
- Alternate: 「音叉を横から見ている。横方向の振動がcos」
- Summary: cosは横の影をグラフにしたもの。波形は360°周期。

**sin-wave.ts:** Same structure with sin.

**Step: Typecheck and commit**

```bash
pnpm --filter @learnmath/tutorials tsc --noEmit
git add packages/tutorials/src/trigonometry/cos-wave.ts packages/tutorials/src/trigonometry/sin-wave.ts
git rm packages/tutorials/src/trigonometry/trig-graphs.ts
git commit -m "feat(trig): add cos-wave and sin-wave tutorials, remove trig-graphs"
```

---

## Task 10: Write Tutorial 7 — 波は繰り返す（周期性）

**Files:**
- Create: `packages/tutorials/src/trigonometry/periodicity.ts`

**わかってもらいたいこと:** 360°で同じ値に戻る（周期性）

- Hook: trig-sync-animation showing 2 full cycles (both cos and sin)
- Touch: interactive-unit-circle — ドラッグして360°超えたら同じ座標に戻ることを体験
- Example 1: sin 30° = 0.5 → sin 390° = 0.5（全く同じ値）
- Example 2: cos 0° = 1 → cos 720° = 1（2周しても同じ）
- Predict: 「sin 1000° はどうやって求める？」→ 答え: 1000 mod 360 = 280°なので sin 280°
- Alternate: 「1年は365日で季節が繰り返す。sin/cosは360°で値が繰り返す。どちらも周期現象」
- Summary: sin/cosは360°周期。これが波動現象の数学的基礎。

**Step: Typecheck and commit**

```bash
pnpm --filter @learnmath/tutorials tsc --noEmit
git add packages/tutorials/src/trigonometry/periodicity.ts
git commit -m "feat(trig): add periodicity tutorial"
```

---

## Task 11: Write Tutorial 8 — 振り子とsin

**Files:**
- Create: `packages/tutorials/src/trigonometry/pendulum.ts`

**わかってもらいたいこと:** 振り子の動きは sin 関数そのもの

- Hook: `customScene: 'pendulum'` — PendulumScene animation showing pendulum + sin graph synchronized
- Touch: Interactive version (future: adjust pendulum length to change period). For now, use animation with play button.
- Example 1: 振り子の変位を計測。最大変位 → 0 → 最大反対側 → 0 → 最大。sinの山→谷と一致
- Predict: 「振り子を長くすると、sinの波はどう変わる？」→ 答え: 周期が長くなる（ゆっくり揺れる）
- Alternate: 「ブランコに乗っている自分を想像。前に行って戻って後ろに行って戻る。高さの変化がsin」
- Summary: 振り子の動きはsinで記述できる。身の回りの往復運動はすべて三角関数の仲間。

**Step: Typecheck and commit**

```bash
pnpm --filter @learnmath/tutorials tsc --noEmit
git add packages/tutorials/src/trigonometry/pendulum.ts
git commit -m "feat(trig): add pendulum-and-sin tutorial"
```

---

## Task 12: Update Trigonometry Index and Verify

**Files:**
- Modify: `packages/tutorials/src/trigonometry/index.ts`
- Modify: `packages/tutorials/src/glossary.ts` (add quadrant, periodicity entries)
- Modify: `packages/tutorials/src/index.ts` (no change needed if trig category is updated)

**Step 1: Update trigonometry/index.ts**

```typescript
export { unitCircleTutorial } from './unit-circle';
export { cosineTutorial } from './cosine';
export { sineTutorial } from './sine';
export { shadowJourneyTutorial } from './shadow-journey';
export { cosWaveTutorial } from './cos-wave';
export { sinWaveTutorial } from './sin-wave';
export { periodicityTutorial } from './periodicity';
export { pendulumTutorial } from './pendulum';

import { TutorialCategory } from '../types';
import { unitCircleTutorial } from './unit-circle';
import { cosineTutorial } from './cosine';
import { sineTutorial } from './sine';
import { shadowJourneyTutorial } from './shadow-journey';
import { cosWaveTutorial } from './cos-wave';
import { sinWaveTutorial } from './sin-wave';
import { periodicityTutorial } from './periodicity';
import { pendulumTutorial } from './pendulum';

export const trigonometryCategory: TutorialCategory = {
  id: 'trigonometry',
  name: '三角関数',
  description: '単位円、波形、回転を使って三角関数を視覚的に理解する',
  tutorials: [
    unitCircleTutorial,
    cosineTutorial,
    sineTutorial,
    shadowJourneyTutorial,
    cosWaveTutorial,
    sinWaveTutorial,
    periodicityTutorial,
    pendulumTutorial,
  ],
};
```

**Step 2: Add glossary entries**

Add to `glossary.ts`:
- `quadrant` — 象限: 座標平面を4つに分けた領域。右上が第1象限、反時計回りに第2,第3,第4象限。
- `periodicity` — 周期性: 一定の間隔で同じ値を繰り返す性質。sin/cosは360°（2π）周期。
- `projection` — 射影: ある方向への「影」。cos θ はX軸への射影、sin θ はY軸への射影。

**Step 3: Run full verification**

```bash
# Typecheck everything
pnpm --filter @learnmath/tutorials tsc --noEmit
pnpm --filter web tsc --noEmit

# Run tests
pnpm --filter @learnmath/core test

# Build web app
pnpm --filter web build
```

Expected: All pass.

**Step 4: Commit**

```bash
git add packages/tutorials/src/trigonometry/index.ts packages/tutorials/src/glossary.ts
git commit -m "feat(trig): update index to include all 8 tutorials, add glossary entries"
```

---

## Task 13: Final Integration Test and Commit

**Step 1: Run full build and test**

```bash
cd /Users/toshikimatsukuma/WorkSpace/LearnMath
pnpm --filter @learnmath/core test
pnpm --filter @learnmath/tutorials tsc --noEmit
pnpm --filter web build
```

**Step 2: Check for any issues with the web app**

Start the dev server:
```bash
pnpm --filter web dev
```

Manually verify:
- Home page lists 8 trigonometry tutorials in correct order
- Each tutorial loads without errors
- InteractiveUnitCircle drag works
- QuizOverlay appears on quiz steps
- TrigGraphScene animation plays when play button is clicked
- PendulumScene animation plays
- Glossary terms still work

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: redesign trig tutorials with v4 template

- 8 focused units following Hook→Touch→Example→Predict→Experience→Alt→Summary
- InteractiveUnitCircle with drag interaction
- QuizOverlay for prediction quizzes
- PendulumScene for physics application
- Each unit has 1 animation and 1 core insight
- Based on worldwide math education research (GeoGebra, 3Blue1Brown, Desmos, Singapore Math)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Summary of All Tasks

| Task | Description | Key Files |
|------|-------------|-----------|
| 1 | Extend type system | `types.ts` |
| 2 | InteractiveUnitCircle | `InteractiveUnitCircle.tsx` |
| 3 | QuizOverlay | `QuizOverlay.tsx` |
| 4 | PendulumScene | `PendulumScene.tsx` |
| 5 | Update TutorialPage + Controls | `TutorialPage.tsx`, `TutorialControls.tsx` |
| 6 | Tutorial 1: 単位円とは | `unit-circle.ts` |
| 7 | Tutorials 2-3: cos/sin | `cosine.ts`, `sine.ts` |
| 8 | Tutorial 4: 影の旅 | `shadow-journey.ts` |
| 9 | Tutorials 5-6: cos/sinの波 | `cos-wave.ts`, `sin-wave.ts` |
| 10 | Tutorial 7: 周期性 | `periodicity.ts` |
| 11 | Tutorial 8: 振り子 | `pendulum.ts` |
| 12 | Update index + glossary | `index.ts`, `glossary.ts` |
| 13 | Final integration test | All files |

Total: ~13 tasks, each independently committable.
