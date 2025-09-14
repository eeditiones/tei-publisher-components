// Cypress CT: pb-code-editor
import '../../../src/pb-code-editor.js'

describe('pb-code-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-code-editor></pb-code-editor>')
    cy.get('pb-code-editor').should('exist')
  })
})

