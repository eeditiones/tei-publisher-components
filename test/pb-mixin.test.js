import { fixture, expect, fixtureCleanup } from '@open-wc/testing';

import '../src/pb-page.js';
import { PbNavigation } from '../src/pb-navigation.js';

describe('emits and subscribes', () => {
    afterEach(() => {
      fixtureCleanup();
    });
    it('emits to channel', async () => {
        const el = (
            await fixture(`
                <pb-page endpoint="${ __karma__.config.endpoint }">
                    <pb-navigation subscribe="channel1" emit="channel1"></pb-navigation>
                    <pb-navigation subscribe-config='{"channel2": ["pb-ready"], "channel1": ["pb-update"]}' emit="channel1">
                    </pb-navigation>
                    <pb-navigation subscribe="channel2" emit="channel2"></pb-navigation>
                    <pb-navigation subscribe="channel2" emit-config='{"channel2": ["pb-ready"], "channel1": ["pb-update"]}'></pb-navigation>
                    <pb-navigation></pb-navigation>
                    <pb-navigation></pb-navigation>
                </pb-page>
            `)
        );
        const navs = el.querySelectorAll('pb-navigation');

        expect(PbNavigation.getEmittedChannels(navs[0])).to.have.members(['channel1']);
        expect(navs[0].getSubscribedChannels()).to.have.members(['channel1']);
        expect(navs[1].getSubscribedChannels()).to.have.members(['channel1', 'channel2']);
        expect(navs[0].emitsOnSameChannel(navs[1])).to.be.true;
        expect(navs[0].emitsOnSameChannel(navs[2])).to.be.false;
        expect(PbNavigation.getEmittedChannels(navs[3])).to.have.members(['channel1', 'channel2']);
        expect(navs[0].emitsOnSameChannel(navs[3])).to.be.true;
        expect(PbNavigation.getEmittedChannels(navs[4])).to.be.empty;
        expect(navs[0].emitsOnSameChannel(navs[4])).to.be.false;
        expect(navs[4].emitsOnSameChannel(navs[5])).to.be.true;
    });
});
