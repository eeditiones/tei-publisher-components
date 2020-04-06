import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';


/**
 * A drawer component used e.g. for table-of-contents.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-drawer.html
 * @appliesMixin pbMixin
 */
export class PbDrawer extends pbMixin(LitElement) {
    static get properties() {
        const props = {
            /**
             * optional id reference to a component that allows opening/closing the drawer
             */
            toggle: {
                type: String
            },
            /**
             * Boolean reflecting the opened/closed state of the drawer
             */
            opened: {
                type: Boolean,
                reflect: true
            }
        };
        return Object.assign(props, super.properties);
    }

    constructor() {
        super();
        this.opened = false;
    }

    connectedCallback() {
        super.connectedCallback();

        const toggle = document.getElementById(this.toggle);
        if (toggle) {
            toggle.addEventListener('click', this._toggle.bind(this));
        }

        document.body.addEventListener('click', (ev) => {
            if (ev.target !== toggle && this.opened) {
                this.opened = false;
            }
        });

        this.addEventListener('click', (ev) => ev.stopPropagation());

        this.subscribeTo('pb-refresh', this._close.bind(this));
    }

    _toggle(ev) {
        ev.preventDefault();
        if (this.opened) {
            this.opened = false;
        } else {
            this.opened = true;
            this.emitTo('pb-load');
        }
    }

    _close() {
        this.opened = false;
    }

    render() {
        return html`
            <div><slot></slot></div>
        `;
    }

    static get styles() {
        return css`
            :host {
                position: fixed;
                width: 0;
                left: -448px;
                bottom: 0;
                height: 100vh;
                z-index: 1000;
                overflow: auto;
                display: block;
                transition: .5s;
                background: white;
            }

            :host([opened]) {
                left: 0;
                width: 448px;
                transition: .5s;
            }

            div {
                padding: 10px 10px;
            }
        `;
    }
}
customElements.define('pb-drawer', PbDrawer);