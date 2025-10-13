let oddFixture

before(() => {
  cy.fixture('odd-editor/sample.json').then(data => {
    oddFixture = data
  })
})

describe('pb-odd-editor', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-odd-editor.html')
    cy.get('pb-odd-editor', { timeout: 10000 }).should('be.visible')
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
