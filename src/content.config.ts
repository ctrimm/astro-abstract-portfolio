import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().max(160),
    thumbnail: z.string(),
    heroImage: z.string().optional(),
    category: z.enum(['web-design', 'branding', 'development', 'mobile', 'ui-ux']),
    technologies: z.array(z.string()),
    client: z.string().optional(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    publishDate: z.coerce.date(),
    completedDate: z.coerce.date().optional(),
    gallery: z.array(z.string()).optional(),
    testimonial: reference('testimonials').optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: file('src/content/testimonials/testimonials.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    content: z.string(),
    avatar: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    projectId: z.string().optional(),
  }),
});

export const collections = { projects, blog, testimonials };
