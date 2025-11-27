// Cypress E2E: pb-clipboard
describe('pb-clipboard e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-clipboard.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should write to clipboard on click', () => {
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

  it('should meet accessibility standards', () => {
    cy.get('pb-clipboard')
      .find('button, input, select, textarea')
      .each($el => {
        if ($el[0].tagName === 'BUTTON') {
          cy.wrap($el).should('have.attr', 'type')
        }
        cy.wrap($el).should('not.have.attr', 'tabindex', '-1')
      })
    cy.get('pb-clipboard')
      .find('button')
      .first()
      .focus()
      .should('be.focused')
  })

  it('should support keyboard navigation', () => {
    cy.get('body')
    cy.press('Tab')
    cy.focused().should('exist')
    cy.get('pb-clipboard')
      .find('button')
      .first()
      .focus()
      .type('{enter}')
  })
})
