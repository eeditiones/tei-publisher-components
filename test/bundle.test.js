import { expect } from '@open-wc/testing';
import { cleanup } from './util.js';

describe('Components bundle', () => {
  const oldCustomElementsDefine = window.customElements.define;
  const definedElements = new Map();
  beforeEach(() => {
    window.customElements.define = (name, constructorFn) => {
      definedElements.set(name, constructorFn);
    };
  });
  afterEach(() => {
    cleanup();
    window.customElements.define = oldCustomElementsDefine;
  });
  it('can be loaded', async () => {
    await import('../dist/pb-components-bundle.js');

    expect(definedElements.has('pb-page')).to.be.true;
  });
});
