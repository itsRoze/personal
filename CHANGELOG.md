# Changelog

## [0.1.0] — 2026-06-26

Full design revamp + stack upgrade: a risograph × Bollywood-70s editorial system
(light only) on a modernized toolchain, ready to deploy on Cloudflare Pages.

### Stack
- Migrate to **Astro 7** + **Tailwind 4** (CSS-first `@theme` via `@tailwindcss/vite`);
  drop the `@astrojs/tailwind` integration, `tailwind.config.ts`, and `postcss.config.cjs`.
- Migrate blog to the Astro 7 **content-layer** `glob()` API (`entry.id` / `render()`); RSS updated.
- Drop **MDX** for plain Markdown; add `@astrojs/markdown-remark` to keep remark plugins.
- Drop the **Vercel** adapter + analytics — `output: "static"` is now host-agnostic and
  **Cloudflare-ready** (`public/_headers`, `.node-version`).

### Design
- New design tokens + fonts: Anton (poster), Archivo (body), Space Mono (meta),
  Noto Nastaliq Urdu subset for the روز mark.
- **Pixel rose** signature glyph (faceted red rosette + green stem).
- Site shell (Layout, Nav, Footer) + shared components (PosterHeading, SectionHeader,
  IndexRow, WorkCard).
- Rebuilt every page: home (poster hero + indexes), writing index + editorial reading
  view, work (content cards), publications, about.

### Housekeeping
- Delete the orphaned MDX archive, the books page, and superseded card components.
- a11y: real `<h1>` per page; decorative rose hidden from the a11y tree.
- Rose favicon; README + PROJECT.md + DESIGN.md for the new stack & deploy.
