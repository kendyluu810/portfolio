# Portfolio

A personal portfolio built with Next.js (App Router), Tailwind CSS v4, TypeScript, and Sanity CMS.

## Tech Stack

- Next.js (App Router) + React 18
- TypeScript
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Sanity (content)
- lucide-react, shadcn/ui components

## Getting Started

Prerequisites:
- Node.js 18+ (LTS recommended)
- npm 9+ (or compatible)

Install and run (Windows PowerShell):

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create a `.env.local` in the project root if you use Sanity:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2023-10-01
SANITY_STUDIO_BASE_PATH=/studio
```

Adjust to match your `lib/sanity.*` config.

## Project Structure

- `app/` — Next.js routes (App Router). Studio likely at `/studio`.
- `components/` — UI components (e.g., FeaturedCard, ContactCard).
- `lib/` — data fetching, queries, utilities.
- `public/` — static assets.
- `type` or `types` — shared TypeScript types.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # start production server
npm run lint    # lint
```

## Tailwind CSS v4 Notes

- Config is optional in v4. The PostCSS plugin `@tailwindcss/postcss` is used.
- If you add `tailwind.config.ts`, it’s only for customization.

## Common Issues

- Invalid hook call: Only call React hooks inside function components or custom hooks.
- Client component is async: Don’t mark client components `async`. Fetch data in a parent server component or use effects.
- Undefined props (e.g., `toLowerCase` on `platform`): Provide safe defaults (`platform = ""`).
- `npx tailwindcss init` error: Not needed for Tailwind v4; the plugin handles it.

## Deployment

- Vercel recommended:
  - Set env vars in Vercel dashboard.
  - `vercel` or connect the repo and