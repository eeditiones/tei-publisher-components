// E2E: pb-grid component functionality

describe('pb-grid', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-grid.html')
  })

  it('should add and remove panels', () => {
    cy.get('#grid ._grid_panel').then(($panels) => {
      const initial = $panels.length
      expect(initial).to.be.greaterThan(0)
    })

    cy.get('pb-grid-action.grid-add').find('button').first().click({ force: true })
    cy.get('#grid ._grid_panel').should('have.length.greaterThan', 2)

    cy.get('#grid ._grid_panel').first().within(() => {
      cy.get('pb-grid-action').find('button').click({ force: true })
    })
    cy.get('#grid ._grid_panel').should('have.length.greaterThan', 1)
  })
})

