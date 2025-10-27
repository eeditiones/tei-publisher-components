// Cypress CT: pb-codepen
import '../../../src/pb-codepen.js'

describe('pb-codepen', () => {
  it('mounts', () => {
    cy.mount('<pb-codepen></pb-codepen>')
    cy.get('pb-codepen').should('exist')
  })
})

