// Cypress CT: pb-svg
import '../../../src/pb-svg.js'

describe('pb-svg', () => {
  it('mounts', () => {
    cy.mount('<pb-svg></pb-svg>')
    cy.get('pb-svg').should('exist')
  })
})

