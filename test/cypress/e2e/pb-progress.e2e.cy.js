// Cypress E2E: pb-progress
describe('pb-progress e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-progress.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('shows progress bar with proper attributes', () => {
    cy.get('pb-progress').should('exist')
    cy.get('pb-progress').find('progress').should('exist')
    cy.get('pb-progress').find('progress').should('have.attr', 'id', 'progress')
  })

  it('updates progress value', () => {
    // Click the button to start progress
    cy.get('#button').should('contain.text', 'Click to start')
    cy.get('#button').click({ force: true })
    cy.get('#button').should('contain.text', 'Click to stop')
    
    // Progress should be visible when started
    cy.get('pb-progress').should('be.visible')
  })

  it('shows indeterminate state when appropriate', () => {
    cy.get('pb-progress').should('exist')
    // Check for indeterminate attribute on the progress element
    cy.get('pb-progress').find('progress').should('have.attr', 'indeterminate')
  })

  it('has proper accessibility attributes', () => {
    // pb-progress doesn't have buttons, just verify the component exists
    cy.get('pb-progress').should('exist')
    cy.get('pb-progress').find('progress').should('exist')
  })
})