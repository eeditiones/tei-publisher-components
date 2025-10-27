// Cypress CT: pb-popover
import '../../../src/pb-popover.js'

describe('pb-popover', () => {
  it('should show alternate content on click when persistent', () => {
    cy.mount('<pb-popover id="pop" persistent><span slot="default" id="tr">Trigger</span><template slot="alternate"><div id="alt">Alt Content</div></template></pb-popover>')
    // Click the internal trigger span inside shadow DOM
    cy.get('#pop').find('#link').click({ force: true })
    // Tippy renders a popper in document; assert content shows up
    cy.get('body').find('.tippy-box').should('exist')
    cy.get('body').find('.tippy-box #alt').should('exist')
  })

  it('should load remote content when remote is set', () => {
    cy.mount('<pb-popover id="pop" persistent remote="/remote.html"><span slot="default" id="tr">Trigger</span><template slot="alternate"><div>Loading...</div></template></pb-popover>')
    // Stub fetch to return HTML
    cy.window().then((win) => {
      cy.stub(win, 'fetch').callsFake(() => Promise.resolve(new win.Response('<div id="remote">Remote Content</div>', { status: 200, headers: { 'Content-Type': 'text/html' } })))
    })
    cy.get('#pop').find('#link').click({ force: true })
    cy.get('body').find('.tippy-box #remote').should('exist')
  })

  it('should show popover on hover when trigger=mouseenter', () => {
    cy.mount('<pb-popover id="pop" trigger="mouseenter"><span slot="default" id="tr">Hover</span><template slot="alternate"><div id="alt2">Hover Content</div></template></pb-popover>')
    cy.get('#pop').find('#link').trigger('mouseenter', { force: true })
    cy.get('body').find('.tippy-box #alt2').should('exist')
  })
})
