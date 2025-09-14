// Cypress CT: pb-odd-rendition-editor
import '../../../src/pb-odd-rendition-editor.js'

describe('pb-odd-rendition-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-odd-rendition-editor></pb-odd-rendition-editor>')
    cy.get('pb-odd-rendition-editor').should('exist')
  })
})

