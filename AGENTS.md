# Crackbot website — agent notes

Static Astro site for crackbot.in. Deployed by Vercel on every push to `main`; other branches get preview URLs.

## Hard rules (security)
- **Static only.** `output: 'static'`. No SSR, API routes, middleware, forms, auth, databases or cookies on this site. Anything dynamic (CRM, dashboards) is a separate app on its own subdomain.
- **Almost no client JavaScript.** The only script is `public/theme.js` (theme toggle). CSP is `script-src 'self'`: no inline scripts, islands, analytics or third-party embeds.
- **Animations are SVG/CSS only** and must stay hidden or still under `prefers-reduced-motion`.
- **No inline styles.** CSP is `style-src 'self'`. Put CSS in `src/styles/global.css`; don't use `style=""` or `define:vars`.
- **No external requests.** No CDN fonts, images or scripts. Fonts are system stacks; images are local SVG.
- **Dependencies:** only `astro`. Add a package only with a strong reason. Versions are pinned exactly (`.npmrc` save-exact, ignore-scripts). Prefer releases at least 2 weeks old. Run `npm audit` before merging.

## Layout
- `src/content/research/*.md` — research posts (schema in `src/content.config.ts`).
- `src/data/site.ts` — site facts, nav, topics, principles. Only real, monitored addresses.
- `src/components/Plate.astro` — generated cover art per post (seeded by slug).
- `public/.well-known/security.txt` — renew `Expires` before 2027-11-07.

## Writing style
Plain, modest, first-person plural. No em dashes. No hype or grand claims. Keep policies short. Public emails are support@ and researcher@ only; never put admin@ or development@ on the site.

## Artwork
- `HeroFigure.astro`: hex dump + detection rule, animated (8s loop).
- `Plate.astro`: per-topic cover art seeded by slug. Animation timing uses `.d0`-`.d15` (0.5s steps) in global.css.
- Animations are SVG (SMIL) + CSS only. Not GIFs, no JS.

## Analytics
GoatCounter via a cookie-free pixel, set `goatcounter` in `src/data/site.ts` and add the GoatCounter host to `img-src` in the CSP. No other trackers.
