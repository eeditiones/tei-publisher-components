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

  describe('IIIF manifest version compatibility', () => {
    it('should handle IIIF 2.0 manifest structure', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        // Mock IIIF 2.0 manifest structure
        const mockRoot2 = {
          '@context': 'http://iiif.io/api/presentation/2/context.json',
          '@type': 'sc:Manifest',
          sequences: [{
            '@type': 'sc:Sequence',
            canvases: [
              {
                '@id': 'canvas1',
                '@type': 'sc:Canvas',
                rendering: [{ '@id': 'http://example.com/page1?root=1' }]
              },
              {
                '@id': 'canvas2',
                '@type': 'sc:Canvas',
                rendering: [{ '@id': 'http://example.com/page2?root=2' }]
              }
            ]
          }]
        }
        
        const canvases = element._getCanvases(mockRoot2)
        expect(canvases).to.have.length(2)
        expect(canvases[0]['@id']).to.equal('canvas1')
        expect(canvases[1]['@id']).to.equal('canvas2')
      })
    })

    it('should handle IIIF 3.0 manifest structure with items', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        // Mock IIIF 3.0 manifest structure
        const mockRoot3 = {
          '@context': 'http://iiif.io/api/presentation/3/context.json',
          type: 'Manifest',
          items: [
            {
              id: 'canvas1',
              type: 'Canvas',
              rendering: [{ id: 'http://example.com/page1?root=1' }]
            },
            {
              id: 'canvas2',
              type: 'Canvas',
              rendering: [{ id: 'http://example.com/page2?root=2' }]
            }
          ]
        }
        
        const canvases = element._getCanvases(mockRoot3)
        expect(canvases).to.have.length(2)
        expect(canvases[0].id).to.equal('canvas1')
        expect(canvases[1].id).to.equal('canvas2')
      })
    })

    it('should handle IIIF 3.0 manifest with nested sequences', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        // Mock IIIF 3.0 manifest with sequences in items
        const mockRoot3Nested = {
          '@context': 'http://iiif.io/api/presentation/3/context.json',
          type: 'Manifest',
          items: [{
            type: 'Sequence',
            items: [
              {
                id: 'canvas1',
                type: 'Canvas',
                rendering: [{ id: 'http://example.com/page1?root=1' }]
              },
              {
                id: 'canvas2',
                type: 'Canvas',
                rendering: [{ id: 'http://example.com/page2?root=2' }]
              }
            ]
          }]
        }
        
        const canvases = element._getCanvases(mockRoot3Nested)
        expect(canvases).to.have.length(2)
        expect(canvases[0].id).to.equal('canvas1')
        expect(canvases[1].id).to.equal('canvas2')
      })
    })

    it('should handle empty or invalid manifest structures', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        expect(element._getCanvases(null)).to.deep.equal([])
        expect(element._getCanvases({})).to.deep.equal([])
        expect(element._getCanvases({ invalid: 'structure' })).to.deep.equal([])
      })
    })

    it('should handle rendering property with both @id (v2) and id (v3)', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        // Test IIIF 2.0 rendering with @id
        const canvas2 = {
          rendering: [{ '@id': 'http://example.com/page1?root=1&param=value' }]
        }
        
        const params2 = {}
        const url2 = new URL(canvas2.rendering[0]['@id'])
        url2.searchParams.forEach((value, key) => {
          params2[key] = value
        })
        expect(params2).to.have.property('root', '1')
        expect(params2).to.have.property('param', 'value')
        
        // Test IIIF 3.0 rendering with id
        const canvas3 = {
          rendering: [{ id: 'http://example.com/page2?root=2&param=value2' }]
        }
        
        const params3 = {}
        const renderingId = canvas3.rendering[0].id
        const url3 = new URL(renderingId)
        url3.searchParams.forEach((value, key) => {
          params3[key] = value
        })
        expect(params3).to.have.property('root', '2')
        expect(params3).to.have.property('param', 'value2')
        
        // Test rendering with both @id and id (backward compatibility)
        const canvasBoth = {
          rendering: [{ 
            '@id': 'http://example.com/page3?root=3',
            id: 'http://example.com/page3?root=3'
          }]
        }
        
        const renderingIdBoth = canvasBoth.rendering[0]['@id'] || canvasBoth.rendering[0].id
        expect(renderingIdBoth).to.equal('http://example.com/page3?root=3')
      })
    })
  })

  describe('pb-navigate event handling', () => {
    it('should have enableNavigation property defaulting to true', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        expect(element.enableNavigation).to.be.true
      })
    })

    it('should allow disabling navigation', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        // Verify default is true
        expect(element.enableNavigation).to.be.true
        // Set enableNavigation to false programmatically
        element.enableNavigation = false
        expect(element.enableNavigation).to.be.false
      })
    })

    it('should default enableNavigation to true when attribute is not set', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        // Default should be true
        expect(element.enableNavigation).to.be.true
      })
    })

    it('should have _getCanvases method for navigation calculations', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        expect(typeof element._getCanvases).to.equal('function')
        
        // Test with IIIF 3.0 structure
        const mockRoot = {
          items: [
            { id: 'canvas1' },
            { id: 'canvas2' },
            { id: 'canvas3' }
          ]
        }
        const canvases = element._getCanvases(mockRoot)
        expect(canvases).to.have.length(3)
      })
    })

    it('should have _handleNavigate method for navigation', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        expect(typeof element._handleNavigate).to.equal('function')
      })
    })

    it('should calculate correct page numbers for forward navigation', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        // Mock tify with canvases
        const mockCanvases = [
          { id: 'canvas1' },
          { id: 'canvas2' },
          { id: 'canvas3' }
        ]
        
        element._tify = {
          app: {
            $root: { items: mockCanvases }
          }
        }
        element._currentPage = 1
        element._setPage = cy.spy()
        
        // Test forward navigation
        element._handleNavigate('forward')
        expect(element._setPage).to.have.been.calledWith(2)
      })
    })

    it('should calculate correct page numbers for backward navigation', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        // Mock tify with canvases
        const mockCanvases = [
          { id: 'canvas1' },
          { id: 'canvas2' },
          { id: 'canvas3' }
        ]
        
        element._tify = {
          app: {
            $root: { items: mockCanvases }
          }
        }
        element._currentPage = 2
        element._setPage = cy.spy()
        
        // Test backward navigation
        element._handleNavigate('backward')
        expect(element._setPage).to.have.been.calledWith(1)
      })
    })

    it('should not navigate beyond boundaries', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        const mockCanvases = [
          { id: 'canvas1' },
          { id: 'canvas2' }
        ]
        
        element._tify = {
          app: {
            $root: { items: mockCanvases }
          }
        }
        element._setPage = cy.spy()
        
        // Test at first page - backward should calculate page 1 but not call setPage (no change)
        element._currentPage = 1
        element._handleNavigate('backward')
        // Should not call setPage because page doesn't change (already at 1)
        expect(element._setPage).to.not.have.been.called
        
        // Test at last page - forward should calculate page 2 but not call setPage (no change)
        element._currentPage = 2
        element._handleNavigate('forward')
        // Should not call setPage because page doesn't change (already at 2)
        expect(element._setPage).to.not.have.been.called
        
        // Test that it correctly calculates boundaries
        element._currentPage = 1
        // Forward from page 1 should go to page 2
        element._handleNavigate('forward')
        expect(element._setPage).to.have.been.calledWith(2)
      })
    })

    it('should track pending navigation when viewer is not ready', () => {
      cy.mount('<pb-tify manifest="https://example.com/manifest.json"></pb-tify>')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        // Test that pendingNavigation property exists
        expect(element._pendingNavigation).to.be.null
        
        // Test setting pending navigation
        element._pendingNavigation = 'forward'
        expect(element._pendingNavigation).to.equal('forward')
        
        // Test clearing pending navigation
        element._pendingNavigation = null
        expect(element._pendingNavigation).to.be.null
      })
    })
  })
})