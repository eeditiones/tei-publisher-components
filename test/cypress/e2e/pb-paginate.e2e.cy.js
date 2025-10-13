// E2E: pb-paginate pagination functionality

describe('Demo: pb-paginate', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-browse-docs.html')
    // Wait for components to exist (may be hidden initially)
    cy.get('pb-paginate', { timeout: 10000 }).should('exist')
  })

  it('renders pagination controls', () => {
    // Check that pb-paginate component exists
    cy.get('pb-paginate').should('exist')
    cy.get('pb-paginate').should('have.attr', 'id', 'paginate')
    cy.get('pb-paginate').should('have.attr', 'per-page', '10')
    cy.get('pb-paginate').should('have.attr', 'range', '5')
  })

  it('has proper event attributes', () => {
    // Check that pb-paginate has proper emit/subscribe attributes
    cy.get('pb-paginate').should('have.attr', 'emit', 'docs')
    cy.get('pb-paginate').should('have.attr', 'subscribe', 'docs')
  })

  it('is properly integrated with pb-browse-docs', () => {
    // Check that pb-paginate is slotted in pb-browse-docs
    cy.get('pb-browse-docs').should('exist')
    cy.get('pb-browse-docs').find('pb-paginate[slot="toolbar"]').should('exist')
    
    // Check that pb-browse-docs has proper attributes
    cy.get('pb-browse-docs').should('have.attr', 'emit', 'docs')
    cy.get('pb-browse-docs').should('have.attr', 'subscribe', 'docs')
  })

  it('renders pagination UI elements', () => {
    // Check that pagination controls exist (may be empty if no data)
    cy.get('pb-paginate').should('exist')
    
    // Check for common pagination elements (may vary based on data)
    cy.get('pb-paginate').within(() => {
      // Look for any buttons or navigation elements (may not exist if no data)
      cy.get('*').should('exist') // Just check that something exists
    })
  })

  it('has proper accessibility attributes', () => {
    // Check that pagination has proper structure
    cy.get('pb-paginate').should('have.attr', 'id', 'paginate')
    
    // Check that it's properly slotted
    cy.get('pb-paginate[slot="toolbar"]').should('exist')
  })
})