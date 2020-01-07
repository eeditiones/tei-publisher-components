import { LitElement, html } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import { translate } from "./pb-i18n.js";
import '@vaadin/vaadin-upload';
import '@polymer/paper-button';

/**
 * Component for uploading resources to TEI Publisher or a generated app.
 *
 * @customElement pb-upload
 * @polymer
 * @demo demo/pb-browse-docs.html
 * @appliesMixin pbMixin
 */
export class PbUpload extends pbMixin(LitElement) {
    static get properties() {
        return {
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
            },
            ...super.properties
        };
    }

    connectedCallback() {
        if (super.connectedCallback) {
            super.connectedCallback();
        }
    }

    firstUpdated() {
        super.firstUpdated();
        const uploader = this.shadowRoot.getElementById('uploader');
        uploader.addEventListener('upload-before', () => {
            this.emitTo('pb-start-update');
        });
        uploader.addEventListener('upload-request', (event) => {
            if (this.target) {
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
            uploader.files.forEach((file) => {
                if (!(file.complete || file.error || file.aborted)) {
                    done = false;
                }
            });
            if (done) {
                this.emitTo('pb-end-update');
                this.emitTo('pb-load');
            }
        });
        uploader.target = `${this.getEndpoint()}/modules/lib/upload.xql`;
    }

    render() {
        return html`
            <vaadin-upload id="uploader" accept="${this.accept}" method="post" tabindex="-1" form-data-name="files[]">
                <span slot="drop-label">${translate('upload.drop', { accept: this.accept })}</span>
                <paper-button id="uploadBtn" slot="add-button">${translate('upload.upload')}</paper-button>
            </vaadin-upload>
        `;
    }
}
customElements.define('pb-upload', PbUpload);