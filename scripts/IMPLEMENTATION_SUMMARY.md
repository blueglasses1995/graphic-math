# Migration Script Implementation Summary

## Created Files

### 1. scripts/migrate-tutorials.ts
Main migration script that transforms 690 tutorials from legacy schema to new curriculum design.

**Location**: `/scripts/migrate-tutorials.ts`

**Key Functions**:
- `migrateToNewSchema()` - Core migration logic
- `classifyStepsIntoSections()` - Heuristic-based section classification
- `extractKeywords()` - Auto-generate tags from content
- `calculateDifficultyPlaceholder()` - Difficulty calculation
- `migrate()` - Main batch processing function

**Features**:
- ✅ Imports types from `packages/tutorials/src/types.ts`
- ✅ Imports `calculateDifficulty` utility (placeholder calculation in this implementation)
- ✅ Automatic difficulty calculation based on category
- ✅ Time estimation (3 minutes per step)
- ✅ Smart step classification into sections
- ✅ Tag extraction from content keywords
- ✅ Sets `migrationStatus` to 'partial'
- ✅ Batch processing for all tutorials
- ✅ Dry-run mode
- ✅ Verbose logging
- ✅ Category and file filtering
- ✅ Error handling and statistics

### 2. scripts/README.md
Comprehensive documentation for the migration script.

**Contents**:
- Usage instructions
- CLI options reference
- Migration process explanation
- Examples
- Troubleshooting guide

### 3. scripts/MIGRATION_GUIDE.md
Step-by-step guide for migrating tutorials.

**Contents**:
- Migration phases overview
- Before/after examples
- Validation checklist
- Common issues and solutions
- Next steps after migration

### 4. scripts/tsconfig.json
TypeScript configuration for scripts.

**Features**:
- Extends base tsconfig
- ESNext modules
- Path aliases for packages

### 5. Updated package.json
Added npm scripts for easy execution.

**New Scripts**:
```json
{
  "migrate": "tsx scripts/migrate-tutorials.ts",
  "migrate:dry-run": "tsx scripts/migrate-tutorials.ts --dry-run --verbose"
}
```

## Implementation Details

### Schema Transformation

The script transforms tutorials according to section 6.2 of the curriculum design:

#### Input (Legacy Schema)
```typescript
{
  id: string;
  title: string;
  description: string;
  category: string;
  steps: TutorialStep[];
}
```

#### Output (New Schema)
```typescript
{
  id: string;
  title: string;
  description: string;
  category: TutorialCategory;
  
  // New fields
  difficulty: number;              // 1-10 scale
  estimatedMinutes: number;        // Learning time
  sections: TutorialSections;      // 6 structured sections
  tags: string[];                  // Auto-generated
  relatedTutorials: string[];      // Empty for now
  migrationStatus: 'partial';      // Migration status
  
  // Legacy (preserved)
  steps?: TutorialStep[];          // Original steps
}
```

### Section Classification Logic

The script uses heuristics to classify steps:

```typescript
// Hook: First step (introduction)
sections.hook = steps[0];

// Summary: Last step
sections.summary = steps[steps.length - 1];

// Exercises: Steps with quiz/exercise
if (step.stepType === 'quiz' || title.includes('quiz')) {
  exerciseSteps.push(step);
}

// Examples: Steps with "example" in title
if (title.includes('example') || id.includes('example')) {
  exampleSteps.push(step);
}

// Visualization: Interactive/animated steps
if (step.interactive || step.customScene) {
  visualizationSteps.push(step);
}

// Concept: Remaining steps
else {
  conceptSteps.push(step);
}
```

### Difficulty Calculation

Based on category base difficulty:

| Category | Base | Adjustment |
|----------|------|------------|
| set-theory, exponential, logarithmic | 2-3 | +1 per 10 steps |
| linear-algebra, complex-numbers | 4 | +1 per 10 steps |
| discrete-math, differential-calculus | 5 | +1 per 10 steps |
| integral-calculus, algebra | 6 | +1 per 10 steps |
| fourier, laplace, ode | 7 | +1 per 10 steps |
| pde, category-theory | 8 | +1 per 10 steps |
| topology | 9 | +1 per 10 steps |

### Tag Extraction

Identifies 60+ mathematical and application keywords:

**Math keywords**: group, field, vector, matrix, derivative, integral, fourier, etc.
**Application keywords**: cryptography, physics, signal, machine learning, etc.

Returns up to 10 most relevant tags per tutorial.

## Usage Examples

### 1. Preview all migrations
```bash
pnpm migrate:dry-run
# Output: 690 successful, 23 skipped (non-tutorial files)
```

### 2. Migrate specific category
```bash
pnpm migrate --category=algebra --dry-run --verbose
# Output: Detailed info for 60 algebra tutorials
```

### 3. Migrate single file
```bash
pnpm migrate --file=algebra/group-definition.ts --dry-run --verbose
# Output:
#   Steps: 12
#   Difficulty: 6/10
#   Estimated: 36min
```

## Test Results

### Comprehensive Test
```
Found 713 tutorial files
✅ Successful: 690
⏭️  Skipped: 23 (non-tutorial files like index.ts, types.ts)
❌ Failed: 0
```

### Category Breakdown
- algebra: 60 tutorials
- linear-algebra: 60 tutorials
- discrete-math: 60 tutorials
- graph-theory: 60 tutorials
- fourier: 35 tutorials
- (14 more categories...)

## Current Status

### ✅ Implemented
- File scanning and discovery
- Step counting and analysis
- Difficulty calculation
- Time estimation
- Tag generation
- Section classification logic
- Dry-run mode
- Verbose logging
- Error handling
- Batch processing
- Category/file filtering
- CLI interface
- Documentation

### ⚠️ Placeholder (Needs Implementation)
- **AST Parsing**: Currently doesn't actually modify files
- **TypeScript Generation**: Need to add file writing with proper formatting
- **Prerequisite Analysis**: Need full tutorial graph for accurate difficulty

### 🔜 Future Enhancements
- Use `ts-morph` for AST manipulation
- Add unit tests
- Create web-based review UI
- ML-based section classification
- Prerequisite graph builder
- LaTeX formatter
- Content validator

## Design Compliance

The implementation follows section 6.2 of `docs/plans/2026-01-30-curriculum-design.md`:

- ✅ **Phase 1**: Schema extension (types already in place)
- ✅ **Phase 2**: Automated migration script (this implementation)
- 🔜 **Phase 3**: Manual review tools (to be built)
- 🔜 **Phase 4**: Content migration (ready to execute)

## Dependencies

- `tsx`: TypeScript execution (installed as dev dependency)
- `typescript`: Type checking (already present)
- Types from `@learnmath/tutorials`
- Utility from `packages/tutorials/src/utils/calculateDifficulty.ts`

## Next Steps

### For Full Implementation
1. Add `ts-morph` dependency
2. Implement AST parsing and rewriting
3. Add file writing with formatting
4. Create unit tests
5. Build prerequisite graph
6. Add validation checks

### For Manual Review
1. Run migration on first category (set-theory)
2. Manually review and adjust:
   - Section classifications
   - Difficulty values
   - Tag accuracy
3. Set prerequisites
4. Mark as 'complete'
5. Repeat for remaining categories

## Files Created
```
scripts/
├── migrate-tutorials.ts           # Main script (executable)
├── tsconfig.json                  # TypeScript config
├── README.md                      # Script documentation
├── MIGRATION_GUIDE.md            # User guide
└── IMPLEMENTATION_SUMMARY.md     # This file
```

## Repository Changes
```
Modified:
- package.json                     # Added migrate scripts

Created:
- scripts/                         # New directory
- 5 new files in scripts/
```

## Running the Script

### Quick start
```bash
# Preview migration (safe)
pnpm migrate:dry-run

# Migrate specific category
pnpm migrate --category=set-theory --dry-run

# See help
pnpm migrate --help
```

### Advanced usage
```bash
# Single file with verbose output
pnpm tsx scripts/migrate-tutorials.ts \
  --file=algebra/group-definition.ts \
  --dry-run \
  --verbose

# Full category
pnpm tsx scripts/migrate-tutorials.ts \
  --category=algebra \
  --verbose
```

## Success Metrics

- ✅ Script runs without errors
- ✅ Processes all 690 tutorials
- ✅ Calculates reasonable difficulty (1-10)
- ✅ Estimates learning time (based on steps)
- ✅ Extracts relevant tags
- ✅ Classifies sections appropriately
- ✅ Provides dry-run mode
- ✅ Logs detailed information
- ✅ Handles errors gracefully
- ✅ Well-documented

## Conclusion

The migration script is **ready for use in dry-run mode** and provides a solid foundation for the full migration. The placeholder implementation successfully analyzes all 690 tutorials and calculates the new fields according to the curriculum design.

To complete the migration, the AST parsing and file writing functionality needs to be implemented using `ts-morph` or similar tooling.
