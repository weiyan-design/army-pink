# Army Pink — Project Guide

A wellness portal for domestic-violence survivors, built with Army Pink in partnership with Vedanta (yoga/meditation studio). This file is auto-loaded into every conversation — keep it lean. Long-form context lives in `Context/`.

- **Live:** https://zingy-sherbet-559514.netlify.app
- **Repo:** `weiyan-design/army-pink` (private)

---

## Stack & commands

- **Astro 5** static site (`output: 'static'`, no adapter)
- `npm run dev` — dev server at `localhost:4324` (NOT 3003 — that's an old `npx serve` instruction for the html.to.design Figma plugin)
- `npm run build` — outputs to `dist/`
- `netlify deploy --prod` — reads `netlify.toml` (`npm run build` → `dist/`), publishes to production. **Deploys are MANUAL.** The site does **NOT** auto-build on push to `main` (verified 2026-06-24: latest production was a "Netlify Drop" on May 27; merging to `main` deploys nothing). CLI is authed (wei@weiyandesign.com) + linked to `zingy-sherbet-559514`. To go live after a merge: `npm run build && netlify deploy --prod`. (Reconnecting GitHub CI in Netlify → Build & deploy is a pending option Wei hasn't decided on.)
- `netlify deploy --dir=dist --alias review` — updates the **stable stakeholder review URL** https://review--zingy-sherbet-559514.netlify.app (shared with the team via Pastel). Plain draft deploys mint immutable one-off URLs — don't share those.

---

## File layout

- `src/pages/*.astro` — one file per route
- `src/layouts/Layout.astro` — shared shell: **sticky `.site-header` (crisis banner + nav, stays visible all the time, every page)**, footer, safe-exit, Givebutter trigger, Lenis init. `--header-h` (~7.5rem) approximates the banner+nav height used by other pages' heroes.
- `src/data/team.js` — single source of truth for 66 team members
- `src/_archive/` — files prefixed `_` aren't built by Astro (used for archived components like the old donate panel)
- `public/styles.css` — all site styles. The legacy root `styles.css` is dead, kept for reference only.
- `public/script.js` — all client JS (one IIFE)
- `public/img/`, `public/vid/` — optimized assets
- `Context/` — long-form notes, not required by the build

## Current pages

| Route | File | Notes |
|---|---|---|
| `/` | `index.astro` | Sky hero → survivor stories → **Programs for Survivors** (`.psg`: pinned arch w/ `calm-room-cover.mp4` + frosted-glass "Calm Room" label, "in the making" coverflow reusing `.fc-*`) → **200 Rides to Freedom** (`.ways`: mirror of `.psg` — title + scroll-driven car/tracker under it, centre-pinned impact video, "Other Ways to Give" cards, contact modal) → launch (volunteers w/ avatar organic-blobs + donate cloud-meadow) → partners. **Stats + "Our Mission" were moved off home → `/mission`.** |
| `/mission` | `mission.astro` | Story, "What We Stand For" values, **+ Stats and "Our Mission" moved here from home** (under WWSF — ⚠️ duplicates the WWSF heading/values, dedupe pending), link to /team |
| `/team` | `team.astro` | Leadership only — editorial rows + fullscreen founder quote (7 people via `leadershipSlugs`) |
| `/volunteers` | `volunteers.astro` | Blush hero card w/ blended butterfly loop; category chips; 3-col hover-flip cards (everyone not in `leadershipSlugs`) |
| `/donate` | `donate.astro` | Figma rebuild: "Safe exit is a right" hero vid (fullscreen→70svh), sticky Freedom Rides vids, rides-funded tracker. `/escape-club` + `/give` 301 here |
| `/community` | `community.astro` | "Activate Your Community" placeholder |
| `/wellness-portal` | `wellness-portal.astro` | Calm Room — tabbed Netflix-style video shelves (nav label "Calm Room") |
| `/wellness-portal/calm-room`, `/library`, `/wellness-experiences` | nested under `src/pages/wellness-portal/` | Sub-pages; each is 12 lines importing `WellnessSubpageShared.astro` with per-room props |
| `/partners` | `partners.astro` | Still Mountain (Vedanta) featured; reachable only via Get Involved dropdown |
| `/privacy`, `/sms-terms`, `/disclaimer`, `/contact`, `/faq` | legal pages | |

Top nav: Home · Mission · Calm Room · Get Involved (dropdown: Donate / Partner / Volunteer / Activate your community) · Leadership.

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
- **Home hero is a pinned "stage" (`.hero-stage`, 200svh).** Inside, `.hero-stage__pin` is `position: sticky` and the whole transition is one scroll-progress `p` (0→1 over the extra 100svh), driven by `updateHero()` in `script.js`. As `p` rises: the `.hero-scrub` video shrinks from fullscreen to a 16:9 thumbnail anchored ~15% below the header (`dockTop = hH + 0.15*vh`); `.hero-stage__mission` translates up from the bottom and its chars de-blur (reveal keyed to the statement's live top vs the viewport, fully clear by ~50%/dock). Tuning levers: `dockTop`, docked width `Wf = min(vw*0.4, 520)`, reveal mapping. The video element is one node (no double-decode); clicking it opens the `#heroVideoModal` popup (full video + sound). **Earlier dead-ends to avoid:** a fixed-overlay + empty "runway" spacer left big white space and made the video chase a far slot — the pinned stage is what makes video+statement converge in place.
- **Crisis banner must always be visible.** It lives in the sticky `.site-header` and must never be covered (it's a DV-safety feature). The fullscreen hero video sits *below* the header (z-index). If you add fixed/overlay heroes elsewhere, keep them under the header.
- **Partner section is two marquees.** Row 1 (`partners`) = org partners + Safe Nest, scrolls right→left. Row 2 (`techPartners`) = full-color tool logos (Salesforce/Slack/Google/Microsoft/YouTube/Lyft/Monday.com/Canva), scrolls left→right via `.partner-track--reverse` (`animation-direction: reverse`). Logo tiles use `.partner-tile--logo` (contain, not cover); `--multiply` for white-bg JPGs, `--color` keeps tool logos in color. Color logos were sourced from **Wikimedia/Wikipedia `Special:FilePath`** (Clearbit logo API is network-blocked in this env; simple-icons CDN is monochrome only).
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

- **Branch state (updated 2026-06-24).** Working branch is **`reconcile-local-main`** (kept, not deleted). It was **merged to `main` via PR #5** (`ec9641b`); the old "24 commits ahead" divergence is resolved (branches split at `72f9cec` June 18; `main` only had merge commits from PRs #2/#3/#4, no conflicting content). **Local `main` is stale** (behind `origin/main`) — pull before touching it; keep working on `reconcile-local-main` and PR into `main`. Remember: merging does NOT deploy (manual `netlify deploy --prod`, see Stack section).
- **Session 2026-06-24 (home rebuild cont'd).** Built the **200 Rides to Freedom** (`.ways`) section; extracted global text components **`.section-title` / `.section-text`** (+ existing `.pill-label` / `.btn-primary` / `.reveal-item`) and a fluid **`--gutter`**; volunteer-avatar organic blobs (color block + line, rotate on cursor); shared **contact modal** (`[data-contact-overlay]` in `Layout.astro`, Netlify form `get-involved`, **centred pop-in** vs the volunteer form's slide-up). Dev tuners added: `public/prototype-calm-room.html` (frosted-blend) + a volunteer-tear tuner — **these ship publicly in `dist/`** (like `prototype-doors.html`). **⚠️ Concurrent-edit hazard hit again:** Wei edited `styles.css`/`index.astro` in a parallel session (cloud-meadow rebuild + flower) while Claude edited the same files → `styles.css` "flipped" between versions repeatedly and uncommitted CSS was transiently lost/restored. Lesson: don't edit the same files simultaneously; commit often.
- **200 Rides / contact-form followups.** (1) `get-involved` Netlify form needs its notification recipient set in the dashboard — to `support@armypink` (**confirm `.org` vs `.com`**: Wei said `.com`, the rest of the site uses `.org`). (2) "Fund 200 Rides" / "Join" / give-list "Contact Us" have **no real destinations** yet (placeholders / popups). (3) `.ways` centred-pin video has **limited travel** (`give-impact-loop.mp4` is a tall 9:16, 750×1334 — nearly as tall as the column beside it). (4) `.ways` car rides the tracker via `--car-x` (scroll progress) × `--car-max` (funded %). (5) De-dupe "Our Mission" vs "What We Stand For" on `/mission`.
- **Donate page followups.** (1) Rides-funded tracker shows hardcoded 102/200 — wire the Givebutter API via a Netlify Function (`GIVEBUTTER_API_KEY` env var, `rides = floor(raised/50)`, hook is `tracker.setRides(n)` in `donate.astro`; refresh on load + donate-popup close). (2) Both CTAs open the donate popup — confirm destinations/preset amounts. (3) Flow-diagram label positions are hand-placed percentages — may need nudging.
- **"Bring Army Pink to your community" section** (under Fund 200 Rides) scoped but NOT built: 4 cards — Fundraise for us / Start a campus chapter / Host an event / Golden Ticket — Calm Room card styling, interactive carousel, `#` links, titles only.
- **Volunteers page.** "Become a Volunteer" CTA is `href="#"` — needs a destination. Unused: `public/img/volunteer-hero-sun.png` (sun.ai concept, replaced by blush card) is untracked.
- **Home `story-4.png` missing.** 4th survivor-stories card references `/img/story-4.png` which doesn't exist yet — broken image until Wei provides it.
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
