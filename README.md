# crackbot.in

Website of Crackbot, an independent security research group.

Static [Astro](https://astro.build) site, deployed on Vercel. The only script is a small self-hosted theme toggle.

```bash
npm ci          # install exactly what's in the lockfile (install scripts disabled)
npm run dev     # local dev server
npm run build   # build to dist/
npm audit       # check dependencies
```

## Publishing research
Add a Markdown file to `src/content/research/`:

```md
---
title: "Title"
summary: "One or two sentences."
date: 2026-11-01
topic: malware   # vulnerabilities | malware | intelligence | forensics | notes
kind: Analysis   # Report | Advisory | Analysis | Note
findings:
  - "Optional key point"
draft: true      # drafts are hidden in production
---
```

Open a PR; Vercel builds a preview. Merge to `main` to publish.

## Security
See [the disclosure policy](https://crackbot.in/disclosure/) and `public/.well-known/security.txt`. Security headers are set in `vercel.json`.
