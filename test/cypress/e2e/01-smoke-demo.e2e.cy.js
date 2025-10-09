// test/cypress/e2e/01-smoke-demo.e2e.cy.js
// Smoke: visit every pb-*.html demo and ensure the page loads without network or upgrade errors

const pages = Cypress.env('demoPages') || []

describe('Smoke: all pb-*.html demos load', () => {
  it('found at least one demo page', () => {
    expect(pages.length, 'number of demo pages').to.be.greaterThan(0)
  })

  for (const url of pages) {
    it(`loads ${url}`, () => {
      if (url.includes('pb-browse-docs')) {
        cy.fixture('demo/browse-docs/default.html', 'utf8').as('browseDefault')
        cy.fixture('demo/browse-docs/filtered.html', 'utf8').as('browseFiltered')
        cy.then(function () {
          cy.intercept('GET', '**/api/collection/test**', req => {
            const hasFilter = new URL(req.url).searchParams.has('filter')
            req.reply({
              statusCode: 200,
              headers: { 'content-type': 'text/html' },
              body: hasFilter ? this.browseFiltered : this.browseDefault
            })
          })
        })
        cy.intercept('GET', '**/modules/testForm.xql**', {
          statusCode: 200,
          headers: { 'content-type': 'text/html' },
          body: '<div data-form="ok"></div>'
        })
      }

      const failed = []

      cy.intercept('**', { hostname: 'localhost' }, (req) => {
        req.on('response', (res) => {
          if (res.statusCode >= 400) {
            failed.push({ url: req.url, status: res.statusCode })
          }
        })
      })

      cy.visit(url, {
        retryOnStatusCodeFailure: true,
        retryOnNetworkFailure: true
      })

      cy.document().its('readyState').should('eq', 'complete')

      cy.wrap(null).then(() => {
        expect(failed, `${url} had failing network requests`).to.deep.equal([])
      })
    })
  }
})
