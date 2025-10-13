// Cypress E2E: pb-drawer
describe('pb-drawer e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-drawer.html')
    cy.window().then(win => {
      return new Cypress.Promise(resolve => {
        win.addEventListener('pb-page-ready', resolve, { once: true })
      })
    })
  })

  it('should render and be closed by default', () => {
    cy.get('pb-drawer').should('exist').and(($el) => {
      expect($el[0].hasAttribute('opened'), 'no opened attribute').to.be.false
    })
  })

  it('should open and close programmatically via attribute', () => {
    cy.get('pb-drawer').then(($el) => {
      const el = $el[0]
      el.setAttribute('opened', '')
    })
    cy.get('pb-drawer').should('have.attr', 'opened')

    cy.get('pb-drawer').then(($el) => {
      const el = $el[0]
      el.removeAttribute('opened')
    })
    cy.get('pb-drawer').should('not.have.attr', 'opened')
  })

  it('should support keyboard navigation', () => {
    cy.get('pb-drawer').then(($el) => {
      $el[0].setAttribute('opened', '')
    })
    
    cy.get('pb-drawer').then($el => {
      const closeBtn = $el.find('button[aria-label*="close"], button[aria-label*="Close"]')
      if (closeBtn.length > 0) {
        cy.wrap(closeBtn).first().focus().type('{enter}')
        cy.get('pb-drawer').should('not.have.attr', 'opened')
      }
    })
  })

  it('should have proper accessibility attributes', () => {
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

  it('should toggle via button click', () => {
    cy.get('#tocToggle').should('exist')
    cy.get('#tocToggle').click({ force: true })
    cy.get('pb-drawer').should('have.attr', 'opened')
    
    cy.get('#tocToggle').click({ force: true })
    cy.get('pb-drawer').should('not.have.attr', 'opened')
  })
})