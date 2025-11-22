import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base set to './' allows the app to be deployed to any subdirectory (like GitHub Pages)
  // without breaking asset links.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});