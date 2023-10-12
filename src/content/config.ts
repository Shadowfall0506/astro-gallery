import { z, defineCollection } from 'astro:content';

const planetCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        category: z.string(),
        date: z.string(),
        featured: z.string(),
        image: z.string(),
        title: z.string() 
    }),
});

export const collections = {
    planets: planetCollection,
};