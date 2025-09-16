// E2E: pb-zoom scaffolded test
describe('Demo: bundle-test', () => {
  beforeEach(() => {
    cy.visit('/demo/bundle-test.html')
  })

  it('has a scaffolded e2e test', () => {
    cy.document().its('readyState').should('eq', 'complete')
  })
})