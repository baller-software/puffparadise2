import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/puffparadise2',
  vite: {
    plugins: [tailwindcss()],
  },
});
