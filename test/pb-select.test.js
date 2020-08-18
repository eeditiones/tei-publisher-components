import { oneEvent, fixture, expect, waitUntil } from '@open-wc/testing';
import '../src/pb-select.js';
import '../src/pb-page.js';
import '@polymer/paper-item';


function serializeForm(form) {
    return new URLSearchParams(new FormData(form)).toString();
}

describe('simple select', () => {
    it('submits in form', async () => {
        let initDone;
        document.addEventListener('pb-page-ready', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page>
                    <form action="">
                        <pb-select label="Dinosaurs" name="key" value="1">
                            <paper-item></paper-item>
                            <paper-item value="0">Item 0</paper-item>
                            <paper-item value="1">Item 1</paper-item>
                            <paper-item value="2">Item 2</paper-item>
                            <paper-item value="3">Item 3</paper-item>
                        </pb-select>
                        <button type="submit">Submit</button>
                    </form>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);
        
        const form = el.querySelector('form');
        expect(serializeForm(form)).to.equal('key=1');

        const select = el.querySelector('pb-select');
        select.value = "2";
        await select.updateComplete;
        expect(serializeForm(form)).to.equal('key=2');
    });

    it('supports i18n', async () => {
        let initDone;
        document.addEventListener('pb-page-ready', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page>
                    <form action="">
                        <pb-select label="browse.title" name="index" value="div">
                            <paper-item value="div"><pb-i18n key="appgen.view.div"></pb-i18n></paper-item>
                            <paper-item value="page"><pb-i18n key="appgen.view.page"></pb-i18n></paper-item>
                        </pb-select>
                        <button type="submit">Submit</button>
                    </form>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);

        const form = el.querySelector('form');
        expect(serializeForm(form)).to.equal('index=div');

        const select = el.querySelector('pb-select');
        const list = select.shadowRoot.getElementById('list');
        console.log(list);
    });
});