// E2E: pb-collapse toggling

describe('Demo: pb-collapse', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-collapse.html')
  })

  it('toggles details open state on click', () => {
    cy.get('pb-collapse').first().find('details').as('details')
    cy.get('@details').should('not.have.attr', 'open')
    cy.get('pb-collapse').first().find('summary').click({ force: true })
    cy.get('@details').should('have.attr', 'open')
  })
})

