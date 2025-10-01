// E2E coverage for demo/pb-select.html
describe('Demo: pb-select', () => {

  beforeEach(() => {
    cy.visit('/demo/pb-select.html')
    cy.get('#select-demo-form').should('exist')
  })

  // includeShadowDom: true only affects Cypress commands but not the find() hence the explicit calls here.
  it('renders the pb-select demo content', () => {
    cy.get('pb-demo-snippet').should('exist')
    cy.get('pb-select[name="lang1"]').shadow().find('select option').should('have.length.greaterThan', 10)
    cy.get('pb-select[name="lang2"]').shadow().find('input[type="checkbox"][value="fr"]').should('exist')
    cy.get('pb-select[name="lang3"]').shadow().find('select option').should('have.length.greaterThan', 10)
  })

  it.skip('submits selected values from native controls', () => {
    // TODO: The slotted options are not visible to Cypress as they don't render in the browser.
    // Investigate why the shadow <select> reports zero options before re-enabling this flow test.
  })

  it('updates submitted values when toggling checkboxes', () => {
    cy.get('pb-select[name="lang2"]').shadow().find('input[type="checkbox"][value="fr"]').uncheck()
      .should('not.be.checked')
    cy.get('pb-select[name="lang2"]').shadow().find('input[type="checkbox"][value="it"]').check()
      .should('be.checked')
    cy.get('pb-select[name="lang2"]').then($el => cy.wrap($el[0].updateComplete))

    cy.get('#select-demo-form').submit()
    cy.get('#select-demo-output')
      .should('contain', 'lang1=es')
      .and('contain', 'lang2=de')
      .and('contain', 'lang2=it')
      .and('not.contain', 'lang2=fr')
  })
})
