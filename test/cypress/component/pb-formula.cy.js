// Cypress CT: pb-formula
import '../../../src/pb-page.js'
import '../../../src/pb-formula.js'

describe('pb-formula', () => {
  it('formats TeX math in display mode', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-formula display>\\frac{y}{z^{m-1}}+\\frac{\\overline{m-1}^{2}y}{z^{m+1}}=Q</pb-formula>
      </pb-page>
    `)
    cy.get('pb-formula[loaded]').should('exist')
    cy.get('pb-formula').should($el => {
      const el = $el[0]
      expect(el.getAttribute('source')).to.equal('\\frac{y}{z^{m-1}}+\\frac{\\overline{m-1}^{2}y}{z^{m+1}}=Q')
      const container = el.querySelector('mjx-container')
      expect(container).to.exist
      expect(container.getAttribute('display')).to.equal('true')
    })
  })

  it('formats TeX math in inline mode', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <h2>Formula in heading: <pb-formula>a^{2}\\dot{x}+x\\dot{y}^{2}=0</pb-formula></h2>
      </pb-page>
    `)
    cy.get('pb-formula[loaded]').should('exist')
    cy.get('pb-formula').should($el => {
      const el = $el[0]
      expect(el.getAttribute('source')).to.equal('a^{2}\\dot{x}+x\\dot{y}^{2}=0')
      const container = el.querySelector('mjx-container')
      expect(container).to.exist
      expect(container.hasAttribute('display')).to.equal(false)
    })
  })
})
