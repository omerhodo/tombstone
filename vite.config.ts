import { defineConfig } from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
