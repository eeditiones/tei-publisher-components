// Cypress CT: pb-authority-lookup
import '../../../src/pb-authority-lookup.js'

describe('pb-authority-lookup', () => {
  it('should mount', () => {
    cy.mount('<pb-authority-lookup></pb-authority-lookup>')
    cy.get('pb-authority-lookup').should('exist')
  })
})

