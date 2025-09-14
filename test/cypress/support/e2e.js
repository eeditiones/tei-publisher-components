// E2E support for demo pages
// Optionally stub common i18n requests if a page triggers them
beforeEach(() => {
  cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' }).as('i18nEn')
  cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' }).as('i18nDe')
})

// Reduce noise from benign errors while demos initialize
Cypress.on('uncaught:exception', (err) => {
  if (/Cannot read (properties|property) of null.*language/i.test(err.message)) {
    return false
  }
})

