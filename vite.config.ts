import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/elen/',
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@component": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/configs"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@helper": path.resolve(__dirname, "./src/helpers"),
      "@layout": path.resolve(__dirname, "./src/layouts"),
      "@provider": path.resolve(__dirname, "./src/providers"),
      "@page": path.resolve(__dirname, "./src/pages"),
      "@route": path.resolve(__dirname, "./src/routes"),
      "@hook": path.resolve(__dirname, "./src/hooks"),
    }
  },
})
