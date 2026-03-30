# Reference Servers, Bots & Best Practices

Research for the Escape Club Discord build.

---

## Reference Communities

### The Haven (Closest Model)
- **What**: 18+ peer support mental health Discord, registered 501(c)(3) nonprofit, volunteer-run since 2017
- **Why it matters**: Nonprofit running a Discord with volunteer peer supporters, private 1:1 support, and group support channels — structurally closest to what Escape Club should be
- **Key features**: 1:1 private chat requests, group support channels, resource channels, clear nonprofit governance
- **Links**: https://thehaven.support/ · https://thehavenmh.org/

### 5WAVES (Best Safety Model)
- **What**: Private Discord for survivors of sibling sexual abuse/trauma
- **Why it matters**: Best-in-class screening process — members must email with screening questions answered before receiving an invite. Channels segmented by relationship to trauma (survivor vs. parent vs. supporter)
- **Takeaway**: Adopt a human-vetting layer before granting Discord access. Don't rely on Discord verification alone.
- **Link**: https://www.5waves.org/discord-support-community

### Star Haven
- **What**: Discord support network for survivors of domestic violence, sexual violence, and abuse
- **Why it matters**: Directly analogous to Escape Club's mission — worth joining to observe channel structure and moderation
- **Link**: Listed on DISBOARD under abuse tag

### DomesticShelters.org (Safety Practices)
- **What**: Aggregation of online DV support forums and safety guidelines
- **Why it matters**: Key anonymity practices to codify in Escape Club's onboarding: never use real name/contact info, practice safe browsing
- **Link**: https://www.domesticshelters.org/resources/online-forums-and-chats

---

## Common Channel Structure Across Support Servers

| Category | Channels | Notes |
|----------|----------|-------|
| **Welcome / Info** | rules, resources, crisis-hotlines, faq, introductions | First thing members see |
| **Support / Venting** | venting, check-ins, peer-support, Q&A | Some servers segment by topic |
| **Anonymous** | anonymous-vent, confessions | Via bot, often with mod approval |
| **Private 1:1** | ticket-based channels | Only visible to member + support staff |
| **Wellness** | daily-affirmations, journaling-prompts, gratitude, self-care | Scheduled prompts via bot |
| **Community / Social** | off-topic, music, food, games, media | Builds connection beyond crisis |

---

## Recommended Bots

### Koko Bot — Crisis Detection & Anonymous Support (TOP PICK)
- Free, nonprofit, privacy-focused
- Auto-detects distress in messages and DMs support resources
- Creates anonymous vent channels
- Connects users to real human peer supporters
- Setup: `/setup` (takes ~2 min)
- **Link**: https://pages.kokocares.org/discord/

### Confessions Bot — Anonymous Posting
- Members use `/confess` to post anonymously
- **Critical feature**: vetting/approval mode routes submissions to mod channel before posting
- Prevents abuse of anonymous system while preserving survivor privacy
- **Link**: https://confessions.bot/

### Ticket Tool — Private 1:1 Support
- Creates private channels visible only to the member + authorized support staff
- Transcript logging for accountability
- **Link**: https://tickettool.xyz/

### RTS Bot — On-Demand Crisis Resources
- Quick-access to mental health and crisis resource library
- Can surface hotline numbers, safety planning links, DV shelter info on command
- **Link**: https://rts.guardiansmh.org/discord/

### AutoMod (Built-in Discord)
- Custom keyword filters for: graphic content without CW, accidentally shared personal info (addresses, phone numbers), threatening language
- Can flag for mod review rather than auto-delete (preserves evidence)
- **Link**: https://support.discord.com/hc/en-us/articles/4421269296535-AutoMod-FAQ

### MEE6 — General Moderation
- Auto-moderation, welcome messages, reaction roles for verification gates
- **Link**: https://mee6.xyz/

---

## Discord Safety Settings to Enable

| Setting | What It Does | Why |
|---------|-------------|-----|
| **Verification Level: High+** | Requires verified email + 10 min wait | Deters bad actors |
| **Rules Screening** | Members must agree to rules before interacting | Consent layer before access |
| **Community Onboarding** | Route members by role (survivor, supporter, professional) | Personalized experience |
| **Explicit Content Filter** | Scan media from ALL members | Prevents graphic/harmful images |
| **Raid Protection** | Auto-detects mass-join events | Protects against coordinated attacks |
| **2FA for Mods** | Requires two-factor auth for mod actions | Prevents compromised accounts from exposing survivor data |
| **DM Restrictions** | Recommend members disable DMs from server members | Prevents unsolicited contact; route through ticket system |

**Link**: https://discord.com/safety/360043653152-four-steps-to-a-super-safe-server

---

## Recommended Access Model

Based on 5WAVES and The Haven patterns:

```
External screening (email/form)
  → Discord invite sent
    → Verification level (High)
      → Rules Screening (agree to guidelines)
        → Community Onboarding (self-identify role)
          → Tiered channel access
```

### Role Tiers
1. **New Member** — sees welcome/info channels only
2. **Verified Member** — passed screening, sees community channels
3. **Full Member** — time-based or mod-granted, sees support channels
4. **Peer Supporter** — trained volunteer, can respond in support channels + tickets
5. **Moderator** — full moderation powers, 2FA required
6. **Admin** — server management, Army Pink staff

---

## Key Sources
- Discord Mental Health Guide: https://discord.com/safety/considering-mental-health-in-your-community
- Discord Server Security: https://discord.com/community/securing-your-server
- Community Onboarding: https://support.discord.com/hc/en-us/articles/11074987197975
- Rules Screening: https://support.discord.com/hc/en-us/articles/1500000466882
- Linked Roles: https://support.discord.com/hc/en-us/articles/10388356626711
- The Hive Index (Mental Health Discords): https://thehiveindex.com/topics/mental-health/platform/discord/
