// E2E: pb-page should not crash when encountering <app-header> without private methods

describe('pb-page with plain app-header', () => {
  it('loads without throwing and renders content', () => {
    cy.visit('/demo/pb-page-header.html')
    cy.get('pb-page').should('exist')
    cy.contains('pb-page guard demo').should('exist')
  })
})

