# Difficulty Calculation Utilities - Start Here

Welcome to the LearnMath difficulty calculation system! This document will guide you through the available resources.

## What This Is

A comprehensive TypeScript utility for calculating difficulty levels (1-10) for educational tutorials based on:
- Prerequisite chain depth
- Category-specific difficulty bonuses
- Suggested prerequisites count
- Exercise content
- All factors combined with clamping to 1-10 range

## Quick Start (30 seconds)

```typescript
import { calculateDifficulty } from '@learnmath/tutorials/utils';

const difficulty = calculateDifficulty(tutorial, allTutorials);
console.log(`Difficulty: ${difficulty}/10`);
```

## Documentation Structure

### For Quick Lookup
1. **QUICK_REFERENCE.md** (5 min read)
   - Core functions at a glance
   - All category bonuses listed
   - Common usage patterns
   - Debugging tips
   
   ➜ Use this when you just need the API

### For Learning
2. **README.md** (15 min read)
   - Complete API documentation
   - All functions explained
   - Integration guidance
   - Performance notes
   
   ➜ Use this to understand how everything works

### For Practical Examples
3. **EXAMPLES.md** (20 min read)
   - 5 realistic code examples
   - Real-world integration patterns
   - Performance optimization
   - Testing strategies
   
   ➜ Use this to see it in action

### For Implementation Details
4. **calculateDifficulty.ts** (Reference)
   - Source code with full JSDoc
   - 430 lines of core implementation
   - All functions and constants
   - Complete TypeScript types
   
   ➜ Read this for deep understanding

## The Algorithm in One Sentence

**Base difficulty from prerequisite depth, plus bonuses for category, suggested prerequisites, and exercises, clamped to 1-10.**

## The 19 Categories

Three tiers of difficulty bonuses:

**Foundational (0 bonus):** exponential, trigonometry, set-theory

**Semi-Foundational (0.5 bonus):** linear-algebra, differential-calculus, discrete-math, probability, statistics, logarithmic

**Intermediate (1.0 bonus):** algebra, complex-numbers, integral-calculus, graph-theory

**Advanced (1.5 bonus):** fourier, ode, laplace

**Highly Abstract (2.0 bonus):** pde, topology, category-theory

## Main Functions (7 Total)

| Function | Purpose | Returns |
|----------|---------|---------|
| `calculateDifficulty()` | Single tutorial difficulty | `number` (1-10) |
| `calculateDifficultiesBatch()` | Multiple tutorials efficiently | `number[]` |
| `calculatePrerequisiteDepth()` | Count prerequisite chain | `number` |
| `getCategoryBonus()` | Look up category bonus | `number` |
| `validateTutorialDifficulty()` | Check single tutorial | `DifficultyValidationResult` |
| `validateTutorialDifficultiesBatch()` | Check multiple tutorials | `DifficultyValidationResult[]` |
| `analyzeDifficultyDistribution()` | Full distribution analysis | `DifficultyDistribution` |

## Common Tasks

### Calculate difficulty for one tutorial
```typescript
const difficulty = calculateDifficulty(tutorial, allTutorials);
```
➜ See: QUICK_REFERENCE.md → Core Functions

### Calculate difficulty for many tutorials
```typescript
const difficulties = calculateDifficultiesBatch(tutorials, allTutorials);
```
➜ See: QUICK_REFERENCE.md → Performance Tips

### Check if prerequisites are appropriate
```typescript
const result = validateTutorialDifficulty(tutorial, allTutorials);
if (!result.isValid) console.warn(result.message);
```
➜ See: EXAMPLES.md → Example 5

### Analyze category difficulty distribution
```typescript
const stats = analyzeDifficultyDistribution(tutorials, allTutorials);
console.log(`Mean: ${stats.statistics.mean}`);
```
➜ See: EXAMPLES.md → Example 4

### Auto-compute difficulty during loading
```typescript
tutorial.difficulty = calculateDifficulty(tutorial, allTutorials);
```
➜ See: EXAMPLES.md → Integration Pattern

## Exports Summary

**Functions:** 7
- calculateDifficulty
- calculatePrerequisiteDepth
- getCategoryBonus
- calculateDifficultiesBatch
- validateTutorialDifficulty
- validateTutorialDifficultiesBatch
- analyzeDifficultyDistribution

**Constants:** 2
- CATEGORY_BONUSES (all 19 categories)
- DIFFICULTY_LEVELS (all 10 levels)

**Types:** 3
- DifficultyLevel
- DifficultyValidationResult
- DifficultyDistribution

See `index.ts` for complete exports.

## Integration with LearnMath

Works with the `Tutorial` type from `packages/tutorials/src/types.ts`:

```typescript
interface Tutorial {
  id: string;
  category: TutorialCategory;  // One of 19 categories
  prerequisite?: string;       // Single mandatory prerequisite
  suggestedPrerequisites?: string[];  // Optional suggested ones
  sections?: {
    exercises?: Section;  // Detected to add +0.5 difficulty
    // ... other sections
  };
  // ... other fields
}
```

## Alignment with Design Document

This is a direct implementation of:
> **docs/plans/2026-01-30-curriculum-design.md** → Section 2.1: "Difficulty Calculation Algorithm"

All 19 categories, the algorithm, and difficulty level meanings are from that document.

## File Guide

| File | Purpose | Read Time | Best For |
|------|---------|-----------|----------|
| 00-START-HERE.md | This file | 3 min | Finding what you need |
| QUICK_REFERENCE.md | API at a glance | 5 min | Quick lookup |
| README.md | Complete docs | 15 min | Understanding everything |
| EXAMPLES.md | Practical examples | 20 min | Real-world usage |
| calculateDifficulty.ts | Source code | 20 min | Implementation details |
| index.ts | Public API | 1 min | What's exported |

## Learning Path

**Just need to use it?**
1. QUICK_REFERENCE.md (5 min)
2. Start coding

**Want to understand it?**
1. This file (3 min)
2. README.md sections 2-4 (10 min)
3. EXAMPLES.md section 1-3 (15 min)
4. Start coding with examples

**Implementing something advanced?**
1. README.md (15 min)
2. EXAMPLES.md (20 min)
3. calculateDifficulty.ts source (20 min)
4. Implement custom solution

**Debugging issues?**
1. QUICK_REFERENCE.md → Debugging section
2. README.md → Error handling notes
3. EXAMPLES.md → Validation patterns

## Performance Notes

- **Single calculation:** Very fast (O(chain depth))
- **Batch operations:** Use `calculateDifficultiesBatch()` not loops
- **Large datasets:** Cache results if calling repeatedly
- **Distribution analysis:** O(n log n) due to sorting

See QUICK_REFERENCE.md → Performance Tips

## What's Next?

1. **Immediate:** Read QUICK_REFERENCE.md (5 min)
2. **Learning:** Read README.md (15 min)
3. **Using:** Check EXAMPLES.md (20 min)
4. **Building:** Integrate with your code

## Questions?

- **"What does category bonus X do?"** → QUICK_REFERENCE.md
- **"How does the algorithm work?"** → README.md section 2
- **"How do I use it in my code?"** → EXAMPLES.md
- **"Where's the source?"** → calculateDifficulty.ts
- **"What's exported?"** → index.ts

## Changelog

**2026-01-30:** Initial implementation
- All 7 functions implemented
- All 19 categories mapped
- Complete documentation
- Usage examples provided
- Ready for integration

---

**Status:** ✅ Complete and production-ready

**Last Updated:** 2026-01-30

**Next:** Read QUICK_REFERENCE.md in 5 minutes!
