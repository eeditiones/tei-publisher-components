// Cypress CT: pb-manage-odds
import '../../../src/pb-manage-odds.js'

describe('pb-manage-odds', () => {
  it('should mount', () => {
    cy.mount('<pb-manage-odds></pb-manage-odds>')
    cy.get('pb-manage-odds').should('exist')
  })
})

