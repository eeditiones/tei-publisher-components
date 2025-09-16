// E2E: pb-i18n scaffolded test
describe('Demo: pb-i18n', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-i18n.html')
  })

  it('loads and renders default language strings', () => {
    cy.get('pb-lang')
      .contains('en')
      .click()
    cy.get('[data-value="zh_TW"]')
      .should('be.visible')
    // TODO(DP): find a way to actually click on the visible li to switch
  })
})