// Cypress CT: dts-select-endpoint
import '../../../src/dts-select-endpoint.js'

describe('dts-select-endpoint', () => {
  it('mounts', () => {
    cy.mount('<dts-select-endpoint id="dts"></dts-select-endpoint>')
    cy.get('#dts').then(($el) => {
      const comp = $el[0]
      comp.endpoints = [
        { url: 'https://example.com/default', title: 'Default' },
        { url: 'https://example.com/alt', title: 'Alt', collection: 'alt-collection' }
      ]
      comp.auto = true
      comp.requestUpdate()
      return comp.updateComplete
    })

    cy.get('dts-select-endpoint').shadow().find('paper-dropdown-menu, paper-item, paper-listbox').should('not.exist')
    cy.get('dts-select-endpoint').shadow().find('select').as('select').should('exist')
    cy.get('@select').should('have.value', 'https://example.com/default')
    cy.get('@select').select('https://example.com/alt')
    cy.get('dts-select-endpoint').then(($el) => {
      expect($el[0].endpoint).to.equal('https://example.com/alt')
    })
  })
})
