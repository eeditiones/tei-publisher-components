// Cypress CT: pb-mei
import '../../../src/pb-mei.js'

const MOCK_SVG = '<svg data-test="mock"></svg>'

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
            // Return bridge instance for v8.0.2 compatibility
            return win.ESGlobalBridge
          },
          instance: {
            load: (name) => {
              // simulate async script load and fire expected event
              setTimeout(() => {
                const evtName = `es-bridge-${name}-loaded`
                win.dispatchEvent(new win.CustomEvent(evtName))
              })
              // Return promise for v8.0.2 compatibility
              return Promise.resolve()
            }
          }
        }
      }
      stubMei(win)
    })
  })

  const baseMarkup = `
    <pb-mei
      id="viewer"
      data="<mei><music/></mei>"
      per-page="2"
    ></pb-mei>
  `

  it('mounts with native toolbar controls', () => {
    cy.mount(baseMarkup)
    cy.get('#viewer').should('exist')
    cy.get('#viewer').find('#toolbar').should('exist')
    cy.get('#viewer')
      .find('button[aria-label="Previous page"]')
      .should('have.attr', 'type', 'button')
    cy.get('#viewer').find('button.pb-button--icon').should('have.length', 2)
  })

  it('renders options as labeled checkboxes', () => {
    const withOption = `
      <pb-mei id="viewer" data="<mei><music/></mei>">
        <pb-option name="appXPath" on="./rdg[1]" off="">Original Clefs</pb-option>
      </pb-mei>
    `
    cy.mount(withOption)
    cy.get('#viewer').find('.option-toggle__control').should('have.attr', 'type', 'checkbox')
    cy.get('#viewer').find('.option-toggle__label').should('contain.text', 'Original Clefs')
  })

  it('works with ESGlobalBridge v8.0.2 API', () => {
    cy.mount(baseMarkup)
    
    cy.window().then(win => {
      // Test that the bridge API works as expected
      const bridge = win.ESGlobalBridge.requestAvailability()
      expect(bridge, 'requestAvailability should return bridge instance').to.exist
      
      // Test that load returns a promise
      const loadPromise = win.ESGlobalBridge.instance.load('test-script')
      expect(loadPromise, 'load should return a promise').to.be.a('promise')
      
      // Verify component still works after bridge operations
      cy.get('#viewer').should('exist')
    })
  })
})
