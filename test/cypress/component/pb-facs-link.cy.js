// Cypress CT: pb-facs-link
import '../../../src/pb-facs-link.js'

describe('pb-facs-link', () => {
  beforeEach(() => {
    // Spy on console methods to test warnings
    cy.window().then((win) => {
      cy.spy(win.console, 'warn').as('consoleWarn')
      cy.spy(win.console, 'log').as('consoleLog')
    })
  })

  it('mounts', () => {
    cy.mount('<pb-facs-link></pb-facs-link>')
    cy.get('pb-facs-link').should('exist')
  })

  it('should have default properties', () => {
    cy.mount('<pb-facs-link></pb-facs-link>')
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      expect(element.facs).to.be.undefined
      expect(element.coordinates).to.be.undefined
      expect(element.label).to.equal('')
      expect(element.order).to.equal(Number.POSITIVE_INFINITY)
      expect(element.trigger).to.equal('click')
      expect(element.emitOnLoad).to.be.undefined
      expect(element._loaded).to.be.false
    })
  })

  it('should set properties correctly', () => {
    cy.mount('<pb-facs-link facs="test-image.jpg" label="Test" order="5" trigger="mouseover" emit-on-load="true"></pb-facs-link>')
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      expect(element.facs).to.equal('test-image.jpg')
      expect(element.label).to.equal('Test')
      expect(element.order).to.equal(5)
      expect(element.trigger).to.equal('mouseover')
      expect(element.emitOnLoad).to.be.true
    })
  })

  it('should NOT emit pb-load-facsimile on load when emit-on-load is false', () => {
    cy.mount('<pb-facs-link facs="test-image.jpg" emit-on-load="false"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      let eventEmitted = false
      
      element.addEventListener('pb-load-facsimile', () => {
        eventEmitted = true
      })
      
      // Wait a bit to ensure no event is emitted
      cy.wait(100).then(() => {
        expect(eventEmitted).to.be.false
        expect(element._loaded).to.be.false
      })
    })
  })

  it('should NOT emit pb-load-facsimile on load by default (undefined emit-on-load)', () => {
    cy.mount('<pb-facs-link facs="test-image.jpg"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      let eventEmitted = false
      
      element.addEventListener('pb-load-facsimile', () => {
        eventEmitted = true
      })
      
      // Wait a bit to ensure no event is emitted
      cy.wait(100).then(() => {
        expect(eventEmitted).to.be.false
        expect(element._loaded).to.be.false
        expect(element.emitOnLoad).to.be.undefined
      })
    })
  })

  it('should warn when facs URL is empty or invalid', () => {
    cy.mount('<pb-facs-link facs="" emit-on-load="false" trigger="click"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      // Call _trigger directly to test validation
      element._trigger()
    })
    
    cy.get('@consoleWarn').should('have.been.calledWith', '<pb-facs-link> No facs URL provided')
  })

  it('should warn when facs URL is undefined', () => {
    cy.mount('<pb-facs-link emit-on-load="false" trigger="click"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      // Call _trigger directly to test validation
      element._trigger()
    })
    
    cy.get('@consoleWarn').should('have.been.calledWith', '<pb-facs-link> No facs URL provided')
  })

  it('should not emit pb-load-facsimile when facs URL is empty', () => {
    cy.mount('<pb-facs-link facs="" emit-on-load="true"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      let eventEmitted = false
      
      element.addEventListener('pb-load-facsimile', () => {
        eventEmitted = true
      })
      
      cy.wait(100).then(() => {
        expect(eventEmitted).to.be.false
      })
    })
  })

  it('should render link content', () => {
    cy.mount('<pb-facs-link>Page 1</pb-facs-link>')
    cy.get('pb-facs-link').should('contain', 'Page 1')
  })

  it('should have correct getter methods', () => {
    cy.mount('<pb-facs-link facs="test.jpg" label="Test Label" order="5"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      expect(element.getImage()).to.equal('test.jpg')
      expect(element.getLabel()).to.equal('Test Label')
      expect(element.getOrder()).to.equal(5)
    })
  })

  it('should track loaded state correctly', () => {
    cy.mount('<pb-facs-link facs="test-image.jpg" emit-on-load="false"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      
      // Initially not loaded
      expect(element._loaded).to.be.false
      
      // Simulate loading by setting _loaded to true
      element._loaded = true
      expect(element._loaded).to.be.true
    })
  })

  it('should NOT emit pb-show-annotation when emit-on-load is false', () => {
    cy.mount('<pb-facs-link facs="test-image.jpg" trigger="click"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      let showEventEmitted = false
      
      element.addEventListener('pb-show-annotation', () => {
        showEventEmitted = true
      })
      
      // Call _trigger directly - should NOT emit pb-show-annotation since emitOnLoad is undefined
      element._trigger()
      
      cy.then(() => {
        expect(showEventEmitted).to.be.false
        expect(element._loaded).to.be.true // But should still load the facsimile
      })
    })
  })

  it('should emit pb-show-annotation when emit-on-load is true', () => {
    cy.mount('<pb-facs-link facs="test-image.jpg" emit-on-load="true" trigger="click"></pb-facs-link>')
    
    cy.get('pb-facs-link').then($el => {
      const element = $el[0]
      let showEventEmitted = false
      
      element.addEventListener('pb-show-annotation', () => {
        showEventEmitted = true
      })
      
      // Call _trigger directly - should emit pb-show-annotation since emitOnLoad is true
      element._trigger()
      
      cy.then(() => {
        expect(showEventEmitted).to.be.true
        expect(element._loaded).to.be.false // Should not load facsimile since it's already loaded
      })
    })
  })

  describe('IIIF manifest version compatibility', () => {
    it('should work with IIIF 2.0 manifest URLs', () => {
      cy.mount('<pb-facs-link facs="api/iiif/document-v2" order="1" emit-on-load="true"></pb-facs-link>')
      
      cy.get('pb-facs-link').then($el => {
        const element = $el[0]
        expect(element.getImage()).to.equal('api/iiif/document-v2')
        expect(element.getOrder()).to.equal(1)
        expect(element.facs).to.equal('api/iiif/document-v2')
      })
    })

    it('should work with IIIF 3.0 manifest URLs', () => {
      cy.mount('<pb-facs-link facs="api/iiif/document-v3" order="2" emit-on-load="true"></pb-facs-link>')
      
      cy.get('pb-facs-link').then($el => {
        const element = $el[0]
        expect(element.getImage()).to.equal('api/iiif/document-v3')
        expect(element.getOrder()).to.equal(2)
        expect(element.facs).to.equal('api/iiif/document-v3')
      })
    })

    it('should handle manifest URLs with both versions in same document', () => {
      // Test that pb-facs-link doesn't care about manifest version
      cy.mount('<pb-facs-link facs="api/iiif/document-v2" order="1"></pb-facs-link>')
      cy.get('pb-facs-link').then($el => {
        const element = $el[0]
        expect(element.facs).to.equal('api/iiif/document-v2')
      })
      
      cy.mount('<pb-facs-link facs="api/iiif/document-v3" order="1"></pb-facs-link>')
      cy.get('pb-facs-link').then($el => {
        const element = $el[0]
        expect(element.facs).to.equal('api/iiif/document-v3')
      })
    })
  })
})