// Cypress CT: pb-highlight
import '../../../src/pb-highlight.js'

describe('pb-highlight', () => {
  beforeEach(() => {
    const html = '<pb-highlight id="a" key="x"><span>A</span></pb-highlight><pb-highlight id="b" key="x"><span>B</span></pb-highlight>'
    cy.mount(html)
  })

  it('should emit and react to highlight events by key', () => {
    cy.get('#a').find('span').first().trigger('mouseover', { force: true })
    cy.get('#b').find('#content').should('have.class', 'highlight-on')
    cy.document().then((doc) => {
      const ev = new CustomEvent('pb-highlight-off', { detail: { key: '__default__', source: {} }, bubbles: true, composed: true })
      doc.dispatchEvent(ev)
    })
    cy.get('#b').find('#content').should('have.class', 'highlight-off')
  })

  it('should not react when disabled', () => {
    cy.get('#b').then(($el) => { $el[0].command('disable', true) })
    cy.get('#a').find('span').first().trigger('mouseover', { force: true })
    cy.get('#b').find('#content').should('not.exist')
  })
})
