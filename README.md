# Voice of Love Ministry

A **Coming Soon** page for Voice of Love Ministry — a non-profit (NGO) carrying
hope, compassion, and dignity to communities in need.

Built with [Next.js](https://nextjs.org) (App Router) and ready to deploy on
[Vercel](https://vercel.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js — no extra configuration needed. Click **Deploy**.

## Customizing

- **Copy & branding** — edit [`app/page.tsx`](app/page.tsx).
- **Colors, fonts & layout** — edit [`app/page.module.css`](app/page.module.css)
  and the CSS variables in [`app/globals.css`](app/globals.css).
- **Notify form** — the email form in `app/page.tsx` is client-only. Wire the
  `handleSubmit` function to a mailing-list provider (Resend, Mailchimp,
  ConvertKit, etc.) before launch.
- **Social links** — update the placeholder `href="#"` links in the footer.

## Tech

- Next.js 15 · React 19 · TypeScript
- Google Fonts via `next/font` (Fraunces + Manrope)
- Pure CSS Modules — no UI framework dependency
