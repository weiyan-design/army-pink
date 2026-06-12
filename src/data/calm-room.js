// Calm Room video shelves — single source of truth for the Netflix-style rows
// rendered on /wellness-portal (src/pages/wellness-portal.astro).
//
// Shape: an ordered array of shelves; each shelf = { title, videos: [...] }.
// Each video = { title, youtubeId }. youtubeId is the 11-char YouTube ID
// (the part after watch?v=). To add/reorder, just edit this file.
//
// IDs verified 2026-06-04 via title-match search; the crystal-bowls sound bath
// and the 10-min Spanish meditation were supplied directly by Wei. All 20 set.

export const calmRoomShelves = [
  {
    title: 'Return to Center',
    videos: [
      { title: 'Freedom Frequencies — Being the Wind', youtubeId: 'qyZTeZq8jHA' },
      { title: 'Forest Frequencies', youtubeId: '53j2gJ21H9w' },
      { title: 'Ambient Affirmations', youtubeId: 'Q_fyUT7NMWQ' },
    ],
  },
  {
    title: 'Spoken Light',
    videos: [
      { title: '15 Min Meditation To Heal & To Let Go', youtubeId: '58xkaANIAMU' },
      { title: '10 Min Meditation For Inner Peace Through Breathwork', youtubeId: 'V4n5vOalPMc' },
      { title: '15 Min Guided Meditation — Strength & Grounding', youtubeId: 'z0GtmPnqAd8' },
    ],
  },
  {
    title: 'Healing Music',
    videos: [
      { title: 'Healing Angelic Meditation Music', youtubeId: 'MYwyd-RdvXA' },
      { title: 'Calming Meditation — 1 Hour Handpan · Malte Marten', youtubeId: 'uwEaQk5VeS4' },
      { title: '1111hz Light Healing Frequency', youtubeId: 'whI8SZQZOX8' },
      { title: 'Find Peace — Healing Frequency', youtubeId: '6Q5-rHTTe6Q' },
    ],
  },
  {
    title: 'Sound Sanctuary',
    videos: [
      { title: 'Asleep Among Endives — Ichiko Aoba', youtubeId: '9aED02XuLwo' },
    ],
  },
  {
    title: 'Reflective Practices',
    videos: [
      { title: 'Master Your Mindset — 7 Shifts & Habits', youtubeId: 'xaO5Pk6vHH0' },
      { title: 'Self Discovery Exercise — Personal Inspirations Map', youtubeId: 'v1oPsWkcHVY' },
      { title: 'Reflection of Stillness — 1 Hour Calming Harp · Sarah Bhalla', youtubeId: 'L4iBm46m1W0' },
    ],
  },
  {
    title: 'Sound Baths & Sacred Sessions',
    videos: [
      { title: 'Release Anxiety Crystal Bowls 432Hz Sound Bath', youtubeId: 'hms0chui1NM' },
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
    title: 'Mindful Movement',
    videos: [
      { title: 'Yoga For Beginners — Easy Stretch & Stress Release', youtubeId: 'koUi-AgsowQ' },
      { title: 'Easy Yoga For Beginners & Recovery', youtubeId: '6F0l9lVnKdQ' },
      { title: '30 Min Full Body Flow', youtubeId: '6zzeSJxJS4s' },
    ],
  },
];
