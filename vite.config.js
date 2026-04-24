import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/city_mall_app_v2_GPT/' : '/',
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
