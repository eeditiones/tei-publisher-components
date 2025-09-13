// Cypress CT: pb-progress
import '../../../src/pb-progress.js'

describe('pb-progress', () => {
  const base = `<pb-progress id="p"></pb-progress>`

  beforeEach(() => {
    cy.mount(base)
  })

  it('is hidden and disabled by default', () => {
    cy.get('#p').should('have.css', 'visibility', 'hidden')
    cy.get('#p').find('progress').should('have.attr', 'disabled')
  })

  it('shows on pb-start-update and hides on pb-end-update', () => {
    cy.document().then((doc) => {
      doc.dispatchEvent(new CustomEvent('pb-start-update', { detail: { key: '__default__' }, bubbles: true, composed: true }))
    })
    cy.get('#p').should('have.css', 'visibility', 'visible')
    cy.get('#p').find('progress').should('not.have.attr', 'disabled')

    cy.document().then((doc) => {
      doc.dispatchEvent(new CustomEvent('pb-end-update', { detail: { key: '__default__' }, bubbles: true, composed: true }))
    })
    cy.get('#p').should('have.css', 'visibility', 'hidden')
    cy.get('#p').find('progress').should('have.attr', 'disabled')
  })
})

