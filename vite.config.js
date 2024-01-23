import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import Router from 'vite-plugin-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Router()],
})
