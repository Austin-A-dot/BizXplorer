/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import requireTransform from 'vite-plugin-require-transform';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

const PAGE_TITLE = 'AfriGIS - Austin'; // EDIT THIS

const htmlPlugin = () => ({
  name: 'html-transform',
  transformIndexHtml(html) {
    return html.replace(
      /<title>(.*?)<\/title>/,
      `<title>${PAGE_TITLE}</title>`,
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: '/austin/',
  build: {
    minify: true,
  },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    htmlPlugin(),
    vuetify({
      autoImport: true,
    }),
    htmlPlugin(),
    requireTransform({
      fileRegex: /.js$/,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    // https: true,
  },
});
