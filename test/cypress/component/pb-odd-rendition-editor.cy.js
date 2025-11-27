// Cypress CT: pb-odd-rendition-editor
import '../../../src/pb-odd-rendition-editor.js'

describe('pb-odd-rendition-editor', () => {
  it('should mount', () => {
    cy.mount('<pb-odd-rendition-editor></pb-odd-rendition-editor>')
    cy.get('pb-odd-rendition-editor').should('exist')
  })

  it('should use native select instead of paper-dropdown-menu', () => {
    cy.mount('<pb-odd-rendition-editor></pb-odd-rendition-editor>')

    cy.get('pb-odd-rendition-editor').then($els => $els[0].updateComplete)

    cy.get('pb-odd-rendition-editor').shadow()
      .find('paper-dropdown-menu, paper-listbox, paper-item')
      .should('not.exist')

    cy.get('pb-odd-rendition-editor').shadow().find('select').as('select').should('exist')

    cy.get('pb-odd-rendition-editor').then(($el) => {
      const comp = $el[0]
      comp.scope = 'before'
      return comp.updateComplete
    })

    cy.get('@select').should('have.value', 'before')

    cy.get('@select').select('')
    cy.get('pb-odd-rendition-editor').should('have.prop', 'scope', '')
  })
})
