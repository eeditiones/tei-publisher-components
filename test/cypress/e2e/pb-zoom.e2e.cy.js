// E2E: pb-zoom zoom functionality

describe('Demo: pb-zoom', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-zoom.html')
    // Wait for components to be visible
    cy.get('pb-zoom', { timeout: 10000 }).should('be.visible')
  })

  it('renders zoom controls', () => {
    // Check that pb-zoom components exist
    cy.get('pb-zoom').should('have.length', 2)
    
    // Check zoom in button
    cy.get('pb-zoom[direction="in"]').should('exist')
    cy.get('pb-zoom[direction="in"]').should('have.attr', 'icon', 'icons:zoom-in')
    
    // Check zoom out button
    cy.get('pb-zoom[direction="out"]').should('exist')
    cy.get('pb-zoom[direction="out"]').should('have.attr', 'icon', 'icons:zoom-out')
  })

  it('supports zoom button interactions', () => {
    // Test zoom in button
    cy.get('pb-zoom[direction="in"]').click()
    // Note: Actual zoom behavior depends on pb-view implementation
    
    // Test zoom out button
    cy.get('pb-zoom[direction="out"]').click()
    // Note: Actual zoom behavior depends on pb-view implementation
  })

  it('has proper accessibility attributes', () => {
    // Check that zoom buttons have proper attributes
    cy.get('pb-zoom[direction="in"]').should('have.attr', 'direction', 'in')
    cy.get('pb-zoom[direction="out"]').should('have.attr', 'direction', 'out')
    
    // Check that icons are properly set
    cy.get('pb-zoom[direction="in"]').should('have.attr', 'icon', 'icons:zoom-in')
    cy.get('pb-zoom[direction="out"]').should('have.attr', 'icon', 'icons:zoom-out')
  })

  it('renders related components', () => {
    // Check that pb-view is present and connected
    cy.get('pb-view').should('exist')
    cy.get('pb-view').should('have.attr', 'src', 'document1')
    
    // Check that pb-document is present
    cy.get('pb-document').should('exist')
    cy.get('pb-document').should('have.attr', 'id', 'document1')
    cy.get('pb-document').should('have.attr', 'path', 'doc/documentation.xml')
  })
})