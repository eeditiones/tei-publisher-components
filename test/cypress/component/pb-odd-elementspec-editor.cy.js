// Cypress CT: pb-odd-elementspec-editor
import '../../../src/pb-odd-elementspec-editor.js'

describe('pb-odd-elementspec-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-odd-elementspec-editor></pb-odd-elementspec-editor>')
    cy.get('pb-odd-elementspec-editor').should('exist')
  })
})

