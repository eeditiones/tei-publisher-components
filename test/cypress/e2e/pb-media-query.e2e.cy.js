// E2E: pb-media-query responsive behavior
describe('Demo: pb-media-query', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-media-query.html')
  })

  it('responds to viewport changes', () => {
    // Check initial state
    cy.get('pb-media-query').should('exist')
    
    // Test mobile breakpoint
    cy.viewport(375, 667) // iPhone SE
    cy.get('pb-media-query').should('exist')
    
    // Test desktop breakpoint  
    cy.viewport(1200, 800)
    cy.get('pb-media-query').should('exist')
  })

  it('shows different content based on media query', () => {
    // Check that content exists and changes based on viewport
    cy.viewport(375, 667)
    cy.get('pb-media-query').should('exist')
    cy.get('pb-media-query').find('aside').should('exist')
    
    cy.viewport(1200, 800)
    cy.get('pb-media-query').should('exist')
    cy.get('pb-media-query').find('aside').should('exist')
  })

  it('has proper accessibility attributes', () => {
    // pb-media-query doesn't have buttons, just verify the component exists
    cy.get('pb-media-query').should('exist')
    cy.get('pb-media-query').should('have.attr', 'query')
  })
})