import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx,js,jsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    setupFiles: ['./src/__tests__/setup.tsx'],
    coverage: {
      provider: 'v8',
    },
  },
});
