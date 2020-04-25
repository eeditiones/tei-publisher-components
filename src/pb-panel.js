import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import './pb-view.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox';
import '@polymer/paper-item';
import '@polymer/app-layout';

/**
 * A container for different views. Only one view will be shown at a time.
 * Provides a dropdown for the user to switch between views. Views are
 * lazy loaded and should be provided as one or more `<template>` elements.
 * Each `<template>` may have a title attribute to specify the title to be shown
 * for it in the dropdown.
 *
 * ## CSS Variables
 *
 * | Custom property | Description | Default|
 * | ----------------|-------------|--------|
 * |--pb-panel-max-height | The max height of the panel content. Set to enable scrolling. | undefined |
 *
 * @slot - unnamed default slot for content
 * @slot toolbar - toolbar area
 * @fires pb-panel - Fired whenever the component switches to a different content panel. Used by `pb-grid` to update its state.
 * @fires pb-refresh - Fired after a new content panel is shown to allow connected components to refresh.
 */
export class PbPanel extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * the index of the active view
             */
            active: {
                type: Number,
                reflect: true
            },
            /**
             * the label displayed above the dropdown for selecting the view to show
             */
            label: {
                type: String
            },
            /**
             * a name for each available panel, to be displayed in the dropdown. If not set,
             * each template will be checked for a title attribute, which will be taken as name.
             */
            panels: {
                type: Array,
                reflect: true
            }
        };
    }

    constructor() {
        super();
        this.active = 0;
        this.label = 'View';
        this.panels = null;
    }

    connectedCallback() {
        super.connectedCallback();

        if (!this.panels) {
            const titles = [];
            this.querySelectorAll('template').forEach(template => titles.push(template.title));
            this.panels = titles;
        }
        this._show();
    }

    render() {
        return html`
            <app-toolbar>
                <paper-dropdown-menu id="menu" label="${this.label}">
                    <paper-listbox id="panels" slot="dropdown-content" class="dropdown-content" 
                        selected="${this.active}" @selected-item-changed="${this._update}">
                    ${this.panels.map((item) => html`<paper-item>${item}</paper-item>`)}
                    </paper-listbox>
                </paper-dropdown-menu>
                <slot name="toolbar"></slot>
            </app-toolbar>
            <slot></slot>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            app-toolbar {
                padding: 0;
                justify-content: space-between;
            }

            ::slotted(._pb_panel) {
                overflow: auto;
                max-height: calc(var(--pb-panel-max-height) - 72px);
            }

            app-toolbar {
                font-size: 75%;
            }
        `;
    }

    _update() {
        const panel = this.shadowRoot.getElementById('panels').selected;
        if (this.active !== panel) {
            this.active = panel;
            this._show();
        }
    }

    _show() {
        const templates = this.querySelectorAll('template');
        if (this.active >= templates.length) {
            this.active = templates.length - 1;
        }
        console.log('<pb-panel> showing panel %s', this.active);
        this.querySelectorAll('._pb_panel').forEach(div => div.style.display = 'none');
        const existingPanel = this.querySelector('._pb_panel' + this.active);
        if (existingPanel) {
            existingPanel.style.display = '';
        } else {
            const template = templates[this.active];
            const clone = document.importNode(template.content, true);
            const div = document.createElement('div');
            div.className = '_pb_panel _pb_panel' + this.active;
            div.appendChild(clone);
            this.appendChild(div);

            this.emitTo('pb-panel', {
                panel: this,
                active: this.active
            });

            // this.refresh();
        }
    }

    refresh() {
        this.emitTo('pb-refresh', null);
    }

}
customElements.define('pb-panel', PbPanel);