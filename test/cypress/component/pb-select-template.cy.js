import '../../../src/pb-page.js'
import '../../../src/pb-select-template.js'

describe('pb-select-template', () => {
  it('should mount and render dropdown', () => {
    const html = '<pb-page endpoint="." api-version="1.0.0"><pb-select-template id="sel"></pb-select-template></pb-page>'
    cy.mount(html)
    cy.document().then((doc) => {
      doc.dispatchEvent(new CustomEvent('pb-page-ready', { detail: { endpoint: '.', apiVersion: '1.0.0', template: 'default' } }))
    })
    cy.get('#sel').should('exist')
    cy.get('#sel').then($el => $el[0].updateComplete)
    cy.get('#sel').then(($el) => {
      const comp = $el[0]
      comp._templates = [
        { name: 'default', title: 'Default Template' },
        { name: 'custom', title: 'Custom Template' }
      ]
      comp.requestUpdate()
    })
    cy.get('#sel').then($el => $el[0].updateComplete)
    cy.get('#sel').find('select').should('exist').and('have.value', 'default')
    cy.get('#sel').find('option').should('have.length', 2)
  })
})
