import { LitElement } from 'lit-element';
import { pbMixin } from './pb-mixin';

/**
 * Represents a Publisher document. It has no visual presentation but holds meta-data
 * about the document to be used by other components like `pb-view`. Every `pb-view`
 * references a `pb-document`.
 * `pb-document` requires an id attribute to allow other components to access it.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-document.html
 * @appliesMixin pbMixin
 */
class PbDocument extends pbMixin(LitElement) {

    static get properties() {
        return {
            ...super.properties,
            /**
             * The path to the document to be loaded. Should be relative to `root`.
             */
            path: {
                type: String,
                reflect: true
            },
            /**
             * The root collection which will be used to resolve relative paths
             * specified in `path`.
             */
            rootPath: {
                type: String,
                attribute: 'root-path'
            },
            /**
             * The odd file which should be used to render this document by default. Might be
             * overwritten in a `pb-view`. The odd should be specified by its name without path
             * or the `.odd` suffix.
             */
            odd: {
                type: String,
                reflect: true
            },
            /**
             * The default view to be used for displaying this document. Can be either `page`, `div` or `simple`.
             * Might be overwritten in a `pb-view`.
             *
             * Value | Displayed content
             * ------|------------------
             * `page` | content is displayed page by page as determined by tei:pb
             * `div` | content is displayed by divisions
             * `single` | do not paginate but display entire content at once
             */
            view: {
                type: String,
                reflect: true
            },
            sourceView: {
                type: String,
                attribute: 'source-view'
            }
        };
    }

    constructor() {
        super();
        this.path = '';
        this.rootPath = '';
    }

    connectedCallback() {
        super.connectedCallback();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        if (oldVal) {
            console.log('<pb-document> Emit update event');
            this.emitTo('pb-document', this);
        }
    }

    /**
     * Returns the name of the document without path.
     *
     * @returns {string} Name of the document
     */
    getFileName() {
        return this.path.replace(/^.*?([^\/]+)$/, '$1');
    }

    /**
     * Returns the full path to the document.

     * @returns {string} Full path to the document
     */
    getFullPath() {
        return this.rootPath + '/' + this.path;
    }
}

customElements.define('pb-document', PbDocument);
