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

  it('subscribes to single channel', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribe('pb-update', 'transcription', () => resolve())
      PbEvents.emit('pb-update', 'transcription')
    })
  })

  it('subscribes to multiple channels', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribe('pb-update', ['transcription', 'translation'], () => resolve())
      PbEvents.emit('pb-update', 'translation')
    })
  })

  it('subscribes to default channel with details', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribe(
        'pb-update',
        null,
        ev => {
          expect(ev.detail.foo).to.equal('baz')
          resolve()
        },
        true,
      )
      PbEvents.emit('pb-update', null, { foo: 'baz' })
    })
  })

  it('subscribes to multiple channels with details', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribe(
        'pb-update',
        ['transcription', 'translation'],
        ev => {
          expect(ev.detail.foo).to.equal('baz')
          resolve()
        },
        true,
      )
      PbEvents.emit('pb-update', 'translation', { foo: 'baz' })
    })
  })

  it('subscribes to default channel once', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribeOnce('pb-update').then(() => resolve())
      PbEvents.emit('pb-update')
    })
  })

  it('subscribes to multiple channels once', () => {
    return new Cypress.Promise(resolve => {
      PbEvents.subscribeOnce('pb-update', ['transcription', 'translation']).then(() => resolve())
      PbEvents.emit('pb-update', 'translation')
    })
  })
})
