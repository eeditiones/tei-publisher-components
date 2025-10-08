// Cypress CT: pb-odd-parameter-editor
import '../../../src/pb-odd-parameter-editor.js'

describe('pb-odd-parameter-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-odd-parameter-editor></pb-odd-parameter-editor>')
    cy.get('pb-odd-parameter-editor').should('exist')
  })

  it('uses native controls instead of paper-* elements', () => {
    cy.mount('<pb-odd-parameter-editor behaviour="alternate"></pb-odd-parameter-editor>')
    cy.get('pb-odd-parameter-editor').then(($el) => {
      const comp = $el[0]
      comp.name = 'param'
      comp.value = 'value'
      comp.parameters = {
        alternate: ['default', 'alternate']
      }
      comp.setParam = true
      comp.requestUpdate()
      return comp.updateComplete
    })

    cy.get('pb-odd-parameter-editor').shadow()
      .find('paper-dropdown-menu, paper-listbox, paper-item, paper-checkbox, paper-autocomplete')
      .should('not.exist')
    cy.get('pb-odd-parameter-editor').shadow().find('pb-autocomplete').should('exist')
    cy.get('pb-odd-parameter-editor').shadow().find('input[type="checkbox"]').should('exist')
  })
})
