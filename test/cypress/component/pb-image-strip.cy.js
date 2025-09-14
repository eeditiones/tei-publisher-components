// Cypress CT: pb-image-strip
import '../../../src/pb-image-strip.js'

describe('pb-image-strip', () => {
  it('mounts', () => {
    cy.mount('<pb-image-strip></pb-image-strip>')
    cy.get('pb-image-strip').should('exist')
  })
})

