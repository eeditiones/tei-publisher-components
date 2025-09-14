// E2E: verify pb-events provides both window.pbEvents and a classic global binding `pbEvents`

describe('pb-events global availability', () => {
  it('exposes window.pbEvents and classic global `pbEvents` after demos load', () => {
    // Load any demo that includes the bundle (pb-popover is simple and fast)
    cy.visit('/demo/pb-popover.html')

    cy.window().then((win) => {
      // window.pbEvents should exist
      expect(win.pbEvents, 'window.pbEvents exists').to.exist

      // `pbEvents` classic global variable should also resolve to the same object
      // Using Function instead of eval to avoid scoping issues
      const classic = win.Function('return pbEvents')()
      expect(classic, 'classic global pbEvents exists').to.equal(win.pbEvents)

      // Dynamically inject a classic script that references `pbEvents` and sets a flag
      const s = win.document.createElement('script')
      s.type = 'text/javascript'
      s.text = 'window.__pbEventsClassicOK__ = (typeof pbEvents !== "undefined")'
      win.document.body.appendChild(s)
      expect(win.__pbEventsClassicOK__, 'classic script sees pbEvents').to.equal(true)
    })
  })
})

