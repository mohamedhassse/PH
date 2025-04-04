import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Progetto Happiness',
      logo: {
        src: './src/assets/logo.png', 
      },
    })
  ]
});
