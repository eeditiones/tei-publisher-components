// Cypress CT: pb-i18n
import '../../../src/pb-page.js'
import '../../../src/pb-i18n.js'
import { defaultChannel } from '../../../src/pb-mixin.js'

describe('pb-i18n', () => {
  function stubDefaultLocales() {
    cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' })
    cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' })
  }

  it('reacts to language change', () => {
    stubDefaultLocales()
    cy.mount(`
      <pb-page require-language api-version="1.0.0">
        <span data-i18n="document.contents">unset</span>
      </pb-page>
    `)
    // Ensure initial i18n applied, then trigger language change to German
    cy.get('span[data-i18n]').should('have.text', 'Contents')
    cy.window().then(win => {
      const detail = { language: 'de', key: defaultChannel }
      win.document.dispatchEvent(new CustomEvent('pb-i18n-language', { detail }))
    })
    cy.get('span[data-i18n]').should('have.text', 'Inhalt')
  })

  it('loads custom translations (demo)', () => {
    stubDefaultLocales()
    // stub demo-specific locales
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
    cy.get('span[data-i18n]').should('have.text', 'Custom Table of Contents')
    cy.get('pb-i18n[key="demo.message"]').should('have.text', 'User defined message')
    cy.get('pb-i18n[key="document.normalized"]').should('have.text', 'Normalized View')
    cy.get('pb-i18n[key="mycomponent.info"]').should('have.text', 'An information coming from a custom component')
  })
})
