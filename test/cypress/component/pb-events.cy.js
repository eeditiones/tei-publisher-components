// Cypress CT: Event bus tests
import '../../../src/pb-events.js'
import { PbEvents } from '../../../src/pb-events.js'

describe('PbEvents', () => {
  it('subscribes to default channel', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribe('pb-update', null, () => resolve())
      PbEvents.emit('pb-update')
    })
  })

  it('subscribes to single channel with details (once)', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribeOnce('pb-update', 'translation').then(ev => {
        expect(ev.detail.foo).to.equal('baz')
        resolve()
      })
      PbEvents.emit('pb-update', 'translation', { foo: 'baz' })
    })
  })
})
