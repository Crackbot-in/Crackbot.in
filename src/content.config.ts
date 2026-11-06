import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const TOPICS = ['vulnerabilities', 'malware', 'intelligence', 'forensics', 'notes'] as const;

// An author is either a plain name ("Crackbot Research") or { name, url }.
// Use a handle such as "Researcher" to stay anonymous; the link is optional.
const author = z.union([
  z.string(),
  z.object({
    name: z.string(),
    url: z.string().url().optional(),
  }),
]);

const research = defineCollection({
  // Files starting with "_" (e.g. _TEMPLATE.md) are ignored.
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/research' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      topic: z.enum(TOPICS),
      kind: z.enum(['Report', 'Advisory', 'Analysis', 'Note']).default('Note'),
      authors: z.array(author).default(['Crackbot Research']),
      tlp: z.enum(['CLEAR', 'GREEN']).default('CLEAR'),
      findings: z.array(z.string()).optional(),
      // Optional cover image, path relative to the .md file, e.g. ./images/my-report/cover.png
      // Without one, the post gets generated cover art for its topic.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { research };
