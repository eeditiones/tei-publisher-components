// E2E support for demo pages
// Optionally stub common i18n requests if a page triggers them
beforeEach(() => {
  cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' }).as('i18nEn')
  cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' }).as('i18nDe')

  // Quiet noisy backend calls in demos
  // - Auth probe: some demos probe login; stub 200 to avoid 404 chatter
  cy.intercept({ method: 'GET', url: '**/exist/apps/tei-publisher/login*' }, {
    statusCode: 200,
    headers: { 'content-type': 'text/html' },
    body: '',
  })

  // - Parts API: some views request parts JSON for navigation; if backend isn't seeded, return empty
  cy.intercept({ method: 'GET', url: '**/api/parts/**/json*' }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: { parts: [] },
  })

  // - components.xql: not present on demos; stub to avoid 404 noise
  cy.intercept({ method: 'GET', url: '**/modules/lib/components.xql*' }, {
    statusCode: 200,
    headers: { 'content-type': 'text/html' },
    body: '',
  })

  // Suppress noisy XHR/fetch logs in the runner while letting requests pass through
  cy.intercept({ resourceType: /xhr|fetch/, middleware: true }, (req) => {
    req.continue()
  }, { log: false })
})

// Reduce noise from benign errors while demos initialize
Cypress.on('uncaught:exception', (err) => {
  if (/Cannot read (properties|property) of null.*language/i.test(err.message)) {
    return false
  }
})
