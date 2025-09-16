// E2E: pb-highlight tests
describe('Demo: pb-highlight', () => {
  beforeEach(() => {
    // do not log css transform requests
    cy.intercept(
      { method: 'GET', url: '**/components.css', middleware: true },
      (req) => { req.continue() }
      , { log: false }).as('demoCss')

    cy.visit('/demo/pb-highlight.html')
  })

  it('loads and renders text inside pb-highlight', () => {
    cy.get('pb-highlight')
      .should('exist')
      .invoke('text')
      .should('not.be.empty')
  })
})