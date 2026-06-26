# roze.dev

Personal portfolio + blog for Roze (روز) — [roze.dev](https://roze.dev).

Design: a risograph × Bollywood-70s editorial system (light only). See
[`DESIGN.md`](./DESIGN.md) for the full design system and tokens.

## Stack

- **Astro 7** (static output)
- **Tailwind CSS 4** (CSS-first `@theme`, via `@tailwindcss/vite`)
- **Markdown** content collections (content-layer `glob()` loader)
- `astro-expressive-code` for code blocks; `@astrojs/rss` for the feed
- Type: Anton (poster) · Archivo (body) · Space Mono (meta) · Noto Nastaliq Urdu (the روز mark, subset)

## Develop

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # astro check && astro build → dist/
pnpm preview
```

## Deploy — Cloudflare Pages

The site builds to a host-agnostic static `dist/` (no adapter). To deploy on
Cloudflare Pages:

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, and pick the `itsRoze/personal` repo.
2. Build settings: **Build command** `pnpm build`, **Build output directory** `dist`.
3. (Optional) Enable **Web Analytics** for the project (privacy-friendly, no code).
4. Add the custom domain `roze.dev` under **Custom domains** and move DNS when ready (the domain can stay on its current host until cutover).
