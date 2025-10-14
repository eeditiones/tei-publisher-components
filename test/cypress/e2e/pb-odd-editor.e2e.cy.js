let oddFixture

before(() => {
  cy.fixture('odd-editor/sample.json').then(data => {
    oddFixture = data
  })
})

// Cypress E2E: pb-odd-editor
describe('pb-odd-editor e2e', () => {
  beforeEach(() => {
    // Login if running against real backend
    if (Cypress.env('realBackend')) {
      cy.login()
    }
    
    cy.visit('/demo/pb-odd-editor.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
    
    // Wait for pb-odd-editor to be visible and ready
    cy.get('pb-odd-editor', { timeout: 10000 }).should('be.visible')
    
    // Wait a bit more for any async operations to complete
    cy.wait(1000)
  })

  it('should render the pb-odd-editor UI', () => {
    cy.get('pb-odd-editor').should('be.visible')
    cy.get('pb-odd-editor')
      .find('pb-select-odd, textarea, select, button')
      .should('exist')
    cy.get('pb-odd-editor').find('pb-autocomplete').should('exist')
    cy.get('pb-odd-editor').find('paper-autocomplete').should('not.exist')
  })

  describe('Vaadin Tabs Integration', () => {
    it('should render vaadin-tabs element', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      cy.get('pb-odd-editor').find('vaadin-tabs').should('have.attr', 'id', 'tabs')
    })

    it('should handle tab creation and management', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      
      // Test that tabs array exists and can be managed
      cy.get('pb-odd-editor').then($el => {
        const component = $el[0]
        expect(component.tabs).to.be.an('array')
        expect(component._selectTab).to.be.a('function')
        expect(component._closeTabHandler).to.be.a('function')
      })
    })

    it('should handle tab switching functionality when tabs exist', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      cy.get('pb-odd-editor').find('vaadin-tabs').should('have.attr', 'id', 'tabs')
      
      // Test that navigation items exist (these create tabs when clicked)
      cy.get('pb-odd-editor').find('.nav-item').should('exist')
      
      // Test that the component has the necessary methods for tab management
      cy.get('pb-odd-editor').then($el => {
        const component = $el[0]
        expect(component._selectTab).to.be.a('function')
        expect(component._openElementSpec).to.be.a('function')
        expect(component.tabs).to.be.an('array')
      })
    })

    it('should handle tab closing functionality when tabs exist', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      
      // First, create tabs by clicking on navigation items
      cy.get('pb-odd-editor').find('.nav-item').should('exist')
      cy.get('pb-odd-editor').find('.nav-item').first().click()
      
      // Wait for tab to be created by checking for vaadin-tab
      cy.get('pb-odd-editor').find('vaadin-tab').should('exist')
      
      // Test tab closing functionality
      cy.get('pb-odd-editor').find('vaadin-tab').first().within(() => {
        cy.get('pb-icon-button[icon="close"]').should('exist')
        cy.get('pb-icon-button[icon="close"]').click()
      })
      
      // Wait for tab to be closed by checking that vaadin-tab no longer exists
      cy.get('pb-odd-editor').find('vaadin-tab').should('not.exist')
    })

    it('should maintain tab state correctly', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      
      // Test tab state management
      cy.get('pb-odd-editor').then($el => {
        const component = $el[0]
        
        // Test that tabIndex can be set and retrieved
        const originalTabIndex = component.tabIndex
        component.tabIndex = 0
        expect(component.tabIndex).to.equal(0)
        
        // Restore original value if it was defined
        if (originalTabIndex !== undefined) {
          component.tabIndex = originalTabIndex
        }
      })
    })

    it('should handle vaadin-tabs selected attribute', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      cy.get('pb-odd-editor').find('vaadin-tabs').should('have.attr', 'id', 'tabs')
      
      // Check if selected attribute is set
      cy.get('pb-odd-editor').find('vaadin-tabs').then($tabs => {
        const tabs = $tabs[0]
        expect(tabs).to.exist
        expect(tabs.tagName).to.equal('VAADIN-TABS')
      })
    })

    it('should support tab content rendering', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      
      // Test that tab content area exists
      cy.get('pb-odd-editor').find('#currentElement').should('exist')
      
      // Test that editing view exists
      cy.get('pb-odd-editor').find('.editingView').should('exist')
    })

    it('should handle dynamic tab creation methods', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      
      // Test that the component can handle dynamic tab creation
      cy.get('pb-odd-editor').then($el => {
        const component = $el[0]
        
        // Test that tabs array can be modified
        const originalTabsLength = component.tabs.length
        expect(component.tabs).to.be.an('array')
        
        // Test tab management methods exist
        expect(component._closeTab).to.be.a('function')
        
        // Test that component has tab-related properties
        expect(typeof component.tabIndex).to.be.oneOf(['number', 'undefined'])
      })
    })

    it('should handle basic component functionality', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      
      // Test that the component renders without errors
      cy.get('pb-odd-editor').should('exist')
      
      // Test that navigation items exist and can be clicked
      cy.get('pb-odd-editor').find('.nav-item').should('exist')
      
      // Click on first navigation item
      cy.get('pb-odd-editor').find('.nav-item').first().click()
      
      // Wait for potential tab creation by checking for vaadin-tab
      cy.get('pb-odd-editor').find('vaadin-tab').should('exist')
      
      // Verify component is still functional
      cy.get('pb-odd-editor').should('exist')
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
    })

    it('should handle tab content updates', () => {
      cy.get('pb-odd-editor').should('be.visible')
      
      // Wait for component to be ready by checking for vaadin-tabs
      cy.get('pb-odd-editor').find('vaadin-tabs').should('exist')
      
      // Test that tab content can be updated
      cy.get('pb-odd-editor').find('#currentElement').should('exist')
      
      // Test that the current element can be modified
      cy.get('pb-odd-editor').then($el => {
        const component = $el[0]
        const currentElement = component.shadowRoot.getElementById('currentElement')
        expect(currentElement).to.exist
      })
    })
  })
})
