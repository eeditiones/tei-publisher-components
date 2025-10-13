// Cypress CT: pb-blacklab-results
import '../../../src/pb-blacklab-results.js'

describe('pb-blacklab-results', () => {
  it('should mount', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').should('exist')
  })

  it('should not render Polymer icon buttons', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('paper-icon-button, iron-icon').should('not.exist')
  })

  it('should expose accessible structure', () => {
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

  it('should accept per-page property', () => {
    cy.mount('<pb-blacklab-results per-page="10"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].perPage).to.equal(10)
    })
  })

  it('should accept pattern property', () => {
    cy.mount('<pb-blacklab-results pattern="test query"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].pattern).to.equal('test query')
    })
  })

  it('should accept target property', () => {
    cy.mount('<pb-blacklab-results target="/documents"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].target).to.equal('/documents')
    })
  })

  it('should accept doc property', () => {
    cy.mount('<pb-blacklab-results doc="doc123"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].doc).to.equal('doc123')
    })
  })

  it('should set documents array', () => {
    cy.mount('<pb-blacklab-results id="results"></pb-blacklab-results>')
    cy.get('#results').then($el => {
      $el[0].documents = [
        { id: 'doc1', hits: 5 },
        { id: 'doc2', hits: 3 }
      ]
      expect($el[0].documents).to.have.length(2)
    })
  })

  it('should set data object', () => {
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

  it('should render table with correct headers', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('table thead').should('exist')
    cy.get('pb-blacklab-results').find('table thead th').should('have.length', 5)
  })

  it('should render pagination component', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('pb-paginate').should('exist')
  })

  it('should pass per-page attribute to pagination', () => {
    cy.mount('<pb-blacklab-results per-page="20"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('pb-paginate').should('have.attr', 'per-page', '20')
  })

  it('should render table body for results', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').find('table tbody').should('exist')
  })

  it('should store data property', () => {
    cy.mount('<pb-blacklab-results id="results"></pb-blacklab-results>')
    cy.get('#results').then($el => {
      $el[0].data = { summary: { numberOfHits: 10 } }
      expect($el[0].data.summary.numberOfHits).to.equal(10)
    })
  })

  it('should have subscribe and emit properties for event channels', () => {
    cy.mount('<pb-blacklab-results subscribe="search" emit="results"></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      expect($el[0].subscribe).to.equal('search')
      expect($el[0].emit).to.equal('results')
    })
  })

  it('should initialize with empty documents array', () => {
    cy.mount('<pb-blacklab-results></pb-blacklab-results>')
    cy.get('pb-blacklab-results').then($el => {
      // Component should handle empty state gracefully
      expect($el[0].documents).to.satisfy(docs => 
        docs === undefined || docs === null || (Array.isArray(docs) && docs.length === 0)
      )
    })
  })

  it('should accept documents array', () => {
    cy.mount('<pb-blacklab-results id="results"></pb-blacklab-results>')
    cy.get('#results').then($el => {
      // Just verify we can set the property without crashing
      $el[0].documents = []
      expect($el[0].documents).to.be.an('array')
    })
  })
})
