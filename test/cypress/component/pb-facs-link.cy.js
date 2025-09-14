// Cypress CT: pb-facs-link
import '../../../src/pb-facs-link.js'

describe('pb-facs-link', () => {
  it('mounts', () => {
    cy.mount('<pb-facs-link></pb-facs-link>')
    cy.get('pb-facs-link').should('exist')
  })
})

