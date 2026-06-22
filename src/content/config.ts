import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Per-locale file convention: <collection>/<slug>.<locale>.md  (e.g. networking.th.md)
// In Astro 5 the entry `id` is derived from the filename → e.g. "networking.th".
// Parse `slug` and `locale` from the id with parseEntryId() (src/lib/content.ts).
//
// NOTE: `slug` is a RESERVED field name in content schemas — do not declare it.
// `locale` is kept in frontmatter (CMS-friendly) but is also recoverable from id.

const localeEnum = z.enum(['th', 'en']);

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      locale: localeEnum,
      icon: z.string().default('network'),
      summary: z.string(),
      order: z.number().default(0),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      locale: localeEnum,
      client: z.string(),
      sector: z.enum(['gov', 'edu', 'private']),
      year: z.number(),
      summary: z.string(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { services, projects };
