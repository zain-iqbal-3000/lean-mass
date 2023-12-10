import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@bootstrap/scss': '~bootstrap/scss',
      'bootstrap/dist/js/bootstrap.bundle.min.js': '~bootstrap/dist/js/bootstrap.bundle.min.js',
    },
  },
})


  