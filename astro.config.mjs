// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.com', // Cambia por tu dominio real
  output: 'static', // Generar sitio estático
  build: {
    assets: '_astro', // Carpeta para assets
  },
  vite: {
    build: {
      assetsInlineLimit: 0, // No inlinar assets grandes
    }
  }
})


