# DLSU SAS2000 — Vercel transfer package

Complete React + Vite + Tailwind CSS + Motion source for the Student Success Center module website.

## Deploy using GitHub and Vercel

1. Create a GitHub repository and upload the contents of this folder. Keep `package.json` at the repository root, alongside `src` and `public`.
2. In Vercel, add a new project and import that repository.
3. Select the Vite framework preset. Use `pnpm build` as the build command and `dist` as the output directory. These settings are also included in `vercel.json`.
4. Deploy. No environment variables or Google account credentials are required.

If you upload this entire folder inside another repository, select `SAS2000-Vercel` as the project's Root Directory.

## Deploy from your computer instead

With Node.js 24 and npm installed, open a terminal in this folder and run:

```sh
npx vercel
```

Follow the Vercel prompts to sign in and create/link a project. To deploy to production:

```sh
npx vercel --prod
```

## Local development

Use Node.js 24 and pnpm 11.19.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

For a production build, run `pnpm build`.

## Content and assets

- `src/inventory.json`: all 30 sessions, copied from the Module Inventory tab on September 22, 2026. This is a snapshot, not a live spreadsheet connection.
- `src/App.tsx`: module cards, icon assignments, and normalized session dates/times. The date/time arrays correspond to the inventory row order; update these together when changing the inventory.
- `src/components/`: navigation and animated hero.
- `src/index.css`: responsive layout, fonts, and DLSU colors.
- `public/ssc-logo.png`: supplied SSC logo.
- `public/favicon.svg`: site favicon.

The hero video loads from the supplied CloudFront URL, and Inter/Outfit fonts load from Google Fonts. These remote assets require an internet connection. The video is referenced rather than bundled.

The primary Registration Link column supplies each registration button. Missing times and venue are labeled as unspecified. The website displays developer contact emails from the inventory.

This folder intentionally excludes dependencies, build output, Git history, credentials, and the original Sites hosting configuration. Vercel installs dependencies and creates the production build during deployment. The original website remains unchanged.
