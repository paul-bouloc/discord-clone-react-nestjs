import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  envDir: './',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3001,
  },

  optimizeDeps: {
    force: true,
  },

  build: {
    sourcemap: true,
  },
})
