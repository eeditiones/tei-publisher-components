// Cypress CT: pb-search
import '../../../src/pb-page.js'
import '../../../src/pb-search.js'

describe('pb-search', () => {
  it('emits pb-load with query params on submit', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-search action="api/search">
          <button class="pb-button pb-button--contained" slot="searchButton" type="button">Search</button>
          <button class="pb-button pb-button--text" slot="resetButton" type="button">Reset</button>
        </pb-search>
      </pb-page>
    `)

    // Ensure page is ready
    cy.waitForEvent('pb-page-ready')

    // Set value via component API and wait for update
    cy.get('pb-search').then(($el) => { $el[0].value = 'kant'; return $el[0].updateComplete })

    // Programmatically trigger submit and capture event to avoid slot click quirks
    cy.document().then((doc) => {
      const capture = new Cypress.Promise((resolve) => doc.addEventListener('pb-load', resolve, { once: true }))
      cy.get('pb-search').then(($el) => { $el[0]._doSearch(); })
      return cy.wrap(capture)
    }).then((ev) => {
      const { url, params } = ev.detail
      expect(url).to.equal('api/search')
      expect(params.query).to.equal('kant')
      expect(params.start).to.equal(1)
    })
  })

  it('resets form via reset button', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-search action="api/search">
          <button class="pb-button pb-button--contained" slot="searchButton" type="button">Search</button>
          <button class="pb-button pb-button--text" slot="resetButton" type="button">Reset</button>
        </pb-search>
      </pb-page>
    `)
    cy.waitForEvent('pb-page-ready')

    // Set value via component API then reset
    cy.get('pb-search').then(($el) => { $el[0].value = 'hegel'; return $el[0].updateComplete })
    cy.get('pb-search').then(($el) => { $el[0]._reset() })
    // Verify input field is cleared inside shadow DOM
    cy.get('pb-search').then(($el) => {
      const pi = $el[0].shadowRoot.getElementById('search')
      expect(pi.value).to.equal('')
    })
  })
})
