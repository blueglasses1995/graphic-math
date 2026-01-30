# Quick Start: Tutorial Migration

## TL;DR

```bash
# See what would be migrated (safe, no changes)
pnpm migrate:dry-run

# Migrate a category
pnpm migrate --category=set-theory --dry-run  # preview
pnpm migrate --category=set-theory            # actual

# Migrate everything
pnpm migrate --dry-run  # preview first!
pnpm migrate            # run migration
```

## What This Script Does

Transforms 690 tutorials from old format:
```typescript
{ id, title, description, category, steps: [...] }
```

To new format:
```typescript
{
  id, title, description, category,
  difficulty: 6,                    // 1-10 scale
  estimatedMinutes: 36,             // learning time
  sections: {                       // structured content
    hook: {...},
    concept: {...},
    visualization: {...},
    examples: {...},
    exercises: {...},
    summary: {...}
  },
  tags: ['group', 'algebra'],       // keywords
  migrationStatus: 'partial'
}
```

## Current Status

✅ **Analysis Mode Only**
- Scans and analyzes all tutorial files
- Calculates difficulty, time, tags
- Shows what would be changed
- Does NOT modify files yet

⚠️ To actually modify files, AST parsing needs to be implemented (see README.md)

## Commands

| Command | Description |
|---------|-------------|
| `pnpm migrate:dry-run` | Preview all changes (verbose) |
| `pnpm migrate --help` | Show help |
| `pnpm migrate --file=PATH` | Migrate single file |
| `pnpm migrate --category=NAME` | Migrate category |
| `pnpm migrate --verbose` | Show detailed logs |

## Examples

### Preview single file
```bash
pnpm migrate --file=algebra/group-definition.ts --dry-run --verbose
```

Output:
```
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

### Preview category
```bash
pnpm migrate --category=algebra --dry-run
```

Output:
```
Found 60 tutorial files
✅ Successful: 60
⏭️  Skipped: 0
❌ Failed: 0
```

### Preview all
```bash
pnpm migrate:dry-run
```

Output:
```
Found 713 tutorial files
✅ Successful: 690
⏭️  Skipped: 23
❌ Failed: 0
```

## Next Steps

1. **Review the output** - Check if difficulty/tags make sense
2. **Test on one category** - Start with set-theory (30 files)
3. **Implement AST parsing** - Add ts-morph to actually write files
4. **Manual review** - Set prerequisites and adjust values
5. **Complete migration** - Mark as 'complete' when done

## Files

- `migrate-tutorials.ts` - Main script
- `README.md` - Full documentation
- `MIGRATION_GUIDE.md` - Step-by-step guide
- `IMPLEMENTATION_SUMMARY.md` - Technical details

## Help

```bash
pnpm migrate --help
```

Or read the full docs:
- `scripts/README.md` - Script documentation
- `scripts/MIGRATION_GUIDE.md` - Migration guide
- `docs/plans/2026-01-30-curriculum-design.md` - Design spec
