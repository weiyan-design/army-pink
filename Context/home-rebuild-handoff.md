# Home-page rebuild — session handoff (2026-06)

Dated journal of the multi-session home-page redesign. Newest context at top.
Working branch: **`reconcile-local-main`** (NOT `main` — histories diverged; do not
merge to main without Wei's call). Dev server: `npm run dev` → **localhost:4321**
(4321 after a node_modules reinstall, not the usual 4324).

## Current state of the home page (`src/pages/index.astro`), top → bottom

1. **Sky hero** (`.sky-hero`, `#home`, `data-nav-theme="hero"`)
   - Full-bleed sky bg (`/img/sky-bg.jpg`) + two **parallax cloud cutouts**
     (`cloud-white.png` left, `cloud-warm.png` right) anchored to the video card's
     L/R edges; clouds tone-matched (CSS filters) + cloud-shaped grain.
   - Centered white mission statement + **glassy 16:9 video card** (click → existing
     sound-on modal via `[data-hero-thumb]`). Statement ~20% smaller, extra top
     space, video stage at 85%.
   - **Landing reveal** (staggered) + cloud cursor… no, scroll parallax via
     `updateHero`-style scroll handler. Sky **underlaps the nav** (negative
     margin = `--app-header-h`, synced globally in script.js).
2. **Survivor stories** (`.section-stories`, `#stories`) — moved directly beneath
   the hero, on **peach** bg (`--peach #f6e0d5`). Hero→peach is seamless: gradient
   veil fades hero bottom into peach + `-1px` overlap (a fog band was tried and
   removed). Quote restyled as a **taped paper note** (`#paperTear` SVG turbulence
   torn edges, masking-tape `::before` with clip-path torn ends, paper-fibre
   texture, **no shadow**). Section padding `12rem 0`.
3. **Programs** (`.programs`, `#support`) — "We're here for **every step**" with a
   **Survivors/Supporters pill toggle** (sliding pink indicator). 5-card asymmetric
   collage (wide 16:9 + narrow 4:3, point-symmetric: L top-aligned / R
   bottom-aligned, tall featured centre). Two overlaid sets **cross-fade on toggle**
   (simplest opacity crossfade — a width "morph" was tried, reverted). Mobile = snap
   carousel. Cards in `public/img/program-*`. Only featured cards (Calm
   Room→/wellness-portal, 200 Rides→/donate) are clickable; rest are "Coming Fall '26".
4. **Volunteer callout** (`.launch.launch--volunteers`, `#launch`) — split from the
   donate section. Cream `#fcf9ed` bg. 6 **floating volunteer avatars** at L/R edges
   (3+3), random non-leadership people from `team.js` each load, **radius 0.75rem**,
   sizes: top `6.25×6.875rem` (cover), mid `5rem`/auto, bottom `7.75rem`/auto,
   shadow `4px 12px 12px #00000017,1px 3px 7px #0000001a`. **Cursor parallax**
   (outer span = parallax via `data-depth`; inner `<img>` = reveal). `.launch__avatars`
   capped `max-width:1440px` centered. Intro is **vertically centred** in the callout
   (flex `justify-content:center`) — fixed the "top-aligned, empty space below" issue.
   "**100+ volunteers** already joined" counter (3 mini avatars, number is a
   placeholder — confirm real figure).
5. **Donate** (`.launch.launch--donate`) — landscape bg (`launch-movement-bg.jpg`,
   position center), `sun.png` behind the form, **car gif** top-right
   (`freedom-rides-car.gif` = cropped from `Freedom Rides GIF (1).gif` to drop the
   text, transparent, downscaled), `love.svg` bottom-left. Real **Givebutter inline
   widget** `<givebutter-widget id="jb2b4P">`. Scroll reveal; car slides in from
   right, love from left (delayed).
6. Then the existing Escape Club teaser, Partners, About, Stats.

## Shared component
- **"Become a volunteer" slide-up sheet** in `Layout.astro` (`.vform`): bottom sheet,
  name/email/message, **Netlify Forms** (`name="volunteer"`), AJAX submit. Opens from
  any `[data-volunteer-form]`. Wired on home + volunteers page (replaced its `#` CTA).

## Adaptive nav (Layout + styles + script)
- Solid bar → **floating glassy pill** (blur + grain, no box-shadow). States: `is-transparent`
  (top of a media hero), `is-light`, `is-dark` — chosen by the `data-nav-theme` of the
  section under the pill + scroll. Pill appears once scrolled (>24px). `navStart` Layout
  prop sets the flash-free initial state. Media heroes (`/wellness-portal`,
  `/get-involved`) underlap the nav via `.hero-bleed`.

## Key facts / gotchas
- **Figma file for THIS redesign: `GRKqdUqt9R6Qjri126Dj7y`** (different from the one in
  CLAUDE.md). Nodes used: programs survivor `382-403`, supporters `388-973`, donate/launch
  `388-938`.
- Givebutter script already loaded in Layout (`acct=yLfulzFp7eIMG8jn`) powers both the
  popup button (campaign `GHP0EF`) and the inline `<givebutter-widget id="jb2b4P">`.
- **astro dev/build hang gotcha**: multiple concurrent `astro` processes / node_modules
  corruption → both hang at "Building static entrypoints…". Recovery used:
  `pkill -9 -f astro && rm -rf node_modules package-lock.json .astro && npm install`
  (first build after is slow ~140s).
- Asset processing: `sips -Z` for stills; gif crop via
  `ffmpeg ... crop=...,scale=...,palettegen=reserve_transparent=1,paletteuse=alpha_threshold=128`.

## Open items / TODO for next session
- **Commit the uncommitted refinements** after commit `d321cae` (the launch split into
  two sections, avatar sizing/radius/shadow, `.launch__avatars` max-width, intro vertical
  centering). `package-lock.json` is also modified (from the reinstall) — decide whether
  to include.
- Netlify dashboard: route **"volunteer" form** notifications to `support@armypink.com`
  (Wei said .com; existing contact form uses .org — confirm which).
- Verify the **Givebutter `jb2b4P`** inline widget renders in a real browser.
- Confirm the **"100+ volunteers"** number.
- Tune the donate section **background crop** (currently `center`).
- Pre-existing unrelated drafts remain uncommitted (donate/partners/team .astro,
  calm-room.js, CLAUDE 2.md, OnePersonRide.astro, source `img/` files) — leave unless asked.
- `origin/main` has its own merge (#4) our branch lacks → diverged further; a PR
  `reconcile-local-main → main` is the way to consolidate when Wei decides.

## Commits this redesign (on reconcile-local-main)
- `96d270f` — sky hero, adaptive glassy nav, peach transition (hero/nav/stories/quote→mission)
- `d321cae` — Programs toggle section + "Launch the movement" + shared volunteer form
- (uncommitted) — launch split, avatar fine-tune, intro vertical centering
