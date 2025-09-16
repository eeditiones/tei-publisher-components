describe('Demo: pb-odd-editor', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-odd-editor.html')
  })

  it('renders the pb-odd-editor UI', () => {
    cy.get('pb-odd-editor').should('be.visible')
    cy.get('pb-odd-editor')
      .find('pb-select-odd, paper-input, textarea, select, paper-button')
      .should('exist')
  })
})