import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Proxy API calls to the FastAPI backend so CORS isn't an issue
    proxy: {
      '/products': 'http://localhost:8000',
      '/images': 'http://localhost:8000',
      '/chat': 'http://localhost:8000',
    }
  }
})
