// Cypress CT: dts-client
import '../../../src/dts-client.js'

describe('dts-client', () => {
  it('mounts', () => {
    cy.mount('<dts-client></dts-client>')
    cy.get('dts-client').should('exist')
  })
})

