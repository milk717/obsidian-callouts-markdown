import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {mdx} from '@cyco130/vite-plugin-mdx';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/package/index.ts',
      name: 'mdx-obsidian-callout',
      formats: ['es'],
    },
    rollupOptions: {
      input: './src/package/index.ts',
      external: ['react', 'react-dom'],
    },
  },
  plugins: [react(), mdx(), svgr(), tsconfigPaths()],
});