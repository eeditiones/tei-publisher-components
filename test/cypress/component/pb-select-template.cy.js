import '../../../src/pb-page.js'
import '../../../src/pb-select-template.js'

describe('pb-select-template', () => {
  it('mounts and renders dropdown', () => {
    const html = '<pb-page endpoint="." api-version="1.0.0"><pb-select-template id="sel"></pb-select-template></pb-page>'
    cy.mount(html)
    cy.document().then((doc) => {
      doc.dispatchEvent(new CustomEvent('pb-page-ready', { detail: { endpoint: '.', apiVersion: '1.0.0', template: 'default' } }))
    })
    cy.get('#sel').should('exist')
    cy.get('#sel').find('paper-dropdown-menu').should('exist')
  })
})

