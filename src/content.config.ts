import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      category: z.enum(['web', 'saas', 'local-first']),
      categoryLabel: z.string(),
      client: z.string(),
      status: z.string(),
      order: z.number().default(0),
      featured: z.boolean().default(false),
      summary: z.string(),
      problem: z.string(),
      solution: z.string(),
      results: z.array(z.string()),
      metrics: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      ),
      stack: z.array(z.string()),
      screenshot: image().optional(),
      screenshotAlt: z.string().optional(),
      liveUrl: z.string().url().optional(),
      embedDemo: z.boolean().default(false),
      interactiveWidget: z.enum(['none', 'warehouse', 'kds']).default('none'),
      serviceInterest: z.string(),
    }),
});

export const collections = {
  products,
};
