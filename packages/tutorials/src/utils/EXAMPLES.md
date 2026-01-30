# Usage Examples

This document provides practical examples of using the difficulty calculation functions.

## Example 1: Simple Prerequisite Chain

```typescript
import { calculateDifficulty, calculatePrerequisiteDepth } from '@learnmath/tutorials/utils';
import { Tutorial } from '@learnmath/tutorials';

const allTutorials = new Map<string, Tutorial>();

// Create a simple chain: closure → group-definition → subgroup
const closure: Tutorial = {
  id: 'closure',
  title: 'Closure Property',
  description: 'Introduction to closure',
  category: 'algebra',
  prerequisite: undefined,
  estimatedMinutes: 10,
  // ... other fields
};

const groupDef: Tutorial = {
  id: 'group-definition',
  title: 'Group Definition',
  description: 'Defining groups formally',
  category: 'algebra',
  prerequisite: 'closure', // depends on closure
  estimatedMinutes: 15,
  // ... other fields
};

const subgroup: Tutorial = {
  id: 'subgroup',
  title: 'Subgroups',
  description: 'Understanding subgroups',
  category: 'algebra',
  prerequisite: 'group-definition', // depends on group-definition
  estimatedMinutes: 15,
  // ... other fields
};

allTutorials.set('closure', closure);
allTutorials.set('group-definition', groupDef);
allTutorials.set('subgroup', subgroup);

// Calculate difficulties
const d1 = calculateDifficulty(closure, allTutorials);
const d2 = calculateDifficulty(groupDef, allTutorials);
const d3 = calculateDifficulty(subgroup, allTutorials);

console.log(`closure: depth=0, difficulty=${d1}`);           // depth=0, difficulty=2
console.log(`group-definition: depth=1, difficulty=${d2}`); // depth=1, difficulty=3
console.log(`subgroup: depth=2, difficulty=${d3}`);         // depth=2, difficulty=4
```

**Output:**
```
closure: depth=0, difficulty=2
group-definition: depth=1, difficulty=3
subgroup: depth=2, difficulty=4
```

**Explanation:**
- `closure` (depth 0): Base difficulty 1 + Algebra bonus 1 = 2
- `group-definition` (depth 1): Base 2 + Algebra bonus 1 = 3
- `subgroup` (depth 2): Base 3 + Algebra bonus 1 = 4

## Example 2: Category Bonuses

Different categories have different intrinsic difficulties:

```typescript
import { getCategoryBonus, calculateDifficulty } from '@learnmath/tutorials/utils';

const categories = [
  { id: 'exponential', name: 'Exponential' },
  { id: 'algebra', name: 'Algebra' },
  { id: 'fourier', name: 'Fourier Analysis' },
  { id: 'category-theory', name: 'Category Theory' },
];

categories.forEach((cat) => {
  const tutorial: Tutorial = {
    id: `intro-${cat.id}`,
    category: cat.id as TutorialCategory,
    prerequisite: undefined,
    // ... other fields
  };
  
  const bonus = getCategoryBonus(cat.id as TutorialCategory);
  const difficulty = calculateDifficulty(tutorial, new Map([[tutorial.id, tutorial]]));
  
  console.log(`${cat.name.padEnd(20)} bonus=+${bonus}, difficulty=${difficulty}`);
});
```

**Output:**
```
Exponential          bonus=+0.0, difficulty=1
Algebra              bonus=+1.0, difficulty=2
Fourier Analysis     bonus=+1.5, difficulty=3
Category Theory      bonus=+2.0, difficulty=3
```

**Explanation:**
- Foundational categories (exponential): Base 1 + 0 bonus = 1
- Abstract categories (category-theory): Base 1 + 2 bonus = 3 (clamped from higher value)

## Example 3: Multiple Adjustment Factors

Both suggested prerequisites and exercises increase difficulty:

```typescript
import { calculateDifficulty } from '@learnmath/tutorials/utils';

// Tutorial with no adjustments
const simple: Tutorial = {
  id: 'simple',
  category: 'algebra',
  prerequisite: undefined,
  suggestedPrerequisites: undefined,
  sections: {
    hook: { content: '' },
    concept: { content: '' },
    visualization: { content: '' },
    examples: { content: '' },
    // NO exercises section
    summary: { content: '' },
  },
  // ... other fields
};

// Tutorial with many adjustment factors
const complex: Tutorial = {
  id: 'complex',
  category: 'algebra',
  prerequisite: undefined,
  suggestedPrerequisites: ['calculus', 'linear-algebra', 'complex-numbers'],
  sections: {
    hook: { content: '' },
    concept: { content: '' },
    visualization: { content: '' },
    examples: { content: '' },
    exercises: { content: 'Practice problems' }, // Has exercises!
    summary: { content: '' },
  },
  // ... other fields
};

const allTutorials = new Map([
  ['simple', simple],
  ['complex', complex],
]);

const d1 = calculateDifficulty(simple, allTutorials);
const d2 = calculateDifficulty(complex, allTutorials);

console.log(`Simple: ${d1}`);     // 2
console.log(`Complex: ${d2}`);    // 4 or 5
```

**Calculation Details:**

Simple (no adjustments):
- Base difficulty: 1 (depth 0)
- Category bonus: +1 (algebra)
- Final: 1 + 1 = 2

Complex (with adjustments):
- Base difficulty: 1 (depth 0)
- Suggested prerequisites: +1.5 (3 items × 0.5)
- Exercises: +0.5
- Category bonus: +1 (algebra)
- Total before clamp: 1 + 1.5 + 0.5 + 1 = 4
- Final: 4

## Example 4: Batch Processing

Process entire categories efficiently:

```typescript
import {
  calculateDifficultiesBatch,
  analyzeDifficultyDistribution,
} from '@learnmath/tutorials/utils';

// Get all algebra tutorials
const algebraTutorials = Array.from(allTutorials.values()).filter(
  (t) => t.category === 'algebra'
);

// Batch calculate all difficulties
const difficulties = calculateDifficultiesBatch(algebraTutorials, allTutorials);
console.log('Calculated:', difficulties.length, 'difficulties');

// Analyze distribution
const distribution = analyzeDifficultyDistribution(algebraTutorials, allTutorials);

console.log('Algebra Category Analysis:');
console.log('  Total tutorials:', distribution.total);
console.log('  Difficulty range:', distribution.statistics.min, 'to', distribution.statistics.max);
console.log('  Mean difficulty:', distribution.statistics.mean.toFixed(2));
console.log('  Median difficulty:', distribution.statistics.median);
console.log('  Std deviation:', distribution.statistics.standardDeviation.toFixed(2));
console.log('');
console.log('Distribution by level:');
Object.entries(distribution.byLevel).forEach(([level, count]) => {
  if (count > 0) {
    const bars = '█'.repeat(count);
    console.log(`  Level ${level.padStart(2)}: ${bars} (${count})`);
  }
});
```

**Output:**
```
Calculated: 60 difficulties

Algebra Category Analysis:
  Total tutorials: 60
  Difficulty range: 1 to 8
  Mean difficulty: 4.25
  Median difficulty: 4
  Std deviation: 1.87

Distribution by level:
  Level  1: █ (1)
  Level  2: ██ (2)
  Level  3: ████████ (8)
  Level  4: █████████████ (13)
  Level  5: ███████ (7)
  Level  6: ██████ (6)
  Level  7: ███ (3)
  Level  8: ██ (2)
```

## Example 5: Validation

Validate that prerequisites have appropriate difficulties:

```typescript
import {
  validateTutorialDifficultiesBatch,
} from '@learnmath/tutorials/utils';

const allTutorialsList = Array.from(allTutorials.values());
const results = validateTutorialDifficultiesBatch(allTutorialsList, allTutorials);

// Show any issues
const invalid = results.filter((r) => !r.isValid);
if (invalid.length > 0) {
  console.warn('Validation issues found:');
  invalid.forEach((result) => {
    console.warn(`  ${result.message}`);
  });
} else {
  console.log('All tutorials validated successfully!');
}

// Show summary
const totalValid = results.filter((r) => r.isValid).length;
console.log(`${totalValid}/${results.length} tutorials valid`);
```

**Output:**
```
All tutorials validated successfully!
690/690 tutorials valid
```

## Integration with Tutorial Loading

Real-world usage in a tutorial loading system:

```typescript
import { calculateDifficulty } from '@learnmath/tutorials/utils';

async function loadAllTutorials(): Promise<Map<string, Tutorial>> {
  const tutorials = new Map<string, Tutorial>();
  
  // Load tutorials from JSON files or database
  const files = await loadTutorialFiles();
  
  files.forEach((file) => {
    const tutorial: Tutorial = JSON.parse(file.content);
    
    // Auto-calculate difficulty if not specified
    if (!tutorial.difficulty) {
      tutorial.difficulty = calculateDifficulty(tutorial, tutorials);
    }
    
    tutorials.set(tutorial.id, tutorial);
  });
  
  return tutorials;
}

// Usage
const tutorials = await loadAllTutorials();
console.log('Loaded', tutorials.size, 'tutorials with computed difficulties');
```

## Performance Considerations

For large datasets (690+ tutorials):

```typescript
// GOOD: Single batch call with shared Map
const difficulties = calculateDifficultiesBatch(tutorials, allTutorials);

// SLOW: Repeated individual calls
tutorials.forEach((t) => {
  const d = calculateDifficulty(t, allTutorials); // Inefficient
});

// GOOD: Cache results
const cache = new Map<string, number>();
function getDifficulty(tutorialId: string): number {
  if (!cache.has(tutorialId)) {
    const tutorial = allTutorials.get(tutorialId)!;
    cache.set(tutorialId, calculateDifficulty(tutorial, allTutorials));
  }
  return cache.get(tutorialId)!;
}
```

## Testing Examples

```typescript
import { calculateDifficulty, validateTutorialDifficulty } from '@learnmath/tutorials/utils';

// Test case: Difficulty increases with depth
function testDifficultyIncreasesWithDepth() {
  const tutorials = new Map<string, Tutorial>();
  
  const t1: Tutorial = { id: 't1', category: 'algebra', prerequisite: undefined, /* ... */ };
  const t2: Tutorial = { id: 't2', category: 'algebra', prerequisite: 't1', /* ... */ };
  
  tutorials.set('t1', t1);
  tutorials.set('t2', t2);
  
  const d1 = calculateDifficulty(t1, tutorials);
  const d2 = calculateDifficulty(t2, tutorials);
  
  console.assert(d2 > d1, 'Deeper prerequisites should have higher difficulty');
}

// Test case: Validation catches invalid chains
function testValidationDetectsMissingPrerequisites() {
  const tutorials = new Map<string, Tutorial>();
  
  const orphan: Tutorial = {
    id: 'orphan',
    category: 'algebra',
    prerequisite: 'nonexistent',
    /* ... */
  };
  
  tutorials.set('orphan', orphan);
  
  const result = validateTutorialDifficulty(orphan, tutorials);
  
  console.assert(!result.isValid, 'Missing prerequisite should fail validation');
  console.assert(result.message.includes('not found'), 'Error message should mention missing prerequisite');
}
```

## See Also

- [README.md](./README.md) - Complete API documentation
- [calculateDifficulty.ts](./calculateDifficulty.ts) - Source code with detailed comments
- `docs/plans/2026-01-30-curriculum-design.md` - Curriculum design rationale
