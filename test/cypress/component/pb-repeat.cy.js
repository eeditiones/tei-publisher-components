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

  it('uses native icon buttons instead of paper-icon-button', () => {
    cy.get('#rep').find('paper-icon-button').should('not.exist')
    cy.get('#rep')
      .find('button.pb-button--icon')
      .should('have.length', 2)
      .each($btn => {
        expect($btn).to.have.attr('type', 'button')
        expect($btn).to.have.attr('aria-label')
      })
  })
})
