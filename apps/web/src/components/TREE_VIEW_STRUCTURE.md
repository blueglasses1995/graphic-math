# TutorialTreeView Component Structure

## Visual Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Header Bar (白背景)                          │
│  ┌──────────────┐  ┌─────────────────────────────────────┐         │
│  │ カテゴリー:   │  │ [Dropdown: すべて ▼]                │         │
│  └──────────────┘  └─────────────────────────────────────┘         │
│                                                                     │
│  ┌─ Legend ────────────────────────────────────────────────────┐  │
│  │ ✓ 完了  ◉ 進行中  ○ 利用可能  ◌ 前提条件あり               │  │
│  │ 🟢 初級  🟡 中級  🔴 上級                                   │  │
│  └─────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│                    React Flow Canvas (灰背景)                       │
│                                                                     │
│              ┌──────┐                                              │
│              │ ✓    │  Tutorial 1 (完了)                           │
│              │ 🟢   │  difficulty 2 | 20分                         │
│              └───┬──┘                                              │
│                  │                                                 │
│         ┌────────┴────────┐                                        │
│         ↓                 ↓                                        │
│    ┌────────┐       ┌────────┐                                    │
│    │ ◉      │       │ ○      │  Tutorial 2,3                      │
│    │ 🟡     │       │ 🟡     │  (進行中, 利用可能)                 │
│    └───┬────┘       └───┬────┘                                    │
│        │                │                                          │
│        └────────┬───────┘                                          │
│                 ↓                                                  │
│           ┌──────────┐                                             │
│           │ ◌        │  Tutorial 4 (ロック)                        │
│           │ 🔴       │  difficulty 8 | 60分                        │
│           └──────────┘                                             │
│                                                                     │
│  ┌─ Controls (左上) ─┐     ┌─ MiniMap (右下) ─────┐               │
│  │ [+] Zoom In       │     │  ┌─────────────┐    │               │
│  │ [-] Zoom Out      │     │  │ •••         │    │               │
│  │ [⊡] Fit View      │     │  │ • •• •      │    │               │
│  │ [🔒] Lock         │     │  │   └──┘      │    │               │
│  └───────────────────┘     │  │ Viewport    │    │               │
│                            │  └─────────────┘    │               │
│  ┌─ Count Badge ─────┐    └────────────────────┘               │
│  │ 代数学              │                                           │
│  │ 60 個のチュートリアル │                                          │
│  └────────────────────┘                                           │
└─────────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
TutorialTreeView (Root)
├── Header Bar (div.p-4.bg-white)
│   ├── Category Filter (select)
│   ├── Status Legend
│   │   ├── ✓ 完了
│   │   ├── ◉ 進行中
│   │   ├── ○ 利用可能
│   │   └── ◌ 前提条件あり
│   └── Difficulty Legend
│       ├── 🟢 初級
│       ├── 🟡 中級
│       └── 🔴 上級
│
└── React Flow Container (div.flex-1.relative)
    ├── ReactFlow
    │   ├── Nodes (TutorialNode[])
    │   │   └── TutorialNode (Custom)
    │   │       ├── Circular Container (div.rounded-full)
    │   │       ├── Status Badge (div.absolute.-top-2.-right-2)
    │   │       ├── Title (div)
    │   │       ├── Metadata (div.text-[8px])
    │   │       └── Tooltip (div.absolute.bottom-full)
    │   │           ├── Title (div.font-bold)
    │   │           ├── Difficulty Info
    │   │           ├── Time Estimate
    │   │           ├── Status
    │   │           └── Arrow Pointer
    │   │
    │   ├── Edges (Edge[])
    │   │   ├── Required Prerequisites (solid, animated)
    │   │   └── Suggested Prerequisites (dashed, static)
    │   │
    │   ├── Controls (React Flow Component)
    │   ├── Background (React Flow Component)
    │   └── MiniMap (React Flow Component)
    │
    └── Tutorial Count Badge (div.absolute.bottom-4.left-4)
```

## Node Structure (Detailed)

```typescript
// Each node in the graph
{
  id: string,              // tutorial.id
  type: 'tutorialNode',    // Custom node type
  position: { x, y },      // From Dagre layout
  data: {
    tutorial: Tutorial,    // Full tutorial object
    status: TutorialStatus // 'completed' | 'in-progress' | 'available' | 'locked'
  },
  width: number,           // 60-120 (based on estimatedMinutes)
  height: number,          // Same as width (circular)
  sourcePosition: 'bottom',
  targetPosition: 'top'
}
```

## Edge Structure (Detailed)

```typescript
// Required prerequisite edge
{
  id: `${prereqId}-${tutorialId}`,
  source: prereqId,
  target: tutorialId,
  type: 'smoothstep',
  animated: !isCompleted,
  style: {
    stroke: '#94a3b8',
    strokeWidth: 2
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#94a3b8'
  }
}

// Suggested prerequisite edge
{
  id: `${prereqId}-${tutorialId}-suggested`,
  source: prereqId,
  target: tutorialId,
  type: 'smoothstep',
  animated: false,
  style: {
    stroke: '#cbd5e1',
    strokeWidth: 1,
    strokeDasharray: '5,5'
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#cbd5e1'
  }
}
```

## State Flow Diagram

```
┌─────────────────┐
│ allCategories   │ (from @learnmath/tutorials)
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ selectedCategory│ (React state)
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│filteredTutorials│ (useMemo)
└────────┬────────┘
         │
         ├──────────────────┐
         ↓                  ↓
┌─────────────────┐  ┌─────────────────┐
│ buildNodes()    │  │ buildEdges()    │
└────────┬────────┘  └────────┬────────┘
         │                    │
         │  ┌─────────────────┘
         ↓  ↓
┌─────────────────┐
│getLayoutedElements() │ (Dagre)
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ ReactFlow       │
│ (renders)       │
└─────────────────┘
```

## User Interaction Flow

```
User Action             Component Behavior                Result
───────────────────────────────────────────────────────────────────
1. Select Category  →   Update selectedCategory     →   Re-render graph
                        Filter tutorials
                        Rebuild nodes/edges
                        Re-apply layout

2. Hover Node      →   Show tooltip                 →   Display metadata
                        Scale animation
                        (if not locked)

3. Click Node      →   Check status                 →   Navigate to tutorial
                        If locked: no-op                 (if available)
                        If available: navigate

4. Drag Canvas     →   React Flow pan               →   Update viewport
                        (native behavior)

5. Scroll          →   React Flow zoom              →   Update zoom level
                        (native behavior)

6. Click MiniMap   →   React Flow navigation        →   Jump to area
                        (native behavior)

7. Complete        →   markCompleted()              →   Update status
   Tutorial            Update localStorage              Re-render affected nodes
                        Check dependents                 Unlock next tutorials
```

## CSS Class Reference

### Tailwind Classes by Purpose

#### Layout
- `flex`, `flex-col`, `flex-1`: Flexbox layout
- `items-center`, `justify-center`: Alignment
- `gap-1`, `gap-2`, `gap-3`, `gap-4`: Spacing between flex items
- `grid`, `grid-cols-1`, `md:grid-cols-3`: Grid layout

#### Sizing
- `w-full`, `h-full`: 100% width/height
- `w-4`, `h-4`: Fixed size (16px)
- `w-7`, `h-7`: Fixed size (28px)
- `min-w-[200px]`: Minimum width
- `max-w-7xl`: Max width (1280px)

#### Colors
- `bg-white`, `bg-gray-50`, `bg-gray-900`: Backgrounds
- `text-gray-600`, `text-gray-700`, `text-gray-900`: Text
- `border-gray-200`, `border-gray-300`: Borders
- `text-blue-600`, `text-blue-800`: Accent colors

#### Spacing
- `p-2`, `p-3`, `p-4`: Padding
- `px-3`, `py-2`: Horizontal/Vertical padding
- `m-0`, `mb-2`, `mb-6`, `mt-2`: Margins

#### Effects
- `shadow-sm`, `shadow-lg`, `shadow-xl`: Box shadows
- `rounded-lg`, `rounded-full`: Border radius
- `opacity-50`, `opacity-90`: Transparency

#### Transitions
- `transition-transform`: Transform animation
- `duration-200`: Animation duration

#### Interactive
- `cursor-pointer`, `cursor-not-allowed`: Cursor styles
- `hover:scale-110`: Hover effect
- `focus:outline-none`, `focus:ring-2`: Focus states

#### Positioning
- `relative`, `absolute`: Position modes
- `top-0`, `bottom-0`, `left-0`, `right-0`: Positioning
- `-top-2`, `-right-2`: Negative positioning
- `z-50`: Z-index

## Color Palette

### Difficulty Colors
```css
/* Beginner (1-3) */
background: linear-gradient(135deg, #10b981 0%, #059669 100%);

/* Intermediate (4-6) */
background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);

/* Advanced (7-10) */
background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
```

### Status Colors
```css
/* Completed */
border-color: #10b981;  /* green-500 */

/* In Progress */
border-color: #3b82f6;  /* blue-500 */

/* Available */
border-color: #6b7280;  /* gray-500 */

/* Locked */
border-color: #d1d5db;  /* gray-300 */
```

### Edge Colors
```css
/* Required prerequisite */
stroke: #94a3b8;  /* slate-400 */

/* Suggested prerequisite */
stroke: #cbd5e1;  /* slate-300 */
```

## Responsive Breakpoints

```css
/* Mobile First (default) */
/* < 640px */

/* Small (sm) */
/* >= 640px */
@media (min-width: 640px) {
  .sm\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
}

/* Medium (md) */
/* >= 768px */
@media (min-width: 768px) {
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

/* Large (lg) */
/* >= 1024px */
@media (min-width: 1024px) {
  .lg\:px-8 { padding-left: 2rem; padding-right: 2rem; }
}
```

---

This structure provides maximum maintainability, reusability, and scalability for the TutorialTreeView component.
