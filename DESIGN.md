# Design System

Generated 2026-06-26 via `/design-consultation`. Source of truth for `/plan-design-review` and `/design-review`.

## Product Context
**roze.dev** — the personal portfolio + blog of Roze (روز): an engineer, writer, and maker working where technology meets art and public life. The site's job is to present writing (essays), selected work/projects, and publications to a general/mixed audience with a strong, distinctive point of view. The memorable feeling is **"artful & distinctive"** — it should read like a *piece of work*, not a product page. Light mode only.

## Aesthetic Direction
**Risograph print-zine × Bollywood-70s, on an editorial spine.** Think a hand-printed 70s South-Asian film poster crossed with a well-set literary index: saturated spot colors, visible halftone grain, off-register overprint, bold poster type for moments that earn it — but normal, readable editorial scale for everything you actually read. It is deliberately **not** the warm-cream/serif "AI-brand" look (that was explicitly rejected for reading as corporate).

Reference points / eureka moments:
- **70s Bollywood film posters** — saturated pink + marigold + indigo, halftone, dramatic overprint. Ties to Roze's heritage and the روز signature; it's an owned aesthetic, not a borrowed trend.
- **Risograph zines** — off-register duplicates, spot inks that overprint into new colors, paper grain. The "ROZE" wordmark prints its pink + marigold ghosts slightly misaligned, like real riso.
- **روز as the bilingual signature** — recurring identity mark (Latin "Roze" ↔ Nastaliq روز).
- **The pixel rose** — *roze → rose → روز*. A blocky/8-bit rose is the recurring glyph that makes the "engineer meets art" point in one symbol.

### The Rose (signature glyph)
A **faceted, angular rosette bloom** (the radiating multi-petal starburst shape) rendered as hard-edged **pixel/blocky** art:
- **Bloom:** 3 concentric rings of angular pointed petals (8 petals per ring, mid ring offset 22.5°), in a **red tonal palette** — deep red → red → with a single bright pink-red highlight pixel. Dark **pixel square at the center**.
- **Stem:** a short **green** pixel stem with one or two leaves below the bloom.
- **Texture:** subtle halftone-dot grain clipped to the bloom; hard edges (`shape-rendering: crispEdges`).
- **Treatment:** may carry a single-color **offset drop-shadow** (riso misregister) when used large.
- **Usage:** small mark beside the wordmark, beside section titles, in the footer; one larger instance as a hero accent (a *mark*, not a billboard). Built as a reusable component driven by a pixel-map so it can be re-sized/recolored/animated.

## Typography
- **Display / Poster:** **Anton** — the big "ROZE", section titles, essay titles. Uppercase, tight leading. Used only where large type earns it.
- **Body:** **Archivo** (400/500 regular; 600/800 for emphasis & list items). Grotesque, modern, pairs with the poster face. Long-form reading uses 18–19px.
- **UI / Meta / Code:** **Space Mono** — dates, read-times, tags, kickers, captions, code blocks. Carries the "engineer" voice.
- **Signature:** **Noto Nastaliq Urdu** — the روز mark only.

All free / Google-Fonts-hosted. *(Open question for build: optionally introduce a distinct serif for essay body if Archivo-on-Archivo feels too uniform in long-form — revisit during design review.)*

Type scale:
| Token | Size | Font / Weight | Use |
|-------|------|---------------|-----|
| poster | clamp(82–232px) | Anton | hero name, big moments |
| sec-title | clamp(34–68px) | Anton | section headers, essay titles |
| h1 | 44px | Archivo 800 | page title (non-hero) |
| list | clamp(20–32px) | Archivo 800, uppercase | writing/work index rows |
| h3 | 24px | Archivo 800, uppercase | sub-section |
| body | 18–19px | Archivo 400/500 | default reading |
| pull | clamp(26–40px) | Archivo 800, uppercase | pull-quotes |
| small/meta | 12–14px | Space Mono | dates, tags, kickers, captions |
| code | 13px | Space Mono | code blocks |

## Color
**Approach:** cool periwinkle ground + a saturated **3-spot riso palette** (pink, marigold, indigo) that overprints, plus a turquoise accent. The rose is its own **red + green** object pinned against this world. Hard ink borders/rules everywhere (poster construction). **Light mode only.**

Palette (light):
| Token | Hex | Use |
|-------|-----|-----|
| bg | `#e9eefc` | page background (periwinkle paper) |
| paper | `#f3f1ff` | raised surfaces, cards, code-block-on-light |
| ink | `#160f14` | text, borders, rules |
| text-muted | `#5b5750` | secondary text |
| text-faint | `#8f8a80` | meta, captions |
| line | `#160f14` | borders/dividers (same as ink — hard rules) |
| pink (spot 1) | `#ff2d86` | primary accent, links-hover, overprint |
| marigold (spot 2) | `#ff7d1a` | warm accent, pull-quotes, overprint ghost |
| indigo (spot 3) | `#1726ff` | links, meta-emphasis, halftone dots |
| teal (accent) | `#00b3a6` | sparing 4th accent / code comments |
| rose-red | `#e01e37` | rose bloom (base) |
| rose-red-dark | `#9e1024` | rose bloom (shadow/swirl) |
| rose-red-hi | `#ff7088` | rose bloom (highlight pixel) |
| rose-green | `#1f9b4e` | rose stem |
| rose-green-hi | `#37c76d` | rose leaves |

## Spacing Scale
4-base editorial rhythm: **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 90 px**. Section vertical padding ~90px; content max-width **1100px** (chrome) / **720px** (reading column).

## Layout
Poster construction: a 1100px max container with generous top space, **hard ink borders** (3–4px) separating sections, and an asymmetric, color-blocked hero (poster wordmark + offset ghosts + rose accent + halftone field). Indexes (writing, work) are full-width bordered rows with monospace metadata right-aligned. Reading view narrows to a ~680px column for comfort. Break symmetry intentionally (off-register type, bleeding rose, diagonal/dot fills in work frames) — never "centered everything centered."

## Motion
Restrained and physical, like print coming to life. Hover states shift list rows to a spot color and nudge them right (~12px). The rose can have a subtle entrance or idle micro-animation since it's pixel-based. Durations 120–200ms, ease-out. **Respect `prefers-reduced-motion`** — disable transforms, keep color changes.

## Voice
First-person, literary, reflective — the way the essays already read ("Coding as Gardening"). Warm and unpretentious; comfortable with metaphor (gardens, tending, craft) and with technical specifics side-by-side. Sentences can breathe. The mono/poster typography supplies the "edge," so the copy itself stays human and plainspoken — no marketing gloss, no "reimagined for the modern web."

## Decisions Log
- 2026-06-26 Initial design system via /design-consultation. Memorable: **"artful"**. Direction: riso × Bollywood-70s, editorial spine, pixel-rose motif, light-only. Explicitly rejected: warm-cream + serif "AI-brand" look (read as Anthropic/corporate); oversized wall-of-text (Swiss-punk/brutalist heros). Rose finalized as faceted rosette bloom in red + green pixel stem.
- Stack target (separate track): Astro 5→7, Tailwind 3→4 (CSS-first, `@tailwindcss/vite`), MDX→Markdown. See PROJECT.md.
