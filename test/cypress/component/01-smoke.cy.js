// test/cypress/component/01-smoke.cy.js
// Component Smoke: import, define, and mount every src/pb-*.js

const comps = Cypress.env('components') || []
const modules = import.meta.glob('../../../src/pb-*.js')

const MIGRATED_COMPONENTS = [
  {
    tag: 'pb-upload',
    polymerSelectors: ['paper-button', 'paper-icon-button']
  },
  {
    tag: 'pb-clipboard',
    polymerSelectors: ['paper-icon-button']
  },
  {
    tag: 'dts-client',
    polymerSelectors: ['paper-button']
  },
  {
    tag: 'pb-repeat',
    polymerSelectors: ['paper-icon-button']
  },
  {
    tag: 'pb-blacklab-results',
    // pb-blacklab-results depends on pb-paginate, which now uses pb-icon in place of iron-icon
    polymerSelectors: ['paper-icon-button', 'iron-icon']
  },
  {
    tag: 'pb-mei',
    polymerSelectors: ['paper-icon-button', 'paper-checkbox', 'iron-icon'],
    skipA11y: true
  },
  {
    tag: 'pb-select-template',
    polymerSelectors: ['paper-dropdown-menu', 'paper-listbox', 'paper-item']
  },
  {
    tag: 'pb-select',
    polymerSelectors: ['paper-dropdown-menu', 'paper-listbox', 'paper-item']
  }
]

function importAndMount (tag, file) {
  // Closure shim for legacy Polymer builds (safe no-op in modern code)
  cy.window().then(win => {
    if (!win.JSCompiler_renameProperty) {
      win.JSCompiler_renameProperty = function (prop, obj) { return prop }
    }
  })

  // Import the module first
  cy.then(() => {
    const key = `../../../src/${file}`
    const loader = modules[key]
    expect(loader, `loader for ${key}`).to.be.a('function')
    return loader()
  })

  // Wait for customElements.define(tag)
  cy.window().then(win => win.customElements.whenDefined(tag))

  // Now mount the element inside CT
  cy.mount(`<${tag}></${tag}>`)
}

describe('Component smoke: all pb-* custom elements mount without errors', () => {
  
  it('found at least one pb-* component', () => {
    expect(comps.length, 'number of pb-* components').to.be.greaterThan(0)
  })

  const skipTags = []

  for (const { file, tag } of comps) {
    if (skipTags.includes(tag)) {
      it.skip(`imports and mounts <${tag}> from ${file}`, () => {})
      continue
    }

    it(`imports and mounts <${tag}> from ${file}`, () => {
      importAndMount(tag, file)
      cy.get(tag).should('exist')
    })

    it(`a11y sanity for <${tag}>: typed buttons and focusable controls`, () => {
      importAndMount(tag, file)
      prepareHostForA11y(tag)
      
      // Check if the component has any interactive elements (without failing if none found)
      cy.get(tag).then($host => {
        const interactiveElements = $host.find('button, input, select, textarea')
        
        if (interactiveElements.length === 0) {
          // Skip a11y checks if no interactive elements are present
          cy.log(`<${tag}> has no interactive elements, skipping a11y checks`)
          return
        }
        
        // Run a11y checks only if interactive elements are present
        interactiveElements.each((index, el) => {
          if (el.tagName === 'BUTTON') {
            expect(el.getAttribute('type'), `button in <${tag}> should have type attribute`).to.exist
          }
          expect(el.getAttribute('tabindex'), `interactive element in <${tag}> should not have tabindex="-1"`).to.not.equal('-1')
        })
      })
    })

    it(`no Polymer elements rendered in <${tag}>`, () => {
      importAndMount(tag, file)
      const polymerSelectors = [
        'paper-button',
        'paper-input',
        'paper-item',
        'paper-listbox',
        'paper-dropdown-menu',
        'paper-dialog',
        'paper-dialog-scrollable',
        'iron-icon',
        'iron-ajax'
      ].join(', ')
      cy.get(`${tag} ${polymerSelectors}`).should('not.exist')
    })
  }
})

function prepareHostForA11y (tag) {
  if (tag === 'pb-blacklab-results') {
    const mockData = {
      documents: [
        {
          id: 'doc1',
          hits: 2,
          matches: [
            {
              left: 'left context',
              right: 'right context',
              page: [1],
              position: 1,
              match: {
                words: ['hit'],
                display: 'hit'
              }
            }
          ]
        }
      ]
    }
    return cy.get('pb-blacklab-results').then($el => {
      const host = $el[0]
      host.pattern = 'foo'
      host.target = '.'
      host.data = mockData
      host.documents = mockData.documents
      return host.updateComplete
    })
  }

  if (tag === 'pb-select' || tag === 'pb-select-template') {
    return cy.get(tag).then($el => {
      const host = $el[0]
      if (!host.value && !host.hasAttribute('multi')) {
        host.value = 'value'
      }
      if (host.hasAttribute('multi') && !Array.isArray(host.values)) {
        host.values = ['value']
      }
      return host.updateComplete
    })
  }

  // Add content to components that need it to render interactive elements
  if (tag === 'pb-ajax') {
    return cy.get('pb-ajax').then($el => {
      $el[0].innerHTML = '<span>Test Action</span>'
      return $el[0].updateComplete
    })
  }

  if (tag === 'pb-link') {
    return cy.get('pb-link').then($el => {
      $el[0].setAttribute('xml-id', 'test')
      return $el[0].updateComplete
    })
  }

  if (tag === 'pb-navigation') {
    return cy.get('pb-navigation').then($el => {
      $el[0].innerHTML = '<span>Previous</span>'
      return $el[0].updateComplete
    })
  }

  if (tag === 'pb-grid-action') {
    return cy.get('pb-grid-action').then($el => {
      $el[0].setAttribute('grid', '#test-grid')
      $el[0].innerHTML = '<span>Add Panel</span>'
      return $el[0].updateComplete
    })
  }

  if (tag === 'pb-login') {
    return cy.get('pb-login').then($el => {
      $el[0].setAttribute('endpoint', '.')
      return $el[0].updateComplete
    })
  }

  if (tag === 'pb-autocomplete') {
    return cy.get('pb-autocomplete').then($el => {
      $el[0].setAttribute('endpoint', '.')
      $el[0].setAttribute('param', 'q')
      return $el[0].updateComplete
    })
  }

  if (tag === 'pb-browse-docs') {
    return cy.get('pb-browse-docs').then($el => {
      $el[0].setAttribute('endpoint', '.')
      return $el[0].updateComplete
    })
  }

  if (tag === 'pb-select-odd') {
    return cy.get('pb-select-odd').then($el => {
      $el[0].setAttribute('endpoint', '.')
      return $el[0].updateComplete
    })
  }

  return cy.wrap(null)
}

describe('Migrated components accessibility sanity', () => {
  for (const { tag, polymerSelectors, skipA11y } of MIGRATED_COMPONENTS) {
    const meta = comps.find(component => component.tag === tag)

    if (!meta) {
      it.skip(`skips ${tag} (component metadata missing)`, () => {})
      continue
    }

     if (skipA11y) {
       it.skip(`<${tag}> a11y checks skipped (requires external runtime)`, () => {})
       it.skip(`<${tag}> keeps interactive elements discoverable`, () => {})
       continue
     }

    it(`<${tag}> renders native controls without Polymer remnants`, () => {
      importAndMount(tag, meta.file)
      prepareHostForA11y(tag)

      cy.get(tag)
        .find('button, input, select, textarea, a[href]', { includeShadowDom: true })
        .each($el => {
          if ($el[0].tagName === 'BUTTON') {
            cy.wrap($el).should('have.attr', 'type')
          }
          cy.wrap($el).should('not.have.attr', 'tabindex', '-1')
        })

      if (polymerSelectors.length > 0) {
        cy.get(tag)
          .find(polymerSelectors.join(', '), { includeShadowDom: true })
          .should('not.exist')
      }
    })

    it(`<${tag}> keeps interactive elements discoverable`, () => {
      importAndMount(tag, meta.file)
      prepareHostForA11y(tag)

      cy.get(tag)
        .find('button, a[href], input, select, textarea', { includeShadowDom: true })
        .should('have.length.greaterThan', 0)
        .then($els => {
          const focusable = $els.get(0)
          if (focusable && typeof focusable.focus === 'function') {
            cy.wrap(focusable).focus().should('be.focused')
          }
        })
    })
  }
})
