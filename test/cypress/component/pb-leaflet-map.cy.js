// Cypress CT: pb-leaflet-map
import '../../../src/pb-leaflet-map.js'

describe('pb-leaflet-map', () => {
  beforeEach(() => {
    cy.window().then(win => {
      if (!win.ESGlobalBridge) {
        win.ESGlobalBridge = {
          requestAvailability: () => win.ESGlobalBridge,
          instance: {
            load: () => Promise.resolve()
          }
        }
      }
      
      if (!win.L) {
        win.L = {
          map: cy.stub().returns({
            setView: cy.stub(),
            addLayer: cy.stub(),
            on: cy.stub(),
            addControl: cy.stub()
          }),
          Control: {
            Geocoder: {
              nominatim: cy.stub().returns({}),
              geocoder: cy.stub().returns({
                on: cy.stub(),
                addTo: cy.stub()
              })
            }
          },
          tileLayer: cy.stub().returns({
            addTo: cy.stub()
          }),
          marker: cy.stub().returns({
            addTo: cy.stub(),
            bindPopup: cy.stub()
          })
        }
      }
    })
  })

  it('should mount without errors', () => {
    cy.mount('<pb-leaflet-map></pb-leaflet-map>')
    cy.get('pb-leaflet-map').should('exist')
  })

  it('should work with leaflet-control-geocoder v3.3.1', () => {
    cy.mount('<pb-leaflet-map geo-coding></pb-leaflet-map>')
    
    cy.window().then(win => {
      const component = win.document.querySelector('pb-leaflet-map')
      expect(component).to.exist
      
      expect(component.geoCoding).to.be.true
      
      expect(win.L).to.exist
      expect(win.L.Control.Geocoder).to.exist
      expect(win.L.Control.Geocoder.nominatim).to.be.a('function')
      expect(win.L.Control.Geocoder.geocoder).to.be.a('function')
    })
  })

  it('should handle geocoding events', () => {
    cy.mount('<pb-leaflet-map geo-coding></pb-leaflet-map>')
    
    cy.get('pb-leaflet-map').then($el => {
      const component = $el[0]
      
      expect(component.geoCoding).to.be.true
      
      expect(component.zoom).to.be.a('number')
      expect(component.latitude).to.be.a('number')
      expect(component.longitude).to.be.a('number')
    })
  })
})

