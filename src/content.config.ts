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
    image: z.string().optional(),
    live: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,json}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string().default(''),
    venue: z.string().default(''),
    volume: z.string().default(''),
    pages: z.string().default(''),
    editors: z.string().default(''),
    publisher: z.string().default(''),
    isbn: z.string().default(''),
    date: z.string(),
    url: z.string().default(''),
  }),
});

const prizes = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,json}', base: './src/content/prizes' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string().default(''),
    date: z.string(),
    description: z.string().default(''),
    url: z.string().default(''),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,json}', base: './src/content/certifications' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    credentialId: z.string().default(''),
    url: z.string().default(''),
  }),
});

const references = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,json}', base: './src/content/references' }),
  schema: z.object({
    name: z.string(),
    role: z.string().default(''),
    relationship: z.string().default(''),
    date: z.string(),
    text: z.string(),
    linkedinUrl: z.string().default(''),
    order: z.number().default(0),
    avatar: z.string().optional(),
  }),
});

export const collections = {
  posts,
  experience,
  education,
  projects,
  publications,
  prizes,
  certifications,
  references,
};
