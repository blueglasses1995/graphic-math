# Tutorial Migration Guide

This guide explains how to migrate LearnMath tutorials from the legacy schema to the new curriculum design defined in `docs/plans/2026-01-30-curriculum-design.md`.

## Overview

The migration transforms 690 tutorials from:
- **Legacy format**: Simple `steps` array
- **New format**: Structured `sections` with metadata (difficulty, tags, etc.)

## Quick Start

### 1. Preview Migration (Recommended First Step)

```bash
# See what would be changed across all tutorials
pnpm migrate:dry-run

# Preview a specific category
pnpm migrate --category=set-theory --dry-run --verbose

# Preview a single file
pnpm migrate --file=algebra/group-definition.ts --dry-run --verbose
```

### 2. Run Migration

```bash
# Migrate a category (start with a small one)
pnpm migrate --category=set-theory

# Migrate all tutorials
pnpm migrate
```

## Migration Phases

Following the design document (section 6.2), migration happens in phases:

### Phase 1: Schema Extension ✅ COMPLETE

- Extended types in `packages/tutorials/src/types.ts`
- Added `TransitionTutorial` for backward compatibility
- Both `steps` and `sections` are optional during transition

### Phase 2: Automated Migration 🚧 IN PROGRESS

- Created `scripts/migrate-tutorials.ts` (this tool)
- Implements automatic field calculation
- Provides dry-run and batch processing

**Current Status**: Placeholder implementation
- ✅ File scanning and analysis
- ✅ Field calculation (difficulty, time, tags)
- ✅ Section classification logic
- ❌ AST parsing and file rewriting (needs implementation)

### Phase 3: Manual Review (Next Step)

After automated migration, manual review is needed for:
- Setting correct `prerequisite` links
- Adjusting difficulty values
- Refining section content
- Adding proper LaTeX formatting

### Phase 4: Content Migration (Weeks 5-8)

- Week 1: set-theory, trigonometry (60 units)
- Week 2: linear-algebra, exponential, logarithmic (120 units)
- Week 3: calculus, probability, statistics (150 units)
- Week 4: Remaining categories (360 units)

## What Gets Migrated

### Fields Added

| Field | Source | Example |
|-------|--------|---------|
| `difficulty` | Category base + step count | `6` (1-10 scale) |
| `estimatedMinutes` | Steps count × 3 | `36` (for 12 steps) |
| `sections` | Steps classified into 6 sections | See below |
| `tags` | Keywords from title/description | `['group', 'algebra', 'symmetry']` |
| `relatedTutorials` | Empty (to be filled manually) | `[]` |
| `migrationStatus` | Set to 'partial' | `'partial'` |

### Section Classification

Steps are classified using heuristics:

| Section | Source Steps | Criteria |
|---------|--------------|----------|
| `hook` | First step | Always first step |
| `concept` | Definition/theory steps | Default for explanation steps |
| `visualization` | Interactive/animated steps | Has `customScene`, `interactive`, or animation |
| `examples` | Example steps | Title/ID contains "example" or "例" |
| `exercises` | Quiz steps | Has `quiz` or `stepType === 'quiz'` |
| `summary` | Last step | Always last step |

## Example Migration

### Before (Legacy Schema)

```typescript
export const groupDefinitionTutorial: Tutorial = {
  id: 'group-definition',
  title: '群の定義',
  description: '群の4つの公理を正式に学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '群とは何か',
      content: '代数学の主役「群」を定義します...',
      // ... more config
    },
    // ... 10 more steps
    {
      id: 'summary',
      title: 'まとめ',
      content: '群の4つの公理をまとめました...',
      // ... more config
    },
  ],
};
```

### After (Partial Migration)

```typescript
export const groupDefinitionTutorial: Tutorial = {
  id: 'group-definition',
  title: '群の定義',
  description: '群の4つの公理を正式に学ぶ',
  category: 'algebra',
  
  // New fields (auto-generated)
  difficulty: 6,
  estimatedMinutes: 36,
  tags: ['group', 'algebra', 'axiom', 'symmetry'],
  relatedTutorials: [],
  migrationStatus: 'partial',
  
  // Structured sections (classified from steps)
  sections: {
    hook: {
      content: '代数学の主役「群」を定義します...',
      sceneConfig: { /* ... */ },
      interactive: false,
    },
    concept: {
      content: '## 公理1: 閉性\n\n...\n\n## 公理2: 結合法則\n\n...',
      sceneConfig: { /* ... */ },
      interactive: false,
    },
    visualization: {
      content: '3D visualization placeholder...',
      sceneConfig: { /* ... */ },
      interactive: false,
    },
    examples: {
      content: 'Concrete examples to be added...',
      sceneConfig: { /* ... */ },
      interactive: false,
    },
    exercises: {
      content: '## 確認クイズ\n\n...',
      sceneConfig: { /* ... */ },
      interactive: true,
    },
    summary: {
      content: '群の4つの公理をまとめました...',
      sceneConfig: { /* ... */ },
      interactive: false,
    },
  },
  
  // Legacy format (preserved during transition)
  steps: [ /* original steps kept for reference */ ],
};
```

## Validation Checklist

After migration, verify each tutorial:

- [ ] `difficulty` is reasonable (1-10 scale)
- [ ] `prerequisite` is set (if applicable)
- [ ] All 6 required sections exist
- [ ] `tags` reflect content
- [ ] `estimatedMinutes` is realistic
- [ ] LaTeX math uses consistent notation
- [ ] 3D scenes are properly configured
- [ ] `migrationStatus` is set correctly

## Common Issues

### Issue: Steps count is 0

**Cause**: File format doesn't match expected pattern
**Solution**: Manually check file structure

### Issue: Classification seems wrong

**Cause**: Heuristics are simple and may misclassify
**Solution**: Manually adjust sections after migration

### Issue: Difficulty seems off

**Cause**: Category-based calculation is approximate
**Solution**: Adjust after setting prerequisites

## Next Steps After Migration

1. **Set Prerequisites**: Review and set `prerequisite` field for each tutorial
2. **Adjust Difficulty**: Recalculate using full prerequisite chain
3. **Refine Content**: Improve section content, LaTeX formatting
4. **Add Related**: Set `relatedTutorials` for discovery
5. **Mark Complete**: Change `migrationStatus` to `'complete'`

## Getting Help

- Read the full design: `docs/plans/2026-01-30-curriculum-design.md`
- Check types: `packages/tutorials/src/types.ts`
- Review examples: `packages/tutorials/src/algebra/group-definition.ts`
- Ask questions: Create an issue or discussion

## Contributing

To improve the migration process:

1. **Implement AST Parsing**: Add `ts-morph` to actually rewrite files
2. **Improve Classification**: Use better heuristics or ML for section classification
3. **Add Tests**: Create unit tests for migration functions
4. **Build Review UI**: Create a web interface for manual review
5. **Document Edge Cases**: Add more examples and troubleshooting

See `scripts/migrate-tutorials.ts` for implementation details.
