// Cypress CT: pb-page
import '../../../src/pb-page.js'

describe('pb-page', () => {
  function stubLocales() {
    cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' })
    cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' })
  }

  it('reports endpoint and language', () => {
    stubLocales()
    cy.mount('<pb-page endpoint="." require-language language="de" api-version="1.0.0"></pb-page>')
    cy.waitForEvent('pb-page-ready').then((ev) => {
      const detail = ev.detail
      expect(detail.apiVersion).to.exist
      expect(detail.language).to.equal('de')
      expect(detail.endpoint).to.equal('.')
    })
  })

  it('allows only one pb-page', () => {
    stubLocales()
    cy.mount(`
      <div>
        <pb-page id="p1" endpoint="."></pb-page>
        <pb-page id="p2" endpoint="https://teipublisher.com/exist/apps/van-gogh"></pb-page>
      </div>
    `)
    cy.get('pb-page[disabled]').should('have.length', 1)
  })
})
