// E2E: pb-search search form functionality

describe('Demo: pb-search', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-search.html')
    // Wait for components to be visible
    cy.get('pb-search', { timeout: 10000 }).should('be.visible')
  })

  it('renders search form with checkboxes and buttons', () => {
    // Check that pb-search component exists
    cy.get('pb-search').should('exist')
    
    // Check that search targets (checkboxes) are present
    cy.get('input[name="tei-target"]').should('have.length', 2)
    cy.get('input[name="tei-target"][value="tei-text"]').should('exist')
    cy.get('input[name="tei-target"][value="tei-head"]').should('exist')
    
    // Check that labels are present
    cy.get('label[for="tei-text"]').should('exist')
    cy.get('label[for="tei-head"]').should('exist')
    
    // Check that buttons are present
    cy.get('button[slot="searchButton"]').should('exist')
    cy.get('button[slot="resetButton"]').should('exist')
  })

  it('supports checkbox interactions', () => {
    // Test checkbox functionality
    cy.get('input[name="tei-target"][value="tei-text"]').check()
    cy.get('input[name="tei-target"][value="tei-text"]').should('be.checked')
    
    cy.get('input[name="tei-target"][value="tei-head"]').check()
    cy.get('input[name="tei-target"][value="tei-head"]').should('be.checked')
    
    // Uncheck one
    cy.get('input[name="tei-target"][value="tei-text"]').uncheck()
    cy.get('input[name="tei-target"][value="tei-text"]').should('not.be.checked')
  })

  it('has proper accessibility attributes', () => {
    // Check that checkboxes have proper labels
    cy.get('input[name="tei-target"][value="tei-text"]').should('have.attr', 'id', 'tei-text')
    cy.get('input[name="tei-target"][value="tei-head"]').should('have.attr', 'id', 'tei-head')
    
    // Check that labels are properly associated
    cy.get('label[for="tei-text"]').should('exist')
    cy.get('label[for="tei-head"]').should('exist')
    
    // Check that buttons have proper attributes
    cy.get('button[slot="searchButton"]').should('exist')
    cy.get('button[slot="resetButton"]').should('exist')
  })

  it('renders related components', () => {
    // Check that pb-paginate is present
    cy.get('pb-paginate').should('exist')
    cy.get('pb-paginate').should('have.attr', 'per-page', '10')
    cy.get('pb-paginate').should('have.attr', 'range', '5')
    
    // Check that pb-load is present
    cy.get('pb-load').should('exist')
    cy.get('pb-load').should('have.attr', 'url', 'api/search')
    
    // Check that pb-progress is present
    cy.get('pb-progress').should('exist')
  })
})