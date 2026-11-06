import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { sitemap } from './src/integrations/sitemap.js';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  site: 'https://crackbot.in'
});