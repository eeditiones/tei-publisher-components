// E2E: pb-link driving pb-view navigation/event emission

describe('Demo: pb-link + pb-view', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-link.html')
  })

  it('clicking pb-link updates pb-view content', () => {
    let before = ''
    // Snapshot initial content text
    cy.get('pb-view').find('[part=content]').invoke('text').then((t) => { before = t || '' })

    // Set up a one-time listener for pb-end-update, then click the link
    cy.document().then((doc) => new Cypress.Promise((resolve) => {
      doc.addEventListener('pb-end-update', () => resolve(), { once: true })
      cy.contains('pb-link', /Kant chapter/i).find('a').click({ force: true })
    }))

    // Assert that the content actually changed
    cy.get('pb-view').find('[part=content]').invoke('text').should((after) => {
      expect(after && after.trim(), 'content changed').to.not.eq((before || '').trim())
    })

    // And assert the underlying document path switched to the Kant chapter
    cy.get('pb-document#document1')
      .should('have.attr', 'path', 'test/kant_rvernunft_1781.TEI-P5.xml')
  })
})
