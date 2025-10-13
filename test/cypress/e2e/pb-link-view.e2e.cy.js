// E2E: pb-link driving pb-view navigation/event emission

describe('Demo: pb-link + pb-view', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-link.html')
    // Wait for components to be visible and initialized
    cy.get('pb-view', { timeout: 10000 }).should('be.visible')
    cy.get('pb-link', { timeout: 10000 }).should('be.visible')
    
    // Wait for pb-page-ready to ensure all components are initialized
    cy.window().then(win => {
      return new Cypress.Promise(resolve => {
        win.addEventListener('pb-page-ready', resolve, { once: true })
      })
    })
    
    // Wait for initial content to load
    cy.get('pb-view').find('[part=content]', { timeout: 15000 }).should('not.be.empty')
  })

  it('clicking pb-link updates pb-view content', () => {
    // Verify initial state - document should be set to graves6.xml
    cy.get('pb-document#document1')
      .should('have.attr', 'path', 'test/graves6.xml')
    
    // Verify pb-view has content
    cy.get('pb-view').find('[part=content]').should('not.be.empty')
    
    // Click the Kant chapter link
    cy.contains('pb-link', /Kant chapter/i).find('button').click({ force: true })
    
    // Wait for the document path to change (this is the key behavior we're testing)
    cy.get('pb-document#document1', { timeout: 10000 })
      .should('have.attr', 'path', 'test/kant_rvernunft_1781.TEI-P5.xml')
    
    // Verify pb-view still has content after the change
    cy.get('pb-view').find('[part=content]').should('not.be.empty')
  })
})
