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
    
    cy.visit('/')
    cy.get('body').should('exist')
    cy.url().should('include', '/exist/apps/tei-publisher')
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

  it('can load demo pages without errors', () => {
    if (!Cypress.env('realBackend')) return
    
    // Test a few key demo pages that should work with real backend
    const demoPages = [
      '/demo/pb-download.html',
      '/demo/pb-media-query.html',
      '/demo/pb-progress.html'
    ]
    
    demoPages.forEach(page => {
      cy.visit(page)
      cy.get('body').should('exist')
      cy.document().its('readyState').should('eq', 'complete')
    })
  })
})
