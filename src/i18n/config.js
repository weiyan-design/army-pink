// Locale registry — the single source of truth for which languages exist.
// Add a language here + a matching dictionary file in ./ui/, and the whole
// shell (nav, footer, crisis banner, language switcher, hreflang tags) picks
// it up automatically.
export const languages = {
  en: 'English',
  es: 'Español',
};

// English stays at the root ("/about"); other locales get a prefix ("/es/about").
// This must match `defaultLocale` in astro.config.mjs.
export const defaultLang = 'en';
