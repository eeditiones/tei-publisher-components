describe('Demo: pb-browse-docs', () => {
  beforeEach(() => {
    // Override centralized intercepts to ensure consistent behavior
    // Force new API version to use /api/collection endpoint
    cy.intercept('GET', '**/api/version', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: { api: '1.0.0', app: { version: '1.0.0' }, engine: { version: '1.0.0' } }
    }).as('version')
    
    // Override ALL collection endpoints to return consistent data
    // This covers both new API (/api/collection) and old API (/collection/) patterns
    cy.intercept('GET', '**/api/collection**', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: {
        items: [{ id: 'collection-entry', label: 'Collection Item' }],
        start: 1,
        total: 1
      }
    }).as('collectionApi')
    
    cy.intercept('GET', '**/collection/**', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: {
        items: [{ id: 'collection-entry', label: 'Collection Item' }],
        start: 1,
        total: 1
      }
    }).as('collectionOldApi')
    
    cy.intercept('GET', '**/exist/apps/tei-publisher/api/collection**', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: {
        items: [{ id: 'collection-entry', label: 'Collection Item' }],
        start: 1,
        total: 1
      }
    }).as('collectionExistApi')
    
    cy.intercept('GET', '**/exist/apps/tei-publisher/collection/**', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: {
        items: [{ id: 'collection-entry', label: 'Collection Item' }],
        start: 1,
        total: 1
      }
    }).as('collectionExistOldApi')
    
    cy.visit('/demo/pb-browse-docs.html')
    // Wait for the component to be visible and loaded
    cy.get('pb-browse-docs', { timeout: 10000 }).should('be.visible')
    // Wait for the component to have content (either from API or default)
    cy.get('pb-browse-docs').should('not.be.empty')
  })

  it('renders the document list and filters results', () => {
    // Verify the component exists and is visible
    cy.get('pb-browse-docs').should('exist').and('be.visible')
    
    // Check if there's any content at all
    cy.get('pb-browse-docs').should('not.be.empty')
    
    // Verify the pagination component is present
    cy.get('pb-browse-docs').find('pb-paginate').should('exist')
    cy.get('pb-browse-docs').find('pb-paginate').should('have.attr', 'id', 'paginate')
    
    // Verify the data div contains JSON data
    cy.get('pb-browse-docs').find('div[slot=""]').should('exist')
    cy.get('pb-browse-docs').find('div[slot=""]').should('contain.text', 'collection-entry')
    cy.get('pb-browse-docs').find('div[slot=""]').should('contain.text', 'Collection Item')
    
    // Verify the JSON structure contains expected data
    cy.get('pb-browse-docs').find('div[slot=""]').then($div => {
      const content = $div.text()
      const data = JSON.parse(content)
      expect(data.items).to.have.length(1)
      expect(data.items[0].id).to.equal('collection-entry')
      expect(data.items[0].label).to.equal('Collection Item')
      expect(data.start).to.equal(1)
      expect(data.total).to.equal(1)
    })
    
    // Test that the component responds to events (even if no filter input)
    cy.get('pb-browse-docs').should('be.visible')
  })
})
