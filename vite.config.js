import { defineConfig } from 'vite';

const isCypress = !!process.env.CYPRESS;

// Vite dev server for pb-components demos and local development
// - Serves from repo root so existing demo and api pages work
// - Opens api.html by default to mirror es-dev-server behavior
// - Replaces process.env.NODE_ENV usages for legacy code paths
export default defineConfig({
  root: '.',
  server: {
    port: 5173,
    // Don't auto-open a path when Cypress runs CT; it uses a special base
    open: isCypress ? false : '/api.html',
    cors: true,
    headers: {
      // Keep CORS relaxed for local eXist/dev interactions
      'Access-Control-Allow-Origin': '*',
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  optimizeDeps: {
    // Exclude legacy/complex deps that don't prebundle cleanly under CT
    exclude: [
      '@polymer/app-layout',
      '@polymer/paper-icon-button',
      '@polymer/iron-ajax',
      '@polymer/paper-dialog',
      '@polymer/paper-dialog-scrollable',
      '@polymer/paper-input',
      '@polymer/paper-item',
      '@polymer/paper-listbox',
      '@polymer/paper-dropdown-menu',
      '@cwmr/paper-autocomplete',
      'gridjs',
      'construct-style-sheets-polyfill',
    ],
  },
});
