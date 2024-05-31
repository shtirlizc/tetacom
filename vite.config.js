import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        mainEn: './index-en.html',
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context: {},
    }),
  ],
});
