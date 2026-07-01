// Calm Room video shelves — single source of truth for the tabbed video grid
// rendered on /wellness-portal (src/pages/wellness-portal.astro).
//
// Shape: an ordered array of shelves; each shelf = { title, videos: [...] }.
// Each video = { title, youtubeId, cover? }:
//   - youtubeId : the 11-char YouTube ID (the part after watch?v=)
//   - cover     : optional path to a custom portrait image in /public/img/.
//                 When present the card uses it; otherwise it falls back to the
//                 YouTube thumbnail (maxresdefault → mqdefault).
//
// Shelf titles become the filter chips (an "All" chip is prepended in the page).
// 24 videos across 5 categories. To add/reorder, just edit this file.

export const calmRoomShelves = [
  {
    title: 'Sound Sanctuary',
    videos: [
      { title: 'Find Peace — Healing Frequency', youtubeId: '6Q5-rHTTe6Q', featured: true, cover: '/img/calm-find-peace.jpg' },
      { title: 'Freedom Frequencies — Being the Wind', youtubeId: 'qyZTeZq8jHA' },
      { title: 'Forest Frequencies', youtubeId: '53j2gJ21H9w' },
      { title: 'Ambient Affirmations', youtubeId: 'Q_fyUT7NMWQ' },
      { title: 'Calming Meditation — 1 Hour Handpan · Malte Marten', youtubeId: 'uwEaQk5VeS4' },
      { title: 'Reflection of Stillness — 1 Hour Calming Harp · Sarah Bhalla', youtubeId: 'L4iBm46m1W0' },
      { title: 'Asleep Among Endives — Ichiko Aoba', youtubeId: '9aED02XuLwo' },
      { title: 'Healing Angelic Meditation Music', youtubeId: 'MYwyd-RdvXA' },
      { title: '1111hz Light Healing Frequency', youtubeId: 'whI8SZQZOX8' },
      { title: 'EMDR Bilateral Music — Calm Fight-or-Flight', youtubeId: 'jgMH89btVQA', cover: '/img/calm-emdr-bilateral.jpg' },
      { title: 'Psoas Frequency Healing — Release Stored Trauma', youtubeId: 'UUC-3YhCwKo', cover: '/img/calm-psoas-frequency.jpg' },
      { title: 'Release Anxiety Crystal Bowls 432Hz Sound Bath', youtubeId: 'hms0chui1NM' },
    ],
  },
  {
    title: 'Meditation',
    videos: [
      { title: '15 Min Meditation To Heal & To Let Go', youtubeId: '58xkaANIAMU' },
      { title: '10 Min Meditation For Inner Peace Through Breathwork', youtubeId: 'V4n5vOalPMc' },
      { title: '15 Min Guided Meditation — Strength & Grounding', youtubeId: 'z0GtmPnqAd8' },
      { title: 'Hypnosis for Unconscious Positivity · Michael Sealey', youtubeId: 'rxymTnK0LA4', cover: '/img/calm-hypnosis-sealey.jpg' },
    ],
  },
  {
    title: 'Movement',
    videos: [
      { title: 'Yoga For Beginners — Easy Stretch & Stress Release', youtubeId: 'koUi-AgsowQ' },
      { title: 'Easy Yoga For Beginners & Recovery', youtubeId: '6F0l9lVnKdQ' },
      { title: '30 Min Full Body Flow', youtubeId: '6zzeSJxJS4s' },
    ],
  },
  {
    title: 'Sanación Española',
    videos: [
      { title: 'Meditación Guiada — Relajación', youtubeId: 'ue9fs4ticOo', cover: '/img/calm-meditacion-guiada.jpg' },
      { title: 'Meditación en Español en 10 Minutos', youtubeId: 'N3W1jWcpIBs' },
      { title: 'Meditación para la Mañana — 25 min', youtubeId: '4uoC6QbjwJ8', cover: '/img/calm-meditacion-manana.jpg' },
    ],
  },
  {
    title: 'Wisdom',
    videos: [
      { title: 'Master Your Mindset — 7 Shifts & Habits', youtubeId: 'xaO5Pk6vHH0' },
      { title: 'Self Discovery Exercise — Personal Inspirations Map', youtubeId: 'v1oPsWkcHVY' },
    ],
  },
];
