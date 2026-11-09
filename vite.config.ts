import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// Relative base so the built site works from any path (GitHub Pages repo
// sub-path, custom domain, or opened from a folder).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
