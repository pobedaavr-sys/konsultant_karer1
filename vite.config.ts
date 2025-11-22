import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path so the app works in any subdirectory (e.g. /konsultant_karer1/)
  base: './',
});