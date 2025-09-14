// Cypress CT: pb-edit-xml
import '../../../src/pb-edit-xml.js'

describe('pb-edit-xml', () => {
  it('mounts', () => {
    cy.mount('<pb-edit-xml></pb-edit-xml>')
    cy.get('pb-edit-xml').should('exist')
  })
})

