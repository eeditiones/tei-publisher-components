const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'none',
      bundler: 'vite',
      viteConfig: {
        server: {
          open: false,
        },
      },
    },
    includeShadowDom: true,
    specPattern: 'test/cypress/component/**/*.cy.{js,ts}',
    supportFile: 'test/cypress/support/component.js',
    screenshotsFolder: 'test/cypress/screenshots',
    videosFolder: 'test/cypress/videos',
    fixturesFolder: 'test/cypress/fixtures',
    downloadsFolder: 'test/cypress/downloads',
    indexHtmlFile: 'test/cypress/support/component-index.html',
  },
});
