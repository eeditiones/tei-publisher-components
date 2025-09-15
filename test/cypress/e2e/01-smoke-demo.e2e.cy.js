// test/cypress/e2e/smoke-demo.e2e.cy.js
// Smoke: visit every pb-*.html demo and ensure the page loads

const pages = Cypress.env('demoPages') || []

describe('Smoke: all pb-*.html demos load', () => {
  it('found at least one demo page', () => {
    expect(pages.length, 'number of demo pages').to.be.greaterThan(0)
  })

  for (const url of pages) {
    it(`loads ${url}`, () => {
      cy.visit(url, {
        retryOnStatusCodeFailure: true,
        retryOnNetworkFailure: true
      })
      cy.document().its('readyState').should('eq', 'complete')
      // Cypress will fail this test on any uncaught exception from the page,
      // so the test title shows exactly which URL broke (e.g. dom-module duplicate).
    })
  }
})