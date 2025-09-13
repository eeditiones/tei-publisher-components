// Cypress CT: pb-panel
import '../../../src/pb-panel.js'

describe('pb-panel', () => {
  it('switches active panel via dropdown', () => {
    cy.mount(`
      <pb-panel id="panel">
        <template title="One"><div id="p1">One</div></template>
        <template title="Two"><div id="p2">Two</div></template>
      </pb-panel>
    `)

    cy.get('#panel').find('select[name="panels"]').select('1')
    cy.get('#panel').find('._pb_panel1').should('exist')
    cy.get('#panel').find('select[name="panels"]').should(($sel) => {
      const el = /** @type {HTMLSelectElement} */ ($sel[0])
      expect(el.value).to.equal('1')
      expect(el.selectedIndex).to.equal(1)
    })
  })

  it('shows drag handle when draggable', () => {
    cy.mount(`
      <pb-panel id="panel" draggable>
        <template title="One"><div>One</div></template>
        <template title="Two"><div>Two</div></template>
      </pb-panel>
    `)
    cy.get('#panel').find('button[draggable="true"]').should('exist')
  })
})
