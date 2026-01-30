# TutorialTreeView Component

## Overview

An interactive tree visualization component that displays tutorials and their prerequisite relationships using React Flow. The component provides a visual curriculum map with automatic layout, status tracking, and intuitive navigation.

## Installation

First, install the dependencies:

```bash
pnpm install
```

The following packages are required:
- `reactflow@^11.11.0` - React Flow library for node-based UI
- `dagre@^0.8.5` - Graph layout algorithm
- `@types/dagre@^0.7.52` - TypeScript types for Dagre

## Features

### 1. Visual Hierarchy
- **Node Size**: Proportional to `estimatedMinutes` (20-100px range)
- **Color Coding**: Difficulty-based gradient
  - Green: Difficulty 1-3 (Beginner)
  - Yellow/Orange: Difficulty 4-6 (Intermediate)
  - Red: Difficulty 7-10 (Advanced)

### 2. Status Tracking
Four distinct status states with visual indicators:
- **Completed** (✓): Green border, tutorial finished
- **In Progress** (◉): Blue border, currently learning
- **Available** (○): Gray border, ready to start
- **Locked** (◌): Light gray border, prerequisites not met

### 3. Prerequisite Relationships
- **Solid Arrows**: Required prerequisites (mandatory)
- **Dashed Arrows**: Suggested prerequisites (optional)
- **Animated Arrows**: Incomplete prerequisites
- **Static Arrows**: Completed prerequisites

### 4. Interactive Navigation
- Click any unlocked node to navigate to tutorial
- Hover effects with scale animation
- Pan and zoom controls
- Category filtering

### 5. Automatic Layout
Uses Dagre algorithm for hierarchical tree layout:
- Top-to-bottom flow
- Optimized node spacing (100px horizontal, 150px vertical)
- Automatic positioning based on dependencies

## Usage

### Basic Usage

```tsx
import { TutorialTreeView } from './components/TutorialTreeView';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <TutorialTreeView />
    </div>
  );
}
```

### With Router

The component requires React Router for navigation:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TutorialTreeView } from './components/TutorialTreeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TutorialTreeView />} />
        <Route path="/tutorial/:id" element={<TutorialPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Component Structure

### Main Component
- **TutorialTreeView**: Main container component
  - Manages state for nodes, edges, and filters
  - Handles category filtering
  - Provides navigation callbacks

### Custom Node Component
- **TutorialNode**: Custom node renderer
  - Displays tutorial information
  - Shows status indicator
  - Handles hover effects
  - Applies color gradient based on difficulty

### User Progress Store
- **useUserProgressStore**: Zustand store for progress tracking
  - Persists to localStorage
  - Tracks completion status
  - Manages tutorial progress percentage

## Data Flow

```
allCategories (from @learnmath/tutorials)
  ↓
Filter by selected category
  ↓
Transform to nodes (with status from store)
  ↓
Generate edges from prerequisites
  ↓
Apply Dagre layout algorithm
  ↓
Render with React Flow
```

## Node Data Structure

```typescript
interface TutorialNodeData {
  tutorial: Tutorial;
  status: 'completed' | 'in-progress' | 'available' | 'locked';
}
```

## Edge Types

1. **Required Prerequisite**
   ```typescript
   {
     type: 'smoothstep',
     animated: !isCompleted,
     style: { stroke: '#94a3b8', strokeWidth: 2 }
   }
   ```

2. **Suggested Prerequisite**
   ```typescript
   {
     type: 'smoothstep',
     animated: false,
     style: { stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '5,5' }
   }
   ```

## Styling

The component uses inline styles for maximum portability. Key style features:
- Circular nodes with gradient backgrounds
- Status indicator badges
- Smooth hover transitions
- Responsive sizing

## Keyboard Controls

React Flow provides built-in keyboard controls:
- **Arrow Keys**: Pan the view
- **+/-**: Zoom in/out
- **Shift + Drag**: Pan the view

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile: Touch gestures supported

## Performance Considerations

- Nodes are memoized to prevent unnecessary re-renders
- Layout calculation runs only when data changes
- Virtual rendering for large graphs
- Efficient edge calculation

## Accessibility

- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Status indicators use both color and symbols
- Semantic HTML structure

## Customization

### Changing Node Sizes
Edit the size calculation in TutorialNode:
```typescript
const size = Math.max(60, Math.min(120, 40 + estimatedMinutes));
```

### Changing Colors
Edit the gradient function:
```typescript
const getBackgroundColor = () => {
  if (difficulty <= 3) return 'linear-gradient(...)'; // Your gradient
  // ...
}
```

### Changing Layout
Modify Dagre graph settings:
```typescript
dagreGraph.setGraph({
  rankdir: 'TB',      // TB, BT, LR, RL
  nodesep: 100,       // Horizontal spacing
  ranksep: 150        // Vertical spacing
});
```

## Troubleshooting

### Nodes overlapping
Increase `nodesep` or `ranksep` in the layout configuration.

### Empty graph
Check that tutorials have proper `id`, `category`, and `prerequisite` fields.

### Navigation not working
Ensure React Router is properly configured and the route matches `/tutorial/:id`.

### Progress not persisting
Check browser localStorage permissions and quota.

## Future Enhancements

Potential improvements:
- Mini-map for large graphs
- Search/highlight functionality
- Export to PNG/SVG
- Custom themes
- Progress statistics panel
- Zoom to fit selected category
- Tutorial recommendations based on progress

## Dependencies

```json
{
  "reactflow": "^11.11.0",
  "dagre": "^0.8.5",
  "@types/dagre": "^0.7.52",
  "zustand": "^4.5.0",
  "react-router-dom": "^6.22.0"
}
```

## License

Part of the LearnMath project.
