// Cypress CT: pb-lang
import '../../../src/pb-lang.js'

describe('pb-lang', () => {
  it('should mount', () => {
    cy.mount('<pb-lang></pb-lang>')
    cy.get('pb-lang').should('exist')
  })
})

