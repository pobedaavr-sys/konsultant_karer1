import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВАЖНО: Имя репозитория должно совпадать с названием на GitHub
  // Я взял его из ссылок на картинки, которые были в коде
  base: '/is-odniki_sait_viki/',
});