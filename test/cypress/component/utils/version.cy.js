// Cypress CT: utils/version.js
import { cmpVersion, minVersion } from '../../../../src/utils/version.js'

describe('version utilities', () => {
  describe('cmpVersion', () => {
    it('should return -1 when first version is less than second', () => {
      expect(cmpVersion('1.2.3', '1.3.0')).to.equal(-1)
      expect(cmpVersion('1.0.0', '2.0.0')).to.equal(-1)
      expect(cmpVersion('1.9.9', '2.0.0')).to.equal(-1)
    })

    it('should return 1 when first version is greater than second', () => {
      expect(cmpVersion('1.3.0', '1.2.3')).to.equal(1)
      expect(cmpVersion('2.0.0', '1.0.0')).to.equal(1)
      expect(cmpVersion('2.0.0', '1.9.9')).to.equal(1)
    })

    it('should return 0 when versions are equal', () => {
      expect(cmpVersion('1.0.0', '1.0.0')).to.equal(0)
      expect(cmpVersion('2.3.4', '2.3.4')).to.equal(0)
    })

    it('should handle different version lengths', () => {
      expect(cmpVersion('1.2', '1.2.0')).to.equal(0)
      expect(cmpVersion('1.2.3', '1.2')).to.equal(1)
      expect(cmpVersion('1.2', '1.2.3')).to.equal(-1)
    })

    it('should handle numeric versions', () => {
      expect(cmpVersion(1, 2)).to.equal(-1)
      expect(cmpVersion(2, 1)).to.equal(1)
      expect(cmpVersion(1, 1)).to.equal(0)
    })
  })

  describe('minVersion', () => {
    it('should return true when given version meets or exceeds required', () => {
      expect(minVersion('1.2.0', '1.1.0')).to.be.true
      expect(minVersion('1.2.0', '1.2.0')).to.be.true
      expect(minVersion('2.0.0', '1.9.9')).to.be.true
    })

    it('should return false when given version is less than required', () => {
      expect(minVersion('1.0.0', '1.1.0')).to.be.false
      expect(minVersion('1.1.0', '1.2.0')).to.be.false
    })

    it('should handle numeric versions', () => {
      expect(minVersion(2, 1)).to.be.true
      expect(minVersion(1, 2)).to.be.false
    })
  })
})
