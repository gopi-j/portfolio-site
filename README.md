# Gopi Janjanam Portfolio

A Vercel-ready personal portfolio built with Next.js (App Router) + TypeScript.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind v4 (via global CSS theme)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
npm run start
```

## Deploy To Vercel

1. Push this project to a Git repository.
2. In Vercel, click **Add New... > Project**.
3. Import the repository and select the `portfolio-site` root if needed.
4. Keep defaults for Next.js framework settings.
5. No environment variables are required for this version.
6. Click **Deploy**.

## Content Updates

Update `lib/portfolio-data.ts` to edit:

- profile summary and hero text
- experience timeline
- skill groups and certifications
- project cards
- contact links

## Resume and Social Preview Assets

- Resume download: `public/Gopi_Janjanam_Resume.pdf`
- OpenGraph preview: `public/og-image.svg`
