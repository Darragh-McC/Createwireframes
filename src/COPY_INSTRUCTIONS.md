# How to Copy Your SmartJournal Code to VS Code

## 🎯 Simple 3-Step Process

### Step 1: Create New React Project

Open your terminal and run these commands:

```bash
# Create a new folder for your project
mkdir smartjournal
cd smartjournal

# Initialize git (optional but recommended)
git init
```

### Step 2: Copy Configuration Files

From Figma Make, copy these files **exactly as shown** into your `smartjournal` folder:

1. **`package.json`** - Contains all dependencies
2. **`vite.config.ts`** - Build configuration  
3. **`tsconfig.json`** - TypeScript configuration
4. **`tsconfig.node.json`** - Node TypeScript config
5. **`postcss.config.js`** - CSS processing
6. **`index.html`** - HTML entry point
7. **`.eslintrc.cjs`** - Linting rules
8. **`.gitignore`** - Git ignore rules

### Step 3: Install Dependencies

```bash
npm install
```

Wait for all packages to install (this may take 2-3 minutes).

---

## 📁 Copy Source Files

Create the `src` folder structure and copy files:

### Create Folders

```bash
mkdir -p src/components/ui
mkdir -p src/components/figma
mkdir -p src/styles
```

### Copy Main Files

From Figma Make → To your local project:

1. **`App.tsx`** → **`src/App.tsx`** ✅ (already ready)
2. **`main.tsx`** → **`src/main.tsx`** ✅ (already ready)
3. **`styles/globals.css`** → **`src/styles/globals.css`** ✅ (already ready)

### Copy Components (6 page components)

From Figma Make `components/` → Your `src/components/`:

```
WeeklyReflection.tsx    → src/components/WeeklyReflection.tsx
GratitudeWall.tsx       → src/components/GratitudeWall.tsx
ProgressGarden.tsx      → src/components/ProgressGarden.tsx
MindfulnessHub.tsx      → src/components/MindfulnessHub.tsx
CalendarOverview.tsx    → src/components/CalendarOverview.tsx
AffirmationsPage.tsx    → src/components/AffirmationsPage.tsx
```

### Copy UI Components (entire folder)

From Figma Make `components/ui/` → Your `src/components/ui/`:

Copy all 44+ files:
- accordion.tsx
- alert-dialog.tsx
- alert.tsx
- aspect-ratio.tsx
- avatar.tsx
- badge.tsx
- breadcrumb.tsx
- button.tsx
- calendar.tsx
- card.tsx
- carousel.tsx
- chart.tsx
- checkbox.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- dialog.tsx
- drawer.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- input.tsx
- label.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- skeleton.tsx
- slider.tsx
- sonner.tsx
- switch.tsx
- table.tsx
- tabs.tsx
- textarea.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx
- use-mobile.ts
- utils.ts

### Copy Figma Components

From Figma Make `components/figma/` → Your `src/components/figma/`:

```
ImageWithFallback.tsx → src/components/figma/ImageWithFallback.tsx
```

---

## ✅ Verify Your Structure

Your final folder structure should look like this:

```
smartjournal/
├── node_modules/           (created by npm install)
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── WeeklyReflection.tsx
│   │   ├── GratitudeWall.tsx
│   │   ├── ProgressGarden.tsx
│   │   ├── MindfulnessHub.tsx
│   │   ├── CalendarOverview.tsx
│   │   ├── AffirmationsPage.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ... (all other UI files)
│   └── styles/
│       └── globals.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── postcss.config.js
├── .eslintrc.cjs
└── .gitignore
```

---

## 🚀 Run the App

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

You should see the SmartJournal app running! 🎉

---

## 📝 Quick Copy Method

If you want to copy files quickly in VS Code:

1. **In Figma Make:** Click file → Select all (Ctrl+A) → Copy (Ctrl+C)
2. **In VS Code:** Create new file → Paste (Ctrl+V) → Save (Ctrl+S)
3. Repeat for each file

**Pro Tip:** Keep both Figma Make and VS Code open side-by-side for easy copying!

---

## 🔧 Alternative: Use Terminal to Create Structure

You can create all folders at once:

```bash
cd smartjournal
mkdir -p src/components/ui
mkdir -p src/components/figma  
mkdir -p src/styles
```

Then just copy-paste the file contents!

---

## 📦 All Files Summary

| Category | Files to Copy | Destination |
|----------|---------------|-------------|
| Config | 8 files | Root folder |
| Main App | 3 files | `src/` |
| Pages | 6 files | `src/components/` |
| UI Library | 46 files | `src/components/ui/` |
| Figma Utils | 1 file | `src/components/figma/` |

**Total:** ~64 files to copy

---

## ❓ Troubleshooting

**Q: I get "Cannot find module" errors**  
A: Make sure all files are in the correct `src/` folders

**Q: npm install fails**  
A: Make sure you have Node.js 18+ installed

**Q: Styles don't load**  
A: Check that `globals.css` is in `src/styles/` and imported in `main.tsx`

**Q: TypeScript errors**  
A: Verify all component files are copied and paths are correct

---

## 🎓 Next Steps

Once everything is running:
1. ✅ Test all 6 pages by clicking navigation
2. ✅ Make small changes to see hot reload
3. ✅ Customize colors in `globals.css`
4. ✅ Build for production: `npm run build`

**Happy coding! 🚀**
