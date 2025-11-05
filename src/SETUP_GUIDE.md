# SmartJournal - VS Code Setup Guide

## Quick Start (5 Minutes)

### Step 1: Copy Project Files to Your Computer

1. Download or clone this entire `smartjournal` folder
2. Open the folder in VS Code (`File` > `Open Folder...`)

### Step 2: Copy Component Files

You need to copy the component files from Figma Make to your local `src/components/` folder:

**Required Files to Copy:**

1. **Main Page Components** (copy these 6 files to `src/components/`):
   - `WeeklyReflection.tsx`
   - `GratitudeWall.tsx`
   - `ProgressGarden.tsx`
   - `MindfulnessHub.tsx`
   - `CalendarOverview.tsx`
   - `AffirmationsPage.tsx`

2. **UI Components** (copy entire `components/ui/` folder to `src/components/ui/`):
   - All 44+ UI component files from the Figma Make project
   - This includes: `button.tsx`, `card.tsx`, `input.tsx`, etc.

3. **Figma Components** (copy to `src/components/figma/`):
   - `ImageWithFallback.tsx`

### Step 3: Install Dependencies

Open the integrated terminal in VS Code (`Terminal` > `New Terminal`) and run:

```bash
npm install
```

This will install all required packages (React, Tailwind, UI libraries, etc.)

### Step 4: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 5: Open in Browser

- Click on `http://localhost:5173/` or open it in your browser
- You should see the SmartJournal app running!

---

## File Copy Checklist

Use this checklist to ensure you've copied all files:

### ✅ Configuration Files (Already Created)
- [x] `package.json` - Dependencies list
- [x] `vite.config.ts` - Build configuration
- [x] `tsconfig.json` - TypeScript configuration
- [x] `postcss.config.js` - PostCSS for Tailwind
- [x] `index.html` - HTML entry point
- [x] `.gitignore` - Git ignore rules

### ✅ Main Application Files (Already Created)
- [x] `src/main.tsx` - React entry point
- [x] `src/App.tsx` - Main app component
- [x] `src/styles/globals.css` - Global styles

### 📋 Files You Need to Copy from Figma Make

#### Main Components (6 files)
- [ ] `components/WeeklyReflection.tsx` → `src/components/WeeklyReflection.tsx`
- [ ] `components/GratitudeWall.tsx` → `src/components/GratitudeWall.tsx`
- [ ] `components/ProgressGarden.tsx` → `src/components/ProgressGarden.tsx`
- [ ] `components/MindfulnessHub.tsx` → `src/components/MindfulnessHub.tsx`
- [ ] `components/CalendarOverview.tsx` → `src/components/CalendarOverview.tsx`
- [ ] `components/AffirmationsPage.tsx` → `src/components/AffirmationsPage.tsx`

#### UI Components (Copy entire folder)
- [ ] `components/ui/` → `src/components/ui/` (all files)

#### Figma Components
- [ ] `components/figma/ImageWithFallback.tsx` → `src/components/figma/ImageWithFallback.tsx`

---

## Detailed Copy Instructions

### Option 1: Manual Copy-Paste

1. In Figma Make, click on each file in the file tree
2. Select all content (`Ctrl+A` / `Cmd+A`)
3. Copy (`Ctrl+C` / `Cmd+C`)
4. In VS Code, create the matching file in the `src/` directory
5. Paste the content (`Ctrl+V` / `Cmd+V`)
6. Save the file (`Ctrl+S` / `Cmd+S`)

### Option 2: Batch Copy (if you have access to file system)

If Figma Make allows downloading files:

1. Download all component files
2. Drag and drop into VS Code's `src/components/` folder
3. Ensure the folder structure matches:
   ```
   src/
   └── components/
       ├── WeeklyReflection.tsx
       ├── GratitudeWall.tsx
       ├── ProgressGarden.tsx
       ├── MindfulnessHub.tsx
       ├── CalendarOverview.tsx
       ├── AffirmationsPage.tsx
       ├── figma/
       │   └── ImageWithFallback.tsx
       └── ui/
           ├── button.tsx
           ├── card.tsx
           └── ... (all other UI files)
   ```

---

## Common Issues & Solutions

### Issue: "Cannot find module './components/WeeklyReflection'"

**Solution:** Make sure you've copied the component files to `src/components/`

### Issue: "npm: command not found"

**Solution:** Install Node.js from https://nodejs.org/ (LTS version recommended)

### Issue: Port 5173 is already in use

**Solution:** 
```bash
# Kill the process on that port, or Vite will automatically use another port
# Just use the new port shown in the terminal
```

### Issue: Tailwind styles not loading

**Solution:**
1. Check that `postcss.config.js` exists in the root
2. Restart the dev server (`Ctrl+C`, then `npm run dev`)

### Issue: TypeScript errors in components

**Solution:**
- Make sure all component files are in the correct folders
- Check import paths are correct
- Run `npm install` to ensure all dependencies are installed

---

## What's Already Configured

✅ **React + TypeScript** - Full TypeScript support  
✅ **Vite** - Fast build tool and dev server  
✅ **Tailwind CSS v4** - Latest version with custom theming  
✅ **All UI libraries** - Radix UI, Lucide Icons, Recharts, etc.  
✅ **Path aliases** - Use `@/...` imports if needed  
✅ **Hot Module Replacement** - Changes appear instantly  
✅ **Production build** - Optimized for deployment  

---

## Next Steps After Setup

1. **Test the app** - Navigate through all 6 pages
2. **Customize** - Edit colors in `src/styles/globals.css`
3. **Add features** - Create new components in `src/components/`
4. **Deploy** - Build with `npm run build` and deploy `dist` folder

---

## NPM Commands Reference

```bash
npm install          # Install all dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

---

## Need Help?

- Check the main `README.md` for more information
- Look at component files for usage examples
- Visit https://vitejs.dev/ for Vite documentation
- Visit https://ui.shadcn.com/ for UI component docs

---

**Ready to start?** Follow the Quick Start steps above! 🚀
