// Cypress CT: pb-timeline
import '../../../src/pb-timeline.js'

describe('pb-timeline', () => {
  it('mounts', () => {
    cy.mount('<pb-timeline></pb-timeline>')
    cy.get('pb-timeline').should('exist')
  })
})

