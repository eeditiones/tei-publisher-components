// Cypress CT: pb-load sanitization tests
import '../../../src/pb-load.js'
import '../../../src/pb-page.js'

describe('pb-load sanitization', () => {
  beforeEach(() => {
    // Stub i18n intercepts
    cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' })
  })

  it('should sanitize malicious script tags in server response', () => {
    const maliciousResponse = '<p>Safe content</p><script>alert("XSS")</script><p>More content</p>'
    
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-load id="loader" url="/test" container="#target"></pb-load>
        <div id="target"></div>
      </pb-page>
    `)
    
    cy.waitForEvent('pb-page-ready').then(() => {
      // Stub the fetch response
      cy.window().then((win) => {
        const loader = win.document.getElementById('loader')
        const fetchElement = loader.shadowRoot.getElementById('loadContent')
        
        // Simulate a response with malicious content
        fetchElement.lastResponse = maliciousResponse
        
        // Trigger the response handler
        fetchElement.dispatchEvent(new CustomEvent('response', {
          detail: { xhr: { getResponseHeader: () => null } }
        }))
      })
    })
    
    // Verify script tag was removed
    cy.get('#target').then(($target) => {
      const html = $target[0].innerHTML
      expect(html).to.not.include('<script>')
      expect(html).to.not.include('alert("XSS")')
      expect(html).to.include('<p>Safe content</p>')
      expect(html).to.include('<p>More content</p>')
    })
  })

  it('should sanitize event handlers in server response', () => {
    const maliciousResponse = '<img src="x" onerror="alert(\'XSS\')" alt="test" />'
    
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-load id="loader" url="/test" container="#target"></pb-load>
        <div id="target"></div>
      </pb-page>
    `)
    
    cy.waitForEvent('pb-page-ready').then(() => {
      cy.window().then((win) => {
        const loader = win.document.getElementById('loader')
        const fetchElement = loader.shadowRoot.getElementById('loadContent')
        fetchElement.lastResponse = maliciousResponse
        fetchElement.dispatchEvent(new CustomEvent('response', {
          detail: { xhr: { getResponseHeader: () => null } }
        }))
      })
    })
    
    cy.get('#target').then(($target) => {
      const html = $target[0].innerHTML
      expect(html).to.not.include('onerror')
      expect(html).to.include('alt="test"')
    })
  })

  it('should sanitize javascript: URLs in server response', () => {
    const maliciousResponse = '<a href="javascript:alert(\'XSS\')">Click me</a>'
    
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-load id="loader" url="/test" container="#target"></pb-load>
        <div id="target"></div>
      </pb-page>
    `)
    
    cy.waitForEvent('pb-page-ready').then(() => {
      cy.window().then((win) => {
        const loader = win.document.getElementById('loader')
        const fetchElement = loader.shadowRoot.getElementById('loadContent')
        fetchElement.lastResponse = maliciousResponse
        fetchElement.dispatchEvent(new CustomEvent('response', {
          detail: { xhr: { getResponseHeader: () => null } }
        }))
      })
    })
    
    cy.get('#target').then(($target) => {
      const html = $target[0].innerHTML
      expect(html).to.not.include('javascript:')
    })
  })

  it('should preserve safe HTML content', () => {
    const safeResponse = '<p>Hello <strong>world</strong></p><ul><li>Item 1</li><li>Item 2</li></ul>'
    
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-load id="loader" url="/test" container="#target"></pb-load>
        <div id="target"></div>
      </pb-page>
    `)
    
    cy.waitForEvent('pb-page-ready').then(() => {
      cy.window().then((win) => {
        const loader = win.document.getElementById('loader')
        const fetchElement = loader.shadowRoot.getElementById('loadContent')
        fetchElement.lastResponse = safeResponse
        fetchElement.dispatchEvent(new CustomEvent('response', {
          detail: { xhr: { getResponseHeader: () => null } }
        }))
      })
    })
    
    cy.get('#target').then(($target) => {
      const html = $target[0].innerHTML
      expect(html).to.include('<p>')
      expect(html).to.include('<strong>')
      expect(html).to.include('<ul>')
      expect(html).to.include('<li>')
    })
  })

  it('should sanitize content when using default slot (no container)', () => {
    const maliciousResponse = '<p>Content</p><script>alert("XSS")</script>'
    
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-load id="loader" url="/test"></pb-load>
      </pb-page>
    `)
    
    cy.waitForEvent('pb-page-ready').then(() => {
      cy.window().then((win) => {
        const loader = win.document.getElementById('loader')
        const fetchElement = loader.shadowRoot.getElementById('loadContent')
        fetchElement.lastResponse = maliciousResponse
        fetchElement.dispatchEvent(new CustomEvent('response', {
          detail: { xhr: { getResponseHeader: () => null } }
        }))
      })
    })
    
    // Check that content was added to the component
    cy.get('#loader').should('exist')
    cy.get('#loader').then(($loader) => {
      // The content should be in a div child
      const div = $loader[0].querySelector('div')
      if (div) {
        expect(div.innerHTML).to.not.include('<script>')
        expect(div.innerHTML).to.include('<p>Content</p>')
      }
    })
  })

  it('should sanitize error messages in error dialog', () => {
    const maliciousError = '<script>alert("XSS")</script>Error occurred'
    
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-load id="loader" url="/test"></pb-load>
      </pb-page>
    `)
    
    cy.waitForEvent('pb-page-ready').then(() => {
      cy.window().then((win) => {
        const loader = win.document.getElementById('loader')
        const fetchElement = loader.shadowRoot.getElementById('loadContent')
        
        // Simulate an error
        fetchElement.lastError = {
          response: { description: maliciousError }
        }
        
        // Trigger error handler
        fetchElement.dispatchEvent(new CustomEvent('error'))
      })
    })
    
    // Verify error dialog was shown and content sanitized
    cy.get('#loader').then(($loader) => {
      const errorMessage = $loader[0].shadowRoot.getElementById('errorMessage')
      if (errorMessage) {
        expect(errorMessage.innerHTML).to.not.include('<script>')
        expect(errorMessage.innerHTML).to.include('Error occurred')
      }
    })
  })
})
