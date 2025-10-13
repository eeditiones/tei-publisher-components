// Cypress E2E: pb-highlight
describe('pb-highlight e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-highlight.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
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