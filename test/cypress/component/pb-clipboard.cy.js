// Cypress CT: pb-clipboard
import '../../../src/pb-clipboard.js'

describe('pb-clipboard', () => {
  const base = `
    <pb-clipboard id="clip" label="clipboard.label">
      <span>Copy me</span>
    </pb-clipboard>
  `

  beforeEach(() => {
    cy.mount(base)
  })

  it('should copy slotted text to clipboard on click', () => {
    // Stub clipboard API before clicking to prevent permission errors
    // The component calls navigator.clipboard.writeText() without error handling,
    // so we need to stub it to avoid unhandled promise rejections
    cy.window().then((win) => {
      // Ensure clipboard API exists
      if (!win.navigator.clipboard) {
        win.navigator.clipboard = {}
      }
      // Stub writeText to resolve successfully and spy on calls
      cy.stub(win.navigator.clipboard, 'writeText').resolves().as('writeText')
    })
    cy.get('#clip')
      .find('button.pb-button--icon')
      .as('copyButton')

    cy.get('@copyButton').should('have.attr', 'aria-label')
    cy.get('@copyButton').click({ force: true })
    cy.get('@writeText').should('have.been.called').then((spy) => {
      const textArg = spy.args[0][0]
      expect(String(textArg).trim()).to.equal('Copy me')
    })
  })
})
