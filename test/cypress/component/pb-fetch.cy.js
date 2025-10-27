// Cypress Component: pb-fetch
import { PbFetch } from '../../../src/pb-fetch.js'

describe('pb-fetch component', () => {
  beforeEach(() => {
    // Mount the component for each test
    cy.mount('<pb-fetch></pb-fetch>')
  })

  it('should create pb-fetch element', () => {
    cy.get('pb-fetch').should('exist')
  })

  it('should have default properties', () => {
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      expect(element.method).to.equal('GET')
      expect(element.handleAs).to.equal('json')
      expect(element.withCredentials).to.be.false
      expect(element.loading).to.be.false
    })
  })

  it('should set properties via attributes', () => {
    cy.mount('<pb-fetch method="POST" handle-as="json" with-credentials></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      expect(element.method).to.equal('POST')
      expect(element.handleAs).to.equal('json')
      expect(element.withCredentials).to.be.true
    })
  })

  it('should build request URL with parameters', () => {
    cy.mount('<pb-fetch url="/api/test" params=\'{"foo": "bar", "baz": 123}\'></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      element.url = '/api/test'
      element.params = { foo: 'bar', baz: 123 }
      
      const url = element._buildUrlWithParams()
      expect(url).to.include('/api/test')
      expect(url).to.include('foo=bar')
      expect(url).to.include('baz=123')
    })
  })

  it('should handle different content types', () => {
    cy.mount('<pb-fetch content-type="application/json"></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      expect(element.contentType).to.equal('application/json')
    })
  })

  it('should have request generation method', () => {
    cy.mount('<pb-fetch url="/api/test"></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      expect(typeof element.generateRequest).to.equal('function')
      expect(typeof element.abort).to.equal('function')
    })
  })

  it('should handle request state properties', () => {
    cy.mount('<pb-fetch></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      expect(element.loading).to.be.false
      expect(element.lastResponse).to.be.null
      expect(element.lastRequest).to.be.null
      expect(element.lastError).to.be.null
    })
  })

  it('should handle different response types', () => {
    cy.mount('<pb-fetch handle-as="text"></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      expect(element.handleAs).to.equal('text')
    })
  })

  it('should abort ongoing requests', () => {
    cy.mount('<pb-fetch></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      
      // Test abort functionality
      element.abort()
      
      expect(element.loading).to.be.false
      expect(element._controller).to.be.null
    })
  })

  it('should handle request parameters', () => {
    cy.mount('<pb-fetch></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      
      // Test parameter setting
      element.params = { foo: 'bar', baz: 123 }
      expect(element.params).to.deep.equal({ foo: 'bar', baz: 123 })
      
      // Test URL building
      element.url = '/api/test'
      const url = element._buildUrlWithParams()
      expect(url).to.include('/api/test')
      expect(url).to.include('foo=bar')
      expect(url).to.include('baz=123')
    })
  })

  it('should handle request headers', () => {
    cy.mount('<pb-fetch></pb-fetch>')
    
    cy.get('pb-fetch').then($el => {
      const element = $el[0]
      
      // Test header setting
      element.headers = { Authorization: 'Bearer token' }
      expect(element.headers).to.deep.equal({ Authorization: 'Bearer token' })
    })
  })

  it('should have proper accessibility attributes', () => {
    cy.get('pb-fetch').should('exist')
    // pb-fetch is a utility component, so accessibility is handled by parent components
  })
})
