import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    strictPort: true, // Ensure fixed port usage
    allowedHosts: ['miniprojectreact.onrender.com'] // Render domain ko allow karein
  }
})