import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'mdx-obsidian-callout',
      formats: ['es'],
    },
    rollupOptions: {
      input: './src/index.ts',
      external: ['react', 'react-dom'],
    },
  },
  plugins: [
    react(),
    svgr(),
    dts({rollupTypes: true}),
    tsconfigPaths(),
  ],
});
