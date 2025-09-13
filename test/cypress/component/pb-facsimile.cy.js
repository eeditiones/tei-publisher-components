// Cypress CT: pb-facsimile
import '../../../src/pb-page.js'
import '../../../src/pb-facsimile.js'

describe('pb-facsimile', () => {
  it('navigates to target page and adds overlay for annotation', () => {
    cy.mount(`
      <pb-page endpoint="." api-version="1.0.0">
        <pb-facsimile></pb-facsimile>
      </pb-page>
    `)
    cy.get('pb-facsimile').then(($el) => {
      const facs = $el[0]
      // Fake facsimiles list with getImage()
      facs._facsimiles = [
        { getImage: () => 'img1.jpg' },
        { getImage: () => 'img2.jpg' },
      ]

      // Create a minimal fake OpenSeadragon viewer API used by _showAnnotationListener
      const goToPage = cy.stub().as('goToPage')
      const addOverlay = cy.stub().as('addOverlay')
      const removeOverlay = cy.stub().as('removeOverlay')
      const fitBoundsWithConstraints = cy.stub().as('fitBounds')
      const getBounds = () => ({})
      const viewportToImageRectangle = () => ({
        containsPoint: () => false,
        width: 100,
        height: 80,
      })
      const imageToViewportRectangle = (x, y, w, h) => ({ x, y, w, h })
      facs.viewer = {
        currentPage: () => 0,
        goToPage,
        removeOverlay,
        addOverlay,
        viewport: {
          fitBoundsWithConstraints,
        },
        world: {
          getItemAt: () => ({ viewportToImageRectangle, getBounds, imageToViewportRectangle }),
        },
      }

      // Provide minimal OpenSeadragon global for Point construction
      const w = facs.ownerDocument.defaultView || window
      w.OpenSeadragon = {
        Point: function (x, y) { return { x, y } },
      }

      // Call the listener directly to avoid channel/event plumbing
      facs._showAnnotationListener({
        detail: {
          file: 'img2.jpg',
          // x, y, w, h
          coordinates: [10, 15, 20, 30],
          element: null,
        },
      })

      // Assert page change and overlay added
      cy.get('@goToPage').should('have.been.calledWith', 1)
      cy.get('@addOverlay').should('have.been.called')
    })
  })
})
