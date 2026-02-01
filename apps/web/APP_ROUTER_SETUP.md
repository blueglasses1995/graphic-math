# React Router v6 Setup Documentation

## Overview

The application uses React Router v6 with a complete routing structure for the LearnMath learning platform. The main App component orchestrates all routes and includes a persistent layout wrapper with navigation, view mode switching, and user progress tracking.

## File Structure

```
apps/web/src/
├── App.tsx                          # Main router configuration with route definitions
├── layouts/
│   └── AppLayout.tsx               # Header, navigation, and footer layout component
├── pages/
│   ├── HomePage.tsx                # Home page with category grid
│   ├── TutorialPage.tsx            # Immersive tutorial view
│   ├── Dashboard.tsx               # User learning dashboard (NEW)
│   └── SandboxPage.tsx             # Experimental sandbox
└── components/
    ├── CategoryGrid.tsx            # Category card grid
    ├── TutorialTreeView.tsx        # Tree view of tutorials
    └── SearchFilter.tsx            # Search and filter interface
```

## Route Configuration

### Available Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Home page with category overview |
| `/category/:id` | TutorialTreeView | Category-specific tutorial tree view |
| `/tutorial/:id` | TutorialPage | Immersive tutorial learning view |
| `/search` | SearchFilter | Advanced search and filter interface |
| `/dashboard` | Dashboard | User progress dashboard |
| `/sandbox` | SandboxPage | Experimental sandbox environment |
| `*` | 404 Page | Catch-all not found page |

## Component Details

### App.tsx

Main application component handling:
- Route definitions
- View mode state management (`'grid'`, `'tree'`, `'search'`)
- Layout wrapper conditionals (hidden on immersive pages)
- User progress calculation
- Footer component

**Key Features:**
- Immersive view on tutorial pages (no header/footer)
- Normal layout on all other pages
- Progress tracking integration with Zustand store
- Responsive 404 page

### AppLayout.tsx

Header and navigation layout with:

#### Header Section
- Logo with π icon linking to home
- Desktop navigation menu (Home, Search, Dashboard)
- Mobile hamburger menu
- User progress indicator (percentage)

#### View Mode Switcher
- Grid view button (◈)
- Tree view button (🌳)
- Search view button (🔍)
- Desktop and mobile versions

#### Features
- **Responsive Design:**
  - Desktop: Full navigation bar
  - Tablet: Condensed navigation
  - Mobile: Hamburger menu with dropdown

- **Progress Indicator:**
  - Shows overall completion percentage
  - Hidden on very small screens
  - Color-coded with indigo-purple gradient

- **Mobile Menu:**
  - Sticky positioned hamburger
  - Auto-closes on navigation
  - Includes view mode switcher
  - Shows progress bar

### Dashboard.tsx

Comprehensive learning progress dashboard with:

#### Overview Statistics
- Completed tutorials count
- In-progress tutorials count
- Overall completion percentage
- Estimated hours spent

#### Category Progress
- Category cards with completion bars
- Color-coded by category
- Shows in-progress count
- Clickable to filter view

#### Recent Activity Section
- In-progress tutorials list
- Recently completed tutorials list
- Links to continue learning

#### Gamification Elements
- Learning streak counter (🔥)
- Weekly learning goal tracker
- Goal progress visualization

### Footer Component

Located in App.tsx with:
- Brand information
- Navigation links
- Resources section
- Community links
- Legal links (privacy, terms, contact)

## State Management

### User Progress Store

Uses Zustand (`useUserProgressStore`) to manage:
- Tutorial progress status ('completed', 'in-progress', 'locked', 'available')
- Completion dates
- Last accessed dates
- Progress percentage (0-100)

```typescript
interface TutorialProgress {
  tutorialId: string;
  status: TutorialStatus;
  completedAt?: Date;
  lastAccessedAt?: Date;
  progress?: number; // 0-100
}
```

### View Mode State

Local state in App component:
```typescript
const [viewMode, setViewMode] = useState<'grid' | 'tree' | 'search'>('grid');
```

## Styling

### Tailwind CSS Classes Used

**Color Scheme:**
- Background: `bg-slate-900`, `bg-slate-800`
- Text: `text-white`, `text-gray-400`
- Accents: `indigo-600`, `purple-500`, `amber-500`
- Borders: `border-slate-700`

**Layout:**
- Container: `container mx-auto px-4`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flexbox: `flex items-center justify-between`

**Components:**
- Buttons: `px-4 py-2 rounded-lg hover:opacity-80 transition-colors`
- Cards: `bg-slate-800 rounded-xl p-6 border border-slate-700`
- Progress bars: `h-2 bg-slate-700 rounded-full overflow-hidden`

## Responsive Breakpoints

- **Mobile-first approach** using Tailwind breakpoints
- `sm:` (640px) - Progress bar visibility
- `md:` (768px) - Desktop navigation, grid columns
- `lg:` (1024px) - View mode switcher visible

## Navigation Patterns

### Programmatic Navigation
```typescript
const navigate = useNavigate();
navigate('/tutorial/some-id');
```

### Link Navigation
```typescript
<Link to="/dashboard" className="...">Dashboard</Link>
```

### Route Parameters
```typescript
// Accessing route params
const { id } = useParams<{ id: string }>();
```

### Active Link Styling
```typescript
const isActive = (path: string) => location.pathname === path;
```

## Layout Display Logic

```typescript
// Hide layout on immersive pages
const shouldShowLayout = !location.pathname.startsWith('/tutorial') &&
                         !location.pathname.startsWith('/sandbox');
```

## Performance Optimizations

1. **Layout Conditional Rendering:**
   - Header/footer only render on non-immersive pages
   - Reduces re-renders on tutorial pages

2. **Mobile Menu Auto-close:**
   - Menu closes on route change
   - Prevents stale menu state

3. **Progress Calculation:**
   - Uses `useMemo` in Dashboard
   - Recalculates only when progress store changes

## Accessibility Features

- Semantic HTML structure
- ARIA labels on buttons (`aria-label="Toggle menu"`)
- Keyboard navigation support via React Router
- Color contrast meets WCAG standards
- Skip to main content patterns available

## Browser Support

- Modern browsers (ES2020+)
- React 18.2.0+
- React Router v6.22.0+
- Tailwind CSS 3.4.1+

## Integration with Existing Components

### CategoryGrid Integration
- Displays on home page
- Shows all 19 categories
- Links to `/category/:id`
- Shows progress per category

### TutorialTreeView Integration
- Shows tutorials for selected category
- Dependency graph visualization
- Progress tracking per tutorial
- Links to `/tutorial/:id`

### SearchFilter Integration
- Advanced search across all tutorials
- Filter by difficulty, category, tags
- Sort options (difficulty, time, recently added)
- Shows tutorial completion status

## Development Notes

### Adding New Routes

1. Create page component in `pages/` folder
2. Add Route in App.tsx:
```typescript
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link in AppLayout.tsx if needed

### Customizing Layout

- Modify `AppLayout.tsx` for header changes
- Edit Footer component at bottom of `App.tsx`
- Adjust colors in Tailwind classes

### Updating Progress Tracking

- Use `useUserProgressStore` hook
- Call `markCompleted()` or `markInProgress()`
- Progress persists to localStorage

## Testing Routes

```typescript
// Navigate to routes
- http://localhost:5173/
- http://localhost:5173/category/algebra
- http://localhost:5173/tutorial/group-definition
- http://localhost:5173/search
- http://localhost:5173/dashboard
- http://localhost:5173/sandbox
```

## Future Enhancements

- [ ] Authentication/user accounts
- [ ] Dark/light theme toggle
- [ ] Breadcrumb navigation
- [ ] Search suggestions
- [ ] Achievement badges
- [ ] Social sharing features
- [ ] Discussion forums
- [ ] Certificate generation
- [ ] Mobile app version
- [ ] Offline mode support

## Common Issues & Solutions

### Layout flashing on page load
- **Cause:** Layout conditionals re-evaluate
- **Solution:** Use CSS `display: none` instead of conditional rendering

### Mobile menu stays open
- **Cause:** State not cleared on navigation
- **Solution:** Menu already auto-closes via `handleNavigation()`

### Progress not updating
- **Cause:** Store not persisting
- **Solution:** Check Zustand persist middleware is enabled

### Routes not found
- **Cause:** Missing route definition
- **Solution:** Add route to `<Routes>` in App.tsx

## Related Documentation

- React Router v6: https://reactrouter.com/
- Zustand: https://github.com/pmndrs/zustand
- Tailwind CSS: https://tailwindcss.com/
- React Hooks: https://react.dev/reference/react
