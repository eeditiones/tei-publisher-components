// Cypress CT: pb-odd-model-editor
import '../../../src/pb-odd-model-editor.js'

describe('pb-odd-model-editor', () => {
  it('mounts', () => {
    cy.mount('<pb-odd-model-editor></pb-odd-model-editor>')
    cy.get('pb-odd-model-editor').should('exist')
  })

  it('uses native inputs/selects instead of paper-* elements', () => {
    cy.mount('<pb-odd-model-editor type="model" behaviour="inline" output="web"></pb-odd-model-editor>')
    cy.get('pb-odd-model-editor').then(($el) => {
      const comp = $el[0]
      comp.outputs = ['web', 'print']
      comp.behaviours = ['inline', 'block']
      comp.requestUpdate()
      return comp.updateComplete
    })
    cy.get('pb-odd-model-editor').then(($el) => $el[0].updateComplete)

    cy.get('pb-odd-model-editor').shadow()
      .find('paper-input, paper-dropdown-menu, paper-menu-button, paper-item, paper-listbox, paper-button')
      .should('not.exist')

    cy.get('pb-odd-model-editor').shadow().find('select').should('have.length.at.least', 2)
    cy.get('pb-odd-model-editor').shadow().find('input.pb-input').should('exist')
  })
})
