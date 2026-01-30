# Difficulty Calculation - Quick Reference

## Core Functions

### Calculate Single Tutorial
```typescript
import { calculateDifficulty } from '@learnmath/tutorials/utils';

const difficulty = calculateDifficulty(tutorial, allTutorials);
// Returns: number (1-10)
```

### Get Category Bonus
```typescript
import { getCategoryBonus } from '@learnmath/tutorials/utils';

const bonus = getCategoryBonus('algebra');
// Returns: 1 (for algebra category)
```

### Batch Calculate
```typescript
import { calculateDifficultiesBatch } from '@learnmath/tutorials/utils';

const difficulties = calculateDifficultiesBatch(tutorials, allTutorials);
// Returns: number[]
```

### Validate Tutorial
```typescript
import { validateTutorialDifficulty } from '@learnmath/tutorials/utils';

const result = validateTutorialDifficulty(tutorial, allTutorials);
// Returns: { isValid, tutorial, difficulty, prerequisiteDifficulty, message }
```

### Analyze Distribution
```typescript
import { analyzeDifficultyDistribution } from '@learnmath/tutorials/utils';

const stats = analyzeDifficultyDistribution(tutorials, allTutorials);
// Returns: { total, byLevel, byCategory, statistics }
```

## Category Bonuses Reference

### Foundational (0.0)
- `exponential`
- `trigonometry`
- `set-theory`

### Semi-Foundational (0.5)
- `linear-algebra`
- `differential-calculus`
- `discrete-math`
- `probability`
- `statistics`
- `logarithmic`

### Intermediate (1.0)
- `algebra`
- `complex-numbers`
- `integral-calculus`
- `graph-theory`

### Advanced (1.5)
- `fourier`
- `ode`
- `laplace`

### Highly Abstract (2.0)
- `pde`
- `topology`
- `category-theory`

## Algorithm Summary

```
Final Difficulty = CLAMP(
  CEIL(depth × 1.5) + 1           // base from prerequisites
  + suggestedPrereqCount × 0.5     // multiple prerequisites
  + (hasExercises ? 0.5 : 0)       // practice problems
  + categoryBonus,                 // intrinsic category difficulty
  1, 10                            // valid range
)
```

## Constants

### DIFFICULTY_LEVELS
Array of 10 difficulty level definitions with descriptions and examples.

```typescript
import { DIFFICULTY_LEVELS } from '@learnmath/tutorials/utils';

DIFFICULTY_LEVELS[2].label
// → "Beginner (2)"
```

### CATEGORY_BONUSES
Map of all 19 categories to their bonuses.

```typescript
import { CATEGORY_BONUSES } from '@learnmath/tutorials/utils';

CATEGORY_BONUSES['algebra']
// → 1
```

## Types

### DifficultyValidationResult
```typescript
{
  isValid: boolean;
  tutorial: string;
  difficulty: number;
  prerequisiteDifficulty?: number;
  message: string;
}
```

### DifficultyDistribution
```typescript
{
  total: number;
  byLevel: Record<number, number>;
  byCategory: Record<string, {
    count: number;
    averageDifficulty: number;
  }>;
  statistics: {
    min: number;
    max: number;
    mean: number;
    median: number;
    standardDeviation: number;
  };
}
```

## Common Patterns

### Load and Calculate All
```typescript
const tutorials = loadTutorials();
const allTutorials = new Map(tutorials.map(t => [t.id, t]));

tutorials.forEach(t => {
  t.difficulty = calculateDifficulty(t, allTutorials);
});
```

### Find Difficulty Issues
```typescript
const results = validateTutorialDifficultiesBatch(
  tutorials,
  allTutorials
);

const issues = results.filter(r => !r.isValid);
issues.forEach(issue => console.warn(issue.message));
```

### Category Analysis
```typescript
const categoryTutorials = tutorials.filter(
  t => t.category === 'algebra'
);

const dist = analyzeDifficultyDistribution(
  categoryTutorials,
  allTutorials
);

console.log(`Algebra avg difficulty: ${dist.statistics.mean}`);
```

### Check Prerequisites
```typescript
import { calculatePrerequisiteDepth } from '@learnmath/tutorials/utils';

const depth = calculatePrerequisiteDepth(tutorial, allTutorials);
console.log(`Chain depth: ${depth}`);
```

## Export Import Options

### Named Imports (Recommended)
```typescript
import {
  calculateDifficulty,
  getCategoryBonus,
  CATEGORY_BONUSES,
} from '@learnmath/tutorials/utils';
```

### Namespace Import
```typescript
import * as utils from '@learnmath/tutorials/utils';

const difficulty = utils.calculateDifficulty(tutorial, allTutorials);
```

### Type-Only Import
```typescript
import type {
  DifficultyValidationResult,
  DifficultyDistribution,
} from '@learnmath/tutorials/utils';
```

## Performance Tips

1. **Use batch operations** for multiple tutorials
   ```typescript
   // Good: Single pass
   const diffs = calculateDifficultiesBatch(tutorials, allTutorials);
   
   // Slow: Multiple passes
   tutorials.forEach(t => calculateDifficulty(t, allTutorials));
   ```

2. **Cache results** if calling repeatedly
   ```typescript
   const cache = new Map<string, number>();
   
   function cachedCalculate(id: string): number {
     if (!cache.has(id)) {
       const t = allTutorials.get(id)!;
       cache.set(id, calculateDifficulty(t, allTutorials));
     }
     return cache.get(id)!;
   }
   ```

3. **Reuse allTutorials Map** across calls
   ```typescript
   const allTutorials = new Map(tutorials.map(t => [t.id, t]));
   
   // Pass same map to all functions
   calculateDifficultiesBatch(tutorials, allTutorials);
   analyzeDifficultyDistribution(tutorials, allTutorials);
   validateTutorialDifficultiesBatch(tutorials, allTutorials);
   ```

## Debugging

### Enable logging for missing prerequisites
Missing prerequisites log console.warn() automatically:
```
[calculatePrerequisiteDepth] Prerequisite not found: "xyz" (referenced by "abc")
```

### Check individual tutorial details
```typescript
const t = allTutorials.get('group-definition');
const depth = calculatePrerequisiteDepth(t, allTutorials);
const bonus = getCategoryBonus(t.category);
const difficulty = calculateDifficulty(t, allTutorials);

console.log(`${t.id}: depth=${depth}, bonus=${bonus}, difficulty=${difficulty}`);
```

### Validate before batch operations
```typescript
const validation = validateTutorialDifficultiesBatch(tutorials, allTutorials);
const invalid = validation.filter(r => !r.isValid);

if (invalid.length > 0) {
  console.warn('Fix these before processing:');
  invalid.forEach(i => console.warn(`  - ${i.message}`));
} else {
  // Safe to process
  const dist = analyzeDifficultyDistribution(tutorials, allTutorials);
}
```

## Links

- **Source:** `packages/tutorials/src/utils/calculateDifficulty.ts`
- **API Docs:** `packages/tutorials/src/utils/README.md`
- **Examples:** `packages/tutorials/src/utils/EXAMPLES.md`
- **Design:** `docs/plans/2026-01-30-curriculum-design.md` (Section 2.1)
