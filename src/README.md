# SmartJournal - Wellness & Mindfulness App

A beautiful wellness journaling app with mood tracking, gratitude entries, progress visualization, mindfulness exercises, and daily affirmations.

## Features

- 📝 **Weekly Reflection** - Track your moods and journal entries
- 🙏 **Gratitude Wall** - Record things you're thankful for
- 🌱 **Progress Garden** - Gamified streak tracking with plant metaphors
- 🧘 **Mindfulness Hub** - Guided meditation exercises
- 📅 **Calendar Overview** - Visual mood timeline
- 💫 **Affirmations** - Swipeable positive thoughts

## Setup Instructions

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or download this project**
   ```bash
   cd smartjournal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app should now be running!

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## File Structure

```
smartjournal/
├── src/
│   ├── App.tsx                      # Main app component with navigation
│   ├── main.tsx                     # Entry point
│   ├── components/
│   │   ├── WeeklyReflection.tsx     # Journal page
│   │   ├── GratitudeWall.tsx        # Gratitude entries
│   │   ├── ProgressGarden.tsx       # Streak tracking
│   │   ├── MindfulnessHub.tsx       # Meditation exercises
│   │   ├── CalendarOverview.tsx     # Mood calendar
│   │   ├── AffirmationsPage.tsx     # Daily affirmations
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/                      # Reusable UI components (shadcn/ui)
│   └── styles/
│       └── globals.css              # Global styles and theme
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icons
- **Recharts** - Charts and graphs

## Migration from Figma Make

This project was initially built in Figma Make and has been prepared for VS Code development. All components have been organized into the proper `src` folder structure with correct import paths.

### What to Copy

Simply copy these folders to your local `smartjournal/src/` directory:

1. Copy `components/` folder → `src/components/`
2. The following files are already set up:
   - ✅ `src/App.tsx`
   - ✅ `src/main.tsx`
   - ✅ `src/styles/globals.css`
   - ✅ All configuration files

## Development

### Adding New Components

Create new components in `src/components/` and import them in `App.tsx`:

```tsx
import MyComponent from './components/MyComponent';
```

### Using UI Components

All shadcn/ui components are in `src/components/ui/`:

```tsx
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
```

### Customizing Theme

Edit `src/styles/globals.css` to customize colors and design tokens.

## Troubleshooting

### If you get module errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### If Tailwind styles aren't working:
- Ensure `postcss.config.js` exists in the root
- Check that `@tailwindcss/postcss` is in devDependencies
- Restart the dev server

### TypeScript errors:
- Run `npm run build` to see all type errors
- Check that all imports have correct paths

## License

Private project - All rights reserved

## Support

For issues or questions, please create an issue in the repository.
