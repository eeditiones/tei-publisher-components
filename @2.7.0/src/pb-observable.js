import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';

const _scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const observable = entry.target;
            observable.emitTo('pb-visible', { data: observable.data });
        }
    });
});

/**
 * An observable element, which will emit a signal `pb-visible` whenever
 * it becomes visible on the viewport. Use it to determine the current position
 * within a scrollable area.
 * 
 * @fires pb-visible - fired when the element becomes visible on the viewport
 */
export class PbObservable extends pbMixin(LitElement) {
    static get properties() {
        return {
            /**
             * Payload data to be passed with the event
             */
            data: {
                type: String
            },
            ...super.properties
        };
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (_scrollObserver) {
            _scrollObserver.unobserve(this);
        }
    }

    firstUpdated() {
        _scrollObserver.observe(this);
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return css`
            :host {
                display: inline;
            }
        `;
    }
}
customElements.define('pb-observable', PbObservable);