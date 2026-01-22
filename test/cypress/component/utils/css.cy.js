// Cypress CT: utils/css.js
import { getCSSProperty } from '../../../../src/utils/css.js'

describe('getCSSProperty utility', () => {
  it('should return parsed JSON value from CSS custom property', () => {
    cy.mount('<div id="test-element"></div>')
    cy.get('#test-element').then($el => {
      // Set CSS custom property with JSON value
      $el[0].style.setProperty('--pb-config', '{"enabled": true}')
      const config = getCSSProperty($el[0], '--pb-config', {})
      expect(config).to.deep.equal({ enabled: true })
    })
  })

  it('should return default value when CSS property does not exist', () => {
    cy.mount('<div id="test-element">Test</div>')
    cy.get('#test-element').then($el => {
      const value = getCSSProperty($el[0], '--pb-nonexistent', 'default')
      expect(value).to.equal('default')
    })
  })

  it('should return default value when JSON parsing fails', () => {
    cy.mount('<div id="test-element"></div>')
    cy.get('#test-element').then($el => {
      $el[0].style.setProperty('--pb-invalid', 'not-json')
      const value = getCSSProperty($el[0], '--pb-invalid', 'fallback')
      expect(value).to.equal('fallback')
    })
  })

  it('should handle numeric values in CSS', () => {
    cy.mount('<div id="test-element"></div>')
    cy.get('#test-element').then($el => {
      $el[0].style.setProperty('--pb-number', '42')
      const value = getCSSProperty($el[0], '--pb-number', 0)
      // JSON.parse('42') returns number 42
      expect(value).to.equal(42)
    })
  })

  it('should handle string values that are valid JSON', () => {
    cy.mount('<div id="test-element"></div>')
    cy.get('#test-element').then($el => {
      $el[0].style.setProperty('--pb-string', '"hello"')
      const value = getCSSProperty($el[0], '--pb-string', 'default')
      expect(value).to.equal('hello')
    })
  })

  it('should handle boolean values', () => {
    cy.mount('<div id="test-element"></div>')
    cy.get('#test-element').then($el => {
      $el[0].style.setProperty('--pb-bool', 'true')
      const value = getCSSProperty($el[0], '--pb-bool', false)
      expect(value).to.equal(true)
    })
  })
})
