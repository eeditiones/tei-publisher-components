describe('Demo: pb-browse-docs', () => {
  beforeEach(() => {
    cy.fixture('demo/browse-docs/default.html', 'utf8').as('defaultHtml')
    cy.fixture('demo/browse-docs/filtered.html', 'utf8').as('filteredHtml')

    cy.then(function () {
      cy.intercept('GET', '**/api/collection**', req => {
        const filter = new URL(req.url).searchParams.get('filter')
        req.reply({
          statusCode: 200,
          headers: { 'content-type': 'text/html' },
          body: filter ? this.filteredHtml : this.defaultHtml
        })
      }).as('loadCollection')
    })

    cy.intercept('GET', '**/api/search/autocomplete**', {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: [{ text: 'Doc One', value: 'Doc One' }]
    })

    cy.visit('/demo/pb-browse-docs.html')
  })

  it('renders the document list and filters results', () => {
    cy.wait('@loadCollection').its('response.statusCode').should('eq', 200)
    cy.get('pb-browse-docs').find('.document-item').should('have.length', 2)

    cy.get('pb-browse-docs')
      .shadow()
      .find('#filterString')
      .shadow()
      .find('input.pb-input')
      .type('Doc One{enter}')

    cy.wait('@loadCollection').its('request.url').should('contain', 'filter=Doc%20One')

    cy.get('pb-browse-docs')
      .find('.document-item')
      .should('have.length', 1)
      .first()
      .within(() => {
        cy.contains('Doc One')
        cy.contains('Author A')
      })
  })
})
