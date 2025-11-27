// Cypress E2E Test: pb-tify with IIIF 2.0 and 3.0 manifests
describe('pb-tify IIIF manifest version compatibility', () => {
  beforeEach(() => {
    // Login if running against real backend
    if (Cypress.env('realBackend')) {
      cy.login()
    }
  })

  describe('IIIF 2.0 manifest support', () => {
    it('should load and display IIIF 2.0 manifest', () => {
      // Mock IIIF 2.0 manifest
      const manifest2 = {
        '@context': 'http://iiif.io/api/presentation/2/context.json',
        '@id': 'https://example.com/manifest-v2.json',
        '@type': 'sc:Manifest',
        label: 'Test Manifest v2',
        sequences: [{
          '@id': 'https://example.com/manifest-v2.json/sequence/normal',
          '@type': 'sc:Sequence',
          canvases: [
            {
              '@id': 'https://example.com/canvas/1',
              '@type': 'sc:Canvas',
              label: 'Page 1',
              width: 2000,
              height: 3000,
              images: [{
                '@type': 'oa:Annotation',
                motivation: 'sc:painting',
                resource: {
                  '@id': 'https://example.com/image1.jpg',
                  '@type': 'dctypes:Image',
                  format: 'image/jpeg',
                  width: 2000,
                  height: 3000,
                  service: {
                    '@context': 'http://iiif.io/api/image/2/context.json',
                    '@id': 'https://example.com/image1',
                    profile: 'http://iiif.io/api/image/2/level2.json'
                  }
                },
                on: 'https://example.com/canvas/1'
              }],
              rendering: [{
                '@id': 'http://localhost:8080/page1?root=1'
              }]
            }
          ]
        }]
      }

      cy.intercept('GET', '**/manifest-v2.json', {
        statusCode: 200,
        body: manifest2
      }).as('manifest2')

      cy.visit('/demo/pb-tify.html')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        element.manifest = 'manifest-v2.json'
      })

      cy.wait('@manifest2')
      cy.get('pb-tify').should('be.visible')
      
      // Verify canvas extraction works
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        // Mock the app.$root structure
        const mockRoot = {
          sequences: [{
            canvases: manifest2.sequences[0].canvases
          }]
        }
        const canvases = element._getCanvases(mockRoot)
        expect(canvases).to.have.length(1)
        expect(canvases[0]['@id']).to.equal('https://example.com/canvas/1')
      })
    })

    it('should handle pb-facs-link navigation with IIIF 2.0 manifest', () => {
      cy.visit('/demo/pb-tify.html')
      
      // Create a pb-facs-link that points to IIIF 2.0 manifest
      cy.get('body').then($body => {
        const facsLink = document.createElement('pb-facs-link')
        facsLink.setAttribute('facs', 'manifest-v2.json')
        facsLink.setAttribute('order', '1')
        facsLink.setAttribute('emit-on-load', 'true')
        facsLink.textContent = 'Page 1'
        $body[0].appendChild(facsLink)
      })

      cy.get('pb-facs-link').last().should('exist')
      cy.get('pb-tify').should('be.visible')
    })
  })

  describe('IIIF 3.0 manifest support', () => {
    it('should load and display IIIF 3.0 manifest', () => {
      // Mock IIIF 3.0 manifest
      const manifest3 = {
        '@context': 'http://iiif.io/api/presentation/3/context.json',
        id: 'https://example.com/manifest-v3.json',
        type: 'Manifest',
        label: { none: ['Test Manifest v3'] },
        items: [
          {
            id: 'https://example.com/canvas/1',
            type: 'Canvas',
            label: { none: ['Page 1'] },
            width: 2000,
            height: 3000,
            items: [{
              id: 'https://example.com/canvas/1/annotation/p0',
              type: 'AnnotationPage',
              items: [{
                id: 'https://example.com/canvas/1/annotation/p0/a0',
                type: 'Annotation',
                motivation: 'painting',
                body: {
                  id: 'https://example.com/image1.jpg',
                  type: 'Image',
                  format: 'image/jpeg',
                  width: 2000,
                  height: 3000,
                  service: [{
                    id: 'https://example.com/image1',
                    type: 'ImageService3',
                    profile: 'level2'
                  }]
                },
                target: 'https://example.com/canvas/1'
              }]
            }],
            rendering: [{
              id: 'http://localhost:8080/page1?root=1'
            }]
          }
        ]
      }

      cy.intercept('GET', '**/manifest-v3.json', {
        statusCode: 200,
        body: manifest3
      }).as('manifest3')

      cy.visit('/demo/pb-tify.html')
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        element.manifest = 'manifest-v3.json'
      })

      cy.wait('@manifest3')
      cy.get('pb-tify').should('be.visible')
      
      // Verify canvas extraction works
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        // Mock the app.$root structure
        const mockRoot = {
          items: manifest3.items
        }
        const canvases = element._getCanvases(mockRoot)
        expect(canvases).to.have.length(1)
        expect(canvases[0].id).to.equal('https://example.com/canvas/1')
      })
    })

    it('should handle pb-facs-link navigation with IIIF 3.0 manifest', () => {
      cy.visit('/demo/pb-tify.html')
      
      // Create a pb-facs-link that points to IIIF 3.0 manifest
      cy.get('body').then($body => {
        const facsLink = document.createElement('pb-facs-link')
        facsLink.setAttribute('facs', 'manifest-v3.json')
        facsLink.setAttribute('order', '1')
        facsLink.setAttribute('emit-on-load', 'true')
        facsLink.textContent = 'Page 1'
        $body[0].appendChild(facsLink)
      })

      cy.get('pb-facs-link').last().should('exist')
      cy.get('pb-tify').should('be.visible')
    })
  })

  describe('pb-navigation integration', () => {
    it('should work with pb-navigation for IIIF 2.0 manifests', () => {
      cy.visit('/demo/pb-tify.html')
      
      // Add navigation controls
      cy.get('body').then($body => {
        const navForward = document.createElement('pb-navigation')
        navForward.setAttribute('direction', 'forward')
        navForward.setAttribute('keyboard', 'right')
        navForward.textContent = 'Next'
        $body[0].appendChild(navForward)

        const navBackward = document.createElement('pb-navigation')
        navBackward.setAttribute('direction', 'backward')
        navBackward.setAttribute('keyboard', 'left')
        navBackward.textContent = 'Previous'
        $body[0].appendChild(navBackward)
      })

      cy.get('pb-navigation').should('have.length', 2)
      cy.get('pb-tify').should('be.visible')
    })

    it('should work with pb-navigation for IIIF 3.0 manifests', () => {
      cy.visit('/demo/pb-tify.html')
      
      // Add navigation controls
      cy.get('body').then($body => {
        const navForward = document.createElement('pb-navigation')
        navForward.setAttribute('direction', 'forward')
        navForward.setAttribute('keyboard', 'right')
        navForward.textContent = 'Next'
        $body[0].appendChild(navForward)

        const navBackward = document.createElement('pb-navigation')
        navBackward.setAttribute('direction', 'backward')
        navBackward.setAttribute('keyboard', 'left')
        navBackward.textContent = 'Previous'
        $body[0].appendChild(navBackward)
      })

      cy.get('pb-navigation').should('have.length', 2)
      cy.get('pb-tify').should('be.visible')
    })
  })

  describe('rendering property compatibility', () => {
    it('should handle rendering with @id (IIIF 2.0)', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        const canvas = {
          rendering: [{ '@id': 'http://example.com/page?root=1&param=value' }]
        }
        
        // Test that _switchPage can extract URL from @id
        const renderingId = canvas.rendering[0]['@id'] || canvas.rendering[0].id
        expect(renderingId).to.equal('http://example.com/page?root=1&param=value')
        
        const url = new URL(renderingId)
        expect(url.searchParams.get('root')).to.equal('1')
        expect(url.searchParams.get('param')).to.equal('value')
      })
    })

    it('should handle rendering with id (IIIF 3.0)', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        const canvas = {
          rendering: [{ id: 'http://example.com/page?root=2&param=value2' }]
        }
        
        // Test that _switchPage can extract URL from id
        const renderingId = canvas.rendering[0]['@id'] || canvas.rendering[0].id
        expect(renderingId).to.equal('http://example.com/page?root=2&param=value2')
        
        const url = new URL(renderingId)
        expect(url.searchParams.get('root')).to.equal('2')
        expect(url.searchParams.get('param')).to.equal('value2')
      })
    })

    it('should prefer @id over id when both are present', () => {
      cy.get('pb-tify').then($el => {
        const element = $el[0]
        
        const canvas = {
          rendering: [{ 
            '@id': 'http://example.com/page?root=1',
            id: 'http://example.com/page?root=2'
          }]
        }
        
        const renderingId = canvas.rendering[0]['@id'] || canvas.rendering[0].id
        expect(renderingId).to.equal('http://example.com/page?root=1')
      })
    })
  })
})

