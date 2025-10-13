// E2E: pb-table-grid renders data from demo JSON

describe('Demo: pb-table-grid', () => {
  beforeEach(() => {
    // Optional: intercept for debug visibility; do not wait on it to avoid race conditions
    cy.intercept({ method: 'GET', url: /\/people\.json(\?.*)?$/ }).as('people')
    cy.visit('/demo/pb-table-grid.html')
    // Wait for the component to load and render the table
    cy.get('pb-table-grid', { timeout: 10000 }).should('be.visible')
    cy.get('pb-table-grid').find('table', { timeout: 10000 }).should('exist')
  })

  it('renders headers and rows from people.json', () => {
    // Element is present and data has been fetched by beforeEach
    // Ensure the Grid container exists then the inner table is rendered by gridjs
    cy.get('pb-table-grid').find('#table').should('exist')
    cy.get('pb-table-grid').find('table').should('exist')
    
    // The legacy Polymer buttons should be gone
    cy.get('pb-table-grid').find('paper-icon-button').should('not.exist')

    // Headers from <pb-table-column>
    cy.get('pb-table-grid').find('thead').should('contain.text', 'Name')
    cy.get('pb-table-grid').find('thead').should('contain.text', 'Born')
    cy.get('pb-table-grid').find('thead').should('contain.text', 'Died')

    // Rows from demo/people.json should be visible (perPage default shows all 6)
    cy.get('pb-table-grid').find('tbody').should('contain.text', 'Immanuel Kant')
    cy.get('pb-table-grid').find('tbody').should('contain.text', 'Hegel')

    // At least a few body rows rendered
    cy.get('pb-table-grid').find('tbody .gridjs-tr').its('length').should('be.greaterThan', 1)
  })
})
