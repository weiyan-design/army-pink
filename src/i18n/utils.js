import { languages, defaultLang } from './config.js';
import { en } from './ui/en.js';
import { es } from './ui/es.js';

// All dictionaries, keyed by locale code.
const dictionaries = { en, es };

/** Coerce anything (Astro.currentLocale, a stray value, undefined) to a known locale. */
export function getLangFromLocale(locale) {
  return locale && Object.prototype.hasOwnProperty.call(languages, locale) ? locale : defaultLang;
}

/**
 * Returns a `t('some.key')` lookup bound to `lang`.
 * Missing keys fall back to English, then to the raw key — so a half-translated
 * es.js still renders (English where Spanish is absent) instead of blowing up.
 */
export function useTranslations(lang) {
  const code = getLangFromLocale(lang);
  return function t(key) {
    return dictionaries[code]?.[key] ?? dictionaries[defaultLang][key] ?? key;
  };
}

/** Build the URL for `path` in `lang`: en -> "/path", es -> "/es/path". */
export function localizedPath(path, lang) {
  let clean = path.startsWith('/') ? path : `/${path}`;
  clean = clean.replace(/\/$/, '') || '/';
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

/** Strip any locale prefix off a pathname, giving the language-agnostic route. */
export function stripLocale(pathname) {
  let p = pathname.replace(/\/$/, '') || '/';
  for (const code of Object.keys(languages)) {
    if (code === defaultLang) continue;
    if (p === `/${code}` || p.startsWith(`/${code}/`)) {
      p = p.slice(code.length + 1) || '/';
      break;
    }
  }
  return p;
}
