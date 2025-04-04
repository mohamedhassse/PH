import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Configurazione MINIMALE garantita
export default defineConfig({
  integrations: [
    starlight({
      title: 'Progetto Happiness',
      customCss: ['./src/styles/custom.css'], // Opzionale per i colori
    })
  ]
});
