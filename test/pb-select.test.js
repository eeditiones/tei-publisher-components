import { expect, waitUntil } from '@open-wc/testing';
import { waitForPage, cleanup } from './util.js';
import '../src/pb-select.js';
import '../src/pb-page.js';
import '@polymer/paper-item';
import '@polymer/iron-form';

describe('simple select', () => {
    afterEach(cleanup);

    it('submits in form', async () => {
        const el = (
            await waitForPage(`
                <pb-page endpoint="." api-version="1.0.0">
                    <iron-form id="form">
                        <form action="">
                            <pb-select label="Dinosaurs" name="key" value="1">
                                <paper-item></paper-item>
                                <paper-item value="0">Item 0</paper-item>
                                <paper-item value="1">Item 1</paper-item>
                                <paper-item value="2">Item 2</paper-item>
                                <paper-item value="3">Item 3</paper-item>
                            </pb-select>
                        </form>
                    </iron-form>
                </pb-page>
            `)
        );
        
        const form = el.querySelector('iron-form');
        const select = el.querySelector('pb-select');

        expect(form.serializeForm()).to.deep.equal({'key': '1'});
        expect(select.value).to.equal('1');

        select.value = "2";
        await select.updateComplete;
        expect(form.serializeForm()).to.deep.equal({'key': '2'});
    });
    it('supports multiple selection', async () => {
        const el = await waitForPage(`
                <pb-page endpoint="." api-version="1.0.0">
                    <iron-form id="form">
                        <form action="">
                            <pb-select label="Items" name="key" values='["1"]' multi>
                                <paper-item></paper-item>
                                <paper-item value="0">Item 0</paper-item>
                                <paper-item value="1">Item 1</paper-item>
                                <paper-item value="2">Item 2</paper-item>
                                <paper-item value="3">Item 3</paper-item>
                            </pb-select>
                        </form>
                    <iron-form id="form">
                </pb-page>
            `);

        const form = el.querySelector('iron-form');
        const select = el.querySelector('pb-select');
        expect(form.serializeForm()).to.deep.equal({'key': "1"});
        expect(select.values).to.deep.equal(['1']);

        select.values = ["2", "3"];
        await select.updateComplete;
        expect(select.values).to.deep.equal(['2', '3']);
        
        expect(form.serializeForm()).to.deep.equal({'key': ["2", "3"]});
    });
    it('works in standard HTML form', async () => {
        const el = await waitForPage(`
                <pb-page endpoint="." api-version="1.0.0">
                    <form action="" id="form">
                        <pb-select label="Items" name="key" values='["1", "2"]' multi>
                            <paper-item></paper-item>
                            <paper-item value="0">Item 0</paper-item>
                            <paper-item value="1">Item 1</paper-item>
                            <paper-item value="2">Item 2</paper-item>
                            <paper-item value="3">Item 3</paper-item>
                        </pb-select>
                    </form>
                </pb-page>
            `);

        const form = el.querySelector('form');
        const data = new URLSearchParams(new FormData(form)).toString();
        expect(data).to.equal('key=1&key=2');
    });
});

describe('select initialized from remote data source', () => {
    afterEach(cleanup);

    it('submits in form', async () => {
        const el = await waitForPage(`
                <pb-page endpoint="." api-version="1.0.0">
                    <iron-form id="form">
                        <form action="">
                            <pb-select label="Language" name="lang" value="de" source="demo/select.json"></pb-select>
                        </form>
                    </iron-form>
                </pb-page>
            `);

        const select = el.querySelector('pb-select');
        await waitUntil(() => select._items.length > 0);
        
        const form = el.querySelector('iron-form');
        expect(form.serializeForm()).to.deep.equal({'lang': 'de'});

        select.value = "en";
        await select.updateComplete;
        expect(form.serializeForm()).to.deep.equal({'lang': 'en'});
    });
});