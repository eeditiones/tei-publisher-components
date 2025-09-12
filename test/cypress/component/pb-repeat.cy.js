// Cypress CT: pb-repeat
import '../../../src/pb-repeat.js'

describe('pb-repeat', () => {
  beforeEach(() => {
    const html = '<pb-repeat id="rep"><template><input type="text" name="field" /></template></pb-repeat>'
    cy.mount(html)
  })

  it('renders initial instance', () => {
    cy.get('#rep .instances .instance').should('have.length', 1)
  })
})

