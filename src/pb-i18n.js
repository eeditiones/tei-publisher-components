import { LitElement, html } from 'lit-element';
import { directive, NodePart, AttributePart } from "lit-html";

// Cache created lit-html parts, so we can update translations
const partCache = new Map();

// The currently used i18next translation function
let _translate;

/** 
 * Called by pb-page before the first pb-i18n-update
 * to make sure the translation function is set.
 */
export function initTranslation(translate) {
    _translate = translate;
}

function isConnected(part) {
    if (part instanceof NodePart) {
        return part.startNode.isConnected;

    }
    if (part instanceof AttributePart) {
        return part.committer.element.isConnected;

    }
    return part.element.isConnected;
}

function removeDisconnectedParts() {
    Object.keys(partCache).forEach((part) => {
        if (!isConnected(part)) {
            partCache.delete(part);
        }
    });
}

function whenIdle(cb) {
    "requestIdleCallback" in window ? window.requestIdleCallback(cb) : setTimeout(cb)
}

function updatePart(part, cb) {

    // Grab the new value
    const newValue = cb();

    // Only set the value if it has changed
    if (part.value === newValue) {
        return;
    }

    // Set the new value
    part.setValue(newValue);
    part.commit();
}

function updateParts(options) {
    _translate = options.t;
    partCache.forEach((cb, part) => {
        if (isConnected(part)) {
            updatePart(part, cb);
        }
    });
}

/**
 * Translate the given string using i18n.
 * 
 * @param {String} key The key to translate
 * @param {Object} [value] Optional object containing interpolation values
 * @returns 
 */
export function get(key, value) {
    if (_translate) {
        return _translate(key, value);
    }
    return key;
}

export const langChanged = directive((cb) => (part) => {
    partCache.set(part, cb);
    updatePart(part, cb);
});

/**
 * lit-html directive to translate a given key into the target language
 * using i18next.
 * 
 * @param {String} key The key to translate
 * @param {Object} [value] Optional object containing interpolation values
 */
export const translate = (key, value) => langChanged(() => get(key, value));

document.addEventListener('pb-i18n-update', (ev) => {
    updateParts(ev.detail);
});

// start a background task to garbage collect parts
setInterval(() => whenIdle(() => removeDisconnectedParts()), 1000 * 60);

/**
 * Insert translated text somewhere on an HTML page. If no translation is found,
 * display the contained content.
 */
export class PbI18n extends LitElement {
    static get properties() {
        return {
            ...super.properties,
            /**
             * The i18n key to use for looking up the translation.
             */
            key: {
                type: String
            },
            /**
             * Optional interpolation parameters to be passed to the
             * translation function
             */
            options: {
                type: Object
            },
            _translated: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.key = 'missing-key';
        this._options = null;
        this._translated = null;
    }

    connectedCallback() {
        super.connectedCallback();
        
        this._fallback = this.innerHTML;

        document.addEventListener('pb-i18n-update', this._translate.bind(this));

        this._translate();
    }

    set options(value) {
        this._options = value;
        this._translate();
    }

    _translate() {
        const transl = get(this.key, this._options);
        if (transl && transl !== this.key) {
            this._translated = transl;
        } else {
            this._translated = null;
        }
    }

    render() {
        return this._translated ? this._translated : this._fallback;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('pb-i18n', PbI18n);