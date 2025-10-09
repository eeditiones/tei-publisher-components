let oddFixture

before(() => {
  cy.fixture('odd-editor/sample.json').then(data => {
    oddFixture = data
  })
})

describe('Demo: pb-odd-editor', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/login', {
      statusCode: 404,
      body: 'Not Found'
    }).as('login')

    cy.intercept('GET', '**/api/version', {
      statusCode: 200,
      body: { api: '1.0.0', app: { version: '1.0.0' }, engine: { version: '1.0.0' } }
    }).as('version')

    Cypress.env('stubOddResponse', oddFixture)

    cy.visit('/demo/pb-odd-editor.html')
  })

  it('renders the pb-odd-editor UI', () => {
    cy.wait('@version')
    cy.wait('@stubOddApi')
    cy.get('pb-odd-editor').should('be.visible')
    cy.get('pb-odd-editor')
      .find('pb-select-odd, textarea, select, button')
      .should('exist')
    cy.get('pb-odd-editor').find('pb-autocomplete').should('exist')
    cy.get('pb-odd-editor').find('paper-autocomplete').should('not.exist')
  })
})
