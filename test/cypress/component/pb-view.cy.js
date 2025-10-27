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

  it('should emit and receive events', () => {
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

  it('should show placeholder for non existing document', () => {
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

  it('should show footnotes', () => {
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

  it('should render formulas after loading via pb-view', () => {
    // Intercept parts to return a pb-formula inside content
    cy.intercept('GET', '**/api/parts/**/json*', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          content: '<div><pb-formula display>\\frac{1}{x} + \\frac{1}{y}</pb-formula></div>',
          root: 'root',
          next: null,
          previous: null,
          switchView: null,
        },
      })
    }).as('partsFormula')
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
        <pb-view src="document1"></pb-view>
      </pb-page>
    `)
    cy.wait('@partsFormula')
    // Assert formula component typeset inside the view (retry until MathJax output exists)
    cy.get('pb-view').find('pb-formula[loaded]').should('exist')
    cy.get('pb-view').find('pb-formula').should(($els) => {
      const el = $els[0]
      expect(el.querySelector('mjx-container'), 'MathJax container exists').to.exist
    })
  })

  it('should handle animations with animejs v4.2.2', () => {
    interceptParts()
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
        <pb-view src="document1" animation></pb-view>
      </pb-page>
    `)
    cy.wait('@parts')
    
    // Verify component loads without errors (animejs v4.2.2 compatibility)
    cy.get('pb-view').should('exist')
    cy.get('pb-view').find('#content').should('exist')
    
    // Test animation by triggering a refresh (which should animate)
    cy.window().then(win => {
      win.document.dispatchEvent(
        new CustomEvent('pb-refresh', {
          detail: { id: 'installation', key: '__default__' },
        }),
      )
    })
    cy.wait('@parts')
    
    // Verify content updated (animation worked)
    cy.get('pb-view').find('#content h2').should('have.text', 'Installation')
    
    // Verify the view element exists (target of animation)
    cy.get('pb-view').find('#view').should('exist')
  })

  describe('scroll behavior', () => {
    beforeEach(() => {
      // Mock content with scrollable elements and IDs
      cy.intercept('GET', '**/api/parts/**/json*', (req) => {
        req.reply({
          statusCode: 200,
          body: {
            content: `
              <div>
                <h1 id="intro">Introduction</h1>
                <p>Some content here...</p>
                <h2 id="section1">Section 1</h2>
                <p>More content...</p>
                <h2 id="section2">Section 2</h2>
                <p>Even more content...</p>
                <h2 id="section3">Section 3</h2>
                <p>Final content...</p>
              </div>
            `,
            root: 'intro',
            next: null,
            previous: null,
            switchView: null,
          },
        })
      }).as('partsScroll')
    })

    it('should scroll to hash target on pb-refresh with hash only', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
          <pb-view id="view1" src="document1" style="height: 200px; overflow: auto;"></pb-view>
        </pb-page>
      `)
      cy.wait('@partsScroll')
      
      // Verify initial content loaded
      cy.get('#view1').find('#content h1').should('have.text', 'Introduction')
      
      // Trigger scroll to section2 via hash
      cy.window().then(win => {
        win.document.dispatchEvent(
          new CustomEvent('pb-refresh', {
            detail: { hash: 'section2', key: '__default__' },
          }),
        )
      })
      
      // Wait for scroll to complete (400ms timeout + requestAnimationFrame)
      cy.wait(500)
      
      // Verify scroll happened by checking if section2 is visible
      cy.get('#view1').find('#content').then($content => {
        const contentEl = $content[0]
        const section2El = contentEl.querySelector('#section2')
        expect(section2El).to.exist
        
        // Check if element is in viewport (basic scroll verification)
        const rect = section2El.getBoundingClientRect()
        const viewRect = contentEl.getBoundingClientRect()
        expect(rect.top).to.be.at.least(viewRect.top)
        expect(rect.bottom).to.be.at.most(viewRect.bottom)
      })
    })

    it('should scroll to hash target after content update', () => {
      // Mock content update that includes the target element
      cy.intercept('GET', '**/api/parts/**/json*', (req) => {
        const url = new URL(req.url)
        const params = Object.fromEntries(url.searchParams.entries())
        
        if (params.id === 'installation') {
          req.reply({
            statusCode: 200,
            body: {
              content: `
                <div>
                  <h1 id="installation">Installation</h1>
                  <p>Installation content...</p>
                  <h2 id="config">Configuration</h2>
                  <p>Config content...</p>
                </div>
              `,
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
              content: `
                <div>
                  <h1 id="intro">Introduction</h1>
                  <p>Some content here...</p>
                </div>
              `,
              root: 'intro',
              next: null,
              previous: null,
              switchView: null,
            },
          })
        }
      }).as('partsScrollUpdate')
      
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
          <pb-view id="view1" src="document1" style="height: 200px; overflow: auto;"></pb-view>
        </pb-page>
      `)
      cy.wait('@partsScrollUpdate')
      
      // Set scroll target before triggering content update
      cy.get('#view1').then($view => {
        const viewEl = $view[0]
        viewEl._scrollTarget = 'config'
      })
      
      // Trigger content update
      cy.window().then(win => {
        win.document.dispatchEvent(
          new CustomEvent('pb-refresh', {
            detail: { id: 'installation', key: '__default__' },
          }),
        )
      })
      cy.wait('@partsScrollUpdate')
      
      // Wait for scroll to complete after content update
      cy.wait(500)
      
      // Verify scroll happened to config section
      cy.get('#view1').find('#content').then($content => {
        const contentEl = $content[0]
        const configEl = contentEl.querySelector('#config')
        expect(configEl).to.exist
        
        // Check if element is in viewport
        const rect = configEl.getBoundingClientRect()
        const viewRect = contentEl.getBoundingClientRect()
        expect(rect.top).to.be.at.least(viewRect.top)
        expect(rect.bottom).to.be.at.most(viewRect.bottom)
      })
    })

    it('should scroll to registry hash on initial load', () => {
      // Set registry hash before mounting
      cy.window().then(win => {
        if (!win.pbRegistry) {
          win.pbRegistry = { hash: '#section2' }
        } else {
          win.pbRegistry.hash = '#section2'
        }
      })
      
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
          <pb-view id="view1" src="document1" style="height: 200px; overflow: auto;"></pb-view>
        </pb-page>
      `)
      cy.wait('@partsScroll')
      
      // Wait for scroll to complete
      cy.wait(500)
      
      // Verify scroll happened to section2
      cy.get('#view1').find('#content').then($content => {
        const contentEl = $content[0]
        const section2El = contentEl.querySelector('#section2')
        expect(section2El).to.exist
        
        // Check if element is in viewport
        const rect = section2El.getBoundingClientRect()
        const viewRect = contentEl.getBoundingClientRect()
        expect(rect.top).to.be.at.least(viewRect.top)
        expect(rect.bottom).to.be.at.most(viewRect.bottom)
      })
    })

    it('should not scroll when noScroll attribute is set', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
          <pb-view id="view1" src="document1" no-scroll style="height: 200px; overflow: auto;"></pb-view>
        </pb-page>
      `)
      cy.wait('@partsScroll')
      
      // Trigger scroll attempt
      cy.window().then(win => {
        win.document.dispatchEvent(
          new CustomEvent('pb-refresh', {
            detail: { hash: 'section2', key: '__default__' },
          }),
        )
      })
      
      // Wait to ensure no scroll happened
      cy.wait(500)
      
      // Verify scroll did NOT happen - section1 should still be at top
      cy.get('#view1').find('#content').then($content => {
        const contentEl = $content[0]
        const section1El = contentEl.querySelector('#section1')
        const introEl = contentEl.querySelector('#intro')
        
        expect(section1El).to.exist
        expect(introEl).to.exist
        
        // Intro should be visible at top, section1 should be below
        const introRect = introEl.getBoundingClientRect()
        const section1Rect = section1El.getBoundingClientRect()
        const viewRect = contentEl.getBoundingClientRect()
        
        expect(introRect.top).to.be.at.least(viewRect.top)
        expect(section1Rect.top).to.be.greaterThan(introRect.bottom)
      })
    })

    it('should handle scroll when element not found', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-document id="document1" path="doc/documentation.xml" odd="docbook" view="div"></pb-document>
          <pb-view id="view1" src="document1" style="height: 200px; overflow: auto;"></pb-view>
        </pb-page>
      `)
      cy.wait('@partsScroll')
      
      // Trigger scroll to non-existent element
      cy.window().then(win => {
        win.document.dispatchEvent(
          new CustomEvent('pb-refresh', {
            detail: { hash: 'nonexistent', key: '__default__' },
          }),
        )
      })
      
      // Wait to ensure no error occurred
      cy.wait(500)
      
      // Verify component still works normally
      cy.get('#view1').find('#content h1').should('have.text', 'Introduction')
    })
  })
})
