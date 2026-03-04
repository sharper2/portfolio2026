import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    itchLink: z.string().optional(),
  })
});

export const collections = { projects };