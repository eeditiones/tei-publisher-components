// Cypress CT: pb-zoom integration with pb-grid
import '../../../src/pb-page.js'
import '../../../src/pb-grid.js'
import '../../../src/pb-panel.js'
import '../../../src/pb-zoom.js'

describe('pb-zoom', () => {
  it('should emit pb-zoom and apply global zoom via CSS variable', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-zoom id="zin" direction="in">+</pb-zoom>
        <!-- Use CSS custom property so component style can compute size from vars -->
        <pb-grid id="grid" style="--pb-content-font-size: 10px">
          <template>
            <pb-panel>
              <template title="ONE">One</template>
            </pb-panel>
          </template>
        </pb-grid>
      </pb-page>
    `)
    // Initially, CSS var may be unset, default to 1
    const getZoom = () => getComputedStyle(document.documentElement).getPropertyValue('--pb-zoom-factor').trim()
    cy.wrap(null).then(() => {
      const initial = getZoom() || '1'
      expect(['', '1']).to.include(initial)
    })
    cy.get('#zin').find('button').click()
    // After click, CSS var should be set to > 1 (e.g., 1.1)
    cy.wrap(null).then(() => {
      const after = getZoom()
      expect(parseFloat(after || '1')).to.be.greaterThan(1)
      // preference persisted
      expect(localStorage.getItem('pb-zoom-preference')).to.exist
    })
    // And a component using the var should reflect it (pb-grid has font-size using var)
    cy.get('#grid').then(($grid) => {
      const grid = $grid[0]
      const computed = getComputedStyle(grid).getPropertyValue('font-size')
      // With base 10px and zoom > 1, computed should be > 10px
      expect(parseInt(computed)).to.be.greaterThan(10)
    })
  })
})
