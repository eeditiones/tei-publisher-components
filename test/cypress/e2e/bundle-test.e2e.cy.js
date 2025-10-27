// Cypress E2E: bundle-test
describe('bundle-test e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/bundle-test.html')
  })

  it('has a scaffolded e2e test', () => {
    cy.document().its('readyState').should('eq', 'complete')
  })
})