import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/works/plainspeak/',
  outDir: 'dist',
  build: {
    assets: 'assets',
  },
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
