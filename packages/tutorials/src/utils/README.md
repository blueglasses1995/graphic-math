# Tutorial Utilities

Utility functions for tutorial management, including difficulty calculation, validation, and analysis.

## Files

### `calculateDifficulty.ts`

Implements the automatic difficulty calculation algorithm from the curriculum design document (section 2.1).

#### Core Functions

##### `calculateDifficulty(tutorial, allTutorials): number`

Calculates the difficulty level of a single tutorial (1-10 scale).

**Algorithm:**
1. Traverse prerequisite chain to calculate depth
2. Map depth to base difficulty: `Math.min(Math.ceil(depth * 1.5) + 1, 10)`
3. Apply adjustment factors:
   - Suggested prerequisites: 0.5 per item
   - Has exercises section: 0.5
   - Category bonus: 0-2
4. Clamp final result to 1-10 range

**Parameters:**
- `tutorial: Tutorial` - The tutorial to analyze
- `allTutorials: Map<string, Tutorial>` - Map of all tutorials indexed by ID

**Returns:** `number` - Difficulty level from 1 to 10

**Example:**
```typescript
import { calculateDifficulty } from '@learnmath/tutorials/utils';

const tutorials = new Map([
  ['closure', { id: 'closure', category: 'algebra', prerequisite: undefined, ... }],
  ['group-def', { id: 'group-def', category: 'algebra', prerequisite: 'closure', ... }],
]);

const difficulty = calculateDifficulty(tutorials.get('group-def'), tutorials);
// Returns: 2 or 3 (1 level deep, 0.5 category bonus for algebra)
```

##### `calculatePrerequisiteDepth(tutorial, allTutorials): number`

Traverses the prerequisite chain and returns the depth (number of prerequisites in the chain).

**Parameters:**
- `tutorial: Tutorial` - The tutorial to analyze
- `allTutorials: Map<string, Tutorial>` - Map of all tutorials for lookup

**Returns:** `number` - Chain depth (0 = no prerequisites)

##### `getCategoryBonus(category): number`

Returns the difficulty bonus for a given category.

**Parameters:**
- `category: TutorialCategory` - The tutorial category

**Returns:** `number` - Bonus modifier (0-2)

**Category Bonuses:**

| Category | Bonus | Rationale |
|----------|-------|-----------|
| exponential | 0 | Intuitive growth/decay |
| trigonometry | 0 | Visual, circle-based |
| set-theory | 0 | Foundation of all math |
| linear-algebra | 0.5 | Visual via vectors/matrices |
| differential-calculus | 0.5 | Intuitive rate of change |
| discrete-math | 0.5 | Algorithmic thinking |
| probability | 0.5 | Intuitive once understood |
| statistics | 0.5 | Applied probability |
| logarithmic | 0.5 | Inverse of exponential |
| graph-theory | 1 | Visual but requires abstraction |
| complex-numbers | 1 | 2D visualization helps |
| algebra | 1 | Abstract structures |
| fourier | 1.5 | Multiple field integration |
| ode | 1.5 | Dynamic systems |
| integral-calculus | 1 | Extension of differential |
| laplace | 1.5 | Engineering abstraction |
| pde | 2 | Highly abstract systems |
| topology | 2 | High-level abstraction |
| category-theory | 2 | Most abstract, foundational |

#### Batch Functions

##### `calculateDifficultiesBatch(tutorials, allTutorials): number[]`

Efficiently calculates difficulty for multiple tutorials.

**Parameters:**
- `tutorials: Tutorial[]` - Array of tutorials
- `allTutorials: Map<string, Tutorial>` - Map of all tutorials

**Returns:** `number[]` - Array of difficulties in same order as input

##### `validateTutorialDifficultiesBatch(tutorials, allTutorials): DifficultyValidationResult[]`

Validates difficulty for multiple tutorials.

#### Validation Functions

##### `validateTutorialDifficulty(tutorial, allTutorials): DifficultyValidationResult`

Validates that a tutorial's difficulty is >= its prerequisite's difficulty.

**Returns:** `DifficultyValidationResult` with:
- `isValid: boolean` - Whether validation passed
- `tutorial: string` - Tutorial ID
- `difficulty: number` - Calculated difficulty
- `prerequisiteDifficulty?: number` - Prerequisite's difficulty (if exists)
- `message: string` - Human-readable validation message

#### Analysis Functions

##### `analyzeDifficultyDistribution(tutorials, allTutorials): DifficultyDistribution`

Analyzes difficulty distribution across tutorials.

**Returns:** `DifficultyDistribution` with:
- `total: number` - Total tutorial count
- `byLevel: Record<number, number>` - Count of tutorials at each difficulty level
- `byCategory: Record<string, { count: number; averageDifficulty: number }>` - Per-category statistics
- `statistics: { min, max, mean, median, standardDeviation }` - Statistical summary

**Useful for:**
- Curriculum validation and balance checking
- Identifying gaps in difficulty distribution
- Category-level analysis

### Constants

#### `CATEGORY_BONUSES`

Complete mapping of all 19 categories to their difficulty bonuses.

```typescript
import { CATEGORY_BONUSES } from '@learnmath/tutorials/utils';

const bonus = CATEGORY_BONUSES['algebra']; // → 1
```

#### `DIFFICULTY_LEVELS`

Array of difficulty level definitions with descriptions and examples.

```typescript
import { DIFFICULTY_LEVELS } from '@learnmath/tutorials/utils';

DIFFICULTY_LEVELS[2]; // → {
  // level: 2,
  // label: 'Beginner (2)',
  // description: 'Entry-level topics, single prerequisite',
  // examples: ['Basic group properties', 'Matrix operations'],
  // ...
}
```

## Types

All types are exported from `calculateDifficulty.ts`:

### `DifficultyLevel`

```typescript
interface DifficultyLevel {
  level: number;
  range: [number, number];
  label: string;
  description: string;
  prerequisiteDepth: string;
  examples: string[];
}
```

### `DifficultyValidationResult`

```typescript
interface DifficultyValidationResult {
  isValid: boolean;
  tutorial: string;
  difficulty: number;
  prerequisiteDifficulty?: number;
  message: string;
}
```

### `DifficultyDistribution`

```typescript
interface DifficultyDistribution {
  total: number;
  byLevel: Record<number, number>;
  byCategory: Record<string, { count: number; averageDifficulty: number }>;
  statistics: {
    min: number;
    max: number;
    mean: number;
    median: number;
    standardDeviation: number;
  };
}
```

## Usage Examples

### Basic Usage

```typescript
import {
  calculateDifficulty,
  getCategoryBonus,
  CATEGORY_BONUSES,
} from '@learnmath/tutorials/utils';

// Load all tutorials into a Map
const allTutorials = new Map<string, Tutorial>();
// ... populate map ...

// Calculate difficulty for a single tutorial
const tutorial = allTutorials.get('group-definition');
const difficulty = calculateDifficulty(tutorial, allTutorials);
console.log(`Difficulty: ${difficulty}/10`);

// Get category bonus
const bonus = getCategoryBonus('algebra');
console.log(`Algebra bonus: +${bonus}`);
```

### Batch Analysis

```typescript
import {
  calculateDifficultiesBatch,
  analyzeDifficultyDistribution,
} from '@learnmath/tutorials/utils';

const algebraTutorials = Array.from(allTutorials.values()).filter(
  (t) => t.category === 'algebra'
);

// Get all difficulties
const difficulties = calculateDifficultiesBatch(algebraTutorials, allTutorials);
console.log(`Average algebra difficulty: ${difficulties.reduce((a, b) => a + b) / difficulties.length}`);

// Full distribution analysis
const distribution = analyzeDifficultyDistribution(algebraTutorials, allTutorials);
console.log('Distribution:', distribution.statistics);
// → { min: 1, max: 8, mean: 4.5, median: 4, standardDeviation: 1.8 }
```

### Validation

```typescript
import {
  validateTutorialDifficultiesBatch,
} from '@learnmath/tutorials/utils';

const allTutorialsList = Array.from(allTutorials.values());
const results = validateTutorialDifficultiesBatch(allTutorialsList, allTutorials);

const invalid = results.filter((r) => !r.isValid);
invalid.forEach((result) => {
  console.warn(`Issue: ${result.message}`);
});
```

## Integration with Tutorial Schema

The difficulty calculation functions work with the `Tutorial` type from `types.ts`.

**Required tutorial fields:**
- `id: string` - Unique identifier
- `category: TutorialCategory` - One of 19 supported categories
- `prerequisite?: string` - Optional single mandatory prerequisite
- `suggestedPrerequisites?: string[]` - Optional suggested prerequisites
- `sections?: TutorialSections` - Content sections (exercises field checked)

**Optional fields:**
- `difficulty?: number` - Can be pre-calculated or auto-computed
- `migrationStatus?: MigrationStatus` - Migration tracking

## Notes

- **Error handling:** Functions handle missing prerequisites gracefully with console warnings
- **Circular dependencies:** Not explicitly prevented; ensure your prerequisite chains are acyclic
- **Performance:** Batch functions are more efficient than individual calls for large datasets
- **Caching:** Consider caching results if calling frequently with unchanged data
- **Rounding:** All final difficulties are rounded to the nearest integer

## Alignment with Design Document

This implementation directly follows the curriculum design from `docs/plans/2026-01-30-curriculum-design.md`:

- **Section 2.1:** Difficulty calculation algorithm (base + factors + clamp)
- **Section 2.2:** Difficulty level meanings and expected depths
- **19 categories:** All categories with their bonuses (section 4.2)
- **Schema:** Uses `Tutorial` type from new curriculum structure

See the design document for detailed rationale and curriculum context.
