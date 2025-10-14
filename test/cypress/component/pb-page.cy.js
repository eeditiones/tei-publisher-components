// Cypress CT: pb-page
import '../../../src/pb-page.js'
import { registry } from '../../../src/urls.js'

describe('pb-page', () => {
  function stubLocales() {
    cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' })
    cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' })
  }

  it('should report endpoint and language', () => {
    stubLocales()
    cy.mount('<pb-page endpoint="." require-language language="de" api-version="1.0.0"></pb-page>')
    cy.waitForEvent('pb-page-ready').then((ev) => {
      const detail = ev.detail
      expect(detail.apiVersion).to.exist
      expect(detail.language).to.equal('de')
      expect(detail.endpoint).to.equal('.')
    })
  })

  it('should allow only one pb-page', () => {
    stubLocales()
    cy.mount(`
      <div>
        <pb-page id="p1" endpoint="."></pb-page>
        <pb-page id="p2" endpoint="https://teipublisher.com/exist/apps/van-gogh"></pb-page>
      </div>
    `)
    cy.get('pb-page[disabled]').should('have.length', 1)
  })

  it('should handle optional parameter syntax (:id?) with path-to-regexp v8 compatibility', () => {
    cy.mount('<pb-page></pb-page>')
    cy.get('pb-page').then($el => {
      // Test the deprecated optional parameter syntax that TEI Publisher uses
      const testPattern = 'documentation/:id?'
      
      // Configure the registry with the optional parameter pattern
      registry.configure(true, false, '', testPattern, 'odd,view,path')
      
      // Test that the pattern is set correctly
      expect(registry.urlPattern).to.equal(testPattern)
      
      // Test URL encoding with optional parameter
      registry.state = { id: 'api' }
      const encodedUrl = registry._encodePath(registry.state)
      expect(encodedUrl).to.equal('documentation/api')
      
      // Test URL encoding without optional parameter (v8 adds trailing slash)
      registry.state = {}
      const encodedUrlEmpty = registry._encodePath(registry.state)
      expect(encodedUrlEmpty).to.equal('documentation/')
      
      // Test that the pattern can be parsed without errors
      expect(() => {
        registry._decodePath('/documentation/api')
      }).to.not.throw()
    })
  })

  it('should handle v8 syntax patterns without conversion', () => {
    cy.mount('<pb-page></pb-page>')
    cy.get('pb-page').then($el => {
      // Test v8 syntax that should not be converted
      const testPattern = 'documentation/{:id}'
      
      // Configure the registry with the v8 pattern
      registry.configure(true, false, '', testPattern, 'odd,view,path')
      
      // Test that the pattern is set correctly (should not be double-converted)
      expect(registry.urlPattern).to.equal(testPattern)
      
      // Test URL encoding with optional parameter
      registry.state = { id: 'api' }
      const encodedUrl = registry._encodePath(registry.state)
      expect(encodedUrl).to.equal('documentation/api')
      
      // Test URL encoding without optional parameter
      registry.state = {}
      const encodedUrlEmpty = registry._encodePath(registry.state)
      expect(encodedUrlEmpty).to.equal('documentation/')
      
      // Test that the pattern can be parsed without errors
      expect(() => {
        registry._decodePath('/documentation/api')
      }).to.not.throw()
    })
  })

  it('should handle patterns without optional parameters', () => {
    cy.mount('<pb-page></pb-page>')
    cy.get('pb-page').then($el => {
      // Test pattern without optional parameters (should work fine)
      const testPattern = 'api/:version/:endpoint'
      
      registry.configure(true, false, '', testPattern, '')
      
      // Test URL encoding
      registry.state = { version: 'v1', endpoint: 'users' }
      const encodedUrl = registry._encodePath(registry.state)
      expect(encodedUrl).to.equal('api/v1/users')
      
      // Test URL decoding (just verify it doesn't throw)
      expect(() => {
        registry._decodePath('/api/v1/users')
      }).to.not.throw()
    })
  })

  describe('i18next integration', () => {
    it('should create i18next instance', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('pb-page').then($el => {
          const page = $el[0]
          expect(page._i18nInstance).to.exist
          expect(page._i18nInstance.language).to.equal('en')
        })
      })
    })

    it('should initialize with LanguageDetector and Backend', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('pb-page').then($el => {
          const page = $el[0]
          const instance = page._i18nInstance
          
          // Check that backends are loaded
          expect(instance.services.backendConnector).to.exist
          expect(instance.services.languageDetector).to.exist
        })
      })
    })

    it('should handle getBestMatchFromCodes fallback behavior', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('pb-page').then($el => {
          const page = $el[0]
          const instance = page._i18nInstance
          
          // Test getBestMatchFromCodes with fallback (v25.0.0 enhancement)
          const bestMatch = instance.services.languageUtils.getBestMatchFromCodes(['zh-CN', 'zh-TW'], ['en', 'de'])
          expect(bestMatch).to.exist
        })
      })
    })
  })
})
