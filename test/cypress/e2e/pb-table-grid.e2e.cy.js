// E2E: pb-table-grid renders data from demo JSON

describe('Demo: pb-table-grid', () => {
  beforeEach(() => {
    // Optional: intercept for debug visibility; do not wait on it to avoid race conditions
    cy.intercept({ method: 'GET', url: /\/people\.json(\?.*)?$/ }).as('people')
    cy.visit('/demo/pb-table-grid.html')
    // Ensure element exists, then force an initial submit to guarantee the fetch
    cy.get('pb-table-grid').should('exist').then(($el) => {
      const comp = $el[0]
      const uc = comp && comp.updateComplete
      const wait = uc && typeof uc.then === 'function' ? uc : Promise.resolve()
      return wait
        .then(() => {
          if (!comp.search) {
            comp.search = true
            comp.requestUpdate()
            return comp.updateComplete
          }
          return null
        })
        .then(() => {
          if (typeof comp._initGrid === 'function') comp._initGrid()
          if (comp.grid && typeof comp._submit === 'function') comp._submit()
        })
    })
  })

  it('renders headers and rows from people.json', () => {
    // Element is present and data has been fetched by beforeEach
    // Ensure the Grid container exists then the inner table is rendered by gridjs
    cy.get('pb-table-grid').find('#table').should('exist')
    cy.get('pb-table-grid').find('table').should('exist')
    // The legacy Polymer buttons should be gone; native icon button present
    cy.get('pb-table-grid').find('paper-icon-button').should('not.exist')
    cy.get('pb-table-grid')
      .find('button.pb-button--icon[slot="suffix"]')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label')

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
