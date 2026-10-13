// Site for the Encyclopaedia of Connections (P4: Astro + Starlight, static, for GitHub Pages).
// The entry pages, family pages, glossary and finder data are copied in by ../tools/sync_site.py
// (run by `npm run build` and `npm run dev`); see ../site/README.md.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'node:fs';

const base = process.env.SITE_BASE ?? '/EncyclopediaOfConnections';
const sidebar = JSON.parse(fs.readFileSync(new URL('./src/sidebar.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://smileymcfrown.github.io',
  base,
  integrations: [
    starlight({
      title: 'The Encyclopaedia of Connections',
      description: 'Every way to join, move, lock and adjust parts, for hobbyist makers, with a guided finder.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/smileymcfrown/EncyclopediaOfConnections' },
      ],
      sidebar,
      customCss: ['./src/styles/custom.css'],
      lastUpdated: false,
    }),
  ],
});
