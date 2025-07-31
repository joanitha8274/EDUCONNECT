
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🔽 ajoute le nom de ton repo ici
export default defineConfig({
  base: '/EDUCONNECT/', // nom EXACT du dépôt GitHub
  plugins: [react()],
})
