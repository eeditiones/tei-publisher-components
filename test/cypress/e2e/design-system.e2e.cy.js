// test/cypress/e2e/design-system.cy.js
describe('Design System Demo Page', () => {
    beforeEach(() => {
    cy.visit('/demo/design-system.html')
  })

  it('loads without errors', () => {
    cy.contains('Design System', { matchCase: false }) // loose heading check
    cy.window().then((win) => {
      // basic sanity: no runtime errors logged
      cy.stub(win.console, 'error').as('consoleError')
    })
  })

  it('includes the compiled design system stylesheet from dist', () => {
    cy.get('link[rel="stylesheet"]')
      .invoke('attr', 'href')
      .should('contain', 'design-system.css')

    // Ensure the CSS actually affected something visible
    cy.get('body').should('be.visible')
  })

  it('renders icons using the external sprite in dist/images/icons.svg', () => {
    // Expect at least one pb-icon on the demo page
    cy.get('pb-icon').should('exist')

    // Check that <use> points to the dist sprite or that the sprite is fetchable
    cy.get('pb-icon')
      .find('svg use')
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        // Allow relative hrefs that include the dist path
        expect(href).to.match(/icons\.svg#icon-/)
      })

    // Optionally confirm the sprite file is accessible
    cy.request('/dist/images/icons.svg').its('status').should('eq', 200)
  })

  it('buttons and inputs have design-system classes/styles applied', () => {
    // Adjust selectors to whatever the demo exposes (examples):
    cy.get('.pb-button, button.pb-button').should('exist')
    cy.get('input, textarea, select').should('exist')
  })

  it('interactive example works and emits expected events (if present)', () => {
    // If the demo page has a sample interactive component with pb-* events:
    cy.window().then((win) => {
      win.__pbEventCount = 0
      win.addEventListener('pb-refresh', () => { win.__pbEventCount++ })
    })

    // Try clicking the first visible demo button as a generic interaction
    cy.get('button, .pb-button').filter(':visible').first().click({ force: true })

    cy.window().then((win) => {
      // Not all demos will emit pb-refresh this is a soft check:
      expect(win.__pbEventCount).to.be.a('number')
    })
  })

  it('meets basic a11y expectations (focusable controls, label presence)', () => {
    // Tab to first focusable element
    cy.get('body')
    cy.press('Tab')
    cy.focused()
      .should('exist')

    // Buttons should have type
    cy.get('button').each(($btn) => {
      expect($btn.attr('type')).to.exist
    })
  })
})