import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin';


/**
 * @slot - unnamed default slot for link text
 * @fires pb-show-annotation - Fires when mouse hovers over a pb-facs-link, passing image reference and coordinates that pb-facsimile reacts to
 */
export class PbFacsLink extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /** URL pointing to the facsimile image to load */
            facs: {
                type: String
            },
            /** An array of coordinates describing a rectangle to highlight */
            coordinates: {
                type: Array
            },
            label: {
                type: String
            },
            /** 
             * Type of event which should trigger the facsimile to display. 
             * Either 'click' or 'mouseover' (default). */
            trigger: {
                type: String
            },
            /**
             * If set, trigger a `pb-show-annotation` event as soon as the element is initialized.
             * Use this to make `pb-facsimile` or `pb-svg` switch to the given image/coordinates upon
             * load.
             */
            emitOnLoad: {
                type: Boolean,
                attribute: 'emit-on-load'
            }
        };
    }

    constructor() {
        super();
        this.trigger = 'mouseover';
        this.label = '';
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.waitFor) {
            this.waitFor = 'pb-facsimile,pb-image-strip';
        }
        this.wait(() => {
            this.emitTo('pb-load-facsimile', {
                url: this.getImage(),
                element: this
            });
        });
    }

    getImage() {
        return this.facs
    }

    getLabel() {
        return this.label
    }

    firstUpdated() {
        const link = this.shadowRoot.querySelector('a');
        switch (this.trigger) {
            case 'click':
                link.addEventListener('click', this._linkListener.bind(this));
                break;
            default:
                link.addEventListener('mouseover', this._linkListener.bind(this));
                break;
        }
        if (this.emitOnLoad) {
            this._trigger();
        }
    }

    render() {
        return html`<a href="#"><slot></slot></a>`;
    }

    static get styles() {
        return css`
            :host {
            }

            a, a:link {
                text-decoration: none;
                color: inherit;
            }
        `;
    }

    _linkListener(ev) {
        ev.preventDefault();
        this._trigger();
    }

    _trigger() {
        console.log("<facs-link> %s %o", this.facs, this.coordinates);
        this.emitTo('pb-show-annotation', {
            file: this.facs,
            coordinates: this.coordinates
        });
    }

    /**
     * Fires when mouse hovers a pb-facs-link
     *
     * @event pb-show-annotation
     * @param {String} file - reference to facsimile file
     * @param {String} coordinates to highlight
     */
}
customElements.define('pb-facs-link', PbFacsLink);