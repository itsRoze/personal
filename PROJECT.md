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
**Migrating Vercel → Cloudflare Pages** (decided 2026-06-26 in plan-eng-review).
Site is `output: "static"` (host-agnostic); the `@astrojs/vercel` adapter is being
dropped and `@vercel/analytics`/speed-insights removed in favor of Cloudflare Web
Analytics. Repo: `github.com/itsRoze/personal`. Domain stays on Vercel until the
DNS cutover (manual dashboard step, deferred). Build: `pnpm build` → `dist/`.

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
