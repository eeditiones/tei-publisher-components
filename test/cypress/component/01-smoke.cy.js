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
    polymerSelectors: ['paper-icon-button', 'iron-icon']
  },
  {
    tag: 'pb-mei',
    polymerSelectors: ['paper-icon-button', 'paper-checkbox', 'iron-icon']
  },
  {
    tag: 'pb-select-template',
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

    it.skip(`a11y sanity for <${tag}>: typed buttons and focusable controls`, () => {
      importAndMount(tag, file)
      // Buttons should have type, all interactive controls focusable
      cy.get(`${tag} button, ${tag} input, ${tag} select, ${tag} textarea`)
        .each($el => {
          if ($el[0].tagName === 'BUTTON') {
            cy.wrap($el).should('have.attr', 'type')
          }
          cy.wrap($el).should('not.have.attr', 'tabindex', '-1')
        })
    })

    it.skip(`no Polymer elements rendered in <${tag}>`, () => {
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

describe('Migrated components accessibility sanity', () => {
  for (const { tag, polymerSelectors } of MIGRATED_COMPONENTS) {
    const meta = comps.find(component => component.tag === tag)

    if (!meta) {
      it.skip(`skips ${tag} (component metadata missing)`, () => {})
      continue
    }

    it(`<${tag}> renders native controls without Polymer remnants`, () => {
      importAndMount(tag, meta.file)

      cy.get(tag)
        .find('button, input, select, textarea')
        .each($el => {
          if ($el[0].tagName === 'BUTTON') {
            cy.wrap($el).should('have.attr', 'type')
          }
          cy.wrap($el).should('not.have.attr', 'tabindex', '-1')
        })

      if (polymerSelectors.length > 0) {
        cy.get(tag)
          .find(polymerSelectors.join(', '))
          .should('not.exist')
      }
    })

    it(`<${tag}> keeps interactive elements discoverable`, () => {
      importAndMount(tag, meta.file)

      cy.get(tag)
        .find('button, a[href], input, select, textarea')
        .should('have.length.at.least', 1)

      cy.get(tag)
        .find('button')
        .first()
        .focus()
        .should('be.focused')
    })
  }
})
