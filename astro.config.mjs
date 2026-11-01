// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://guide.stimmie.dev',
  prefetch: true,
  integrations: [sitemap({ filter: (page) => !/\/(freshie|hackathons|resume)\/guide\/$/.test(page) })],
});
