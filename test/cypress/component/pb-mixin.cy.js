// Cypress CT: pb-mixin + pb-navigation
import '../../../src/pb-page.js'
import { getEmittedChannels, getSubscribedChannels, defaultChannel } from '../../../src/pb-mixin.js'
import '../../../src/pb-navigation.js'

describe('pb-mixin channels', () => {
  it('emits and subscribes to channels', () => {
    cy.mount(`
      <pb-page api-version="1.0.0">
        <pb-navigation subscribe="channel1" emit="channel1"></pb-navigation>
        <pb-navigation subscribe-config='{"channel2": ["pb-ready"], "channel1": ["pb-update"]}' emit="channel1"></pb-navigation>
        <pb-navigation subscribe="channel2" emit="channel2"></pb-navigation>
        <pb-navigation subscribe="channel2" emit-config='{"channel2": ["pb-ready"], "channel1": ["pb-update"]}'></pb-navigation>
        <pb-navigation></pb-navigation>
        <pb-navigation></pb-navigation>
      </pb-page>
    `)
    cy.get('pb-navigation').then($els => {
      const navs = Array.from($els)
      expect(getEmittedChannels(navs[0])).to.have.members(['channel1'])
      expect(getSubscribedChannels(navs[0])).to.have.members(['channel1'])
      expect(getSubscribedChannels(navs[1])).to.have.members(['channel1', 'channel2'])
      expect(navs[0].emitsOnSameChannel(navs[1])).to.be.true
      expect(navs[0].emitsOnSameChannel(navs[2])).to.be.false
      expect(getEmittedChannels(navs[3])).to.have.members(['channel1', 'channel2'])
      expect(navs[0].emitsOnSameChannel(navs[3])).to.be.true
      expect(getEmittedChannels(navs[4])).to.have.members([defaultChannel])
      expect(navs[0].emitsOnSameChannel(navs[4])).to.be.false
      expect(navs[4].emitsOnSameChannel(navs[5])).to.be.true
    })
  })
})
