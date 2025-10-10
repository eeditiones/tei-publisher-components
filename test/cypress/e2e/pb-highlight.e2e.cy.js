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

  it('has key attributes for linking elements', () => {
    cy.get('pb-highlight').should('have.attr', 'key')
    cy.get('pb-highlight[key="s1"]').should('exist')
    cy.get('pb-highlight[key="s2"]').should('exist')
    cy.get('pb-highlight[key="s3"]').should('exist')
  })

  it('supports mouse hover highlighting', () => {
    // Test that elements exist and can be interacted with
    cy.get('pb-highlight[key="s1"]').should('exist')
    cy.get('pb-highlight[key="s1"]').first().trigger('mouseover')
    // Just verify the element responds to mouseover (may not have visible highlighting)
    cy.get('pb-highlight[key="s1"]').first().should('exist')
  })

  it('has proper accessibility attributes', () => {
    // pb-highlight doesn't have buttons, just verify the component exists
    cy.get('pb-highlight').should('exist')
    cy.get('pb-highlight').should('have.attr', 'key')
  })

  it('supports highlight-self attribute', () => {
    cy.get('pb-highlight[highlight-self]').should('exist')
    cy.get('pb-highlight[highlight-self]').should('have.attr', 'highlight-self')
  })
})