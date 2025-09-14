// Cypress CT: pb-print-preview
import '../../../src/pb-print-preview.js'

describe('pb-print-preview', () => {
  it('mounts', () => {
    cy.mount('<pb-print-preview></pb-print-preview>')
    cy.get('pb-print-preview').should('exist')
  })
})

