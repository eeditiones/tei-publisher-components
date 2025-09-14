// Cypress CT: pb-odd-parameter-editor
import '../../../src/pb-odd-parameter-editor.js'

describe('pb-odd-parameter-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-odd-parameter-editor></pb-odd-parameter-editor>')
    cy.get('pb-odd-parameter-editor').should('exist')
  })
})

