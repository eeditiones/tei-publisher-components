// Cypress CT: pb-load
import '../../../src/pb-load.js'

describe('pb-load', () => {
  it('loads content via XHR and injects into self', () => {
    // Stub XHR for iron-ajax
    cy.intercept('GET', '**/demo/fragment.html', {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'pb-total': '0',
        'pb-start': '1',
      },
      body: '<div id="frag">Hello</div>',
    }).as('frag')

    cy.mount('<pb-load id="ld" url="/demo/fragment.html"></pb-load>')
    // Wait for initial render so iron-ajax exists in shadowRoot, then trigger load
    cy.get('#ld').then(($el) => $el[0].updateComplete).then(() => {
      cy.get('#ld').then(($el) => { $el[0].load() })
    })
    cy.wait('@frag')
    cy.get('#ld').find('#frag').should('have.text', 'Hello')
  })
})
