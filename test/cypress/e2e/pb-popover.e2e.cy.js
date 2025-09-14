// E2E: pb-popover demo

describe('Demo: pb-popover', () => {
  it('shows alternate content on click', () => {
    cy.visit('/demo/pb-popover.html')
    // Click the inline trigger with id "dolore"; a pb-popover is linked via for="dolore"
    cy.get('#dolore').click({ force: true })
    cy.get('body').find('.tippy-box').should('exist')
  })

  it('persistent popover stays open on outside click', () => {
    cy.visit('/demo/pb-popover.html')
    // Open any persistent popover by clicking its internal trigger link
    cy.get('pb-popover[persistent]').first().find('[part=trigger]').click({ force: true })
    cy.get('body').find('.tippy-box').should('exist')
    // Click outside; persistent should remain open
    cy.get('body').click('topLeft')
    cy.get('body').find('.tippy-box').should('exist')
  })

  it('loads remote content on show', () => {
    cy.intercept('GET', '**/popover-data.html', {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: '<div id="remote">Remote Content</div>'
    }).as('remote')
    cy.visit('/demo/pb-popover.html')
    // Programmatically show via tippy to avoid focusability issues on <span>
    cy.get('pb-popover[remote]').find('[part=trigger]').then(($el) => {
      const el = $el[0]
      // Ensure tippy is created
      expect(el._tippy, 'tippy instance exists').to.exist
      el._tippy.show()
    })
    cy.wait('@remote', { timeout: 10000 })
    cy.get('body').find('.tippy-box #remote').should('exist')
  })
})
