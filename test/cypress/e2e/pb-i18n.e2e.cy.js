// E2E: pb-i18n component functionality

describe('pb-i18n', () => {
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