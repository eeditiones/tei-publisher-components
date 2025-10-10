// E2E: pb-link driving pb-view navigation/event emission

describe('Demo: pb-link + pb-view', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-link.html')
  })

  it('clicking pb-link updates pb-view content', () => {
    let before = ''
    // Snapshot initial content text
    cy.get('pb-view').find('[part=content]').invoke('text').then((t) => { before = t || '' })

    // Set up a one-time listener for pb-end-update directly on the view, then click the link
    cy.get('pb-view').then(($view) => {
      const view = $view[0]
      return new Cypress.Promise((resolve) => {
        const done = () => resolve()
        view.addEventListener('pb-end-update', done, { once: true })
        cy.contains('pb-link', /Kant chapter/i)
          .find('button')
          .click({ force: true })
          .then(() => view.removeEventListener('pb-end-update', done))
      })
    })

    // Assert that the content actually changed
    cy.get('pb-view').find('[part=content]').invoke('text').should((after) => {
      expect(after && after.trim(), 'content changed').to.not.eq((before || '').trim())
    })

    // And assert the underlying document path switched to the Kant chapter
    cy.get('pb-document#document1')
      .should('have.attr', 'path', 'test/kant_rvernunft_1781.TEI-P5.xml')
  })
})
