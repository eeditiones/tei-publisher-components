/* eslint-env node */
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
// Migration context:
// - Vite 8 moves dependency optimization to Rolldown.
// - In this repo, CT failures surfaced in Cypress/Vite integration when testing Vite 8 directly.
// - We intentionally keep v7-safe optimizer settings and will migrate in two steps:
//   1) `vite` -> `npm:rolldown-vite@7.x` (compat trial), 2) `rolldown-vite` -> `vite@8`.
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
    // Ensure lib/ directory is served as static files
    fs: {
      allow: ['..', '.', 'lib']
    }
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
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  optimizeDeps: {
    // Keep CT startup deterministic: avoid crawling the whole demo tree.
    // With Vite v7, entries are globs; we target the CT index only.
    // This also narrows blast radius while validating Rolldown migration incrementally.
    entries: isCypress ? ['test/cypress/support/component-index.html'] : undefined,
    noDiscovery: isCypress,
    // Prebundle common deps once so they aren't evaluated from multiple URLs
    include: [
      // Add commonly used packages here if needed
    ],
    exclude: [
      // keep heavy/legacy libs out of prebundle
      'gridjs',
      'hotkeys-js',
      'construct-style-sheets-polyfill'
    ]
  },
});
