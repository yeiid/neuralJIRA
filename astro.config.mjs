// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://neuraljira.tech',
  integrations: [sitemap()],
  compressHTML: true,
  image: {
    responsiveStyles: false,
  },
});
