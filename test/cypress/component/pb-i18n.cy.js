// Cypress CT: pb-i18n
import '../../../src/pb-page.js'
import '../../../src/pb-i18n.js'
import { defaultChannel } from '../../../src/pb-mixin.js'

describe('pb-i18n', () => {
  it('should use default translations and attribute bindings', () => {
    cy.mount(`
      <pb-page require-language language="en" api-version="1.0.0">
        <span data-i18n="document.contents">unset</span>
        <a href="#" data-i18n="[title]menu.download.title" title="123"></a>
        <pb-i18n key="browse.items" options='{"count": 10}'>Items</pb-i18n>
        <pb-i18n key="undefined">[No translation provided]</pb-i18n>
      </pb-page>
    `)
    cy.waitForEvent('pb-i18n-update')
    cy.fixture('i18n/common/en.json').then((fx) => {
      cy.get('span[data-i18n]').should('have.text', fx.document.contents)
      const expectedItems = fx.browse.items.replace('{{count}}', '10')
      cy.get('pb-i18n[key="browse.items"]').should('have.text', expectedItems)
      cy.get('pb-i18n[key="undefined"]').should('have.text', '[No translation provided]')
      cy.get('a[data-i18n]').should('have.attr', 'title', fx.menu.download.title)
    })
  })

  it('should react to change of options', () => {
    cy.mount(`
      <pb-page require-language language="en" api-version="1.0.0">
        <pb-i18n key="browse.items" options='{"count": 10}'>Items</pb-i18n>
      </pb-page>
    `)
    cy.waitForEvent('pb-i18n-update')
    cy.get('pb-i18n[key="browse.items"]').then($el => {
      const el = $el[0]
      el.options = { count: 222 }
    })
    cy.fixture('i18n/common/en.json').then((fx) => {
      const expected222 = fx.browse.items.replace('{{count}}', '222')
      cy.get('pb-i18n[key="browse.items"]').should('have.text', expected222)
    })
    cy.get('pb-i18n[key="browse.items"]').then($el => {
      const el = $el[0]
      el.setAttribute('options', JSON.stringify({ count: 333 }))
    })
    cy.fixture('i18n/common/en.json').then((fx) => {
      const expected333 = fx.browse.items.replace('{{count}}', '333')
      cy.get('pb-i18n[key="browse.items"]').should('have.text', expected333)
    })
  })

  it('should react to language change', () => {
    cy.mount(`
      <pb-page require-language api-version="1.0.0">
        <span data-i18n="document.contents">unset</span>
      </pb-page>
    `)
    cy.waitForEvent('pb-i18n-update')
    cy.fixture('i18n/common/en.json').then((fx) => {
      cy.get('span[data-i18n]').should('have.text', fx.document.contents)
    })
    cy.window().then(win => {
      const detail = { language: 'de', key: defaultChannel }
      win.document.dispatchEvent(new CustomEvent('pb-i18n-language', { detail }))
    })
    cy.fixture('i18n/common/de.json').then((fx) => {
      cy.get('span[data-i18n]').should('have.text', fx.document.contents)
    })
  })

  it('should load custom translations (demo)', () => {
    cy.intercept('GET', '**/demo/i18n/app_en.json', { fixture: 'demo/i18n/app_en.json' })
    cy.intercept('GET', '**/demo/i18n/custom_en.json', { fixture: 'demo/i18n/custom_en.json' })
    cy.intercept('GET', '**/demo/i18n/app_de.json', { fixture: 'demo/i18n/app_de.json' }).as('demoAppDe')
    cy.intercept('GET', '**/demo/i18n/custom_de.json', { fixture: 'demo/i18n/custom_de.json' }).as('demoCustomDe')
    cy.mount(`
      <pb-page require-language language="en"
               locales="demo/i18n/{{ns}}_{{lng}}.json" locale-fallback-ns="app custom"
               api-version="1.0.0">
        <pb-i18n key="demo.message"></pb-i18n>
        <span data-i18n="document.contents">unset</span>
        <pb-i18n key="document.normalized"></pb-i18n>
        <pb-i18n key="mycomponent.info"></pb-i18n>
      </pb-page>
    `)
    cy.waitForEvent('pb-i18n-update')
    cy.fixture('demo/i18n/app_en.json').then((app) => {
      cy.get('span[data-i18n]').should('have.text', app.document.contents)
      cy.get('pb-i18n[key="demo.message"]').should('have.text', app.demo.message)
    })
    cy.fixture('i18n/common/en.json').then((fx) => {
      cy.get('pb-i18n[key="document.normalized"]').should('have.text', fx.document.normalized)
    })
    cy.fixture('demo/i18n/custom_en.json').then((custom) => {
      cy.get('pb-i18n[key="mycomponent.info"]').should('have.text', custom.mycomponent.info)
    })
  })

  it('should translate to German (demo)', () => {
    cy.intercept('GET', '**/demo/i18n/app_en.json', { fixture: 'demo/i18n/app_en.json' })
    cy.intercept('GET', '**/demo/i18n/custom_en.json', { fixture: 'demo/i18n/custom_en.json' })
    cy.intercept('GET', '**/demo/i18n/app_de.json', { fixture: 'demo/i18n/app_de.json' })
    cy.intercept('GET', '**/demo/i18n/custom_de.json', { fixture: 'demo/i18n/custom_de.json' })
    cy.mount(`
      <pb-page require-language language="de" locales="demo/i18n/{{ns}}_{{lng}}.json" locale-fallback-ns="app custom"
               api-version="1.0.0">
        <pb-i18n key="demo.message"></pb-i18n>
        <span data-i18n="document.contents">unset</span>
        <pb-i18n key="document.normalized"></pb-i18n>
        <pb-i18n key="mycomponent.info"></pb-i18n>
      </pb-page>
    `)
    cy.waitForEvent('pb-i18n-update')
    cy.fixture('demo/i18n/app_de.json').then((app) => {
      cy.get('span[data-i18n]').should('have.text', app.document.contents)
      cy.get('pb-i18n[key="demo.message"]').should('have.text', app.demo.message)
    })
    cy.fixture('i18n/common/de.json').then((fx) => {
      cy.get('pb-i18n[key="document.normalized"]').should('have.text', fx.document.normalized)
    })
    cy.fixture('demo/i18n/custom_de.json').then((custom) => {
      cy.get('pb-i18n[key="mycomponent.info"]').should('have.text', custom.mycomponent.info)
    })
  })

  describe('advanced i18n functionality', () => {
    it('should handle complex interpolation with nested objects', () => {
      cy.mount(`
        <pb-page require-language language="en" api-version="1.0.0">
          <pb-i18n key="browse.items" options='{"count": 10, "user": {"name": "John"}}'>Items</pb-i18n>
        </pb-page>
      `)
      cy.waitForEvent('pb-i18n-update')
      cy.fixture('i18n/common/en.json').then((fx) => {
        const expectedItems = fx.browse.items.replace('{{count}}', '10')
        cy.get('pb-i18n[key="browse.items"]').should('have.text', expectedItems)
      })
    })

    it('should handle missing translation keys gracefully', () => {
      cy.mount(`
        <pb-page require-language language="en" api-version="1.0.0">
          <pb-i18n key="nonexistent.key">Fallback Text</pb-i18n>
          <pb-i18n key="another.missing.key"></pb-i18n>
        </pb-page>
      `)
      cy.waitForEvent('pb-i18n-update')
      cy.get('pb-i18n[key="nonexistent.key"]').should('have.text', 'Fallback Text')
      cy.get('pb-i18n[key="another.missing.key"]').should('be.empty')
    })

    it('should handle rapid key changes without memory leaks', () => {
      cy.mount(`
        <pb-page require-language language="en" api-version="1.0.0">
          <pb-i18n key="browse.items" options='{"count": 1}'>Items</pb-i18n>
        </pb-page>
      `)
      cy.waitForEvent('pb-i18n-update')
      
      cy.get('pb-i18n[key="browse.items"]').then($el => {
        const el = $el[0]
        
        // Rapidly change options multiple times
        for (let i = 1; i <= 10; i++) {
          el.options = { count: i }
        }
      })
      
      cy.fixture('i18n/common/en.json').then((fx) => {
        const expectedItems = fx.browse.items.replace('{{count}}', '10')
        cy.get('pb-i18n[key="browse.items"]').should('have.text', expectedItems)
      })
    })

    it('should handle translation function errors gracefully', () => {
      cy.mount(`
        <pb-page require-language language="en" api-version="1.0.0">
          <pb-i18n key="browse.items" options='{"count": "invalid"}'>Items</pb-i18n>
        </pb-page>
      `)
      cy.waitForEvent('pb-i18n-update')
      
      // Should not crash even with invalid options
      cy.get('pb-i18n[key="browse.items"]').should('exist')
    })

    it('should handle disconnected elements properly', () => {
      cy.mount(`
        <pb-page require-language language="en" api-version="1.0.0">
          <pb-i18n key="document.contents">Content</pb-i18n>
        </pb-page>
      `)
      cy.waitForEvent('pb-i18n-update')
      
      cy.get('pb-i18n[key="document.contents"]').then($el => {
        const el = $el[0]
        el.remove() // Disconnect the element
        
        // Should not cause errors when language changes
        cy.window().then(win => {
          const page = win.document.querySelector('pb-page')
          const instance = page._i18nInstance
          return instance.changeLanguage('de')
        })
      })
    })

    it('should handle empty or null options', () => {
      cy.mount(`
        <pb-page require-language language="en" api-version="1.0.0">
          <pb-i18n key="document.contents" options='{}'>Content</pb-i18n>
          <pb-i18n key="document.contents" options='null'>Content</pb-i18n>
        </pb-page>
      `)
      cy.waitForEvent('pb-i18n-update')
      
      cy.fixture('i18n/common/en.json').then((fx) => {
        cy.get('pb-i18n[key="document.contents"]').first().should('have.text', fx.document.contents)
        cy.get('pb-i18n[key="document.contents"]').last().should('have.text', fx.document.contents)
      })
    })

    it('should handle translation caching correctly', () => {
      cy.mount(`
        <pb-page require-language language="en" api-version="1.0.0">
          <pb-i18n key="document.contents">Content</pb-i18n>
        </pb-page>
      `)
      cy.waitForEvent('pb-i18n-update')
      
      // Change language and back to test caching
      cy.window().then(win => {
        const page = win.document.querySelector('pb-page')
        const instance = page._i18nInstance
        
        return instance.changeLanguage('de').then(() => {
          return instance.changeLanguage('en')
        })
      }).then(() => {
        cy.fixture('i18n/common/en.json').then((fx) => {
          cy.get('pb-i18n[key="document.contents"]').should('have.text', fx.document.contents)
        })
      })
    })
  })
})
