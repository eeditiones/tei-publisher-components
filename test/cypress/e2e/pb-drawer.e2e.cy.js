// E2E: pb-drawer
// StandardJS formatting

describe('Demo: pb-drawer', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-drawer.html')
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
})