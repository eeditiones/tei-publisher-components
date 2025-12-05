// Cypress CT: pb-paginate
import '../../../src/pb-paginate.js'

describe('pb-paginate', () => {
  beforeEach(() => {
    cy.mount('<pb-paginate id="pg" per-page="10"></pb-paginate>')
  })

  it('should emit events when page is clicked after receiving results', () => {
    cy.get('#pg').then($el => {
      const host = $el[0]
      host._refresh({ detail: { start: 1, count: 30 } })
      return host.updateComplete
    })
    cy.get('#pg').find('.pb-paginate__page').should('have.length', 3)
    cy.get('#pg').find('.pb-paginate__page').contains('2').click()
    cy.get('#pg').then($el => {
      expect($el[0].start).to.equal(11)
    })
  })
})
