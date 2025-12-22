// Cypress CT: pb-edit-app
import '../../../src/pb-edit-app.js'

describe('pb-edit-app', () => {
  it('should mount', () => {
    cy.intercept('GET', '**/api/templates*', {
      statusCode: 200,
      body: [{ name: 'view.html', title: 'Default Template' }]
    })
    cy.intercept('GET', '**/api/odd*', {
      statusCode: 200,
      body: [{ name: 'default', label: 'Default' }]
    })
    cy.mount('<pb-edit-app></pb-edit-app>')
    cy.get('pb-edit-app').should('exist')
  })

  it('should render native buttons instead of paper-button', () => {
    cy.intercept('GET', '**/api/templates*', {
      statusCode: 200,
      body: [{ name: 'view.html', title: 'Default Template' }]
    })
    cy.intercept('GET', '**/api/odd*', {
      statusCode: 200,
      body: [{ name: 'default', label: 'Default' }]
    })
    cy.mount('<pb-edit-app></pb-edit-app>')
    cy.get('pb-edit-app').find('paper-button').should('not.exist')
    cy.get('pb-edit-app').find('paper-input, paper-dropdown-menu, paper-listbox, paper-checkbox').should('not.exist')
    cy.get('pb-edit-app')
      .find('button.pb-button')
      .should('have.length.at.least', 1)
    cy.get('pb-edit-app')
      .find('#submit')
      .should('have.attr', 'type', 'button')
  })
})
