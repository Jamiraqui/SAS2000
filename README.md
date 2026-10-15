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

- `src/inventory.json`: 48 sessions: the September 28 inventory, eleven new Batch 2 sessions, and Step into College Success provided directly by the Student Success Center, with eleven matching sessions refreshed on October 13, 2026. This is a snapshot, not a live spreadsheet connection.
- `src/App.tsx`: module cards, icon assignments, and registration availability. Normalized dates/times are stored with each session in `src/inventory.json`.
- `src/components/`: navigation and animated hero.
- `src/index.css`: responsive layout, fonts, and DLSU colors.
- `public/ssc-logo.png`: supplied SSC logo.
- `public/favicon.svg`: site favicon.

The hero video loads from the supplied CloudFront URL, and Inter/Outfit fonts load from Google Fonts. These remote assets require an internet connection. The video is referenced rather than bundled.

The primary Registration Link column supplies each registration button. Missing times and venue are labeled as unspecified. The website displays developer contact emails from the inventory.

This folder intentionally excludes dependencies, build output, Git history, credentials, and the original Sites hosting configuration. Vercel installs dependencies and creates the production build during deployment. The original website remains unchanged.

## Registration availability (September 28, 2026)

`registrationClosed` is a manually verified snapshot of the linked registration form. Closed sessions remain readable but show a badge and disabled registration button with no registration anchor. Refresh these flags when registrations reopen or close; the site does not poll Google Forms or Zoom. Sign-in requirements and absent controls alone are not treated as closure.

Confirmed closed: Beyond the Last Minute; Mindfulness in Everyday Life; Emotional Self-regulation Run 1; Negotiate Anything Run 1; Breaking Barriers Runs 1 and 2; Safe Spaces on October 14. The linked Google Forms displayed closure notices or their closed-form page.

## October 13, 2026 refresh

Source: https://docs.google.com/spreadsheets/d/19y3OCjcIy34x8DR0MXIBFT4ZW5ra1yree8t0IdE1oIs/edit?gid=286962066#gid=286962066 (Module Inventory only).

Batch 2 adds KAMALAYAN, Heroism from the Heart, Stress and Trauma, Navigating the Grief Journey, Strengthening Minds, and Discover Your Purpose Runs 9 and 10. New sessions appear first; matching registration URLs update existing cards without duplicates. Existing sessions and previously confirmed closures are retained. Source spreadsheet IDs distinguish Batch 2 source rows from the original inventory.

At the October 13 snapshot, KAMALAYAN and Heroism had no start time in the sheet. Public Google registration forms in Batch 2 were checked on October 13; sign-in-only forms and Zoom pages are not treated as proof of open or closed registration. An empty registrationCheckedAt means no definitive form status was verified.

## October 14, 2026 refresh

The Term 1 Batch 1 Module Inventory now lists the November 11 Navigating the Grief Journey session as 10:00 AM–12:00 PM with a revised title, description, and registration link. The existing card was updated rather than duplicated. Its developer name and email were retained from the Batch 2 inventory because the latest developer cell contains a registration URL. The new form was checked in an authenticated browser on October 14 and displayed live registration questions.

The October 14 Batch 2 refresh adds two PAHINGALAY sessions (10:00 AM and 2:00 PM on October 21) and JEMA Forge: Off the Hook (October 21; time not specified in the sheet). The JEMA registration URL is reproduced from the sheet, although its destination form is currently titled “JEMA Forge: Sculpting Stellar Case Solutions Pre-Registration Form.” The two PAHINGALAY links require sign-in, so their registration status has not been independently confirmed.

The latest Batch 2 Module Inventory adds The Empty Seat: A Leadership and Student Participation Talk on November 11, 10:00 AM–12:00 PM, at AG901. KAMALAYAN is now scheduled for October 16, 2:00–4:00 PM, and Heroism from the Heart for October 31, 1:30–3:30 PM. The newer Batch 1 correction to Navigating the Grief Journey remains in place.

## October 15, 2026 update

Step into College Success was added from the Student Success Center's supplied event details. It is scheduled for October 21, 2:00–6:00 PM, in Natividad Fajardo, Andrew Building (A1801) and on Zoom. The card links to the supplied registration form and lists Amir Austria as the person in charge. The form requires authentication when checked without a Google session; this alone does not establish that registration is closed.
