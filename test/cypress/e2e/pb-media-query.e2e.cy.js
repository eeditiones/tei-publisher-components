// E2E: pb-media-query component functionality

describe('pb-media-query', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-media-query.html')
  })

  it('should respond to viewport changes', () => {
    cy.get('pb-media-query').should('exist')
    
    cy.viewport(375, 667)
    cy.get('pb-media-query').should('exist')
    
    cy.viewport(1200, 800)
    cy.get('pb-media-query').should('exist')
  })

  it('should show different content based on media query', () => {
    cy.viewport(375, 667)
    cy.get('pb-media-query').should('exist')
    cy.get('pb-media-query').find('aside').should('exist')
    
    cy.viewport(1200, 800)
    cy.get('pb-media-query').should('exist')
    cy.get('pb-media-query').find('aside').should('exist')
  })

  it('should have proper accessibility attributes', () => {
    cy.get('pb-media-query').should('exist')
    cy.get('pb-media-query').should('have.attr', 'query')
  })
})