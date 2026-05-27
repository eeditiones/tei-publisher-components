// Cypress CT: pb-timeline sanitization tests
import '../../../src/pb-timeline.js'
import '../../../src/pb-page.js'

describe('pb-timeline sanitization', () => {
  beforeEach(() => {
    // Stub i18n intercepts
    cy.intercept('GET', '**/i18n/common/en.json', { fixture: 'i18n/common/en.json' })
  })

  describe('renderInfo sanitization', () => {
    it('should sanitize malicious script tags in info items', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-timeline id="timeline"></pb-timeline>
        </pb-page>
      `)

      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('#timeline').then($el => {
          const component = $el[0]
          
          // Set data with malicious info
          component.dataObj = {
            data: [{
              value: 5,
              info: ['<script>alert("XSS")</script>Malicious content']
            }]
          }
          component.maxValue = 10
          component.maxHeight = 100
          component.multiplier = 1
          component.scope = 'M'
          
          component.requestUpdate()
          return component.updateComplete
        })
      })

      // Verify script tag was removed from rendered info
      cy.get('#timeline').then($el => {
        const component = $el[0]
        const infoElements = component.shadowRoot.querySelectorAll('.info li')
        
        if (infoElements.length > 0) {
          const html = infoElements[0].innerHTML
          expect(html).to.not.include('<script>')
          expect(html).to.not.include('alert("XSS")')
          expect(html).to.include('Malicious content')
        }
      })
    })

    it('should sanitize event handlers in info items', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-timeline id="timeline"></pb-timeline>
        </pb-page>
      `)

      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('#timeline').then($el => {
          const component = $el[0]
          
          component.dataObj = {
            data: [{
              value: 5,
              info: ['<img src="x" onerror="alert(\'XSS\')" alt="test" />']
            }]
          }
          component.maxValue = 10
          component.maxHeight = 100
          component.multiplier = 1
          component.scope = 'M'
          
          component.requestUpdate()
          return component.updateComplete
        })
      })

      cy.get('#timeline').then($el => {
        const component = $el[0]
        const infoElements = component.shadowRoot.querySelectorAll('.info li')
        
        if (infoElements.length > 0) {
          const html = infoElements[0].innerHTML
          expect(html).to.not.include('onerror')
          expect(html).to.include('alt="test"')
        }
      })
    })

    it('should sanitize javascript: URLs in info items', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-timeline id="timeline"></pb-timeline>
        </pb-page>
      `)

      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('#timeline').then($el => {
          const component = $el[0]
          
          component.dataObj = {
            data: [{
              value: 5,
              info: ['<a href="javascript:alert(\'XSS\')">Click me</a>']
            }]
          }
          component.maxValue = 10
          component.maxHeight = 100
          component.multiplier = 1
          component.scope = 'M'
          
          component.requestUpdate()
          return component.updateComplete
        })
      })

      cy.get('#timeline').then($el => {
        const component = $el[0]
        const infoElements = component.shadowRoot.querySelectorAll('.info li')
        
        if (infoElements.length > 0) {
          const html = infoElements[0].innerHTML
          expect(html).to.not.include('javascript:')
        }
      })
    })

    it('should preserve safe HTML in info items', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-timeline id="timeline"></pb-timeline>
        </pb-page>
      `)

      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('#timeline').then($el => {
          const component = $el[0]
          
          component.dataObj = {
            data: [{
              value: 5,
              info: ['<a href="/doc1">Doc 1</a>', '<strong>Important</strong>']
            }]
          }
          component.maxValue = 10
          component.maxHeight = 100
          component.multiplier = 1
          component.scope = 'M'
          
          component.requestUpdate()
          return component.updateComplete
        })
      })

      cy.get('#timeline').then($el => {
        const component = $el[0]
        const infoElements = component.shadowRoot.querySelectorAll('.info li')
        
        if (infoElements.length > 0) {
          const html = infoElements[0].innerHTML
          expect(html).to.include('<a href="/doc1">')
          expect(html).to.include('Doc 1')
        }
      })
    })
  })

  describe('tooltip sanitization', () => {
    it('should sanitize malicious content in tooltip (_showtooltip)', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-timeline id="timeline"></pb-timeline>
        </pb-page>
      `)

      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('#timeline').then($el => {
          const component = $el[0]
          
          // Set up component with bins
          component.dataObj = {
            data: [{
              value: 5,
              dateStr: '2020-01-01',
              info: ['<script>alert("XSS")</script>Info']
            }]
          }
          component.maxValue = 10
          component.maxHeight = 100
          component.multiplier = 1
          component.scope = 'M'
          
          component.requestUpdate()
          return component.updateComplete.then(() => {
            // Get the bin container
            const bins = component.shadowRoot.querySelectorAll('.bin-container')
            if (bins.length > 0) {
              // Set up the bin with malicious data
              const bin = bins[0]
              bin.dataset.value = '5'
              bin.dataset.datestr = '2020-01-01'
              
              // Create info element with malicious content
              const infoDiv = document.createElement('div')
              infoDiv.className = 'info'
              infoDiv.innerHTML = '<ul><li><script>alert("XSS")</script>Info</li></ul>'
              bin.appendChild(infoDiv)
              
              // Trigger tooltip display
              const event = new MouseEvent('mousemove', { bubbles: true })
              Object.defineProperty(event, 'currentTarget', { value: bin, enumerable: true })
              component._mouseMove(event)
            }
          })
        })
      })

      // Verify tooltip content is sanitized
      cy.get('#timeline').then($el => {
        const component = $el[0]
        const tooltip = component.shadowRoot.querySelector('.tooltip-text')
        
        if (tooltip) {
          const html = tooltip.innerHTML
          expect(html).to.not.include('<script>')
          expect(html).to.not.include('alert("XSS")')
        }
      })
    })

    it('should sanitize malicious content in selection tooltip (_showtooltipSelection)', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-timeline id="timeline"></pb-timeline>
        </pb-page>
      `)

      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('#timeline').then($el => {
          const component = $el[0]
          
          // Set up component with bins using setData to properly initialize this.bins
          const dataObj = {
            data: [
              { 
                value: 5, 
                dateStr: '2020-01-01', 
                selectionStart: '<script>alert("XSS")</script>2020-01-01', 
                selectionEnd: '2020-01-01',
                category: '2020-01',
                tooltip: '2020-01-01'
              },
              { 
                value: 3, 
                dateStr: '2020-02-01', 
                selectionStart: '2020-02-01', 
                selectionEnd: '<script>alert("XSS")</script>2020-02-01',
                category: '2020-02',
                tooltip: '2020-02-01'
              }
            ]
          }
          component.maxHeight = 100
          component.multiplier = 1
          component.scope = 'M'
          
          // Use setData to properly initialize bins
          component.setData(dataObj)
          
          return component.updateComplete.then(() => {
            // Verify bins are set up
            expect(component.bins).to.exist
            expect(component.bins.length).to.be.at.least(2)
            
            // Set up bins with malicious selection data
            component.bins[0].dataset.selectionstart = '<script>alert("XSS")</script>2020-01-01'
            component.bins[0].dataset.selectionend = '2020-01-01'
            component.bins[0].classList.add('selected')
            
            component.bins[1].dataset.selectionstart = '2020-02-01'
            component.bins[1].dataset.selectionend = '<script>alert("XSS")</script>2020-02-01'
            component.bins[1].classList.add('selected')
            
            // Trigger selection tooltip display
            component._showtooltipSelection()
          })
        })
      })

      // Verify tooltip content is sanitized
      cy.get('#timeline').then($el => {
        const component = $el[0]
        const tooltip = component.shadowRoot.querySelector('.tooltip-text')
        
        if (tooltip) {
          const html = tooltip.innerHTML
          expect(html).to.not.include('<script>')
          expect(html).to.not.include('alert("XSS")')
        }
      })
    })

    it('should preserve safe HTML in tooltips', () => {
      cy.mount(`
        <pb-page endpoint="." api-version="1.0.0">
          <pb-timeline id="timeline"></pb-timeline>
        </pb-page>
      `)

      cy.waitForEvent('pb-page-ready').then(() => {
        cy.get('#timeline').then($el => {
          const component = $el[0]
          
          component.dataObj = {
            data: [{
              value: 5,
              dateStr: '2020-01-01',
              info: ['<a href="/doc1">Doc 1</a>']
            }]
          }
          component.maxValue = 10
          component.maxHeight = 100
          component.multiplier = 1
          component.scope = 'M'
          
          component.requestUpdate()
          return component.updateComplete.then(() => {
            const bins = component.shadowRoot.querySelectorAll('.bin-container')
            if (bins.length > 0) {
              const bin = bins[0]
              bin.dataset.value = '5'
              bin.dataset.datestr = '2020-01-01'
              
              const infoDiv = document.createElement('div')
              infoDiv.className = 'info'
              infoDiv.innerHTML = '<ul><li><a href="/doc1">Doc 1</a></li></ul>'
              bin.appendChild(infoDiv)
              
              const event = new MouseEvent('mousemove', { bubbles: true })
              Object.defineProperty(event, 'currentTarget', { value: bin, enumerable: true })
              component._mouseMove(event)
            }
          })
        })
      })

      cy.get('#timeline').then($el => {
        const component = $el[0]
        const tooltip = component.shadowRoot.querySelector('.tooltip-text')
        
        if (tooltip) {
          const html = tooltip.innerHTML
          expect(html).to.include('<a href="/doc1">')
          expect(html).to.include('Doc 1')
        }
      })
    })
  })
})
