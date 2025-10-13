// Cypress E2E: pb-link-view
describe('pb-link-view e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-link.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should update pb-view content when clicking pb-link', () => {
    cy.get('pb-document#document1')
      .should('have.attr', 'path', 'test/graves6.xml')
    
    cy.get('pb-view').find('[part=content]').should('not.be.empty')
    
    cy.contains('pb-link', /Kant chapter/i).find('button').click({ force: true })
    
    cy.get('pb-document#document1', { timeout: 10000 })
      .should('have.attr', 'path', 'test/kant_rvernunft_1781.TEI-P5.xml')
    
    cy.get('pb-view').find('[part=content]').should('not.be.empty')
  })
})
