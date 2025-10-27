// Cypress E2E: pb-events
describe('pb-events e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-popover.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should expose window.pbEvents and classic global pbEvents after demos load', () => {
    cy.window().then((win) => {
      expect(win.pbEvents, 'window.pbEvents exists').to.exist

      const classic = win.Function('return pbEvents')()
      expect(classic, 'classic global pbEvents exists').to.equal(win.pbEvents)

      const s = win.document.createElement('script')
      s.type = 'text/javascript'
      s.text = 'window.__pbEventsClassicOK__ = (typeof pbEvents !== "undefined")'
      win.document.body.appendChild(s)
      expect(win.__pbEventsClassicOK__, 'classic script sees pbEvents').to.equal(true)
    })
  })
})

