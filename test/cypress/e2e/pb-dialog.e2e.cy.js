// E2E: pb-dialog open/close

describe('Demo: pb-dialog', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-dialog.html')
  })

  it('opens and closes the dialog', () => {
    cy.contains('button', 'Open Dialog').click({ force: true })
    cy.get('pb-dialog').should('have.attr', 'open')
    // Close via the close button in the header
    cy.get('pb-dialog').find('button[rel="prev"]').click({ force: true })
    cy.get('pb-dialog').should('not.have.attr', 'open')
  })
})

