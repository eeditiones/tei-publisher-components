// Cypress CT: pb-lang
import '../../../src/pb-lang.js'

describe('pb-lang', () => {
  it('mounts', () => {
    cy.mount('<pb-lang></pb-lang>')
    cy.get('pb-lang').should('exist')
  })
})

