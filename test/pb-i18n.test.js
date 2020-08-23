import { oneEvent, fixture, expect, waitUntil } from '@open-wc/testing';

import '../src/pb-page.js';
import '../src/pb-i18n.js';

describe('translate labels', () => {
    it('uses default translations', async () => {
        let initDone;
        document.addEventListener('pb-i18n-update', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page require-language language="en">
                    <span data-i18n="document.contents">unset</span>
                    <a href="#" data-i18n="[title]menu.download.title" title="123"></a>
                    <pb-i18n key="browse.items" options='{"count": 10}'>Items</pb-i18n>
                    <pb-i18n key="undefined">[No translation provided]</pb-i18n>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);

        let node = el.querySelector('span');
        expect(node).to.have.text('Contents');

        node = el.querySelector('pb-i18n[key="browse.items"]');
        expect(node._translated).to.equal('Found 10 items');

        node = el.querySelector('pb-i18n[key="undefined"]');
        expect(node._translated).to.be.undefined;

        node = el.querySelector('a');
        expect(node.title).to.equal('Download');
    });

    it('reacts to language change', async () => {
        let initDone;
        document.addEventListener('pb-i18n-update', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page require-language>
                    <span data-i18n="document.contents">unset</span>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);

        document.dispatchEvent(new CustomEvent('pb-i18n-language', { detail: { "language": "de" }}));
        await oneEvent(document, 'pb-i18n-update');

        const node = el.querySelector('span');
        expect(node).to.have.text('Inhalt');
    });

    it('loads custom translations', async () => {
        let initDone;
        document.addEventListener('pb-i18n-update', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page require-language language="en" locales="demo/i18n/{{ns}}_{{lng}}.json" locale-fallback-ns="app custom">
                    <pb-i18n key="demo.message"></pb-i18n>
                    <span data-i18n="document.contents">unset</span>
                    <pb-i18n key="document.normalized"></pb-i18n>
                    <pb-i18n key="mycomponent.info"></pb-i18n>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);

        const span = el.querySelector('span');
        expect(span).to.have.text('Custom Table of Contents');

        let i18n = el.querySelector('pb-i18n[key="demo.message"]');
        expect(i18n.shadowRoot).to.have.text('User defined message');

        // app_en does not overwrite document.normalized - should fall back to default
        i18n = el.querySelector('pb-i18n[key="document.normalized"]');
        expect(i18n.shadowRoot).to.have.text('Normalized View');

        i18n = el.querySelector('pb-i18n[key="mycomponent.info"]');
        expect(i18n.shadowRoot).to.have.text('An information coming from a custom component');
    });

    it('translates to German', async () => {
        let initDone;
        document.addEventListener('pb-i18n-update', () => {
            initDone = true;
        });
        const el = (
            await fixture(`
                <pb-page require-language language="de" locales="demo/i18n/{{ns}}_{{lng}}.json" locale-fallback-ns="app custom">
                    <pb-i18n key="demo.message"></pb-i18n>
                    <span data-i18n="document.contents">unset</span>
                    <pb-i18n key="document.normalized"></pb-i18n>
                    <pb-i18n key="mycomponent.info"></pb-i18n>
                </pb-page>
            `)
        );
        await waitUntil(() => initDone);

        const span = el.querySelector('span');
        expect(span).to.have.text('Inhaltsverzeichnis angepasst');

        let i18n = el.querySelector('pb-i18n[key="demo.message"]');
        expect(i18n.shadowRoot).to.have.text('Benutzerdefinierte Nachricht');

        // app_en does not overwrite document.normalized - should fall back to default
        i18n = el.querySelector('pb-i18n[key="document.normalized"]');
        expect(i18n.shadowRoot).to.have.text('Normalisierte Ansicht');

        i18n = el.querySelector('pb-i18n[key="mycomponent.info"]');
        expect(i18n.shadowRoot).to.have.text('Informationen einer Erweiterungskomponente');
    });
});