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

### Landing Page (Built 2026-03-20, iterated 2026-03-21, refined 2026-03-22)

**Files:**
- `index.html` — page structure and content
- `styles.css` — all styling (mobile-first, responsive)
- `script.js` — mobile menu, breathing exercise, scroll reveals, overlay system, carousel scrolling
- `army pink hero bg.png` — original hero background image (blurred nature scene, not currently in use)
- `army pink hero bg 2.png` — dark illustration hero background (tried and reverted)

**Current page structure (top to bottom):**

1. **Crisis banner** — always visible at top, DV hotline number + text line + thehotline.org link
2. **Nav** — sticky, logo left, links right (Wellness, Community, About, Support Us CTA)
3. **Hero** — full-width nature photo background (Unsplash forest canopy) with subtle sway animation, glassmorphism card holding headline + subtext + two CTA buttons (Pathway to Wellness primary, Visit Community ghost), S-wave bottom edge transitioning to next section
4. **Journey section** ("Where are you right now?") — own section below hero, 3 cards in horizontal row (I just left / I've been out for a while / I'm rebuilding), each with text link labels (Find your footing / Keep going / Build what's yours)
5. **Safety section** ("What you're feeling is normal") — 3 info cards with Lucide icons (cloud-fog, heart, sprout)
6. **Wellness section** ("Pathway to Wellness") — Vedanta partnership, 3 clickable wellness cards (Guided Breathing, Trauma-Informed Yoga, Meditation for Sleep) with Lucide icons (wind, flower-2, moon), each opens its own overlay panel
7. **Community section** — Escape Club, 4 feature cards (Peer Support, Daily Check-Ins, Wellness Events, Moderated & Safe) + left-aligned join CTA
8. **Mission section** — "We don't sell healing. We connect you to it." + 3 values (Safety First, Survivor-Led, No Barriers)
9. **Support section** — donate CTA + 3 supporter tiers ($10 Friend / $50 Escape Club / $100+ Champion)
10. **Footer** — resources, links, copyright

**Overlay system (expanded):**
- Any element with `data-overlay` attribute opens the matching overlay (journey cards + wellness cards)
- Close via X button, backdrop click, or Escape key
- Body scroll locks while overlay is open
- Overlay panels max-width 1120px, centered

**Journey overlays (Phase 1/2/3):**

Phase 1 overlay ("I just left") — fully populated with 3 carousel rows:
- **"Something gentle for your ears"** (5 cards): Fragrant Heart meditation, Insight Timer grounding by Dr. Amelia Kelley, Insight Timer "I Am Safe", Relationship Recovery Podcast EP102, Love and Abuse Podcast
- **"Words that understand"** (5 cards): DomesticShelters.org recovery stages, DomesticShelters.org trauma bonding, Women's Aid Survivor's Handbook, The Hotline self-care tips, The Hotline safety plan
- **"Stories like yours"** (5 cards): Leslie Morgan Steiner TED Talk, Chiara Lisowski TEDx, Dr. Ramani YouTube, Hannah Petrillo TEDx, Insight Timer grounding exercise

Phase 2 overlay — intro text + 3 info cards + resource links. Carousel rows NOT yet added.

Phase 3 overlay — intro text + 3 info cards + resource links. Carousel rows NOT yet added.

**Wellness overlays (new in this session):**

Guided Breathing overlay — interactive box breathing exercise at top + 5 resource cards:
- Box Breathing, 5 Minute Stress Relief, 4-7-8 Calming Breath, Grounding Breathwork for Flashbacks, Morning Reset: 3 Minutes to Start Your Day

Trauma-Informed Yoga overlay — 3 grouped sections:
- Empowering Series (5 classes): Survivor Series, Calm in the Chaos, Busy Place Quiet Mind, Back to the Mat, Inner Strength Series
- Calm and Strong Kids (2 classes): Kids Meditation, Kids Yoga
- Wellness Programs with Bursaries (3 programs): Mindful about Menopause, Let Go of Anxiety, Vibrant: Inflammatory Lifestyle

Meditation for Sleep overlay — 5 resource cards:
- Yoga Nidra, Yoga Class for Sleep, Body Scan for Letting Go, Rain Sounds with Gentle Guidance, Safe Place Visualization

**Carousel card design (updated):**
- Tall portrait layout (220x280px) with gradient color backgrounds (unique per card)
- Dark bottom gradient overlay for text readability
- White text pinned to bottom (category label, bold title, source)
- Hover: lifts 6px, scales 1.02x, deepens shadow

**Card styling (all cards site-wide):**
- Background: `rgba(245, 239, 230, 0.3)` (off-white at 30% opacity)
- 1px border with beige-dark color
- Hover effects on interactive cards (lift + shadow + pink border)

**Icons:** All icons use Lucide (loaded via CDN unpkg). Icons used:
- cloud-fog (safety: the fog), heart (safety: missing them), sprout (safety: healing)
- wind (wellness: breathing), flower-2 (wellness: yoga), moon (wellness: sleep)

**Design decisions made (cumulative):**
- Quick exit button and Esc-to-exit were removed by user from the main page (kept only crisis banner)
- Hero iterated multiple times: tried blurred landscape bg, dark illustration bg, gradient bg, finally settled on Unsplash forest canopy with glassmorphism text card
- Journey section moved out of hero into its own section with horizontal card layout
- Mission section moved after Community, before Support (survivor-facing content first, org info later)
- Nav order: Wellness, Community, About, Support Us (matches page flow)
- Carousel row labels changed from generic (Audio/Reading/Video) to emotional ("Something gentle for your ears" / "Words that understand" / "Stories like yours")
- Journey cards got text link labels: "Find your footing" / "Keep going" / "Build what's yours"
- Box breathing exercise moved from main wellness section into the Guided Breathing overlay panel
- Community CTA and journey note left-aligned (not centered)
- Em dashes replaced with hyphens throughout

**Figma export:** Use "html.to.design" Figma plugin by Builder.io. Serve the page locally (`npx serve -l 3003` from project dir) and paste `http://localhost:3003` into the plugin. Ports 3000-3002 are typically in use on this machine.

---

## 7. Recommended Next Steps

### Portal — Immediate
- [ ] Populate Phase 2 and Phase 3 overlays with carousel rows like Phase 1
- [ ] Add actual URLs to all resource card `href` attributes (currently `#` placeholders)
- [ ] Add actual URLs to wellness overlay card `href` attributes (Vedanta class links)
- [ ] Outline co-created "Pathway to Wellness" program with Vedanta
- [ ] Deploy to public URL for stakeholder review

### Portal — Design
- [x] Draft portal wireframe with the four-layer structure
- [x] Design self-assessment question flow
- [x] Define quick-exit button implementation
- [x] Map Vedanta content to embed in Layer 2 (intro meditation/breathing exercise)
- [x] Hero design with glassmorphism + nature background
- [x] Wellness cards with overlay panels for Vedanta classes
- [x] Carousel card redesign (portrait, gradient, hover effects)

### Discord
- [ ] Build server structure based on channel architecture above
- [ ] Implement guided airlock onboarding flow
- [ ] Set up bot stack (Koko, Confessions Bot, Ticket Tool — see REFERENCE_SERVERS_AND_TOOLS.md)
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
