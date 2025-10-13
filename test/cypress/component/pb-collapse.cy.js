// Cypress CT: pb-collapse
import '../../../src/pb-collapse.js'

describe('pb-collapse', () => {
  const base = `
    <pb-collapse id="c1">
      <div slot="collapse-trigger">Toggle</div>
      <div slot="collapse-content" id="content1">Content 1</div>
    </pb-collapse>
  `

  beforeEach(() => {
    cy.mount(base)
  })

  it('should be closed by default and open on trigger click', () => {
    cy.get('#c1').should('have.prop', 'opened', false)
    cy.get('#c1').find('details').should('not.have.attr', 'open')
    cy.get('#c1').find('summary').click({ force: true })
    cy.get('#c1').should('have.prop', 'opened', true)
    cy.get('#c1').find('details').should('have.attr', 'open')
  })

  it('should close other collapses when one opens with toggles=true', () => {
    cy.mount(`
      <pb-collapse id="a" toggles>
        <div slot="collapse-trigger">A</div>
        <div slot="collapse-content">A1</div>
      </pb-collapse>
      <pb-collapse id="b" toggles>
        <div slot="collapse-trigger">B</div>
        <div slot="collapse-content">B1</div>
      </pb-collapse>
    `)
    cy.get('#a').find('summary').click({ force: true })
    cy.get('#a').should('have.prop', 'opened', true)
    cy.get('#b').find('summary').click({ force: true })
    cy.get('#b').should('have.prop', 'opened', true)
    cy.get('#a').should('have.prop', 'opened', false)
  })

  it('should allow multiple open by default (toggles=false)', () => {
    cy.mount(`
      <pb-collapse id="a">
        <div slot="collapse-trigger">A</div>
        <div slot="collapse-content">A1</div>
      </pb-collapse>
      <pb-collapse id="b">
        <div slot="collapse-trigger">B</div>
        <div slot="collapse-content">B1</div>
      </pb-collapse>
    `)
    cy.get('#a').find('summary').click({ force: true })
    cy.get('#b').find('summary').click({ force: true })
    cy.get('#a').should('have.prop', 'opened', true)
    cy.get('#b').should('have.prop', 'opened', true)
  })
})
