# TODOs

Deferred items from the roze.dev revamp (branch `claude/adoring-bhaskara-fa3e7a`).

- [x] ~~Decide `/reading` (books page) fate~~ — **deleted** (2026-06-26); not in the new nav.
- [ ] **Migrate `markdown.remarkPlugins` config** — Astro 7 deprecates it in favor of configuring `unified()` directly via `@astrojs/markdown-remark`. Works today (smartypants + reading-time still run); will break in a future Astro major.
- [x] ~~Cloudflare deploy~~ — **done** (2026-06-26): deployed as a Workers Static-Assets site (`personal`), Git-connected auto-deploy, `wrangler.jsonc` committed.
- [ ] **Attach custom domain `roze.dev`** — Worker → Settings → Domains & Routes → add custom domain (DNS already on Cloudflare). Then decommission the Vercel project.
- [ ] (optional) **Hero `<h1>` SEO** — the overprint ghosts triple the heading's raw text (`ROZEROZEROZE`) for crawlers (screen readers OK via `aria-hidden`). Fix by rendering ghosts as CSS pseudo-elements.
