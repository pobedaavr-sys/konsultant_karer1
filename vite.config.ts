import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВАЖНО: Если вы выкладываете сайт в папку репозитория (например, https://user.github.io/my-site/),
  // раскомментируйте строку ниже и замените 'my-site' на название вашего репозитория:
  // base: '/my-site/',
});