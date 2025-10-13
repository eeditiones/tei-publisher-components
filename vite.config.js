const MOCK_VERSION = {
  api: '1.0.0',
  app: { name: 'mock-app', version: '0.0.0' },
  engine: { name: 'mock-engine', version: '0.0.0' }
}
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

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
    alias: [
      // Normalize any accidental /node_modules path imports to bare package names
    ]
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  optimizeDeps: {
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
