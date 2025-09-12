// Cypress CT: pb-grid
import '../../../src/pb-page.js'
import '../../../src/pb-grid.js'
import '../../../src/pb-panel.js'

describe('pb-grid', () => {
  it('can open a panel and emit pb-panel', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid id="grid">
          <pb-panel>
            <template title="One"><div id="p1">One</div></template>
            <template title="Two"><div id="p2">Two</div></template>
          </pb-panel>
        </pb-grid>
      </pb-page>
    `)
    cy.get('pb-grid pb-panel').then(($panel) => {
      const panel = $panel[0]
      const p = new Cypress.Promise((resolve) => {
        document.addEventListener('pb-panel', resolve, { once: true })
      })
      panel.active = 1
      panel._show()
      return cy.wrap(p)
    }).then((ev) => {
      expect(ev.detail.active).to.equal(1)
      // Wait for panel re-render, then assert selectedIndex/value on native select
      cy.get('pb-panel').then(($p) => $p[0].updateComplete).then(() => {
        cy.get('pb-panel')
          .shadow()
          .find('select[name="panels"]')
          .should(($select) => {
            const el = /** @type {HTMLSelectElement} */ ($select[0])
            expect(el.selectedIndex).to.equal(1)
            expect(el.value).to.equal('1')
          })
      })
    })
  })
})
