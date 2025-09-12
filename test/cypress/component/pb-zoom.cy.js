// Cypress CT: pb-zoom integration with pb-grid
import '../../../src/pb-page.js'
import '../../../src/pb-grid.js'
import '../../../src/pb-panel.js'
import '../../../src/pb-zoom.js'

describe('pb-zoom', () => {
  it('emits pb-zoom and grid reacts', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-zoom id="zin" direction="in">+</pb-zoom>
        <pb-grid id="grid" style="font-size: 10px">
          <template>
            <pb-panel>
              <template title="ONE">One</template>
            </pb-panel>
          </template>
        </pb-grid>
      </pb-page>
    `)
    cy.get('#grid').then(($grid) => {
      const grid = $grid[0]
      const size = () => parseInt(getComputedStyle(grid).getPropertyValue('font-size'))
      expect(size()).to.equal(10)
    })
    cy.get('#zin').find('a').click()
    cy.get('#grid').should(($grid) => {
      const grid = $grid[0]
      const size = parseInt(getComputedStyle(grid).getPropertyValue('font-size'))
      expect(size).to.equal(11)
    })
  })
})
