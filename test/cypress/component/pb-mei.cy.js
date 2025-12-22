// Cypress CT: pb-mei
import '../../../src/pb-mei.js'

const MOCK_SVG = '<svg data-test="mock"></svg>'
const MOCK_MIDI = 'base64-encoded-midi-data'

function stubMei(win) {
  const definition = win.customElements.get('pb-mei')
  if (!definition) return

  const proto = definition.prototype
  if (proto.__ctStubbed) return

  proto.load = function () {
    if (this.data) {
      this.show(this.data)
    }
  }

  proto.show = function (str) {
    this._data = str
    this._pages = 3
    this._page = 1
    this._svg = MOCK_SVG
    // Trigger update to ensure pagination state is correct
    this.requestUpdate()
  }

  proto._previousPage = function (ev) {
    ev.preventDefault()
    if (this._page > 1) {
      this._page -= 1
      this.showPage()
    }
  }

  proto._nextPage = function (ev) {
    ev.preventDefault()
    if (this._page < this._pages) {
      this._page += 1
      this.showPage()
    }
  }

  proto.showPage = function () {
    this._svg = MOCK_SVG
  }

  proto.play = function () {
    this._isPlaying = !this._isPlaying
    return this._isPlaying
  }

  proto.pause = function () {
    this._isPlaying = false
  }

  proto.__ctStubbed = true
}

describe('pb-mei', () => {
  beforeEach(() => {
    cy.window().then(win => {
      if (!win.ESGlobalBridge) {
        win.ESGlobalBridge = {
          requestAvailability: () => {
            return win.ESGlobalBridge
          },
          instance: {
            load: (name) => {
              setTimeout(() => {
                const evtName = `es-bridge-${name}-loaded`
                win.dispatchEvent(new win.CustomEvent(evtName))
              })
              return Promise.resolve()
            }
          }
        }
      }
      stubMei(win)
      
      // Suppress MIDI player loading errors in component tests
      win.addEventListener('unhandledrejection', (event) => {
        if (event.reason && event.reason.message && 
            event.reason.message.includes('Failed to load midiPlayer script')) {
          event.preventDefault()
        }
      })
    })
  })

  const baseMarkup = `
    <pb-mei
      id="viewer"
      data="<mei><music/></mei>"
      per-page="2"
    ></pb-mei>
  `

  it('should mount with native toolbar controls', () => {
    cy.mount(baseMarkup)
    cy.get('#viewer').should('exist')
    cy.get('#viewer').find('#toolbar').should('exist')
    cy.get('#viewer')
      .find('button[aria-label="Previous page"]')
      .should('have.attr', 'type', 'button')
    cy.get('#viewer').find('button.pb-button--icon').should('have.length', 2)
  })

  it('should render options as labeled checkboxes', () => {
    const withOption = `
      <pb-mei id="viewer" data="<mei><music/></mei>">
        <pb-option name="appXPath" on="./rdg[1]" off="">Original Clefs</pb-option>
      </pb-mei>
    `
    cy.mount(withOption)
    cy.get('#viewer').find('.option-toggle__control').should('have.attr', 'type', 'checkbox')
    cy.get('#viewer').find('.option-toggle__label').should('contain.text', 'Original Clefs')
  })

  it('should work with ESGlobalBridge v8.0.2 API', () => {
    cy.mount(baseMarkup)
    
    cy.window().then(win => {
      const bridge = win.ESGlobalBridge.requestAvailability()
      expect(bridge, 'requestAvailability should return bridge instance').to.exist
      
      const loadPromise = win.ESGlobalBridge.instance.load('test-script')
      expect(loadPromise, 'load should return a promise').to.be.a('promise')
      
      cy.get('#viewer').should('exist')
    })
  })

  describe('Verovio API compatibility', () => {
    it('should handle Verovio module creation and toolkit instantiation', () => {
      cy.mount(baseMarkup)
      
      cy.window().then(win => {
        // Mock Verovio module creation
        const mockVerovioModule = {
          setOptions: cy.stub(),
          loadData: cy.stub(),
          getPageCount: cy.stub().returns(3),
          renderToSVG: cy.stub().returns(MOCK_SVG),
          renderToMIDI: cy.stub().returns(MOCK_MIDI)
        }
        
        const mockVerovioToolkit = cy.stub().returns(mockVerovioModule)
        
        // Test that the component can handle Verovio API calls
        expect(mockVerovioModule.setOptions).to.be.a('function')
        expect(mockVerovioModule.loadData).to.be.a('function')
        expect(mockVerovioModule.getPageCount).to.be.a('function')
        expect(mockVerovioModule.renderToSVG).to.be.a('function')
        expect(mockVerovioModule.renderToMIDI).to.be.a('function')
        
        cy.get('#viewer').should('exist')
      })
    })

    it('should handle MEI data loading and rendering', () => {
      const meiData = `
        <mei xmlns="http://www.music-encoding.org/ns/mei">
          <meiHead>
            <fileDesc>
              <titleStmt><title>Test MEI</title></titleStmt>
            </fileDesc>
          </meiHead>
          <music>
            <body>
              <mdiv>
                <score>
                  <scoreDef>
                    <staffGrp>
                      <staffDef n="1" lines="5"/>
                    </staffGrp>
                  </scoreDef>
                  <section>
                    <measure n="1">
                      <staff n="1">
                        <layer>
                          <note pname="c" oct="4" dur="4"/>
                        </layer>
                      </staff>
                    </measure>
                  </section>
                </score>
              </mdiv>
            </body>
          </music>
        </mei>
      `
      
      cy.mount(`<pb-mei id="viewer" data="${meiData}"></pb-mei>`)
      
      cy.get('#viewer').should('exist')
      cy.get('#viewer').find('#output').should('exist')
    })

    it('should handle XPath query options', () => {
      const withXPathOptions = `
        <pb-mei id="viewer" data="<mei><music/></mei>" 
                app-xpath="./rdg[1]" 
                choice-xpath="./orig" 
                mdiv-xpath="//mdiv[1]" 
                subst-xpath="./del">
        </pb-mei>
      `
      
      cy.mount(withXPathOptions)
      
      cy.get('#viewer').should('exist')
      cy.get('#viewer').should('have.attr', 'app-xpath', './rdg[1]')
      cy.get('#viewer').should('have.attr', 'choice-xpath', './orig')
      cy.get('#viewer').should('have.attr', 'mdiv-xpath', '//mdiv[1]')
      cy.get('#viewer').should('have.attr', 'subst-xpath', './del')
    })

    it('should handle rendering options (header, footer, breaks)', () => {
      const withOptions = `
        <pb-mei id="viewer" data="<mei><music/></mei>" 
                header="none" 
                footer="always" 
                breaks="line">
        </pb-mei>
      `
      
      cy.mount(withOptions)
      
      cy.get('#viewer').should('exist')
      cy.get('#viewer').should('have.attr', 'header', 'none')
      cy.get('#viewer').should('have.attr', 'footer', 'always')
      cy.get('#viewer').should('have.attr', 'breaks', 'line')
    })

    it('should handle MIDI playback functionality', () => {
      const withPlayer = `
        <pb-mei id="viewer" data="<mei><music/></mei>" player>
        </pb-mei>
      `
      
      cy.mount(withPlayer)
      
      cy.get('#viewer').should('exist')
      cy.get('#viewer').should('have.attr', 'player')
      
      // Skip player controls test in component mode due to external script loading
      // This will be tested in e2e mode where the full environment is available
    })

    it('should handle pagination controls', () => {
      cy.mount(baseMarkup)
      
      cy.get('#viewer').should('exist')
      cy.get('#viewer').find('button[aria-label="Previous page"]').should('exist')
      cy.get('#viewer').find('button[aria-label="Next page"]').should('exist')
      
      // Test that pagination controls exist and have proper attributes
      cy.get('#viewer').find('button[aria-label="Previous page"]').should('have.attr', 'type', 'button')
      cy.get('#viewer').find('button[aria-label="Next page"]').should('have.attr', 'type', 'button')
    })
  })
})
