// Cypress CT: pb-grid-action
import '../../../src/pb-grid-action.js'

describe('pb-grid-action', () => {
  it('should mount', () => {
    cy.mount('<pb-grid-action></pb-grid-action>')
    cy.get('pb-grid-action').should('exist')
  })
})

