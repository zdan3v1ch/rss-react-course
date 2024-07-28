/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ['src/**/*.test.{ts,tsx,js,jsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.tsx']
  }
});
