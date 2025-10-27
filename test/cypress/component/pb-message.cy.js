// Cypress CT: pb-message
import '../../../src/pb-message.js'

describe('pb-message', () => {
  it('opens a message dialog and closes on click', () => {
    cy.mount(`<pb-message id="m"></pb-message>`)
    // Wait for firstUpdated to run so internal pb-dialog reference is set
    cy.get('#m').then(($m) => $m[0].updateComplete).then(() => {
      const el = /** @type {any} */ (document.getElementById('m'))
      el.show('Hello', 'World')
    })
    cy.get('#m').find('pb-dialog').should('have.attr', 'open')
    cy.get('#m').find('button.close').click({ force: true })
    cy.get('#m').find('pb-dialog').should('not.have.attr', 'open')
  })

  it('confirm() resolves on Yes click', () => {
    cy.mount(`<pb-message id="m"></pb-message>`)
    cy.get('#m').then(($m) => $m[0].updateComplete).then(() => {
      const el = /** @type {any} */ (document.getElementById('m'))
      const p = el.confirm('Confirm', 'Proceed?')
      window.__confirm = 'pending'
      p.then(() => { window.__confirm = 'resolved' }, () => { window.__confirm = 'rejected' })
    })
    cy.get('#m').find('button.confirm').click({ force: true })
    cy.window().its('__confirm').should('eq', 'resolved')
  })

  it('confirm() rejects on No click', () => {
    cy.mount(`<pb-message id="m"></pb-message>`)
    cy.get('#m').then(($m) => $m[0].updateComplete).then(() => {
      const el = /** @type {any} */ (document.getElementById('m'))
      const p = el.confirm('Confirm', 'Proceed?')
      window.__confirm = 'pending'
      p.then(() => { window.__confirm = 'resolved' }, () => { window.__confirm = 'rejected' })
    })
    cy.get('#m').find('button.reject').click({ force: true })
    cy.window().its('__confirm').should('eq', 'rejected')
  })
})
