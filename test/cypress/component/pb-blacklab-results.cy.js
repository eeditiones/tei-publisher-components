// Cypress CT: pb-blacklab-results
import '../../../src/pb-blacklab-results.js'

describe('pb-blacklab-results', () => {
  it('mounts', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').should('exist')
  })
})

