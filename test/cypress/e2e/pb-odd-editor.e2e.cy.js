let oddFixture

before(() => {
  cy.fixture('odd-editor/sample.json').then(data => {
    oddFixture = data
  })
})

// Cypress E2E: pb-odd-editor
describe('pb-odd-editor e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-odd-editor.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should render the pb-odd-editor UI', () => {
    cy.get('pb-odd-editor').should('be.visible')
    cy.get('pb-odd-editor')
      .find('pb-select-odd, textarea, select, button')
      .should('exist')
    cy.get('pb-odd-editor').find('pb-autocomplete').should('exist')
    cy.get('pb-odd-editor').find('paper-autocomplete').should('not.exist')
  })
})
