// E2E: pb-document demo
describe('Demo: pb-document', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-document.html')
  })

  it('renders the demo with two pb-document elements', () => {
    cy.get('pb-document').should('have.length', 2)
    cy.get('#document1').should('have.attr', 'path').and('include', 'kant_rvernunft')
    cy.get('#document2').should('have.attr', 'path').and('include', 'documentation.xml')
  })

  it('is referenced by pb-view elements', () => {
    cy.get('pb-view#view1').should('have.attr', 'src', 'document1')
    cy.get('pb-view#view2').should('have.attr', 'src', 'document2')
  })

})