import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(), // We can use emojis or SVG paths later
    order: z.number().default(0),
  }),
});

export const collections = {
  'services': servicesCollection,
};
