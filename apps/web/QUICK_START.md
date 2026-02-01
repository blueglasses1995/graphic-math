# Quick Start Guide - React Router Setup

## 🚀 Installation Complete

The React Router v6 setup is already installed and configured. No additional dependencies needed!

## 📁 Key Files

```
apps/web/src/
├── App.tsx                    # Main router (NEW)
├── layouts/
│   └── AppLayout.tsx         # Header & navigation (NEW)
└── pages/
    └── Dashboard.tsx         # User dashboard (NEW)
```

## 🎯 Routes Available

| URL | Component | Purpose |
|-----|-----------|---------|
| `/` | HomePage | Category grid home page |
| `/category/:id` | TutorialTreeView | Category tutorials |
| `/tutorial/:id` | TutorialPage | Learn a tutorial |
| `/search` | SearchFilter | Search tutorials |
| `/dashboard` | Dashboard | Track your progress |
| `/sandbox` | SandboxPage | Experiment |

## 🏃 Run the App

```bash
# Start development server
pnpm dev

# Open browser
open http://localhost:5173
```

## 🧪 Test the Routes

```bash
# Home page
http://localhost:5173/

# Algebra category
http://localhost:5173/category/algebra

# Specific tutorial
http://localhost:5173/tutorial/group-definition

# Search page
http://localhost:5173/search

# Progress dashboard
http://localhost:5173/dashboard

# 404 page
http://localhost:5173/nonexistent
```

## 🎨 View Modes

The app has three view modes accessible from the header:

1. **Grid View** (◈) - Category cards (default)
2. **Tree View** (🌳) - Tutorial dependency graph
3. **Search View** (🔍) - Advanced search

Toggle between them using the buttons in the top-right corner.

## 📱 Mobile Features

On mobile devices:
- Tap the hamburger menu (☰) to open navigation
- Select view mode from the dropdown
- View your progress percentage
- Navigate between pages

## 🎓 Track Your Progress

Your learning progress is automatically tracked:
- View overall completion percentage in the header
- See detailed statistics in `/dashboard`
- Progress persists across sessions (stored in localStorage)

## 🔧 Quick Customization

### Add a New Route

1. Create your page component in `src/pages/`
2. Import it in `App.tsx`
3. Add a `<Route>` element:

```typescript
<Route path="/my-page" element={<MyPage />} />
```

### Add Navigation Link

In `AppLayout.tsx`, add to the nav section:

```typescript
<NavLink href="/my-page" label="My Page" isActive={isActive('/my-page')} />
```

### Change Colors

Edit Tailwind classes in the components:
- Primary: `indigo-600`
- Secondary: `purple-500`
- Accent: `amber-500`

## 📚 Documentation

- **Full Setup Guide:** `APP_ROUTER_SETUP.md`
- **Implementation Summary:** `ROUTER_IMPLEMENTATION_SUMMARY.md`
- **This Quick Start:** `QUICK_START.md`

## 🐛 Troubleshooting

### Routes not working?
- Check that `main.tsx` wraps App with `<BrowserRouter>`
- Verify the route path matches exactly

### Layout not showing?
- Tutorial and sandbox pages hide the layout intentionally
- Other pages should show header and footer

### Progress not saving?
- Check browser console for localStorage errors
- Zustand persist middleware must be enabled

### Mobile menu stuck open?
- Navigation automatically closes the menu
- Check for JavaScript errors in console

## ✨ Next Steps

1. Explore the dashboard: `http://localhost:5173/dashboard`
2. Try different view modes
3. Navigate between categories
4. Track your progress as you complete tutorials
5. Test responsive design (resize browser or use mobile device)

## 🎉 You're Ready!

The React Router setup is complete and ready to use. Start by visiting `http://localhost:5173/` and exploring the app!

---

**Need Help?** Check `APP_ROUTER_SETUP.md` for detailed documentation.
