// Cypress CT: pb-select-feature
import '../../../src/pb-select-feature.js'

describe('pb-select-feature', () => {
  beforeEach(() => {
    cy.mount('<pb-select-feature id="feature" name="view" label="View"></pb-select-feature>')
    cy.get('#feature').then(($el) => {
      const comp = $el[0]
      comp.items = [
        { name: 'Option A', properties: { mode: 'a' } },
        { name: 'Option B', properties: { mode: 'b' } }
      ]
      comp.requestUpdate()
      return comp.updateComplete
    })
  })

  it('uses native select instead of paper-dropdown-menu', () => {
    cy.get('pb-select-feature').shadow().find('paper-dropdown-menu, paper-item, paper-listbox').should('not.exist')
    cy.get('pb-select-feature').shadow().find('select').should('exist')
  })

  it('updates selected index on change', () => {
    cy.get('pb-select-feature').shadow().find('select').select('1')
    cy.get('pb-select-feature').then(($el) => {
      expect($el[0].selected).to.equal(1)
    })
  })
})
