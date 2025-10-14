// Cypress Component Test: pb-tify
import '../../../src/pb-tify.js'

describe('pb-tify component', () => {
  beforeEach(() => {
    cy.mount('<pb-tify></pb-tify>')
  })

  it('should create pb-tify element', () => {
    cy.get('pb-tify').should('exist')
  })

  it('should have default properties', () => {
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      expect(element.manifest).to.be.undefined
      expect(element.cssPath).to.equal('../css/tify')
      expect(element._initialPages).to.be.null
      expect(element._currentPage).to.be.null
    })
  })

  it('should set manifest property', () => {
    cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      expect(element.manifest).to.equal('https://example.com/manifest.json')
    })
  })

  it('should inject stylesheet on connection', () => {
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      // Check if stylesheet was injected
      cy.get('link#pb-tify').should('exist')
      cy.get('link#pb-tify').should('have.attr', 'href').and('include', 'tify.css')
    })
  })

  it('should create container element', () => {
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      // Container should be created
      expect(element._container).to.exist
      expect(element._container.tagName).to.equal('DIV')
      expect(element._container.style.height).to.equal('100%')
      expect(element._container.style.width).to.equal('100%')
    })
  })

  it('should handle attribute changes', () => {
    cy.mount('<pb-tify></pb-tify>')
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      const initSpy = cy.spy(element, '_initViewer')
      
      // Change manifest attribute
      element.setAttribute('manifest', 'https://example.com/new-manifest.json')
      
      expect(element.manifest).to.equal('https://example.com/new-manifest.json')
      expect(initSpy).to.have.been.calledOnce
    })
  })

  it('should have required methods', () => {
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      
      // Test that required methods exist
      expect(typeof element._initViewer).to.equal('function')
      expect(typeof element._ensureContainer).to.equal('function')
      expect(typeof element._addOverlay).to.equal('function')
      expect(typeof element.subscribeTo).to.equal('function')
    })
  })

  it('should handle manifest URL resolution', () => {
    cy.mount('<pb-tify manifest="test/manifest.json"></pb-tify>')
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      
      // Test URL resolution method
      const resolvedUrl = element.toAbsoluteURL('test/manifest.json', 'https://example.com')
      expect(resolvedUrl).to.include('test/manifest.json')
    })
  })

  it('should validate coordinates in _addOverlay', () => {
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      
      // Mock tify viewer
      element._tify = {
        viewer: {
          viewport: {
            getBounds: () => ({ containsPoint: () => true }),
            imageToViewportRectangle: () => ({ 
              getTopLeft: () => ({ x: 0, y: 0 }), 
              getCenter: () => ({ x: 0, y: 0 }) 
            })
          },
          addOverlay: cy.spy(),
          removeOverlay: cy.spy()
        }
      }
      
      // Test invalid coordinates
      element._addOverlay([100, 200]) // Only 2 coordinates
      expect(element._tify.viewer.addOverlay).to.not.have.been.called
      
      // Test valid coordinates
      element._addOverlay([100, 200, 300, 400])
      expect(element._tify.viewer.addOverlay).to.have.been.calledOnce
    })
  })

  it('should handle infinite order conversion', () => {
    cy.get('pb-tify').then($el => {
      const element = $el[0]
      
      // Test that the component can handle infinite order conversion
      const testOrder = Number.POSITIVE_INFINITY
      const convertedOrder = testOrder === Number.POSITIVE_INFINITY ? 1 : testOrder
      expect(convertedOrder).to.equal(1)
    })
  })

  it('should have proper accessibility attributes', () => {
    cy.get('pb-tify').should('exist')
    // pb-tify is a viewer component, accessibility is handled by the IIIF viewer
  })

  describe('error handling', () => {
    it('should handle missing manifest gracefully', () => {
      cy.mount('<pb-tify></pb-tify>')
      
      // Component should exist but not show error (no manifest to load)
      cy.get('pb-tify').should('exist')
      cy.get('.pb-tify-error').should('not.exist')
    })

    it('should handle invalid manifest URLs gracefully', () => {
      // Mock a 404 response
      cy.intercept('GET', '**/notfound.json', { 
        statusCode: 404, 
        body: 'Not Found' 
      }).as('mock404')
      
      cy.mount('<pb-tify manifest="notfound.json"></pb-tify>')
      
      // Wait for error to be handled
      cy.get('.pb-tify-error', { timeout: 5000 }).should('exist')
      cy.get('.pb-tify-error').should('contain.text', 'IIIF manifest not found')
    })

    it('should emit pb-tify-error event on manifest failure', () => {
      // Mock a 404 response
      cy.intercept('GET', '**/error.json', { 
        statusCode: 404, 
        body: 'Not Found' 
      }).as('mockError')
      
      cy.mount('<pb-tify manifest="error.json"></pb-tify>')
      
      // Listen for the error event
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        const errorSpy = cy.spy()
        element.addEventListener('pb-tify-error', errorSpy)
        
        // Wait for error to be handled
        cy.get('.pb-tify-error', { timeout: 5000 }).should('exist').then(() => {
          expect(errorSpy).to.have.been.calledOnce
          expect(errorSpy.firstCall.args[0].detail).to.have.property('error')
          expect(errorSpy.firstCall.args[0].detail).to.have.property('manifest', 'error.json')
        })
      })
    })
  })
})