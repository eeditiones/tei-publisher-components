// Cypress CT: pb-tabs
import '../../../src/pb-tabs.js'

describe('pb-tabs', () => {
  const base = `
    <pb-tabs id="tabs">
      <button slot="tab">Tab 1</button>
      <button slot="tab">Tab 2</button>
      <div slot="page" id="p1">Page 1</div>
      <div slot="page" id="p2">Page 2</div>
    </pb-tabs>
  `

  beforeEach(() => {
    cy.mount(base)
    cy.get('#tabs').then(($el) => $el[0].updateComplete)
  })

  it('selects first tab by default and switches when selected changes', () => {
    cy.get('#tabs').find('paper-tab, paper-tabs, iron-pages').should('not.exist')
    cy.get('#tabs').find('[slot="page"]').eq(0).should('not.be.hidden')

    cy.get('#tabs').then(($el) => {
      expect(Number($el[0].selected)).to.equal(0)
      $el[0].selected = 1
    })
    cy.get('#tabs').then(($el) => {
      expect(Number($el[0].selected)).to.equal(1)
    })

    cy.get('#tabs').find('button').eq(1).click()
    cy.get('#tabs').then(($el) => {
      expect(Number($el[0].selected)).to.equal(1)
    })
    cy.get('#tabs').find('[slot="page"]').eq(1).should('not.be.hidden')
    cy.get('#tabs').find('[slot="page"]').eq(0).should('be.hidden')
  })
})
