import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { registry } from "./urls.js";
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
        this.panels = [];
        this.direction = 'ltr';
        this.animated = 'pb-view';
        this.animation = false;
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-panel', ev => {
            const idx = this._getPanelIndex(ev.detail.panel);
            if (idx < 0) {
                return // panel not found
            }
            console.log('<pb-grid> Updating panel %d to show %s', idx, ev.detail.active);
            this.panels[this.direction === 'rtl' ? this.panels.length - idx - 1 : idx] = ev.detail.active;

            registry.commit(this, this._getState())
        });

        this.subscribeTo('pb-zoom', ev => {
            this.zoom(ev.detail.direction);
        });

        const panelsParam = registry.get('panels');
        if (panelsParam) {
            this.panels = panelsParam.split('.').map(param => parseInt(param));
        }

        registry.subscribe(this, (state) => {
            const newState = state.panels ? state.panels.split('.') : [];
            this.panels = newState;
            this.innerHTML=''; // hard reset of child DOM
            this.panels.forEach(panelNum => this._insertPanel(panelNum));
            this._update();
        });
        this._columns = this.panels.length;
        this.template = this.querySelector('template');
    }

    firstUpdated() {

        this.panels.forEach(panelNum => this._insertPanel(panelNum));
        registry.commit(this, this._getState())
        this._animate();
        this._update();

        this.addEventListener('pb-drop', (ev) => {
            const draggedPanelIdx = parseInt(ev.detail.panel);
            const targetPanelIdx = this._getPanelIndex(ev.detail.target);

            console.log('<pb-grid> Insert panel %d at %d in %s', draggedPanelIdx, targetPanelIdx, this.panels);
            this.querySelectorAll('._grid_panel').forEach((panel) => {
                panel.classList.remove('dragover');
            });
            
            this.panels.splice(targetPanelIdx, 0, this.panels.splice(draggedPanelIdx, 1)[0]);
            this.innerHTML=''; // hard reset of child DOM
            this.panels.forEach(panelNum => this._insertPanel(panelNum));
            registry.commit(this, this._getState());
            this._update();
        });
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
        let value = initial
        if (!initial && !this.panels.length) {
            value = 0
        }
        if (!initial && this.panels.length) {
            const max = this.panels.reduce((result, next) => Math.max(result, next), 0);
            value = max + 1;
        }

        this._columns += 1;
        this.panels.push(value);

        this._insertPanel(value);
        registry.commit(this, this._getState())
        this._update();
        this.emitTo('pb-refresh', null);
    }

    /**
     * Remove a panel from the grid
     * 
     * @param {HTMLElement|number} panel the pb-panel element or the panel number 
     */
    removePanel(panel) {
        let idx;
        let container;
        if (typeof panel === 'number') {
            idx = this.panels.indexOf(panel);
            container = this.querySelector(`[active="${panel}"]`);
        } else {
            container = panel;
            idx = this._getPanelIndex(panel);
        }
        console.log('<pb-grid> Removing panel %d', idx);
        this.panels.splice(this.direction === 'rtl' ? this.panels.length - idx - 1 : idx, 1);

        container.parentNode.removeChild(panel);
        this._columns -= 1;
        registry.commit(this, this._getState());
        this._assignPanelIds();
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
        this._assignPanelIds();
    }

    _update() {
        const widths = Array.from(this.children)
            .filter(child => !(child instanceof HTMLTemplateElement))
            .map(child => {
                const styles = window.getComputedStyle(child);
                const width = styles.getPropertyValue('max-width');
                if (width && width !== 'none') {
                    return width;
                }
                return '1fr';
            });
        this.style.setProperty('--pb-computed-column-widths', widths.join(' '));
    }

    _getPanelIndex(panel) {
        const panels = Array.from(this.querySelectorAll('._grid_panel'));
        return panels.indexOf(panel);
    }

    _assignPanelIds() {
        this.querySelectorAll('._grid_panel').forEach((panel, idx) => {
            panel.position = idx;
        });
    }

    _getState() {
        return { panels: this.panels.join('.') };
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

    zoom(direction) {
        const fontSize = window.getComputedStyle(this).getPropertyValue('font-size');
        const size = parseInt(fontSize.replace(/^(\d+)px/, "$1"));

        if (direction === 'in') {
            this.style.fontSize = (size + 1) + 'px';
        } else {
            this.style.fontSize = (size - 1) + 'px';
        }
    }

}
if (!customElements.get('pb-grid')) {
    customElements.define('pb-grid', PbGrid);
}
