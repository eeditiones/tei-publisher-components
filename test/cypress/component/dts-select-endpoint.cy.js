// Cypress CT: dts-select-endpoint
import '../../../src/dts-select-endpoint.js'

describe('dts-select-endpoint', () => {
  it('mounts', () => {
    cy.mount('<dts-select-endpoint></dts-select-endpoint>')
    cy.get('dts-select-endpoint').should('exist')
  })
})

