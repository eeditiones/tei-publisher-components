// Cypress E2E: pb-table-grid
describe('pb-table-grid e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-table-grid.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should render headers and rows from people.json', () => {
    cy.get('pb-table-grid').find('#table').should('exist')
    cy.get('pb-table-grid').find('table').should('exist')
    
    cy.get('pb-table-grid').find('paper-icon-button').should('not.exist')

    cy.get('pb-table-grid').find('thead').should('contain.text', 'Name')
    cy.get('pb-table-grid').find('thead').should('contain.text', 'Born')
    cy.get('pb-table-grid').find('thead').should('contain.text', 'Died')

    cy.get('pb-table-grid').find('tbody').should('contain.text', 'Immanuel Kant')
    cy.get('pb-table-grid').find('tbody').should('contain.text', 'Hegel')

    cy.get('pb-table-grid').find('tbody .gridjs-tr').its('length').should('be.greaterThan', 1)
  })
})
