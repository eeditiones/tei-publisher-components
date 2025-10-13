// Cypress E2E: pb-tabs
describe('pb-tabs e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-tabs.html')
  })

  it('switches pages when clicking tabs', () => {
    // Log pb-tab events and a short snippet of the element for easier debugging
    cy.window().then((win) => {
      win.document.addEventListener('pb-tab', (ev) => {
        Cypress.log({ name: 'pb-tab', message: `selected=${ev.detail.selected}` })
      })
    })
    cy.get('pb-tabs').then(($el) => {
      const snippet = ($el[0].outerHTML || '').slice(0, 200)
      Cypress.log({ name: 'pb-tabs', message: snippet })
    })

    cy.get('pb-tabs').then(($el) => $el[0].updateComplete)

    // Ensure tabs are rendered and Polymer elements are absent
    cy.get('pb-tabs').find('button').should('have.length.at.least', 2)
    cy.get('pb-tabs').find('paper-tab, paper-tabs, iron-pages').should('not.exist')
    cy.get('pb-tabs').find('[slot="page"]').eq(0).should('not.be.hidden')

    // Click Tab 1 and assert content visibility
    cy.get('pb-tabs').find('button').contains('Tab 1').click({ force: true })
    cy.get('pb-tabs').find('[slot="page"]').eq(0).should('not.be.hidden')

    // Click Tab 2 and assert selected index reflects change
    cy.get('pb-tabs').find('button').contains('Tab 2').click({ force: true })
    cy.get('pb-tabs').find('[slot="page"]').eq(1).should('not.be.hidden')
    cy.get('pb-tabs').find('[slot="page"]').eq(0).should('be.hidden')
  })
})
