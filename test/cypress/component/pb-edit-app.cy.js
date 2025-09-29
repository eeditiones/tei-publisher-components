// Cypress CT: pb-edit-app
import '../../../src/pb-edit-app.js'

describe('pb-edit-app', () => {
  it('mounts', () => {
    cy.mount('<pb-edit-app></pb-edit-app>')
    cy.get('pb-edit-app').should('exist')
  })

  it('renders native buttons instead of paper-button', () => {
    cy.mount('<pb-edit-app></pb-edit-app>')
    cy.get('pb-edit-app').find('paper-button').should('not.exist')
    cy.get('pb-edit-app')
      .find('button.pb-button')
      .should('have.length.at.least', 1)
    cy.get('pb-edit-app')
      .find('#submit')
      .should('have.attr', 'type', 'button')
  })
})
