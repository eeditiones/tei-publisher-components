import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';

/**
 *
 *
 * @returns {CustomElementConstructor} pb-image-strip
 * @appliesMixin pbMixin
 */
export class PbImageStrip extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * Array of image
             *
             */
            items: {
                type: Array
            },
            imageWidth: {
                attribute: 'image-width',
                type: Number
            },
            imageHeight: {
                attribute: 'image-height',
                type: Number
            },
            baseUri: {
                attribute: 'base-uri',
                type: String
            }
        };
    }

    constructor() {
        super();
        this.items = []
        this.urls = new Set()
        this.imageHeight = 80
        this.imageWidth = 64
    }

    connectedCallback() {
        super.connectedCallback();
        this.subscribeTo('pb-start-update', () => {
            this.items = []
            this.urls = new Set()
            this.requestUpdate(this.items)
        });
        this.subscribeTo('pb-load-facsimile', e => {
            const { element } = e.detail
            const url = element.getImage()
            if (this.urls.has(url)) { return }
            this.urls.add(url)
            this.items.push(element)
            this.requestUpdate()
        });
    }

    showIt(item) {
        this.emitTo('pb-show-annotation', { file: item.getImage() })
    }

    renderItem(item) {
        return html`
            <figure class="strip-item" @click="${() => this.showIt(item)}">
                <img height="${this.imageHeight}" width="${this.imageWidth}" 
                    src="${this.baseUri}${item.getImage()}/full/${this.imageWidth},${this.imageHeight}/0/default.jpg">
                <figcaption>${item.getLabel()}</figcaption>
            </figure>
        `
    }

    render() {
        return html`${this.items.map(item => this.renderItem(item))}`;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }
}
if (!customElements.get('pb-image-strip')) {
    customElements.define('pb-image-strip', PbImageStrip);
}