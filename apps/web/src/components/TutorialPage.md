# TutorialPage Component

Complete implementation of the individual tutorial page with all requested features.

## Features Implemented

### 1. Header Section ✅
- **Breadcrumb Navigation**: Home > Category > Tutorial title
- **Title and Metadata**:
  - Tutorial title and description
  - 10-star difficulty rating (★★★☆☆☆☆☆☆☆ with X/10 label)
  - Estimated time in minutes
  - Colored badge tags for topics

### 2. Prerequisite Warning Banner ✅
- **Conditional Display**: Only shows when tutorial has prerequisites
- **Warning Message**: "推奨: 「前提チュートリアル名」を先に学習することをお勧めします"
- **Two Action Buttons**:
  - "推奨を無視して開始" - Dismiss warning and continue
  - "前提へ移動" - Navigate to prerequisite tutorial

### 3. Section Navigation ✅
- **6 Section Tabs**: hook, concept, visualization, examples, exercises, summary
- **Japanese Labels**:
  - hook → フック
  - concept → 概念
  - visualization → ビジュアル
  - examples → 例題
  - exercises → 練習問題
  - summary → まとめ
- **Progress Indicator**: Shows "3/6" current section
- **Visual Progress Bar**: Animated progress bar showing completion percentage
- **Active Section**: Highlighted with pulse animation
- **Completed Sections**: Marked with green checkmarks
- **Smart Filtering**: Exercises tab only shows if tutorial has exercises

### 4. Content Area ✅
- **Two-Column Layout** (responsive):
  - **Left**: Content rendered with react-markdown
  - **Right**: 3D visualization scene
- **MDX Rendering** with react-markdown:
  - Headers (h1, h2, h3)
  - Paragraphs
  - Lists (ordered and unordered)
  - Code blocks (inline and block)
  - Bold and italic text
  - Blockquotes
  - Links
  - Horizontal rules
- **LaTeX Math Support** with KaTeX:
  - Inline math: `$x^2 + y^2 = r^2$`
  - Display math: `$$\int_0^\infty e^{-x} dx = 1$$`
  - Full KaTeX styling
- **3D Visualization**:
  - Integrates existing scene components
  - Fallback placeholder when no scene configured
- **Section Label Badge**: Color-coded by section type

### 5. Navigation Buttons ✅
- **Previous Section**: ← 前のセクション (only shown when available)
- **Next Section**: 次のセクション → (only shown when available)
- **Smooth Scrolling**: Auto-scrolls to top on section change

### 6. Footer ✅
- **Next Tutorial Recommendation**:
  - "次に進む:" section
  - Shows first related tutorial with description
  - Arrow icon for visual navigation
- **Related Tutorials Grid**:
  - "関連:" section
  - Shows all other related tutorials
  - Responsive grid layout (2 columns on desktop)
- **Back to Category Link**:
  - Centered link to return to category view

## Dependencies Installed

```bash
pnpm add -F @learnmath/web react-markdown react-katex katex rehype-katex remark-math remark-gfm
```

- **react-markdown**: MDX/Markdown rendering
- **react-katex**: LaTeX math rendering wrapper
- **katex**: Fast LaTeX math typesetting
- **rehype-katex**: Rehype plugin for KaTeX
- **remark-math**: Remark plugin for math syntax
- **remark-gfm**: GitHub Flavored Markdown support

## Component Structure

```
apps/web/src/components/
├── TutorialPage.tsx              # Main page component
└── tutorial/
    ├── index.ts                  # Barrel export
    ├── Breadcrumb.tsx           # Navigation breadcrumb
    ├── TutorialHeader.tsx       # Title, difficulty, tags
    ├── PrerequisiteWarning.tsx  # Conditional warning banner
    ├── SectionNavigation.tsx    # Section tabs with progress
    ├── ContentRenderer.tsx      # Markdown + KaTeX renderer
    ├── NavigationButtons.tsx    # Prev/Next buttons
    ├── TutorialFooter.tsx       # Related tutorials
    └── KaTeXRenderer.tsx        # Math rendering utilities
```

## Usage

### In Router Configuration

```tsx
import TutorialPage from '@/components/TutorialPage';

<Route path="/tutorial/:id" element={<TutorialPage />} />
```

### Example URLs

- `/tutorial/group-definition`
- `/tutorial/unit-circle`
- `/tutorial/derivative-intro`

## Responsive Design

### Desktop (≥1024px)
- 2-column grid layout
- Full section tabs visible
- Content and 3D scene side-by-side

### Tablet (768px - 1024px)
- 2-column maintained with smaller gaps
- Section tabs may wrap
- Reduced padding

### Mobile (<768px)
- Single column layout (planned)
- Content stacks above visualization
- Horizontal scrolling for section tabs

## Color Coding

### Section Types
- **Hook** (フック): Purple
- **Concept** (概念): Blue
- **Visualization** (ビジュアル): Green
- **Examples** (例題): Yellow
- **Exercises** (練習問題): Orange
- **Summary** (まとめ): Indigo

### Difficulty Stars
- Filled stars: Yellow (★)
- Empty stars: Gray (★)

### Tags
- Indigo gradient background
- Border with transparency

## State Management

- **Current Section**: Tracks active section being viewed
- **Prerequisite Warning**: Dismissible state
- **Section Progress**: Calculated from current index
- **Scroll Position**: Auto-scrolls on section change

## Error Handling

- Tutorial not found: Shows error message with link to home
- Legacy tutorials: Shows migration notice
- Missing sections: Filtered out automatically
- Missing content: Shows placeholder text

## LaTeX Examples

The component supports:

### Inline Math
```markdown
The formula $E = mc^2$ shows mass-energy equivalence.
```

### Display Math
```markdown
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

### Complex Expressions
```markdown
$$
\begin{align}
  \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
  \nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$
```

## Performance Optimizations

- **Lazy 3D Rendering**: Scenes only render when section is active
- **Smooth Transitions**: CSS transitions for better UX
- **Scroll Optimization**: Smooth scrolling with `behavior: 'smooth'`
- **Content Scrolling**: Max height on content area to prevent page overflow

## Accessibility

- Semantic HTML structure
- ARIA labels on navigation buttons
- Keyboard navigation supported
- Focus indicators on interactive elements
- Proper heading hierarchy (h1 → h2 → h3)

## Future Enhancements

1. **Progress Persistence**: Save user progress to localStorage
2. **Animations**: Transition animations between sections
3. **Interactive Exercises**: Quiz components in exercises section
4. **Code Syntax Highlighting**: Add react-syntax-highlighter
5. **Audio Support**: Text-to-speech for accessibility
6. **Print Styles**: Optimized layout for printing
7. **Dark/Light Mode Toggle**: Theme switcher
8. **Mobile Optimization**: Enhanced mobile layout
