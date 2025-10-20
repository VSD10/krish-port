# Hari Portfolio

A Vite + React TypeScript single-page site showcasing Hari Krishnan's profile, hero introduction, skills, projects, and journey. The design highlights local portrait assets displayed inside circular frames for both hero and about sections.

## Getting Started

- **Install dependencies**
  ```bash
  npm install
  ```
- **Start the dev server**
  ```bash
  npm run dev
  ```
  The app defaults to `http://localhost:5173`.

## Available Scripts

- **Development**: `npm run dev`
- **Production build**: `npm run build`
- **Preview build**: `npm run preview`

## Assets

- Portrait images live in `images/main.jpg` and `images/about.jpg`.
- The hero (`components/Hero.tsx`) and about (`components/About.tsx`) components import these files directly.
- For new images, replace the files in the `images/` directory or update the import paths accordingly. Vite handles `.jpg` imports automatically (see `images.d.ts`).

## Customization

- Update text content in `components/Hero.tsx` and `components/About.tsx`.
- Modify skills, projects, or journey copy directly inside `components/About.tsx` data arrays.
- Adjust layout styles using Tailwind utility classes defined within each component.

## Deployment

- Production builds emit static assets to the `dist/` folder via `npm run build`.
- Deploy the `dist/` folder to any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).
- Ensure portrait images remain accessible by keeping them in the build output (default Vite behavior).
