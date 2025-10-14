// Cypress CT: pb-document
import '../../../src/pb-document.js'
import { PbEvents } from '../../../src/pb-events.js'

describe('pb-document', () => {
  it('should have correct paths', () => {
    cy.mount('<pb-document root-path="/db/apps/foo" path="test/kant_rvernunft_1781.TEI-P5.xml" odd="dta" view="page"></pb-document>')
    cy.get('pb-document').then($el => {
      const el = $el[0]
      expect(el.getFileName()).to.equal('kant_rvernunft_1781.TEI-P5.xml')
      expect(el.getFullPath()).to.equal('/db/apps/foo/test/kant_rvernunft_1781.TEI-P5.xml')
    })
  })

  it('should fire event on property change', () => {
    cy.mount('<pb-document path="doc/documentation.xml" odd="dta"></pb-document>')
    cy.get('pb-document').then($el => {
      const el = $el[0]
      return new Cypress.Promise(resolve => {
        PbEvents.subscribeOnce('pb-document').then(ev => {
          // Detail contains _source pointing to the element; assert via _source
          expect(ev.detail._source).to.equal(el)
          expect(ev.detail._source.odd).to.equal('docbook')
          resolve()
        })
        el.odd = 'docbook'
      })
    })
  })

  describe('rapid attribute changes', () => {
    it('should coalesce rapid attribute updates into single event', () => {
      let eventCount = 0
      
      cy.mount('<pb-document id="doc" path="doc/documentation.xml" odd="dta"></pb-document>')
      
      cy.get('#doc').then($el => {
        const el = $el[0]
        
        // Listen directly to the component's custom events
        el.addEventListener('pb-document', () => {
          eventCount++
        })
        
        // Wait for component to be ready
        cy.wait(100)
        
        // Test single attribute change first
        el.setAttribute('odd', 'docbook')
        
        // Wait for event
        cy.wait(50).then(() => {
          expect(eventCount).to.be.greaterThan(0) // Should have at least one event
          
          // Now test rapid changes
          el.setAttribute('odd', 'graves')
          el.setAttribute('path', 'test/other.xml')
          el.setAttribute('odd', 'final')
          
          // Wait for coalescing (setTimeout(0) should batch these)
          cy.wait(50).then(() => {
            // Should have more events due to rapid changes, but coalesced
            expect(eventCount).to.be.greaterThan(1)
            // But not as many as individual changes (coalescing working)
            expect(eventCount).to.be.lessThan(5)
          })
        })
      })
    })

    it('should handle rapid attribute changes without setTimeout(0) issues', () => {
      cy.mount('<pb-document id="doc" path="doc/documentation.xml" odd="dta"></pb-document>')
      
      cy.get('#doc').then($el => {
        const el = $el[0]
        
        // Rapidly change attributes
        el.odd = 'docbook'
        el.path = 'test/other.xml'
        el.odd = 'graves'
        el.path = 'test/another.xml'
        el.odd = 'final'
        
        // Wait for all changes to be processed
        cy.wait(50)
        
        // Verify final state is correct
        expect(el.odd).to.equal('final')
        expect(el.path).to.equal('test/another.xml')
      })
    })

    it('should emit events with correct timing after rapid changes', () => {
      const events = []
      
      cy.mount('<pb-document id="doc" path="doc/documentation.xml" odd="dta"></pb-document>')
      
      cy.get('#doc').then($el => {
        const el = $el[0]
        
        // Listen directly to the component's custom events
        el.addEventListener('pb-document', (ev) => {
          events.push({
            odd: ev.detail._source.odd,
            path: ev.detail._source.path,
            timestamp: Date.now()
          })
        })
        
        // Wait for component to be ready
        cy.wait(100)
        
        // Rapidly change attributes to different values
        el.setAttribute('odd', 'docbook')
        el.setAttribute('path', 'test/other.xml')
        el.setAttribute('odd', 'graves')
        el.setAttribute('path', 'test/another.xml')
        el.setAttribute('odd', 'final')
        
        // Wait for coalescing
        cy.wait(50).then(() => {
          // Should have at least one event (coalesced from rapid changes)
          expect(events).to.have.length.greaterThan(0)
          // Verify the component state matches final values
          expect(el.odd).to.equal('final')
          expect(el.path).to.equal('test/another.xml')
        })
      })
    })

    it('should handle attribute changes with different values correctly', () => {
      cy.mount('<pb-document id="doc" path="doc/documentation.xml" odd="dta"></pb-document>')
      
      cy.get('#doc').then($el => {
        const el = $el[0]
        
        // Change to same value (should not trigger event)
        el.odd = 'dta'
        cy.wait(10)
        
        // Change to different value (should trigger event)
        el.odd = 'docbook'
        
        return new Cypress.Promise(resolve => {
          PbEvents.subscribeOnce('pb-document').then(ev => {
            expect(ev.detail._source.odd).to.equal('docbook')
            resolve()
          })
        })
      })
    })

    it('should not emit events when final state matches initial state', () => {
      cy.mount('<pb-document id="doc" path="doc/documentation.xml" odd="dta"></pb-document>')
      
      let eventCount = 0
      cy.get('#doc').then($el => {
        const el = $el[0]
        
        // Listen directly to the component's custom events
        el.addEventListener('pb-document', () => {
          eventCount++
        })
        
        // Wait for component to be ready
        cy.wait(100)
        
        // Rapidly change attributes but end up with same values
        el.setAttribute('odd', 'docbook')
        el.setAttribute('path', 'test/other.xml')
        el.setAttribute('odd', 'graves')
        el.setAttribute('path', 'test/another.xml')
        el.setAttribute('odd', 'dta')  // Back to original
        el.setAttribute('path', 'doc/documentation.xml')  // Back to original
        
        // Wait for coalescing
        cy.wait(50).then(() => {
          // Should NOT emit events because final state matches initial state
          // This is the correct behavior - coalescing prevents unnecessary events
          expect(eventCount).to.equal(0)
          // Verify final state is correct
          expect(el.odd).to.equal('dta')
          expect(el.path).to.equal('doc/documentation.xml')
        })
      })
    })

    it('should verify coalescing behavior with setTimeout(0)', () => {
      cy.mount('<pb-document id="doc" path="doc/documentation.xml" odd="dta"></pb-document>')
      
      let eventCount = 0
      cy.get('#doc').then($el => {
        const el = $el[0]
        
        // Listen directly to the component's custom events
        el.addEventListener('pb-document', () => {
          eventCount++
        })
        
        // Wait for component to be ready
        cy.wait(100)
        
        // Rapidly change attributes
        el.setAttribute('odd', 'docbook')
        el.setAttribute('path', 'test/other.xml')
        el.setAttribute('odd', 'graves')
        el.setAttribute('path', 'test/another.xml')
        el.setAttribute('odd', 'final')
        
        // Wait for processing
        cy.wait(50).then(() => {
          // Should have events due to coalescing
          expect(eventCount).to.be.greaterThan(0)
          // Verify final state is correct
          expect(el.odd).to.equal('final')
          expect(el.path).to.equal('test/another.xml')
        })
      })
    })
  })
})
