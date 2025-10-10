// Cypress CT: pb-table-column
import '../../../src/pb-table-column.js'

describe('pb-table-column', () => {
  it('mounts', () => {
    cy.mount('<pb-table-column></pb-table-column>')
    cy.get('pb-table-column').should('exist')
  })

  it('has default properties', () => {
    cy.mount('<pb-table-column></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      const col = $el[0]
      expect(col.label).to.equal('no-label')
      expect(col.property).to.be.null
      expect(col.sort).to.be.false
      expect(col.width).to.be.null
    })
  })

  it('sets label property', () => {
    cy.mount('<pb-table-column label="Name"></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      expect($el[0].label).to.equal('Name')
    })
  })

  it('sets property attribute for data binding', () => {
    cy.mount('<pb-table-column label="Name" property="fullName"></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      expect($el[0].property).to.equal('fullName')
    })
  })

  it('enables sorting when sort attribute is present', () => {
    cy.mount('<pb-table-column label="Name" sort></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      expect($el[0].sort).to.be.true
    })
  })

  it('sets fixed width', () => {
    cy.mount('<pb-table-column label="Name" width="200px"></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      expect($el[0].width).to.equal('200px')
    })
  })

  it('returns correct column configuration via data()', () => {
    cy.mount('<pb-table-column label="Name" property="fullName" sort width="200px"></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      const col = $el[0]
      const config = col.data()
      
      expect(config).to.have.property('name')
      expect(config).to.have.property('id', 'fullName')
      expect(config).to.have.property('sort')
      expect(config.sort.enabled).to.be.true
      expect(config).to.have.property('width', '200px')
      expect(config).to.have.property('formatter')
      expect(config.formatter).to.be.a('function')
    })
  })

  it('returns column config without id when property is not set', () => {
    cy.mount('<pb-table-column label="Actions"></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      const config = $el[0].data()
      expect(config).to.not.have.property('id')
    })
  })

  it('returns column config without width when not specified', () => {
    cy.mount('<pb-table-column label="Name"></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      const config = $el[0].data()
      expect(config).to.not.have.property('width')
    })
  })

  it('has sorting disabled by default', () => {
    cy.mount('<pb-table-column label="Name"></pb-table-column>')
    cy.get('pb-table-column').then($el => {
      const config = $el[0].data()
      expect(config.sort.enabled).to.be.false
    })
  })
})

