// E2E support for demo pages
// Optionally stub common i18n requests if a page triggers them
beforeEach(() => {
  cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' }).as('i18nEn')
  cy.intercept('GET', '**/i18n/common/de.json', { fixture: 'i18n/common/de.json' }).as('i18nDe')

  // Permanently mock server version negotiation: always force /login to 404,
  // then respond to /api/version with a stable payload.
  cy.intercept('GET', '**/login*', {
    statusCode: 404,
    headers: { 'content-type': 'text/plain' },
    body: 'Not Found'
  }).as('mockLogin')

  cy.intercept('GET', '**/api/version*', {
    statusCode: 200,
    body: {
      api: '1.0.0',
      app: { name: 'mock-app', version: '0.0.0' },
      engine: { name: 'mock-engine', version: '0.0.0' }
    },
    headers: { 'content-type': 'application/json' }
  }).as('mockVersion')

  // - Parts API: some views request parts JSON for navigation; if backend isn't seeded, return a mock
  cy.intercept({ method: 'GET', url: '**/api/parts/**/json*' }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: {
      content: '<div class="content"><p>Mock content (api/parts)</p></div>',
      root: 'mock-root',
      next: null,
      previous: null
    }
  })

  cy.intercept('GET', '**/transform/*.css', {
    statusCode: 200,
    headers: { 'content-type': 'text/css' },
    body: ''
  })

  cy.intercept('GET', /.*\/api\/(browse|collection|docs)[^?]*.*/, {
    statusCode: 200,
    headers: { 'content-type': 'text/html' },
    body: '<ul class="pb-mock-list"><li><a href="#">Mock item</a></li></ul>'
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
