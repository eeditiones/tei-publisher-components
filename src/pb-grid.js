import { LitElement, html, css } from 'lit';
import { animate } from 'animejs';
import { pbMixin } from './pb-mixin.js';
import { registry } from './urls.js';
import './pb-panel.js';

/**
 * A component to create a column layout based upon CSS grid. It offers methods for dynamically changing
 * the layout by adding or removing panels at runtime.
 *
 * @slot - default unnamed slot for the panel
 * @fires pb-refresh - Fired after a new column has been added to allow connected components to refresh.
 * @fires pb-panel - When received, updates the list of panels to show
 * @fires pb-zoom - When received, zoom in or out by changing font size of the content
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
        type: Array,
      },
      direction: {
        type: String,
      },
      /**
       * the number of columns
       */
      _columns: {
        type: Number,
      },
      /**
       * CSS Selektor to choose elements to animate. If not specified all 'pb-view' elements will be animated by default.
       */
      animated: {
        type: String,
      },
      /**
       * wether to animate the view when new page is loaded. Defaults to 'false' meaning that no
       * animation takes place.
       */
      animation: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.panels = [];
    this.direction = 'ltr';
    this.animated = 'pb-view';
    this.animation = false;
    this._panelsInitialized = false; // Track if panels have been initialized from registry
  }

  connectedCallback() {
    super.connectedCallback();

    this.subscribeTo('pb-panel', ev => {
      const idx = this._getPanelIndex(ev.detail.panel);
      if (idx < 0) {
        return; // panel not found
      }
      console.log('<pb-grid> Updating panel %d to show %s', idx, ev.detail.active);
      // Update the panel's active template index (this is for pb-panel's internal state)
      // BUT: Do NOT commit panels to registry - panels array should only change when panels are added/removed,
      // not when a panel switches its active view. The panels parameter in the URL should remain stable.
      // Only update the internal state, don't commit to registry
      const panelIdx = this.direction === 'rtl' ? this.panels.length - idx - 1 : idx;
      // Store the active template index for this panel, but don't change the panels array structure
      // The panels array represents which panels are visible, not which template each panel is showing
      // We'll track active templates separately if needed, but for now just log it
      console.log('<pb-grid> Panel %d switched to template %s (not committing to registry)', panelIdx, ev.detail.active);
      // DO NOT commit - panels parameter should remain stable
    });

    this.subscribeTo('pb-zoom', ev => {
      this.zoom(ev.detail.direction);
    });

    // CRITICAL: Always prioritize registry value over template attribute
    // The template may have panels="[0,1,2]" hardcoded, but the URL parameter should override it
    const panelsParam = registry.get('panels');
    if (panelsParam) {
      // Parse panels from registry, but ensure we don't concatenate
      // Split by '.' and parse each segment as integer
      const parsed = panelsParam.split('.').map(param => parseInt(param, 10));
      // Only use if all segments are valid numbers and reasonable (max 10 panels)
      if (parsed.length > 0 && parsed.length <= 10 && parsed.every(p => !isNaN(p) && p >= 0 && p < 10)) {
        console.log('<pb-grid> connectedCallback: Using panels from registry:', parsed, 'overriding template attribute');
        this.panels = parsed;
        this._panelsInitialized = true;
      }
    } else {
      // No registry value - check if template attribute was set (LitElement may have already parsed it)
      // If template has panels="[0,1,2]" but we want to use that only if no registry value exists
      // But we should still mark as initialized to prevent duplicates
      if (this.panels && this.panels.length > 0) {
        console.log('<pb-grid> connectedCallback: Using panels from template attribute:', this.panels, '(no registry value)');
        this._panelsInitialized = true;
      }
    }

    this._isUpdatingFromRegistry = false;
    this._lastPanelsState = null; // Track last panels state to prevent duplicate rebuilds
    registry.subscribe(this, state => {
      console.log(
        '<pb-grid> Registry subscribe callback triggered, _isUpdatingFromRegistry:',
        this._isUpdatingFromRegistry,
        'state.panels:',
        state.panels,
      );
      // Only rebuild DOM if state change came from external source (e.g., browser navigation)
      // not from our own registry.commit() calls
      if (this._isUpdatingFromRegistry) {
        console.log(
          '<pb-grid> Skipping registry subscribe callback due to _isUpdatingFromRegistry flag',
        );
        return;
      }
      const newState = state.panels ? state.panels.split('.').map(p => parseInt(p, 10)).filter(p => !isNaN(p)) : [];
      const newStateStr = newState.join('.');
      
      // Prevent duplicate rebuilds if panels haven't actually changed
      if (this._lastPanelsState === newStateStr) {
        console.log(
          '<pb-grid> Skipping registry subscribe callback - panels state unchanged:',
          newStateStr,
        );
        return;
      }
      
      // Prevent rebuild if we haven't initialized yet (firstUpdated hasn't run)
      // This prevents the registry callback from running before firstUpdated and creating duplicates
      if (!this._panelsInitialized && !this.template) {
        console.log(
          '<pb-grid> Skipping registry subscribe callback - not yet initialized (template not ready)',
        );
        return;
      }
      
      console.log('<pb-grid> Registry subscribe callback rebuilding DOM with panels:', newState, 'current panels:', this.panels);
      this._lastPanelsState = newStateStr;
      this.panels = newState;
      this._panelsInitialized = true;
      this.innerHTML = ''; // hard reset of child DOM
      this.panels.forEach(panelNum => this._insertPanel(panelNum));
      this._update();
    });
    this._columns = this.panels.length;
    this.template = this.querySelector('template');
    
    // If template is ready and we have panels but haven't initialized, mark as initialized
    // This handles the case where template attribute was parsed before registry value was read
    if (this.template && this.panels && this.panels.length > 0 && !this._panelsInitialized) {
      console.log('<pb-grid> connectedCallback: Template ready, panels from attribute:', this.panels);
      this._panelsInitialized = true;
    }
  }

  firstUpdated() {
    // CRITICAL: Double-check registry value one more time before creating panels
    // LitElement may have set this.panels from the template attribute before connectedCallback ran
    // We need to ensure we use the registry value, not the template attribute
    const panelsParam = registry.get('panels');
    if (panelsParam) {
      const parsed = panelsParam.split('.').map(param => parseInt(param, 10)).filter(p => !isNaN(p) && p >= 0 && p < 10);
      if (parsed.length > 0 && parsed.length <= 10) {
        const parsedStr = parsed.join('.');
        const currentStr = this.panels.join('.');
        if (parsedStr !== currentStr) {
          console.log('<pb-grid> firstUpdated: Overriding template panels', this.panels, 'with registry value', parsed);
          this.panels = parsed;
          this._panelsInitialized = true;
        }
      }
    }
    
    // Only insert panels if they haven't been inserted yet
    // This prevents duplicates if registry subscribe callback already created them
    const existingPanels = this.querySelectorAll('._grid_panel').length;
    if (existingPanels === 0 && this.panels && this.panels.length > 0) {
      console.log('<pb-grid> firstUpdated: Inserting panels:', this.panels, 'existing panels:', existingPanels);
      this.panels.forEach(panelNum => this._insertPanel(panelNum));
    } else {
      console.log('<pb-grid> firstUpdated: Skipping panel insertion - already have', existingPanels, 'panels');
    }
    
    // Track initial state to prevent duplicate rebuilds
    this._lastPanelsState = this._getState().panels;
    this._isUpdatingFromRegistry = true;
    // Only commit if panels state differs from what's already in the registry
    // This prevents unnecessary URL updates during initialization
    const currentPanels = registry.get('panels');
    const newPanels = this._getState().panels;
    if (currentPanels !== newPanels) {
      registry.commit(this, this._getState());
    }
    this._isUpdatingFromRegistry = false;
    this._animate();
    this._update();

    this.addEventListener('pb-drop', ev => {
      const draggedPanelIdx = parseInt(ev.detail.panel);
      const targetPanelIdx = this._getPanelIndex(ev.detail.target);

      console.log(
        '<pb-grid> Insert panel %d at %d in %s',
        draggedPanelIdx,
        targetPanelIdx,
        this.panels,
      );
      this.querySelectorAll('._grid_panel').forEach(panel => {
        panel.classList.remove('dragover');
      });

      this.panels.splice(targetPanelIdx, 0, this.panels.splice(draggedPanelIdx, 1)[0]);
      this.innerHTML = ''; // hard reset of child DOM
      this.panels.forEach(panelNum => this._insertPanel(panelNum));
      this._isUpdatingFromRegistry = true;
      registry.commit(this, this._getState());
      this._isUpdatingFromRegistry = false;
      this._update();
    });
  }

  /**
   * slides in all panels from left to right with a slight delay between the panels. If animejs is not
   * loaded nothing happens and content is displayed as usual.
   */
  _animate() {
    if (this.animation) {
      // console.log('animated elements', document.querySelectorAll('pb-panel'));
      const animated = document.querySelectorAll(this.animated);

      // Animate each element with a staggered delay
      animated.forEach((element, index) => {
        const animation = animate(element, {
          opacity: [0, 0.6],
          translateX: [2000, 0],
          duration: 400,
          delay: 100 + index * 100,
          ease: 'linear',
        });

        // Check if animation has a finished promise
        if (animation && animation.finished) {
          animation.finished.then(() => {
            // Second phase: fade to full opacity
            animate(element, {
              opacity: [0.6, 1],
              duration: 200,
              delay: index * 50,
              ease: 'linear',
            });
          });
        } else {
          // Fallback: use setTimeout if no promise available
          setTimeout(() => {
            animate(element, {
              opacity: [0.6, 1],
              duration: 200,
              delay: index * 50,
              ease: 'linear',
            });
          }, 400 + index * 100);
        }
      });
    }
  }

  /**
   * Add a panel. Defaults to opening 'the next' panel if the `initial` parameter is omitted: if
   * panels 1,6,3 are open, panel 7 will be added
   *
   * @param {number} [initial] The panel number of the panel to add.
   */
  addPanel(initial) {
    let value = initial;
    if (initial === undefined && !this.panels.length) {
      value = 0;
    }
    if (initial === undefined && this.panels.length) {
      const max = this.panels.reduce((result, next) => Math.max(result, next), 0);
      value = max + 1;
    }

    console.log('<pb-grid> Adding panel with value:', value);
    console.log('<pb-grid> Current panels before add:', this.panels);
    console.log(
      '<pb-grid> Current panel count before add:',
      this.querySelectorAll('._grid_panel').length,
    );

    this._columns += 1;
    this.panels.push(value);

    this._insertPanel(value);
    this._isUpdatingFromRegistry = true;
    registry.commit(this, this._getState());
    this._isUpdatingFromRegistry = false;
    this._update();
    this.emitTo('pb-refresh');

    console.log('<pb-grid> After adding panel - panels:', this.panels);
    console.log(
      '<pb-grid> After adding panel - panel count:',
      this.querySelectorAll('._grid_panel').length,
    );
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
    console.log('<pb-grid> Container:', container);
    console.log('<pb-grid> Current panels:', [...this.panels]);
    console.log('<pb-grid> Current panel count:', this.querySelectorAll('._grid_panel').length);

    this.panels.splice(this.direction === 'rtl' ? this.panels.length - idx - 1 : idx, 1);

    container.parentNode.removeChild(container);
    this._columns -= 1;
    this._isUpdatingFromRegistry = true;
    registry.commit(this, this._getState());
    this._isUpdatingFromRegistry = false;
    this._assignPanelIds();
    this._update();

    console.log('<pb-grid> After removal - panels:', [...this.panels]);
    console.log(
      '<pb-grid> After removal - panel count:',
      this.querySelectorAll('._grid_panel').length,
    );
  }

  _insertPanel(active) {
    console.log('<pb-grid> _insertPanel called with active:', active);
    console.log('<pb-grid> Template content:', this.template.content);
    console.log('<pb-grid> Template firstElementChild:', this.template.content.firstElementChild);

    const clone = document.importNode(this.template.content.firstElementChild, true);
    console.log('<pb-grid> Cloned element:', clone);

    clone.setAttribute('active', active);
    if (this.direction === 'ltr' || this.querySelectorAll('._grid_panel').length === 0) {
      this.appendChild(clone);
    } else {
      this.insertBefore(clone, this.firstElementChild);
    }
    clone.classList.add('_grid_panel');
    this._assignPanelIds();

    console.log(
      '<pb-grid> After _insertPanel - DOM panels:',
      this.querySelectorAll('._grid_panel').length,
    );
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
    // Ensure panels array is valid before joining
    // Filter out any invalid values (NaN, undefined, null)
    const validPanels = this.panels.filter(p => typeof p === 'number' && !isNaN(p) && p >= 0 && p < 10);
    return { panels: validPanels.join('.') };
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
        font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
      }
    `;
  }

  zoom(direction) {
    // Zoom is now handled globally by pb-zoom component using CSS custom properties
    // This method is kept for compatibility but does nothing
    // The component should rely on CSS: font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
  }
}
if (!customElements.get('pb-grid')) {
  customElements.define('pb-grid', PbGrid);
}
