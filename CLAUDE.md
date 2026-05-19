# Army Pink — Research & Strategy Findings
*Compiled: 2026-03-20*

---

## Table of Contents
1. [Survivor Emotional Journey After Escape](#1-survivor-emotional-journey-after-escape)
2. [The Wellness Portal — Strategy & Architecture](#2-the-wellness-portal--strategy--architecture)
3. [Mental Health Product Strategies — Free vs. Paid](#3-mental-health-product-strategies--free-vs-paid)
4. [Funder & Partner Visibility Framework](#4-funder--partner-visibility-framework)
5. [Discord Community & Monetization Strategy](#5-discord-community--monetization-strategy)
6. [Recommended Next Steps](#6-recommended-next-steps)

---

## 1. Survivor Emotional Journey After Escape

Understanding what survivors experience post-escape is foundational to everything Army Pink builds — the portal, the Discord, and the wellness partnership.

### Phase 1: Immediate Aftermath (Days to Weeks)

| Experience | Description |
|---|---|
| **"The Fog" (Cognitive Captivity)** | Coercive control replaces the survivor's own perceptions over time. After leaving, survivors often can't articulate what happened, or minimize its severity. Rooted in Evan Stark's coercive control framework. |
| **Trauma Bond Withdrawal** | Biochemically similar to substance withdrawal — intense cravings for contact with the abuser, anxiety, insomnia, obsessive thoughts. Driven by intermittent reinforcement cycles (Dutton & Painter, 1993). Survivors leave an average of 7 times before leaving permanently. |
| **Hypervigilance & Startle Response** | Chronic threat-scanning, sleep disruption, exaggerated startle. Specific triggers: sounds similar to the abuser's voice, footsteps, car sounds, certain times of day. The body hasn't registered the threat has changed. |
| **Legitimate Fear** | Post-separation is statistically the most dangerous period (Campbell et al., 2003). Fear of retaliation, stalking, custody threats — often reality-based, not irrational. |
| **Guilt, Shame, Self-Blame** | Internalized abuser messages ("you made me do this"). Shame about having stayed, impact on children, cultural stigma. |
| **Relief Mixed with Terror** | Genuine relief at physical safety alongside terror about the unknown. This ambivalence is clinically expected. |

### Phase 2: Medium-Term (1-6 Months)

| Experience | Description |
|---|---|
| **Post-Separation Abuse** | Coercive control doesn't end at physical separation. Abusers escalate through legal system abuse, financial sabotage, stalking, using children as leverage, smear campaigns. |
| **C-PTSD Decompensation** | Symptoms often intensify in this phase. Survival mechanisms that kept the person functional are no longer needed, and the full weight of trauma surfaces. Includes affect dysregulation, emotional flashbacks, negative self-concept. |
| **Ambiguous Grief** (Pauline Boss) | Grieving someone still alive, grieving a relationship that contained both love and violence. Society doesn't validate this grief. |
| **Identity Crisis** | "Who am I?" Preferences, opinions, interests were systematically eroded. Survivors describe feeling hollow or like a stranger to themselves. |
| **Anger Emergence** | Often delayed — anger was unsafe to express during the relationship. Healthy and necessary, but frightening for survivors conditioned to suppress it. |
| **Functional Impairment** | Difficulty holding a job, managing finances, parenting. Executive function deficits from chronic trauma. Memory problems, decision fatigue, physical health consequences. |

### Phase 3: Long-Term Recovery (6 Months to Years)

| Experience | Description |
|---|---|
| **Identity Reconstruction** | Rebuilding a self-concept independent of the abuser. Simultaneously liberating and terrifying. Trial and error. |
| **Relationship Recalibration** | Learning healthy vs. unhealthy patterns. Developing earned secure attachment. Risk of re-victimization if patterns aren't examined. |
| **Boundary Development** | Often entirely new. May swing between overly rigid and total collapse. |
| **Systemic Recovery** | Financial rebuilding (destroyed credit), legal entanglements (years-long custody battles), housing instability, career gaps. |
| **Post-Traumatic Growth** | Not universal, but possible: deeper empathy, clarity about values, increased personal strength, new life directions. Coexists with ongoing pain. |

### Named Patterns to Design Around

| Pattern | What It Is | Design Response |
|---|---|---|
| **Trauma Bonding** | Attachment formed through cycles of abuse + reconciliation | Grounding exercises available immediately; "what you're feeling is normal" messaging |
| **Fawn Response** | People-pleasing as survival strategy | No pop-ups, no urgency language, no pressure in UX |
| **Emotional Flashbacks** (Pete Walker) | Sudden regression to trauma-era emotional states | In-the-moment coping tools accessible from any page |
| **Betrayal Trauma** (Jennifer Freyd) | Damage from violation by a trusted attachment figure | Trust on the portal must be earned slowly, not assumed |
| **Learned Helplessness** | Belief that nothing you do changes the outcome | Empower micro-choices; celebrate small actions |
| **Ambiguous Grief** | Grieving someone still alive | Acknowledge this grief explicitly; most DV resources skip it |

### Key Clinical References
- Judith Herman, *Trauma and Recovery* (three-stage model: Safety, Remembrance, Reconnection)
- Bessel van der Kolk, *The Body Keeps the Score* (somatic/neurological trauma impacts)
- Evan Stark, *Coercive Control* (reframing DV as liberty crime)
- Pete Walker, *Complex PTSD: From Surviving to Thriving* (emotional flashbacks, 4F responses)
- Landenburger (1989), DV-specific recovery model: Binding, Enduring, Disengaging, Recovering
- ICD-11 C-PTSD criteria (WHO, 2019/2022)
- ACE Study (Felitti & Anda) — long-term health impacts

### Core Insight
Most people think "leaving" is the resolution. In reality, leaving is the beginning of the hardest part. This is exactly why the Vedanta partnership matters — survivors need structured support *after* the escape, not just during it.

---

## 2. The Wellness Portal — Strategy & Architecture

### Context
Army Pink is partnering with a yoga/meditation studio (Vedanta) to offer healing resources to survivors. They envision a "portal" — a bridge between Army Pink's website and the yoga studio's services.

### The Bridge Concept
The portal shouldn't be a link to a yoga studio. It should be a mapped pathway from pain to practice:

| Survivor Experience | Portal Response | Vedanta Connection |
|---|---|---|
| Hypervigilance, can't sleep | "Your body is still protecting you" | Guided meditation for nervous system regulation |
| Disconnected from body | "Reconnecting with yourself is part of healing" | Trauma-informed yoga for body reconnection |
| Identity loss ("who am I?") | Self-discovery framing | Mindfulness practices for self-exploration |
| Trauma bond withdrawal | "You're not alone in this" | Community (Discord) + breathwork |
| Emotional flooding | "These feelings have a name" | Grounding exercises, somatic tools |

### Recommended Portal Flow

```
Landing -> "The Fog" breaks gently (naming what they feel)
  -> Self-Assessment Tool (where are you in your journey?)
    -> Personalized pathway (curated resources based on answers)
      -> Vedanta content (embedded meditation/breathing exercise)
        -> Deeper engagement options (classes, Discord, programs)
```

### Self-Assessment Tool Concept
A short, non-clinical questionnaire that maps the survivor to a phase:
- "I just left and everything feels confusing" -> Phase 1 resources
- "I've been out for a while but I still feel stuck" -> Phase 2 resources
- "I'm rebuilding but struggling with trust/identity" -> Phase 3 resources

No login required. The engagement *is* the value (modeled on BetterHelp's intake quiz approach).

### Trauma-Informed UX Rules (Non-Negotiable)
- **Quick exit button** — prominent, instantly navigates away (standard for DV orgs)
- No countdown timers or urgency tactics
- "When you're ready" language — not "Start now"
- Calm visuals — soft colors, generous whitespace, no aggressive animations
- User control and autonomy — let users control pace, skip steps, exit easily
- Mobile-first — many survivors access from phones, not shared computers
- Multiple entry points — reading, talking to someone, community
- Crisis resources visible on every page, not buried in a footer

### Partnership Models

| Model | Description | Best For |
|---|---|---|
| **A: Referral Network** (NAMI model) | Curated directory linking to vetted partners | Scaling to many partners |
| **B: Subsidized Access** (Headspace model) | Co-branded access codes for free/reduced services | Quick wins with existing partners |
| **C: Embedded Hub** | Partner content embedded in Army Pink's ecosystem | Keeping survivors in your world |
| **D: Co-Created Program** (Exhale to Inhale model) | Joint programming designed for DV survivors | Deepest impact, best for grants |

**Recommendation for Vedanta:** Hybrid of C + D. Co-create a "Pathway to Wellness" program (echoing "Pathway to Freedom"). Embed Vedanta content directly in the portal. Most differentiated and grant-fundable approach.

### Relevant Model: Exhale to Inhale
Nonprofit providing trauma-informed yoga to DV survivors. Partnered with the New School for Social Research for outcome validation. Uses the language "from surviving to thriving" — aligns with Army Pink's ethos. Demonstrates grant-fundability of yoga + DV programming.

---

## 3. Mental Health Product Strategies — Free vs. Paid

### What Top Platforms Give Away Free (and Why)

| Platform | Free | Paid | Strategy |
|---|---|---|---|
| **BetterHelp** | Therapist matching quiz, blog articles, crisis resources | All therapy sessions | Free quiz creates investment before payment ask |
| **Headspace** | 10-day basics course, select sleep content, population-specific free programs | Full library ($69.99/yr) | Gives enough of the *actual experience* to build habit |
| **Calm** | Daily Calm (1 session/day), select meditations, breathing exercises | Full library ($69.99/yr) | Daily free touchpoint builds habit and brand loyalty |
| **NAMI** | Everything — HelpLine, programs, support groups, resources | Nothing (nonprofit) | "Nothing to sell" positioning = trust. Revenue from donations/grants |
| **Crisis Text Line** | Everything — 24/7 text counseling | Nothing (nonprofit) | Zero friction = trust signal |

### Principles for Army Pink

| Give Away Free | Why It Works |
|---|---|
| Educational content (articles, guides) | Establishes expertise, drives SEO |
| Self-assessment tools / intake quizzes | Creates engagement and investment before asking for anything |
| Crisis resources and hotline numbers | Ethical obligation + signals safety-first values |
| Limited experience of the actual product (e.g., one meditation) | Lets users feel the value, not just read about it |
| Community access (basic level) | Creates belonging before monetization |

### NAMI as the Blueprint
NAMI is the closest model to what Army Pink should emulate:
- Everything survivor-facing is free
- Revenue from donations, grants, corporate partnerships, fundraising events
- Credibility comes from "nothing to sell" positioning
- Army Pink positioning: "We don't sell healing. We connect you to it."

### Recommended Layer Structure for the Portal

| Layer | Content | Barrier | Revenue Source |
|---|---|---|---|
| **1: Safety** | Crisis resources, quick exit, safety planning, "what you're feeling is normal" education | None — zero friction | Grants, donations |
| **2: Understanding** | Self-assessment tool, healing journey education, Vedanta intro content (embedded meditation) | None — optional email capture | Grants, partner in-kind |
| **3: Connection** | Discord community invite, peer support, weekly wellness content, survivor stories | Free registration | Escape Club memberships |
| **4: Healing** | Subsidized yoga/meditation sessions, structured programs, retreat applications | Grant-funded access | Corporate sponsors, grants |

---

## 4. Funder & Partner Visibility Framework

### The Core Tension
Funders need visibility to justify investment. Trauma survivors need spaces that feel safe, not transactional.

### Resolution: Gratitude Framing, Not Advertising

**The PBS/NPR model is the gold standard:** "This program is made possible by..." — not "Sponsored by" or "Brought to you by."

### Separation of Spaces

| Space | Sponsor Visibility | Why |
|---|---|---|
| **Survivor-facing content** (portal, Discord support channels) | Minimal or zero | The experience is about the survivor |
| **Public-facing content** (website, social media, fundraising) | Logos and acknowledgments expected | This is where funders get visibility |
| **Reporting** (newsletters, annual reports, impact dashboards) | Detailed partner stories and impact metrics | This is where funders get ROI |

### Strategies That Work

1. **"Made Possible By" language** — gratitude framing, not advertising
2. **Impact-centered attribution** — "Thanks to [Yoga Studio], 47 survivors accessed free healing sessions this quarter." More meaningful than a logo.
3. **Tiered visibility** — Major funders get named programs; wellness partners get "session led by" credit; community supporters get thank-you page listing
4. **Partner spotlights as content** — "Meet [Yoga Instructor], who leads our weekly trauma-informed session." Editorial, not commercial. Partners share to their audiences, expanding Army Pink's reach.

### What to Avoid in Survivor Spaces
- No pop-up or banner ads
- No data sharing with sponsors without explicit informed consent
- No "click to visit our sponsor" CTAs in crisis/healing content
- No requiring interaction with sponsor content as condition of access
- No sponsor logos on safety planning tools or crisis resources

---

## 5. Discord Community & Monetization Strategy

### Tier Structure (Recommended)

| Tier | Price | Who | Access |
|---|---|---|---|
| **Survivor** | Free | DV survivors | Peer support, resources, safety channels, crisis info |
| **Student/Volunteer** | Free | Campus ambassadors, volunteers | Coordination, training, team channels |
| **Friend** | $10/mo | General supporters | Badge, monthly newsletter channel, impact updates |
| **Escape Club Member** | $50/mo | Committed supporters | Above + monthly expert workshops, small groups, impact reports |
| **Champion** | $100+/mo | Major supporters | Above + advisory input, recognition, quarterly leadership calls |

**Key principle:** Survivors never pay. Supporters pay so survivors don't have to.

### The "Guided Airlock" Onboarding (Required for DV Community)

```
1. New member lands in restricted area (sees only #welcome and #rules)
2. Must react to rules or complete a brief verification form
3. Upon verification, receives "Member" role unlocking general channels
4. Welcome bot DMs orientation: key channels, how to get help, what to expect
5. Arrival announced in #welcome with greeting prompt
```

This screens out bad actors before they see member discussions.

### Channel Architecture (Recommended)

**Tier 1 — Public/Welcome (visible to all)**
- `#welcome` with auto-message: mission, rules, how to get started
- `#rules-and-guidelines` (read-only)
- `#introductions`
- `#announcements` (read-only)
- `#crisis-resources` (read-only, pinned hotlines)

**Tier 2 — General Community (verified members)**
- `#general-chat`
- `#daily-check-in` (low-barrier daily engagement)
- `#wins-and-gratitude`
- `#ask-for-help`
- `#off-topic` (casual bonding)

**Tier 3 — Specialized/Program (role-gated)**
- `#wellness` (yoga/meditation content from Vedanta)
- `#safety-planning`
- `#financial-independence`
- Event channels for workshops/sessions
- Cohort/small-group channels

**Tier 4 — Premium/Supporter (paid roles)**
- Exclusive content, direct leadership access, special events
- Mentor matching, 1-on-1 support coordination
- Monthly impact reports

**Tier 5 — Staff/Volunteer Backend**
- `#team-chat`, `#mod-log`, `#volunteer-coordination`
- Private channels for sensitive discussion

### Retention Tactics

- **Daily prompts** via bot — drives 3-5x more engagement than passive channels
- **Weekly recurring events** — even 15-min voice "coffee chats" create habit loops
- **Role progression** — members earn roles based on participation ("Regular," "Mentor," "Advocate")
- **Small group cohorts** (10-15) for specific programs — dramatically improves retention
- **Personal outreach** — mods DMing inactive members (2+ weeks absent) doubles re-engagement

### Conversion Funnel

```
Awareness (social media, website, campus events)
  -> Free Community Member (joins Discord, gets verified)
    -> Engaged Member (participates in events/chats — 2-4 weeks)
      -> Value-Aware Member (attends paid-preview event)
        -> Paying Supporter ($10-50/month)
          -> Champion/Advocate ($100+/month or major donor)
```

### Conversion Tactics

1. **"Taste Test"** — Run a premium event open to all. Announce it becomes recurring for paid members. 10-20% conversion.
2. **"Drip Content"** — Post previews in free channels (first 2 min of a workshop recording). Weekly drips build awareness.
3. **"Supporter Identity"** — Visible "Supporter" role with distinctive color. For cause-driven communities, the identity of "I support this mission" is a powerful motivator.
4. **"Cohort Launch"** — Structured 6-8 week programs, limited to 15-20 spots. Scarcity drives action.

### Revenue Projections

| Free Members | Friend ($10/mo, 8% convert) | Escape Club ($50/mo, 3% convert) | Monthly Revenue |
|---|---|---|---|
| 500 | 40 = $400 | 15 = $750 | **$1,150** |
| 1,000 | 80 = $800 | 30 = $1,500 | **$2,300** |
| 5,000 | 400 = $4,000 | 150 = $7,500 | **$11,500** |

### Recommended Tech Stack

| Component | Tool | Purpose |
|---|---|---|
| Payment | Stripe via LaunchPass | Subscriptions |
| Discord roles | LaunchPass bot | Auto-assign/remove on payment |
| CRM/Email | Mailchimp or ConvertKit | Nurture website visitors to Discord |
| Donations | Charity On Top / fiscal sponsor | Tax-deductible donations |

### Phased Launch

- **Phase 1 (Months 1-3):** Launch free community, build culture, establish safety protocols
- **Phase 2 (Months 3-6):** Introduce Friend tier ($10/mo), test programming
- **Phase 3 (Months 6-12):** Launch Escape Club tier ($50/mo) with structured programming
- **Phase 4 (12+):** Optimize, add corporate sponsor tiers, scale nationally

### Discord + Vedanta Portal Integration
- Resource channels linking to portal content and wellness exercises
- Weekly guided meditation sessions in Discord voice channels, led by Vedanta instructors
- Bot messages at member milestones suggesting portal visits for deeper resources
- Event sign-ups on the portal, delivered via Discord
- QR codes at campus events linking to the Discord landing page

---

## 6. Completed Work

### Landing Page v1.0 (Built 2026-03-20 through 2026-03-22)

Original version with Journey/Safety/Wellness/Community sections. Committed as `army_pink_checkin_1.0`.

### Landing Page v2.0 (Redesigned 2026-03-31)

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
- **Daisy rotation** — rotates 180deg clockwise based on hero scroll progress
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

### Landing Page v3.0 + Astro Migration (2026-05-18)

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

**To add a new page:**
Create `src/pages/[name].astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Page Title — Army Pink">
  <!-- page content -->
</Layout>
```
Nav, footer, crisis banner, quick exit appear automatically.

**Dev server:** `npm run dev` (from project root, serves at localhost:4321)
**Build:** `npm run build` (outputs to `dist/`)

**Figma reference:** Design file at `https://www.figma.com/design/t6QHVTPWJ68j4plig065Yw/Army-Pink?node-id=4-51`. Figma MCP tools now connected (as of 2026-04-07).

**Figma export:** Use "html.to.design" Figma plugin by Builder.io. Serve locally (`npx serve -l 3003` from project dir). Ports 3000-3002 are typically in use.

**Deployment:**
- **Netlify:** Live at `https://zingy-sherbet-559514.netlify.app`
- Deploy command: `netlify deploy --prod` (reads `netlify.toml`, builds and deploys `dist/`)
- Netlify CLI installed globally. `netlify.toml` at project root.
- **GitHub:** Repo `weiyan-design/army-pink` (private). GitHub Pages not available on free plan for private repos.

**Git:**
- Repo: `weiyan-design/army-pink` (private)
- Tag `army_pink_checkin_1.0` — original baseline (2026-03-20)
- Tag `army_pink_checkin_2.0` — redesign with new sections (2026-03-31)
- Always commit before major changes to enable safe reverts
- IMPORTANT: When user says "revert back", clarify scope — they usually mean last few changes, NOT full git checkout to a tag. A full revert wiped uncommitted work once already.

**Remarc:** Review comments managed through Remarc MCP (session "Army Pink", ID `0C239638-AF28-4479-AD28-7565FACF305C`). Check for open comments with `remarc_list_comments`.

---

### Multi-page Build (2026-05-19)

**Three inner pages built** using the wellness portal's design system as the visual foundation. All pages use `Layout.astro` (nav, footer, crisis banner, safe exit auto-included). Content drafted from CLAUDE.md research — placeholder copy where real content is needed (team bios, Discord link, partner logos).

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

**Content gaps to fill in (real content needed):**
- `/mission`: Real team names, bios, headshots; actual impact stats once programs launch
- `/escape-club`: Real Discord invite link; confirm tier pricing and features with leadership
- `/partners`: Vedanta logo/photo; confirm partnership description with them before publishing

**Git:** Committed as `ca7a4a7` — "Add Mission, Escape Club, and Partners pages". Pushed to `weiyan-design/army-pink`.

---

## 7. Recommended Next Steps

### Portal — Immediate
- [ ] Populate Phase 2 and Phase 3 overlays with carousel rows like Phase 1
- [ ] Add actual URLs to overlay resource cards (currently `#` placeholders)
- [ ] Replace Unsplash placeholder images for Kids Meditation and Kids Yoga featured cards
- [ ] Outline co-created "Pathway to Wellness" program with Vedanta
- [ ] Clean up unused class slide-up panel code (HTML/CSS/JS) if not needed
- [ ] Connect Donate panel "continue" button to actual payment flow

### Portal — Design
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
- [ ] Scroll-driven SVG stroke line with flowers (attempted multiple times, z-index issues — needs different approach, possibly per-section SVG segments instead of one global overlay)
- [ ] Sun overlay animation on stories section (attempted, reverted)

### Multi-page Build
- [x] `src/pages/mission.astro` — story, values, team placeholders, stats, CTA
- [x] `src/pages/escape-club.astro` — community intro, 4 tiers, 3-step join flow, CTA
- [x] `src/pages/partners.astro` — philosophy, Vedanta featured, 4 partnership models, CTA
- [ ] `src/pages/wellness-portal.astro` — move current index content here; make index a true homepage
- [ ] `src/pages/donate.astro` — full donation flow (expand current panel into a page)
- [ ] `src/pages/volunteer.astro` — what volunteering looks like, signup form
- [ ] `src/pages/faq.astro` — common questions (safety, privacy, community, rides)
- [ ] `src/pages/contact.astro` — contact form / email
- [ ] `src/pages/perks.astro` — supporter perks by tier
- [ ] Fill real content into mission/escape-club/partners (team bios, Discord link, Vedanta details)

### Discord
- [ ] Build server structure based on channel architecture above
- [ ] Implement guided airlock onboarding flow
- [ ] Set up bot stack (Koko, Confessions Bot, Ticket Tool - see REFERENCE_SERVERS_AND_TOOLS.md)
- [ ] Draft community guidelines with trauma-informed language
- [ ] Create role and permission structure
- [ ] Research LaunchPass integration for paid tiers

### Strategy
- [ ] Present tier structure and revenue model to Army Pink leadership
- [ ] Draft grant narrative connecting Vedanta partnership to clinical outcomes
- [ ] Identify 2-3 corporate sponsor prospects for Champion tier
- [ ] Define success metrics for first 6 months

---

*This document is a living reference. Update as decisions are made and the project evolves.*
