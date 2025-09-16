// StandardJS formatting

describe('Demo: pb-leaflet-map', () => {
  beforeEach(() => {
    cy.visit('/demo/pb-leaflet-map.html')
  })

  it('initializes Leaflet and renders a base layer', () => {
    // The custom element should exist
    cy.get('pb-leaflet-map').should('exist')

    // Wait for the component to be ready (map getter should be non-null)
    cy.get('pb-leaflet-map').should(($el) => {
      expect($el[0].map, 'leaflet map instance').to.exist
    })

    // The #map container inside the shadow root should have Leaflet classes
    cy.get('pb-leaflet-map').find('#map')
      .should('have.class', 'leaflet-container')

    // At least one tile image should be present once the base layer loads
    cy.get('pb-leaflet-map')
      .find('.leaflet-tile')
      .should('have.length.at.least', 1)
  })

  it('adds a marker for a pb-geolocation', () => {
    cy.get('#locations')
      .find('li')
      .first()
      .click()
    cy.get('pb-leaflet-map')
      .find('.leaflet-marker-icon')
      .should('have.length.at.least', 1)
  })
})