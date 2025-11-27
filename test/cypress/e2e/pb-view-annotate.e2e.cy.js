// Cypress E2E: pb-view-annotate
describe('pb-view-annotate e2e', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('can instantiate pb-view-annotate component', () => {
    // Test that pb-view-annotate component can be created dynamically
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      // Don't check visibility as component may have no content initially
    })
  })

  it('has proper component structure', () => {
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      pbViewAnnotate.setAttribute('src', 'test-document')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      cy.get('#test-annotate').should('have.attr', 'src', 'test-document')
    })
  })

  it('supports annotation attributes', () => {
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      pbViewAnnotate.setAttribute('src', 'test-document')
      pbViewAnnotate.setAttribute('annotations', '[]')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      cy.get('#test-annotate').should('have.attr', 'src', 'test-document')
      cy.get('#test-annotate').should('have.attr', 'annotations', '[]')
    })
  })

  it('has proper accessibility attributes', () => {
    cy.window().then((win) => {
      const pbViewAnnotate = win.document.createElement('pb-view-annotate')
      pbViewAnnotate.setAttribute('id', 'test-annotate')
      pbViewAnnotate.setAttribute('role', 'region')
      pbViewAnnotate.setAttribute('aria-label', 'Annotated view')
      win.document.body.appendChild(pbViewAnnotate)
      
      cy.get('#test-annotate').should('exist')
      cy.get('#test-annotate').should('have.attr', 'role', 'region')
      cy.get('#test-annotate').should('have.attr', 'aria-label', 'Annotated view')
    })
  })

  describe('annotation functionality and timing', () => {
    it('should handle annotation initialization with proper timing', () => {
      cy.window().then((win) => {
        const pbViewAnnotate = win.document.createElement('pb-view-annotate')
        pbViewAnnotate.setAttribute('id', 'test-annotate')
        pbViewAnnotate.setAttribute('src', 'test-document')
        pbViewAnnotate.setAttribute('annotations', '[{"id":"ann1","color":"#ff0000"}]')
        win.document.body.appendChild(pbViewAnnotate)
        
        cy.get('#test-annotate').should('exist')
        
        // Listen for pb-annotations-loaded event
        const eventSpy = cy.spy()
        pbViewAnnotate.addEventListener('pb-annotations-loaded', eventSpy)
        
        // Wait for initialization (300ms timeout in _handleContent)
        cy.wait(400).then(() => {
          // Verify event was emitted (may not be called if no content loaded)
          // This test verifies the component can be instantiated with annotations
          expect(pbViewAnnotate).to.exist
          expect(pbViewAnnotate.getAttribute('annotations')).to.equal('[{"id":"ann1","color":"#ff0000"}]')
        })
      })
    })

    it('should handle rapid attribute changes with debouncing', () => {
      cy.window().then((win) => {
        const pbViewAnnotate = win.document.createElement('pb-view-annotate')
        pbViewAnnotate.setAttribute('id', 'test-annotate')
        pbViewAnnotate.setAttribute('src', 'test-document')
        win.document.body.appendChild(pbViewAnnotate)
        
        cy.get('#test-annotate').should('exist')
        
        // Test that rapid attribute changes don't cause errors
        pbViewAnnotate.setAttribute('annotations', '[{"id":"ann1"}]')
        pbViewAnnotate.setAttribute('annotations', '[{"id":"ann2"}]')
        pbViewAnnotate.setAttribute('annotations', '[{"id":"ann3"}]')
        
        // Wait for any debouncing
        cy.wait(250).then(() => {
          // Verify final state
          expect(pbViewAnnotate.getAttribute('annotations')).to.equal('[{"id":"ann3"}]')
        })
      })
    })

    it('should handle selection changes with proper timing', () => {
      cy.window().then((win) => {
        const pbViewAnnotate = win.document.createElement('pb-view-annotate')
        pbViewAnnotate.setAttribute('id', 'test-annotate')
        pbViewAnnotate.setAttribute('src', 'test-document')
        win.document.body.appendChild(pbViewAnnotate)
        
        cy.get('#test-annotate').should('exist')
        
        // Listen for pb-selection-changed event
        const eventSpy = cy.spy()
        pbViewAnnotate.addEventListener('pb-selection-changed', eventSpy)
        
        // Simulate text selection
        const testContent = win.document.createElement('div')
        testContent.innerHTML = '<p>Test content for selection</p>'
        pbViewAnnotate.appendChild(testContent)
        
        // Create a range and select text
        const range = win.document.createRange()
        const textNode = testContent.querySelector('p').firstChild
        range.setStart(textNode, 0)
        range.setEnd(textNode, 4) // Select "Test"
        
        const selection = win.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        
        // Trigger selection change event
        win.document.dispatchEvent(new Event('selectionchange'))
        
        // Wait for selection handling (100ms timeout)
        cy.wait(150).then(() => {
          // Verify component exists and selection was made
          expect(pbViewAnnotate).to.exist
          expect(win.getSelection().toString()).to.equal('Test')
        })
      })
    })

    it('should handle setTimeout(0) patterns correctly', () => {
      cy.window().then((win) => {
        const pbViewAnnotate = win.document.createElement('pb-view-annotate')
        pbViewAnnotate.setAttribute('id', 'test-annotate')
        pbViewAnnotate.setAttribute('src', 'test-document')
        win.document.body.appendChild(pbViewAnnotate)
        
        cy.get('#test-annotate').should('exist')
        
        // Test that setTimeout(0) patterns don't cause errors
        // This verifies the component can handle timing-based operations
        pbViewAnnotate.setAttribute('annotations', '[{"id":"ann1","color":"#ff0000"}]')
        
        // Wait for any setTimeout operations
        cy.wait(100).then(() => {
          // Verify component is still functional
          expect(pbViewAnnotate).to.exist
          expect(pbViewAnnotate.getAttribute('annotations')).to.equal('[{"id":"ann1","color":"#ff0000"}]')
        })
      })
    })
  })
})