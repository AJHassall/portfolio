import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const base = process.env.NODE_ENV === 'ghpages' ? '/portfolio/' : '/portfolio/';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: base,
  assetPrefix: base,
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(base),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
