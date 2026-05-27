# Army Pink — Build History

Dated session journals. The code itself is the authoritative source — these notes capture the *why* and non-obvious gotchas that aren't recoverable from `git log`. Active conventions and gotchas live in `CLAUDE.md`.

---

## Landing Page v1.0 (Built 2026-03-20 through 2026-03-22)

Original version with Journey/Safety/Wellness/Community sections. Committed as `army_pink_checkin_1.0`.

---

## Landing Page v2.0 (Redesigned 2026-03-31)

Major redesign replacing Journey, Safety, Wellness, and Community sections with new Figma-based layout. Committed as `army_pink_checkin_2.0`. Pushed to GitHub: `weiyan-design/army-pink` (private repo).

**Files:**
- `index.html` — page structure and content
- `styles.css` — all styling (mobile-first, responsive)
- `script.js` — mobile menu, breathing exercise, scroll reveals, overlay system, carousel scrolling, drag/swipe, story deck animation, daisy rotation
- `img/` — optimized images (hero, thumb cards, featured cards, story portraits, flower, sun)
- `vid/` — hero videos (`hero-vid-2-opt.mp4` is the active one, 2.1MB optimized from 15MB original)

**Current page structure (top to bottom):**

1. **Crisis banner** — always visible at top, DV hotline number + text line + thehotline.org link
2. **Nav** — sticky, height 65px, logo left, links right (Pathway to Freedom, Survivor Stories, Team, Our Mission, Partnership), Donate button
3. **Hero** — looping video background (`hero-vid-2-opt.mp4`), glassmorphism card with headline + subtext + two CTAs, S-wave bottom edge
4. **Daisy flower** — smiley daisy (`img/flower-4.png`) centered below hero wave, rotates 180deg clockwise on scroll
5. **Empowering Series** — two-column grid (45% image / 1fr text). Left: arch image (300px 300px 0 0 border-radius) with wavy bottom SVG mask. Right: pill label, heading, description, horizontally scrollable thumb cards (55% width, 1:1 ratio). Cards link to doyogawithme.com
6. **Featured Classes** — horizontally scrollable row of 5 portrait cards (3/4 ratio, 1rem border-radius). Pill labels positioned top-left. Cards: Yoga Nidra, Ease into Sleep, Box Breathing, Kids Meditation, Kids Yoga. All link to doyogawithme.com in new tabs
7. **Wellness Programs** — same empowering-grid layout but reversed (text left, arch image right). Uses `empowering-grid-reversed` class (column-reverse on mobile). Thumb cards: Mindful about Menopause, Let Go of Anxiety. Links to doyogawithme courses
8. **Survivor Stories** — yellow background (#FDD36A), two-column grid (text left 38%, deck right). Card deck with fan-out animation triggered at viewport center. 3 story cards (story-1/2/3.png) with poker-hand spread. Quote box (450px, glassmorphism) overlays cards from below with z-index 5 and -60px margin-top. Left/right chevron arrows flank the quote box. Deck centered via flexbox. "Share your story" CTA. No negative margin-top on mobile
9. **Mission section** — unchanged from v1 ("We don't sell healing. We connect you to it." + 3 values)
10. **Footer** — unchanged from v1

**Support section removed** — donate functionality now lives in slide-up panel triggered by nav Donate button.

**Slide-up panels:**
- **Class panel** — HTML/CSS/JS still in codebase but currently unused. All thumb-cards and featured-cards are now `<a>` tags linking directly to doyogawithme.com in new tabs. Panel code kept for potential future use.
- **Donate panel** — triggered by nav Donate button (`data-donate-panel`). Pink-pale background. Header: love.svg centered, star.svg decorations, rock.svg hand (slides up from -70px to -40px with 0.2s delay), butterfly.svg. 3 selectable radio tier cards (Friend $10, Escape Club $50 pre-selected, Champion $100+). Selected tier gets pink border. Cancel + Continue buttons. Tax-deductible note at bottom. SVG assets: `img/butterfly.svg`, `img/love.svg`, `img/rock.svg`, `img/star.svg`.

**All card links are direct `<a>` tags** — thumb-cards and featured-cards link directly to doyogawithme.com in new tabs (not slide-up panels).

**Overlay system (kept from v1, not currently triggered from main page):**
- Phase 1/2/3 journey overlays still in HTML for future use
- Wellness overlays (Breathing, Yoga, Sleep) still in HTML for future use
- Overlay JS (open/close/escape) still functional

**Interactions & animations:**
- **Scroll reveal** — elements with `.reveal-item` class fade up when entering top 1/3 of viewport (`rootMargin: 0px 0px -33% 0px`)
- **Hero scroll animation** — `updateHeroScroll()` in `script.js`. Drives video scale (1→0.5) and border-radius (0→20px) based on scroll progress within `hero-scroll-wrap`. Mute button tracks top-right corner of scaled video via `(vh*(1-scale)/2 + 12, vw*(1-scale)/2 + 12)`.
- **Statement wipe reveal** — `updateStatement()` in `script.js`. Words split into `<span class="statement-word">` on load. Opacity 0.12→1 staggered top-to-bottom based on scroll progress within `statement-scroll-wrap`. `wipeWindow = 0.18`.
- **Card deck fan** — IntersectionObserver triggers fan-out when stories section hits middle viewport. Active card at left with -8deg rotation, others spread right with increasing rotation. Click to select, left/right arrows to cycle
- **Drag/swipe** — all `.thumb-row` and `.featured-grid` elements support mouse drag (with momentum) and touch swipe. Prevents accidental link clicks during drag. Grab/grabbing cursors
- **Scroll fade edges** — thumb-row-wrap and featured-wrap show gradient fade + arrow buttons when content overflows
- **Hover** — all thumb-cards and featured-cards scale to 1.1 with 300ms ease-out

**Card styling:**
- Thumb cards: 55% width, 1:1 aspect ratio, 0.5rem border-radius, gradient overlay (no blur) for text
- Featured cards: 30% flex basis (min 240px), 3/4 aspect ratio, 1rem border-radius, pill label at top-left with frosted glass effect
- Both: hover scale 1.1 with 300ms ease-out

**Image optimization:**
- All images in `img/` resized with `sips` (heroes to 1200px, featured to 800px, thumbs to 600px)
- Total img folder ~1MB (down from 31MB originals)
- Hero video optimized with ffmpeg: 15MB to 2.1MB (libx264, crf 23, 1920px, no audio, faststart)

**Design decisions (2026-03-31):**
- Hero changed from static Unsplash image to looping video background
- Old sections (Journey, Safety, Wellness, Community) replaced with Empowering Series, Featured Classes, Wellness Programs
- Arch images use 300px 300px 0 0 border-radius with wavy SVG bottom mask
- Survivor Stories section added with card deck animation, yellow (#FDD36A) background
- Nav items changed to: Pathway to Freedom, Survivor Stories, Team, Our Mission, Partnership
- Pill labels used instead of overline text for section headers
- Thumb overlay changed from blur to solid gradient
- Wellness Programs uses reversed grid (image right on desktop, image top on mobile via column-reverse)
- Stories section mobile: no negative margin-top (was -200px, removed to fix overlap)
- Attempted but reverted: scroll-driven SVG stroke line (multiple attempts with GSAP ScrollTrigger + feTurbulence brush filter — z-index issues with section backgrounds), daisy following user eye across sections, sun.png overlay on stories section, class slide-up panels (built then reverted to direct links)

---

## Landing Page v3.0 + Astro Migration (2026-05-18)

**Nav updates:**
- Links changed to: Home, Mission, Escape Club, Wellness Portal, Partners (Team removed)
- Logo replaced: text "Army Pink" → `img/AP_Logo.png` (18px height, width auto, aspect-ratio locked to original 1475×170)
- Nav height increased from 65px to 80px
- Footer also uses logo image (18px, no background wrapper needed if PNG has transparency — currently shows as-is)

**Footer rebuilt (5-column grid):**
- **Brand column:** AP logo + tagline + social icons (Instagram, Pinterest, YouTube, LinkedIn) as circular icon buttons, pink on hover
- **Resources:** DV Hotline 1-800-799-7233, thehotline.org, Safety Planning, Crisis Text Line
- **About:** mirrors nav links (Home, Mission, Escape Club, Wellness Portal, Partners, Team)
- **Connect:** Volunteer, Perks, FAQ, Contact Us
- **Legal:** Privacy, SMS Terms & Conditions, Disclaimer
- Mobile: brand spans full width, link columns go 2-up grid

**Safe Exit button:**
- Fixed bottom-right corner on both desktop and mobile (moved from top-right after it covered Donate button at some breakpoints)
- Desktop: red pill button (`#c62828`) with exit-door SVG + "Quick Exit" text, tooltip "Press ESC to exit" to its left
- Mobile: red circular FAB (54px), tooltip fades in on hover/focus
- Click → `window.location.replace('https://www.google.com')` — replaces history entry so back button skips Army Pink
- ESC key → same redirect, but only when NO overlay or panel is currently active (panels still close normally with ESC)
- JS: `safeExit()` function at top of `script.js` IIFE; button listener on `#safeExitBtn`

**Crisis banner:**
- Added: "Remember to **clear your browser history** when finished." at end of banner text

**Astro migration (2026-05-18):**
- Migrated from single flat HTML to Astro 5 static site generator
- `src/layouts/Layout.astro` — shared template rendered on every page: `<head>`, crisis banner, safe exit, nav, footer, donate panel, script tags
- `src/pages/index.astro` — wellness portal content (imports Layout, passes `title` prop)
- `public/` — static assets served as-is: `styles.css`, `script.js`, `img/`, `vid/`
- `astro.config.mjs` — `output: 'static'`, no adapter needed
- `netlify.toml` — `command = "npm run build"`, `publish = "dist"` — Netlify now auto-builds
- Old root `index.html`, `styles.css`, `script.js` kept as backup (not served, Netlify uses `dist/`)

**Deployment:**
- **Netlify:** Live at `https://zingy-sherbet-559514.netlify.app`
- Deploy command: `netlify deploy --prod` (reads `netlify.toml`, builds and deploys `dist/`)
- Netlify CLI installed globally. `netlify.toml` at project root.
- **GitHub:** Repo `weiyan-design/army-pink` (private). GitHub Pages not available on free plan for private repos.

**Git tags:**
- `army_pink_checkin_1.0` — original baseline (2026-03-20)
- `army_pink_checkin_2.0` — redesign with new sections (2026-03-31)
- Always commit before major changes to enable safe reverts

---

## Multi-page Build (2026-05-19)

**Three inner pages built** using the wellness portal's design system as the visual foundation. All pages use `Layout.astro` (nav, footer, crisis banner, safe exit auto-included). Content drafted from research findings — placeholder copy where real content is needed (team bios, Discord link, partner logos).

**`/mission` (`src/pages/mission.astro`):**
- Page hero with mission statement
- Impact stats bar: 7× average escapes, #1 unmet need, $0 cost to survivors
- Origin story — 2-col prose grid (text + arch image)
- 4 values section (reuses `.mission-values` pattern from index)
- Team grid — 4 placeholder cards (Wei Yan as Founder, 3 role placeholders)
- CTA → Donate panel + Escape Club link

**`/escape-club` (`src/pages/escape-club.astro`):**
- Page hero
- "What is the Escape Club" — prose grid with community description
- 4 membership tier cards (Survivor free, Friend $10, Escape Club $50 featured, Champion $100+)
- 3-step join flow (guided airlock onboarding explained simply)
- CTA → Discord join (placeholder `#`) + Friend tier donate

**`/partners` (`src/pages/partners.astro`):**
- Page hero
- PBS/NPR philosophy quote block
- 2-col prose: "Survivor spaces stay sacred" + "Impact-centered attribution"
- Vedanta featured partner card (arch image + description + "co-creating Pathway to Wellness" framing)
- Do Yoga With Me as technology partner + 2 "coming soon" dashed placeholder cards
- 4 partnership model cards (Subsidized Access, Embedded Content, Co-Created Program, Corporate Sponsorship)
- CTA → mailto:wei@weiyandesign.com + Mission link

**New CSS components added to `public/styles.css`:**
- `.page-hero` — inner page header (pink-pale → beige gradient, centered, pill + h1 + p + actions)
- `.prose-grid` / `.prose-grid-reversed` — 2-col text+image layout with arch image (same pattern as empowering sections)
- `.stat-row` / `.stat-item` / `.stat-number` — impact statistics display
- `.team-grid` / `.team-card` / `.team-avatar` — team member cards with initial avatar placeholder
- `.tier-grid` / `.tier-card` / `.tier-featured` / `.tier-badge` — membership tier cards
- `.steps-list` / `.step` / `.step-number` — numbered how-to-join steps
- `.partner-featured-card` / `.partner-grid` / `.partner-card` — partner display components
- `.philosophy-block` — left-bordered pull quote block
- `.cta-section` / `.cta-actions` — full-width CTA banner (pink-pale background)
- All new components are responsive (stack to 1-col on mobile)

**Git:** Committed as `ca7a4a7` — "Add Mission, Escape Club, and Partners pages". Pushed to `weiyan-design/army-pink`.

---

## Home Page Redesign + Statement Section (2026-05-21)

**Wellness Portal page created:**
- `src/pages/wellness-portal.astro` — exact copy of `index.astro` content, title "Wellness Portal — Army Pink". Committed in `f7074d2`.

**Hero rebuilt (immersive sticky scroll):**
- Hero video changed to `vid/Home_Hero_Vid.mp4`
- Removed: hero-glass card (h1 + subtext + CTAs), wave SVG, flower/daisy div
- Wrapped in `<div class="hero-scroll-wrap">` (height: 200vh) — same sticky scroll pattern as hero gives 100vh of scroll space to drive the animation
- `.hero` → `position: sticky; top: 0; height: 100vh; background: var(--cream); overflow: hidden`
- `.hero-video-wrap` — `position: absolute; inset: 0; transform-origin: center center; will-change: transform, border-radius; overflow: hidden`
- `updateHeroScroll()` in `script.js`: drives `transform: scale(1→0.5)` and `border-radius (0→20px)` on `.hero-video-wrap` based on `scrollY / (wrapHeight - vh)`
- **Mute/unmute button** (`#heroMuteBtn`): circular frosted button, muted by default (`is-muted` class), SVG icons swap on toggle. Tracks video's top-right corner: `top = (vh*(1-scale)/2 + 12)px`, `right = (vw*(1-scale)/2 + 12)px` — updates every scroll frame in `updateHeroScroll()`

**Statement section (between hero and empowering series):**
- New CSS token: `--dark-grey: #686565` added to `:root` (alongside existing `--cream: #fdfbf7`)
- Wrapped in `<div class="statement-scroll-wrap">` (height: 200vh) — sticky scroll pattern, 100vh scroll space
- `section-statement` → `position: sticky; top: 0; height: 100vh; display: flex; align-items: center; justify-content: center`
- Copy: "Providing safe, reliable transportation to help survivors escape domestic violence and begin their path to freedom."
- Font: Playfair Display, `clamp(1.75rem, 4vw, 3.25rem)` fluid scaling, `letter-spacing: -0.028em` (tight editorial tracking), `color: var(--dark-grey)`, `max-width: 960px`, centered
- **Word-by-word wipe reveal** (`updateStatement()` in `script.js`):
  - On load, text split into `<span class="statement-word">` elements (`.textContent.split(/\s+/)`)
  - All words start at `opacity: 0.12`, `transition: opacity 0.12s ease`
  - Progress = `(scrollY - wrapTop) / (wrapHeight - vh)` — 0→1 as user scrolls through wrapper
  - Each word `i` of `total` has `start = (i/total) * (1 - 0.18)`. `wordProg = clamp((progress - start) / 0.18, 0, 1)`. `opacity = 0.12 + 0.88 * wordProg`
  - Effect: top words light up first, followed progressively by words below — top-to-bottom wipe
- **Scroll behavior**: both hero and statement use tall scroll wrappers with sticky children — scroll is "consumed" by the wrapper while section stays locked, giving a pinned/magnetic feel with no JS scroll hijacking

**Page structure (top to bottom) as of 2026-05-21:**
1. `hero-scroll-wrap` (200vh) → sticky hero with video scale animation
2. `statement-scroll-wrap` (200vh) → sticky statement with word wipe reveal
3. Empowering Series
4. Featured Classes
5. Wellness Programs
6. Survivor Stories
7. Mission section
8. Overlays + class slide-up panel (kept, not triggered from main page)

**Git:** Committed as `f7074d2` (wellness portal + hero). Statement work uncommitted at session end.

---

## Hero Scroll Rebuild (2026-05-22)

**What was built:** replaced the immersive scale-down video with a new scroll-driven sequence — video shrinks to a 9:16 portrait card (phone shape) in the center of the viewport while 4 images slide in from either side.

**Hero scroll animation (final state):**

- `hero-scroll-wrap` remains 200vh tall (sticky pattern, same as before)
- Video transitions from `100vw × 100vh` fullscreen → `4-column × 9:16 portrait` centered in a 1120px container
- JS animates `left`, `top`, `width`, `height`, `border-radius` on `.hero-video-wrap` (NOT `scale()`) so video becomes a true portrait rectangle, not a scaled-down 16:9 box
- Height capped at `94vh` on wide screens: `endH = Math.min(endW * 16/9, vh * 0.94)`, with `object-fit: cover` filling the container regardless

**12-column grid:**
- Container: `heroW = Math.min(vw, 1120)`, `heroOff = (vw - heroW) / 2`, `colW = heroW / 12`
- **Video:** cols 5–8 → `endLeft = heroOff + 4*colW`, `endW = 4*colW`
- **TL:** 16:9, cols 1–4 → `left = heroOff + spaceMd`, right edge = `endLeft − 20px`
- **BL:** 4:3, cols 2–4 → `left = heroOff + colW`, right edge = `endLeft − 20px`
- **TR:** 4:3, cols 8–11 → `left = endLeft + endW + 20px`, `width = 3*colW − 20px`
- **BR:** 4:3, cols 9–12 → `left = endLeft + endW + 20px`, `width = 4*colW − spaceMd − 20px`

**Gap rule (20px everywhere):**
- All image positions computed in JS (not CSS), derived from actual `endLeft` and `endW`
- `leftImgRight = endLeft − 20`, `rightImgLeft = endLeft + endW + 20`
- `Math.max(0, ...)` prevents negative widths at very narrow breakpoints
- Resize listener added (`window.addEventListener('resize', updateHeroScroll)`) so positions recalculate on viewport change without scroll

**Side image slide-in:**
- Images hidden (`opacity: 0`) until scroll `progress > 0.4` (video ~80% to portrait by then)
- Stagger delays: TL=0, TR=+0.04, BL=+0.07, BR=+0.10 (within 0.40–1.0 range)
- `translateX` from `±65vw` to `0`, eased with `easeOutCubic`
- Left images: `dist = −vw * 0.65`; right images: `dist = +vw * 0.65`
- Hidden on mobile (`≤768px`) via `display: none` — not enough room beside portrait video

**Unsplash images (freedom/escape vibe):**
- TL (16:9): `photo-1506905925346-21bda4d32df4` — Swiss Alps mountains
- BL (4:3): `photo-1441974231531-c6227db76b6e` — sunlit forest path
- TR (4:3): `photo-1469854523086-cc02fe5d8800` — mountain road
- BR (4:3): `photo-1476041800959-2f6bb412c8ce` — winding forest road

**What was attempted and reverted:**
- Atmospheric CSS gradient background (deep reddish-orange → golden-orange, diagonal bands, canvas grain) — built and reverted in favor of returning to the video hero

**Z-index stack in hero:**
- `.hero-video-wrap`: `z-index: 2` (sits on top of any image overlap)
- `.hero-side-img`: `z-index: 1`
- `.hero-mute-btn`: `z-index: 3`

**Architecture note (important):**
- Image `left` and `width` are owned entirely by JS — CSS for `.hero-side-img--*` only sets `aspect-ratio` and `top`
- This is intentional: CSS and JS computing the same layout independently leads to rounding divergence at certain breakpoints. Single source of truth = JS.

---

## Wellness Portal Coverflow Hero + Global Grain (2026-05-24)

**Replaced the wellness portal video hero with a 3-door coverflow carousel** at `src/pages/wellness-portal.astro`. The previous hero (video + glass card + flower) is gone; sections below it (Empowering Series, Featured Classes, Wellness Programs, Survivor Stories, About) remain intact.

**Hero architecture:**
- `.wp-hub-scroll-wrap` (400vh tall, position: relative) wraps a sticky `.wp-hub` (100vh).
- Inside `.wp-hub`: a `<canvas>` backdrop (drifting cream-on-cream lights), `.wp-stage` containing 3 absolute-positioned `.wp-arch` elements (the doors), `.wp-info-stack` with 3 stacked `.wp-info` blocks (only active one fades in), and a fixed `.wp-dot-rail` on the right with a 1/3 counter.
- All carousel-internal classes use the `wp-` prefix so they don't collide with site-wide styles.
- The 3 doors map to: Calm Room, Pathway to Freedom Library, Wellness Experiences. CTAs are placeholder `<a href="#">` with preventDefault — wire to real routes when sub-pages exist.

**Arch sizing — JS height budget + width cap:**
- Two constraints, smaller wins (continuous, no media-query mode switch):
  - Height budget: `stageH × 0.92` (fill ratio; drives wide screens)
  - Width cap: `stageW × 0.6 / 0.8` (center arch never exceeds 60vw — keeps side arches visibly peeking on portrait viewports)
- JS sets BOTH `--wp-arch-h` and `--wp-arch-w` CSS vars explicitly. Don't add `width: Xvw` overrides in mobile media queries — they fight the JS sizing and produce square elements that crop the dome/wave via `preserveAspectRatio="slice"`.

**Wave path generator (`buildArchPath()`):**
- Generates an SVG path: rounded dome (semicircle) + vertical sides + wavy bottom (60 sample points along `sin(...)`).
- `topPad: 2`, `bottomPad: 8` — arch fills ~98% of viewBox vertically. Earlier `bottomPad: 30` left a fat empty band that read as "the arch is cut short."
- Active door's wave breathes: `liveAmp = amplitude + sin(breathT) × breathAmp` updated every rAF frame. Inactive doors hold a static wave with a phase offset per door.
- Wave amplitude must exceed breath amp, otherwise `liveAmp` can dip to 0 and the wave looks flat at certain moments.

**Carousel rotation:**
- `cycle = scrollProgress × 2` (0 → 2 traverses all three center positions).
- Each door's `slot = wrapSlot(i - cycle)` mapped into `[-1.5, 1.5]`. Off-screen wrapping is invisible because opacity hits 0 at the wrap edge.
- Active door = `Math.round(cycle) % 3`. When active changes, prev door's wave freezes to its static phase, new door's wave comes alive.
- Side arches scale 0.59, tilt 5° on Y (subtle 3D), translate ±46vw from center.

**Cream-on-cream drifting lights canvas:**
- Two radial gradients drawn each scroll frame; one drifts upper-left → lower-right, the other in the opposite direction as scrollProgress 0 → 1.
- Light colors: `rgba(255, 252, 244, ...)` and `rgba(248, 244, 232, ...)` — barely-perceptible luminance shifts on the cream background.

**Locked production values** (no tuner in production; defaults baked into `cfg` in the inline `<script is:inline>`):
- Wave: amplitude 5, frequency 2.1, speed 0.017, breath amp 2.5, breath cycle 5s
- Carousel: fill ratio 92%, spread 46vw, tilt 5°, side scale 0.59
- Backdrop: light intensity 0.55, light size 0.6 (grain handled globally — see below)

**Z-index plan inside `.wp-hub`:**
- `.wp-hub-bg-canvas`: 0 (drifting lights)
- `.wp-stage` + `.wp-info-stack`: 2 (arches + text)
- `.wp-dot-rail`: 5 (navigation)
- Above all: global grain (z-index 50), then nav/donate/safe-exit/crisis banner (1000+).

**`overflow: hidden` placement matters:**
- `.wp-hub` has `overflow: hidden` — needed so side arches translated off-screen don't create horizontal scrollbars.
- `.wp-stage` does NOT have `overflow: hidden` — putting it there chops the dome and wave when arch sizing is off by even 1px. (We discovered this the hard way during the rebuild.)

**Global film grain — every page** (`public/styles.css`, lines 62–79):
- `body::before` with inline SVG `feTurbulence` noise tile (240×240, baseFrequency 0.85).
- `position: fixed; inset: 0; z-index: 50; opacity: 0.3; mix-blend-mode: multiply; pointer-events: none`.
- z-index 50 puts grain over page content but under nav (1100+), donate panel (1100+), safe-exit (9000), crisis banner (1000), so UI chrome stays crisp.
- Hidden in `@media print`.
- The wellness portal hero does NOT include its own section grain — global grain handles all pages uniformly. (Stacking two grain layers via multiply blend goes too dark.)

**Known followups for the wellness portal:**
- CTAs are placeholders; wire to `/calm-room`, `/library`, `/wellness-experiences` once those sub-pages exist.
- Photos are Unsplash placeholders; swap for Army Pink-curated photography.
- Below-fold content currently keeps the old wellness-portal sections (Empowering Series, etc.). The agreed plan was to replace these with an at-a-glance preview grid + 28-Day Journey card + Escape Club nudge — that's the next big content task.
- Mobile gesture layer: currently the same vertical-scroll carousel as desktop. Discussed adding horizontal swipe; not implemented.
- `prefers-reduced-motion: reduce` fallback: not implemented. Should disable carousel rotation and breathing wave, show all 3 doors static.

**Prototype file kept:** `public/prototype-doors.html` is the full tuner version (12 sliders) we used to dial in the locked values. Still served by the dev server at `/prototype-doors.html`. Useful for re-tuning. The same prototype, intact, is also saved in the design pattern library.

**Extracted to design pattern library:**
- This work produced two reusable patterns saved in Wei's design library at `~/Documents/Vibe Code/_design-library/`:
  - `coverflow-doors-tuner` — the carousel + tuner prototype (status: experiment)
  - `grain-texture` — the global film grain (status: production)
- Live demos: https://weiyan-design.github.io/design-patterns/
- See that repo's README for the bouncer rule, template, and `add-design-pattern` skill.

---

## Session: Wellness Portal Hero Triage (2026-05-25)

**Discrepancy noted:** Despite the 2026-05-24 entry above describing a coverflow hero on the wellness portal, `src/pages/wellness-portal.astro` currently has the OLD hero structure — `<header class="hero">` with `<video class="hero-video">`, `<svg class="hero-wave">`, and `<div class="hero-flower-wrap">` containing `flower-4.png`. Either the coverflow work was reverted, lives in an unmerged worktree, or never made it into `src/pages/`. Worth investigating before doing more wellness-portal work — don't assume the coverflow is live.

**Reported issue:** User said the wellness portal hero is "messed up" at `localhost:4324/wellness-portal` — wave and flower misplaced. Suspected that recent home-page work (Lightship-style `c-hero-home` in `index.astro`) may have stripped CSS rules the wellness portal still depends on.

**Investigation:**
1. Confirmed Astro dev server runs on port 4324 (not 3003 as the older `npx serve` instruction suggested).
2. Compared `index.astro` (uses new `c-hero-home`) vs `wellness-portal.astro` (still uses old `.hero` with wave + flower).
3. Initial `grep` on `public/styles.css` appeared to show `.hero-wave`, `.hero-flower-wrap`, `.hero-video`, `.hero-glass` rules were missing — only `.hero {}` inside a mobile media query and `.hero-mute-btn` (which belongs to the new home hero) showed up.
4. Located the original rules in the legacy root-level `styles.css` (lines 308–404, the pre-Astro flat file) and copied them into `public/styles.css` before `.hero-actions`.
5. After the edit, `git diff public/styles.css` showed **nothing changed** — meaning the rules were already committed in `public/styles.css` (lines 400–474 under `/* --- Wellness Portal Hero --- */`). The initial grep was misleading; the rules existed all along.

**Conclusion:** The hero CSS isn't missing. Whatever's actually breaking the wellness portal hero is something else (possibly: the coverflow vs. old-hero mismatch above, nav/crisis-banner stacking pushing layout, global grain interaction, or sticky-nav offset). **Did not diagnose root cause** — next session should reload `localhost:4324/wellness-portal`, open DevTools, and inspect the actual computed styles on `.hero-wave` / `.hero-flower` to see what's really off.

---

## Espacio-style Hero + Char-Blur Statement + Givebutter Wiring (2026-05-23 → 2026-05-25)

Reference site studied: **espaciolanube.com** — Vite SPA built with Lenis + SplitType. Their hero is a fullscreen `<video>` in a 100svh box; the section after rises with rounded top corners (the "curtain"); per-char blur sharpens as you scroll through a 200lvh sticky text section. We replicated all three on Army Pink's home page.

**Home hero — fullscreen sticky video** (`src/pages/index.astro`, `public/styles.css`)
- Replaced the empty `.home-hero-shell` placeholder with `<section class="home-hero">` containing `<video class="home-hero-video">` and a centered click-to-toggle overlay.
- `.home-hero { position: sticky; top: 0; height: 100svh; overflow: clip; background: var(--cream); z-index: 0; cursor: pointer; }`
- Video: `position: absolute; inset: 0; object-fit: cover` with `autoplay muted loop playsinline` — muted is required for browser autoplay.
- Reuses `public/vid/Home_Hero_Vid.mp4`.

**Curtain mask-up** — the Statement section rises over the pinned hero.
- `.statement-scroll-wrap { height: 200vh; position: relative; z-index: 1; margin-top: -2.4rem; background: var(--cream); border-top-left-radius: 2.4rem; border-top-right-radius: 2.4rem; overflow: clip; }` — z-index 1 lifts it above the hero (z-index 0), the rounded top + slight negative margin produce the rising-curtain look.
- `.section-statement { position: sticky; top: 0; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; }` — pinned during the second viewport of the wrapper, giving 100vh of scroll room for the reveal.

**Char-blur reveal** (`updateStatement()` in `public/script.js`)
- Each character wrapped in `<span class="statement-char">` with `display: inline-block; filter: blur(var(--blur, 8px));`. Filter requires inline-block (won't apply to plain inline).
- **Critical fix to avoid mid-word breaks** (e.g., "help" splitting into "h/elp"): chars are grouped inside per-word wrappers `<span class="statement-word">` with `display: inline-block; white-space: nowrap;`. Inline-block chars without a word wrapper are atomic boxes the line-breaker can split between.
- Spaces use `<span class="statement-space"> </span>` with `display: inline-block; width: 0.28em`.
- Scroll math: `progress = -wrapRect.top / (wrapHeight - innerHeight)`. Each char `i` sharpens during its `(i/total)*(1-0.12)` → `+0.12` window of progress. `--blur` interpolates 8px → 0 per char.
- `getBoundingClientRect()` used instead of `offsetTop` so the math survives Lenis transforms.

**"Our Mission" pill on the statement** — same blur reveal sequence
- `<span class="pill-label">Our Mission</span>` added inside the statement container, before the `<p>`.
- `splitToChars(el)` extracted as a helper and run on **both** the pill and the statement text.
- Chars collected via `statementSection.querySelectorAll('.statement-char')` (DOM order) — pill sharpens first, then statement text.

**Lenis smooth scroll** (`src/layouts/Layout.astro`)
- Loaded site-wide via ESM CDN: `import Lenis from 'https://esm.sh/lenis@1.1.13'` in a `<script type="module" is:inline>` block. Bails entirely on `prefers-reduced-motion: reduce`.
- First config used `duration: 1.1` + exponential easing — felt molasses-slow, user had to scroll multiple times to advance. **Switched to `lerp: 0.1`** (10% of remaining distance per frame) — much snappier per-input feel.
- Also **removed `html { scroll-behavior: smooth }`** from `public/styles.css` — it was double-smoothing on top of Lenis, producing a "scroll, nothing, then lurch" stutter. This combined fix was committed and pushed as `f57f315` ("Fix janky scrolling across all pages").
- Per-row `scroll-behavior: smooth` rules on `.thumb-row`, `.carousel-track`, etc. (lines 657, 1041, 1953) intentionally kept — those are horizontal scroll containers, don't conflict with Lenis.

**Hero playback UX** — went through three iterations to land on current pattern:
1. **v1**: small corner mute/unmute speaker button — too small hit target.
2. **v2**: small corner play/pause button — same problem.
3. **v3 (current)**: click anywhere on the hero toggles. Centered 96px frosted overlay appears when paused (play triangle) or when muted-but-playing (speaker-with-slash icon + "Click for sound" hint).
- Three CSS state classes on `.home-hero`: `.is-paused` shows play icon; `.is-muted:not(.is-paused)` shows mute icon + hint; neither = no overlay.
- JS listens to `play`/`pause`/`volumechange` on the video to sync classes.
- **First-click rule**: while muted, the first click unmutes and keeps playing (doesn't pause). Subsequent clicks toggle play/pause normally. Implemented in `toggleHeroVideo()` with an early-return guard on `heroVideo.muted`.
- **Spacebar** also toggles, scoped strictly: only when `scrollY < innerHeight - 40`, no `INPUT|TEXTAREA|BUTTON|SELECT|A` focused, no overlay/donate/slide-panel active, no contentEditable focused. `preventDefault()` stops native page-scroll when the hijack fires.

**Nav experiments — both applied then reverted**
- **Nav transparent over hero**: body class `nav-over-hero` toggled by JS while `scrollY < innerHeight - 40`; CSS made `.main-nav` background/border/backdrop transparent and inverted `.nav-links a` to white with text-shadow. Reverted because user wanted a different approach.
- **Nav restructured under hero** (DOM order): extracted nav HTML to `src/components/MainNav.astro`, added `hideNav` prop to Layout, home page rendered `<MainNav />` after the hero so the nav only pinned once scrolled past. Reverted along with deletion of the MainNav component file.
- Current state: nav stays in `Layout.astro` as before, always-visible on cream background. Both attempts are recoverable from git history.

**Button styling — site-wide** (`public/styles.css`)
- `.btn-primary` and `.btn-ghost` now `padding: 0.5rem 1.5rem; border-radius: 40px`.
- `.btn-outline` and base `.btn` untouched (user specified primary + ghost only).
- `.nav-donate` still has its own `padding: 0.5rem 1.4rem` override — visually identical (~1.6px difference) to the new pill shape.

**Pill styling — site-wide** (`.pill-label`)
- Removed background, padding, and border-radius.
- `font-size: 1rem; font-weight: 800; color: var(--pink-dark)`.
- Now reads as bold pink-dark text (no pill shape).
- `.pill-small` modifier (used on featured-class cards like "Sleep Aids", "For Kids") still overrides to `font-size: 0.7rem` + smaller padding — left untouched per user instruction.

**Donate panel removed → direct Givebutter popup trigger**
- **Archived** the entire slide-up panel (HTML + CSS + JS + restoration instructions) to `src/_archive/donate-panel.md`. Files under `src/_archive/` are not built by Astro (underscore prefix). Required SVG assets (`love.svg`, `rock.svg`, `star.svg`, `butterfly.svg`) kept in `public/img/` since other places may reference them.
- **Removed**: the entire `.donate-*` CSS block (~145 lines from `public/styles.css`), the donate panel markup from `Layout.astro`, the ~65-line `// --- Donate Slide-Up Panel ---` JS block from `script.js`, and dead `.donate-panel.active` checks in two other selectors (safe-exit ESC handler, hero spacebar handler).
- **Added** to `Layout.astro` `<head>`: `<script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=yLfulzFp7eIMG8jn" is:inline></script>`.
- **Added** hidden trigger element where the panel used to be: `<div class="givebutter-trigger-wrap" aria-hidden="true"><givebutter-button id="gb-trigger" campaign="GHP0EF"></givebutter-button></div>`.
- **New JS**: every `[data-donate-panel]` click programmatically clicks the hidden Givebutter button. Tries in order: descendant `button,a` (light DOM) → shadow-root `button,a` → host element itself. Fallback: `window.open('https://givebutter.com/pathwaytofreedom', '_blank', 'noopener')` if the widget didn't load.
- The 3 wired triggers: nav Donate (`Layout.astro:69`), Mission "Donate now" (`src/pages/mission.astro:140`), Escape Club "Support as a Friend $10/mo" (`src/pages/escape-club.astro:186`).

**Givebutter trigger CSS — important detail** (learned the hard way)
- First attempt: `.givebutter-trigger-wrap { position: fixed; width: 0; height: 0; overflow: hidden; opacity: 0; pointer-events: none; z-index: -1; }` — **broke the widget**. Per Givebutter docs the button renders inline at its DOM location; zero-dimension hidden containers prevent widget initialization.
- Current: `.givebutter-trigger-wrap { position: absolute; left: -9999px; top: 0; }` — off-screen but visible to the widget, so it initializes normally.

**Givebutter credentials** (per user, 2026-05-24)
- Campaign URL: `https://givebutter.com/pathwaytofreedom`
- Campaign code (`campaign` attribute): `GHP0EF`
- Account ID (`?acct=` script param): `yLfulzFp7eIMG8jn` — **user originally pasted `yLfulzFp7eIMG8jn&p`**; the `&p` looks like trailing query-string noise from copy-paste. If the popup never opens, restore the `&p` (URL-encoded as `%26p` if needed) and re-test.

**Givebutter status as of session end (2026-05-25)**
- User reported "nothing happens after click."
- Most likely cause was the broken zero-dimension wrapper CSS — now fixed.
- **Outstanding**: needs in-browser verification. Diagnostic snippet given to user:
  ```js
  var g = document.getElementById('gb-trigger');
  console.log('element:', g, 'shadow:', g && g.shadowRoot, 'children:', g && g.children.length, 'inner button:', g && g.querySelector('button'));
  ```
  Awaiting console output / Network tab confirmation that `widgets.givebutter.com/latest.umd.cjs?acct=...` returns 200.

**Verified Givebutter URL prefill params** (from docs.givebutter.com/widgets/advanced/url-prefill)
- `amount=50` and `frequency=monthly|quarterly|yearly` — work on both the popup widget and inline form widgets.
- Not currently used (single trigger, no tier selection) but available if we want to bring back tier-prefill behavior.

**Files modified this session**
- `src/pages/index.astro` — hero markup, statement pill, click-to-toggle overlay
- `src/layouts/Layout.astro` — Lenis script, Givebutter script + trigger, removed donate panel block
- `public/styles.css` — home hero, statement curtain + char/word/space rules, pill restyle, button-primary/ghost pill shape, removed all `.donate-*`, added `.givebutter-trigger-wrap`, removed `html { scroll-behavior: smooth }`
- `public/script.js` — char-blur reveal (with word wrappers), play/pause + first-click-unmute + spacebar, removed donate panel block, Givebutter trigger handler, cleaned dead `.donate-panel.active` selectors
- `src/_archive/donate-panel.md` — new archive file with restoration instructions

**Git status as of session end**
- Pushed to `origin/main`: `f57f315` "Fix janky scrolling across all pages" (the Lenis lerp + scroll-behavior removal).
- Uncommitted: everything else (Espacio hero, curtain, char-blur, pill changes, button radius, Givebutter swap, archive file).

**Followups**
- Confirm Givebutter popup actually opens after the CSS fix; if not, dig into account ID format or fall back to a real-window popup via `window.open(...features)`.
- Decide whether to bring nav back over the hero (transparent style) or keep current always-opaque cream nav. Both implementations recoverable from git history.
- The `.pill-small` modifier was deliberately left untouched — if we want full pill consistency, neutralize it.

---

## Team Page Build (2026-05-22 → 2026-05-25)

**Goal:** replace the placeholder team cards on `/mission` with a dedicated `/team` page listing all 66 people from `armypink.org/ourteam`. Originally scoped as two pages (Team + Volunteer, split by whether "volunteer" appeared in the bio) — collapsed to one page because the staff/volunteer line was too blurry to split cleanly.

**Token added:**
- `--orange: #f3954f` — added to `:root` in `public/styles.css` alongside `--pink`/`--cream`/`--dark-grey`. Used for the hover offset shadow + plus-icon hover fill on team cards.

**Data layer (`src/data/team.js`):**
- Single source of truth — array of 66 `{ slug, name, title, bio, photo, sourcePhoto }`.
- Source order preserved exactly as on `armypink.org/ourteam`.
- `photo` is the local path (`/img/people/<slug>.<ext>`); `sourcePhoto` kept the original Squarespace URL for the one-shot download script.
- Photos pulled via WebFetch → extracted name/title/bio/URL → built data file by hand.
- **Known data anomalies (intentional, copy as-is from source):**
  - #31 Max Townsend — bio names "Max Harstine" and reuses Jenna Vanek's photo URL on `armypink.org/ourteam`. Needs manual correction in `team.js`.

**Photo pipeline:**
- Wrote one-shot `scripts/download-team-photos.mjs` — read `team.js`, fetched each Squarespace URL, wrote to `public/img/people/<slug>.<ext>`, ran `sips -Z 600` to cap width.
- All 66 downloaded successfully (~11MB total). Script deleted after the run per the rule that one-shot tooling shouldn't linger.

**Page (`src/pages/team.astro`):**
- Imports Layout + data. `.page-hero` (existing component) with title, subhead, and "tap any card to read what they do".
- One `.tp-grid` iterating `team.map(...)`. Each card is a `<button>` (focusable, Enter-to-flip).
- Front face: `.tp-photo` (grayscale CSS filter) fills upper portion; `.tp-meta` cream band below with `.tp-name`, `.tp-title`, and a `.tp-toggle` `+` icon bottom-right.
- Back face: `.tp-back-header` (name + title + `×` close), `.tp-bio` (overflow-y: auto for long bios).
- Inline `<script is:inline>` tracks `active` card; clicking a different card auto-unflips the previous (single-flip-at-a-time). `Escape` closes the active card and returns focus.

**CSS architecture (`.tp-*` namespace, prefixed to avoid clobbering existing `.team-*` used in mission.astro):**
- `.tp-card` — outer `<button>`, owns `perspective: 1200px` for the 3D flip, `aspect-ratio: 3 / 5` (started at 4/5, tightened on 2026-05-23 per user direction).
- `.tp-card-inner` — the rotating element. `transform-style: preserve-3d`, `transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)`.
- `.tp-face` — `backface-visibility: hidden`, absolute fill, cream bg, 14px radius, beige-dark border.
- `.tp-face--back` — `transform: rotateY(180deg)`, padding `1.5rem 1.5rem 2rem` (tightened from `1.25rem 1.25rem 1rem` on 2026-05-25).
- **Hover treatment (the signature interaction):**
  - `.tp-card:hover` / `.tp-card.is-flipped` → `transform: translate(-6px, -6px)` (lifts card up-left)
  - `.tp-card-inner` → `box-shadow: 10px 10px 0 var(--orange)` (hard offset shadow, no blur — neo-brutalist style per Image #2 reference)
  - `.tp-photo img` → `filter: grayscale(0)` on hover (was `grayscale(1)` at rest). 0.3s ease transition.
  - `.tp-toggle` → fills with `--orange`, icon turns white.
- `prefers-reduced-motion: reduce` disables all card transitions.
- Focus ring: `:focus-visible .tp-card-inner` gets a 3px pink outline.

**Back-face typography (final, 2026-05-25):**
- `.tp-back-name` → `1.25rem` Playfair Display
- `.tp-back-title` → `1rem`
- `.tp-bio` → `0.85rem`
- Note: Cecelia Machuca (584 chars / 73 words) and Mahey Anjum (571 chars / 77 words) are the longest bios — at these sizes they likely trigger the `.tp-bio` scroll. Acceptable per the scroll-inside design choice.

**Responsive grid:**
- 4 columns ≥1101px → 3 ≤1100 → 2 ≤760 → 1 ≤420
- Set on `.tp-grid` with media queries (not auto-fit) so the column count is predictable.

**Nav + cleanup:**
- `Layout.astro` — added `<li><a href="/team">Team</a></li>` between Mission and Escape Club in `.nav-links`. Footer already had `/team` link from a prior session.
- `mission.astro` — removed the 4 placeholder cards (`team-grid` block) and replaced with a one-line `<a class="btn btn-primary">Meet the full team</a>` linking to `/team`.

**Commits:**
- `91135ae` — "Add /team page with flip-card grid for all 66 people" (71 files: data, 66 photos, page, CSS additions, nav link, mission cleanup)
- `8d398be` — "Tune team cards: 3:5 aspect ratio, color-on-hover photos"
- Back-face font + padding tweaks (Cecelia/Mahey-sized text upgrade) are uncommitted as of session end on 2026-05-25.

**Commit hygiene pattern (used here, worth reusing):**
- Both team-page commits were surgically isolated from prior-session uncommitted work (hero rebuild, scroll-behavior tweaks, Lenis lerp changes). Approach: copy current `styles.css`/`Layout.astro` to `/tmp`, `git checkout HEAD --` to revert, re-apply only the target edits with `Edit`, stage + commit, then restore from `/tmp`. Keeps commit history clean when the working tree has accumulated unrelated drafts.

**Followups / known gaps:**
- Max Townsend bio/photo correction (see anomaly above)
- Verify flip behavior + orange shadow feel correct on a real browser at multiple breakpoints
- If `.tp-name` wraps awkwardly at narrow widths, consider clamping `font-size` or shortening titles in `team.js`

---

## Legal Pages + Contact Rebuild (2026-05-25)

Built out the full legal footer and redesigned the contact page. All three legal pages share a Stripe-style two-column layout (sticky sidebar nav + content). Contact page rebuilt with a yellow form card and icon-badge info column. Pushed as commit `4386643`.

**New pages:**
- `/privacy` (`src/pages/privacy.astro`) — Privacy Notice, TCPA/VAWA/VOCA/FVPSA-compatible. 12 sections.
- `/sms-terms` (`src/pages/sms-terms.astro`) — SMS Terms of Service with TCPA-required disclosures. 10 sections. Stub status — owner review needed.
- `/disclaimer` (`src/pages/disclaimer.astro`) — Liability/scope disclaimer. 8 sections (professional advice, wellness, crisis use, third-parties, no guarantees, limitation of liability, changes, contact). Boilerplate §6 needs legal counsel review.
- `/contact` (`src/pages/contact.astro`) — Netlify Forms with reason dropdown, routes to `support@armypink.org`.

**Privacy page — merged owner's federal-compliance draft with broader website coverage:**
- Federal confidentiality framework: VAWA, VOCA, FVPSA cited by name (§1)
- Shelter location protection clause — VAWA §40002(b)(2) (§2)
- "Informed, written, and reasonably time-limited consent" — FVPSA standard verbatim (§1, §6)
- TCPA SMS notice — "not a condition of eligibility", STOP/HELP, "message and data rates may apply" (§5)
- Twilio referenced as SMS provider bound by DPA (§5, §6)
- Aggregate funder reporting clause — critical for VAWA/VOCA/FVPSA grant reviewers (§4, §6)
- Mandatory abuse/neglect reporting carve-out, in addition to court orders (§6)
- Givebutter referenced as donation processor (§3, §6, §8)
- Standard website privacy coverage retained: cookies/analytics, third-party links, your rights, children's privacy

**Two-column legal layout** (`public/styles.css` — `.legal-layout` block):
- Grid: 240px sticky sidebar + 1fr content, gap `var(--space-xl)`
- Sidebar `position: sticky; top: 100px`, flat list of section anchor links
- Active link via IntersectionObserver (`rootMargin: '-100px 0px -60% 0px'`) — `.is-active` gets pink left-border + pink-pale background
- Content max-width 760px, h1 large Playfair Display (`clamp(2.4rem, 5vw, 3.5rem)`, weight 700, tight tracking)
- Section spacing: `margin-bottom: var(--space-md); padding-bottom: var(--space-md)`, **no border-bottom**
- Mobile (<900px): sidebar `display: none` (hidden entirely, not collapsed to top)
- CTA section removed from all three legal pages — they end at the last section

**Inline JS shared across legal pages:**
Each page ends with a small IIFE that finds `[data-section-link]` anchors, observes their target sections, and toggles `.is-active` on whichever is closest to viewport top. No external dependencies.

**Contact page** (`/contact`):
- Two-column grid `grid-template-columns: 1fr 2fr` (info left, form right), `align-items: stretch`
- LEFT — `.contact-aside` info column, no card background:
  - 4 methods: Email, Community, Response time, For partners
  - Each `.contact-method` is a flex row: 44×44 `.contact-method-icon` (pink-pale bg, pink-dark icon) + `.contact-method-body` (h3 + description)
  - Lucide SVG icons inlined: mail, message-circle, clock, users
  - `.contact-aside-socials` at bottom: 4 38px circle icon buttons (Instagram, LinkedIn, YouTube, Pinterest), reused footer-social SVG paths. `margin-top: auto` pushes them to bottom of the flex column.
- RIGHT — `.contact-card` (`#FDD36A`, `border-radius: 24px`, `padding: clamp(--space-md, 3vw, --space-lg)`):
  - h1 "Let's start a conversation." (Playfair Display, `clamp(2rem, 4vw, 3rem)`, weight 700)
  - Intro: "Whether you're here to volunteer, partner, ask a question, or simply say hello, we'd love to hear from you."
  - Form fields: reason dropdown (general / volunteer / partnership / press-media / other) + name (optional) + email (required) + message (required) + hidden honeypot
  - Inputs: white bg, `border-radius: 10px`, focus state = pink border + pink-pale glow ring
  - `.contact-submit` full-width pink button, `padding: 1rem 1.5rem`
  - Privacy note centered below button

**Netlify Forms wiring:**
- Form attributes: `data-netlify="true"`, `netlify-honeypot="bot-field"`, hidden `<input type="hidden" name="form-name" value="contact">`
- `action="/contact?sent=true"` — after submit, inline script swaps `.contact-card` for `.contact-success` confirmation card (pink-pale, checkmark icon)
- Build verified — all three Netlify form attributes present in `dist/contact/index.html`
- **Manual step required**: Netlify dashboard → Site → Forms → Settings → notification email → `support@armypink.org`. The HTML doesn't route by itself.

**Footer wiring** (`src/layouts/Layout.astro`):
- `#` → `/privacy` (Legal column)
- `#` → `/sms-terms` (Legal column)
- `#` → `/disclaimer` (Legal column)
- `#` → `/contact` (Connect column)

**Donate panel Givebutter swap:**
- Donate panel note text updated mid-session: "Donations are tax-deductible through our fiscal sponsor, Charity On Top" → "Donations are processed securely through Givebutter and are tax-deductible".
- Note: the donate panel itself was later archived entirely during the Espacio session — Givebutter widget popup now handles donations directly. The text change predates that archive.

**Shared contact info across all legal pages:**
- Email: `support@armypink.org`
- Phone: `(213) 579-5051`

**Files touched this session:**
- `src/pages/privacy.astro` — new
- `src/pages/sms-terms.astro` — new
- `src/pages/disclaimer.astro` — new
- `src/pages/contact.astro` — full rebuild
- `src/layouts/Layout.astro` — 4 footer link updates + donate panel note swap
- `public/styles.css` — `.legal-layout` block, contact page rebuild, removed prior `.privacy-toc` / `.privacy-doc` / `.contact-callout` blocks

**Decisions made along the way:**
- Owner provided a TCPA-compliant draft heavy on SMS/federal compliance but missing website coverage. Decision: merge rather than replace — owner's text leads (federal sections come first), prior draft's coverage layered in (cookies, analytics, children's privacy).
- "Other ways to reach us" title removed; aside background card removed; columns swapped (info now on left, form on right).
- Yellow `#FDD36A` applied to the right form card only — NOT edge-to-edge — per Untitled UI contact page reference image.
- Form fields kept boxed (not underline) per explicit choice.
- Submit button stays Army-Pink pink (not dark navy like reference) — brand consistency.
- Privacy page hero removed; title moved into the right column, matching Stripe legal layout reference.

**Followups**
- Owner review: `/sms-terms` content (TCPA disclosures are template-grade; owner may have their own copy).
- Legal counsel review: `/disclaimer` §6 limitation-of-liability clause (boilerplate).
- Netlify dashboard: set `support@armypink.org` as form notification recipient.
- Verify `support@armypink.org` mailbox exists / forwards correctly — referenced on all four new pages.
- Confirm phone `(213) 579-5051` is correct.
