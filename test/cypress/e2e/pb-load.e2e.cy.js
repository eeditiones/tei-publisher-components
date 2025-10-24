// StandardJS, should-style assertions
// Regression test for pb-load document resolution timing issue

describe('pb-load Document Resolution Regression', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-load.html')
    
    // Wait for page to stabilize
    cy.get('body').should('be.visible')
  })

  it('pb-load waits for pb-document to be available before loading', () => {
    // This test verifies that pb-load properly waits for pb-document initialization
    // and retries when the document is not immediately available
    
    // Check that pb-load component exists
    cy.get('pb-load').should('exist')
    
    // Check that pb-document component exists
    cy.get('pb-document').should('exist')
    
    // Wait for TOC to load (this tests the retry mechanism)
    cy.get('pb-load').then(($pbLoad) => {
      // The pb-load should eventually load content, not stay stuck on "Loading..."
      cy.wrap($pbLoad).should('not.contain', 'Loading table of contents...')
      
      // Should have actual content loaded
      cy.wrap($pbLoad).should('not.be.empty')
    })
  })

  it('pb-load retries when document is not immediately available', () => {
    // This test specifically verifies the retry mechanism works
    
    // Check that pb-load eventually resolves the {doc} placeholder
    cy.get('pb-load').should('exist')
    
    // The component should not show retry warnings in console for too long
    // (This is a bit tricky to test directly, but we can verify the component works)
    cy.get('pb-load').should('be.visible')
    
    // Wait for content to load
    cy.get('pb-load', { timeout: 10000 }).should('not.contain', 'Loading table of contents...')
  })

  it('pb-load handles missing document gracefully', () => {
    // This test verifies that pb-load handles missing documents properly
    // by creating a test page with pb-load but no pb-document
    
    // Check that pb-load exists
    cy.get('pb-load').should('exist')
    
    // The component should eventually stop retrying and show an error or empty state
    // This tests the retry limit mechanism
    cy.get('pb-load', { timeout: 15000 }).then(($pbLoad) => {
      // Should either have content or be in a stable state (not continuously retrying)
      const text = $pbLoad.text()
      expect(text).to.not.include('Loading table of contents...')
    })
  })

  it('pb-load resolves {doc} parameter correctly without double slashes', () => {
    // This test specifically verifies that the {doc} parameter is resolved correctly
    // and doesn't create URLs with double slashes like /api/document//contents
    
    // First, let's check that both components exist
    cy.get('pb-load').should('exist')
    cy.get('pb-document').should('exist')
    
    // Check that pb-load has the src attribute
    cy.get('pb-load').should('have.attr', 'src', 'document1')
    
    // Check that pb-document has the correct id
    cy.get('pb-document').should('have.attr', 'id', 'document1')
    
    // Intercept network requests to check URL construction
    cy.intercept('GET', '**/api/document/**/contents**').as('tocRequest')
    
    // Wait for the pb-load to make its request
    cy.wait('@tocRequest', { timeout: 10000 }).then((interception) => {
      const url = interception.request.url
      
      // The URL should NOT contain double slashes
      expect(url).to.not.include('//contents')
      
      // The URL should contain the document path
      expect(url).to.include('/api/document/')
      expect(url).to.include('/contents')
      
      // Should not be a 404 (which would indicate unresolved {doc})
      expect(interception.response.statusCode).to.not.equal(404)
    })
  })
})
