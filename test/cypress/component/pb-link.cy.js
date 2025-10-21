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

  it('should NOT duplicate content when rendering (regression test)', () => {
    // Test with complex content that could be duplicated
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-link id="complex-link" node-id="3.6.2.20">
          <span class="tei-head tei-head1">Vorrede.</span>
        </pb-link>
      </pb-page>
    `)
    
    // Wait for component to render and check it exists
    cy.get('#complex-link').should('exist')
    
    // Wait for the button to be rendered
    cy.get('#complex-link button').should('exist')
    
    // Check that content appears only once (not duplicated)
    cy.get('#complex-link').within(() => {
      // Should have exactly one button
      cy.get('button').should('have.length', 1)
      
      // Should have exactly one span with the content
      cy.get('span.tei-head.tei-head1').should('have.length', 1)
      
      // The span should contain the text
      cy.get('span.tei-head.tei-head1').should('contain.text', 'Vorrede.')
    })
    
    // Check that the text "Vorrede." appears only once in the entire component
    cy.get('#complex-link').then(($el) => {
      const textContent = $el.text()
      const vorredeCount = (textContent.match(/Vorrede\./g) || []).length
      expect(vorredeCount).to.equal(1)
    })
  })

  it('should NOT duplicate content with nested HTML elements (regression test)', () => {
    // Test with nested content that could be duplicated
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-link id="nested-link" xml-id="chapter1">
          <div class="content">
            <span class="title">Chapter 1</span>
            <p>This is a paragraph with <em>emphasis</em>.</p>
          </div>
        </pb-link>
      </pb-page>
    `)
    
    // Wait for component to render and check it exists
    cy.get('#nested-link').should('exist')
    
    // Wait for the button to be rendered
    cy.get('#nested-link button').should('exist')
    
    // Check that nested content appears only once
    cy.get('#nested-link').within(() => {
      // Should have exactly one button
      cy.get('button').should('have.length', 1)
      
      // Should have exactly one div.content
      cy.get('div.content').should('have.length', 1)
      
      // Should have exactly one span.title
      cy.get('span.title').should('have.length', 1)
      
      // Should have exactly one p element
      cy.get('p').should('have.length', 1)
      
      // Should have exactly one em element
      cy.get('em').should('have.length', 1)
      
      // Check that the span contains the expected text
      cy.get('span.title').should('contain.text', 'Chapter 1')
    })
    
    // Check that "Chapter 1" appears only once
    cy.get('#nested-link').then(($el) => {
      const textContent = $el.text()
      const chapterCount = (textContent.match(/Chapter 1/g) || []).length
      expect(chapterCount).to.equal(1)
    })
  })
})
