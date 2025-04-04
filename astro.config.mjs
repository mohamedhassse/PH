import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Progetto Happiness',
      css: {
        theme: {
          light: {
            // Colori principali (bianco/azzurro-blu)
            '--sl-color-white': '#ffffff',
            '--sl-color-gray-1': '#f8fafc',
            '--sl-color-gray-5': '#e2e8f0',
            '--sl-color-accent': '#1e88e5',  // Azzurro-blu
            '--sl-color-accent-low': '#bbdefb', // Azzurro chiaro
            '--sl-color-text': '#1e293b',
          },
          dark: {
            // Versione dark (opzionale)
            '--sl-color-accent': '#42a5f5',
            '--sl-color-accent-low': '#0d47a1',
          }
        }
      },
      components: {
        // Semplifica l'header
        Header: './src/components/CustomHeader.astro',
      },
    }),
  ],
});
