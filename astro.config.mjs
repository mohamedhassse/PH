import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Progetto Happiness',
      // Aggiungi queste sezioni:
      components: {
        // Nascondi elementi non necessari
        PageTitle: false,
      },
      css: {
        // Colori personalizzati (es. blu aziendale)
        theme: {
          light: {
            '--sl-color-accent-low': '#e0f2fe',
            '--sl-color-accent': '#0369a1',
          },
        }
      },
      // Riduci la sidebar
      sidebar: {
        collapsed: true,
      },
    }),
  ],
});
