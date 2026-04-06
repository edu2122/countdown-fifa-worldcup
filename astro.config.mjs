// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://countdown-worldcup.example.com',
  integrations: [sitemap()],
  i18n: {
    locales: ['es', 'en', 'fr'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
