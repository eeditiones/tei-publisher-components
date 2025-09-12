// Cypress CT: pb-drawer
import '../../../src/pb-drawer.js'

describe('pb-drawer', () => {
  beforeEach(() => {
    cy.mount('<button id="toggle">Toggle</button><pb-drawer id="dr" toggle="toggle" max-width="10000px"><div>Content</div></pb-drawer>')
  })

  it('toggles open via toggle button and closes on pb-refresh', () => {
    cy.get('#toggle').click()
    cy.get('#dr').should('have.attr', 'opened')
    cy.document().then((doc) => {
      const ev = new CustomEvent('pb-refresh', { detail: { key: '__default__' }, bubbles: true, composed: true })
      doc.dispatchEvent(ev)
    })
    cy.get('#dr').should('not.have.attr', 'opened')
  })
})
