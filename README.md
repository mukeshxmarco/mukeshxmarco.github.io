# mukeshxmarco.github.io

Personal portfolio for **Mukesh (Marco) — AI & Backend Engineer**, hosted on GitHub Pages.

It's a single, self-contained `index.html`: hand-written HTML + CSS with a tiny vanilla-JS scroll reveal. No build step, no framework, no external JS runtime — it deploys as-is and loads fast (which is the point, given the work it's advertising).

## Editing content

Everything lives in `index.html`. Look for the `<!-- ==== SECTION ==== -->` comment banners.

- **Hero metrics** — the 4-tile rail. Edit the `.metrics` block. Each `.metric` has a `.num` (the number) and `.cap` (the caption). Add `class="metric crown"` to give a tile the amber highlight (currently on AIR 106 — keep it on one tile only).
- **Experience** — the `#experience` section. Copy a `<article class="role">…</article>` block to add a job. Put `class="role current"` on the newest one to light up its timeline dot. Wrap any number in `<span class="metric-inline">…</span>` to accent it.
- **Projects** — the `#work` section. Copy an `<article class="card">…</article>` block. Each card has a title, a `.card-metric` (big number + `<small>` label), a one-line problem, and `.tag` stack chips.
- **Skills** — the `#skills` section. Six `.skill-group` blocks, each a heading + `.chip` list.
- **Contact / links** — the `#contact` section. Email, phone (`tel:` link), GitHub, LinkedIn, LeetCode.

## Design tokens

All colors, fonts, radii, and spacing are CSS custom properties at the top of the `<style>` block (`:root { … }`). Reskin the whole site by editing those — e.g. change `--accent` to shift the signal color, or `--bg`/`--surface` for the background.

## ⚠️ Verify the LeetCode link

The LeetCode URL is set to `https://leetcode.com/u/mukeshxmarco/` (guessed from the handle). **Confirm it's correct** and update it in the `#contact` section if not — search the file for `leetcode.com`.

## Deploying

Push to `master`. GitHub Pages serves `index.html` from the repo root at
[mukeshxmarco.github.io](https://mukeshxmarco.github.io/). No workflow or build required.
