# Archived Wellness Portal sub-pages — 2026-06-04

These were the three "room" sub-pages of the old 3-arch coverflow hub, orphaned
when `/wellness-portal` became the single "Calm Room" sanctuary page. Nothing
external linked to them; only `WellnessSubpageShared.astro` (the door-switcher)
cross-linked them. Not built by Astro while under `_archive/`.

Files (their import paths are written for their ORIGINAL locations, so a straight
move back restores them):

| File | Restore to |
|---|---|
| `calm-room.astro` | `src/pages/wellness-portal/calm-room.astro` |
| `library.astro` | `src/pages/wellness-portal/library.astro` |
| `wellness-experiences.astro` | `src/pages/wellness-portal/wellness-experiences.astro` |
| `WellnessSubpageShared.astro` | `src/components/WellnessSubpageShared.astro` |

To restore: move the four files back to the paths above (recreate the
`src/pages/wellness-portal/` directory) and re-add the coverflow hub hero from
`src/_archive/wellness-portal-coverflow-hero.astro`, which is what linked into them.
