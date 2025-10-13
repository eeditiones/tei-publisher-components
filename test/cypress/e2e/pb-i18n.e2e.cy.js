// Cypress E2E: pb-i18n
describe('pb-i18n e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-i18n.html')
  })

  it('should load and render default language strings', () => {
    cy.get('pb-lang')
      .contains('en')
      .click()
    cy.get('[data-value="zh_TW"]')
      .should('be.visible')
  })
})