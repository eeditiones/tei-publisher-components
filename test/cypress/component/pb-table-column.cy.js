// Cypress CT: pb-table-column
import '../../../src/pb-table-column.js'

describe('pb-table-column', () => {
  it('mounts', () => {
    cy.mount('<pb-table-column></pb-table-column>')
    cy.get('pb-table-column').should('exist')
  })
})

