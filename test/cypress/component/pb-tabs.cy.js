// Cypress CT: pb-tabs
import '../../../src/pb-tabs.js'

describe('pb-tabs', () => {
  const base = `
    <pb-tabs id="tabs">
      <paper-tab slot="tab">Tab 1</paper-tab>
      <paper-tab slot="tab">Tab 2</paper-tab>
      <div slot="page" id="p1">Page 1</div>
      <div slot="page" id="p2">Page 2</div>
    </pb-tabs>
  `

  beforeEach(() => {
    cy.mount(base)
  })

  it('selects first tab by default and switches when selected changes', () => {
    cy.get('#tabs').then(($el) => {
      expect(Number($el[0].selected)).to.equal(0)
      $el[0].selected = 1
    })
    cy.get('#tabs').then(($el) => {
      expect(Number($el[0].selected)).to.equal(1)
    })
  })
})
