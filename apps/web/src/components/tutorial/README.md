# Tutorial Page Components

This directory contains all components for the individual tutorial page layout.

## Main Component

### `TutorialPage.tsx`
The main tutorial page component that orchestrates all sub-components. Located in `components/TutorialPage.tsx`.

**Features:**
- Loads tutorial data based on URL parameter
- Manages section navigation state
- Handles prerequisite warnings
- Supports both legacy (step-based) and new (section-based) tutorial formats
- Integrates 3D visualizations

## Sub-Components

### `Breadcrumb.tsx`
Navigation breadcrumb showing: Home > Category > Tutorial Title

**Props:**
- `category: string` - Category display name
- `categoryId: string` - Category identifier for linking
- `tutorialTitle: string` - Current tutorial title

### `TutorialHeader.tsx`
Header section with tutorial metadata

**Props:**
- `title: string` - Tutorial title
- `description: string` - Tutorial description
- `difficulty: number` - Difficulty level (1-10)
- `estimatedMinutes: number` - Estimated completion time
- `tags: string[]` - Topic tags

**Features:**
- Visual difficulty stars (★★★☆☆☆☆☆☆☆)
- Badge-style tags
- Estimated time display

### `PrerequisiteWarning.tsx`
Conditional warning banner for recommended prerequisites

**Props:**
- `prerequisiteName: string` - Name of prerequisite tutorial
- `onIgnore: () => void` - Handler for "ignore" button
- `onGoToPrerequisite: () => void` - Handler for "go to prerequisite" button

**Features:**
- Warning icon and styling
- Two action buttons for user choice

### `SectionNavigation.tsx`
Tab/pill navigation for tutorial sections

**Props:**
- `sections: SectionType[]` - Available sections
- `currentSection: SectionType` - Currently active section
- `currentIndex: number` - Index of current section
- `totalSections: number` - Total number of sections
- `onSectionClick: (section: SectionType) => void` - Section click handler

**Features:**
- Progress indicator (e.g., "3/6")
- Active section highlighting with pulse animation
- Completed sections marked with checkmarks
- Visual progress bar

**Section Types:**
- `hook` - Motivational introduction
- `concept` - Definition and theory
- `visualization` - 3D/interactive visualization
- `examples` - Concrete examples
- `exercises` - Practice problems (optional)
- `summary` - Key points and next steps

### `ContentRenderer.tsx`
Renders tutorial content with rich formatting support

**Props:**
- `content: string` - Content in MDX/Markdown format
- `sectionType: string` - Type of section being rendered

**Features:**
- Markdown processing (headers, bold, inline code)
- LaTeX math support (placeholder for future KaTeX integration)
  - Inline: `$...$`
  - Block: `$$...$$`
- Section label badge
- Syntax highlighting (planned)

### `NavigationButtons.tsx`
Previous/Next section navigation buttons

**Props:**
- `onPrevious?: () => void` - Previous section handler (optional)
- `onNext?: () => void` - Next section handler (optional)
- `previousLabel?: string` - Custom previous button text
- `nextLabel?: string` - Custom next button text

**Features:**
- Conditionally rendered based on navigation availability
- Styled with Button component variants

### `TutorialFooter.tsx`
Footer with related tutorials and navigation links

**Props:**
- `relatedTutorials: string[]` - IDs of related tutorials
- `category: string` - Current tutorial category

**Features:**
- "Next Tutorial" recommendation (first related tutorial)
- Grid of related tutorials
- "Back to Category" link

## File Structure

```
apps/web/src/components/
├── TutorialPage.tsx          # Main tutorial page component
└── tutorial/
    ├── index.ts              # Exports all sub-components
    ├── Breadcrumb.tsx
    ├── TutorialHeader.tsx
    ├── PrerequisiteWarning.tsx
    ├── SectionNavigation.tsx
    ├── ContentRenderer.tsx
    ├── NavigationButtons.tsx
    ├── TutorialFooter.tsx
    └── README.md
```

## Layout Structure

```
TutorialPage
├── Breadcrumb                (Home > Category > Tutorial)
├── TutorialHeader            (Title, difficulty, time, tags)
├── PrerequisiteWarning       (Conditional warning banner)
├── SectionNavigation         (Section tabs/pills with progress)
├── Content Grid (2 columns)
│   ├── ContentRenderer       (Left: Text content)
│   └── Visualization         (Right: 3D scene)
├── NavigationButtons         (Previous/Next section)
└── TutorialFooter           (Next tutorial, related tutorials)
```

## Usage Example

```tsx
import TutorialPage from '@/components/TutorialPage';

// In your router
<Route path="/tutorial/:id" element={<TutorialPage />} />
```

## Styling

All components use:
- **Tailwind CSS** for styling
- **Dark theme** with slate/indigo color scheme
- **Responsive design** with mobile-first approach
- **Smooth transitions** and animations

## Future Enhancements

1. **KaTeX Integration**
   - Add `katex` and `react-katex` dependencies
   - Implement LaTeX rendering in ContentRenderer

2. **MDX Support**
   - Add `@mdx-js/react` for full MDX support
   - Support custom React components in content

3. **Syntax Highlighting**
   - Add `react-syntax-highlighter` for code blocks
   - Support multiple programming languages

4. **Progress Persistence**
   - Save section progress to localStorage/backend
   - Resume from last position

5. **Interactive Elements**
   - Add quiz components
   - Interactive code examples
   - Drag-and-drop exercises
