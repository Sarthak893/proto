import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('/react-icons/')) return 'icons'
          if (id.includes('/framer-motion/')) return 'motion'
          if (id.includes('/react-router-dom/') || id.includes('/@remix-run/')) return 'router'
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) return 'react'
        },
      },
    },
  },
})
