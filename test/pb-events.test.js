import { expect } from '@open-wc/testing';
import { PbEvents } from '../src/pb-events.js';

describe('emits and subscribes', () => {
  it('subscribes to default channel', done => {
    PbEvents.subscribe('pb-update', null, () => done());
    PbEvents.emit('pb-update');
  });
  it('subscribes to single channel', done => {
    PbEvents.subscribe('pb-update', 'transcription', () => done());
    PbEvents.emit('pb-update', 'transcription');
  });
  it('subscribes to multiple channels', done => {
    PbEvents.subscribe('pb-update', ['transcription', 'translation'], () => done());
    PbEvents.emit('pb-update', 'translation');
  });
  it('subscribes to default channel with details', done => {
    PbEvents.subscribe(
      'pb-update',
      null,
      ev => {
        expect(ev.detail.foo).to.equal('baz');
        done();
      },
      true,
    );
    PbEvents.emit('pb-update', null, {
      foo: 'baz',
    });
  });
  it('subscribes to multiple channels with details', done => {
    PbEvents.subscribe(
      'pb-update',
      ['transcription', 'translation'],
      ev => {
        expect(ev.detail.foo).to.equal('baz');
        done();
      },
      true,
    );
    PbEvents.emit('pb-update', 'translation', {
      foo: 'baz',
    });
  });
  it('subscribes to default channel once', done => {
    PbEvents.subscribeOnce('pb-update').then(() => done());
    PbEvents.emit('pb-update');
  });
  it('subscribes to single channel once', done => {
    PbEvents.subscribeOnce('pb-update', 'translation').then(() => done());
    PbEvents.emit('pb-update', 'translation');
  });
  it('subscribes to multiple channels once', done => {
    PbEvents.subscribeOnce('pb-update', ['transcription', 'translation']).then(() => done());
    PbEvents.emit('pb-update', 'translation');
  });
  it('subscribes to default channel once with details', done => {
    PbEvents.subscribeOnce('pb-update').then(ev => {
      expect(ev.detail.foo).to.equal('baz');
      done();
    });
    PbEvents.emit('pb-update', null, {
      foo: 'baz',
    });
  });
  it('subscribes to single channel once with details', done => {
    PbEvents.subscribeOnce('pb-update', 'translation').then(ev => {
      expect(ev.detail.foo).to.equal('baz');
      done();
    });
    PbEvents.emit('pb-update', 'translation', {
      foo: 'baz',
    });
  });
});
