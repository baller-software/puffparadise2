import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/puffparadise',
  vite: {
    plugins: [tailwindcss()],
  },
});
