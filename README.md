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

## Deploy — Cloudflare Workers (Static Assets)

The site builds to a host-agnostic static `dist/` (no framework adapter) and is
served by an **assets-only Cloudflare Worker** — config in [`wrangler.jsonc`](./wrangler.jsonc)
(`assets.directory: ./dist`, no `main`).

- **Auto-deploy:** the Worker (`personal`) is connected to this repo, so every push
  to `main` runs `pnpm build` and deploys. Build command `pnpm build`, output `dist`.
- **Manual deploy:** `npx wrangler login` once, then `npx wrangler deploy` (uses
  `wrangler.jsonc`). `npx wrangler deploy --dry-run` validates config without deploying.
- **Live:** `personal.elewis9989.workers.dev` → custom domain `roze.dev` (attach under
  the Worker's **Settings → Domains & Routes**; DNS is on Cloudflare).
- **Analytics:** Cloudflare Web Analytics (enable in the dashboard; no code). `public/_headers`
  sets security + asset-caching headers. `.node-version` pins the build to Node 22.
