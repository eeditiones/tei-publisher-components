// Cypress E2E: pb-popover
describe('pb-popover e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-popover.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('shows alternate content on click', () => {
    // Click the inline trigger with id "dolore"; a pb-popover is linked via for="dolore"
    cy.get('#dolore').click({ force: true })
    cy.get('body').find('.tippy-box').should('exist')
  })

  it('persistent popover stays open on outside click', () => {
    // Open any persistent popover by clicking its internal trigger link
    cy.get('pb-popover[persistent]').first().find('[part=trigger]').click({ force: true })
    cy.get('body').find('.tippy-box').should('exist')
    // Click outside; persistent should remain open
    cy.get('body').click('topLeft')
    cy.get('body').find('.tippy-box').should('exist')
  })

  it('loads remote content on show', () => {
    // Ensure tippy is initialized, then programmatically show to guarantee fetch
    cy.get('pb-popover[remote]').find('[part=trigger]')
      .should(($el) => { expect($el[0]._tippy, 'tippy instance').to.exist })
      .then(($el) => { $el[0]._tippy.show() })
    // Assert fetched remote HTML replaces the placeholder (retry until content arrives)
    cy.get('.tippy-box .tippy-content', { timeout: 10000 }).should(($c) => {
      const txt = ($c.text() || '').trim()
      expect(txt.length, 'popover content non-empty').to.be.greaterThan(0)
      expect(/loading/i.test(txt), 'remote content loaded (not Loading…)').to.be.false
    })
  })
})
