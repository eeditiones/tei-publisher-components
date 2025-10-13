let oddFixture

before(() => {
  cy.fixture('odd-editor/sample.json').then(data => {
    oddFixture = data
  })
})

describe('Demo: pb-odd-editor', () => {
  beforeEach(() => {
    // Override centralized intercepts with test-specific data
    cy.intercept('GET', '**/api/version', {
      statusCode: 200,
      body: { api: '1.0.0', app: { version: '1.0.0' }, engine: { version: '1.0.0' } }
    }).as('version')

    // Mock login endpoints to prevent 401 errors
    cy.intercept('GET', '**/exist/apps/tei-publisher/login*', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: { loggedIn: false, user: null, groups: [], success: true }
    }).as('mockLogin')
    
    cy.intercept('POST', '**/exist/apps/tei-publisher/login*', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: { loggedIn: false, user: null, groups: [], success: true }
    }).as('mockLoginPost')

    cy.intercept('GET', '**/api/odd/**', {
      statusCode: 200,
      body: oddFixture
    }).as('stubOddApi')

    Cypress.env('stubOddResponse', oddFixture)

    cy.visit('/demo/pb-odd-editor.html')
    // Wait for the component to be visible instead of waiting for events
    cy.get('pb-odd-editor', { timeout: 10000 }).should('be.visible')
  })

  it('renders the pb-odd-editor UI', () => {
    cy.get('pb-odd-editor').should('be.visible')
    cy.get('pb-odd-editor')
      .find('pb-select-odd, textarea, select, button')
      .should('exist')
    cy.get('pb-odd-editor').find('pb-autocomplete').should('exist')
    cy.get('pb-odd-editor').find('paper-autocomplete').should('not.exist')
  })
})
