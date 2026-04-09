// cypress.config.js (StandardJS)
const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')

function listDemoPagesSync () {
  const demoDir = path.resolve(__dirname, 'demo')
  try {
    return fs.readdirSync(demoDir, { withFileTypes: true })
      .filter(e => e.isFile() && /^pb-.*\.html$/i.test(e.name))
      .map(e => `/demo/${e.name}`)
  } catch (e) {
    console.error('listDemoPagesSync failed:', e)
    return []
  }
}

function listPbComponentsSync () {
  const srcDir = path.resolve(__dirname, 'src')
  try {
    return fs.readdirSync(srcDir, { withFileTypes: true })
      .filter(e => e.isFile() && /^pb-.*\.js$/i.test(e.name))
      .map(e => {
        const abs = path.join(srcDir, e.name)
        const src = fs.readFileSync(abs, 'utf8')
        // look for customElements.define('pb-xyz', …)
        const m = src.match(/customElements\.define\(\s*['"`](pb-[^'"`]+)['"`]/)
        // fallback if there's extra stuff before the closing parenthesis
        const m2 = m || src.match(/customElements\.define\(\s*['"`](pb-[^'"`]+)['"`][^)]*\)/)
        return m2 ? { file: e.name, tag: m2[1] } : null
      })
      .filter(Boolean)
  } catch (e) {
    console.error('listPbComponentsSync failed:', e)
    return []
  }
}

function cypressRolldownCompatPlugin () {
  return {
    name: 'cypress-rolldown-compat',
    configResolved (config) {
      if (!config || !config.optimizeDeps) return

      // rolldown-vite can expose esbuildOptions via a compatibility accessor.
      // Cypress CT expects a plain object and reads nested fields directly.
      try {
        Object.defineProperty(config.optimizeDeps, 'esbuildOptions', {
          value: {},
          configurable: true,
          enumerable: true,
          writable: true
        })
      } catch (e) {
        // Keep CT startup resilient; fallback to assignment where possible.
        config.optimizeDeps.esbuildOptions = {}
      }
    }
  }
}

function createCtViteCompatConfig () {
  const pathToRegexpShim = path.resolve(__dirname, 'test/cypress/support/shims/path-to-regexp-interop.js')
  return {
    server: { open: false },
    resolve: {
      alias: [
        {
          // Match the bare package only; avoid rewriting subpaths imported by the shim.
          find: /^path-to-regexp$/,
          replacement: pathToRegexpShim
        }
      ]
    },
    optimizeDeps: {
      // Keep Cypress CT deterministic and avoid optimizer discovery churn.
      noDiscovery: true,
      include: ['path-to-regexp'],
      // Force interop wrapper for CJS-style export surfaces under rolldown.
      needsInterop: ['path-to-regexp']
    },
    plugins: [cypressRolldownCompatPlugin()]
  }
}

module.exports = defineConfig({
  includeShadowDom: true,
  retries: 1,
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
  fixturesFolder: 'test/cypress/fixtures',
  downloadsFolder: 'test/cypress/downloads',
  component: {
    devServer: /** @type {any} */ ({
      // NOTE(Vite8 migration):
      // Keep CT on plain `vite` config shape while we are on Vite 7.
      // We observed Vite 8/Rolldown optimizer incompatibilities with Cypress CT
      // in this project, so this remains intentionally conservative.
      // Planned path: trial `rolldown-vite` on Vite 7 first, then switch to Vite 8.
      framework: 'none',
      bundler: 'vite',
      viteConfig: createCtViteCompatConfig()
    }),
    specPattern: 'test/cypress/component/**/*.cy.{js,ts}',
    supportFile: 'test/cypress/support/component.js',
    indexHtmlFile: 'test/cypress/support/component-index.html',
    setupNodeEvents (on, config) {
      on('task', {
        listPbComponents () { return listPbComponentsSync() }
      })
      return config
    },
    env: {
      components: listPbComponentsSync()
    }
  },
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl || 'http://localhost:5173',
    retries: 1,
    specPattern: 'test/cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'test/cypress/support/e2e.js',
    env: {
      demoPages: listDemoPagesSync(),
      // Allow tests to detect if running against real backend
      realBackend: process.env.CYPRESS_realBackend === 'true',
      // Backend URL for real backend testing
      existBackend: process.env.CYPRESS_existBackend || 'http://localhost:8080/exist/apps/tei-publisher'
    }
  }
})