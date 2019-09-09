import { LitElement, html, css } from 'lit-element';

/**
 * Show or hide contents depending on a media query. This is used to toggle the menubar and drawer.
 * On small displays, the menu will move into the drawer.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-media-query.html
 */
export class PbMediaQuery extends LitElement {
    static get properties() {
        return {
            ...super.properties,
            /**
             * Media query to be watched by the element.
             *
             * Can be modified at run time by setting a new value.
             */
            query: { type: String },
            match: { 
                type: Boolean,
                reflect: true
            }
        };
    }

    constructor() {
        super();
        this.query = '(max-width:460px)';
        this.match = false;
    }

    firstUpdated() {
        // Check if Visual Viewport API is supported
        if (typeof window.visualViewport !== 'undefined') {
            window.visualViewport.addEventListener('resize', () => {
                this._handleResize();
            });
        } else {
            window.addEventListener('resize', () => {
                this._handleResize();
            });
        }
        this._handleResize();
    }

    _handleResize() {
        if (!this.query[0] !== '(') {
            this.query = `(${this.query})`;
        }
        if (window.matchMedia(this.query).matches) {
            // From no match to match
            if (this.match === false) {
                this.dispatchEvent(new CustomEvent('changed', {
                    detail: {
                        value: true
                    },
                    composed: true,
                    bubbles: true
                }));
                this.match = true;
            }
        } else if (this.match === true) {
            this.dispatchEvent(new CustomEvent('changed', {
                detail: {
                    value: false
                },
                composed: true,
                bubbles: true
            }));
            this.match = false;
        }
    }

    render() {
        return html`
            ${this.match ? html`<slot></slot>` : null}
        `;
    }

    static get styles() {
        return css`
            :host {
                display: inherit;
            }
        `;
    }
}
customElements.define('pb-media-query', PbMediaQuery);