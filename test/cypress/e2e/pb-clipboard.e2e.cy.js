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
    cy.get('pb-clipboard').first().find('paper-icon-button').click({ force: true })
    cy.get('@writeText').should('have.been.called')
    cy.get('@writeText').its('firstCall.args.0').should('match', /john doe/i)
  })
})