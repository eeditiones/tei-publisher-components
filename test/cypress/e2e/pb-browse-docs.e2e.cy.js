// Cypress E2E: pb-browse-docs
describe('pb-browse-docs e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-browse-docs.html')
    cy.get('pb-browse-docs', { timeout: 10000 }).should('be.visible')
    cy.get('pb-browse-docs').should('not.be.empty')
  })

  it('should render the document list and filters results', () => {
    cy.get('pb-browse-docs').should('exist').and('be.visible')
    cy.get('pb-browse-docs').should('not.be.empty')
    
    cy.get('pb-browse-docs').find('pb-paginate').should('exist')
    cy.get('pb-browse-docs').find('pb-paginate').should('have.attr', 'id', 'paginate')
    
    cy.get('pb-browse-docs').find('div[slot=""]').should('exist')
    cy.get('pb-browse-docs').find('div[slot=""]').should('contain.text', 'collection-entry')
    cy.get('pb-browse-docs').find('div[slot=""]').should('contain.text', 'Collection Item')
    
    cy.get('pb-browse-docs').find('div[slot=""]').then($div => {
      const content = $div.text()
      const data = JSON.parse(content)
      expect(data.items).to.have.length(1)
      expect(data.items[0].id).to.equal('collection-entry')
      expect(data.items[0].label).to.equal('Collection Item')
      expect(data.start).to.equal(1)
      expect(data.total).to.equal(1)
    })
    
    cy.get('pb-browse-docs').should('be.visible')
  })
})
