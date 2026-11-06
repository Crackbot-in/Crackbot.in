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
    ...Object.keys(TOPICS).map((t) => `/research/topic/${t}/`),
    ...posts.map((p) => `/research/${p.id}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE.url}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
