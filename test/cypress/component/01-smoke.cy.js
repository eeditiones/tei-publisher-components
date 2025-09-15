// test/cypress/component/01-smoke.cy.js
// Component Smoke: import, define, and mount every src/pb-*.js

const comps = Cypress.env('components') || []
const modules = import.meta.glob('../../../src/pb-*.js')

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

      // Assert it exists
      cy.get(tag).should('exist')
    })
  }
})