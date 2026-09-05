# mukeshxmarco.github.io

Personal portfolio for **Mukesh (Marco) — AI & Backend Engineer**, hosted on GitHub Pages.

It's a single, self-contained `index.html`: hand-written HTML + CSS with a tiny vanilla-JS scroll reveal. No build step, no framework, no external JS runtime — it deploys as-is and loads fast (which is the point, given the work it's advertising).

## Design system

The page runs on **until** — a warm parchment editorial system. Cream `#f7f3ec` canvas, near-black `#121212` for all text and borders, olive `#6c853b` as the single accent. Type is Inter at until's negative tracking (standing in for the licensed Neue Haas faces) with Geist Mono for bracketed micro-labels like `[ scroll to discover ]`.

Every colour, size, radius and shadow resolves from the `:root` token block at the top of the `<style>`. There is no raw hex anywhere in the component CSS — reskin the whole site by editing tokens only.

Key rules the CSS holds to:

- **Radii are fixed by role:** 64px pills (buttons, nav), 32px cards, 50px chips. Don't introduce new values.
- **Borders, not shadows.** Separation comes from 1px ink borders and hairline `--color-rule` dividers. The two defined shadows are reserved for the floating nav.
- **One ink-filled CTA per surface.** `.btn-primary` is the only filled button; everything else is `.btn-secondary` (Paper fill) or `.btn-ghost` (transparent). Two exist on the page — hero and contact.
- **Olive is for headings and annotations only** — never a button fill or a large surface.

### Contrast

The reference palette's Mist (`#bebebe`, 1.9:1) and Olive Branch (`#6c853b`, 3.6:1) fail WCAG AA at body and caption sizes, so:

- `--color-ink-soft` (4.8:1) carries secondary body text
- `--color-olive-deep` (5.3:1) carries olive at caption sizes
- `--color-mist` and `--color-olive-branch` stay on dividers and 18px+ headings

Measured on the rendered page, body text sits above 5:1 on both the parchment canvas and the Paper card surfaces.

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
