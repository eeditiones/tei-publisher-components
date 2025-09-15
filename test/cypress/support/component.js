Cypress.on('window:before:load', (win) => {
  if (!win.PB) win.PB = {}

  // Create a minimal no-op registry if none exists yet
  if (!win.pbRegistry) {
    const stub = {
      state: {},
      channelStates: {},
      pathParams: new Set(),
      hash: '',
      // no-op API expected by components during smoke tests
      replace: () => {},
      subscribe: () => {},
      getState: () => ({}),
      commit: () => {},
      configure: () => {},
      toJSON: () => '{}'
    }
    win.pbRegistry = stub
  }

  // Define PB.pbRegistry as a live alias of window.pbRegistry
  try {
    Object.defineProperty(win.PB, 'pbRegistry', {
      configurable: true,
      enumerable: true,
      get () { return win.pbRegistry },
      set (val) { win.pbRegistry = val }
    })
  } catch (_) {
    if (!win.PB.pbRegistry) win.PB.pbRegistry = win.pbRegistry
  }
})
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

  // Reset global pbRegistry state between tests to avoid cross-test leakage
  cy.window().then(win => {
    try {
      if (!win.PB) win.PB = {}
      // Recreate alias if another script overwrote PB
      if (!Object.getOwnPropertyDescriptor(win.PB, 'pbRegistry')?.get) {
        try {
          Object.defineProperty(win.PB, 'pbRegistry', {
            configurable: true,
            enumerable: true,
            get () { return win.pbRegistry },
            set (val) { win.pbRegistry = val }
          })
        } catch (_) {
          if (!win.PB.pbRegistry) win.PB.pbRegistry = win.pbRegistry
        }
      }

      if (win.pbRegistry) {
        win.pbRegistry.state = {}
        win.pbRegistry.channelStates = {}
        if (win.pbRegistry.pathParams && typeof win.pbRegistry.pathParams.clear === 'function') {
          win.pbRegistry.pathParams.clear()
        } else {
          win.pbRegistry.pathParams = new Set()
        }
        win.pbRegistry.hash = ''
      }

      // also normalize URL to avoid state encoded in search params
      const url = new URL(win.location.href)
      url.search = ''
      win.history.replaceState({}, '', url.toString())
    } catch (e) {
      // ignore
    }
  })
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

// Helper: robustly stub window.fetch for JSON endpoints (works pre- and post-mount)
// Usage:
//   cy.stubFetchJson(/demo\/grid\.json/, (url, win) => new win.Response(JSON.stringify({...}), {status:200, headers:{'Content-Type':'application/json'}}))
Cypress.Commands.add('stubFetchJson', (pattern, responder) => {
  // Pre-mount: catch earliest requests
  cy.on('window:before:load', (win) => {
    const orig = win.fetch && win.fetch.bind ? win.fetch.bind(win) : undefined
    if (!orig) return
    cy.stub(win, 'fetch').callsFake((input, init) => {
      const href = typeof input === 'string' ? input : (input && (input.url || String(input)))
      if (href && pattern.test(href)) {
        return Promise.resolve(responder(href, win))
      }
      return orig(input, init)
    }).as('fetch')
  })
  // Post-mount: ensure stub exists even if before:load did not fire
  cy.window().then((win) => {
    const alreadyStubbed = win.fetch && typeof win.fetch.getCalls === 'function'
    if (alreadyStubbed) return
    const orig = win.fetch && win.fetch.bind ? win.fetch.bind(win) : undefined
    if (!orig) return
    cy.stub(win, 'fetch').callsFake((input, init) => {
      const href = typeof input === 'string' ? input : (input && (input.url || String(input)))
      if (href && pattern.test(href)) {
        return Promise.resolve(responder(href, win))
      }
      return orig(input, init)
    }).as('fetch')
  })
})

// Helper: clear panels for a given grid (defaults to #grid)
// Usage: cy.resetPanels('#grid')
Cypress.Commands.add('resetPanels', (gridSelector = '#grid') => {
  cy.get(gridSelector).then($grid => {
    const grid = $grid[0]
    cy.window().then(win => {
      if (win.pbRegistry) {
        win.pbRegistry.replace(grid, { panels: '' }, true)
      }
    })
  })
})
