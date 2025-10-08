// Cypress CT: pb-browse-docs
import '../../../src/pb-browse-docs.js'

describe('pb-browse-docs', () => {
  it('mounts', () => {
    cy.intercept('GET', '**/api/search/autocomplete*', {
      statusCode: 200,
      body: [{ text: 'Kant', value: 'kant' }]
    }).as('autocomplete')

    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').should('exist')
  })

  it('uses native buttons for toolbar and dialogs', () => {
    cy.intercept('GET', '**/api/search/autocomplete*', {
      statusCode: 200,
      body: [{ text: 'Kant', value: 'kant' }]
    }).as('autocomplete')

    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('paper-button').should('not.exist')
    cy.get('pb-browse-docs')
      .find('button.pb-button')
      .should('have.length.at.least', 1)
    cy.get('pb-browse-docs')
      .find('#delete')
      .should('have.attr', 'type', 'button')
  })
})
