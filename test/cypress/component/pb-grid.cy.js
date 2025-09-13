// Cypress CT: pb-grid
import '../../../src/pb-page.js'
import '../../../src/pb-grid.js'
import '../../../src/pb-panel.js'
import '../../../src/pb-grid-action.js'

describe('pb-grid', () => {
  // Base markup for default cases: direct pb-panel child
  const base = `
    <pb-page endpoint="." api-version="1.0.0">
      <pb-grid id="grid">
        <pb-panel>
          <template title="One"><div id="p1">One</div></template>
          <template title="Two"><div id="p2">Two</div></template>
        </pb-panel>
      </pb-grid>
    </pb-page>
  `

  beforeEach(() => {
    cy.mount(base)
    cy.resetPanels('#grid')
  })
  it('can open a panel and emit pb-panel', () => {
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
        cy.get('pb-panel').find('select[name="panels"]').should(($select) => {
          const el = /** @type {HTMLSelectElement} */ ($select[0])
          expect(el.selectedIndex).to.equal(1)
          expect(el.value).to.equal('1')
        })
      })
    })
  })

  it('supports add/remove panels and maintains state', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid id="grid" panels="[]">
          <template>
            <pb-panel>
              <template title="FIRST">First</template>
              <template title="SECOND">Second</template>
              <template title="THIRD">Third</template>
            </pb-panel>
          </template>
        </pb-grid>
      </pb-page>
    `)
    cy.get('#grid').then(($grid) => {
      const grid = $grid[0]
      grid.addPanel(1)
      expect(grid.panels).to.deep.equal([1])
      grid.removePanel(1)
      expect(grid.panels).to.deep.equal([])
      grid.addPanel(0)
      expect(grid.panels).to.deep.equal([0])
      grid.addPanel()
      expect(grid.panels).to.deep.equal([0, 1])
    })
  })

  it('reorders panels via pb-drop', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid id="grid" panels="[]">
          <template>
            <pb-panel draggable>
              <template title="ONE">One</template>
              <template title="TWO">Two</template>
              <template title="THREE">Three</template>
            </pb-panel>
          </template>
        </pb-grid>
      </pb-page>
    `)
    cy.get('#grid')
      .then(($grid) => $grid[0].updateComplete)
      .then(() => {
        const grid = /** @type {any} */ (document.getElementById('grid'))
        // Open two panels: [0, 1]
        grid.addPanel(0)
        grid.addPanel(1)
        // Move second panel (index 1) before the first panel
        const first = grid.querySelectorAll('._grid_panel')[0]
        grid.dispatchEvent(new CustomEvent('pb-drop', { detail: { panel: '1', target: first }, bubbles: true, composed: true }))
      })
    // Assert DOM order reflects reorder (retryable) without enforcing exact count
    cy.get('#grid ._grid_panel').should(($panels) => {
      expect($panels.length).to.be.gte(2)
      expect($panels.eq(0)).to.have.attr('active', '1')
      expect($panels.eq(1)).to.have.attr('active', '0')
    })
  })

  it('zooms in/out by adjusting font-size', () => {
    // base is mounted; set initial font-size
    cy.get('#grid').invoke('attr', 'style', 'font-size: 10px')
    cy.get('#grid').then(($grid) => {
      const grid = $grid[0]
      const getSize = () => parseInt(getComputedStyle(grid).getPropertyValue('font-size'))
      expect(getSize()).to.equal(10)
      grid.zoom('in')
      expect(getSize()).to.equal(11)
      grid.zoom('out')
      expect(getSize()).to.equal(10)
    })
  })

  it('computes column widths from child max-width', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid id="grid" panels="[]">
          <template>
            <pb-panel style="max-width: 200px">
              <template title="ONE">One</template>
              <template title="TWO">Two</template>
            </pb-panel>
          </template>
        </pb-grid>
      </pb-page>
    `)
    cy.get('#grid').then(($grid) => {
      const grid = /** @type {any} */ ($grid[0])
      grid.addPanel(0)
      grid.addPanel(1)
      // Force update to compute widths
      grid._update()
      const val = grid.style.getPropertyValue('--pb-computed-column-widths').trim()
      expect(val).to.contain('200px')
    })
  })

  it('pb-grid-action no-ops when grid selector is invalid', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid-action id="act" grid="#missing"><span>Do it</span></pb-grid-action>
      </pb-page>
    `)
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError')
      cy.get('#act').shadow().find('a').click({ force: true })
      cy.get('@consoleError').should('have.been.called')
    })
  })

  it('grid-action adds a panel when clicked', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid id="grid" panels="[]">
          <template>
            <pb-panel>
              <template title="ONE">One</template>
              <template title="TWO">Two</template>
            </pb-panel>
          </template>
        </pb-grid>
        <pb-grid-action id="act" grid="#grid" action="add" initial="0">Add</pb-grid-action>
      </pb-page>
    `)
    // Reset registry to avoid leftover state from previous tests
    cy.get('#grid').then(($grid) => {
      const grid = $grid[0]
      cy.window().then((win) => {
        if (win.pbRegistry) {
          win.pbRegistry.replace(grid, { panels: '' }, true)
        }
      })
    })
    cy.get('#act').find('a').click({ force: true })
    // Assert a panel with active="0" exists
    cy.get('#grid ._grid_panel[active="0"]').should('exist')
  })
  // see #249
  it.skip('grid-action removes the containing panel (flaky, revisit after deps update)', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid id="grid" panels="[]">
          <template>
            <pb-panel>
              <template title="ONE">One</template>
              <template title="TWO">Two</template>
              <span slot="toolbar"><pb-grid-action id="rm" grid="#grid" action="remove">Remove</pb-grid-action></span>
            </pb-panel>
          </template>
        </pb-grid>
      </pb-page>
    `)
    cy.get('#grid').then(($grid) => {
      const grid = /** @type {any} */ ($grid[0])
      grid.addPanel(0)
      grid.addPanel(1)
    })
    cy.get('#grid ._grid_panel').should('have.length.at.least', 2)
    cy.get('#rm').find('a').click({ force: true })
    // Expect panel count to eventually drop below initial
    cy.get('#grid ._grid_panel').then(($panels) => {
      const initial = $panels.length
      cy.get('#grid ._grid_panel').should(($p2) => {
        expect($p2.length).to.be.lessThan(initial)
      })
    })
  })
})
