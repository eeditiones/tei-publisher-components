let oddFixture

before(() => {
  cy.fixture('odd-editor/sample.json').then(data => {
    oddFixture = data
  })
})

describe('Demo: pb-odd-editor', () => {
  beforeEach(() => {
    // All intercepts are now centralized in e2e.js support file
    // No need for duplicate intercepts here

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
