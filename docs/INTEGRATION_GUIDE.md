# LearnMath Integration Guide

Complete reference for the LearnMath curriculum system architecture, components, and workflows.

## Table of Contents

1. [System Overview](#system-overview)
2. [Component Architecture](#component-architecture)
3. [Data Flow](#data-flow)
4. [Adding New Tutorials](#adding-new-tutorials)
5. [Testing Strategy](#testing-strategy)
6. [Deployment](#deployment)

---

## System Overview

LearnMath is a modular, educational platform with 690+ interactive mathematics tutorials organized across 19 categories. The system is built as a monorepo with clear separation of concerns:

- **`@learnmath/tutorials`** (packages/tutorials): Core tutorial content and types
- **`@learnmath/core`** (packages/core): Mathematical utilities and 3D visualization helpers
- **`@learnmath/web`** (apps/web): React-based web application
- **`@learnmath/mobile`** (apps/mobile): React Native mobile application

### Key Characteristics

- **19 Categories**: Set Theory, Trigonometry, Linear Algebra, Differential/Integral Calculus, Exponential/Logarithmic, Complex Numbers, Algebra, Discrete Math, Graph Theory, Category Theory, ODE, PDE, Laplace, Fourier, Statistics, Probability
- **690+ Tutorials**: Comprehensive coverage with difficulty levels 1-10
- **Structured Content**: Hook → Concept → Visualization → Examples → Exercises → Summary
- **Progress Tracking**: Zustand-based state management with localStorage persistence
- **3D Visualization**: Three.js integration for mathematical concepts
- **LaTeX Support**: KaTeX rendering for mathematical notation

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    LearnMath Monorepo                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  @learnmath/tutorials (Content & Types)                    │
│  ├── categories.ts (19 categories metadata)                │
│  ├── types.ts (TutorialNew, TutorialSections, etc.)       │
│  ├── glossary.ts (Mathematical terminology)               │
│  └── [19 category folders]                                │
│      └── [Individual .ts tutorial files]                  │
│                                                             │
│  @learnmath/core (Math Utilities)                          │
│  ├── vector3.ts                                            │
│  ├── matrix3.ts                                            │
│  ├── transforms.ts                                         │
│  └── trigonometry.ts                                       │
│                                                             │
│  @learnmath/web (React Application)                        │
│  ├── src/components/                                       │
│  │   ├── CategoryGrid.tsx                                  │
│  │   ├── TutorialTreeView.tsx                              │
│  │   ├── SearchFilter.tsx                                  │
│  │   ├── TutorialPage.tsx                                  │
│  │   ├── Dashboard.tsx                                     │
│  │   ├── scene/ (3D scenes)                                │
│  │   └── tutorial/ (tutorial sub-components)              │
│  ├── src/store/                                            │
│  │   └── userProgressStore.ts (Zustand store)             │
│  └── src/pages/                                            │
│                                                             │
│  @learnmath/mobile (React Native)                          │
│  └── [Mobile-specific components]                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Architecture

### 1. CategoryGrid Component

**Purpose**: Display all 19 categories with progress tracking and foundational indicators.

**When to Use**:
- Landing page / dashboard homepage
- Category selection interface
- Curriculum overview

**Props**:

```typescript
interface CategoryGridProps {
  categories: Category[];
  userProgress: Record<string, TutorialProgress>;
  onSelectCategory: (categoryId: string) => void;
}
```

**Key Features**:
- Displays difficulty stars (baseDifficulty scaled to 1-5)
- Shows "CORE" badge for foundational categories
- Progress bars showing completion percentage
- Hover animations and color-coded borders
- Estimated hours display

**Example Usage**:

```tsx
import { CategoryGrid } from '@/components/CategoryGrid';
import { useUserProgressStore } from '@/store/userProgressStore';
import { categories } from '@learnmath/tutorials/categories';

export function HomePage() {
  const userProgress = useUserProgressStore((state) => state.tutorialProgress);
  
  return (
    <CategoryGrid
      categories={categories}
      userProgress={userProgress}
      onSelectCategory={(categoryId) => {
        navigate(`/category/${categoryId}`);
      }}
    />
  );
}
```

**Component Structure**:

```
CategoryGrid
├── CategoryCard (for each category)
│   ├── Foundational Badge
│   ├── Icon + Name + Difficulty Stars
│   ├── Description
│   ├── Progress Bar
│   ├── Estimated Hours
│   └── Tutorial Count
```

---

### 2. TutorialTreeView Component

**Purpose**: Display tutorials in a tree structure showing prerequisite relationships and category hierarchy.

**When to Use**:
- Category detail page
- Prerequisite visualization
- Learning path planning
- Curriculum exploration

**Props**:

```typescript
interface TutorialTreeViewProps {
  categoryId: string;
  tutorials: Tutorial[];
  userProgress: Record<string, TutorialProgress>;
  onSelectTutorial: (tutorialId: string) => void;
  expandedNodes?: Set<string>;
  onToggleExpand?: (nodeId: string) => void;
}
```

**Key Features**:
- Hierarchical tree layout
- Visual status indicators (completed/in-progress/locked/available)
- Prerequisite linking
- Color-coded difficulty levels
- Search/filter integration
- Expand/collapse sections

**Example Usage**:

```tsx
import { TutorialTreeView } from '@/components/TutorialTreeView';
import { getTutorialsByCategory } from '@learnmath/tutorials';
import { useUserProgressStore } from '@/store/userProgressStore';

export function CategoryPage({ categoryId }: { categoryId: string }) {
  const tutorials = getTutorialsByCategory(categoryId);
  const userProgress = useUserProgressStore((state) => state.tutorialProgress);
  const [expandedNodes, setExpandedNodes] = useState(new Set<string>());

  return (
    <TutorialTreeView
      categoryId={categoryId}
      tutorials={tutorials}
      userProgress={userProgress}
      onSelectTutorial={(id) => navigate(`/tutorial/${id}`)}
      expandedNodes={expandedNodes}
      onToggleExpand={(id) => {
        const newSet = new Set(expandedNodes);
        newSet.has(id) ? newSet.delete(id) : newSet.add(id);
        setExpandedNodes(newSet);
      }}
    />
  );
}
```

**Tree Node Types**:

```
Category
├── Tutorial A (difficulty: 3)
│   └── Interactive Elements
├── Tutorial B (prerequisite: A)
│   └── Status: Locked (until A completed)
└── Tutorial C
    └── Suggested Prerequisites: [B, Tutorial from other category]
```

---

### 3. SearchFilter Component

**Purpose**: Global search across all tutorials with filtering by category, difficulty, and prerequisites.

**When to Use**:
- Navigation bar
- Global search interface
- Tutorial discovery
- Curriculum exploration

**Props**:

```typescript
interface SearchFilterProps {
  tutorials: Tutorial[];
  categories: Category[];
  userProgress: Record<string, TutorialProgress>;
  onResultsChange: (results: Tutorial[]) => void;
  placeholder?: string;
  showFilters?: boolean;
}
```

**Key Features**:
- Full-text search (title, description, ID)
- Filter by category
- Filter by difficulty range
- Filter by status (completed, in-progress, available)
- Filter by prerequisites (show tutorials with/without prerequisites)
- Real-time results
- Result count and pagination

**Example Usage**:

```tsx
import { SearchFilter } from '@/components/SearchFilter';
import { allTutorials, categories } from '@learnmath/tutorials';
import { useUserProgressStore } from '@/store/userProgressStore';

export function SearchPage() {
  const [filteredTutorials, setFilteredTutorials] = useState<Tutorial[]>([]);
  const userProgress = useUserProgressStore((state) => state.tutorialProgress);

  return (
    <div className="space-y-6">
      <SearchFilter
        tutorials={allTutorials}
        categories={categories}
        userProgress={userProgress}
        onResultsChange={setFilteredTutorials}
        showFilters={true}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}
```

**Filter Options**:

```typescript
interface SearchFilters {
  query: string;              // Free text search
  categoryId?: string;        // Single category
  difficultyMin?: number;     // 1-10
  difficultyMax?: number;
  status?: TutorialStatus[];  // 'completed', 'in-progress', 'locked', 'available'
  hasPrerequisites?: boolean; // true = only tutorials with prerequisites
  isFoundational?: boolean;   // true = only foundational tutorials
}
```

---

### 4. TutorialPage Component

**Purpose**: Render complete interactive tutorial with all content sections.

**When to Use**:
- Tutorial viewing
- Learning interaction
- Progress tracking
- Assessment

**Props**:

```typescript
interface TutorialPageProps {
  tutorialId: string;
  onComplete?: (tutorialId: string) => void;
  onProgressChange?: (progress: number) => void;
}
```

**Key Features**:
- Section navigation (hook → summary)
- 3D scene rendering with interactive controls
- LaTeX math equation display
- Quiz integration with answer validation
- Interactive elements (sliders, drag interactions)
- Prerequisite warnings
- Breadcrumb navigation
- Next/previous tutorial navigation
- Progress indicators

**Example Usage**:

```tsx
import { TutorialPage } from '@/components/TutorialPage';
import { useUserProgressStore } from '@/store/userProgressStore';

export function TutorialView({ tutorialId }: { tutorialId: string }) {
  const markCompleted = useUserProgressStore((state) => state.markCompleted);
  
  return (
    <TutorialPage
      tutorialId={tutorialId}
      onComplete={(id) => markCompleted(id)}
      onProgressChange={(progress) => {
        // Track section progress
        console.log(`Progress: ${progress}%`);
      }}
    />
  );
}
```

**Section Rendering Flow**:

```
TutorialPage (route: /tutorial/:id)
├── Breadcrumb (Category > Tutorial)
├── TutorialHeader (Title, Description, Metadata)
├── PrerequisiteWarning (if not completed)
├── SectionNavigation (Hook, Concept, Visualization, Examples, Exercises, Summary)
├── ContentRenderer (Markdown + LaTeX)
├── Scene3D / Custom Scenes (based on customScene property)
├── Interactive Elements (if interactive: true)
├── Quiz Overlay (if stepType: 'quiz')
├── NavigationButtons (Previous, Next, Mark Complete)
└── TutorialFooter (Related tutorials, Glossary terms)
```

**Scene Rendering**:

TutorialPage supports multiple scene types:

```typescript
function renderScene(customScene: string | undefined, sceneConfig: SceneConfig) {
  switch (customScene) {
    case 'cos-graph': return <TrigGraphScene mode="cos" />;
    case 'sin-graph': return <TrigGraphScene mode="sin" />;
    case 'interactive-unit-circle': return <InteractiveUnitCircle {...props} />;
    case 'pendulum': return <PendulumScene />;
    case 'wave-superposition': return <WaveScene />;
    case 'circular-motion': return <CircularMotionScene />;
    case 'spring': return <SpringScene />;
    case 'double-angle': return <DoubleAngleScene multiplier={2} />;
    // ... more scenes
    default: return <Scene3D sceneConfig={sceneConfig} />;
  }
}
```

---

### 5. Dashboard Component

**Purpose**: Personalized user home page showing progress, recommendations, and learning statistics.

**When to Use**:
- User home page
- Progress overview
- Learning dashboard
- Statistics display

**Props**:

```typescript
interface DashboardProps {
  userId?: string;
  showRecommendations?: boolean;
  showStatistics?: boolean;
  maxRecentTutorials?: number;
}
```

**Key Features**:
- Overall progress statistics
- Recently accessed tutorials
- Recommended next tutorials (based on prerequisites)
- Category completion summaries
- Learning streak tracking
- Time spent tracking
- Difficulty progression visualization
- Achievement badges

**Example Usage**:

```tsx
import { Dashboard } from '@/components/Dashboard';

export function DashboardPage() {
  return (
    <Dashboard
      showRecommendations={true}
      showStatistics={true}
      maxRecentTutorials={5}
    />
  );
}
```

**Dashboard Sections**:

```
Dashboard
├── Statistics Panel
│   ├── Total Tutorials Completed
│   ├── Total Learning Time
│   ├── Current Streak
│   └── Average Difficulty Completed
├── Progress by Category (Grid)
│   └── CategoryProgressCard (for each category)
├── Recent Activity
│   └── RecentTutorialCard (last 5)
├── Recommended Next
│   └── RecommendationCard (based on prerequisites)
├── Achievements
│   └── AchievementBadge (unlocked milestones)
└── Learning Paths
    └── PathCard (curated learning sequences)
```

---

## Data Flow

### 1. User Progress Store (Zustand)

**Location**: `/apps/web/src/store/userProgressStore.ts`

**State Structure**:

```typescript
interface UserProgressState {
  tutorialProgress: Record<string, TutorialProgress>;
  markCompleted: (tutorialId: string) => void;
  markInProgress: (tutorialId: string, progress?: number) => void;
  getTutorialStatus: (tutorialId: string, hasPrerequisites?: boolean) => TutorialStatus;
  reset: () => void;
}

interface TutorialProgress {
  tutorialId: string;
  status: 'completed' | 'in-progress' | 'locked' | 'available';
  completedAt?: Date;
  lastAccessedAt?: Date;
  progress?: number; // 0-100
}
```

**Persistence**: LocalStorage with key `user-progress-storage`

**Usage**:

```tsx
import { useUserProgressStore } from '@/store/userProgressStore';

function MyComponent() {
  // Subscribe to specific state
  const markCompleted = useUserProgressStore((state) => state.markCompleted);
  const tutorialStatus = useUserProgressStore((state) => state.getTutorialStatus('group-definition'));
  
  // Subscribe to entire progress
  const allProgress = useUserProgressStore((state) => state.tutorialProgress);
  
  // Update progress
  const handleComplete = () => {
    markCompleted('group-definition');
  };
  
  return <button onClick={handleComplete}>Mark Complete</button>;
}
```

**Status Determination Logic**:

```
Tutorial Status = getTutorialStatus(tutorialId, hasPrerequisites)

if (progress?.status === 'completed') → 'completed'
if (progress?.status === 'in-progress') → 'in-progress'
if (hasPrerequisites && !prerequisiteCompleted) → 'locked'
else → 'available'
```

### 2. Tutorial Data Flow

**Data Source**: `@learnmath/tutorials` package

```
Tutorial Data (TypeScript)
    ↓
getTutorialById(id) / getTutorialsByCategory(category)
    ↓
Tutorial Component Props
    ↓
Content Renderer (Markdown + LaTeX)
    ↓
Scene Renderer (3D visualization)
    ↓
User View
```

**Key Data Functions**:

```typescript
// Get single tutorial
function getTutorialById(id: string): Tutorial | undefined

// Get all tutorials in category
function getTutorialsByCategory(categoryId: string): Tutorial[]

// Get all tutorials
const allTutorials: Tutorial[]

// Get category metadata
function getCategoryById(id: string): Category | undefined
const allCategories: Category[]
```

**Tutorial Data Structure**:

```typescript
interface TutorialNew {
  // Identification
  id: string;                              // 'group-definition'
  title: string;                           // '群の定義'
  description: string;
  category: TutorialCategory;              // 'algebra'
  
  // Curriculum metadata
  difficulty: number;                      // 1-10
  prerequisite?: string;                   // Single mandatory prereq
  suggestedPrerequisites?: string[];       // Optional cross-category prereqs
  estimatedMinutes: number;
  
  // Content sections
  sections: TutorialSections;
  
  // Additional metadata
  migrationStatus: MigrationStatus;        // 'complete' for new tutorials
  tags?: string[];
  relatedTutorials?: string[];
}

interface TutorialSections {
  hook: Section;           // Motivational intro (100-200 chars)
  concept: Section;        // Definition/theory (300-500 chars)
  visualization: Section;  // 3D/interactive visualization
  examples: Section;       // Concrete examples (2+ required)
  exercises?: Section;     // Practice problems (optional)
  summary: Section;        // Key points/next steps (100-150 chars)
}

interface Section {
  content: string;                    // MDX format with LaTeX
  sceneConfig?: SceneConfig;          // 3D visualization config
  interactive?: boolean;
}
```

### 3. Navigation Flow

```
Landing Page (/)
    ↓
CategoryGrid Display (all 19 categories)
    ↓
User clicks category
    ↓
Category Page (/category/:categoryId)
    ↓
TutorialTreeView Display
    ↓
User clicks tutorial
    ↓
TutorialPage (/tutorial/:tutorialId)
    ↓
User navigates sections (hook → summary)
    ↓
User completes tutorial
    ↓
markCompleted() → userProgressStore
    ↓
Next/Related tutorials offered
    ↓
Back to Category or Search
```

**Route Structure**:

```
/                           → Dashboard or Landing
/dashboard                  → User dashboard
/category/:categoryId       → Category with TutorialTreeView
/tutorial/:tutorialId       → Full tutorial view
/search                     → Global search with SearchFilter
/profile                    → User statistics
/about                      → About & help
```

---

## Adding New Tutorials

### 1. File Structure

```
packages/tutorials/src/
└── [category]/
    └── [tutorial-id].ts
```

**Example**: `packages/tutorials/src/algebra/subgroup.ts`

### 2. Required Fields

Create a new file following this template:

```typescript
// packages/tutorials/src/algebra/subgroup.ts
import { Tutorial } from '../types';

export const subgroupTutorial: Tutorial = {
  // Basic identification
  id: 'subgroup',
  title: '部分群（Subgroup）',
  description: '群の部分集合で群をなすもの',
  category: 'algebra',
  
  // Difficulty (1-10 scale based on prerequisite knowledge depth)
  // 1-2: Foundational (set theory)
  // 3-4: Basic (group-definition, cyclic-group)
  // 5-6: Intermediate (direct-product, quotient-group)
  // 7-8: Advanced (Galois theory concepts)
  // 9-10: Expert (research-level)
  difficulty: 5,
  
  // Prerequisites
  prerequisite: 'group-definition',    // Single mandatory within category
  suggestedPrerequisites: ['closure'], // Optional cross-category
  
  // Estimated learning time
  estimatedMinutes: 25,
  
  // New structured section format
  sections: {
    hook: {
      content: `
# 何が部分群か？

群 G の部分集合 H で、H 自身も群をなすものを「部分群」と呼びます。

例：
- (ℤ, +) の中の (2ℤ, +)（偶数と足し算）
- D₄（正方形の対称性）の中の回転だけの部分
- 複雑な群から「シンプルな部分」を抽出できる

その「部分」だけで完結した構造を持つ集合です。
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
    },

    concept: {
      content: `
## 部分群の定義

集合 H が群 G の部分群 ⟺

1. **部分集合**: H ⊆ G
2. **閉性**: ∀a, b ∈ H, a ∗ b ∈ H
3. **単位元**: e ∈ H
4. **逆元**: ∀a ∈ H, a⁻¹ ∈ H

短くしたバージョン（部分群判定法）:
- H ≠ ∅
- ∀a, b ∈ H, a ∗ b⁻¹ ∈ H

この1つの条件で4つの公理をすべて満たす！
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
    },

    visualization: {
      content: `
## 部分群の構造

考えてみましょう：

（ℤ, +）= {..., -4, -2, 0, 2, 4, 6, ...} と足し算

この部分群は：
- 2ℤ = {..., -4, -2, 0, 2, 4, 6, ...}（偶数）
- 3ℤ = {..., -3, 0, 3, 6, ...}（3の倍数）
- 5ℤ = {..., -5, 0, 5, 10, ...}（5の倍数）
- ℤ = 全体（自分自身も部分群）
- {0}（単位元だけ）

これらはすべて (ℤ, +) の部分群です。
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
    },

    examples: {
      content: `
## 具体例

**例1: 回転群**
正三角形の対称性 D₃ = {e, r, r², s, sr, sr²}
部分群：
- {e}（何もしない）
- {e, r, r²}（回転だけ）← これは巡回群！

**例2: ベクトル**
(ℝ³, +) = 3次元ベクトル全体
部分群：
- xy平面上のベクトル {(x, y, 0) : x, y ∈ ℝ}
- 直線 t(1, 2, 3) 上のベクトル {t(1, 2, 3) : t ∈ ℝ}

**例3: 行列**
GL_n(ℝ)（可逆な n×n 行列）
部分群：
- SO_n(ℝ)（回転行列）
- O_n(ℝ)（直交行列）
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
    },

    exercises: {
      content: `
## 練習問題

1. (ℤ, +) で n ℤ = {nk : k ∈ ℤ} が部分群か確認せよ
2. 行列 SL_n(ℝ) = {A ∈ GL_n(ℝ) : det(A) = 1} が GL_n(ℝ) の部分群か確認
3. D₄ の部分群をすべて列挙せよ（少なくとも5つ）
4. (ℚ, +) の部分群で (ℤ, +) より大きいものの例を2つ挙げよ
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
    },

    summary: {
      content: `
## まとめ

- **部分群**: 群の部分集合で群をなすもの
- **判定法**: H ≠ ∅ かつ ∀a, b ∈ H, a ∗ b⁻¹ ∈ H
- **重要**: Gの構造を「階層的に」理解する道具
- **次のステップ**: 正規部分群 → 剰余群 → 準同型定理

すべての群は「より小さな部分群から構成」される！
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
    },
  },

  // Metadata
  migrationStatus: 'complete',
  tags: ['algebra', 'group-theory', 'substructure'],
  relatedTutorials: ['group-definition', 'normal-subgroup', 'quotient-group', 'lagrange-theorem'],
};
```

### 3. Section Guidelines

| Section | Purpose | Length | Interactive | LaTeX |
|---------|---------|--------|-------------|-------|
| **hook** | Motivational intro, why this matters | 100-200 chars | No | Minimal |
| **concept** | Formal definition, main theory | 300-500 chars | No | Heavy |
| **visualization** | 3D scenes, interactive elements, diagrams | Variable | Yes | Moderate |
| **examples** | 2+ concrete examples with calculations | 500+ chars | No | Heavy |
| **exercises** | Practice problems (optional) | 300-400 chars | No | Moderate |
| **summary** | Key points, next tutorial, review | 100-150 chars | No | Minimal |

### 4. LaTeX Notation

Use **inline KaTeX** with `$...$` for expressions:

```markdown
The group axiom $a \in G$ satisfies closure: $a * b \in G$

Display mode with $$...$$:
$$\forall a, b \in G: a * b \in G$$

Common patterns:
- Sets: $\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$
- Functions: $f: X \to Y$
- Logic: $\forall, \exists, \in, \subseteq, \supset$
- Operators: $\times, \cdot, *, \oplus, \wedge$
- Special: $e, a^{-1}, a^n, \sqrt{x}, \frac{a}{b}$
```

### 5. Exporting the Tutorial

Update the category's index file:

```typescript
// packages/tutorials/src/algebra/index.ts
import { subgroupTutorial } from './subgroup';
import { groupDefinitionTutorial } from './group-definition';
// ... other imports

export const algebraTutorials = [
  groupDefinitionTutorial,
  subgroupTutorial,
  // ... in logical order
];
```

Then ensure it's in the main index:

```typescript
// packages/tutorials/src/index.ts
import { algebraTutorials } from './algebra';
import { trigonometryTutorials } from './trigonometry';
// ... other categories

export const allTutorials = [
  ...algebraTutorials,
  ...trigonometryTutorials,
  // ... all categories
];

export function getTutorialById(id: string): Tutorial | undefined {
  return allTutorials.find((t) => t.id === id);
}
```

---

## Testing Strategy

### 1. Component Testing

Test components with **Vitest** and **React Testing Library**:

```typescript
// apps/web/src/components/__tests__/CategoryGrid.test.tsx
import { render, screen } from '@testing-library/react';
import { CategoryGrid } from '../CategoryGrid';
import { categories } from '@learnmath/tutorials/categories';

describe('CategoryGrid', () => {
  it('renders all categories', () => {
    const userProgress = {};
    render(
      <CategoryGrid
        categories={categories}
        userProgress={userProgress}
        onSelectCategory={vi.fn()}
      />
    );
    
    // Check all category titles appear
    categories.forEach((cat) => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    });
  });

  it('displays foundational badge for core categories', () => {
    const userProgress = {};
    render(
      <CategoryGrid
        categories={categories}
        userProgress={userProgress}
        onSelectCategory={vi.fn()}
      />
    );
    
    const coreBadges = screen.getAllByText('CORE');
    expect(coreBadges.length).toBeGreaterThan(0);
  });

  it('shows correct progress percentage', () => {
    const userProgress = {
      'tutorial-1': { tutorialId: 'tutorial-1', status: 'completed' },
      'tutorial-2': { tutorialId: 'tutorial-2', status: 'completed' },
    };
    
    // Mock total tutorials in category...
    // Verify progress bar shows 2/X completed
  });

  it('calls onSelectCategory when card clicked', async () => {
    const onSelect = vi.fn();
    const userProgress = {};
    
    render(
      <CategoryGrid
        categories={categories}
        userProgress={userProgress}
        onSelectCategory={onSelect}
      />
    );
    
    const categoryCard = screen.getByText('Set Theory').closest('div');
    await userEvent.click(categoryCard!);
    
    expect(onSelect).toHaveBeenCalledWith('set-theory');
  });
});
```

### 2. Integration Testing

Test data flow between components and store:

```typescript
// apps/web/src/__tests__/tutorial-flow.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { TutorialPage } from '../components/TutorialPage';
import { useUserProgressStore } from '../store/userProgressStore';

describe('Tutorial Flow', () => {
  beforeEach(() => {
    // Reset store before each test
    useUserProgressStore.setState({ tutorialProgress: {} });
  });

  it('loads tutorial and marks complete on user action', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <TutorialPage tutorialId="group-definition" />
      </BrowserRouter>
    );

    // Tutorial loads
    await waitFor(() => {
      expect(getByText('群の定義')).toBeInTheDocument();
    });

    // User clicks "Mark Complete"
    const completeButton = getByText('Mark Complete');
    await userEvent.click(completeButton);

    // Store updates
    await waitFor(() => {
      const progress = useUserProgressStore.getState().tutorialProgress;
      expect(progress['group-definition']?.status).toBe('completed');
    });
  });

  it('shows prerequisite warning if not completed', async () => {
    render(
      <BrowserRouter>
        <TutorialPage tutorialId="subgroup" />
      </BrowserRouter>
    );

    // Prerequisite 'group-definition' not completed
    await waitFor(() => {
      expect(screen.getByText(/Complete.*group-definition/)).toBeInTheDocument();
    });
  });

  it('unlocks tutorial after prerequisite completion', async () => {
    // Complete prerequisite
    useUserProgressStore.getState().markCompleted('group-definition');

    render(
      <BrowserRouter>
        <TutorialPage tutorialId="subgroup" />
      </BrowserRouter>
    );

    // No warning shown
    await waitFor(() => {
      expect(screen.queryByText(/Prerequisite/)).not.toBeInTheDocument();
    });
  });
});
```

### 3. User Flow Testing

End-to-end testing with **Playwright** or **Cypress**:

```typescript
// e2e/user-journey.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Learning Journey', () => {
  test('complete category learning path', async ({ page }) => {
    // Visit home
    await page.goto('http://localhost:5173/');
    
    // See categories
    await expect(page.getByText('Set Theory')).toBeVisible();
    
    // Click category
    await page.getByText('Set Theory').click();
    
    // See tutorials in tree
    await expect(page.getByText('element-membership')).toBeVisible();
    
    // Start first tutorial
    await page.getByText('element-membership').click();
    
    // View sections
    await expect(page.getByText('Hook')).toBeVisible();
    await page.getByRole('button', { name: 'Next Section' }).click();
    await expect(page.getByText('Concept')).toBeVisible();
    
    // Complete tutorial
    await page.getByRole('button', { name: 'Mark Complete' }).click();
    
    // Verify progress saved
    const progress = await page.evaluate(() =>
      JSON.parse(localStorage.getItem('user-progress-storage') || '{}')
    );
    expect(progress.state.tutorialProgress['element-membership'].status).toBe('completed');
  });

  test('show recommendations based on progress', async ({ page }) => {
    // Complete set theory category
    await page.goto('http://localhost:5173/');
    
    // Navigate through tutorials...
    // (Complete several tutorials)
    
    // Go to dashboard
    await page.goto('http://localhost:5173/dashboard');
    
    // See recommended next tutorials
    await expect(page.getByText(/Recommended/)).toBeVisible();
    
    // Recommendations should be from next category based on prerequisites
  });
});
```

### 4. Data Validation Testing

```typescript
// packages/tutorials/src/__tests__/tutorial-structure.test.ts
import { allTutorials } from '../index';
import { categories } from '../categories';

describe('Tutorial Structure Validation', () => {
  it('all tutorials have required fields', () => {
    allTutorials.forEach((tutorial) => {
      expect(tutorial.id).toBeDefined();
      expect(tutorial.title).toBeDefined();
      expect(tutorial.description).toBeDefined();
      expect(tutorial.category).toBeDefined();
      expect(tutorial.difficulty).toBeGreaterThanOrEqual(1);
      expect(tutorial.difficulty).toBeLessThanOrEqual(10);
      expect(tutorial.estimatedMinutes).toBeGreaterThan(0);
      expect(tutorial.sections).toBeDefined();
    });
  });

  it('all tutorials belong to valid categories', () => {
    const categoryIds = categories.map((c) => c.id);
    
    allTutorials.forEach((tutorial) => {
      expect(categoryIds).toContain(tutorial.category);
    });
  });

  it('prerequisites exist', () => {
    allTutorials.forEach((tutorial) => {
      if (tutorial.prerequisite) {
        const prereq = allTutorials.find((t) => t.id === tutorial.prerequisite);
        expect(prereq).toBeDefined();
        expect(prereq?.category).toBe(tutorial.category);
      }
    });
  });

  it('sections have valid content', () => {
    allTutorials.forEach((tutorial) => {
      const { sections } = tutorial;
      
      // Required sections
      expect(sections.hook?.content).toBeTruthy();
      expect(sections.concept?.content).toBeTruthy();
      expect(sections.visualization?.content).toBeTruthy();
      expect(sections.examples?.content).toBeTruthy();
      expect(sections.summary?.content).toBeTruthy();
      
      // Content length guidelines
      expect(sections.hook.content.length).toBeLessThan(300);
      expect(sections.concept.content.length).toBeGreaterThan(200);
    });
  });

  it('LaTeX math is valid', () => {
    allTutorials.forEach((tutorial) => {
      Object.values(tutorial.sections).forEach((section) => {
        // Check balanced $ signs
        const inline = section.content.match(/\$[^$]*\$/g) || [];
        const display = section.content.match(/\$\$[\s\S]*?\$\$/g) || [];
        
        inline.forEach((match) => {
          expect(match).toMatch(/^\$[^$]+\$$/);
        });
      });
    });
  });
});
```

---

## Deployment

### 1. Build Process

```bash
# Install dependencies
pnpm install

# Type check all packages
pnpm typecheck

# Build packages
pnpm build

# Run all tests
pnpm test

# Lint and format
pnpm lint
```

**Build Output**:
- `packages/tutorials/dist/` - Tutorial content library
- `packages/core/dist/` - Math utilities library
- `apps/web/dist/` - Web application bundle

### 2. Environment Variables

**`.env.local`** for development:

```env
# API
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=30000

# Analytics (optional)
VITE_ANALYTICS_ID=
VITE_ANALYTICS_ENABLED=false

# Feature flags
VITE_ENABLE_QUIZZES=true
VITE_ENABLE_EXERCISES=true
VITE_MAX_CONCURRENT_SCENES=3

# Performance
VITE_DISABLE_SCENE_OPTIMIZATION=false
VITE_ENABLE_DEBUG_LOGS=false
```

**`.env.production`** for production:

```env
VITE_API_BASE_URL=https://api.learnmath.app
VITE_API_TIMEOUT=30000
VITE_ANALYTICS_ENABLED=true
VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
VITE_ENABLE_QUIZZES=true
VITE_ENABLE_EXERCISES=true
VITE_DISABLE_SCENE_OPTIMIZATION=false
VITE_ENABLE_DEBUG_LOGS=false
```

### 3. Database Setup (Optional)

If implementing backend storage for progress:

**PostgreSQL Schema**:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tutorial_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  tutorial_id VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL CHECK (status IN ('completed', 'in-progress', 'locked', 'available')),
  progress FLOAT DEFAULT 0,
  completed_at TIMESTAMP,
  last_accessed_at TIMESTAMP,
  UNIQUE(user_id, tutorial_id)
);

CREATE INDEX idx_tutorial_progress_user_id ON tutorial_progress(user_id);
CREATE INDEX idx_tutorial_progress_tutorial_id ON tutorial_progress(tutorial_id);
```

**Backend Sync** (optional Node.js endpoint):

```typescript
// API endpoint to sync progress
POST /api/progress/sync
{
  userId: string;
  tutorialProgress: Record<string, TutorialProgress>;
}
```

### 4. CDN Setup for Assets

**Images and Models**:

```typescript
// Store 3D models, images on CDN
const CDN_BASE = 'https://cdn.learnmath.app';

// Load 3D model
const modelUrl = `${CDN_BASE}/models/group-visualization.glb`;

// Load image asset
const imageUrl = `${CDN_BASE}/images/set-diagram.png`;
```

**CloudFront** (AWS) or **Cloudflare** setup:

```
Domain: cdn.learnmath.app
Origin: storage.learnmath.app
Cache Policy: 1 year for versioned assets
Compression: gzip for text, brotli for JS
```

### 5. Deployment Checklist

- [ ] **Pre-deployment**
  - [ ] Run `pnpm test` - all tests pass
  - [ ] Run `pnpm typecheck` - no TS errors
  - [ ] Run `pnpm lint` - code quality checks
  - [ ] Update version in `package.json`
  - [ ] Update `CHANGELOG.md`

- [ ] **Build**
  - [ ] `pnpm build` completes successfully
  - [ ] Check bundle size (`pnpm build -- --analyze`)
  - [ ] Verify no console errors in build output
  - [ ] Test built app locally

- [ ] **Environment**
  - [ ] Set all `.env.production` variables
  - [ ] Verify API endpoints are correct
  - [ ] Enable analytics in production
  - [ ] Configure CDN bucket/distribution

- [ ] **Database** (if applicable)
  - [ ] Run migrations: `npm run migrate`
  - [ ] Verify schema created correctly
  - [ ] Create database backups
  - [ ] Test connection from app

- [ ] **Monitoring**
  - [ ] Set up error tracking (Sentry)
  - [ ] Configure performance monitoring
  - [ ] Set up uptime monitoring
  - [ ] Create alert rules

- [ ] **Content**
  - [ ] Verify all 690+ tutorials load
  - [ ] Check LaTeX rendering in 5+ tutorials
  - [ ] Test 3D scenes in browsers (Chrome, Firefox, Safari)
  - [ ] Test on mobile devices

- [ ] **Post-deployment**
  - [ ] Monitor error logs for 24 hours
  - [ ] Test complete user flow
  - [ ] Verify progress sync works
  - [ ] Check CDN is serving assets
  - [ ] Create deployment record

### 6. Performance Optimization

**Bundle Size Targets**:
```
Main bundle:     < 300 KB gzipped
Tutorials lib:   < 200 KB gzipped
3D scenes:       < 100 KB per scene
```

**Optimization Tips**:

```typescript
// Lazy load 3D scenes
const Scene3D = lazy(() => import('./scene/Scene3D'));

// Code split by category
const algebraTutorials = lazy(() => 
  import('@learnmath/tutorials/algebra')
);

// Preload critical routes
<link rel="prefetch" href="/category/set-theory" />

// Compress tutorial data
const compressed = pako.gzip(JSON.stringify(tutorials));
```

**Monitoring Query**:

```javascript
// In browser console
performance.getEntriesByType('navigation')[0].toJSON();
// Check: DOMContentLoaded, loadEventEnd, transferSize
```

---

## Quick Reference

### Import Paths

```typescript
// Get tutorials
import { allTutorials, getTutorialById } from '@learnmath/tutorials';
import { categories, type Category } from '@learnmath/tutorials/categories';
import { glossary } from '@learnmath/tutorials/glossary';

// Components
import { CategoryGrid } from '@/components/CategoryGrid';
import { TutorialTreeView } from '@/components/TutorialTreeView';
import { SearchFilter } from '@/components/SearchFilter';
import { TutorialPage } from '@/components/TutorialPage';
import { Dashboard } from '@/components/Dashboard';

// Store
import { useUserProgressStore } from '@/store/userProgressStore';

// Utilities
import { Vector3, Matrix3, trigonometry } from '@learnmath/core';
```

### Common Patterns

**Get tutorials in category with filter**:
```typescript
const algebraTutorials = getTutorialsByCategory('algebra')
  .filter(t => t.difficulty <= 6);
```

**Check if tutorial is accessible**:
```typescript
const isLocked = tutorial.prerequisite && 
  !userProgress[tutorial.prerequisite]?.status === 'completed';
```

**Get next recommended tutorial**:
```typescript
const nextTutorial = allTutorials.find(t => 
  t.prerequisite === currentTutorialId
);
```

**Calculate category progress**:
```typescript
const categoryProgress = getTutorialsByCategory(categoryId)
  .filter(t => userProgress[t.id]?.status === 'completed')
  .length;
```

---

## Support & Resources

- **Documentation**: See `/docs/` folder
- **Component Examples**: Check `.example.tsx` files
- **Content Guidelines**: `/docs/content-guidelines.md`
- **API Reference**: Inline JSDoc in component files
- **Issues**: GitHub issues for bug reports

---

## Version Info

- **Current**: 690 tutorials across 19 categories
- **Last Updated**: January 31, 2026
- **Stability**: Production ready
- **Support**: Node.js 20+, pnpm 9+

