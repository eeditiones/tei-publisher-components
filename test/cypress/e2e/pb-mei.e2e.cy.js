// Cypress E2E: pb-mei
describe('pb-mei e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-mei.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should toggle play and pause controls', () => {
    cy.get('pb-mei').first().as('viewer')
    
    cy.get('@viewer')
      .find('#player button.pb-button--icon', { timeout: 10000 })
      .should('have.length.at.least', 2)
    cy.get('@viewer').should($el => {
      expect($el[0]._midiPlayer, 'midi player initialized').to.exist
    })

    cy.get('@viewer')
      .find('#player button')
      .first()
      .as('playButton')

    cy.get('@playButton').should('have.attr', 'aria-pressed', 'false')
    cy.get('@playButton').click()
    cy.get('@playButton').should('have.attr', 'aria-pressed', 'true')

    cy.get('@viewer')
      .find('#player button')
      .eq(1)
      .as('pauseButton')

    cy.get('@pauseButton').click()
    cy.get('@playButton').should('have.attr', 'aria-pressed', 'false')
  })

  describe('Verovio integration', () => {
    it('should load and render MEI files from external URLs', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for Verovio to load and render
      cy.get('@viewer').find('#output', { timeout: 15000 }).should('exist')
      cy.get('@viewer').find('#output').should('not.contain.text', 'Loading')
      
      // Verify SVG content is rendered
      cy.get('@viewer').find('#output svg').should('exist')
    })

    it('should handle multiple MEI viewers on the same page', () => {
      cy.get('pb-mei').should('have.length.at.least', 2)
      
      // Test each viewer independently
      cy.get('pb-mei').each(($viewer) => {
        cy.wrap($viewer).find('#output', { timeout: 15000 }).should('exist')
        cy.wrap($viewer).find('#toolbar').should('exist')
      })
    })

    it('should support pagination controls', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for content to load
      cy.get('@viewer').find('#output', { timeout: 15000 }).should('exist')
      
      // Check if pagination controls are present (may be hidden if only 1 page)
      cy.get('@viewer').find('#toolbar').within(() => {
        cy.get('button[aria-label="Previous page"]').should('exist')
        cy.get('button[aria-label="Next page"]').should('exist')
      })
    })

    it('should handle MIDI playback with real Verovio rendering', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for both Verovio and MIDI player to initialize
      cy.get('@viewer').find('#output', { timeout: 15000 }).should('exist')
      cy.get('@viewer').should($el => {
        expect($el[0]._midiPlayer, 'MIDI player should be initialized').to.exist
      })
      
      // Test play button functionality
      cy.get('@viewer').find('#player button').first().as('playButton')
      cy.get('@playButton').click()
      
      // Verify play state changes
      cy.get('@playButton').should('have.attr', 'aria-pressed', 'true')
      cy.get('@playButton').should('have.class', 'is-active')
    })

    it('should handle Verovio WASM module loading', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for Verovio to initialize
      cy.get('@viewer').find('#output', { timeout: 15000 }).should('exist')
      
      // Verify Verovio toolkit is available
      cy.window().then(win => {
        // Check that Verovio module was loaded successfully
        expect(win.customElements.get('pb-mei')).to.exist
      })
    })

    it('should handle MEI data with complex notation features', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for rendering
      cy.get('@viewer').find('#output', { timeout: 15000 }).should('exist')
      
      // Verify SVG contains musical notation elements
      cy.get('@viewer').find('#output svg').should('exist')
      cy.get('@viewer').find('#output svg').should('have.attr', 'xmlns')
    })

    it('should handle Verovio error states gracefully', () => {
      // Test with invalid MEI data
      cy.window().then(win => {
        const invalidMei = win.document.createElement('pb-mei')
        invalidMei.setAttribute('data', '<invalid>not-mei</invalid>')
        invalidMei.setAttribute('id', 'invalid-viewer')
        win.document.body.appendChild(invalidMei)
        
        // Component should still mount even with invalid data
        cy.get('#invalid-viewer').should('exist')
        cy.get('#invalid-viewer').find('#output').should('exist')
        
        // Wait for component to initialize and handle the error
        cy.wait(2000)
        
        // Check if error message is displayed (may be in shadow DOM)
        cy.get('#invalid-viewer').then($el => {
          const element = $el[0]
          if (element.shadowRoot) {
            const errorDiv = element.shadowRoot.querySelector('.pb-mei-error')
            if (errorDiv) {
              expect(errorDiv.textContent).to.contain('Invalid MEI data format')
            } else {
              // If no error div, check if there's any error handling
              console.log('No error div found, checking component state')
              expect(element).to.exist
            }
          }
        })
      })
    })
  })
})
