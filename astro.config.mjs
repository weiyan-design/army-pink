import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      // English keeps the bare URLs ("/mission"); Spanish is prefixed ("/es/mission").
      prefixDefaultLocale: false,
    },
  },
});
