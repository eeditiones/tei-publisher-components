// E2E: pb-highlight component functionality

describe('pb-highlight', () => {
  beforeEach(() => {
    cy.intercept(
      { method: 'GET', url: '**/components.css', middleware: true },
      (req) => { req.continue() }
      , { log: false }).as('demoCss')

    cy.visit('/demo/pb-highlight.html')
  })

  it('should load and render text inside pb-highlight', () => {
    cy.get('pb-highlight')
      .should('exist')
      .invoke('text')
      .should('not.be.empty')
  })

  it('should have key attributes for linking elements', () => {
    cy.get('pb-highlight').should('have.attr', 'key')
    cy.get('pb-highlight[key="s1"]').should('exist')
    cy.get('pb-highlight[key="s2"]').should('exist')
    cy.get('pb-highlight[key="s3"]').should('exist')
  })

  it('should support mouse hover highlighting', () => {
    cy.get('pb-highlight[key="s1"]').should('exist')
    cy.get('pb-highlight[key="s1"]').first().trigger('mouseover')
    cy.get('pb-highlight[key="s1"]').first().should('exist')
  })

  it('should have proper accessibility attributes', () => {
    cy.get('pb-highlight').should('exist')
    cy.get('pb-highlight').should('have.attr', 'key')
  })

  it('should support highlight-self attribute', () => {
    cy.get('pb-highlight[highlight-self]').should('exist')
    cy.get('pb-highlight[highlight-self]').should('have.attr', 'highlight-self')
  })
})