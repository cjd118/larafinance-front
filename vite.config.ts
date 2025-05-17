import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { fileURLToPath } from 'url';

//a workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@forms': path.resolve(__dirname, 'src/forms'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@errors': path.resolve(__dirname, 'src/errors'),
        '@models': path.resolve(__dirname, 'src/mmodels'),
      }
  },
})
