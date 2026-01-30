# Migration Scripts

This directory contains scripts for migrating LearnMath tutorials from the legacy schema to the new curriculum design.

## migrate-tutorials.ts

Migrates 690 tutorials from the legacy schema (steps array) to the new curriculum schema (sections-based structure).

### Features

- **Automatic difficulty calculation**: Based on prerequisite depth and category
- **Time estimation**: Calculates estimated learning time from steps count
- **Smart section classification**: Uses heuristics to organize steps into structured sections
- **Tag extraction**: Automatically generates tags from content keywords
- **Batch processing**: Migrate entire categories or all tutorials at once
- **Dry-run mode**: Preview changes before applying them
- **Verbose logging**: Detailed output for debugging

### Usage

#### Dry-run on all tutorials (recommended first step)

```bash
pnpm migrate:dry-run
```

#### Migrate specific category

```bash
pnpm migrate --category=algebra --dry-run
pnpm migrate --category=algebra  # actual migration
```

#### Migrate single file

```bash
pnpm migrate --file=algebra/group-definition.ts --dry-run --verbose
pnpm migrate --file=algebra/group-definition.ts  # actual migration
```

#### Show help

```bash
pnpm tsx scripts/migrate-tutorials.ts --help
```

### Options

| Option | Description |
|--------|-------------|
| `--dry-run` | Preview changes without writing files (recommended for testing) |
| `--verbose` | Enable detailed logging with step counts and calculated values |
| `--category=name` | Migrate only specific category (e.g., `algebra`, `set-theory`) |
| `--file=path` | Migrate single file (relative to `packages/tutorials/src/`) |
| `--help`, `-h` | Show help message |

### Migration Process

The script performs the following transformations:

#### 1. Adds new fields

```typescript
// Old schema
{
  id: string;
  title: string;
  description: string;
  category: string;
  steps: TutorialStep[];
}

// New schema (partial migration)
{
  id: string;
  title: string;
  description: string;
  category: string;
  
  // New fields
  difficulty: number;              // 1-10 scale
  estimatedMinutes: number;        // Learning time estimate
  sections: TutorialSections;      // Structured sections
  tags: string[];                  // Auto-generated tags
  migrationStatus: 'partial';      // Migration status
  
  // Old format preserved for transition
  steps?: TutorialStep[];
}
```

#### 2. Classifies steps into sections

The script uses heuristics to organize steps:

- **hook**: First step (introduction/motivation)
- **concept**: Steps with definitions, theory, explanations
- **visualization**: Steps with 3D scenes, animations, or interactive elements
- **examples**: Steps containing "example" in title or ID
- **exercises**: Steps with quizzes or "exercise" in title
- **summary**: Last step (wrap-up)

#### 3. Calculates difficulty

Based on category base difficulty:

| Category | Base Difficulty |
|----------|----------------|
| set-theory, exponential, logarithmic, trigonometry | 2-3 |
| linear-algebra, complex-numbers, probability, statistics | 4 |
| discrete-math, graph-theory, differential-calculus | 5 |
| integral-calculus, algebra | 6 |
| fourier, laplace, ode | 7 |
| pde, category-theory | 8 |
| topology | 9 |

#### 4. Estimates learning time

- Base: 3 minutes per step
- Adjusted for complexity in future iterations

#### 5. Extracts tags

Automatically identifies keywords from:
- Mathematical concepts (group, matrix, derivative, etc.)
- Application domains (cryptography, physics, signal processing, etc.)

### Implementation Status

⚠️ **Current Status**: Placeholder Implementation

This script currently:
- ✅ Scans tutorial files
- ✅ Counts steps and calculates fields
- ✅ Logs what would be changed
- ✅ Provides dry-run mode

**Not yet implemented:**
- ❌ Actual file modification (AST parsing and rewriting)
- ❌ TypeScript code generation
- ❌ Prerequisite chain analysis

### Next Steps for Full Implementation

To complete the migration, the script needs:

1. **TypeScript AST Parser**: Use `ts-morph` or `@babel/parser` to:
   - Parse existing tutorial files
   - Modify the AST to add new fields
   - Preserve formatting and comments

2. **Section Classifier**: Implement ML-based or rule-based classifier to:
   - Accurately categorize steps into sections
   - Combine related steps
   - Generate appropriate section content

3. **Prerequisite Analyzer**: Build a graph of tutorial dependencies to:
   - Calculate accurate difficulty from prerequisite depth
   - Detect circular dependencies
   - Suggest optimal learning paths

4. **Content Formatter**: Ensure consistency in:
   - LaTeX math notation
   - MDX formatting
   - Code examples

### Examples

#### Example 1: Dry-run on algebra category

```bash
$ pnpm migrate --dry-run --verbose --category=algebra

🚀 Tutorial Migration Script

Mode: DRY-RUN
Verbose: ON
Category filter: algebra

🔍 Scanning for tutorial files...

Found 60 tutorial files

⚠️  DRY-RUN MODE: No files will be modified

Processing: algebra/group-definition.ts
  📊 Steps: 12
  📈 Difficulty: 6/10
  ⏱️  Estimated: 36min
  🔍 [DRY-RUN] Would migrate: algebra/group-definition.ts
     - Add difficulty: 6
     - Add estimatedMinutes: 36
     - Add migrationStatus: 'partial'
     - Classify 12 steps into sections

...

============================================================
📊 Migration Summary
============================================================
Total files processed: 60
✅ Successful: 60
⏭️  Skipped: 0
❌ Failed: 0
============================================================
```

#### Example 2: Migrate single file

```bash
$ pnpm migrate --file=algebra/group-definition.ts --dry-run --verbose

Processing: algebra/group-definition.ts
  📊 Steps: 12
  📈 Difficulty: 6/10
  ⏱️  Estimated: 36min
  🔍 [DRY-RUN] Would migrate: algebra/group-definition.ts
     - Add difficulty: 6
     - Add estimatedMinutes: 36
     - Add migrationStatus: 'partial'
     - Classify 12 steps into sections
```

### Related Documentation

- [Curriculum Design](../docs/plans/2026-01-30-curriculum-design.md) - Full curriculum specification
- [Tutorial Types](../packages/tutorials/src/types.ts) - Type definitions
- [Difficulty Calculator](../packages/tutorials/src/utils/calculateDifficulty.ts) - Difficulty algorithm

### Troubleshooting

#### Script won't run

```bash
# Ensure tsx is installed
pnpm install

# Check TypeScript compilation
pnpm typecheck
```

#### No files found

```bash
# Verify paths
ls packages/tutorials/src/

# Check category name
pnpm migrate --category=algebra --dry-run --verbose
```

#### Permission denied

```bash
chmod +x scripts/migrate-tutorials.ts
```

### Contributing

To improve the migration script:

1. Add AST parsing with `ts-morph`
2. Implement smarter section classification
3. Add prerequisite graph analysis
4. Generate formatted TypeScript output
5. Add unit tests

See the inline TODOs in `migrate-tutorials.ts` for specific improvement areas.
