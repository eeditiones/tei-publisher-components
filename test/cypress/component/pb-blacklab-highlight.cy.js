// Cypress CT: pb-blacklab-highlight
import '../../../src/pb-blacklab-highlight.js'

describe('pb-blacklab-highlight', () => {
  it('should mount', () => {
    cy.mount('<pb-blacklab-highlight></pb-blacklab-highlight>')
    cy.get('pb-blacklab-highlight').should('exist')
  })
})

