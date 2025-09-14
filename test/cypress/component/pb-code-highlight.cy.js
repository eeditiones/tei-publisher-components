// Cypress CT: pb-code-highlight
import '../../../src/pb-code-highlight.js'

describe('pb-code-highlight', () => {
  it('mounts', () => {
    cy.mount('<pb-code-highlight></pb-code-highlight>')
    cy.get('pb-code-highlight').should('exist')
  })
})

