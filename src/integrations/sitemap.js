import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function sitemap() {
  let siteUrl = 'https://crackbot.in';

  return {
    name: 'sitemap',
    hooks: {
      'astro:config:done': ({ config }) => {
        const siteRaw = /** @type {any} */ (config)?.site;
        if (siteRaw) {
          try {
            siteUrl = new URL(siteRaw).href.replace(/\/$/, '');
          } catch {
            siteUrl = String(siteRaw).replace(/\/$/, '');
          }
        }
      },
      'astro:build:done': async ({ pages, dir }) => {
        const urls = [...new Set(
          pages.map((p) => {
            const pathname = p.pathname ?? '';
            const isFile = /\.[a-z0-9]+$/i.test(pathname);
            const endsWithSlash = pathname === '' || pathname.endsWith('/');
            const slug = endsWithSlash || isFile ? pathname : `${pathname}/`;
            return `${siteUrl}/${slug}`;
          })
        )].sort();

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;

        const outDir = fileURLToPath(dir);
        await fs.writeFile(path.join(outDir, 'sitemap.xml'), xml, 'utf-8');
        await fs.writeFile(
          path.join(outDir, 'sitemap-index.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${siteUrl}/sitemap.xml</loc></sitemap>\n</sitemapindex>`,
          'utf-8'
        );
      },
    },
  };
}