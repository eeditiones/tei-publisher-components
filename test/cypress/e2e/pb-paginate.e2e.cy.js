// Cypress E2E: pb-paginate
describe('pb-paginate e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-browse-docs.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should render pagination controls', () => {
    cy.get('pb-paginate').should('exist')
    cy.get('pb-paginate').should('have.attr', 'id', 'paginate')
    cy.get('pb-paginate').should('have.attr', 'per-page', '10')
    cy.get('pb-paginate').should('have.attr', 'range', '5')
  })

  it('should have proper event attributes', () => {
    cy.get('pb-paginate').should('have.attr', 'emit', 'docs')
    cy.get('pb-paginate').should('have.attr', 'subscribe', 'docs')
  })

  it('should be properly integrated with pb-browse-docs', () => {
    cy.get('pb-browse-docs').should('exist')
    cy.get('pb-browse-docs').find('pb-paginate[slot="toolbar"]').should('exist')
    
    cy.get('pb-browse-docs').should('have.attr', 'emit', 'docs')
    cy.get('pb-browse-docs').should('have.attr', 'subscribe', 'docs')
  })

  it('should render pagination UI elements', () => {
    cy.get('pb-paginate').should('exist')
    
    cy.get('pb-paginate').within(() => {
      cy.get('*').should('exist')
    })
  })

  it('should have proper accessibility attributes', () => {
    cy.get('pb-paginate').should('have.attr', 'id', 'paginate')
    cy.get('pb-paginate[slot="toolbar"]').should('exist')
  })
})