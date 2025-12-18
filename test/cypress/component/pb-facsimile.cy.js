// Cypress CT: pb-facsimile
import '../../../src/pb-page.js'
import '../../../src/pb-facsimile.js'
import '../../../src/pb-facs-link.js'

describe('pb-facsimile', () => {
  it('should navigate to target page and add overlay for annotation', () => {
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

  describe('request deduplication', () => {
    beforeEach(() => {
      // Suppress uncaught exceptions from OpenSeadragon loading
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('openseadragon') || err.message.includes('Failed to load')) {
          return false // prevent Cypress from failing the test
        }
      })
    })

    it('should deduplicate network requests when all pb-facs-links point to the same image', () => {
      // Set up ESGlobalBridge mock BEFORE mounting to prevent OpenSeadragon from loading
      cy.window().then((win) => {
        // Set up ESGlobalBridge with openseadragon already "loaded"
        // This prevents firstUpdated() from trying to load the script
        win.ESGlobalBridge = {
          requestAvailability: () => win.ESGlobalBridge,
          imports: {
            openseadragon: true // Pretend it's already loaded
          },
          load: cy.stub().as('loadOpenSeadragon')
        }
      })

      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-facsimile
            base-uri="https://apps.existsolutions.com/cantaloupe/iiif/2/"
            subscribe="transcription"
            default-zoom-level="0"
          ></pb-facsimile>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 1,2,3,4 ]"
          >First area</pb-facs-link>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 5,6,7,8 ]"
          >Second area</pb-facs-link>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 9,10,11,12 ]"
          >Third area</pb-facs-link>
        </pb-page>
      `)

      // Wait for components to be ready
      cy.get('pb-facsimile').should('exist')
      cy.get('pb-facs-link').should('have.length', 3)

      cy.get('pb-facsimile').then(($facsimile) => {
        const facsimile = $facsimile[0]

        // Mock OpenSeadragon viewer with spy on open() method
        // Set this up before triggering events so _facsimileObserver() can use it
        const openSpy = cy.stub().as('viewerOpen')
        const goToPageStub = cy.stub().as('goToPage')
        facsimile.viewer = {
          open: openSpy,
          goToPage: goToPageStub,
          close: cy.stub(),
          addHandler: cy.stub()
        }

        // If _initOpenSeadragon was called, it might have tried to set up handlers
        // Make sure our mock is in place
        if (!facsimile.viewer.open) {
          facsimile.viewer.open = openSpy
        }

        // Trigger all pb-facs-link elements to emit events synchronously
        cy.get('pb-facs-link').then(($links) => {
          $links.each((_, el) => {
            el._trigger()
          })
        })

        // Wait for debounce (setTimeout 0) and observer to run
        // The debounce uses setTimeout(..., 0) so we need to wait for the next event loop tick
        cy.wait(20).then(() => {
          // Verify viewer.open() was called exactly once (not 3 times)
          cy.get('@viewerOpen').should('have.been.calledOnce')

          // Verify it was called with deduplicated URIs (only 1 unique URI)
          cy.get('@viewerOpen').then((stub) => {
            const callArgs = stub.getCall(0).args[0]
            expect(callArgs).to.be.an('array')
            expect(callArgs.length).to.equal(1, 'should have exactly 1 deduplicated URI, not 3')
            expect(callArgs[0]).to.equal(
              'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg/info.json'
            )
          })
        })
      })
    })

    it('should deduplicate network requests when pb-facs-links point to different images', () => {
      // Set up ESGlobalBridge mock BEFORE mounting to prevent OpenSeadragon from loading
      cy.window().then((win) => {
        // Set up ESGlobalBridge with openseadragon already "loaded"
        // This prevents firstUpdated() from trying to load the script
        win.ESGlobalBridge = {
          requestAvailability: () => win.ESGlobalBridge,
          imports: {
            openseadragon: true // Pretend it's already loaded
          },
          load: cy.stub().as('loadOpenSeadragon')
        }
      })

      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-facsimile
            base-uri="https://apps.existsolutions.com/cantaloupe/iiif/2/"
            subscribe="transcription"
            default-zoom-level="0"
          ></pb-facsimile>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 1,2,3,4 ]"
          >First area</pb-facs-link>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p303.jpg"
            coordinates="[ 5,6,7,8 ]"
          >Second area</pb-facs-link>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 9,10,11,12 ]"
          >Third area</pb-facs-link>
        </pb-page>
      `)

      // Wait for components to be ready
      cy.get('pb-facsimile').should('exist')
      cy.get('pb-facs-link').should('have.length', 3)

      cy.get('pb-facsimile').then(($facsimile) => {
        const facsimile = $facsimile[0]

        // Mock OpenSeadragon viewer with spy on open() method
        // Set this up before triggering events so _facsimileObserver() can use it
        const openSpy = cy.stub().as('viewerOpen')
        const goToPageStub = cy.stub().as('goToPage')
        facsimile.viewer = {
          open: openSpy,
          goToPage: goToPageStub,
          close: cy.stub(),
          addHandler: cy.stub()
        }

        // If _initOpenSeadragon was called, it might have tried to set up handlers
        // Make sure our mock is in place
        if (!facsimile.viewer.open) {
          facsimile.viewer.open = openSpy
        }

        // Trigger all pb-facs-link elements to emit events synchronously
        cy.get('pb-facs-link').then(($links) => {
          $links.each((_, el) => {
            el._trigger()
          })
        })

        // Wait for debounce (setTimeout 0) and observer to run
        // The debounce uses setTimeout(..., 0) so we need to wait for the next event loop tick
        cy.wait(20).then(() => {
          // Verify viewer.open() was called exactly once
          cy.get('@viewerOpen').should('have.been.calledOnce')

          // Verify it was called with deduplicated URIs (2 unique URIs, not 3)
          cy.get('@viewerOpen').then((stub) => {
            const callArgs = stub.getCall(0).args[0]
            expect(callArgs).to.be.an('array')
            expect(callArgs.length).to.equal(2, 'should have exactly 2 deduplicated URIs, not 3')
            
            const expectedUrls = [
              'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg/info.json',
              'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p303.jpg/info.json'
            ]
            expect(callArgs).to.include.members(expectedUrls)
          })
        })
      })
    })

    it('should fail if deduplication is not working (negative test case)', () => {
      // This test verifies that the test assertions are strict enough to catch deduplication failures
      // If deduplication was broken, 3 links pointing to the same image would result in 3 URIs
      // instead of 1, and this test would catch that failure
      
      // Set up ESGlobalBridge mock BEFORE mounting to prevent OpenSeadragon from loading
      cy.window().then((win) => {
        win.ESGlobalBridge = {
          requestAvailability: () => win.ESGlobalBridge,
          imports: {
            openseadragon: true
          },
          load: cy.stub().as('loadOpenSeadragon')
        }
      })

      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-facsimile
            base-uri="https://apps.existsolutions.com/cantaloupe/iiif/2/"
            subscribe="transcription"
            default-zoom-level="0"
          ></pb-facsimile>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 1,2,3,4 ]"
          >First area</pb-facs-link>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 5,6,7,8 ]"
          >Second area</pb-facs-link>
          <pb-facs-link
            emit="transcription"
            facs="12446_000_BCz_1596p302.jpg"
            coordinates="[ 9,10,11,12 ]"
          >Third area</pb-facs-link>
        </pb-page>
      `)

      // Wait for components to be ready
      cy.get('pb-facsimile').should('exist')
      cy.get('pb-facs-link').should('have.length', 3)

      cy.get('pb-facsimile').then(($facsimile) => {
        const facsimile = $facsimile[0]

        // Mock OpenSeadragon viewer with spy on open() method
        const openSpy = cy.stub().as('viewerOpen')
        const goToPageStub = cy.stub().as('goToPage')
        facsimile.viewer = {
          open: openSpy,
          goToPage: goToPageStub,
          close: cy.stub(),
          addHandler: cy.stub()
        }

        // Trigger all pb-facs-link elements to emit events synchronously
        cy.get('pb-facs-link').then(($links) => {
          $links.each((_, el) => {
            el._trigger()
          })
        })

        // Wait for debounce and observer to run
        cy.wait(20).then(() => {
          // Negative test: Verify that if deduplication wasn't working, this assertion would fail
          // If deduplication is broken, we'd get 3 URIs instead of 1
          cy.get('@viewerOpen').should('have.been.calledOnce')

          cy.get('@viewerOpen').then((stub) => {
            const callArgs = stub.getCall(0).args[0]
            
            // Critical assertion: This will FAIL if deduplication is broken
            // If deduplication wasn't working, callArgs.length would be 3, not 1
            expect(callArgs.length, 'Negative test: should be exactly 1, not 3').to.equal(1,
              `DEDUPLICATION FAILURE DETECTED: Got ${callArgs.length} URIs instead of 1. ` +
              `If deduplication was working, 3 links pointing to the same image should result in 1 URI. ` +
              `Got URIs: ${callArgs.join(', ')}`)

            // Verify the single URI is correct
            expect(callArgs[0]).to.equal(
              'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg/info.json'
            )

            // Additional verification: Check that all 3 links were processed but deduplicated
            // The _facsimiles array should have 3 elements, but viewer.open() should receive only 1
            expect(facsimile._facsimiles.length).to.equal(3,
              'All 3 links should be in _facsimiles array')
            expect(callArgs.length).to.equal(1,
              'But viewer.open() should receive only 1 deduplicated URI')
          })
        })
      })
    })
  })
})
