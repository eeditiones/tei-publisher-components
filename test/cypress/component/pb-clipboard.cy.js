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

  it('copies slotted text to clipboard on click', () => {
    cy.window().then((win) => {
      // Provide a clipboard API stub if missing and spy on writeText
      if (!win.navigator.clipboard) {
        win.navigator.clipboard = { writeText: () => Promise.resolve() }
      }
      cy.spy(win.navigator.clipboard, 'writeText').as('writeText')
    })
    cy.get('#clip').shadow().find('paper-icon-button').click({ force: true })
    cy.get('@writeText').should('have.been.called').then((spy) => {
      const textArg = spy.args[0][0]
      expect(String(textArg).trim()).to.equal('Copy me')
    })
  })
})
