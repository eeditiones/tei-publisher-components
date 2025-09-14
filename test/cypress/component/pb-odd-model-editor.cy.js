// Cypress CT: pb-odd-model-editor
import '../../../src/pb-odd-model-editor.js'

describe('pb-odd-model-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-odd-model-editor></pb-odd-model-editor>')
    cy.get('pb-odd-model-editor').should('exist')
  })
})

