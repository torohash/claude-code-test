import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
  server: {
    port: 3000,
    open: !process.env.CI,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
