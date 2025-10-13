// E2E: pb-document component functionality

describe('pb-document', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-document.html')
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