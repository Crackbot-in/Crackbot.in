import type { APIRoute } from 'astro';
import { SITE, TOPICS } from '../data/site';
import { getResearch } from '../data/research';

export const GET: APIRoute = async () => {
  const posts = await getResearch();
  const paths = [
    '/',
    '/research/',
    '/about/',
    '/disclosure/',
    '/contact/',
    '/privacy/',
    ...Object.keys(TOPICS).map((t) => `/research/topic/${t}/`),
  ];
  const lastmod = new Map(posts.map((p) => [`/research/${p.id}/`, (p.data.updated ?? p.data.date).toISOString().slice(0, 10)]));
  paths.push(...lastmod.keys());
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE.url}${p}</loc>${lastmod.has(p) ? `<lastmod>${lastmod.get(p)}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
