---
# HOW TO USE THIS TEMPLATE
# 1. Copy this file into this folder and rename it, e.g. `qakbot-loader-2026.md`.
#    The file name becomes the address: crackbot.in/research/qakbot-loader-2026/
#    Files starting with "_" (like this one) are never published.
# 2. Fill in the fields below. Lines starting with # are comments; delete them if you like.
# 3. Keep `draft: true` while writing. Drafts show on your computer (npm run dev) but not on the live site.
# 4. Open a pull request. Vercel builds a private preview. Merge to main to publish.

title: "Short, specific title"
summary: "One or two sentences that say what you found. Shown in lists, search results and RSS."
date: 2026-11-08
# updated: 2026-11-20          # optional, add when you revise a published post

# One of: vulnerabilities | malware | intelligence | forensics | notes
topic: malware
# One of: Report | Advisory | Analysis | Note
kind: Analysis
# TLP:CLEAR = anyone may share it. TLP:GREEN = community only.
tlp: CLEAR

# Authors: a plain name, or a name with a link. Stay anonymous with a handle like "Researcher".
authors:
  - "Crackbot Research"
  - name: "Researcher"
  - name: "Your Name"
    url: "https://github.com/your-username"

# Optional "Key points" box at the top of the post.
findings:
  - "The first thing a reader should take away."
  - "The second thing."

# Optional cover image. Put images in ./images/<post-name>/ next to this file.
# Without a cover, the post gets generated cover art for its topic.
# cover: ./images/qakbot-loader-2026/cover.png
# coverAlt: "Describe what the image shows, for screen readers."

draft: true
---

Start with a short paragraph: what this is, who it affects, and the one thing defenders should do.

## Background

Context the reader needs. Link to sources: [vendor advisory](https://example.com).

## Analysis

Explain what you did and what you saw. Images sit next to the post and are referenced relatively:

![Process tree of the loader](./images/qakbot-loader-2026/process-tree.png)

Code and commands go in fenced blocks:

```powershell
Get-FileHash .\sample.bin -Algorithm SHA256
```

## Indicators of compromise

| Type   | Value                                                              | Note          |
| ------ | ------------------------------------------------------------------ | ------------- |
| SHA256 | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | loader        |
| Domain | `x.test`                                                           | C2, defanged  |

Defang network indicators (`x[.]test`, `hxxp://`) so nobody clicks them by accident.

## Detection

Rules, queries or log sources that catch this.

## Mitigation

What to patch, block or change.

## Timeline

- 2026-10-01: Found
- 2026-10-02: Reported to vendor
- 2026-11-08: Published
