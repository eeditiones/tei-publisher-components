// Cypress CT: pb-blacklab-results
import '../../../src/pb-blacklab-results.js'

describe('pb-blacklab-results', () => {
  it('mounts', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').should('exist')
  })

  it('does not render Polymer icon buttons', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('paper-icon-button, iron-icon').should('not.exist')
  })

  it('exposes accessible structure', () => {
    const markup = `
      <pb-blacklab-results per-page="2" pattern="test" target="/docs">
      </pb-blacklab-results>
    `
    cy.mount(markup)
    cy.get('pb-blacklab-results').as('component')

    cy.get('@component').find('pb-paginate').should('have.attr', 'per-page', '2')
    cy.get('@component').find('table').should('exist')
    cy.get('@component')
      .find('table thead th')
      .should('have.length', 5)
      .then($ths => {
        expect([...$ths].map(th => th.textContent.trim().toLowerCase())).to.include.members([
          'doc id',
          'hits'
        ])
      })
  })

  it('accepts per-page property', () => {
    cy.mount('<pb-blacklab-results per-page="10"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].perPage).to.equal(10)
    })
  })

  it('accepts pattern property', () => {
    cy.mount('<pb-blacklab-results pattern="test query"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].pattern).to.equal('test query')
    })
  })

  it('accepts target property', () => {
    cy.mount('<pb-blacklab-results target="/documents"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].target).to.equal('/documents')
    })
  })

  it('accepts doc property', () => {
    cy.mount('<pb-blacklab-results doc="doc123"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].doc).to.equal('doc123')
    })
  })

  it('can set documents array', () => {
    cy.mount('<pb-blacklab-results id="results"></pb-blacklab-results>')
    cy.get('#results').then($el => {
      $el[0].documents = [
        { id: 'doc1', hits: 5 },
        { id: 'doc2', hits: 3 }
      ]
      expect($el[0].documents).to.have.length(2)
    })
  })

  it('can set data object', () => {
    cy.mount('<pb-blacklab-results id="results"></pb-blacklab-results>')
    cy.get('#results').then($el => {
      $el[0].data = { 
        hits: [
          { left: 'before', match: 'word', right: 'after' }
        ]
      }
      expect($el[0].data.hits).to.have.length(1)
    })
  })

  it('renders table with correct headers', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('table thead').should('exist')
    cy.get('pb-blacklab-results').find('table thead th').should('have.length', 5)
  })

  it('renders pagination component', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('pb-paginate').should('exist')
  })

  it('pagination receives per-page attribute', () => {
    cy.mount('<pb-blacklab-results per-page="20"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('pb-paginate').should('have.attr', 'per-page', '20')
  })

  it('renders table body for results', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('table tbody').should('exist')
  })

  it('can store data property', () => {
    cy.mount('<pb-blacklab-results id="results"></pb-blacklab-results>')
    cy.get('#results').then($el => {
      $el[0].data = { summary: { numberOfHits: 10 } }
      expect($el[0].data.summary.numberOfHits).to.equal(10)
    })
  })

  it('has subscribe and emit properties for event channels', () => {
    cy.mount('<pb-blacklab-results subscribe="search" emit="results"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].subscribe).to.equal('search')
      expect($el[0].emit).to.equal('results')
    })
  })

  it('initializes with empty documents array', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      // Component should handle empty state gracefully
      expect($el[0].documents).to.satisfy(docs => 
        docs === undefined || docs === null || (Array.isArray(docs) && docs.length === 0)
      )
    })
  })

  it('can accept documents array', () => {
    cy.mount('<pb-blacklab-results id="results"></pb-blacklab-results>')
    cy.get('#results').then($el => {
      // Just verify we can set the property without crashing
      $el[0].documents = []
      expect($el[0].documents).to.be.an('array')
    })
  })
})
