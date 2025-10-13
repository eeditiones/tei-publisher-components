// E2E: pb-link driving pb-view navigation/event emission

describe('Demo: pb-link + pb-view', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-link.html')
    // Wait for components to be visible and initialized
    cy.get('pb-view', { timeout: 10000 }).should('be.visible')
    cy.get('pb-link', { timeout: 10000 }).should('be.visible')
  })

  it('clicking pb-link updates pb-view content', () => {
    let before = ''
    // Snapshot initial content text
    cy.get('pb-view').find('[part=content]').invoke('text').then((t) => { before = t || '' })

    // Click the link and wait for content to change using a more robust approach
    cy.contains('pb-link', /Kant chapter/i).find('button').click({ force: true })
    
    // Wait for the pb-view content to actually change (more reliable than waiting for events)
    cy.get('pb-view').find('[part=content]').invoke('text').should((after) => {
      expect(after && after.trim(), 'content changed').to.not.eq((before || '').trim())
    })

    // And assert the underlying document path switched to the Kant chapter
    cy.get('pb-document#document1')
      .should('have.attr', 'path', 'test/kant_rvernunft_1781.TEI-P5.xml')
  })
})
