// E2E support for demo pages
// Optionally stub common i18n requests if a page triggers them
const fallbackOddResponse = require('../fixtures/odd-editor/sample.json')

beforeEach(() => {
  // Clear cookies and localStorage to ensure clean state between tests
  cy.clearCookies()
  cy.clearLocalStorage()
  
  // Skip mocking if running against real backend
  if (Cypress.env('realBackend')) {
    return
  }

  Cypress.env('stubOddResponse', fallbackOddResponse)

  cy.intercept({
    method: 'GET',
    pathname: /\/(?:exist\/apps\/tei-publisher\/)?i18n\/common\/en\.json$/
  }, { fixture: 'i18n/common/en.json' }).as('i18nEn')

  cy.intercept({
    method: 'GET',
    pathname: /\/(?:exist\/apps\/tei-publisher\/)?i18n\/common\/de\.json$/
  }, { fixture: 'i18n/common/de.json' }).as('i18nDe')

  // Permanently mock server version negotiation: always force /login to 404,
  // then respond to /api/version with a stable payload.
  const loginResponse = {
    loggedIn: false,
    user: null,
    groups: [],
    success: true,
  };
  cy.intercept('GET', '**/exist/apps/tei-publisher/login*', {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: loginResponse,
  }).as('mockLogin');
  cy.intercept('POST', '**/exist/apps/tei-publisher/login*', {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: loginResponse,
  });

  cy.intercept({
    method: 'GET',
    pathname: /\/exist\/apps\/tei-publisher\/api\/version\/?$/
  }, {
    statusCode: 200,
    body: {
      api: '1.0.0',
      app: { name: 'mock-app', version: '0.0.0' },
      engine: { name: 'mock-engine', version: '0.0.0' }
    },
    headers: { 'content-type': 'application/json' }
  }).as('mockVersion')

  // - Parts API: some views request parts JSON for navigation; if backend isn't seeded, return a mock
  cy.intercept({ method: 'GET', pathname: /\/exist\/apps\/tei-publisher\/api\/parts\/.*\/json$/ }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: {
      content: '<div class="content"><p>Mock content (api/parts)</p></div>',
      root: 'mock-root',
      next: null,
      previous: null
    }
  })

  cy.intercept({
    method: 'GET',
    pathname: /\/exist\/apps\/tei-publisher\/transform\/.*\.css$/
  }, {
    statusCode: 200,
    headers: { 'content-type': 'text/css' },
    body: ''
  })

  // Collection API - centralized defaults (can be overridden by specific tests)
  // Note: Tests can override these by defining more specific intercepts
  cy.intercept({
    method: 'GET',
    pathname: /\/exist\/apps\/tei-publisher\/api\/(browse|docs).*$/
  }, {
    statusCode: 200,
    headers: { 'content-type': 'text/html' },
    body: '<ul class="pb-mock-list"><li><a href="#">Mock item</a></li></ul>'
  })

  cy.intercept({
    method: 'GET',
    pathname: /\/exist\/apps\/tei-publisher\/collection\/?$/
  }, {
    statusCode: 200,
    headers: { 'content-type': 'text/html' },
    body: '<ul class="pb-mock-list"><li><a href="#">Collection Entry</a></li></ul>'
  }).as('stubCollectionPage')

  // Comprehensive Collection API coverage - centralized defaults
  // These cover all the patterns used by pb-browse-docs and similar components
  cy.intercept('GET', '**/api/collection**', {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: {
      items: [{ id: 'collection-entry', label: 'Collection Item' }],
      start: 1,
      total: 1
    }
  }).as('stubCollectionApi')

  cy.intercept('GET', '**/collection/**', {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: {
      items: [{ id: 'collection-entry', label: 'Collection Item' }],
      start: 1,
      total: 1
    }
  }).as('stubCollectionOldApi')

  cy.intercept('GET', '**/exist/apps/tei-publisher/api/collection**', {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: {
      items: [{ id: 'collection-entry', label: 'Collection Item' }],
      start: 1,
      total: 1
    }
  }).as('stubCollectionExistApi')

  cy.intercept('GET', '**/exist/apps/tei-publisher/collection/**', {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: {
      items: [{ id: 'collection-entry', label: 'Collection Item' }],
      start: 1,
      total: 1
    }
  }).as('stubCollectionExistOldApi')

  cy.intercept({
    method: 'GET',
    pathname: /\/exist\/apps\/tei-publisher\/api\/templates$/
  }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: [{ name: 'view.html', title: 'Default Template' }]
  }).as('stubTemplates')

  cy.intercept({ method: 'POST', pathname: /\/exist\/apps\/tei-publisher\/api\/login\/?$/ }, req => {
    Cypress.log({ name: 'login:stub', message: `${req.method} ${req.url}` })
    req.reply({
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: { success: true }
    })
  }).as('stubLogin')

  cy.intercept({ method: 'GET', pathname: /\/exist\/apps\/tei-publisher\/api\/odd\/.*\.odd$/ }, (req) => {
    const stub = Cypress.env('stubOddResponse') || fallbackOddResponse
    req.reply({ statusCode: 200, headers: { 'content-type': 'application/json' }, body: stub })
  }).as('stubOddApi')

  // ODD API - centralized defaults (can be overridden by specific tests)
  cy.intercept({ method: 'GET', pathname: /\/api\/odd$/ }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: [
      { name: 'default', label: 'Default' },
      { name: 'alt', label: 'Alternative' }
    ]
  }).as('stubOddList')

  cy.intercept({ method: 'GET', pathname: /\/modules\/lib\/components-list-templates\.xql$/ }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: [{ name: 'view.html', title: 'Default Template' }]
  })

  cy.intercept({ method: 'GET', pathname: /\/modules\/lib\/components-list-odds\.xql$/ }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: [
      { name: 'default', label: 'Default' },
      { name: 'alt', label: 'Alternative' }
    ]
  })

  cy.intercept({ method: 'GET', pathname: '/exist/apps/tei-publisher/modules/editor.xql' }, (req) => {
    const stub = Cypress.env('stubOddResponse') || fallbackOddResponse
    req.reply({ statusCode: 200, headers: { 'content-type': 'application/json' }, body: stub })
  }).as('stubOddLegacy')

  cy.intercept({ method: 'GET', pathname: '/exist/apps/tei-publisher/modules/lib/components.xql' }, {
    statusCode: 200,
    headers: { 'content-type': 'text/html' },
    body: '',
  })

  cy.intercept({ method: 'GET', pathname: /\/demo\/api\/collection$/ }, (req) => {
    req.reply({
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: {
        items: [{ id: 'demo-entry', label: 'Demo Collection Entry' }],
        start: 1,
        total: 1
      }
    })
  }).as('stubDemoCollection')

  cy.intercept({ method: 'GET', pathname: /\/api\/parts\/.*\/json$/ }, (req) => {
    req.reply({
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: {
        content: '<div class="demo-content"><p>Mock content served by Cypress.</p></div>',
        root: 'demo-root',
        next: null,
        previous: null
      }
    })
  }).as('stubParts')

  cy.intercept({ method: 'GET', pathname: /\/api\/collection$/ }, (req) => {
    req.reply({
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: {
        items: [{ id: 'collection-entry', label: 'Collection Item' }],
        start: 1,
        total: 1
      }
    })
  }).as('stubCollection')

  // Autocomplete API - centralized defaults (can be overridden by specific tests)
  cy.intercept({ method: 'GET', pathname: /\/api\/search\/autocomplete$/ }, (req) => {
    req.reply({
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: [
        { text: 'Kant', value: 'kant' },
        { text: 'Descartes', value: 'descartes' }
      ]
    })
  }).as('stubAutocomplete')

  cy.intercept({ method: 'GET', pathname: /\/demo\/api\/login\/?$/ }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: { success: true }
  }).as('stubDemoLogin')

  cy.intercept({ method: 'POST', pathname: /\/demo\/api\/login\/?$/ }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: { success: true }
  })

  cy.intercept({ method: 'GET', pathname: /\/demo\/api\/odd$/ }, {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: []
  }).as('stubDemoOdd')

  // Document Contents API - centralized defaults
  cy.intercept('GET', '**/api/document/**/contents**', {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: '<ul><li><a href="#section1">Section 1</a></li><li><a href="#section2">Section 2</a></li></ul>'
  }).as('stubDocumentContents')

})

// Reduce noise from benign errors while demos initialize
Cypress.on('uncaught:exception', (err) => {
  if (/Cannot read (properties|property) of null.*language/i.test(err.message)) {
    return false
  }
})

// Convenience: find inside a component's shadow DOM using simple chains
// Usage: cy.inShadow('pb-select[name="lang1"]', 'select option')
Cypress.Commands.add('inShadow', (hostSelector, innerSelector) => {
  return cy.get(hostSelector).shadow().find(innerSelector)
})

// Convenience: wait for a Lit element to finish an update
// Usage: cy.waitUpdate('pb-select[name="lang1"]')
Cypress.Commands.add('waitUpdate', (hostSelector) => {
  return cy.get(hostSelector).then($el => cy.wrap($el[0].updateComplete))
})

