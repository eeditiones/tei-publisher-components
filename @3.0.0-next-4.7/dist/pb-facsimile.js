import{p as e,a as t,r as i,x as o,i as s}from"./pb-mixin-B7EAqf7q.js";import"./es-global-bridge-D8ZcUcx_.js";class r extends(e(t)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{showNavigationControl:{type:Boolean,attribute:"show-navigation-control"},showNavigator:{type:Boolean,attribute:"show-navigator"},showSequenceMode:{type:Boolean,attribute:"show-sequence-control"},showHomeControl:{type:Boolean,attribute:"show-home-control"},showFullPageControl:{type:Boolean,attribute:"show-full-page-control"},showDownloadButton:{type:Boolean,attribute:"show-download-control"},defaultZoomLevel:{type:Number,attribute:"default-zoom-level"},showRotationControl:{type:Boolean,attribute:"show-rotation-control"},constrainDuringPan:{type:Boolean,attribute:"contrain-during-pan"},visibilityRatio:{type:Number,attribute:"visibility-ratio"},referenceStrip:{type:Boolean,attribute:"reference-strip"},referenceStripSizeRatio:{type:Number,attribute:"reference-strip-size-ratio"},type:{type:String},baseUri:{type:String,attribute:"base-uri"},prefixUrl:{type:String,attribute:"prefix-url"},facsimiles:{type:Array},loaded:{type:Boolean,reflect:!0},crossOriginPolicy:{type:String,attribute:"cors"}})}constructor(){super(),this._facsimiles=[],this.baseUri="",this.crossOriginPolicy="anonymous",this.type="iiif",this.visibilityRatio=1,this.defaultZoomLevel=0,this.sequenceMode=!1,this.showHomeControl=!1,this.showNavigator=!1,this.showNavigationControl=!1,this.showFullPageControl=!1,this.showRotationControl=!1,this.showDownloadButton=!1,this.constrainDuringPan=!1,this.referenceStrip=!1,this.referenceStripSizeRatio=.2,this.prefixUrl="../images/openseadragon/",this.loaded=!1,this._facsimileObserverScheduled=!1}set facsimiles(e){this._facsimiles=e||[],this.loaded=this._facsimiles.length>0,this.emitTo("pb-facsimile-status",{status:"loading"})}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._clearAll.bind(this)),this.subscribeTo("pb-load-facsimile",e=>{const{element:t,order:i}=e.detail,o=this._facsimiles.map(e=>e.getOrder?e.getOrder():Number.POSITIVE_INFINITY).reduce((e,t,o)=>i<t?e:i===t?o:o+1,0);this._facsimiles.splice(o,0,t),this.loaded=this._facsimiles.length>0,this._scheduleFacsimileObserver()}),this.subscribeTo("pb-show-annotation",this._showAnnotationListener.bind(this))}firstUpdated(){try{const e=window.ESGlobalBridge.requestAvailability(),t=i("../lib/openseadragon.min.js");if(e.imports.openseadragon)return void this._initOpenSeadragon();window.addEventListener("es-bridge-openseadragon-loaded",this._initOpenSeadragon.bind(this),{once:!0}),e.load("openseadragon",t)}catch(e){console.error(e.message)}}render(){return o`
      <slot name="before"></slot>
      <!-- Openseadragon -->

      <div id="viewer" part="image"></div>
      <slot name="after"></slot>
      ${this.showDownloadButton?o`<a id="downloadBtn" title="Download">&#8676;</a>`:""}
    `}static get styles(){return s`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        background: transparent;
      }

      #runtime-overlay {
        border: var(--pb-facsimile-border, 4px solid rgba(0, 0, 128, 0.5));
      }

      #viewer {
        flex: 1;
        position: relative;
        max-height: var(--pb-facsimile-height, auto);
        width: 100%;
      }
      #downloadBtn {
        position: absolute;
        z-index: 100;
        bottom: 0.25rem;
        width: 1.35rem;
        height: 1.35rem;
        transform: rotate(-90deg);
        cursor: pointer;
        border: thin solid #d7dde8;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem;
        background-image: linear-gradient(to left, #fafafa 0%, #d7dde8 51%, #bbbbbb 100%);
        font-size: 1.2rem;
        box-shadow: -2px 1px 5px 0px rgba(0, 0, 0, 0.75);
      }
      #downloadBtn:hover {
        background-image: radial-gradient(white, #efefef);
      }
    `}_initOpenSeadragon(){const e=i(this.prefixUrl+(this.prefixUrl.endsWith("/")?"":"/")),t={element:this.shadowRoot.getElementById("viewer"),prefixUrl:e,preserveViewport:!0,showZoomControl:!0,sequenceMode:this.showSequenceMode,showHomeControl:this.showHomeControl,showFullPageControl:this.showFullPageControl,showNavigator:this.showNavigator,showNavigationControl:this.showNavigationControl,showRotationControl:this.showRotationControl,autoHideControls:!1,visibilityRatio:1,minZoomLevel:1,defaultZoomLevel:this.defaultZoomLevel,constrainDuringPan:!0,crossOriginPolicy:this.crossOriginPolicy};this.referenceStrip&&(t.showReferenceStrip=!0,t.referenceStripSizeRatio=this.referenceStripSizeRatio),this.viewer=OpenSeadragon(t),this.showFullPageControl&&this._overrideFullscreenButton(),this.viewer.addHandler("open",()=>{this.resetZoom(),this.emitTo("pb-facsimile-status",{status:"loaded",facsimiles:this._facsimiles})}),this.viewer.addHandler("open-failed",e=>{console.error("<pb-facsimile> open failed: %s",e.message),this.loaded=!1,this.emitTo("pb-facsimile-status",{status:"fail"})});const o=this.shadowRoot.querySelector("#downloadBtn");this.showDownloadButton&&o.addEventListener("click",e=>{e.preventDefault();const t=this.viewer.drawer.canvas.toDataURL("image/png"),i=document.createElement("a");i.href=t,i.download="download",i.click()}),this.ownerPage=document.querySelector("pb-page"),this.ownerPage&&(this.pbPageDisplay=window.getComputedStyle(this.ownerPage).getPropertyValue("display"),this.viewer.addHandler("full-screen",e=>{e.fullScreen?this.ownerPage.style.display="none":(this.viewer.clearOverlays(),this.emitTo("pb-refresh"),this.ownerPage.style.display=this.pbPageDisplay)})),this._scheduleFacsimileObserver(),console.log("facsimile ready"),this.signalReady()}_scheduleFacsimileObserver(){this._facsimileObserverScheduled||(this._facsimileObserverScheduled=!0,setTimeout(()=>{this._facsimileObserverScheduled=!1,this._facsimileObserver()},0))}_facsimileObserver(){if(!this.viewer)return;if(0===this._facsimiles.length)return void this.viewer.close();const e=10,t=this._facsimiles.slice(0,e).map(e=>{const t=this.baseUri+(e.getImage?e.getImage():e);return"iiif"===this.type?`${t}/info.json`:{tileSource:{type:"image",url:t,buildPyramid:!1}}}),i=[],o=new Set;for(const e of t){const t=JSON.stringify(e);o.has(t)||(o.add(t),i.push(e))}this.viewer.open(i),this.viewer.goToPage(0)}_clearAll(){this.viewer&&(this.resetZoom(),this.viewer.clearOverlays(),this.facsimiles=[])}_showAnnotationListener(e){if(!this.viewer)return;const t="runtime-overlay";if(this.overlay)try{this.viewer.removeOverlay(this.overlay)}catch(e){}if(!e.detail.file||0===e.detail.file)return console.error("file missing",e.detail);if(e.detail.coordinates&&(!e.detail.coordinates[0]||4!==e.detail.coordinates.length))return console.error("coords incomplete or missing",e.detail);const i=e.detail.element?this._pageByElement(e.detail.element):this._pageIndexByUrl(e.detail.file);if(i<0)return console.error("page not found",e.detail);if(this.viewer.currentPage()!==i&&this.viewer.goToPage(i),e.detail.coordinates){const[i,o,s,r]=e.detail.coordinates,a=this.viewer.world.getItemAt(0);if(!a)return void console.error("No tiled image available yet for annotation.");const n=a.viewportToImageRectangle(a.getBounds(!0));n.containsPoint(new OpenSeadragon.Point(i,o))||this.viewer.viewport.fitBoundsWithConstraints(a.imageToViewportRectangle(i,o,n.width,n.height));const l=document.createElement("div");this.overlay=l,l.id=t;const d=a.imageToViewportRectangle(i,o,s,r);this.viewer.addOverlay({element:l,location:d})}}_pageByElement(e){return this._facsimiles.indexOf(e)}_pageIndexByUrl(e){return this._facsimiles.findIndex(t=>t.getImage()===e)}resetZoom(){this.viewer&&this.viewer.viewport.goHome()}_overrideFullscreenButton(){const e=this.viewer.buttonGroup.buttons.find(e=>"Toggle full page"===e.tooltip);if(!e)return;const t=async()=>{document.fullscreenElement?await document.exitFullscreen():await this.viewer.element.requestFullscreen()};e.onRelease=t;const i=e.raiseEvent;e.raiseEvent=(o,s)=>{"release"===o?t():i.call(e,o,s)}}}customElements.get("pb-facsimile")||customElements.define("pb-facsimile",r);export{r as PbFacsimile};
