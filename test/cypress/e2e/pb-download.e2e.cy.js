// E2E: pb-download computes href and target

describe('Demo: pb-download', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-download.html')
  })

  it('computes href for document-based download', () => {
    cy.get('pb-download[type="pdf"][src="document1"]').find('#button')
      .should('have.attr', 'href')
      .and('match', /api\/document\/.*\/pdf\?odd=.*\.odd&token=/)
      .and('include', 'docbook.odd')
  })

  it('sets target _blank when source flag is present', () => {
    cy.contains('span', 'FO source').parents('pb-download').find('#button')
      .should('have.attr', 'target', '_blank')
  })
})
