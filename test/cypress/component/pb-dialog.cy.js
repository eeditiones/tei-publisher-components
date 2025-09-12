// Cypress CT: pb-dialog
import '../../../src/pb-dialog.js'

describe('pb-dialog', () => {
  const base = `
    <pb-dialog id="d">
      <span slot="title">Title</span>
      <p>Body</p>
    </pb-dialog>
  `

  beforeEach(() => {
    cy.mount(base)
  })

  it('opens and closes via close button', () => {
    cy.get('#d').then(($d) => $d[0].updateComplete).then(() => {
      const d = /** @type {any} */ (document.getElementById('d'))
      d.openDialog()
    })
    cy.get('#d').should('have.attr', 'open')
    // Click the built-in close button
    cy.get('#d').find('button[rel="prev"]').click({ force: true })
    cy.get('#d').should('not.have.attr', 'open')
  })
  
  // see #250
  it.skip('closes on Escape key (expected)', () => {
    cy.get('#d').then(($d) => $d[0].updateComplete).then(() => {
      const d = /** @type {any} */ (document.getElementById('d'))
      d.openDialog()
    })
    cy.get('#d').should('have.attr', 'open')
    // Simulate Escape key to close
    cy.get('body').type('{esc}')
    cy.get('#d').should('not.have.attr', 'open')
  })

  it.skip('closes on backdrop click (expected)', () => {
    cy.get('#d').then(($d) => $d[0].updateComplete).then(() => {
      const d = /** @type {any} */ (document.getElementById('d'))
      d.openDialog()
    })
    cy.get('#d').should('have.attr', 'open')
    // Click the dialog backdrop area (outside content)
    cy.get('#d').find('dialog').click('topLeft', { force: true })
    cy.get('#d').should('not.have.attr', 'open')
  })
})
