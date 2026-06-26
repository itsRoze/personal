# TODOs

Deferred items from the roze.dev revamp (branch `claude/adoring-bhaskara-fa3e7a`).

- [x] ~~Decide `/reading` (books page) fate~~ — **deleted** (2026-06-26); not in the new nav.
- [ ] **Migrate `markdown.remarkPlugins` config** — Astro 7 deprecates it in favor of configuring `unified()` directly via `@astrojs/markdown-remark`. Works today (smartypants + reading-time still run); will break in a future Astro major.
- [x] ~~Cloudflare deploy~~ — **done** (2026-06-26): deployed as a Workers Static-Assets site (`personal`), Git-connected auto-deploy, `wrangler.jsonc` committed.
- [ ] **Attach custom domain `roze.dev`** — Worker → Settings → Domains & Routes → add custom domain (DNS already on Cloudflare). Then decommission the Vercel project.
- [x] ~~Hero `<h1>` SEO~~ — **done** (2026-06-26): ghosts now render via CSS `content:attr()`, so the heading's DOM text is the word once.
