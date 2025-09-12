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

  it('formats MathML math in display mode', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-formula>
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
            <msqrt>
              <mn>3</mn>
              <mi>x</mi>
              <mo>&#x2212;</mo>
              <mn>1</mn>
            </msqrt>
            <mo>+</mo>
            <mo stretchy="false">(</mo>
            <mn>1</mn>
            <mo>+</mo>
            <mi>x</mi>
            <msup>
              <mo stretchy="false">)</mo>
              <mn>2</mn>
            </msup>
          </math>
        </pb-formula>
      </pb-page>
    `)
    cy.get('pb-formula[loaded]').should('exist')
    cy.get('pb-formula').should($el => {
      const el = $el[0]
      const container = el.querySelector('mjx-container')
      expect(container).to.exist
    })
  })

  it('reports error in TeX notation', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-formula display>\\frac{1}{z</pb-formula>
      </pb-page>
    `)
    cy.get('pb-formula[loaded]').should('exist')
    cy.get('pb-formula').should($el => {
      const el = $el[0]
      const err = el.querySelector('mjx-merror')
      expect(err).to.exist
      expect(err.getAttribute('data-mjx-error')).to.equal('Missing close brace')
    })
  })
})
