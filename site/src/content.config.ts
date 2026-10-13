import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// The entry pages carry more front matter (finder values, needs-confirming notes, links …) than
// Starlight uses. Starlight's schema drops keys it doesn't know, which is fine: the finder reads
// its own data files (public/data/), made by ../tools/export_finder.py.
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
