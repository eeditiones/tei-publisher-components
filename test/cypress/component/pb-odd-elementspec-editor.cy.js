// Cypress CT: pb-odd-elementspec-editor
import '../../../src/pb-odd-elementspec-editor.js'

describe('pb-odd-elementspec-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-odd-elementspec-editor></pb-odd-elementspec-editor>')
    cy.get('pb-odd-elementspec-editor').should('exist')
  })

  it('accepts ident property', () => {
    cy.mount('<pb-odd-elementspec-editor ident="test-id"></pb-odd-elementspec-editor>')
    cy.get('pb-odd-elementspec-editor').then($el => {
      expect($el[0].ident).to.equal('test-id')
    })
  })

  it('accepts mode property', () => {
    cy.mount('<pb-odd-elementspec-editor mode="add"></pb-odd-elementspec-editor>')
    cy.get('pb-odd-elementspec-editor').then($el => {
      expect($el[0].mode).to.equal('add')
    })
  })
})

