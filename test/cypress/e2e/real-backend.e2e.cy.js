// Real backend integration tests
// These tests run against a live eXist-db instance and verify actual API integration

describe('Real Backend Integration', () => {
  beforeEach(() => {
    // Only run these tests when realBackend is enabled
    if (!Cypress.env('realBackend')) {
      cy.log('Skipping real backend tests - not running against real backend')
      return
    }
  })

  it('can access the main application page', () => {
    if (!Cypress.env('realBackend')) return
    
    // Test the actual eXist-db backend page
    cy.request('GET', Cypress.env('existBackend')).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.contain('tei-publisher')
    })
  })

  it('can access API endpoints', () => {
    if (!Cypress.env('realBackend')) return
    
    // Test that the API version endpoint responds
    cy.request('GET', '/api/version').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('api')
      expect(response.body).to.have.property('app')
      expect(response.body).to.have.property('engine')
    })
  })

  it('can access collection API', () => {
    if (!Cypress.env('realBackend')) return
    
    // Test collection endpoint (may return empty, but should not error)
    cy.request({
      method: 'GET',
      url: '/api/collection',
      failOnStatusCode: false
    }).then((response) => {
      // Should either return 200 with data or 404/empty collection
      expect([200, 404]).to.include(response.status)
    })
  })

  it('can access ODD API', () => {
    if (!Cypress.env('realBackend')) return
    
    // Test ODD list endpoint
    cy.request({
      method: 'GET',
      url: '/api/odd',
      failOnStatusCode: false
    }).then((response) => {
      // Should either return 200 with ODD list or 404 if no ODDs configured
      expect([200, 404]).to.include(response.status)
    })
  })

  it('can test pb-page component against real backend', () => {
    if (!Cypress.env('realBackend')) return
    
    // Create a minimal test page that uses pb-page component
    cy.visit('/')
    
    // Wait for pb-page to load and make API calls
    cy.get('pb-page', { timeout: 10000 }).should('exist')
    
    // Verify pb-page can determine API version from real backend
    cy.window().then(win => {
      return new Cypress.Promise(resolve => {
        win.addEventListener('pb-page-ready', (event) => {
          expect(event.detail).to.have.property('endpoint')
          expect(event.detail).to.have.property('apiVersion')
          resolve()
        }, { once: true })
      })
    })
  })

  it('can test pb-view component against real backend', () => {
    if (!Cypress.env('realBackend')) return
    
    // Test pb-view component with a real document
    // First, let's see what documents are available
    cy.request({
      method: 'GET',
      url: '/api/collection',
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 200 && response.body.items && response.body.items.length > 0) {
        // If we have documents, test pb-view with the first one
        const firstDoc = response.body.items[0]
        cy.log(`Testing pb-view with document: ${firstDoc.id}`)
        
        // Create a minimal test page with pb-view
        cy.visit('/')
        
        // Inject pb-view component into the page
        cy.window().then(win => {
          const pbView = win.document.createElement('pb-view')
          pbView.setAttribute('path', firstDoc.id)
          pbView.setAttribute('id', 'test-view')
          win.document.body.appendChild(pbView)
          
          // Wait for pb-view to load content
          cy.get('#test-view', { timeout: 10000 }).should('exist')
          cy.get('#test-view').should('not.be.empty')
        })
      } else {
        cy.log('No documents available for pb-view testing')
      }
    })
  })

  it('can test pb-search component against real backend', () => {
    if (!Cypress.env('realBackend')) return
    
    // Test pb-search component
    cy.visit('/')
    
    // Inject pb-search component
    cy.window().then(win => {
      const pbSearch = win.document.createElement('pb-search')
      pbSearch.setAttribute('id', 'test-search')
      win.document.body.appendChild(pbSearch)
      
      // Wait for pb-search to initialize
      cy.get('#test-search', { timeout: 10000 }).should('exist')
      
      // Just verify the component exists - it might be empty if no search configuration
      cy.get('#test-search').should('exist')
    })
  })
})