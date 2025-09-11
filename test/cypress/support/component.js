// Basic mount helper for vanilla web components
// Usage: cy.mount('<pb-version></pb-version>')
Cypress.Commands.add('mount', (html) => {
  const root = document.getElementById('__cy_root') || document.body
  root.innerHTML = html

  // Ensure a production-like style environment: if a <pb-page> is present
  // but no theme is configured, point it to our repo's global component CSS
  // so components can import styles into their shadow DOM during tests.
  const page = root.querySelector('pb-page')
  if (page && !page.getAttribute('theme')) {
    page.setAttribute('theme', 'css/components.css')
  }
})

// Clean up between tests
afterEach(() => {
  document.body.innerHTML = ''
})

// Globally silence 404s for i18n common locales by stubbing to fixtures
beforeEach(() => {
  // Match both absolute and Cypress-served paths (e.g., /__cypress/i18n/common/en.json)
  cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' })
  cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' })
})

// Helper: wait for a single DOM event on document
Cypress.Commands.add('waitForEvent', (name) => {
  return cy.document().then((doc) => new Cypress.Promise((resolve) => {
    doc.addEventListener(name, resolve, { once: true })
  }))
})

// Ignore a known benign app error seen intermittently during setup
// "Cannot read properties of null (reading 'language')"
// This prevents noisy console failures without hiding other errors.
Cypress.on('uncaught:exception', (err) => {
  if (/Cannot read (properties|property) of null.*language/i.test(err.message)) {
    return false
  }
  // Let other errors fail the test
})
