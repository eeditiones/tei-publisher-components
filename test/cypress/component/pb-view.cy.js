// Cypress CT: pb-view
import '../../../src/pb-page.js'
import '../../../src/pb-document.js'
import '../../../src/pb-view.js'
import '../../../src/pb-formula.js'

describe('pb-view', () => {
  function interceptParts() {
    cy.intercept('GET', '**/api/parts/**/json*', req => {
      const url = new URL(req.url)
      const params = Object.fromEntries(url.searchParams.entries())
      // initial load for documentation
      const docDoc = encodeURIComponent('doc/documentation.xml')
      if (req.url.includes(`/${docDoc}/`)) {
        if (params.id === 'installation') {
          req.reply({
            statusCode: 200,
            body: {
              content: '<h2>Installation</h2>',
              root: 'installation',
              next: null,
              previous: null,
              switchView: null,
            },
          })
        } else {
          req.reply({
            statusCode: 200,
            body: {
              content: '<h1>Introduction</h1>',
              root: 'intro',
              next: 'installation',
              previous: null,
              switchView: null,
            },
          })
        }
        return
      }
      // non-existing doc
      const notFound = encodeURIComponent('xxx/yyy.xml')
      if (req.url.includes(`/${notFound}/`)) {
        req.reply({ statusCode: 404, body: { description: 'Not found' } })
        return
      }
      // graves doc with footnotes/geolocation demo
      const graves = encodeURIComponent('test/graves6.xml')
      if (req.url.includes(`/${graves}/`)) {
        req.reply({
          statusCode: 200,
          body: {
            content:
              '<div><pb-geolocation key="CanFloque"><span>Can Floque</span></pb-geolocation></div>',
            footnotes: '<div>brata</div>',
            root: 'root',
            next: null,
            previous: null,
            switchView: null,
          },
        })
        return
      }
      // orlik doc for footnotes test
      const orlik = encodeURIComponent('test/orlik_to_serafin.xml')
      if (req.url.includes(`/${orlik}/`)) {
        req.reply({
          statusCode: 200,
          body: {
            content: '<div><p>Some content</p></div>',
            footnotes: '<div>brata</div>',
            root: 'root',
            next: null,
            previous: null,
            switchView: null,
          },
        })
        return
      }
      // default fallback
      req.reply({ statusCode: 200, body: { content: '<div></div>' } })
    }).as('parts')
  }

  it('emits and receives events', () => {
    interceptParts()
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
        <pb-view src="document1"></pb-view>
      </pb-page>
    `)
    cy.wait('@parts')
    cy.get('pb-view').find('#content h1').should('have.text', 'Introduction')
    // Trigger refresh to a new section by id
    cy.window().then(win => {
      win.document.dispatchEvent(
        new CustomEvent('pb-refresh', {
          detail: { id: 'installation', key: '__default__' },
        }),
      )
    })
    cy.wait('@parts')
    cy.get('pb-view').find('#content h2').should('have.text', 'Installation')
    // change to a different document
    cy.window().then(win => {
      win.document.dispatchEvent(
        new CustomEvent('pb-refresh', {
          detail: {
            path: 'test/graves6.xml',
            odd: 'graves',
            position: null,
            key: '__default__',
          },
        }),
      )
    })
    cy.wait('@parts')
    cy.get('pb-view').find('#content pb-geolocation[key=CanFloque] *').should('have.text', 'Can Floque')
  })

  it('shows placeholder for non existing document', () => {
    interceptParts()
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-document id="document1" path="xxx/yyy.xml" odd="docbook" view="div"></pb-document>
        <pb-view src="document1" not-found="Not found"></pb-view>
      </pb-page>
    `)
    cy.wait('@parts')
    cy.get('pb-view').find('#content').invoke('html').should('contain', 'Not found')
  })

  it('shows footnotes', () => {
    interceptParts()
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-document id="document1" path="test/orlik_to_serafin.xml" odd="serafin"></pb-document>
        <pb-view src="document1" xpath="//text[@xml:lang = 'la']/body" view="single" append-footnotes></pb-view>
      </pb-page>
    `)
    cy.wait('@parts')
    cy.get('pb-view').find('#footnotes').invoke('html').should('contain', 'brata')
  })
})
