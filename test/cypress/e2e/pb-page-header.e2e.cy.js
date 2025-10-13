// Cypress E2E: pb-page-header
describe('pb-page-header e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-page-header.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should load without throwing and render content', () => {
    cy.contains('pb-page guard demo').should('exist')
  })
})

