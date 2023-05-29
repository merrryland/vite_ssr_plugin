import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { path } from 'path';
import { fileURLToPath } from 'url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),
  ],
  // build: {
  //   assetsDir: 'shared',
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: (assetInfo) => {
  //         let extType = assetInfo.name.split('.').at(-1);
  //         if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
  //           extType = 'img';
  //         }
  //         return `slideone/${extType}/[name]-[hash][extname]`;
  //       },
  //       chunkFileNames: 'slideone/js/[name]-[hash].js',
  //     },
  //   },
  // },
});
