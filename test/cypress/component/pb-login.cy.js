// Cypress CT: pb-login
import '../../../src/pb-login.js'

describe('pb-login', () => {
  it('mounts', () => {
    cy.mount('<pb-login></pb-login>')
    cy.get('pb-login').should('exist')
  })
})

