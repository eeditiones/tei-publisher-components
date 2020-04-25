import { LitElement, html } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import '@polymer/iron-icons';
import '@polymer/paper-icon-button';

/**
 * Simple component to create repeatable form elements. It expects
 * an HTML template containing arbitrary HTML. For every repeated instance,
 * the template will be copied. All elements with a `name` attribute within the
 * copied template will be renamed to have an `[idx]` suffix denoting their position
 * within the instance list.
 * 
 * The element stamps the instances into light DOM, so a form wrapping around it will see
 * the form controls. One can therefore use a normal form submit.
 *
 */
export class PbRepeat extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * The initial number of (empty) instances to be shown
             * (1 by default).
             */
            initial: {
                type: Number
            },
            _instances: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.initial = 1;
        this._instances = [];
    }

    connectedCallback() {
        super.connectedCallback();

        this.template = this.querySelector('template');

        const params = this.getParameters();
        const sortedParams =
            Object.keys(params)
                .filter((key) => /\[\d+\]$/.test(key))
                .sort();
        if (sortedParams.length > 0) {
            const max = sortedParams[sortedParams.length - 1].replace(/^.*\[(\d+)\]$/, '$1');
            this.initial = parseInt(max, 10);
        }

        if (this._instances.length === 0) {
            for (let i = 0; i < this.initial; i++) {
                this._add(params);
            }
        }
    }

    add() {
        this._add();
        this.requestUpdate();
    }

    _add(params) {
        const idx = this._instances.length + 1;
        const clone = document.importNode(this.template.content, true);
        const wrapper = document.createElement('div');
        wrapper.appendChild(clone);
        wrapper.querySelectorAll('[name]').forEach(input => {
            const name = `${input.name}[${idx}]`;
            if (params && params[name]) {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = params[name] === input.value;
                } else {
                    input.value = params[name];
                }
            }
            input.name = name;
        });
        this._instances.push(wrapper);
    }

    _renumber() {
        this._instances.forEach((instance, idx) => {
            instance.querySelectorAll('[name]').forEach(input => {
                const name = input.name.replace(/^(.*)\[\d+\]$/, '$1');
                input.name = `${name}[${idx + 1}]`;
            });
        });
    }

    delete(idx) {
        this._instances.splice(idx, 1);
        this._renumber();
        this.requestUpdate();
    }

    render() {
        return html`
            <div class="instances">${this._instances.map(this.renderInstance.bind(this))}</div>
            <paper-icon-button icon="add" @click="${this.add}"></paper-icon-button>
        `;
    }

    renderInstance(instance, idx) {
        return html`
            <div class="instance">
                ${instance}
                <paper-icon-button icon="delete" @click="${() => this.delete(idx)}"></paper-icon-button>
            </div>`;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-repeat', PbRepeat);