import { expect, waitUntil } from '@open-wc/testing';
import { waitForPage, cleanup } from './util.js';
import '../src/pb-page.js';
import '../src/pb-document.js';
import '../src/pb-view.js';
import '../src/pb-formula.js';

describe('format mathematical formulas', () => {
    afterEach(cleanup);

    it('formats TeX math in display mode', async () => {
        const el = await waitForPage(`
            <pb-page api-version="1.0.0">
                <pb-formula display>\\frac{y}{z^{m-1}}+\\frac{\\overline{m-1}^{2}y}{z^{m+1}}=Q</pb-formula>
            </pb-page>
        `);
        const formula = el.querySelector('pb-formula');
        await waitUntil(() => formula.hasAttribute('loaded'));

        expect(formula).to.have.attribute('source', '\\frac{y}{z^{m-1}}+\\frac{\\overline{m-1}^{2}y}{z^{m+1}}=Q');
        expect(formula).to.contain('mjx-container');
        const container = formula.querySelector('mjx-container');
        expect(container).to.have.attribute('display', 'true');
    });
    it('formats TeX math in inline mode', async () => {
        const el = await waitForPage(`
            <pb-page api-version="1.0.0">
                <h2>Formula in heading: <pb-formula>a^{2}\\dot{x}+x\\dot{y}^{2}=0</pb-formula></h2>
            </pb-page>
        `);
        const formula = el.querySelector('pb-formula');
        await waitUntil(() => formula.hasAttribute('loaded'));

        expect(formula).to.have.attribute('source', 'a^{2}\\dot{x}+x\\dot{y}^{2}=0');
        expect(formula).to.contain('mjx-container');
        const container = formula.querySelector('mjx-container');
        expect(container).to.not.have.attribute('display');
    });
    it('formats MathML math in display mode', async () => {
        const el = await waitForPage(`
            <pb-page api-version="1.0.0">
                <pb-formula>
                    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                        <msqrt>
                        <mn>3</mn>
                        <mi>x</mi>
                        <mo>&#x2212;<!-- − --></mo>
                        <mn>1</mn>
                        </msqrt>
                        <mo>+</mo>
                        <mo stretchy="false">(</mo>
                        <mn>1</mn>
                        <mo>+</mo>
                        <mi>x</mi>
                        <msup>
                        <mo stretchy="false">)</mo>
                        <mn>2</mn>
                        </msup>
                    </math>
                </pb-formula>
            </pb-page>
        `);
        const formula = el.querySelector('pb-formula');
        await waitUntil(() => formula.hasAttribute('loaded'));

        expect(formula).to.contain('mjx-container');
    });
    it('reports error in TeX notation', async () => {
        const el = await waitForPage(`
            <pb-page api-version="1.0.0">
                <pb-formula display>\\frac{1}{z</pb-formula>
            </pb-page>
        `);
        const formula = el.querySelector('pb-formula');
        await waitUntil(() => formula.hasAttribute('loaded'));

        const err = formula.querySelector('mjx-merror');
        expect(err).to.exist;
        expect(err).to.have.attribute('data-mjx-error', 'Missing close brace');
        
    });
});

describe('mathematical formulas in pb-view', () => {
    afterEach(cleanup);

    it('shows formulas after loading text via pb-view', async () => {
        const el =
            await waitForPage(`
                <pb-page endpoint="${ __karma__.config.endpoint }">
                    <pb-document id="document1" path="test/euler_algebra02_1770.TEI-P5.xml" odd="dta" view="page"></pb-document>
                    <pb-view src="document1" node-id="3.4.2.7.20.51.5.27"></pb-view>
                </pb-page>
            `, 'pb-end-update');
        const view = el.querySelector('pb-view');
        const formula = view.shadowRoot.querySelector('pb-formula');
        expect(formula).to.exist;
        await waitUntil(() => formula.hasAttribute('loaded'));
        expect(formula).to.contain('mjx-container');
    });
});