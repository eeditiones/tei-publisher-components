// Cypress E2E: pb-document
describe('pb-document e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-document.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should render the demo with two pb-document elements', () => {
    cy.get('pb-document').should('have.length', 2)
    cy.get('#document1').should('have.attr', 'path').and('include', 'kant_rvernunft')
    cy.get('#document2').should('have.attr', 'path').and('include', 'documentation.xml')
  })

  it('should be referenced by pb-view elements', () => {
    cy.get('pb-view#view1').should('have.attr', 'src', 'document1')
    cy.get('pb-view#view2').should('have.attr', 'src', 'document2')
  })
})