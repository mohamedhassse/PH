import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Progetto Happiness',
      // Configurazione base garantita
    })
  ],
  output: 'static' // Aggiungi questa riga
});
