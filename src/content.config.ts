import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string(),
  }),
});

export const collections = { reports, events };