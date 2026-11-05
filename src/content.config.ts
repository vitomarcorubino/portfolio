import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['it', 'en']),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,json}', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    descriptionIt: z.string(),
    descriptionEn: z.string(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,json}', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    grade: z.string(),
    thesis: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,json}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    metric: z.string(),
    stack: z.string(),
    summaryIt: z.string().default(''),
    summaryEn: z.string().default(''),
    repo: z.string().optional(),
    paper: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { posts, experience, education, projects };