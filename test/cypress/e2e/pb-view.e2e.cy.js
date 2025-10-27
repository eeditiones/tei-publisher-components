// Cypress E2E: pb-view
describe('pb-view e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-view.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('renders the demo page', () => {
    cy.get('pb-view')
      .should('exist')
      .should('be.visible')
    cy.url()
      .should('contain', 'vernunft')
  })

  it('displays initial content', () => {
    // wait until something is rendered into pb-view
    cy.get('pb-view#view1').contains('Critique of Pure Reason')
  })
})