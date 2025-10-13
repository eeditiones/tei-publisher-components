// Cypress CT: pb-link
import '../../../src/pb-page.js'
import '../../../src/pb-link.js'

describe('pb-link', () => {
  const base = `
    <pb-page endpoint="." api-version="1.0.0">
      <pb-link id="lnk">Intro</pb-link>
    </pb-page>
  `

  beforeEach(() => {
    cy.mount(base)
  })

  it('should emit pb-refresh with xml-id', () => {
    cy.get('#lnk').invoke('attr', 'xml-id', 'intro')
    const wait = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-refresh', resolve, { once: true })
    })
    cy.get('#lnk button').click()
    cy.wrap(wait).then((ev) => {
      expect(ev.detail.id).to.equal('intro')
    })
  })

  it('should emit pb-refresh with node-id and hash', () => {
    cy.get('#lnk').invoke('attr', 'node-id', '3.5.6').invoke('attr', 'hash', 'p2')
    const wait = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-refresh', resolve, { once: true })
    })
    cy.get('#lnk button').click()
    cy.wrap(wait).then((ev) => {
      expect(ev.detail.root).to.equal('3.5.6')
      expect(ev.detail.hash).to.equal('p2')
    })
  })

  it('should not push history when history=false', () => {
    cy.get('#lnk').invoke('attr', 'xml-id', 'intro')
    cy.window().then((win) => {
      cy.stub(win.history, 'pushState').as('push')
      const wait = new Cypress.Promise((resolve) => {
        document.addEventListener('pb-refresh', resolve, { once: true })
      })
      cy.get('#lnk').then(($el) => { $el[0].history = false })
      cy.get('#lnk button').click()
      cy.wrap(wait).then((ev) => {
        expect(ev.detail.id).to.equal('intro')
      })
      cy.get('@push').should('not.have.been.called')
    })
  })

  it('should push history by default when clicked', () => {
    cy.get('#lnk').invoke('attr', 'xml-id', 'go')
    cy.window().then((win) => {
      cy.stub(win.history, 'pushState').as('push')
      const wait = new Cypress.Promise((resolve) => {
        document.addEventListener('pb-refresh', resolve, { once: true })
      })
      cy.get('#lnk').then(($el) => { $el[0].history = true })
      cy.get('#lnk button').click()
      cy.wrap(wait).then((ev) => {
        expect(ev.detail.id).to.equal('go')
      })
      cy.get('@push').should('have.been.called')
    })
  })

  it('should emit pb-refresh with odd/view/xpath parameters', () => {
    cy.get('#lnk')
      .invoke('attr', 'xml-id', 'intro')
      .invoke('attr', 'odd', 'myodd')
      .invoke('attr', 'view', 'page')
      .invoke('attr', 'xpath', '//div[1]')

    const wait = new Cypress.Promise((resolve) => {
      document.addEventListener('pb-refresh', resolve, { once: true })
    })
    cy.get('#lnk button').click()
    cy.wrap(wait).then((ev) => {
      expect(ev.detail.id).to.equal('intro')
      expect(ev.detail.odd).to.equal('myodd')
      expect(ev.detail.view).to.equal('page')
      expect(ev.detail.xpath).to.equal('//div[1]')
    })
  })

  it('should add active class on pb-visible for matching node-id and hash', () => {
    cy.get('#lnk').invoke('attr', 'node-id', '3.5.6').invoke('attr', 'hash', 'p2')
    cy.document().then((doc) => {
      const ev = new CustomEvent('pb-visible', { detail: { key: '__default__', data: '3.5.6, p2' }, bubbles: true, composed: true })
      doc.dispatchEvent(ev)
    })
    cy.get('#lnk').should('have.class', 'active')
  })
})
