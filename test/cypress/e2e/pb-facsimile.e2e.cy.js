// Cypress E2E Test: pb-facsimile request deduplication
// Tests that network requests are deduplicated when multiple pb-facs-link elements
// point to the same IIIF image URL
//
// This test captures the intention of the unit test in migration_plan/facs-spec.js:
// - When multiple pb-facs-link elements point to the same image, only one network
//   request should be made to the /info.json endpoint
// - When pb-facs-link elements point to different images, multiple requests should
//   be made (one per unique image), but duplicates should still be deduplicated

describe('pb-facsimile request deduplication', () => {
  beforeEach(() => {
    // Login if running against real backend
    if (Cypress.env('realBackend')) {
      cy.login()
    }
  })

  it('should deduplicate network requests when all pb-facs-links point to the same image', () => {
    // Track all network requests to /info.json
    const requests = []

    cy.fixture('iiif/image-info-complete.json').then((imageInfo) => {
      cy.intercept('GET', '**/info.json', (req) => {
        requests.push({
          url: req.url,
          timestamp: Date.now()
        })
        const responseBody = { ...imageInfo }
        responseBody['@id'] = req.url.replace('/info.json', '')
        req.reply({
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: responseBody
        })
      }).as('infoJsonRequest')

      // Visit the test page with multiple pb-facs-link elements pointing to the same image
      cy.visit('/demo/pb-facsimile-dedup-test.html')
      cy.get('pb-page', { timeout: 5000 }).should('exist')

      // Wait for components to be ready
      cy.get('pb-facsimile').should('exist')
      cy.get('pb-facs-link').should('have.length', 3)

      // Trigger all pb-facs-link elements to emit events
      // This simulates the scenario where multiple links point to the same image
      cy.get('pb-facs-link').each(($link) => {
        cy.wrap($link).then(($el) => {
          const element = $el[0]
          // Trigger the link to emit pb-load-facsimile event
          element._trigger()
        })
      })

      // Wait for the network request to complete
      cy.wait('@infoJsonRequest', { timeout: 10000 })

      // Verify that exactly one request was made (not 3, which would indicate deduplication failed)
      cy.then(() => {
        // Get unique URLs from requests
        const uniqueUrls = [...new Set(requests.map(r => r.url))]

        // Critical assertion: if deduplication wasn't working, we'd get 3 requests (one per link)
        // This test will fail if deduplication is broken
        expect(requests.length, 'total requests made (should be 1, not 3)').to.equal(1,
          'deduplication failed: expected exactly 1 request when 3 links point to the same image, but got ' + requests.length)
        expect(uniqueUrls.length, 'unique URLs requested').to.equal(1,
          'there should have been exactly one unique request when all pb-facs-links point to the same image')

        // Verify the request URL is correct
        expect(uniqueUrls[0]).to.equal(
          'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg/info.json'
        )
      })
    })
  })

  it('should deduplicate network requests when pb-facs-links point to a small set of different images', () => {
    // Track all network requests to /info.json
    const requests = []

    cy.fixture('iiif/image-info-complete.json').then((imageInfo) => {
      cy.intercept('GET', '**/info.json', (req) => {
        requests.push({
          url: req.url,
          timestamp: Date.now()
        })
        const responseBody = { ...imageInfo }
        responseBody['@id'] = req.url.replace('/info.json', '')
        req.reply({
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: responseBody
        })
      }).as('infoJsonRequest')

      // Visit the test page with pb-facs-link elements pointing to different images
      cy.visit('/demo/pb-facsimile-dedup-test-2.html')
      cy.get('pb-page', { timeout: 5000 }).should('exist')

      // Wait for components to be ready
      cy.get('pb-facsimile').should('exist')
      cy.get('pb-facs-link').should('have.length', 3)

      // Trigger all pb-facs-link elements to emit events
      cy.get('pb-facs-link').each(($link) => {
        cy.wrap($link).then(($el) => {
          const element = $el[0]
          // Trigger the link to emit pb-load-facsimile event
          element._trigger()
        })
      })

      // Wait for both unique network requests to complete
      cy.wait('@infoJsonRequest', { timeout: 10000 })
      cy.wait('@infoJsonRequest', { timeout: 10000 })

      // Verify that exactly two unique requests were made (one for each unique image)
      // Note: we have 3 links but 2 point to the same image, so we should get exactly 2 requests
      cy.then(() => {
        // Get unique URLs from requests
        const uniqueUrls = [...new Set(requests.map(r => r.url))]

        // Critical assertion: if deduplication wasn't working, we might get 3 requests
        // This test will fail if deduplication is broken
        expect(requests.length, 'total requests made (should be 2, not 3)').to.equal(2,
          'deduplication failed: expected exactly 2 requests when 3 links point to 2 unique images, but got ' + requests.length)
        expect(uniqueUrls.length, 'unique URLs requested').to.equal(2,
          'there should have been exactly two unique requests when pb-facs-links point to two different images')

        // Verify the request URLs are correct
        const expectedUrls = [
          'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p303.jpg/info.json',
          'https://apps.existsolutions.com/cantaloupe/iiif/2/12446_000_BCz_1596p302.jpg/info.json'
        ]

        expect(uniqueUrls).to.include.members(expectedUrls)
      })
    })
  })

  it('should fail if deduplication is not working (negative test case)', () => {
    // This test explicitly verifies that the test would catch a deduplication failure
    // We'll trigger multiple links and verify we get exactly the expected number of requests
    const requests = []

    cy.fixture('iiif/image-info-complete.json').then((imageInfo) => {
      cy.intercept('GET', '**/info.json', (req) => {
        requests.push({
          url: req.url,
          timestamp: Date.now()
        })
        const responseBody = { ...imageInfo }
        responseBody['@id'] = req.url.replace('/info.json', '')
        req.reply({
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: responseBody
        })
      }).as('infoJsonRequest')

      cy.visit('/demo/pb-facsimile-dedup-test.html')
      cy.get('pb-page', { timeout: 5000 }).should('exist')
      cy.get('pb-facsimile').should('exist')
      cy.get('pb-facs-link').should('have.length', 3)

      // Trigger all 3 links that point to the same image
      cy.get('pb-facs-link').each(($link) => {
        cy.wrap($link).then(($el) => {
          const element = $el[0]
          element._trigger()
        })
      })

      cy.wait('@infoJsonRequest', { timeout: 10000 })

      // Negative test: verify that if deduplication wasn't working, this assertion would fail
      // If deduplication is broken, we'd get 3 requests instead of 1
      cy.then(() => {
        const uniqueUrls = [...new Set(requests.map(r => r.url))]

        // This assertion will fail if deduplication is broken (would get 3 instead of 1)
        expect(requests.length, 'negative test: should be exactly 1, not 3').to.equal(1,
          `DEDUPLICATION FAILURE DETECTED: Got ${requests.length} requests instead of 1. ` +
          `If deduplication was working, 3 links pointing to the same image should result in 1 request. ` +
          `Got requests: ${requests.map(r => r.url).join(', ')}`)

        // Also verify unique URLs count
        expect(uniqueUrls.length, 'unique URLs should be 1').to.equal(1,
          `DEDUPLICATION FAILURE: Got ${uniqueUrls.length} unique URLs instead of 1. ` +
          `Unique URLs: ${uniqueUrls.join(', ')}`)
      })
    })
  })
})

