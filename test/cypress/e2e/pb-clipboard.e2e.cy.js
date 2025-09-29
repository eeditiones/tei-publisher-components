describe('Demo: pb-clipboard', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-clipboard.html')
  })

  it('writes to clipboard on click', () => {
    cy.window().then((win) => {
      if (!win.navigator.clipboard) {
        win.navigator.clipboard = {}
      }
      win.navigator.clipboard.writeText = cy.stub().as('writeText')
    })
    cy.get('pb-clipboard')
      .first()
      .find('button.pb-button--icon')
      .as('copyButton')

    cy.get('@copyButton').should('have.attr', 'aria-label')
    cy.get('@copyButton').click({ force: true })
    cy.get('@writeText').should('have.been.called')
    cy.get('@writeText').its('firstCall.args.0').should('match', /john doe/i)
  })

  it.skip('should meet accessibility standards', () => {
        // Check for proper ARIA attributes
        cy.get('pb-clipboard')
          .find('button, input, select, textarea')
          .each($el => {
            // Buttons should have type attribute
            if ($el[0].tagName === 'BUTTON') {
              cy.wrap($el).should('have.attr', 'type')
            }
            // Interactive elements should be focusable
            cy.wrap($el).should('not.have.attr', 'tabindex', '-1')
          })
        // Check focus management
        cy.get('pb-clipboard')
          .find('button:first')
          .focus()
          .should('be.focused')
      })

  it.skip('should support keyboard navigation', () => {
        // Test Tab navigation
        cy.get('body')
        cy.press("Tab")
        cy.focused().should('exist')
        // Test Enter/Space on buttons
        cy.get('pb-clipboard')
          .find('button:first')
          .focus()
          .type('{enter}')
      })
})
