import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLibrary',
      fileName: 'index',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})