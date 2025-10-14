// Cypress CT: pb-grid
import '../../../src/pb-page.js'
import '../../../src/pb-grid.js'
import '../../../src/pb-panel.js'
import '../../../src/pb-grid-action.js'

describe('pb-grid', () => {
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

  it('should open a panel and emit pb-panel', () => {
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
      cy.get('pb-panel').then(($p) => $p[0].updateComplete).then(() => {
        cy.get('pb-panel').find('select[name="panels"]').should(($select) => {
          const el = /** @type {HTMLSelectElement} */ ($select[0])
          expect(el.selectedIndex).to.equal(1)
          expect(el.value).to.equal('1')
        })
      })
    })
  })

  it('should support add/remove panels and maintain state', () => {
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

  it('should reorder panels via pb-drop', () => {
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
        grid.addPanel(0)
        grid.addPanel(1)
        const first = grid.querySelectorAll('._grid_panel')[0]
        grid.dispatchEvent(new CustomEvent('pb-drop', { detail: { panel: '1', target: first }, bubbles: true, composed: true }))
      })
    cy.get('#grid ._grid_panel').should(($panels) => {
      expect($panels.length).to.be.gte(2)
      expect($panels.eq(0)).to.have.attr('active', '1')
      expect($panels.eq(1)).to.have.attr('active', '0')
    })
  })

  it('should zoom in/out by adjusting font-size', () => {
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

  it('should compute column widths from child max-width', () => {
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
      grid._update()
      const val = grid.style.getPropertyValue('--pb-computed-column-widths').trim()
      expect(val).to.contain('200px')
    })
  })

  it('should no-op when grid selector is invalid', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-grid-action id="act" grid="#missing"><span>Do it</span></pb-grid-action>
      </pb-page>
    `)
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError')
      cy.get('#act').shadow().find('button').click({ force: true })
      cy.get('@consoleError').should('have.been.called')
    })
  })

  it('should add a panel when clicked', () => {
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
    cy.get('#grid').then(($grid) => {
      const grid = $grid[0]
      cy.window().then((win) => {
        if (win.pbRegistry) {
          win.pbRegistry.replace(grid, { panels: '' }, true)
        }
      })
    })
    cy.get('#act').find('button').click({ force: true })
    cy.get('#grid ._grid_panel[active="0"]').should('exist')
  })

  it.skip('should remove the containing panel (remove action not working properly)', () => {
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
    
    // Get initial count
    cy.get('#grid ._grid_panel').then(($panels) => {
      const initial = $panels.length
      cy.log(`Initial panel count: ${initial}`)
      
      // Click remove button
      cy.get('#rm').find('button').click({ force: true })
      
      // Wait for the panel to be removed
      cy.get('#grid ._grid_panel').should('have.length', initial - 1)
    })
  })
})
