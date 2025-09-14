// Cypress CT: pb-browse-docs
import '../../../src/pb-browse-docs.js'

describe('pb-browse-docs', () => {
  it('mounts', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').should('exist')
  })
})

