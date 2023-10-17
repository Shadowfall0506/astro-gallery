import { defineCollection, z } from 'astro:content';

const planetCollection = defineCollection({
    type: 'content',
    schema: ({image}) => 
        z.object({
        author: z.string(),
        categories: z.string(),
        types: z.string(),
        date: z.string(),
        image: image(),
        title: z.string() 
    }),
});

export const collections = {
    planets: planetCollection,
};