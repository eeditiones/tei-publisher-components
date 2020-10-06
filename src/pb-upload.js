import { LitElement, html } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@vaadin/vaadin-upload';
import '@polymer/paper-button';

/**
 * Component for uploading resources to TEI Publisher or a generated app.
 *
 * @fires pb-start-update - Fired before the element updates its content
 * @fires pb-end-update - Fired after the element has finished updating its content
 * @fires pb-load - Fired after the upload has completed
 * @fires pb-collection - when received, sets the upload collection to the one passed from the event
 * @fires pb-refresh-odds - Fired if an ODD file was uploaded
 */
export class PbUpload extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            /**
             * the server-side script to handle the upload
             */
            target: {
                type: String
            },
            /**
             * a comma-separated list of file suffixes to accept for upload
             * (by default: .xml,.tei,.odd,.docx)
             */
            accept: {
                type: String
            }
        };
    }

    connectedCallback() {
        if (super.connectedCallback) {
            super.connectedCallback();
        }
        this.subscribeTo('pb-collection', (ev) => {
            this.target = ev.detail.collection;
        });
    }

    firstUpdated() {
        super.firstUpdated();
        const uploader = this.shadowRoot.getElementById('uploader');
        uploader.addEventListener('upload-before', (event) => {
            this.emitTo('pb-start-update');
            if (this.minApiVersion('1.0.0') && this.target) {
                event.detail.file.uploadTarget = `${uploader.target}${encodeURIComponent(this.target)}`;
            }
        });
        uploader.addEventListener('upload-request', (event) => {
            if (this.target && this.lessThanApiVersion('1.0.0')) {
                event.detail.formData.append('root', this.target);
            }
        });
        uploader.addEventListener('upload-error', (event) => {
            // eslint-disable-next-line no-param-reassign
            event.detail.file.error = event.detail.xhr.responseText;
            this.emitTo('pb-end-update');
        });
        uploader.addEventListener('upload-success', () => {
            let done = true;
            const oddsUploaded = [];
            uploader.files.forEach((file) => {
                if (!(file.complete || file.error || file.aborted)) {
                    done = false;
                } else if (/^.*\.odd$/.test(file.name)) {
                    oddsUploaded.push(file.name);
                }
            });
            if (done) {
                this.emitTo('pb-end-update');
                this.emitTo('pb-load');
                if (oddsUploaded.length > 0) {
                    this.emitTo('pb-refresh-odds', { 'odds': oddsUploaded });
                }
            }
        });
        PbUpload.waitOnce('pb-page-ready', () => {
            if (this.minApiVersion('1.0.0')) {
                uploader.target = `${this.getEndpoint()}/api/upload/`;
            } else {
                uploader.target = `${this.getEndpoint()}/modules/lib/upload.xql`;
            }
        });
    }

    render() {
        return html`
            <vaadin-upload id="uploader" accept="${this.accept}" method="post" tabindex="-1" form-data-name="files[]"
                with-credentials>
                <span slot="drop-label">${translate('upload.drop', { accept: this.accept })}</span>
                <paper-button id="uploadBtn" slot="add-button">${translate('upload.upload')}</paper-button>
            </vaadin-upload>
        `;
    }
}
customElements.define('pb-upload', PbUpload);