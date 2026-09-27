# mukeshxmarco.github.io

Personal portfolio for **Mukesh Kumar (Marco) — Software Engineer · Backend · AI · Full-Stack**, hosted on
GitHub Pages.

A single self-contained `index.html`: near-black canvas, Plus Jakarta Sans set at display size with
tight negative tracking, a lavender/yellow accent pair, and a nav that folds into a floating capsule
on scroll. Hand-written HTML + CSS with vanilla JS; no build step, no framework.

Earlier versions live in git history — `git show 3e7cae9:index.html` for **Charcoal & Ember**,
`git show faf1daa:index.html` for **Ink & Signal**.

## Design system

Every colour, size, radius and rhythm value resolves from the `:root` token block at the top of the
`<style>` element. No raw hex appears below that block.

- **Canvas** `--bg` near-black, one card surface `--surface`, one raised `--surface-raised`.
- **Ink ramp** primary 14.6:1, soft 5.9:1 against the canvas.
- **Accents** lavender `--accent` leads, pale yellow `--accent-2` answers. Used on kickers, the
  "now" badges, the work-panel glows, and the two "Good to know" cards.
- **Shape** one card radius (`--radius`), one small radius for minis, pills for everything round.
- **Hierarchy** three levels only: `.display` / `.title` → `.heading` → body, plus `.kicker` and
  `.section-label` for meta. Weight 500 everywhere; 600 reserved for numerals and micro-labels.
- **One primary CTA** — the cream `Contact` pill, repeated once in the closing band. Everything
  else is a text link.

## Layout

Section banners in the markup, in page order: `NAV`, `HERO`, `MARQUEE`, `PROJECTS`, `EXPERIENCE`,
`PROCESS`, `GOOD TO KNOW`, `FINAL CTA`, `FOOTER`. Evidence comes first: the "How I work" section
sits after the work and experience it describes, not before.

- **Hero** is full-viewport with content weighted to the lower third.
- **Nav** shows the full name at rest and folds to `Marco` once scrolled past 90px.
- **Marquee** is the proof strip: only metrics that are known and explained elsewhere on the page.
- **Selected work** is a two-up grid of `.project` plates. Each has a 4:3 `.project-panel` carrying the
  project's mark over a tinted glow, a `.project-context` line (where / when), the project name, a
  one-line summary, then a `.project-facts` list: **What I built**, **Impact** (only when a real,
  defensible number exists — otherwise leave it out) and **Stack**. Set the glow per item with
  `style="--glow: var(--accent)"`. The mark is a figure by default; add `class="phrase"` to the `<b>`
  for word marks so they sit at the same optical weight as a number. `.project-flag` pins an award
  badge to the panel's top-right.
- **Process** is a sticky stack — each `.principle` pins at 22vh and fades as the next arrives.
  Falls back to plain stacked blocks under 720px and under `prefers-reduced-motion`.
- **Experience** is a two-column split: `.role` articles on the left, a sticky `.toolkit` of
  `.chips` on the right. `.now` marks current roles; `<b>` sets metrics in tabular numerals.

## Accessibility invariants

Every section keeps an `h2`. Decorative SVGs carry `aria-hidden="true"`. External links carry
`rel="noopener"`. Interactive elements are ≥44px tall. `prefers-reduced-motion` and
`prefers-reduced-transparency` are both honoured.

## Deploying

Push to `master`. GitHub Pages serves from the repo root at
[mukeshxmarco.github.io](https://mukeshxmarco.github.io/). No workflow or build required.
