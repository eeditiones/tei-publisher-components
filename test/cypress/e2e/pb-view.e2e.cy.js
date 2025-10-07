// E2E: pb-view scaffolded test
describe('Demo: pb-view', () => {
  beforeEach(() => {
    // do not log css transform requests
    cy.intercept(
      { method: 'GET', url: '**/transform/*.css', middleware: true },
      (req) => { req.continue() }
      , { log: false }).as('oddCss')
    cy.visit('/demo/pb-view.html')
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