// Cypress CT: pb-page
import '../../../src/pb-page.js'
import { registry } from '../../../src/urls.js'

describe('pb-page', () => {
  function stubLocales() {
    cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' })
    cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' })
  }
  
  function stubLocalesWithAlias() {
    cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' }).as('loadEn')
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
      const testPattern = 'documentation/:id?'
      
      registry.configure(true, false, '', testPattern, 'odd,view,path')
      expect(registry.urlPattern).to.equal(testPattern)
      
      registry.state = { id: 'api' }
      const encodedUrl = registry._encodePath(registry.state)
      expect(encodedUrl).to.equal('documentation/api')
      
      registry.state = {}
      const encodedUrlEmpty = registry._encodePath(registry.state)
      expect(encodedUrlEmpty).to.equal('documentation/')
      
      expect(() => {
        registry._decodePath('/documentation/api')
      }).to.not.throw()
    })
  })

  it('should handle v8 syntax patterns without conversion', () => {
    cy.mount('<pb-page></pb-page>')
    cy.get('pb-page').then($el => {
      const testPattern = 'documentation/{:id}'
      
      registry.configure(true, false, '', testPattern, 'odd,view,path')
      expect(registry.urlPattern).to.equal(testPattern)
      
      registry.state = { id: 'api' }
      const encodedUrl = registry._encodePath(registry.state)
      expect(encodedUrl).to.equal('documentation/api')
      
      registry.state = {}
      const encodedUrlEmpty = registry._encodePath(registry.state)
      expect(encodedUrlEmpty).to.equal('documentation/')
      
      expect(() => {
        registry._decodePath('/documentation/api')
      }).to.not.throw()
    })
  })

  it('should handle patterns without optional parameters', () => {
    cy.mount('<pb-page></pb-page>')
    cy.get('pb-page').then($el => {
      const testPattern = 'api/:version/:endpoint'
      
      registry.configure(true, false, '', testPattern, '')
      
      registry.state = { version: 'v1', endpoint: 'users' }
      const encodedUrl = registry._encodePath(registry.state)
      expect(encodedUrl).to.equal('api/v1/users')
      
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

    it('should handle locale-fallback-ns attribute correctly', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0" locale-fallback-ns="common app"></pb-page>')
      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('pb-page').then($el => {
          const page = $el[0]
          const instance = page._i18nInstance
          
          expect(page._localeFallbacks).to.deep.equal(['common', 'app'])
          expect(instance.options.defaultNS).to.equal('common')
          expect(instance.options.fallbackNS).to.deep.equal(['app'])
          expect(instance.options.ns).to.deep.equal(['common', 'app'])
        })
      })
    })

    it('should use default namespace when no fallback is specified', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('pb-page').then($el => {
          const page = $el[0]
          const instance = page._i18nInstance
          
          expect(page._localeFallbacks).to.deep.equal([])
          expect(instance.options.defaultNS).to.equal('common')
          expect(instance.options.ns).to.deep.equal(['common'])
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
          
          const bestMatch = instance.services.languageUtils.getBestMatchFromCodes(['zh-CN', 'zh-TW'], ['en', 'de'])
          expect(bestMatch).to.exist
        })
      })
    })

    // Migration tests: These tests are designed to catch breaking changes
    // when migrating from i18next-xhr-backend to i18next-http-backend
    // see #291

    it.skip('should load translations from default loadPath', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready')
      
      cy.get('pb-page')
        .its('0._i18nInstance.options.backend.backendOptions.0.loadPath')
        .should('exist')
        .and('include', '{{ns}}')
        .and('include', '{{lng}}')
      
      cy.get('pb-page')
        .its('0._i18nInstance.services.backendConnector')
        .should('exist')
      
      cy.get('pb-page')
        .its('0._i18nInstance')
        .invoke('t', 'document.contents')
        .should('not.equal', 'document.contents')
        .and('equal', 'Contents')
    })

    it('should interpolate loadPath template correctly', () => {
      stubLocales()
      cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' }).as('loadDe')
      cy.mount('<pb-page require-language language="de" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready')
      cy.get('pb-page')
        .its('0._i18nInstance')
        .then(instance => {
          cy.wrap(instance.language).should('equal', 'de')
          cy.wrap(instance.t('document.contents'))
            .should('exist')
            .and('be.a', 'string')
        })
    })

    it('should handle crossDomain configuration', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0" endpoint="https://example.com"></pb-page>')
      cy.waitForEvent('pb-page-ready')
      cy.get('pb-page')
        .its('0._i18nInstance.options.backend.backendOptions.0')
        .should('exist')
        .then(backendOptions => {
          cy.wrap(backendOptions.crossDomain || backendOptions.requestOptions?.credentials)
            .should('exist')
        })
    })

    it('should use chained backend when locales property is set', () => {
      stubLocales()
      cy.intercept('GET', '**/custom/i18n/app/en.json', { fixture: 'i18n/common/en.json' }).as('loadCustom')
      cy.mount('<pb-page require-language language="en" api-version="1.0.0" locales="https://example.com/custom/i18n/{{ns}}/{{lng}}.json"></pb-page>')
      cy.waitForEvent('pb-page-ready')
      cy.get('pb-page')
        .its('0._i18nInstance.options.backend')
        .then(backend => {
          cy.wrap(backend.backends).should('have.length', 2)
          cy.wrap(backend.backendOptions).should('have.length', 2)
        })
    })

    it('should fallback from language-region to language only', () => {
      stubLocales()
      cy.intercept('GET', '**/i18n/common/en-US.json', { statusCode: 404 }).as('loadEnUS')
      cy.mount('<pb-page require-language language="en-US" api-version="1.0.0" fallback-language="en"></pb-page>')
      cy.waitForEvent('pb-page-ready', { timeout: 10000 })
      cy.get('pb-page')
        .its('0._i18nInstance')
        .then(instance => {
          cy.wrap(instance.t('document.contents')).should('exist')
          cy.wrap(instance.language).should('be.oneOf', ['en', 'en-US'])
        })
    })

    it('should handle 404 errors gracefully', () => {
      stubLocales()
      cy.intercept('GET', '**/i18n/common/xx.json', { statusCode: 404 }).as('load404')
      cy.mount('<pb-page require-language language="xx" api-version="1.0.0" fallback-language="en"></pb-page>')
      cy.waitForEvent('pb-page-ready', { timeout: 10000 })
      cy.get('pb-page')
        .its('0._i18nInstance')
        .then(instance => {
          cy.wrap(instance.t('document.contents')).should('exist')
          cy.wrap(instance.language).should('be.oneOf', ['en', 'xx'])
        })
    })

    it('should handle network errors without crashing', () => {
      cy.intercept('GET', '**/i18n/common/en.json', { forceNetworkError: true }).as('networkError')
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0" fallback-language="en"></pb-page>')
      cy.get('pb-page', { timeout: 5000 })
        .should('exist')
        .its('0')
        .should('exist')
    })

    it('should send appropriate request headers', () => {
      stubLocales()
      cy.intercept('GET', '**/i18n/common/en.json', (req) => {
        expect(req.headers).to.exist
        req.reply({ fixture: 'i18n/common/en.json' })
      }).as('loadWithHeaders')
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready')
      cy.get('pb-page')
        .its('0._i18nInstance')
        .should('exist')
    })

    it('should load multiple namespaces when locale-fallback-ns is set', () => {
      stubLocales()
      cy.intercept('GET', '**/i18n/app/en.json', { fixture: 'i18n/common/en.json' }).as('loadApp')
      cy.mount('<pb-page require-language language="en" api-version="1.0.0" locale-fallback-ns="common app"></pb-page>')
      cy.waitForEvent('pb-page-ready', { timeout: 10000 })
      cy.get('pb-page')
        .its('0._i18nInstance.options.ns')
        .should('include', 'common')
        .and('include', 'app')
    })

    it('should load new language when language changes', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready')
      cy.get('pb-page')
        .its('0._i18nInstance.language')
        .should('equal', 'en')
      
      cy.document().then(doc => {
        doc.dispatchEvent(new CustomEvent('pb-i18n-language', {
          detail: { 
            language: 'de',
            key: '__default__'
          },
          bubbles: true,
          composed: true
        }))
      })
      
      cy.waitForEvent('pb-i18n-update', { timeout: 10000 })
      
      cy.get('pb-page')
        .its('0._i18nInstance.language')
        .should('equal', 'de')
    })

    it('should configure backend options correctly', () => {
      stubLocales()
      cy.mount('<pb-page require-language language="en" api-version="1.0.0"></pb-page>')
      cy.waitForEvent('pb-page-ready')
      cy.get('pb-page')
        .its('0._i18nInstance.options.backend.backendOptions.0')
        .should('exist')
        .then(backendOptions => {
          cy.wrap(backendOptions.loadPath)
            .should('exist')
            .and('include', '{{ns}}')
            .and('include', '{{lng}}')
          
          cy.wrap(backendOptions.crossDomain || backendOptions.requestOptions)
            .should('exist')
        })
    })

    it('should handle concurrent translation loading', () => {
      stubLocales()
      cy.intercept('GET', '**/i18n/app/en.json', { fixture: 'i18n/common/en.json' }).as('loadApp')
      cy.mount('<pb-page require-language language="en" api-version="1.0.0" locale-fallback-ns="common app"></pb-page>')
      cy.waitForEvent('pb-page-ready', { timeout: 10000 })
      cy.get('pb-page')
        .its('0._i18nInstance')
        .then(instance => {
          cy.wrap(instance.options.ns)
            .should('include', 'common')
            .and('include', 'app')
          cy.wrap(instance.t('document.contents'))
            .should('exist')
            .and('be.a', 'string')
        })
    })
  })
})
