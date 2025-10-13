// Cypress E2E: pb-page-header
describe('pb-page-header e2e', () => {
  it('should load without throwing and render content', () => {
    cy.visit('/demo/pb-page-header.html')
    cy.get('pb-page').should('exist')
    cy.contains('pb-page guard demo').should('exist')
  })
})

