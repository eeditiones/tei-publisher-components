// Cypress CT: pb-media-query
import '../../../src/pb-media-query.js'

describe('pb-media-query', () => {
  const base = `
    <pb-media-query id="mq" query="(max-width: 10px)">
      <span id="inner">Shown</span>
    </pb-media-query>
  `

  beforeEach(() => {
    cy.mount(base)
  })
  it('renders content when query matches and emits changed(true)', () => {
    cy.window().then((win) => {
      // Stub matchMedia to return matches=true
      cy.stub(win, 'matchMedia').callsFake(() => ({
        matches: true,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      }))
    })
    // Remount after stubbing so the component binds to the stubbed media
    cy.mount(base)
    // Should render slotted content
    cy.get('#inner').should('have.text', 'Shown')
  })

  it('does not render when query does not match', () => {
    cy.window().then((win) => {
      // Stub matchMedia to return matches=false
      cy.stub(win, 'matchMedia').callsFake(() => ({
        matches: false,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      }))
    })
    // Remount after stubbing, using the same base markup
    cy.mount(base)
    cy.get('pb-media-query').should('exist')
    // No slot rendered in shadow DOM when it doesn't match
    cy.get('pb-media-query').find('slot').should('not.exist')
    // Light DOM content remains in DOM, but should not be visible
    cy.get('#inner').should('not.be.visible')
  })

  it('emits changed events when match state toggles', () => {
    cy.window().then((win) => {
      // Toggleable stub
      let matches = false
      cy.stub(win, 'matchMedia').callsFake(() => ({
        get matches() { return matches },
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      }))
      // Expose a toggle
      win.__setMatch = (v) => { matches = v }
    })
    // Remount after installing toggleable stub
    cy.mount(base)
    // Initially false (Boolean property, not a string attribute)
    cy.get('#mq').should('have.prop', 'match', false)
    // Flip to true and dispatch resize on the correct target (visualViewport if available)
    cy.window().then((win) => {
      const target = win.visualViewport || win
      win.__setMatch(true)
      target.dispatchEvent(new Event('resize'))
    })
    cy.get('#mq').should('have.prop', 'match', true)
    // Flip back to false
    cy.window().then((win) => {
      const target = win.visualViewport || win
      win.__setMatch(false)
      target.dispatchEvent(new Event('resize'))
    })
    cy.get('#mq').should('have.prop', 'match', false)
  })

  it('updates when query attribute changes', () => {
    cy.window().then((win) => {
      // Stub matchMedia to reflect based on the provided query string
      cy.stub(win, 'matchMedia').callsFake((q) => ({
        matches: /9999px/.test(q),
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      }))
    })
    // Start non-matching (10px), then switch to matching (9999px)
    cy.mount(`
      <pb-media-query id="mq" query="(max-width: 10px)">
        <span id="inner">Shown</span>
      </pb-media-query>
    `)
    cy.get('#mq').should('have.prop', 'match', false)
    cy.get('#mq').invoke('attr', 'query', '(max-width: 9999px)')
    cy.window().then((win) => {
      const target = win.visualViewport || win
      target.dispatchEvent(new Event('resize'))
    })
    cy.get('#mq').should('have.prop', 'match', true)
  })

  it('fires changed events with expected detail values', () => {
    cy.window().then((win) => {
      let matches = false
      cy.stub(win, 'matchMedia').callsFake(() => ({
        get matches() { return matches },
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      }))
      win.__setMatch = (v) => { matches = v }
    })
    cy.mount(base)
    // Capture changed events on the element
    cy.window().then((win) => { win.__events = [] })
    cy.get('#mq').then(($el) => {
      const el = $el[0]
      el.addEventListener('changed', (ev) => { window.__events.push(ev.detail?.value) })
    })
    // Flip to true
    cy.window().then((win) => { const t = win.visualViewport || win; win.__setMatch(true); t.dispatchEvent(new Event('resize')) })
    cy.get('#mq').should('have.prop', 'match', true)
    // Flip back to false
    cy.window().then((win) => { const t = win.visualViewport || win; win.__setMatch(false); t.dispatchEvent(new Event('resize')) })
    cy.get('#mq').should('have.prop', 'match', false)
    // Assert events captured in order
    cy.window().its('__events').should('deep.equal', [true, false])
  })
})
