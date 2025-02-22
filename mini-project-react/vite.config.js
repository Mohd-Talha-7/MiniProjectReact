import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure server 0.0.0.0 pe bind ho
    port: process.env.PORT || 5173 // Render ka assigned PORT environment variable use karega
  }
})