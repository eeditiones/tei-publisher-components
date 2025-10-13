// E2E: pb-page-header component functionality

describe('pb-page-header', () => {
  it('should load without throwing and render content', () => {
    cy.visit('/demo/pb-page-header.html')
    cy.get('pb-page').should('exist')
    cy.contains('pb-page guard demo').should('exist')
  })
})

