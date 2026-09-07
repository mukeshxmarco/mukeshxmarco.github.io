# mukeshxmarco.github.io

Personal portfolio for **Mukesh (Marco) — AI & Backend Engineer**, hosted on GitHub Pages.

It's a single, self-contained `index.html` — the **Charcoal & Ember** system: warm charcoal canvas, cream text, ember-orange accent, film grain, glow ellipses, a full-viewport bottom-left hero, and a nav that folds into a capsule on scroll (untillabs.com's system). Hand-written HTML + CSS with vanilla JS; no build step, no framework.

The earlier light variant (Ink & Signal) lives in git history — `git show faf1daa:index.html` — if it's ever wanted back.

## Portrait

The hero reserves a photo slot, top-right (`.hero-photo`). It hides itself until a `portrait.png` exists next to `index.html` — drop the file in and it appears, nothing else to wire. Use a 4:5 image, ~800×1000px or larger, ideally shot/generated on a dark charcoal background so it melts into the canvas.

## Design system

Same content on untillabs.com's machinery (their shipped CSS was torn down for this — easing `cubic-bezier(.4,.25,.2,1)`, `.gradient-card` panel recipe, blurred-div glow ellipses, film grain at mix-blend overlay above all content):

- Full-viewport hero, bottom-left: name with a dimmed second line, ember kicker, lead paragraph. No buttons — the nav's cream-filled CTA is the single primary action on the first screen.
- Nav folds into a centered capsule (name + cream CTA + back-to-top arrow) past 110px, unfolds under 50px.
- Left rail gauge (≥1150px): scroll-progress thumb + vertical mono label of the current section.
- Glass panels blur the glows behind them; fallbacks collapse to solid charcoal panels for no-`backdrop-filter` and `prefers-reduced-transparency`.
- Contrast is measured on rendered pixels (sample beside glyphs, not on them); soft text ≥4.6:1 everywhere including glow hotspots.

## Editing content

Look for the `<!-- ==== SECTION ==== -->` banners: hero, about (`.about-grid` + `.about-card` facts), experience (`.role` articles; `badge-now` marks current roles; `metric-inline` sets numbers in mono), selected work (`.work-row`s with right-aligned `.work-metric`), more projects (`.mini` cards; `<a>` when live, `<article>` when not), skills (`.skill-group` + `.chip`s), contact.

Accessibility invariants: every section keeps an `h2`; decorative SVGs carry `aria-hidden="true"`; external links carry `rel="noopener"`; interactive elements are ≥44px tall.

## ⚠️ Verify the LeetCode link

The LeetCode URL is set to `https://leetcode.com/u/mukeshxmarco/` (guessed from the handle). **Confirm it's correct** and update it in both files if not — search for `leetcode.com`.

## Deploying

Push to `master`. GitHub Pages serves from the repo root at
[mukeshxmarco.github.io](https://mukeshxmarco.github.io/). No workflow or build required.
