import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/boss-wegorzewo/',
  server: {
    allowedHosts: true,
    // Zapytania do /api przekazuje do serwera Express — przeglądarka nie musi znać portu 3001
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
