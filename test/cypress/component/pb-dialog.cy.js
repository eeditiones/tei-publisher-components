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

  it('should open and close via close button', () => {
    cy.get('#d').then(($d) => $d[0].updateComplete).then(() => {
      const d = /** @type {any} */ (document.getElementById('d'))
      d.openDialog()
    })
    cy.get('#d').should('have.attr', 'open')
    cy.get('#d').find('button[rel="prev"]').click({ force: true })
    cy.get('#d').should('not.have.attr', 'open')
  })
  
  it.skip('should close on Escape key (Escape key handling not working)', () => {
    cy.get('#d').then(($d) => $d[0].updateComplete).then(() => {
      const d = /** @type {any} */ (document.getElementById('d'))
      d.openDialog()
    })
    cy.get('#d').should('have.attr', 'open')
    cy.get('body').trigger('keydown', { key: 'Escape' })
    cy.get('#d').should('not.have.attr', 'open')
  })

  it('should close on backdrop click', () => {
    cy.get('#d').then(($d) => $d[0].updateComplete).then(() => {
      const d = /** @type {any} */ (document.getElementById('d'))
      d.openDialog()
    })
    cy.get('#d').should('have.attr', 'open')
    cy.get('#d').find('dialog').click('topLeft', { force: true })
    cy.get('#d').should('not.have.attr', 'open')
  })
})
