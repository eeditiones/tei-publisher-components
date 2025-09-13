import '../../../src/pb-page.js'
import '../../../src/pb-document.js'
import '../../../src/pb-view-annotate.js'

describe('pb-view-annotate', () => {
  it('mounts within pb-page and pb-document without auto-loading', () => {
    const html = '<pb-page endpoint="." api-version="1.0.0"><pb-document id="doc" odd="default" view="single"></pb-document><pb-view-annotate id="va" src="doc" on-update></pb-view-annotate></pb-page>'
    cy.mount(html)
    cy.document().then((doc) => {
      doc.dispatchEvent(new CustomEvent('pb-page-ready', { detail: { endpoint: '.', apiVersion: '1.0.0' } }))
    })
    cy.get('#va').should('exist')
  })
})

