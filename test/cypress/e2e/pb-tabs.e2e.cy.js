// E2E: pb-tabs basic switching

describe('Demo: pb-tabs', () => {
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

    // Ensure tabs are rendered
    cy.get('pb-tabs').find('paper-tab').should('have.length.at.least', 2)

    // Click Tab 1; iron-pages (part=pages) selected property should be 0
    cy.get('pb-tabs').find('paper-tab').contains('Tab 1').click({ force: true })
    cy.get('pb-tabs').find('[part=pages]').then(($el) => {
      expect($el[0].selected, 'pages.selected after Tab 1').to.satisfy((v) => v === 0 || v === '0')
    })

    // Click Tab 2 and assert selected index reflects change
    cy.get('pb-tabs').find('paper-tab').contains('Tab 2').click({ force: true })
    cy.get('pb-tabs').find('[part=pages]').then(($el) => {
      expect($el[0].selected, 'pages.selected after Tab 2').to.satisfy((v) => v === 1 || v === '1')
    })
  })
})
