# recur-website

Marketing site for [Recur](https://recur.fit) — a strength training app for adults whose schedules, bodies, and motivation don't always line up. It builds workouts around the equipment you have, adjusts when you're coming back from time off, and works around areas giving you trouble (knees, lower back, shoulders, etc.).

## Stack

- [Astro](https://astro.build) — static site generator
- [React](https://react.dev) — interactive components
- [Tailwind CSS](https://tailwindcss.com) — styling
- [shadcn/ui](https://ui.shadcn.com) — component primitives

## Getting started

```bash
yarn install
cp .env.example .env   # fill in your PostHog and HeyCatch keys
yarn dev               # http://localhost:4321
```

## Environment variables

| Variable | Description |
|---|---|
| `PUBLIC_POSTHOG_KEY` | PostHog project API key (get from PostHog → Settings → Project token & ID) |
| `PUBLIC_POSTHOG_HOST` | PostHog ingest host (defaults to `https://us.i.posthog.com`) |
| `PUBLIC_HEYCATCH_KEY` | HeyCatch publishable project key (get from the HeyCatch dashboard's Install page) |

In production these are set in Netlify → Site config → Environment variables.

## Commands

| Command | Description |
|---|---|
| `yarn dev` | Start local dev server at `localhost:4321` |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Check for lint and formatting issues |
| `yarn fix` | Auto-fix lint and formatting issues |

## Deployment

Pushes to `main` deploy automatically via Netlify. Pull requests get deploy previews.
