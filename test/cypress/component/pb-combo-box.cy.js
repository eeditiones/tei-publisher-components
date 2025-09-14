// Cypress CT: pb-combo-box
import '../../../src/pb-combo-box.js'

describe('pb-combo-box', () => {
  it('mounts', () => {
    cy.mount('<pb-combo-box></pb-combo-box>')
    cy.get('pb-combo-box').should('exist')
  })
})

