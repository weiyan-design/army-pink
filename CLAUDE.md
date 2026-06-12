# Army Pink — Project Guide

A wellness portal for domestic-violence survivors, built with Army Pink in partnership with Vedanta (yoga/meditation studio). This file is auto-loaded into every conversation — keep it lean. Long-form context lives in `Context/`.

- **Live:** https://zingy-sherbet-559514.netlify.app
- **Repo:** `weiyan-design/army-pink` (private)

---

## Stack & commands

- **Astro 5** static site (`output: 'static'`, no adapter)
- `npm run dev` — dev server at `localhost:4324` (NOT 3003 — that's an old `npx serve` instruction for the html.to.design Figma plugin)
- `npm run build` — outputs to `dist/`
- `netlify deploy --prod` — reads `netlify.toml`, deploys `dist/`. Netlify also auto-builds on push to `main`.

---

## File layout

- `src/pages/*.astro` — one file per route
- `src/layouts/Layout.astro` — shared shell: crisis banner, nav, footer, safe-exit, Givebutter trigger, Lenis init
- `src/data/team.js` — single source of truth for 66 team members
- `src/_archive/` — files prefixed `_` aren't built by Astro (used for archived components like the old donate panel)
- `public/styles.css` — all site styles. The legacy root `styles.css` is dead, kept for reference only.
- `public/script.js` — all client JS (one IIFE)
- `public/img/`, `public/vid/` — optimized assets
- `Context/` — long-form notes, not required by the build

## Current pages

| Route | File | Notes |
|---|---|---|
| `/` | `index.astro` | Espacio-style sticky video hero + char-blur statement |
| `/mission` | `mission.astro` | Story, values, link to /team |
| `/team` | `team.astro` | Flip-card grid, all 66 people from `team.js` |
| `/escape-club` | `escape-club.astro` | Community + tier cards |
| `/wellness-portal` | `wellness-portal.astro` | Coverflow doors hero (3 arches in a perspective carousel); legacy yoga sections below the hero pending redesign |
| `/wellness-portal/calm-room`, `/library`, `/wellness-experiences` | nested under `src/pages/wellness-portal/` | Sub-pages; each is 12 lines importing `WellnessSubpageShared.astro` with per-room props |
| `/partners` | `partners.astro` | Vedanta featured, partnership models |
| `/privacy`, `/sms-terms`, `/disclaimer`, `/contact` | legal pages | |

## Adding a new page

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Page Title — Army Pink">
  <!-- content -->
</Layout>
```

Nav, footer, crisis banner, safe exit appear automatically.

---

## Gotchas & rules

- **"Revert back" warning.** When the user says "revert back", clarify scope first. They usually mean the last few changes, NOT a full `git checkout` to a tag. A full revert wiped uncommitted work once already.
- **Commit hygiene pattern.** When the working tree has unrelated drafts, isolate the commit: copy edited files to `/tmp`, `git checkout HEAD --`, re-apply only the target edits with `Edit`, stage + commit, then restore from `/tmp`. Used for the team-page commits.
- **Hero side-image positions** are owned entirely by JS (`left`, `width`). CSS only sets `aspect-ratio` and `top`. Single source of truth prevents rounding divergence at breakpoints.
- **Image optimization.** `sips -Z <width>` for stills, `ffmpeg -c:v libx264 -crf 23 -vf scale=1920:-2 -an -movflags +faststart` for video. Originals dropped from 31MB → 1MB total; hero video 15MB → 2.1MB.
- **Global grain z-index.** `body::before` at `z-index: 50` — over content, under nav (1100+), donate (1100+), safe-exit (9000), crisis banner (1000). Don't stack two grain layers via multiply (goes too dark).
- **Lenis + `scroll-behavior`.** Lenis (`lerp: 0.1`) is initialized in `Layout.astro`. `html { scroll-behavior: smooth }` was removed from `public/styles.css` because the combo caused stutter. Per-row `scroll-behavior: smooth` on `.thumb-row` / `.carousel-track` are kept intentionally (horizontal scroll containers).
- **Statement char blur requires word wrappers.** Per-char `display: inline-block` spans can break mid-word — wrap chars in `.statement-word { display: inline-block; white-space: nowrap }`. Spaces use `.statement-space` with `width: 0.28em`.
- **Wellness portal sub-page navigation** uses a sessionStorage handoff (`wpArchEntry` / `wpArchExit` keys) to bridge a single arch animation across page navigation. Source page renders overlay arch at fullscreen → navigate → destination renders the same arch fullscreen → fades out. Fade-in flicker on destination is killed by forcing `transitionDuration='0s'` before adding `is-arch-shown`, then restoring. See `src/components/WellnessSubpageShared.astro` entry script.
- **Sub-page → hub navigation is intentionally simple** (no arch animation), while hub → sub-page uses the full arch expansion. Wei's feedback was that the arch-contract-on-hub from the switcher read as a "flash" — keep the ceremonial expansion for entry only.
- **`astro dev` / `astro build` silently hangs** = `node_modules` corruption (typically a missing transitive dep). Recovery: `pkill -9 -f astro && rm -rf node_modules package-lock.json .astro && npm install`. The error is on stderr but terminal-buffered, so dev/build appears to hang at "astro dev" / "Building static entrypoints..." with no output. Saw `http-cache-semantics` missing once — likely caused by aborted `npm run dev` cycles.

---

## External services

- **Givebutter.** Donation popup loaded in `Layout.astro`: `<script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=yLfulzFp7eIMG8jn">`. Hidden trigger `<givebutter-button id="gb-trigger" campaign="GHP0EF">` lives off-screen via `.givebutter-trigger-wrap { position: absolute; left: -9999px; top: 0; }` — **zero-dimension hidden wrappers prevent widget init**, learned the hard way. `[data-donate-panel]` clicks programmatically click the hidden trigger. Status as of 2026-05-25: needs in-browser verification — user reported clicks did nothing, but the wrapper CSS was the likely cause and is now fixed.
- **Remarc** — review comments via MCP. Session: "Army Pink", ID `0C239638-AF28-4479-AD28-7565FACF305C`. Check open comments with `remarc_list_comments`.
- **Figma** — design file at `https://www.figma.com/design/t6QHVTPWJ68j4plig065Yw/Army-Pink?node-id=4-51`. Figma MCP connected.

---

## Open threads

- **Givebutter popup verification.** Needs a real-browser check. Diagnostic snippet:
  ```js
  var g = document.getElementById('gb-trigger');
  console.log('element:', g, 'shadow:', g && g.shadowRoot, 'children:', g && g.children.length, 'inner button:', g && g.querySelector('button'));
  ```
  If still broken: restore `&p` suffix on the account ID (user originally pasted `yLfulzFp7eIMG8jn&p`), or fall back to `window.open(...)` direct link.
- **Uncommitted work from 2026-05-23 → 2026-05-25 session.** Espacio hero, statement curtain + char-blur, pill restyle, button radius, Givebutter swap, archive file. Only `f57f315` ("Fix janky scrolling across all pages") has been pushed.
- **Max Townsend (team #31).** Bio + photo are wrong on `armypink.org/ourteam` (names "Max Harstine", reuses Jenna Vanek's photo); copied as-is into `team.js`. Needs manual correction.
- **Legal pages — pending external steps.** (1) Netlify dashboard: set `support@armypink.org` as the form-notification recipient (Forms → Settings) — the contact form HTML doesn't route by itself. (2) Verify `support@armypink.org` mailbox/forward actually exists (referenced on `/privacy`, `/sms-terms`, `/disclaimer`, `/contact`). (3) Confirm phone `(213) 579-5051` is correct. (4) Owner review of `/sms-terms` content; legal counsel review of `/disclaimer` §6 limitation-of-liability.

---

## Design library

Wei's reusable visual pattern library lives at `~/Documents/Vibe Code/_design-library/`. Two patterns came from this project: `coverflow-doors-tuner` (status: experiment) and `grain-texture` (status: production). Live demos: https://weiyan-design.github.io/design-patterns/. The full coverflow tuner prototype stays in-repo at `public/prototype-doors.html`.

---

## Long-form context (read on demand, not auto-loaded)

- `Context/strategy.md` — survivor emotional journey, portal strategy, free-vs-paid product principles, funder/partner framework, Discord tiers + channel architecture + revenue projections
- `Context/build-history.md` — dated session journals: landing v1/v2/v3, Astro migration, multi-page build, statement section, hero rebuilds, coverflow doors, Espacio hero, Givebutter swap, team page, legal pages + contact rebuild
- `Context/next-steps.md` — open checklists across the portal, multi-page build, Discord, strategy, and recent followups
- `Context/*.pdf` — source decks and reference documents
