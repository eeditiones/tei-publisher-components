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
})
