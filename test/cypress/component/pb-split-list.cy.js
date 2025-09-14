// Cypress CT: pb-split-list
import '../../../src/pb-split-list.js'

describe('pb-split-list', () => {
  it('mounts', () => {
    cy.mount('<pb-split-list></pb-split-list>')
    cy.get('pb-split-list').should('exist')
  })
})

