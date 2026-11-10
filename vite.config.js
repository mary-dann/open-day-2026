import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/open-day-2026/',
  plugins: [tailwindcss()],
})