# Portfolio

A personal portfolio built with Next.js (App Router), Tailwind CSS v4, TypeScript, and Sanity CMS.

## Tech Stack

- Next.js (App Router) + React 18
# Kendyluu Portfolio

A modern developer portfolio built with Next.js 14 (App Router), Tailwind CSS, and Sanity CMS. It showcases projects, skills, career timeline, and contact details with clean UI components and dynamic content powered by Sanity.

## Description

- Framework: Next.js 14 with the `app/` directory and server components
- Styling: Tailwind CSS + shadcn/ui components
- CMS: Sanity (schemas for projects, skills, career, about, contact)
- Images: `@sanity/image-url` helpers and `next/image`
- Data: GROQ queries via Sanity client with live preview support

The site includes public pages for Home, About, Contact, and Projects with dynamic project detail routes. A separate Studio route under `app/studio` provides content management via Sanity Studio.

## Tech Stack

- Next.js, TypeScript
- Tailwind CSS, PostCSS
- Sanity CMS + GROQ
- shadcn/ui components

## Project Structure Highlights

- `app/` — App Router pages and layouts (public pages and studio)
- `components/` — Reusable UI components (cards, badges, carousel, menu)
- `lib/` — Utility functions, Sanity client, and queries
- `sanity/` — Sanity configuration, schemas, and helpers
- `tailwind.config.ts` — Tailwind setup
- `tsconfig.json` — TypeScript configuration

## Advantages

- **Modern stack:** Uses Next.js App Router, server components, and Tailwind for performance and developer ergonomics.
- **Structured CMS:** Sanity schemas keep content organized and editable without code changes.
- **Reusable UI:** Component-driven approach (cards, badges, carousel) speeds iteration and keeps design consistent.
- **SEO-friendly:** Next.js metadata and dynamic routing support good SEO practices.
- **Scalable content:** Adding new projects/skills is as simple as publishing in Sanity.

## Disadvantages

- **CMS dependency:** Requires Sanity project and tokens; local preview setup adds complexity.
- **Learning curve:** App Router, server components, and GROQ may be unfamiliar to some.
- **Build size:** UI libraries and images can increase bundle size if not optimized.
- **Operational overhead:** Managing environment variables and studio hosting needs attention.

## Getting Started

1) Install dependencies

```pwsh
npm install
```

2) Set environment variables

Create a `.env.local` with your Sanity project details:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
SANITY_READ_TOKEN=your_read_token_if_required
```

3) Run the development server

```pwsh
npm run dev
```

Open `http://localhost:3000` to view the site. Sanity Studio is available under `http://localhost:3000/studio` if configured.

## Scripts

- `npm run dev` — Start Next.js in development
- `npm run build` — Build for production
- `npm start` — Start production server

## Deployment

This project can be deployed on Vercel or any Node.js hosting platform. Ensure environment variables are configured in the platform settings and Sanity CORS origins include your deployed domain.

## Contributing

Small project intended as a personal portfolio. For suggestions or issues, open an issue or PR.

## License

Proprietary — content belongs to the portfolio owner.

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