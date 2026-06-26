# Project: roze.dev (Personal Portfolio)

## Overview
A personal portfolio and blog living at [roze.dev](https://roze.dev). It's the
user's home on the web — a place to publish writing, showcase projects and
publications, and present themselves to a general/mixed audience. Success is a
site that looks distinctive and well-crafted (design is the product here), is
fast and easy to maintain, and that the user is proud to point people to. The
project is currently undergoing a full **design revamp**: the visual identity is
being reimagined even though the underlying stack is already modern.

## Users
General / mixed audience — recruiters, fellow engineers reading the blog, and
casual visitors. Not optimized for a single funnel; it's a personal presence, so
it should feel personal and intentional rather than templated.

## Lean
**prototype.** Personal side project where iteration speed beats exhaustive
rigor. Ship rough, refine in the browser, don't over-engineer. (Design quality
is still held to a high bar — see Design Priority.)

## Tech Stack
Current → **target** for this revamp:
- **Astro 5 → 7** (latest stable is 7.0.3) — two major upgrades
- **Tailwind CSS 3 → 4** (latest 4.3.1) — CSS-first config; drops
  `tailwind.config.ts`, replaces `@astrojs/tailwind` integration with the
  `@tailwindcss/vite` plugin. Plus `@tailwindcss/typography`.
- **Content: MDX → plain Markdown** (leaning toward dropping `@astrojs/mdx`
  for `.md`, pending a scan that posts don't embed components)
- **RSS** via `@astrojs/rss`; `astro-expressive-code` for code blocks
- Fonts: Inter Variable, Noto Serif, Noto Nastaliq Urdu (`@fontsource-variable/*`)
- `@vercel/analytics` + `@vercel/speed-insights`
- TypeScript, Prettier, pnpm
- Note: README mentions SolidJS but it is NOT in dependencies (stale doc).

## Deploy
**Cloudflare Workers (Static Assets)** — moved off Vercel (2026-06-26). Site is
`output: "static"`; served by an assets-only Worker (`personal`) configured in
`wrangler.jsonc` (`assets.directory: ./dist`, no `main`). Git-connected, so every
push to `main` builds (`pnpm build`) and deploys. Live at
`personal.elewis9989.workers.dev`; domain `roze.dev` transferred to Cloudflare DNS
(custom-domain attach is the last manual step). Analytics via Cloudflare Web
Analytics. Repo: `github.com/itsRoze/personal`. Ships direct-to-main (no PR).

## Design Priority
**high.** It's a portfolio — the look *is* the product. A coherent design system
should be locked in before/while rebuilding the UI.

## Decisions Log
- 2026-06-25 Bootstrapped via /bootstrap. Confirmed stack is already Astro 5 (the
  "very old code" was the design/structure, not the framework). Revamp scope =
  design system + UI refresh, with selective cleanup.
- 2026-06-25 Stack upgrade decided: Astro 5→7, Tailwind 3→4, drop MDX for plain
  Markdown (pending posts scan). Design system to be defined first via
  /design-consultation, then a /plan handles the framework upgrades.
