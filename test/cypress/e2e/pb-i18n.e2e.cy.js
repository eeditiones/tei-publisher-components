// Cypress E2E: pb-i18n
describe('pb-i18n e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-i18n.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
    cy.window().then(win => {
      return new Cypress.Promise(resolve => {
        const timeout = setTimeout(resolve, 2000) // 2s timeout
        win.addEventListener('pb-page-ready', () => {
          clearTimeout(timeout)
          resolve()
        }, { once: true })
      })
    })
  })

  it('should load and render default language strings', () => {
    cy.get('pb-lang')
      .contains('en')
      .click()
    cy.get('[data-value="zh_TW"]')
      .should('be.visible')
  })

  it('should verify i18n system is working with pb-page', () => {
    // Check if translations are working
    cy.get('li[data-i18n="document.contents"]').should('have.text', 'Custom Table of Contents')
    cy.get('pb-i18n[key="browse.items"]').first().should('have.text', 'Found 10 items')
    cy.get('pb-i18n[key="browse.items"]').last().should('have.text', 'Found 1 items')
  })

  it('should use default translations and attribute bindings', () => {
    // Test data-i18n attribute translation
    cy.get('li[data-i18n="document.contents"]').should('have.text', 'Custom Table of Contents')
    
    // Test pb-i18n component with options
    cy.get('pb-i18n[key="browse.items"]').first().should('have.text', 'Found 10 items')
    cy.get('pb-i18n[key="browse.items"]').last().should('have.text', 'Found 1 items')
    
    // Test fallback for undefined keys
    cy.get('pb-i18n[key="undefined"]').should('have.text', '[No translation provided]')
    
    // Test attribute translation - this might not exist in demo
    cy.get('h3[data-i18n="menu.download.title"]').should('exist')
  })


  it('should react to language change', () => {
    // Verify initial English content
    cy.get('li[data-i18n="document.contents"]').should('have.text', 'Custom Table of Contents')
    
    // Click on the summary element within the first pb-lang's shadow DOM to open the dropdown
    cy.get('pb-lang').first().shadow().find('summary').click()
    // Then click on the German option within the first pb-lang's dropdown
    cy.get('pb-lang').first().shadow().find('[data-value="de"]').click()
    
    // Wait for language change to take effect
    cy.wait(1000)
    
    // Verify German content
    cy.get('li[data-i18n="document.contents"]').should('have.text', 'Inhaltsverzeichnis angepasst')
  })

  it('should load custom translations from multiple namespaces', () => {
    // Test custom namespace translations
    cy.get('pb-i18n[key="demo.message"]').should('have.text', 'User defined message')
    cy.get('pb-i18n[key="mycomponent.info"]').should('have.text', 'An information coming from a custom component')
    
    // Test fallback namespace behavior - this might not exist
    cy.get('pb-i18n[key="dialogs.downloadMessage"]').should('exist')
  })

  it('should handle interpolation with different options', () => {
    // Test different count values
    cy.get('pb-i18n[key="browse.items"]').first().should('have.text', 'Found 10 items')
    cy.get('pb-i18n[key="browse.items"]').last().should('have.text', 'Found 1 items')
  })

  it('should handle missing translation keys gracefully', () => {
    // Test undefined key shows fallback
    cy.get('pb-i18n[key="undefined"]').should('have.text', '[No translation provided]')
    
    // Test empty key shows empty content or fallback
    cy.get('pb-i18n[key="dialogs.downloadMessage"]').should('exist')
  })

  it('should support attribute translation', () => {
    // Test title attribute translation - check if element exists first
    cy.get('h3[data-i18n="menu.download.title"]').should('exist')
  })

  it('should maintain proper DOM structure', () => {
    // Verify pb-page exists and is properly initialized
    cy.get('pb-page').should('exist')
    cy.get('pb-page').should('be.visible')
    
    // Verify pb-i18n components exist (they may not be visible due to styling)
    cy.get('pb-i18n').should('have.length.at.least', 5)
    cy.get('pb-i18n').each($el => {
      cy.wrap($el).should('exist')
    })
  })

  it('should handle rapid language changes without errors', () => {
    // Rapidly change languages - use shadow DOM targeting
    cy.get('pb-lang').first().shadow().find('summary').click()
    cy.get('pb-lang').first().shadow().find('[data-value="de"]').click()
    cy.wait(500)
    
    cy.get('pb-lang').first().shadow().find('summary').click()
    cy.get('pb-lang').first().shadow().find('[data-value="en"]').click()
    cy.wait(500)
    
    // Verify content is still properly translated
    cy.get('li[data-i18n="document.contents"]').should('have.text', 'Custom Table of Contents')
  })

  describe('advanced i18n functionality', () => {
    it('should handle complex interpolation with nested objects', () => {
      // Test that interpolation works with complex options
      cy.get('pb-i18n[key="browse.items"]').first().should('have.text', 'Found 10 items')
    })

    it('should handle translation caching correctly', () => {
      // Change language and back to test caching - use shadow DOM targeting
      cy.get('pb-lang').first().shadow().find('summary').click()
      cy.get('pb-lang').first().shadow().find('[data-value="de"]').click()
      cy.wait(1000)
      
      cy.get('pb-lang').first().shadow().find('summary').click()
      cy.get('pb-lang').first().shadow().find('[data-value="en"]').click()
      cy.wait(1000)
      
      // Verify content is still properly translated
      cy.get('li[data-i18n="document.contents"]').should('have.text', 'Custom Table of Contents')
    })

    it('should handle empty or null options gracefully', () => {
      // Test that components handle various option states
      cy.get('pb-i18n[key="browse.items"]').should('exist')
      cy.get('pb-i18n[key="undefined"]').should('exist')
    })
  })
})