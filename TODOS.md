# TODOs

Deferred items from the roze.dev revamp (branch `claude/adoring-bhaskara-fa3e7a`).

- [x] ~~Decide `/reading` (books page) fate~~ — **deleted** (2026-06-26); not in the new nav.
- [ ] **Migrate `markdown.remarkPlugins` config** — Astro 7 deprecates it in favor of configuring `unified()` directly via `@astrojs/markdown-remark`. Works today (smartypants + reading-time still run); will break in a future Astro major.
- [ ] **Cloudflare Pages setup (manual)** — create the Pages project, connect `itsRoze/personal` (build `pnpm build`, output `dist`), enable Web Analytics, move `roze.dev` DNS. Steps in `README.md`.
