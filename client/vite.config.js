import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import imagemin from '@vheemstra/vite-plugin-imagemin';
import gifsicle from 'imagemin-gifsicle';
import jpegtran from 'imagemin-jpegtran';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagemin({
      plugins: {
        jpg: jpegtran({ progressive: true }),
        png: optipng({ optimizationLevel: 5 }),
        gif: gifsicle({ interlaced: true }),
        svg: svgo({
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
          ],
        }),
      },
      // Optional: create webp versions
      makeWebp: {
        plugins: {
          // Configuration for imagemin-webp
        },
      },
      // Optional: include/exclude filters, etc.
      include: /\\.(png|jpg|jpeg|gif|svg)$/i,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router'],
          axios: ['axios'],
        },
      },
    },
  },
});
