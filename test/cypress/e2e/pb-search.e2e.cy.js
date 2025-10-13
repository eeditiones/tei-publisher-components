// E2E: pb-search component functionality

describe('pb-search', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-search.html')
    cy.get('pb-search', { timeout: 10000 }).should('be.visible')
  })

  it('should render search form with checkboxes and buttons', () => {
    cy.get('pb-search').should('exist')
    
    cy.get('input[name="tei-target"]').should('have.length', 2)
    cy.get('input[name="tei-target"][value="tei-text"]').should('exist')
    cy.get('input[name="tei-target"][value="tei-head"]').should('exist')
    
    cy.get('label[for="tei-text"]').should('exist')
    cy.get('label[for="tei-head"]').should('exist')
    
    cy.get('button[slot="searchButton"]').should('exist')
    cy.get('button[slot="resetButton"]').should('exist')
  })

  it('should support checkbox interactions', () => {
    cy.get('input[name="tei-target"][value="tei-text"]').check()
    cy.get('input[name="tei-target"][value="tei-text"]').should('be.checked')
    
    cy.get('input[name="tei-target"][value="tei-head"]').check()
    cy.get('input[name="tei-target"][value="tei-head"]').should('be.checked')
    
    cy.get('input[name="tei-target"][value="tei-text"]').uncheck()
    cy.get('input[name="tei-target"][value="tei-text"]').should('not.be.checked')
  })

  it('should have proper accessibility attributes', () => {
    cy.get('input[name="tei-target"][value="tei-text"]').should('have.attr', 'id', 'tei-text')
    cy.get('input[name="tei-target"][value="tei-head"]').should('have.attr', 'id', 'tei-head')
    
    cy.get('label[for="tei-text"]').should('exist')
    cy.get('label[for="tei-head"]').should('exist')
    
    cy.get('button[slot="searchButton"]').should('exist')
    cy.get('button[slot="resetButton"]').should('exist')
  })

  it('should render related components', () => {
    cy.get('pb-paginate').should('exist')
    cy.get('pb-paginate').should('have.attr', 'per-page', '10')
    cy.get('pb-paginate').should('have.attr', 'range', '5')
    
    cy.get('pb-load').should('exist')
    cy.get('pb-load').should('have.attr', 'url', 'api/search')
    
    cy.get('pb-progress').should('exist')
  })
})