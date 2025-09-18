const MOCK_VERSION = {
  api: '1.0.0',
  app: { name: 'mock-app', version: '0.0.0' },
  engine: { name: 'mock-engine', version: '0.0.0' }
}
import { defineConfig } from 'vite';

const isCypress = !!process.env.CYPRESS;

// Vite dev server for pb-components demos and local development
// - Serves from repo root so existing demo and api pages work
// - Opens api.html by default
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
    proxy: isCypress ? undefined : {
      '/exist': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/demo/, ''),
      },
    },
  },
  plugins: [
    {
      name: 'mock-teipublisher-handshake',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || ''
          // Normalize both rooted and app-rooted paths
          const isLogin = url.startsWith('/login') || url.startsWith('/exist/apps/tei-publisher/login')
          const isVersion = url.startsWith('/api/version') || url.startsWith('/exist/apps/tei-publisher/api/version')

          if (isLogin) {
            res.statusCode = 404
            res.setHeader('content-type', 'text/plain')
            res.end('Not Found')
            return
          }
          if (isVersion) {
            res.statusCode = 200
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(MOCK_VERSION))
            return
          }
          next()
        })
      }
    },
  ],
  resolve: {
    // Ensure a single instance of Polymer & friends across the graph
    dedupe: [
      '@polymer/polymer',
      '@polymer/iron-ajax',
      '@polymer/iron-icon',
      '@polymer/iron-icons',
      '@polymer/paper-input',
      '@polymer/paper-button',
      '@polymer/paper-item',
      '@polymer/paper-listbox',
      '@polymer/paper-dropdown-menu',
      '@polymer/paper-dialog',
      '@polymer/paper-dialog-scrollable',
      '@cwmr/paper-autocomplete'
    ],
    alias: [
      // Normalize any accidental /node_modules path imports to bare package names
      { find: /^\/?node_modules\/(@polymer\/.+)/, replacement: '$1' }
    ]
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  optimizeDeps: {
    // Prebundle Polymer deps once so they aren't evaluated from multiple URLs
    include: [
      '@polymer/polymer',
      '@polymer/iron-ajax/iron-ajax.js',
      '@polymer/iron-icon/iron-icon.js',
      '@polymer/iron-icons/iron-icons.js',
      '@polymer/paper-input/paper-input.js',
      '@polymer/paper-button/paper-button.js',
      '@polymer/paper-item/paper-item.js',
      '@polymer/paper-listbox/paper-listbox.js',
      '@polymer/paper-dropdown-menu/paper-dropdown-menu.js',
      '@polymer/paper-dialog/paper-dialog.js',
      '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js',
      '@cwmr/paper-autocomplete/paper-autocomplete-suggestions.js'
    ],
    exclude: [
      // keep heavy/legacy libs out of prebundle
      'gridjs',
      'construct-style-sheets-polyfill'
    ]
  },
});
