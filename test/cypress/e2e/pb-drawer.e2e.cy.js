// E2E: pb-drawer
describe('Demo: pb-drawer', () => {
  beforeEach(() => {
    // Document contents API intercept is now centralized in e2e.js support file
    
    cy.visit('/demo/pb-drawer.html')
    // Wait for pb-page-ready event to ensure all components are initialized
    cy.window().then(win => {
      return new Cypress.Promise(resolve => {
        win.addEventListener('pb-page-ready', resolve, { once: true })
      })
    })
  })

  it('renders and is closed by default', () => {
    cy.get('pb-drawer').should('exist').and(($el) => {
      expect($el[0].hasAttribute('opened'), 'no opened attribute').to.be.false
    })
  })

  it('can be opened and closed programmatically via attribute', () => {
    // open
    cy.get('pb-drawer').then(($el) => {
      const el = $el[0]
      el.setAttribute('opened', '')
    })
    cy.get('pb-drawer').should('have.attr', 'opened')

    // close
    cy.get('pb-drawer').then(($el) => {
      const el = $el[0]
      el.removeAttribute('opened')
    })
    cy.get('pb-drawer').should('not.have.attr', 'opened')
  })

  it('supports keyboard navigation', () => {
    // Open drawer
    cy.get('pb-drawer').then(($el) => {
      $el[0].setAttribute('opened', '')
    })
    
    // Test that drawer can be closed via keyboard (focus on close button if exists)
    cy.get('pb-drawer').then($el => {
      const closeBtn = $el.find('button[aria-label*="close"], button[aria-label*="Close"]')
      if (closeBtn.length > 0) {
        cy.wrap(closeBtn).first().focus().type('{enter}')
        cy.get('pb-drawer').should('not.have.attr', 'opened')
      }
    })
  })

  it('has proper accessibility attributes', () => {
    cy.get('pb-drawer').then($el => {
      const drawer = $el[0]
      if (drawer.hasAttribute('role')) {
        cy.wrap($el).should('have.attr', 'role', 'dialog')
      }
    })
    
    cy.get('pb-drawer').find('button').each($btn => {
      cy.wrap($btn).should('have.attr', 'type')
    })
  })

  it('can be toggled via button click', () => {
    // The demo has a pb-icon-button with id="tocToggle" that toggles the drawer
    cy.get('#tocToggle').should('exist')
    cy.get('#tocToggle').click({ force: true })
    cy.get('pb-drawer').should('have.attr', 'opened')
    
    cy.get('#tocToggle').click({ force: true })
    cy.get('pb-drawer').should('not.have.attr', 'opened')
  })
})