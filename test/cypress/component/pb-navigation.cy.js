// Cypress CT: pb-navigation
import '../../../src/pb-navigation.js'

describe('pb-navigation', () => {
  it('mounts', () => {
    cy.mount('<pb-navigation></pb-navigation>')
    cy.get('pb-navigation').should('exist')
  })
})

