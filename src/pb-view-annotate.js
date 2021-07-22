import '@polymer/paper-icon-button';
import { css, html } from "lit-element";
import tippy from 'tippy.js';
import uniqolor from "uniqolor/src/index";
import { PbView } from "./pb-view.js";
import { loadTippyStyles } from "./pb-popover.js";
import { get as i18n } from './pb-i18n.js';

/**
 * Return the first child of ancestor which contains current.
 * Used to adjust nested anchor points.
 * 
 * @param {Node} current the anchor node
 * @param {Node} ancestor the context ancestor node
 * @returns {Node} first child of ancestor containing current
 */
function extendRange(current, ancestor) {
  let parent = current;
  while (parent.parentNode !== ancestor) {
    parent = parent.parentElement;
  }
  return parent;
}

/**
 * Check if the nodeToCheck should be ignored when computing offsets.
 * Applies e.g. to footnote markers.
 * 
 * @param {Node} nodeToCheck the node to check
 * @returns true if node should be ignored
 */
function isSkippedNode(nodeToCheck) {
  let node = nodeToCheck;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentNode;
  }
  const href = /** @type {Element} */ (node).getAttribute('href');
  return href && /^#fn_.*$/.test(href);
}

/**
 * For a given HTML node, compute the number of characters from the start
 * of the parent element.
 *
 * @param {Node} node the node for which to compute an absolute offset
 * @param {Number} offset start offset
 * @returns {Number} absolute offset
 */
function absoluteOffset(container, node, offset) {
  const walker = document.createTreeWalker(container);
  walker.currentNode = node;
  while (walker.previousNode()) {
    const sibling = walker.currentNode;
    if (!(sibling.nodeType === Node.ELEMENT_NODE || isSkippedNode(sibling))) {
      // eslint-disable-next-line no-param-reassign
      offset += sibling.textContent.length;
    }
  }
  return offset;
}

/**
 * Convert the start or end boundary of a browser range by computing
 * the number of characters from the start of the parent element.
 *
 * @param {Node} node input node
 * @param {Number} offset offset relative to the parent element
 * @returns
 */
function rangeToPoint(node, offset, position = 'start') {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const container = /** @type {Element} */ (node).closest('[data-tei]');
    if (offset === 0) {
      return {
        parent: container.getAttribute('data-tei'),
        offset: 0,
      };
    }
    const child = container.childNodes[offset];
    return {
      parent: container.getAttribute('data-tei'),
      offset: position === 'end' ? absoluteOffset(container, child, 0) - 1 : absoluteOffset(container, child, 0),
    };
  }
  const container = /** @type {Element} */ (node.parentNode).closest('[data-tei]');
  if (container) {
    return {
      parent: container.getAttribute('data-tei'),
      offset: absoluteOffset(container, node, offset),
    };
  } else {
    console.error('No container with data-tei found for %o', node.parentNode);
  }
}

function ancestors(node, selector) {
  let count = 0;
  let parent = node.parentNode;
  while (parent && parent !== node.getRootNode()) {
    if (parent.classList.contains(selector)) {
      count += 1;
    }
    parent = parent.parentNode;
  }
  return count;
}

/**
 * Convert a point given as number of characters from the start of the container element
 * to a coordinate relative to a DOM element.
 *
 * @param {Node} container the container element
 * @param {*} offset absolute offset
 * @returns
 */
function pointToRange(container, offset) {
  let relOffset = offset;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    if (relOffset - walker.currentNode.textContent.length <= 0) {
      return [walker.currentNode, relOffset];
    }
    if (!isSkippedNode(walker.currentNode)) {
      relOffset -= walker.currentNode.textContent.length;
    }
  }
  return null;
}

function kwicText(str, start, end, words = 3) {
  let p0 = start - 1;
  let count = 0;
  while (p0 >= 0) {
    if (/[\p{P}\s]/.test(str.charAt(p0))) {
      while (p0 > 1 && /[\p{P}\s]/.test(str.charAt(p0 - 1))) {
        p0 -= 1;
      }
      count += 1;
      if (count === words) {
        break;
      }
    }
    p0 -= 1;
  }
  let p1 = end + 1;
  count = 0;
  while (p1 < str.length) {
    if (/[\p{P}\s]/.test(str.charAt(p1))) {
      while (p1 < str.length - 1 && /[\p{P}\s]/.test(str.charAt(p1 + 1))) {
        p1 += 1;
      }
      count += 1;
      if (count === words) {
        break;
      }
    }
    p1 += 1;
  }
  return `... ${str.substring(p0, start)}<mark>${str.substring(start, end)}</mark>${str.substring(end, p1 + 1)} ...`;
}

function collectText(node) {
  let parent = node.parentElement;
  if (parent.textContent.length < 40) {
    parent = parent.parentNode;
  }
  const walker = document.createTreeWalker(parent, NodeFilter.SHOW_TEXT);
  let offset = 0;
  let start = 0;
  const str = [];
  while (walker.nextNode()) {
    if (walker.currentNode === node) {
      start = offset;
    }
    offset += walker.currentNode.textContent.length;
    str.push(walker.currentNode.textContent);
  }
  return [str.join(''), start];
}

/**
 * An extended `PbView`, which supports annotations to be added
 * and edited by the user. Handles mouse selection and keeps track
 * of the annotations made.
 * 
 * Interaction with the actual editing form is entirely done via events.
 * The class itself does not provide any editing facility, except for
 * handling deletions.
 * 
 * @fires pb-selection-changed - fired when user selects text
 * @fires pb-annotations-changed - fired when an annotation was added or changed
 * @fires pb-annotation-detail - fired to request additional details about an annotation
 */
class PbViewAnnotate extends PbView {
  static get properties() {
    return {
      key: {
        type: String
      },
      ...super.properties,
    };
  }

  constructor() {
    super();
    this.key = 'ref';
    this._ranges = [];
    this._rangesMap = new Map();
  }

  connectedCallback() {
    super.connectedCallback();

    let isMouseDown = false;

    this._inHandler = false;
    this._pendingCallback = null;

    const scheduleCallback = (delay = 10) => {
      this._pendingCallback = setTimeout(() => {
        this._selectionChanged();
      }, delay);
    };

    /** @param {Event} event */
    this._eventHandler = event => {
      if (event.type === 'selectionchange' && this._inHandler) {
        return;
      }
      if (event.type === 'mousedown') {
        isMouseDown = true;
      }
      if (event.type === 'mouseup') {
        isMouseDown = false;
      }

      // If the user makes a selection with the mouse, wait until they release
      // it before reporting a selection change.
      if (isMouseDown) {
        return;
      }

      this._cancelPendingCallback();

      // Schedule a notification after a short delay. The delay serves two
      // purposes:
      //
      // - If this handler was called as a result of a 'mouseup' event then the
      //   selection will not be updated until the next tick of the event loop.
      //   In this case we only need a short delay.
      //
      // - If the user is changing the selection with a non-mouse input (eg.
      //   keyboard or selection handles on mobile) this buffers updates and
      //   makes sure that we only report one when the update has stopped
      //   changing. In this case we want a longer delay.

      const delay = event.type === 'mouseup' ? 10 : 100;
      scheduleCallback(delay);
    };

    document.addEventListener('selectionchange', this._eventHandler.bind(this));
    this.shadowRoot.addEventListener('mousedown', this._eventHandler.bind(this));
    this.shadowRoot.addEventListener('mouseup', this._eventHandler.bind(this));

    this.subscribeTo('pb-refresh', () => {
      this._ranges = [];
      this._rangesMap.clear();
      this._currentSelection = null;
      this._clearMarkers();
      this.emitTo('pb-annotations-changed', { ranges: this._ranges });
    });

    this.subscribeTo('pb-add-annotation', ev => this.addAnnotation(ev.detail));
    this.subscribeTo('pb-edit-annotation', this._editAnnotation.bind(this));

    this._resizeHandler();
  }

  get annotations() {
    return this._ranges;
  }

  set annotations(annoData) {
    this._ranges = annoData;
    this.updateAnnotations();
  }

  firstUpdated() {
    super.firstUpdated();

    loadTippyStyles(this.shadowRoot, 'light-border');
  }

  render() {
    return [...super.render(), html`<div id="marker-layer"></div>`];
  }

  _resizeHandler() {
    let _pendingCallback = null;

    const scheduleCallback = () => {
      _pendingCallback = setTimeout(() => {
        _pendingCallback = null;
        this.refreshMarkers();
      }, 200);
    };
    window.addEventListener('resize', () => {
      if (!_pendingCallback) {
        this._clearMarkers();
      }
      if (_pendingCallback) {
        clearTimeout(_pendingCallback);
      }
      scheduleCallback();
    });
  }

  _handleContent() {
    super._handleContent();
    this.updateComplete.then(() => setTimeout(() => {
      this._initAnnotationColors();
      this._annotationStyles();
      this.updateAnnotations();
    }, 300));
  }

  _updateAnnotation(teiRange, batch = false) {
    const view = this.shadowRoot.getElementById('view');
    const context = Array.from(view.querySelectorAll(`[data-tei="${teiRange.context}"]`)).filter(
      node => node.closest('pb-popover') === null && node.getAttribute('rel') !== 'footnote',
    )[0];

    if (!context) {
      return null;
    }

    const range = document.createRange();

    const startPoint = pointToRange(context, teiRange.start);
    const endPoint = pointToRange(context, teiRange.end);
    if (!(startPoint && endPoint)) {
      console.error('<pb-view-annotate> Invalid range for %o', context);
      return null;
    }

    console.log('<pb-view-annotate> Range before adjust: %o %o', startPoint, endPoint);
    if (startPoint[1] === startPoint[0].textContent.length) {
      range.setStart(endPoint[0], 0);
    } else if (startPoint[0] !== endPoint[0] && startPoint[1] === 0) {
      range.setStartBefore(extendRange(startPoint[0], context));
    } else {
      range.setStart(startPoint[0], startPoint[1]);
    }

    if (startPoint[0] !== endPoint[0] && endPoint[0].textContent.length - 1 === endPoint[1]) {
      range.setEndAfter(extendRange(endPoint[0], context));
    } else {
      range.setEnd(endPoint[0], endPoint[1]);
    }

    console.log('<pb-view-annotate> Range: %o', range);
    const span = document.createElement('span');
    span.className = `annotation annotation-${teiRange.type} ${teiRange.type}`;
    span.dataset.type = teiRange.type;
    span.dataset.annotation = JSON.stringify(teiRange.properties);
    // span.appendChild(range.extractContents());

    range.surroundContents(span);
    this._rangesMap.set(span, teiRange);
    // range.insertNode(span);

    if (!batch) {
      this.refreshMarkers();
    }

    return span;
  }

  updateAnnotations() {
    this._ranges.forEach(this._updateAnnotation.bind(this));
    this.refreshMarkers();
  }

  _getSelection() {
    return this.shadowRoot.getSelection
      ? this.shadowRoot.getSelection()
      : window.getSelection();
  }

  _selectionChanged() {
    const selection = this._getSelection();
    const range = this._selectedRange(selection);
    if (range) {
      let changed = false;
      const ancestor = range.commonAncestorContainer;
      if (ancestor.nodeType === Node.ELEMENT_NODE) {
        if (range.startContainer.parentElement !== ancestor) {
          const parent = extendRange(range.startContainer, ancestor);
          range.setStartBefore(parent);
          changed = true;
        }
        if (range.endContainer.parentElement !== ancestor) {
          const parent = extendRange(range.endContainer, ancestor);
          range.setEndAfter(parent);
          changed = true;
        }
      }
      this._currentSelection = range;
      console.log('<pb-view-annotate> selection: %o', range);

      if (changed) {
        this._inHandler = true;
        setTimeout(() => {
          selection.removeAllRanges();
          selection.addRange(range);
          this.inHandler = false;
        }, 100);
      }

      this.emitTo('pb-selection-changed', { hasContent: true, range });
    } else {
      this.emitTo('pb-selection-changed', { hasContent: false });
    }
  }

  updateAnnotation(teiRange, batch = false) {
    const result = this._updateAnnotation(teiRange, batch);
    if (result) {
      this._ranges.push(teiRange);
      this.emitTo('pb-annotations-changed', {
        type: teiRange.type,
        text: teiRange.text,
        ranges: this._ranges,
      });
    }
    return result;
  }

  addAnnotation(info) {
    const range = info.range || this._currentSelection;
    const startRange = rangeToPoint(range.startContainer, range.startOffset);
    const endRange = rangeToPoint(range.endContainer, range.endOffset, 'end');
    const adjustedRange = {
      context: startRange.parent,
      start: startRange.offset,
      end: endRange.offset,
      text: range.cloneContents().textContent,
    };
    if (info.type) {
      adjustedRange.type = info.type;
    }
    if (info.properties) {
      adjustedRange.properties = info.properties;
    }
    console.log('<pb-view-annotate> range adjusted: %o', adjustedRange);
    this._ranges.push(adjustedRange);
    this.emitTo('pb-annotations-changed', {
      type: adjustedRange.type,
      text: adjustedRange.text,
      ranges: this._ranges,
    });
    this._checkAnnotationColor(adjustedRange.type);
    return this._updateAnnotation(adjustedRange);
  }

  deleteAnnotation(span) {
    // delete an existing annotation element in the TEI source
    if (span.dataset.tei) {
      // first check if we have pending modifications and remove them
      const idx = this._ranges.findIndex(r => r.type === 'modify' && r.node === span.dataset.tei);
      if (idx > -1) {
        this._ranges.splice(idx, 1);
      }

      const context = span.parentNode.closest('[data-tei]');
      const range = {
        type: 'delete',
        node: span.dataset.tei,
        context: context.dataset.tei,
      };
      this._ranges.push(range);
    } else {
      const teiRange = this._rangesMap.get(span);
      this._rangesMap.delete(span);
      const pos = this._ranges.indexOf(teiRange);

      console.log('<pb-view-annotate> deleting annotation %o', teiRange);

      this._ranges.splice(pos, 1);
    }

    const newRange = document.createRange();
    for (let i = 0; i < span.childNodes.length; i++) {
      const copy = span.childNodes[i].cloneNode(true);
      span.parentNode.insertBefore(copy, span);
      if (i === 0) {
        newRange.setStartBefore(copy);
      }
      if (i === span.childNodes.length - 1) {
        newRange.setEndAfter(copy);
      }
    }
    span.parentNode.removeChild(span);

    this.emitTo('pb-annotations-changed', { ranges: this._ranges });

    this.refreshMarkers();

    const selection = this._getSelection();
    selection.removeAllRanges();
    selection.addRange(newRange);
  }

  editAnnotation(span, properties) {
    if (span.dataset.tei) {
      // TODO: check in _ranges if it has already been modified
      const context = span.closest('[data-tei]');
      let range = this._ranges.find(r => r.type === 'modify' && r.node === span.dataset.tei);
      if (!range) {
        range = {
          type: 'modify',
          node: span.dataset.tei,
          context: context.dataset.tei,
        };
        this._ranges.push(range);
      }
      range.properties = properties;

      this.emitTo('pb-annotations-changed', { ranges: this._ranges });
    }

    const json = Object.assign(JSON.parse(span.dataset.annotation), properties);
    span.dataset.annotation = JSON.stringify(json);
  }

  _editAnnotation(ev) {
    this.editAnnotation(ev.detail.target, ev.detail.properties);
  }

  /**
   *
   * @returns {Range|null} the selected range, if any
   */
  _selectedRange(selection) {
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    if (selection.anchorNode.getRootNode() !== this.shadowRoot) {
      return null;
    }
    const range = selection.getRangeAt(0);
    if (range.collapsed) {
      return null;
    }
    return range;
  }

  _cancelPendingCallback() {
    if (this._pendingCallback) {
      clearTimeout(this._pendingCallback);
      this._pendingCallback = null;
    }
  }

  _createTooltip(span) {
    if (span._tippy || !span.dataset.annotation) {
      return;
    }
    const wrapper = document.createElement('div');
    wrapper.className = 'annotation-popup';
    const info = document.createElement('div');
    info.className = 'info';
    wrapper.appendChild(info);

    const div = document.createElement('div');
    div.className = 'toolbar';

    const typeInd = document.createElement('span');
    typeInd.className = 'annotation-type';
    div.appendChild(typeInd);

    if (span.dataset.annotation) {
      const editBtn = document.createElement('paper-icon-button');
      editBtn.setAttribute('icon', 'icons:create');
      editBtn.setAttribute('title', i18n('annotations.edit'));
      editBtn.addEventListener('click', () => {
        const data = JSON.parse(span.dataset.annotation);
        this.emitTo('pb-annotation-edit', Object.assign({}, { target: span, type: span.dataset.type, properties: data }));
      });
      div.appendChild(editBtn);
    }
    const delBtn = document.createElement('paper-icon-button');
    delBtn.setAttribute('icon', 'icons:delete');
    delBtn.setAttribute('title', i18n('annotations.delete'));
    delBtn.addEventListener('click', () => {
      this.deleteAnnotation(span);
    });
    div.appendChild(delBtn);
    wrapper.appendChild(div);

    const root = this.shadowRoot.getElementById('view');
    tippy(span, {
      content: wrapper,
      allowHTML: true,
      interactive: true,
      appendTo: root.nodeType === Node.DOCUMENT_NODE ? document.body : root,
      theme: 'light-border',
      hideOnClick: false,
      maxWidth: 'auto',
      trigger: 'click',
      placement: 'left',
      popperOptions: {
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['right', 'top', 'bottom'],
            },
          },
        ],
      },
      onTrigger: (instance, ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const type = span.dataset.type;
        const data = JSON.parse(span.dataset.annotation);
        const color = this._annotationColors.get(type);
        typeInd.innerHTML = type;
        typeInd.style.backgroundColor = `var(--pb-annotation-${type})`;
        typeInd.style.color = `var(${color.isLight ? '--pb-color-primary' : '--pb-color-inverse'})`;
        if (data[this.key]) {
          this.emitTo('pb-annotation-detail', {
            type,
            id: data[this.key],
            container: info,
            span,
          });
        } else {
          // show properties as key/value table
          info.innerHTML = '';
          const keys = Object.keys(data);
          if (keys.length === 0) {
            const p = document.createElement('p');
            p.innerHTML = i18n('annotations.no-properties');
            info.appendChild(p);
          } else {
            const table = document.createElement('table');
            keys.forEach((key) => {
              const tr = document.createElement('tr');
              const tdKey = document.createElement('td');
              tdKey.innerHTML = key;
              tr.appendChild(tdKey);
              const tdValue = document.createElement('td');
              tdValue.innerHTML = JSON.stringify(data[key], null, 2);
              tr.appendChild(tdValue);
              table.appendChild(tr);
            });
            info.appendChild(table);
          }
        }
      },
      onClickOutside: (instance, ev) => {
        instance.hideWithInteractivity(ev);
      }
    });
  }

  /**
   * Create a marker for an annotation. Position it absolute next to the annotation.
   *
   * @param {HTMLElement} span the span for which to display the marker
   * @param {DOMRectList} rootRect element with relative position
   * @param {Number} margin additional margin to avoid overlapping markers
   */
  _showMarker(span, root, rootRect, margin = 0) {
    const rects = span.getClientRects();
    const type = span.dataset.type;
    for (let i = 0; i < rects.length; i++) {
      const rect = rects[i];
      const marker = document.createElement('div');
      marker.className = `marker annotation-${type}`;
      marker.style.position = 'absolute';
      marker.style.left = `${rect.left - rootRect.left}px`;
      marker.style.top = `${rect.top - rootRect.top + rect.height}px`;
      marker.style.marginTop = `${margin}px`;
      marker.style.width = `${rect.width}px`;
      marker.style.height = `3px`;
      marker.style.backgroundColor = `var(--pb-annotation-${type})`;
      marker.part = 'annotation';
      root.appendChild(marker);
    }

    this._createTooltip(span);
  }

  _clearMarkers() {
    this.shadowRoot.getElementById('marker-layer').innerHTML = '';
  }

  /**
   * For all annotations currently shown, create a marker element and position
   * it absolute next to the annotation
   *
   * @param {HTMLElement} root element containing the markers
   */
  refreshMarkers() {
    const root = this.shadowRoot.getElementById('view');
    const rootRect = root.getBoundingClientRect();
    const markerLayer = this.shadowRoot.getElementById('marker-layer');
    markerLayer.style.display = 'none';
    this._clearMarkers();
    root.querySelectorAll('.annotation')
      .forEach(span => {
        if (span._tippy) {
          span._tippy.destroy();
        }
        this._showMarker(span, markerLayer, rootRect, ancestors(span, 'annotation') * 5);
      });
      markerLayer.style.display = 'block';
  }

  search(type, tokens) {
    function filter(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        return NodeFilter.FILTER_ACCEPT;
      }
      if (node.classList.contains('annotation-popup')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_SKIP;
    }
    filter.acceptNode = filter;

    const result = [];
    if (!tokens || tokens.length === 0) {
      return result;
    }
    const expr = tokens.filter(token => token && token.length > 0).map(token => `\\b${token.replace(/[\s\n\t]+/g, '\\s+')}\\b`).join('|');
    console.log(`<pb-view-annotate> Searching content for ${expr}...`);
    const regex = new RegExp(expr, 'gi');
    const walker = document.createTreeWalker(
      this.shadowRoot.getElementById('view'),
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      filter,
    );
    while (walker.nextNode()) {
      let node = walker.currentNode;
      const matches = Array.from(node.textContent.matchAll(regex));
      for (const match of matches) {
        const end = match.index + match[0].length;
        let isAnnotated = false;
        let ref = null;
        const annoData = node.parentNode.dataset.annotation;
        const annoType = node.parentNode.dataset.type;
        if (annoData && annoType) {
          const parsed = JSON.parse(annoData);
          isAnnotated = annoType === type;
          ref = parsed[this.key];
        }

        const startRange = rangeToPoint(node, match.index);
        const endRange = rangeToPoint(node, end, 'end');

        const [str, start] = collectText(node);
        const entry = {
          annotated: isAnnotated,
          context: startRange.parent,
          start: startRange.offset,
          end: endRange.offset,
          textNode: node,
          kwic: kwicText(str, start + match.index, start + end),
        };
        entry[this.key] = ref;
        result.push(entry);
      }
    }
    return result;
  }

  scrollTo(teiRange) {
    const root = this.shadowRoot.getElementById('view');
    const range = document.createRange();
    if (teiRange.annotated) {
      range.selectNode(teiRange.textNode);
    } else {
      const context = Array.from(root.querySelectorAll(`[data-tei="${teiRange.context}"]`)).filter(
        node => node.closest('pb-popover') === null && node.getAttribute('rel') !== 'footnote',
      )[0];
      const startPoint = pointToRange(context, teiRange.start);
      const endPoint = pointToRange(context, teiRange.end);
      range.setStart(startPoint[0], startPoint[1]);
      range.setEnd(endPoint[0], endPoint[1]);
    }

    const rootRect = root.getBoundingClientRect();
    const rect = range.getBoundingClientRect();
    let marker = root.querySelector('[part=highlight]');
    if (!marker) {
      marker = document.createElement('div');
      marker.part = 'highlight';
      marker.style.position = 'absolute';
      root.appendChild(marker);
    }

    marker.style.left = `${rect.left - rootRect.left}px`;
    marker.style.top = `${rect.top - rootRect.top - 4}px`;
    marker.style.width = `${rect.width}px`;
    marker.style.height = `${rect.height}px`;

    range.startContainer.parentNode.scrollIntoView(true);
  }

  hideMarker() {
    const root = this.shadowRoot.getElementById('view');
    const marker = root.querySelector('[part=highlight]');
    if (marker) {
      marker.style.top = '-1000px';
    }
  }

  _initAnnotationColors() {
    this._annotationColors = new Map();
    const types = new Set();
    const elem = this.shadowRoot.getElementById('view')
    elem.querySelectorAll('.annotation').forEach((annotation) => {
        types.add(annotation.dataset.type);
    });
    types.forEach((type) => {
      this._annotationColors.set(type, uniqolor(`annotation-${type}-${type}`, {
        saturation: 70,
        lightness: [30, 60]
      }));
    });
  }

  _checkAnnotationColor(type) {
    if (this._annotationColors.has(type)) {
      return;
    }

    this._annotationColors.set(type, uniqolor(`annotation-${type}-${type}`, {
      saturation: 70,
      lightness: [30, 60]
    }));
    this._annotationStyles();
  }

  _annotationStyles() {
    const view = this.shadowRoot.getElementById('view')
    let styles = view.querySelector('_annotation-styles');
    if (styles) {
      styles.parentNode.removeChild(styles);
    }
    const colorDefs = [];
    const classes = [];
    this._annotationColors.forEach((color, type) => {
      colorDefs.push(`--pb-annotation-${type}: ${color.color};`);
      colorDefs.push(`--pb-annotation-${type}-border: 2px solid var(--pb-annotation-${type});`);
      classes.push(`
        .annotation-${type}::after {
          background-color: var(--pb-annotation-${type});
          color: var(${color.isLight ? '--pb-color-primary' : '--pb-color-inverse'});
        }
      `);
    });
    const css = `
      :host {
        ${colorDefs.join('\n')}
      }

      ${classes.join('\n')}
    `;
    styles = document.createElement('style');
    styles.className = '_annotation-styles';
    styles.innerHTML = css;
    view.appendChild(styles);
  }

  static get styles() {
    return [
      super.styles,
      css`
        .annotation-type {
            display: inline-block;
            text-align: right;
            padding: 4px;
        }

        .annotation-popup .toolbar {
            margin-top: 1em;
        }

        .annotation-popup table {
          width: 100%;
        }

        .annotation-popup td:nth-child(1) {
          font-weight: bold;
        }

        .annotation-popup td:nth-child(1)::after {
          content: ': ';
        }

        .annotation {
            pointer-events: none;
            cursor: pointer;
        }

        .annotation::after {
            content: attr(data-type);
            margin-left: 4px;
            pointer-events: all;
            font-family: var(--pb-base-font-family);
            font-size: .8rem;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-variant: normal;
            padding: 2px;
        }`
    ];
  }
};

customElements.define('pb-view-annotate', PbViewAnnotate);