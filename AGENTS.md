# Crackbot website — agent notes

Static Astro site for crackbot.in. Deployed by Vercel on every push to `main`; other branches get preview URLs.

## Hard rules (security)
- **Static only.** `output: 'static'`. No SSR, API routes, middleware, forms, auth, databases or cookies on this site. Anything dynamic (CRM, dashboards) is a separate app on its own subdomain.
- **No client JavaScript.** The CSP in `vercel.json` sets `script-src 'none'`. Don't add `<script>`, islands, analytics or third-party embeds.
- **No inline styles.** CSP is `style-src 'self'`. Put CSS in `src/styles/global.css`; don't use `style=""` or `define:vars`.
- **No external requests.** No CDN fonts, images or scripts. Fonts are system stacks; images are local SVG.
- **Dependencies:** only `astro`. Add a package only with a strong reason. Versions are pinned exactly (`.npmrc` save-exact, ignore-scripts). Prefer releases at least 2 weeks old. Run `npm audit` before merging.

## Layout
- `src/content/research/*.md` — research posts (schema in `src/content.config.ts`).
- `src/data/site.ts` — site facts, nav, topics, principles. Only real, monitored addresses.
- `src/components/Plate.astro` — generated cover art per post (seeded by slug).
- `public/.well-known/security.txt` — renew `Expires` before 2027-11-07.

## Writing style
Plain, specific, first-person plural. No hype ("cutting-edge", "next-gen", "immutable"), no claims we can't back with published work.
