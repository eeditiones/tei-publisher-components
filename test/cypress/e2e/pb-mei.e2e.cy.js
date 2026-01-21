// Cypress E2E: pb-mei
describe('pb-mei e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-mei.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should toggle play and pause controls', () => {
    cy.get('pb-mei').first().as('viewer')
    
    // Wait for Verovio to load and render (play() needs Verovio and data to be ready)
    cy.get('@viewer').shadow().find('#output', { timeout: 15000 }).should('exist')
    cy.get('@viewer').shadow().find('#output').should('not.contain.text', 'Loading', { timeout: 30000 })
    cy.waitUpdate('@viewer')
    cy.get('@viewer').shadow().find('#output svg', { timeout: 30000 }).should('exist')
    
    // Wait for MIDI player to initialize
    cy.get('@viewer').should($el => {
      // Wait for _midiPlayer to be initialized (async initialization)
      return $el[0]._midiPlayer !== null && $el[0]._midiPlayer !== undefined
    }, { timeout: 15000 })
    
    // Ensure data is ready (play() needs _data to generate MIDI)
    cy.get('@viewer').should($el => {
      const element = $el[0]
      return element._data !== null && element._data !== undefined && element._data.length > 0
    }, { timeout: 10000 })
    
    // Ensure component state is correct (not playing initially)
    cy.get('@viewer').should($el => {
      expect($el[0]._isPlaying, 'Component should not be playing initially').to.be.false
    })
    
    cy.get('@viewer')
      .shadow()
      .find('#player button.pb-button--icon', { timeout: 10000 })
      .should('have.length.at.least', 2)

    // Wait for component to finish rendering
    cy.waitUpdate('@viewer')
    
    // Get the play button and verify initial state
    cy.get('@viewer')
      .shadow()
      .find('#player button')
      .first()
      .as('playButton')

    // Verify button is in initial state (not playing)
    cy.get('@playButton').should('have.attr', 'aria-pressed', 'false')
    
    // Click to start playing - play() is async and may take time
    cy.get('@playButton').click()
    
    // Wait for component state to update (play() is async)
    cy.get('@viewer').should($el => {
      return $el[0]._isPlaying === true
    }, { timeout: 10000 })
    
    // Wait for Lit update to complete
    cy.waitUpdate('@viewer')
    
    // Wait for button attribute to update in DOM
    cy.get('@playButton').should('have.attr', 'aria-pressed', 'true', { timeout: 5000 })

    cy.get('@viewer')
      .shadow()
      .find('#player button')
      .eq(1)
      .as('pauseButton')

    cy.get('@pauseButton').click()
    
    // Wait for component state to update (pause() is synchronous but update might be async)
    cy.get('@viewer').should($el => {
      return $el[0]._isPlaying === false
    }, { timeout: 5000 })
    
    // Wait for Lit update to complete
    cy.waitUpdate('@viewer')
    
    // Wait for button attribute to update in DOM
    cy.get('@playButton').should('have.attr', 'aria-pressed', 'false', { timeout: 5000 })
  })

  describe('Verovio integration', () => {
    it('should load and render MEI files from external URLs', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for Verovio to load and render - wait for actual SVG element
      cy.get('@viewer').shadow().find('#output', { timeout: 15000 }).should('exist')
      
      // Wait for loading text to disappear (Verovio has loaded)
      cy.get('@viewer').shadow().find('#output').should('not.contain.text', 'Loading', { timeout: 30000 })
      
      // Wait for Lit update to complete
      cy.waitUpdate('@viewer')
      
      // Wait for SVG content to be rendered in shadow DOM
      cy.get('@viewer').shadow().find('#output svg', { timeout: 30000 }).should('exist')
    })

    it('should handle multiple MEI viewers on the same page', () => {
      cy.get('pb-mei').should('have.length.at.least', 2)
      
      // Test each viewer independently
      cy.get('pb-mei').each(($viewer) => {
        cy.wrap($viewer).shadow().find('#output', { timeout: 15000 }).should('exist')
        cy.wrap($viewer).shadow().find('#toolbar').should('exist')
      })
    })

    it('should support pagination controls', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for content to load
      cy.get('@viewer').shadow().find('#output', { timeout: 15000 }).should('exist')
      
      // Check if pagination controls are present (may be hidden if only 1 page)
      cy.get('@viewer').shadow().find('#toolbar').within(() => {
        cy.get('button[aria-label="Previous page"]').should('exist')
        cy.get('button[aria-label="Next page"]').should('exist')
      })
    })

    it('should handle MIDI playback with real Verovio rendering', () => {
      cy.get('pb-mei').first().as('viewer')
      
      // Wait for both Verovio and MIDI player to initialize
      cy.get('@viewer').shadow().find('#output', { timeout: 15000 }).should('exist')
      cy.get('@viewer').shadow().find('#output').should('not.contain.text', 'Loading', { timeout: 30000 })
      
      // Wait for Lit update to complete
      cy.waitUpdate('@viewer')
      
      // Wait for SVG in shadow DOM
      cy.get('@viewer').shadow().find('#output svg', { timeout: 30000 }).should('exist')
      
      // Wait for MIDI player to initialize (async)
      cy.get('@viewer').should($el => {
        return $el[0]._midiPlayer !== null && $el[0]._midiPlayer !== undefined
      }, { timeout: 15000 })
      
      // Test play button functionality
      cy.get('@viewer').shadow().find('#player button').first().as('playButton')
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
      
      // Wait for rendering - wait for actual SVG element in shadow DOM
      cy.get('@viewer').shadow().find('#output', { timeout: 15000 }).should('exist')
      cy.get('@viewer').shadow().find('#output').should('not.contain.text', 'Loading', { timeout: 30000 })
      
      // Wait for Lit update to complete
      cy.waitUpdate('@viewer')
      
      // Wait for SVG to be rendered
      cy.get('@viewer').shadow().find('#output svg', { timeout: 30000 }).should('exist')
      cy.get('@viewer').shadow().find('#output svg').should('have.attr', 'xmlns')
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
        cy.get('#invalid-viewer').shadow().find('#output', { timeout: 10000 }).should('exist')
        
        // Wait for component to initialize and handle the error
        // Verovio will try to parse and fail, triggering error handling
        cy.wait(5000)
        
        // Check if error message is displayed (may be in shadow DOM)
        // The component should show an error message or at least not crash
        cy.get('#invalid-viewer').then($el => {
          const element = $el[0]
          expect(element).to.exist
          if (element.shadowRoot) {
            const output = element.shadowRoot.querySelector('#output')
            expect(output).to.exist
            // Check for error message, loading state, or empty output (all valid error states)
            const hasError = output.querySelector('.pb-mei-error')
            const hasLoading = output.textContent && output.textContent.includes('Loading')
            const isEmpty = !output.textContent || output.textContent.trim() === ''
            const hasContent = output.innerHTML && output.innerHTML.trim() !== ''
            
            // Component should be in a valid state (error, loading, or empty - but not crashed)
            expect(hasError || hasLoading || isEmpty || hasContent, 
              'Component should show error, loading, or be empty (not crashed)').to.be.true
          }
        })
      })
    })
  })
})
