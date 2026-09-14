# mukeshxmarco.github.io

Personal portfolio for **Mukesh (Marco) — AI & Backend Engineer**, hosted on GitHub Pages.

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
  "now" badges, the work-panel glows, and the two "What I do" cards.
- **Shape** one card radius (`--radius`), one small radius for minis, pills for everything round.
- **Hierarchy** three levels only: `.display` / `.title` → `.heading` → body, plus `.kicker` and
  `.section-label` for meta. Weight 500 everywhere; 600 reserved for numerals and micro-labels.
- **One primary CTA** — the cream `Contact` pill, repeated once in the closing band. Everything
  else is a text link.

## Layout

Section banners in the markup: `NAV`, `HERO`, `MARQUEE`, `PROCESS`, `WHAT I DO`, `BACKGROUND`,
`PROJECTS`, `FINAL CTA`, `FOOTER`.

- **Hero** is full-viewport with content weighted to the lower third.
- **Nav** shows the full name at rest and folds to `Marco` once scrolled past 90px.
- **Projects** is a two-up grid of `.project` plates, each one a 4:3 `.project-panel` carrying the
  project's mark over a tinted glow, then a tag row, the project headline, and a paragraph. Set the
  glow per item with `style="--glow: var(--accent)"`. The mark is a figure by default; add
  `class="phrase"` to the `<b>` for word marks so they sit at the same optical weight as a number.
  `.project-flag` pins an award badge to the panel's top-right.
- **Process** is a sticky stack — each `.principle` pins at 22vh and fades as the next arrives.
  Falls back to plain stacked blocks under 720px and under `prefers-reduced-motion`.
- **Background** is a two-column split: `.role` articles on the left, a sticky `.toolkit` of
  `.chips` on the right. `.now` marks current roles; `<b>` sets metrics in tabular numerals.
- **More projects** are `.mini` cards — `<a>` when there's somewhere to go, `<article>` when not.
  Descriptions clamp at 3 lines so a long one can't break the grid.

## Accessibility invariants

Every section keeps an `h2`. Decorative SVGs carry `aria-hidden="true"`. External links carry
`rel="noopener"`. Interactive elements are ≥44px tall. `prefers-reduced-motion` and
`prefers-reduced-transparency` are both honoured.

## ⚠️ Verify the LeetCode link

The LeetCode URL is `https://leetcode.com/u/mukeshxmarco/` (guessed from the handle).
**Confirm it's correct** — search for `leetcode.com`.

## Deploying

Push to `master`. GitHub Pages serves from the repo root at
[mukeshxmarco.github.io](https://mukeshxmarco.github.io/). No workflow or build required.
