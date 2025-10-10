// E2E: pb-grid demo basic interactions (add/remove panels)

describe('Demo: pb-grid', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-grid.html')
  })

  it('adds and removes panels', () => {
    // Initial panels rendered from panels="[0,1]"
    cy.get('#grid ._grid_panel').then(($panels) => {
      const initial = $panels.length
      expect(initial).to.be.greaterThan(0)
    })

    // Click the Add Column action
    cy.get('pb-grid-action.grid-add').find('button').first().click({ force: true })
    cy.get('#grid ._grid_panel').should('have.length.greaterThan', 2)

    // Remove the first panel via its toolbar action
    cy.get('#grid ._grid_panel').first().within(() => {
      cy.get('pb-grid-action').find('button').click({ force: true })
    })
    cy.get('#grid ._grid_panel').should('have.length.greaterThan', 1)
  })
})

