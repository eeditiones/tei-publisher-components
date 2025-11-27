// Cypress CT: pb-custom-form
import '../../../src/pb-custom-form.js'

describe('pb-custom-form', () => {
  it('should mount', () => {
    cy.mount('<pb-custom-form></pb-custom-form>')
    cy.get('pb-custom-form').should('exist')
  })
})

