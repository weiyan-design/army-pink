# Army Pink — Next Steps

Open work threads across the project. Most checklists are aspirational — verify they're still relevant before acting on them.

---

## Lightship-style Hero — Deferred Cross-Device Work (2026-05-22)

The hero is being rebuilt with GSAP ScrollTrigger + Lenis to match Lightship's hero (`https://lightshiprv.com/`). Desktop ≥1024px is being built first; the items below are deferred until the desktop animation is functioning as expected.

- [ ] **Touchscreen fallback** — Lightship disables the scrub animation on touch devices entirely (`isTouchScreen` check). Show a static hero instead. Detect via `('ontouchstart' in window) || navigator.maxTouchPoints > 0`.
- [ ] **Reduced-motion fallback** — respect `prefers-reduced-motion`. Disable ScrollTrigger timeline; show static hero.
- [ ] **Dynamic viewport units** — set `--svh`/`--dvh`/`--lvh` CSS custom props for iOS Safari's collapsing address bar. Replace `100vh` with `100svh` in hero CSS.
- [ ] **Crisis-banner offset** — Lightship handles their top banner show/hide by translating the hero down by `bannerHeight`. Apply same pattern to Army Pink's crisis banner.
- [ ] **Mobile grid simplification** — hide the 4 side/grid images under ~1024px (Lightship does this). Mobile shows just the video + title.
- [ ] **ResizeObserver on hero** — recompute clip target metrics when the hero element itself resizes (not just window). Catches font-loading, scrollbar, or container changes that plain `resize` listener misses.
- [ ] **Per-breakpoint tuning** — test at 320, 768, 1024, 1280, 1440, 1920, 2560. Adjust clip target size, image grid layout, title type scale, padding per breakpoint.
- [ ] **Test on real devices** — iOS Safari (address bar quirks), Chrome Android, desktop Safari (clip-path performance), Firefox, Edge.

---

## Portal — Immediate

- [ ] Populate Phase 2 and Phase 3 overlays with carousel rows like Phase 1
- [ ] Add actual URLs to overlay resource cards (currently `#` placeholders)
- [ ] Replace Unsplash placeholder images for Kids Meditation and Kids Yoga featured cards
- [ ] Outline co-created "Pathway to Wellness" program with Vedanta
- [ ] Clean up unused class slide-up panel code (HTML/CSS/JS) if not needed
- [ ] Connect Donate panel "continue" button to actual payment flow

## Portal — Design

- [x] Draft portal wireframe with the four-layer structure
- [x] Design self-assessment question flow
- [x] Hero design with video background + glassmorphism
- [x] Empowering Series section with arch images
- [x] Featured Classes scrollable card row
- [x] Wellness Programs section with reversed layout
- [x] Survivor Stories section with card deck animation
- [x] All cards linked to doyogawithme.com
- [x] Image optimization pipeline (sips + ffmpeg)
- [x] Donate slide-up panel with tier selection
- [x] Deployed to Netlify public URL
- [x] Nav + footer rebuilt with correct links, logo, social icons
- [x] Safe Exit button (bottom-right fixed, ESC key, history replacement)
- [x] Crisis banner browser history reminder
- [x] Migrated to Astro — shared Layout.astro template
- [x] Immersive sticky hero scroll (video scales 100%→50%, no glass card, no wave/flower)
- [x] Mute/unmute button tracking video corner
- [x] Statement section: sticky wipe reveal, `--dark-grey` token, fluid type, tight tracking
- [x] Hero rebuilt: video shrinks to 9:16 portrait (cols 5–8), 4 side images animate in on scroll
- [ ] Scroll-driven SVG stroke line with flowers (attempted multiple times, z-index issues — needs different approach, possibly per-section SVG segments instead of one global overlay)
- [ ] Sun overlay animation on stories section (attempted, reverted)

---

## Multi-page Build

- [x] `src/pages/mission.astro` — story, values, team placeholders, stats, CTA
- [x] `src/pages/escape-club.astro` — community intro, 4 tiers, 3-step join flow, CTA
- [x] `src/pages/partners.astro` — philosophy, Vedanta featured, 4 partnership models, CTA
- [x] `src/pages/wellness-portal.astro` — created as copy of home page content
- [x] `src/pages/team.astro` — flip-card grid for all 66 people, sourced from `armypink.org/ourteam`
- [ ] `src/pages/donate.astro` — full donation flow (expand current panel into a page)
- [ ] `src/pages/volunteer.astro` — _merged into `team.astro` 2026-05-22 — staff/volunteer line was too blurry to split cleanly. Revisit if a recruitment-focused volunteer page is needed later._
- [ ] `src/pages/faq.astro` — common questions (safety, privacy, community, rides)
- [x] `src/pages/contact.astro` — Netlify Forms with reason dropdown, yellow form card, icon-badge info column (2026-05-25)
- [x] `src/pages/privacy.astro` — TCPA/VAWA/VOCA/FVPSA-compatible privacy notice, two-column legal layout (2026-05-25)
- [x] `src/pages/sms-terms.astro` — TCPA-required SMS disclosures (2026-05-25)
- [x] `src/pages/disclaimer.astro` — liability/scope disclaimer (2026-05-25)
- [ ] `src/pages/perks.astro` — supporter perks by tier
- [ ] Fill real content into mission/escape-club/partners (team bios, Discord link, Vedanta details)

---

## Discord

- [ ] Build server structure based on channel architecture in `strategy.md`
- [ ] Implement guided airlock onboarding flow
- [ ] Set up bot stack (Koko, Confessions Bot, Ticket Tool — see REFERENCE_SERVERS_AND_TOOLS.md)
- [ ] Draft community guidelines with trauma-informed language
- [ ] Create role and permission structure
- [ ] Research LaunchPass integration for paid tiers

---

## Strategy

- [ ] Present tier structure and revenue model to Army Pink leadership
- [ ] Draft grant narrative connecting Vedanta partnership to clinical outcomes
- [ ] Identify 2-3 corporate sponsor prospects for Champion tier
- [ ] Define success metrics for first 6 months

---

## Wellness Portal Coverflow Hero — Known Followups (from 2026-05-24)

- [ ] Wire door CTAs to real routes (`/calm-room`, `/library`, `/wellness-experiences`) once sub-pages exist
- [ ] Swap Unsplash placeholders for Army Pink-curated photography
- [ ] Replace below-fold content (Empowering Series, etc.) with at-a-glance preview grid + 28-Day Journey card + Escape Club nudge
- [ ] Mobile gesture layer — add horizontal swipe support
- [ ] `prefers-reduced-motion: reduce` fallback — disable carousel rotation and breathing wave, show all 3 doors static
- [ ] **Investigate first**: `src/pages/wellness-portal.astro` currently has the OLD hero (video + wave + flower), not the coverflow described in build-history. Either reverted or never landed. See "Wellness Portal Hero Triage" in `build-history.md`.

---

## Givebutter — Pending Verification (2026-05-25)

- [ ] Confirm popup actually opens after the `.givebutter-trigger-wrap` CSS fix (position: absolute; left: -9999px; top: 0)
- [ ] If broken: try restoring `&p` suffix on account ID (`yLfulzFp7eIMG8jn&p`)
- [ ] If still broken: fall back to `window.open('https://givebutter.com/pathwaytofreedom', '_blank', 'noopener')` direct link instead of widget
- [ ] Optional: re-introduce tier-prefill via `?amount=10&frequency=monthly` etc. on the campaign URL

---

## Team Page — Followups (2026-05-25)

- [ ] Fix Max Townsend (#31): bio names "Max Harstine" and photo is Jenna Vanek's — both wrong on the source `armypink.org/ourteam`, copied as-is
- [ ] Verify flip behavior + orange shadow on real browsers at 320, 768, 1024, 1440 widths
- [ ] If `.tp-name` wraps awkwardly at narrow widths, clamp `font-size` or shorten titles in `team.js`
- [ ] Commit pending: back-face font + padding tweaks (1.25rem name / 1rem title / 0.85rem bio, padding 1.5rem 1.5rem 2rem)

---

## Legal Pages + Contact — Followups (2026-05-25)

- [ ] **Netlify dashboard**: Forms → Settings → notification email → add `support@armypink.org`. The HTML doesn't route by itself.
- [ ] Verify `support@armypink.org` mailbox/forward actually exists — referenced on `/privacy`, `/sms-terms`, `/disclaimer`, `/contact`
- [ ] Confirm phone `(213) 579-5051` is correct
- [ ] Owner review: `/sms-terms` content — TCPA disclosures are template-grade; owner may have their own copy
- [ ] Legal counsel review: `/disclaimer` §6 limitation-of-liability clause (boilerplate)
- [ ] Submit a test message via `/contact` form on production and confirm it lands in Netlify dashboard + email notification fires

---

## Wellness Portal Sub-pages — Followups (2026-06-04)

The coverflow doors hero, real sub-page routes, and switcher navigation are all built and working end-to-end. Remaining work:

- [ ] **Rename third sub-page** from `/wellness-portal/wellness-experiences` → `/wellness-portal/wellness-programs` to match the new display label "Wellness Programs". Needs: rename file `wellness-experiences.astro` → `wellness-programs.astro`, update `ROOMS` array URL in `WellnessSubpageShared.astro`, update hub CTA href in `wellness-portal.astro`, add a Netlify redirect from the old URL (or accept the old URL breaks).
- [ ] **Per-room content.** Sub-pages currently share identical placeholder content (Empowering Series + Featured Classes + Wellness Programs sections, all copied from the hub legacy). Replace with room-specific content (Calm Room = meditation/breathwork, Library = workbooks + 28-Day Journey, Wellness Programs = partner classes).
- [ ] **Hub below-fold redesign.** `/wellness-portal` still has the legacy Empowering+Featured+Programs sections under the carousel hero. Discussed replacing with: at-a-glance preview grid + 28-Day Journey flagship card + Escape Club nudge. Not yet started.
- [ ] **Real photos.** All four wellness-portal contexts (hub carousel + 3 sub-pages) still use Unsplash placeholders. Swap for Army Pink-curated photography when ready. Three URLs to replace are in the `ROOMS` array (`WellnessSubpageShared.astro`) and the three `<image href="...">` attributes in the hub's three arches.
- [ ] **Mobile gesture layer.** Carousel hero on `/wellness-portal` currently uses the same vertical-scroll rotation on mobile as desktop. Discussed adding horizontal swipe to advance/retreat through doors. Not built.
- [ ] **`prefers-reduced-motion: reduce` fallback.** Should disable the carousel rotation, breathing wave, and arch expand/contract animations. Show all 3 doors statically. Not built.
- [ ] **Astro View Transitions consideration.** Manual sessionStorage handoff works but is ~200 lines of JS across two files. If the rest of the site eventually adds cross-page fades, evaluate consolidating with `<ClientRouter />` from `astro:transitions`. Skipped this time because the carousel's scroll-driven JS might conflict.
