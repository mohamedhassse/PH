import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Progetto Happiness',
      // Configurazione semplificata (versione compatibile)
      theme: {
        colors: {
          primary: '#1e88e5', // Azzurro-blu
          background: '#ffffff' // Bianco
        }
      }
    })
  ]
});
