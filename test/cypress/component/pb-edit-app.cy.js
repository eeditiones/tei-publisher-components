// Cypress CT: pb-edit-app
import '../../../src/pb-edit-app.js'

describe('pb-edit-app', () => {
  it('mounts', () => {
    cy.mount('<pb-edit-app></pb-edit-app>')
    cy.get('pb-edit-app').should('exist')
  })
})

