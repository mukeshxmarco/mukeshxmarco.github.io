# mukeshxmarco.github.io

Personal portfolio for **Mukesh (Marco) — AI & Backend Engineer**, hosted on GitHub Pages.

Two complete, self-contained variants live in this repo — same content, two design systems. Pick one to host:

| File | Variant | Feel |
|---|---|---|
| `index.html` | **A — Ink & Signal** | Light, minimal, confident: near-white canvas, black ink, one signal-orange accent, hairline rules, mono numerals. No decoration that doesn't carry information. |
| `dark.html` | **B — Charcoal & Ember** | Dark editorial: warm charcoal canvas, cream text, ember-orange accent, film grain, glow ellipses, a full-viewport bottom-left hero (name + dimmed tagline), and a nav that folds into a capsule on scroll (untillabs.com's system). |

GitHub Pages serves `index.html` at the root; `dark.html` is reachable at `/dark.html`. To ship B instead, swap the filenames:

```bash
git mv index.html light.html && git mv dark.html index.html && git commit -m "ship dark variant"
```

Both are hand-written HTML + CSS with vanilla JS (scroll reveal, IST clock, mobile menu; B adds the theatre scroll mapper, rail gauge, and nav fold). No build step, no framework.

## Variant A — Ink & Signal (`index.html`)

- All colour/size/radius values resolve from the `:root` token block; no raw hex in component CSS.
- `--accent` (`#e8502e`) is for graphics and 18px+ text only (3.4:1); small text uses `--accent-deep` (`#c73a1c`, 4.7:1). Secondary text `--soft` is 5.8:1 on the canvas.
- One black filled CTA per surface (hero, contact); everything else is a text/underline link.
- Sections: kicker (mono uppercase, accent-deep) → h2 → content. Hairline `--line` rules separate list rows; cards are `--surface` white with 1px `--line` borders — border-colour darkens on hover.
- Sticky top nav with hairline bottom border; mobile menu below 760px.

## Variant B — Charcoal & Ember (`dark.html`)

Same content on untillabs.com's machinery (their shipped CSS was torn down for this — easing `cubic-bezier(.4,.25,.2,1)`, `.gradient-card` panel recipe, blurred-div glow ellipses, film grain at mix-blend overlay above all content):

- Full-viewport hero, bottom-left: name with a dimmed second line, ember kicker, lead paragraph. No buttons — the nav's cream-filled CTA is the single primary action on the first screen.
- Nav folds into a centered capsule (name + cream CTA + back-to-top arrow) past 110px, unfolds under 50px.
- Left rail gauge (≥1150px): scroll-progress thumb + vertical mono label of the current section.
- Glass panels blur the glows behind them; fallbacks collapse to solid charcoal panels for no-`backdrop-filter` and `prefers-reduced-transparency`.
- Contrast is measured on rendered pixels (sample beside glyphs, not on them); soft text ≥4.6:1 everywhere including glow hotspots.

## Editing content

Both files share the same content blocks — edit in both if you change copy. Look for the `<!-- ==== SECTION ==== -->` banners: hero, about (`.about-grid` + `.about-card` facts), experience (`.role` articles; `badge-now` marks current roles; `metric-inline` sets numbers in mono), selected work (`.work-row`s with right-aligned `.work-metric`), more projects (`.mini` cards; `<a>` when live, `<article>` when not), skills (`.skill-group` + `.chip`s), contact.

Accessibility invariants: every section keeps an `h2`; decorative SVGs carry `aria-hidden="true"`; external links carry `rel="noopener"`; interactive elements are ≥44px tall.

## ⚠️ Verify the LeetCode link

The LeetCode URL is set to `https://leetcode.com/u/mukeshxmarco/` (guessed from the handle). **Confirm it's correct** and update it in both files if not — search for `leetcode.com`.

## Deploying

Push to `master`. GitHub Pages serves from the repo root at
[mukeshxmarco.github.io](https://mukeshxmarco.github.io/). No workflow or build required.
