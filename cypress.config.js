// cypress.config.js (StandardJS)
const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')
const { cypressViteOptimizeDepsInteropPlugin } = require('./test/cypress/vite-optimize-deps-interop-plugin')

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

module.exports = defineConfig({
  includeShadowDom: true,
  retries: 1,
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
  fixturesFolder: 'test/cypress/fixtures',
  downloadsFolder: 'test/cypress/downloads',
  component: {
    devServer: /** @type {any} */ ({
      // `framework: 'none'` is valid for Lit/custom elements but not in Cypress TS types.
      framework: 'none',
      bundler: 'vite',
      viteConfig: {
        server: { open: false },
        plugins: [cypressViteOptimizeDepsInteropPlugin()]
      }
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