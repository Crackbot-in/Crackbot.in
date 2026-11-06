import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const TOPICS = ['vulnerabilities', 'malware', 'intelligence', 'forensics', 'notes'] as const;

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    topic: z.enum(TOPICS),
    kind: z.enum(['Report', 'Advisory', 'Analysis', 'Note']).default('Note'),
    authors: z.array(z.string()).default(['Crackbot Research']),
    tlp: z.enum(['CLEAR', 'GREEN']).default('CLEAR'),
    findings: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { research };
