// E2E: pb-mei playback controls

describe('Demo: pb-mei playback', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-mei.html')
    cy.get('pb-mei').first().as('viewer')

    // Wait for player controls to appear (script load is async)
    cy.get('@viewer')
      .find('#player button.pb-button--icon', { timeout: 10000 })
      .should('have.length.at.least', 2)
    cy.get('@viewer').should($el => {
      expect($el[0]._midiPlayer, 'midi player initialized').to.exist
    })
  })

  it('toggles play and pause controls', () => {
    cy.get('@viewer')
      .find('#player button')
      .first()
      .as('playButton')

    cy.get('@playButton').should('have.attr', 'aria-pressed', 'false')
    cy.get('@playButton').click()
    cy.get('@playButton').should('have.attr', 'aria-pressed', 'true')

    cy.get('@viewer')
      .find('#player button')
      .eq(1)
      .as('pauseButton')

    cy.get('@pauseButton').click()
    cy.get('@playButton').should('have.attr', 'aria-pressed', 'false')
  })
})
