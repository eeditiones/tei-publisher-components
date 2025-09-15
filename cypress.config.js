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

module.exports = defineConfig({
  includeShadowDom: true,
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
  fixturesFolder: 'test/cypress/fixtures',
  downloadsFolder: 'test/cypress/downloads',
  component: {
    devServer: {
      framework: 'none',
      bundler: 'vite',
      viteConfig: {
        server: { open: false }
      }
    },
    specPattern: 'test/cypress/component/**/*.cy.{js,ts}',
    supportFile: 'test/cypress/support/component.js',
    indexHtmlFile: 'test/cypress/support/component-index.html'
  },
  e2e: {
    setupNodeEvents (on, config) {
      // keep your other tasks if needed
      return config
    },
    baseUrl: 'http://localhost:5173',
    specPattern: 'test/cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'test/cypress/support/e2e.js',
    env: {
      demoPages: listDemoPagesSync()
    }
  }
})