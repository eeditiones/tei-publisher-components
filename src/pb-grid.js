import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import './pb-panel.js';

/**
 * A component to create a column layout based upon CSS grid. It offers methods for dynamically changing
 * the layout by adding or removing panels at runtime.
 *
 * @slot - default unnamed slot for the panel
 * @fires pb-refresh - Fired after a new column has been added to allow connected components to refresh.
 * @fires pb-panel - When received, updates the list of panels to show
 * @cssprop --pb-grid-column-widths - Columns width specified according to the grid-template-columns property of the CSS Grid Layout
 * @cssprop --pb-grid-column-gap - Width of the gap between columns
 */
export class PbGrid extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * an array of panel items to display when the component is loaded. It should contain a
             * number for each panel to show, indicating the ordinal position of the template within the `<pb-panel>`
             * to initialize. For example, if you have two templates in `<pb-panel>`: "transcription" and "translation",
             * setting `panels="[0, 1]"` will show two columns, one with the transcription, the other with the translation.
             *
             * Passing in a browser parameter `panels` with a comma-separated list will set this property as well.
             */
            panels: {
                type: Array
            },
            direction: {
                type: String
            },
            /**
             * the number of columns
             */
            _columns: {
                type: Number
            },
            /**
             * CSS Selektor to choose elements to animate. If not specified all 'pb-view' elements will be animated by default.
             */
            animated: {
                type: String
            },
            /**
             * wether to animate the view when new page is loaded. Defaults to 'false' meaning that no
             * animation takes place.
             */
            animation: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.direction = 'ltr';
        this.animated = 'pb-view';
        this.animation = false;
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-panel', ev => {
            const idx = Array.from(this.shadowRoot.querySelectorAll('._grid_panel')).indexOf(ev.detail.panel);
            if (idx > 0) {
                console.log('<pb-grid> Updating panel %d to show %s', idx, ev.detail.active);
                this.panels[idx] = ev.detail.active;

                localStorage.setItem('pb-grid.panels', this.panels.join('.'));
                this.setParameter('panels', this.panels.join('.'));
                this.pushHistory('added panel');
            }
        });
        const panelsParam = this.getParameter('panels');
        if (panelsParam) {
            this.panels = panelsParam.split('.').map(param => parseInt(param));
            localStorage.setItem('pb-grid.panels', this.panels.join('.'));
        } else {
            const panelsStored = localStorage.getItem('pb-grid.panels');
            if (panelsStored) {
                this.panels = panelsStored.split('.').map(param => parseInt(param));
            }
        }

        this._columns = this.panels.length;
        this.template = this.querySelector('template');
    }

    firstUpdated() {
        this.panels.forEach(panelNum => this._insertPanel(panelNum));

        this._animate();
        this._update();
    }

    /**
     * slides in all panels from left to right with a slight delay between the panels. If animejs is not
     * loaded nothing happens and content is displayed as usual.
     */
    _animate() {
        if (this.animation) {
            if (typeof anime && "anime" in window) {
                // console.log('animated elements', document.querySelectorAll('pb-panel'));
                const animated = document.querySelectorAll(this.animated);
                const anim = anime.timeline({
                    easing: 'linear',
                    duration: 400
                });
                anim.add({
                    targets: animated,
                    opacity: {
                        value: [0, 0.6],
                        duration: 200,
                        delay: 100,
                        easing: 'linear'
                    },
                    translateX: [2000, 0],
                    duration: 400,
                    delay: anime.stagger(100, { start: 100 })
                });
                anim.add({
                    targets: animated,
                    opacity: [0.6, 1],
                    duration: 200,
                    delay: anime.stagger(50)
                });
                anim.play();
            }
        }
    }

    addPanel(initial) {
        if (!initial) {
            if (this.panels.length > 0) {
                const max = this.panels.reduce(function (a, b) {
                    return Math.max(a, b);
                });
                initial = max + 1;
            } else {
                initial = 0;
            }
        }
        this._columns++;
        this.panels.push(initial);

        localStorage.setItem('pb-grid.panels', this.panels.join('.'));
        this.setParameter('panels', this.panels.join('.'));
        this.pushHistory('added panel');

        this._insertPanel(initial);

        this._update();

        this.emitTo('pb-refresh', null);
    }

    removePanel(panel) {
        const idx = Array.from(this.querySelectorAll('._grid_panel')).indexOf(panel);
        console.log('<pb-grid> Removing panel %d', idx);
        this.panels.splice(idx, 1);

        this.setParameter('panels', this.panels.join('.'));
        localStorage.setItem('pb-grid.panels', this.panels.join('.'));
        this.pushHistory('removed panel');

        panel.parentNode.removeChild(panel);
        this._columns--;
        this._update();
    }

    _insertPanel(active) {
        const clone = document.importNode(this.template.content.firstElementChild, true);
        clone.setAttribute('active', active);
        if (this.direction === 'ltr' || this.querySelectorAll('._grid_panel').length === 0) {
            this.appendChild(clone);
        } else {
            this.insertBefore(clone, this.firstElementChild);
        }
        clone.classList.add('_grid_panel');
    }

    _update() {
        const widths = [];
        Array.from(this.children).forEach((child) => {
            if (child instanceof HTMLTemplateElement) {
                return;
            }
            const styles = window.getComputedStyle(child);
            const width = styles.getPropertyValue('max-width');
            if (width && width !== 'none') {
                widths.push(width);
            } else {
                widths.push('1fr');
            }
        });
        this.style.setProperty('--pb-computed-column-widths', widths.join(' '));
    }

    render() {
        return html`<slot></slot>`;
    }

    static get styles() {
        return css`
            :host {
                display: grid;
                grid-template-columns: var(--pb-grid-column-widths, var(--pb-computed-column-widths));
                grid-column-gap: var(--pb-grid-column-gap, 20px);
                justify-content: space-between;
            }
        `;
    }

}
customElements.define('pb-grid', PbGrid);