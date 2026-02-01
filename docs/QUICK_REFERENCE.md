# LearnMath Curriculum - Quick Reference Card

## Project Overview at a Glance

**Status**: Production Ready  
**Total Tutorials**: 690  
**Categories**: 19  
**Lines of Code**: 85,378  
**Documentation**: Complete  

---

## Key File Locations

```
/packages/tutorials/src/types.ts           # Core type definitions
/packages/tutorials/src/categories.ts      # Category registry
/apps/web/src/App.tsx                      # Main router & app
/apps/web/src/components/                  # All React components
/docs/CURRICULUM_IMPLEMENTATION_COMPLETE.md # Full documentation
```

---

## Component Quick Reference

| Component | Purpose | Lines | Key Props |
|-----------|---------|-------|-----------|
| TutorialTreeView | Category navigation | 450 | categories, onTutorialSelect |
| TutorialPage | Tutorial display | 350 | tutorial, onProgress |
| CategoryGrid | Category browsing | 300 | categories, onCategoryClick |
| SearchFilter | Search & filter | 400 | tutorials, onResultsChange |
| TutorialControls | User interaction | 250 | tutorialId, onStepChange |

---

## Tutorial Structure

```typescript
interface Tutorial {
  sections: {
    hook          // 100-200 chars, introduction
    concept       // 300-500 chars, definition
    visualization // 3D scene
    examples      // 2+ examples
    exercises     // Optional practice
    summary       // 100-150 chars, takeaways
  }
}
```

---

## Quick Commands

```bash
# Development
pnpm install
pnpm dev

# Build
pnpm build

# Test
pnpm test

# Type check
pnpm typecheck
```

---

## Statistics Summary

| Metric | Count |
|--------|-------|
| Tutorial Files | 715 |
| Components | 35 |
| Pages | 6 |
| Categories | 19 |
| Total LoC | 85,378 |

---

## Category Breakdown

- Algebra (63)
- Linear Algebra (63)
- Discrete Math (63)
- Graph Theory (63)
- Trigonometry (33)
- Calculus (66: Diff 33 + Int 33)
- Complex Numbers (33)
- Probability (33)
- Statistics (33)
- ODE/PDE (66)
- Fourier/Laplace (66)
- And 5 more...

---

## Tech Stack

- React 18.2+
- TypeScript 5.0+
- Vite 5.0+
- Three.js 0.160+
- KaTeX 0.16+

---

## URLs

```
/                      # Home
/categories            # Category grid
/category/:id          # Category detail
/tutorial/:id          # Tutorial viewer
/search                # Search
```

---

## Next Steps (Priority Order)

1. User authentication & progress tracking
2. Admin CMS interface
3. Mobile app (React Native)
4. Advanced search features
5. Personalized recommendations

---

**For detailed information, see**: `docs/CURRICULUM_IMPLEMENTATION_COMPLETE.md`
