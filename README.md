# mukeshxmarco.github.io

Personal portfolio for **Mukesh (Marco) — AI & Backend Engineer**, hosted on GitHub Pages.

It's a single, self-contained `index.html`: hand-written HTML + CSS with a tiny vanilla-JS scroll reveal. No build step, no framework, no external JS runtime — it deploys as-is and loads fast (which is the point, given the work it's advertising).

## Design system

The page copies **untillabs.com's homepage**: a deep forest canvas (`#121c0f`, the reference sheet's Bone tone) under film grain and a soft olive glow, Parchment `#f7f3ec` as the text colour, olive as the accent. The until style reference describes their light inner-page system; the homepage inverts it, and so do we — token *names* keep their reference meanings while their *values* swap roles (`--color-ink` = cream foreground, `--color-parchment` = forest canvas, `--color-paper` = the cream-filled CTA, their "Join Us"). Type is Inter at until's negative tracking (standing in for the licensed Neue Haas faces) with Geist Mono for the micro-label chips.

Every colour, size, radius and shadow resolves from the `:root` token block at the top of the `<style>`. There is no raw hex anywhere in the component CSS — reskin the whole site by editing tokens only.

### Glass surfaces

Cards, the nav pill, the footer and the mono chips are frosted glass (`--surface-glass` / `--surface-glass-strong` + `--glass-blur`). Two fixed layers behind the content make the frost legible — `backdrop-filter` is invisible over a flat colour:

- `body::before` — a fixed olive glow (top-left, echoed bottom-right) plus a vignette darkening the frame edges, matching the homepage's lighting
- `body::after` — a fine SVG-noise film grain at 7%; the glass blurs the grain away, which is what visibly separates panel from canvas

`.tag` pills carry the translucent fill without the blur — at 12px the luminance lift is what matters, and it keeps the compositing cost down.

`@supports` and `prefers-reduced-transparency` both collapse the glass to solid moss panels and drop both layers.

### Chips

The Geist Mono micro-labels (hero meta, `scroll to discover`, section eyebrows, `more projects`) are pill chips — the shared rule sits above `.eyebrow`. Eyebrows keep the olive border; the rest use `--color-rule`.

Key rules the CSS holds to:

- **Radii are fixed by role:** 64px pills (buttons, nav), 32px cards, 50px chips. Don't introduce new values.
- **Borders, not shadows.** Structure separates with the soft cream `--color-line` on cards/nav and moss `--color-rule` hairlines in lists; buttons keep full-strength `--color-ink` borders. The two defined shadows are reserved for the floating nav.
- **One cream-filled CTA per surface.** `.btn-primary` is the only filled button; everything else is `.btn-secondary` (glass) or `.btn-ghost` (transparent). Two exist on the page — hero and contact — plus the folded nav capsule's CTA, which takes the fill only while it is the sole action on screen.
- **Olive is for headings and annotations only** — never a button fill or a large surface.

### Contrast

`--color-ink-soft` carries secondary body text, `--color-olive-deep` carries olive at caption sizes, and `--color-olive-branch` is for 24px+ headings only. All three are sized for the **worst** spot on the canvas — the olive glow's hotspot, which the fixed background parks at the viewport's top-left at every scroll depth — not the average: measured on rendered pixels, the worst soft-text ratio is 4.65:1 (floor 4.5). If you change the glow opacities or the canvas tone, re-sample — and sample beside the glyphs, not on them.

### Nav

The nav is untillabs.com's pattern: a full pill bar at the top of the page that folds into a small centered capsule (brand dots + CTA) once you scroll past ~110px, and unfolds below 50px — the gap between the two thresholds is hysteresis so it never flickers. The collapse animates `max-width` on `.nav`, `.brand-name` and `.nav-links`; the script is the small `shrunk`-class toggle above the reveal observer.

## Editing content

Everything lives in `index.html`. Look for the `<!-- ==== SECTION ==== -->` comment banners.

- **Hero metrics** — the 4-up card grid. Edit the `.stats` block. Each `.stat` is an olive `.idx` label (`| 1 |`) above a `.card` holding `.num` and `.cap`. Keep the index labels sequential.
- **Experience** — the `#experience` section. Copy an `<article class="role">…</article>` block to add a job. Its `.role-aside` holds the date, org, and an optional `<span class="badge-now">now</span>` for current roles. Wrap any number in `<span class="metric-inline">…</span>` to set it in mono.
- **Selected work** — the `#work` section's `.work-list`. Each `.work-row` is an olive `.work-idx`, a `.work-main` (title, `.prob` line, `.tag` chips), and a right-aligned `.work-metric` with a `<small>` label.
- **More projects** — the `.more-grid` below it. Copy a `.mini` block; use `<a class="mini" href="…" target="_blank" rel="noopener">` when the project has a live link, `<article class="mini">` when it doesn't.
- **Skills** — the `#skills` section. Seven `.skill-group` blocks, each a heading + `.chip` list.
- **Contact / links** — the `#contact` section. Email, phone (`tel:` link), GitHub, LinkedIn, LeetCode.

### Accessibility invariants

If you add a section, keep these true:

- Every `<section>` needs an `<h2>`. Where the design shows no visible heading (About, Experience, Toolkit), use `<h2 class="vh">` — the visually-hidden utility — so the outline never jumps h1 → h3.
- Decorative `<svg>` gets `aria-hidden="true"`.
- External links get `rel="noopener"`.
- Interactive elements need a 44px minimum height.

## ⚠️ Verify the LeetCode link

The LeetCode URL is set to `https://leetcode.com/u/mukeshxmarco/` (guessed from the handle). **Confirm it's correct** and update it in the `#contact` section if not — search the file for `leetcode.com`.

## Deploying

Push to `master`. GitHub Pages serves `index.html` from the repo root at
[mukeshxmarco.github.io](https://mukeshxmarco.github.io/). No workflow or build required.
