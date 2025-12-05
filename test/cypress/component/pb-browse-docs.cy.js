// Cypress CT: pb-browse-docs
import '../../../src/pb-browse-docs.js'

describe('pb-browse-docs', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/search/autocomplete*', {
      statusCode: 200,
      body: [{ text: 'Kant', value: 'kant' }]
    }).as('autocomplete')
  })

  it('should mount', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').should('exist')
  })

  it('should use native buttons for toolbar and dialogs', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('paper-button').should('not.exist')
    cy.get('pb-browse-docs')
      .find('button.pb-button')
      .should('have.length.at.least', 1)
    cy.get('pb-browse-docs')
      .find('#delete')
      .should('have.attr', 'type', 'button')
  })

  it('should accept sort-by property', () => {
    cy.mount('<pb-browse-docs sort-by="title"></pb-browse-docs>')
    cy.get('pb-browse-docs').then($el => {
      expect($el[0].sortBy).to.equal('title')
    })
  })

  it('should accept filter property', () => {
    cy.mount('<pb-browse-docs filter="philosophy"></pb-browse-docs>')
    cy.get('pb-browse-docs').then($el => {
      expect($el[0].filter).to.equal('philosophy')
    })
  })

  it('should accept filter-by property', () => {
    cy.mount('<pb-browse-docs filter-by="genre"></pb-browse-docs>')
    cy.get('pb-browse-docs').then($el => {
      expect($el[0].filterBy).to.equal('genre')
    })
  })

  it('should accept sort-options array', () => {
    cy.mount('<pb-browse-docs id="browse"></pb-browse-docs>')
    cy.get('#browse').then($el => {
      $el[0].sortOptions = [
        { label: 'Title', value: 'title' },
        { label: 'Author', value: 'author' }
      ]
      expect($el[0].sortOptions).to.have.length(2)
    })
  })

  it('should accept filter-options array', () => {
    cy.mount('<pb-browse-docs id="browse"></pb-browse-docs>')
    cy.get('#browse').then($el => {
      $el[0].filterOptions = [
        { label: 'All', value: '' },
        { label: 'Books', value: 'book' }
      ]
      expect($el[0].filterOptions).to.have.length(2)
    })
  })

  it('should accept sort-options array', () => {
    cy.mount('<pb-browse-docs id="browse"></pb-browse-docs>')
    cy.get('#browse').then($el => {
      $el[0].sortOptions = [
        { label: 'Title', value: 'title' }
      ]
      expect($el[0].sortOptions).to.have.length(1)
    })
  })

  it('should accept filter-options array', () => {
    cy.mount('<pb-browse-docs id="browse"></pb-browse-docs>')
    cy.get('#browse').then($el => {
      $el[0].filterOptions = [
        { label: 'All', value: '' }
      ]
      expect($el[0].filterOptions).to.have.length(1)
    })
  })

  it('should render autocomplete input', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('pb-autocomplete').should('exist')
  })

  it('should render delete button in toolbar', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('#delete').should('exist')
  })

  it('should have all buttons with type attribute', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('button').each($btn => {
      expect($btn).to.have.attr('type', 'button')
    })
  })

  it('should extend PbLoad base class', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').then($el => {
      // Should have load method from PbLoad
      expect($el[0].load).to.be.a('function')
    })
  })

  it('should accept subscribe property for event channel', () => {
    cy.mount('<pb-browse-docs subscribe="my-channel"></pb-browse-docs>')
    cy.get('pb-browse-docs').then($el => {
      expect($el[0].subscribe).to.equal('my-channel')
    })
  })

  it('should accept emit property for event channel', () => {
    cy.mount('<pb-browse-docs emit="my-channel"></pb-browse-docs>')
    cy.get('pb-browse-docs').then($el => {
      expect($el[0].emit).to.equal('my-channel')
    })
  })

  it('should render delete dialog', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('pb-dialog#deleteDialog').should('exist')
  })

  it('should use native checkboxes instead of paper-checkbox', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('paper-checkbox').should('not.exist')
  })

  it('should accept URL for content loading', () => {
    cy.mount('<pb-browse-docs id="browse"></pb-browse-docs>')
    cy.get('#browse').then($el => {
      $el[0].url = 'api/documents'
      expect($el[0].url).to.equal('api/documents')
    })
  })

  it('should have working pb-fetch for content loading', () => {
    cy.mount('<pb-browse-docs></pb-browse-docs>')
    cy.get('pb-browse-docs').find('pb-fetch#loadContent').should('exist')
  })
})
