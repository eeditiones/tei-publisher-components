// Cypress CT: pb-hotkeys (mixin)
import { registerHotkey } from '../../../src/pb-hotkeys.js'

describe('pb-hotkeys', () => {
  it('invokes registered handler on key combo', () => {
    cy.mount('<div id="root">x</div>')
    cy.window().then((win) => {
      const spy = cy.spy().as('handler')
      registerHotkey('ctrl+k', (ev) => { spy(); ev.preventDefault() }, win.document.body)
    })
    cy.get('body').type('{ctrl}k')
    cy.get('@handler').should('have.been.called')
  })
  
  it('does not fire when typing in input/textarea', () => {
    const html = '<div><input id="inp" /><textarea id="ta"></textarea></div>'
    cy.mount(html)
    cy.window().then((win) => {
      const spy = cy.spy().as('handler')
      registerHotkey('ctrl+k', (ev) => { spy(); ev.preventDefault() }, win.document.body)
    })
    cy.get('#inp').focus().type('{ctrl}k')
    cy.get('@handler').should('not.have.been.called')
    cy.get('#ta').focus().type('{ctrl}k')
    cy.get('@handler').should('not.have.been.called')
  })
})
