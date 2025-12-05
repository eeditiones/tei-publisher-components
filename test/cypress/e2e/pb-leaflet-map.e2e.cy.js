// Cypress E2E: pb-leaflet-map
describe('pb-leaflet-map e2e', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-leaflet-map.html')
    cy.get('pb-page', { timeout: 5000 }).should('exist')
  })

  it('should initialize Leaflet and render a base layer', () => {
    cy.get('pb-leaflet-map').should('exist')

    cy.get('pb-leaflet-map').should(($el) => {
      expect($el[0].map, 'leaflet map instance').to.exist
    })

    cy.get('pb-leaflet-map').find('#map')
      .should('have.class', 'leaflet-container')

    cy.get('pb-leaflet-map')
      .find('.leaflet-tile')
      .should('have.length.at.least', 1)
  })

  it('should add a marker for a pb-geolocation', () => {
    cy.get('#locations')
      .find('li')
      .first()
      .click()
    cy.get('pb-leaflet-map')
      .find('.leaflet-marker-icon')
      .should('have.length.at.least', 1)
  })
})