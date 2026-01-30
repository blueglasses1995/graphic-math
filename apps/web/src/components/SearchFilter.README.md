# SearchFilter Component

A comprehensive search and filter component for browsing tutorials with advanced filtering, sorting, and search capabilities.

## Features

### 1. Search Input with Debouncing
- Real-time search with 300ms debounce
- Searches across tutorial titles, descriptions, and tags
- Visual search icon indicator

### 2. Filter Controls

#### Difficulty Range Slider (1-10)
- Dual-range slider for minimum and maximum difficulty
- Real-time visual feedback of selected range
- Filters tutorials based on their difficulty rating

#### Category Multi-Select Dropdown
- Dropdown list of all 19 tutorial categories
- Shows count of tutorials in each category
- Multiple categories can be selected simultaneously
- Badge display showing number of selected categories

#### Tags Input with Autocomplete
- Type-ahead search for available tags
- Shows top 5 matching suggestions
- Selected tags displayed as removable pills
- Tags can be removed by clicking the × button

#### Completion Status Checkboxes
- Three states: Not Started, In Progress, Completed
- Integrates with UserProgress store
- Multiple statuses can be selected
- Visual badges distinguish each status

### 3. Sort Dropdown
Available sorting options:
- Recently Added (default)
- Difficulty: Low to High
- Difficulty: High to Low
- Time Estimate: Shortest First
- Time Estimate: Longest First

### 4. Clear All Filters Button
- Single-click to reset all filters to defaults
- Resets:
  - Search query
  - Difficulty range (1-10)
  - Selected categories
  - Selected tags
  - Completion status filters
  - Sort order (back to "recently added")

### 5. Results List
Each tutorial card displays:
- **Title and Description**: Clear heading with full description preview
- **Status Badge**: Color-coded badge (gray/blue/green) showing completion status
- **Difficulty Stars**: Visual star rating (1-10 stars)
- **Time Estimate**: Clock icon with estimated minutes
- **Category Badge**: Purple badge with category name
- **Tags**: Up to 5 tags displayed, with "+X more" indicator
- **Navigation Arrow**: Click anywhere on card to navigate to tutorial

### 6. Empty State
When no results match filters:
- Large friendly icon
- Clear message explaining no results
- Suggestion to modify search criteria
- Quick "Clear Filters" button

## Usage

```tsx
import SearchFilter from './components/SearchFilter';

function App() {
  return <SearchFilter />;
}
```

## Integration Points

### Data Sources
- **allCategories**: Imported from `@learnmath/tutorials`
- Aggregates all tutorials across 19 categories
- Extracts unique tags from all tutorials

### Store Integration
- **useCompletedTutorials()**: Gets Set of completed tutorial IDs
- **useInProgressTutorials()**: Gets Map of tutorials with progress
- Real-time status updates as user completes tutorials

### Navigation
- Uses `react-router-dom` for navigation
- Clicking a tutorial card navigates to `/tutorial/:id`

## State Management

### Filter State
```typescript
interface FilterState {
  searchQuery: string;
  difficultyRange: [number, number];
  selectedCategories: Set<string>;
  selectedTags: Set<string>;
  completionStatus: Set<CompletionStatus>;
  sortBy: SortOption;
}
```

### UI State
- `debouncedSearch`: Debounced version of search query
- `showCategoryDropdown`: Controls category dropdown visibility
- `showTagDropdown`: Controls tag autocomplete visibility
- `tagInput`: Current tag search input value

## Styling

### Tailwind CSS Classes
- Modern, clean design with consistent spacing
- Responsive grid layout (1/2/4 columns based on screen size)
- Hover effects on interactive elements
- Color-coded status badges
- Shadow and border styling for depth

### Color Scheme
- **Primary**: Blue (blue-600, blue-700) for actions
- **Success**: Green (green-100, green-700) for completed
- **Info**: Blue (blue-100, blue-700) for in-progress
- **Neutral**: Gray (gray-100, gray-600) for not started
- **Accent**: Purple (purple-100, purple-700) for categories
- **Warning**: Yellow (yellow-400) for star ratings

## Performance Optimizations

### useMemo Hooks
- `categoryOptions`: Computed once, cached
- `allTags`: Extracted once from all tutorials
- `filteredTutorials`: Recomputed only when filters change
- `tagSuggestions`: Filtered based on current input

### useCallback Hooks
- `getTutorialStatus`: Memoized status lookup function

### Debouncing
- Search input debounced by 300ms to reduce renders
- Prevents excessive filtering during typing

## Accessibility

- Semantic HTML structure
- Proper label associations
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA-compliant form controls

## TypeScript Types

All interfaces and types are fully typed:
- `CompletionStatus`: Union type for tutorial completion states
- `SortOption`: Union type for available sort options
- `FilterState`: Complete filter configuration
- `CategoryOption`: Category metadata with counts

## Example Filter Scenarios

### Find Beginner Algebra Tutorials
1. Set difficulty range: 1-3
2. Select "代数学" category
3. Status: "Not Started"

### Find Advanced In-Progress Topics
1. Set difficulty range: 8-10
2. Status: "In Progress"
3. Sort by: "Time Estimate: Longest First"

### Search by Tag
1. Type tag name in Tags input
2. Select from autocomplete suggestions
3. Combine with other filters as needed

## Future Enhancements

Potential improvements:
- Save filter presets
- Recent searches history
- Advanced search syntax (AND/OR operators)
- Export filtered results
- Share filter configurations via URL
- Keyboard shortcuts for common operations
- Bulk actions on filtered results
