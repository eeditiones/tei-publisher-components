import"./polymer-hack.js";import{d as t,P as e,h as n,I as r,a as o,b as s,c as a,D as l,e as c,f as h,G as d,g as p,i as u,r as g,j as f,k as m}from"./paper-checkbox-c9177e35.js";import{P as v,I as b,a as y,b as _,c as w,N as x,d as k,e as A,f as S}from"./paper-listbox-1fc346ac.js";import{t as z,p as C,l as E,P as T,E as L,T as M,i as O}from"./vaadin-element-mixin-0bf3e21e.js";import{g as H,h as I,c as R,r as P,L as V,d as D,p as N,a as F,w as B,b as j,e as q,m as U}from"./pb-mixin-e1183270.js";import{t as W,i as Y,g as G}from"./pb-i18n-b62828ba.js";import{u as K}from"./paper-icon-button-c15eb1cf.js";import"./es-global-bridge-4240f389.js";import"./iron-form-a25b58de.js";
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const X={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,i){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),i)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var n=this.domHost;this.scrollTarget=n&&n.$?n.$[e]:t(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var i;"object"==typeof t?(i=t.left,e=t.top):i=t,i=i||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(i,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var i=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}},Z={},Q=function(t,e){if(null!=Z[t])throw new Error("effect `"+t+"` is already registered.");Z[t]=e},J=[X,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var i=Z[t];if(!i)throw new ReferenceError(this._getUndefinedMsg(t));var n=this._boundEffect(i,e||{});return n.setUp(),n},_effectsChanged:function(t,e,i){this._tearDownEffects(),t&&i&&(t.split(" ").forEach((function(t){var i;""!==t&&((i=Z[t])?this._effects.push(this._boundEffect(i,e[t])):console.warn(this._getUndefinedMsg(t)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var i=parseFloat(e.startsAt||0),n=parseFloat(e.endsAt||1),r=n-i,o=function(){},s=0===i&&1===n?t.run:function(e,n){t.run.call(this,Math.max(0,(e-i)/r),n)};return{setUp:t.setUp?t.setUp.bind(this,e):o,run:t.run?s.bind(this):o,tearDown:t.tearDown?t.tearDown.bind(this):o}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(t){t.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(t,e)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
function tt(t,e,i,n){i.apply(n,e.map((function(e){return e[0]+(e[1]-e[0])*t})))}
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Q("blend-background",{setUp:function(){var t={};t.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),t.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),t.backgroundFrontLayer.style.willChange="opacity",t.backgroundFrontLayer.style.transform="translateZ(0)",t.backgroundRearLayer.style.willChange="opacity",t.backgroundRearLayer.style.transform="translateZ(0)",t.backgroundRearLayer.style.opacity=0,this._fxBlendBackground=t},run:function(t,e){var i=this._fxBlendBackground;i.backgroundFrontLayer.style.opacity=1-t,i.backgroundRearLayer.style.opacity=t},tearDown:function(){delete this._fxBlendBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Q("fade-background",{setUp:function(t){var e={},i=t.duration||"0.5s";e.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),e.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),e.backgroundFrontLayer.style.willChange="opacity",e.backgroundFrontLayer.style.webkitTransform="translateZ(0)",e.backgroundFrontLayer.style.transitionProperty="opacity",e.backgroundFrontLayer.style.transitionDuration=i,e.backgroundRearLayer.style.willChange="opacity",e.backgroundRearLayer.style.webkitTransform="translateZ(0)",e.backgroundRearLayer.style.transitionProperty="opacity",e.backgroundRearLayer.style.transitionDuration=i,this._fxFadeBackground=e},run:function(t,e){var i=this._fxFadeBackground;t>=1?(i.backgroundFrontLayer.style.opacity=0,i.backgroundRearLayer.style.opacity=1):(i.backgroundFrontLayer.style.opacity=1,i.backgroundRearLayer.style.opacity=0)},tearDown:function(){delete this._fxFadeBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Q("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}}),Q("resize-title",{setUp:function(){var t=this._getDOMRef("mainTitle"),e=this._getDOMRef("condensedTitle");if(!e)return console.warn("Scroll effect `resize-title`: undefined `condensed-title`"),!1;if(!t)return console.warn("Scroll effect `resize-title`: undefined `main-title`"),!1;e.style.willChange="opacity",e.style.webkitTransform="translateZ(0)",e.style.transform="translateZ(0)",e.style.webkitTransformOrigin="left top",e.style.transformOrigin="left top",t.style.willChange="opacity",t.style.webkitTransformOrigin="left top",t.style.transformOrigin="left top",t.style.webkitTransform="translateZ(0)",t.style.transform="translateZ(0)";var i=t.getBoundingClientRect(),n=e.getBoundingClientRect(),r={};r.scale=parseInt(window.getComputedStyle(e)["font-size"],10)/parseInt(window.getComputedStyle(t)["font-size"],10),r.titleDX=i.left-n.left,r.titleDY=i.top-n.top,r.condensedTitle=e,r.title=t,this._fxResizeTitle=r},run:function(t,e){var i=this._fxResizeTitle;this.condenses||(e=0),t>=1?(i.title.style.opacity=0,i.condensedTitle.style.opacity=1):(i.title.style.opacity=1,i.condensedTitle.style.opacity=0),tt(Math.min(1,t),[[1,i.scale],[0,-i.titleDX],[e,e-i.titleDY]],(function(t,e,n){this.transform("translate("+e+"px, "+n+"px) scale3d("+t+", "+t+", 1)",i.title)}),this)},tearDown:function(){delete this._fxResizeTitle}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Q("parallax-background",{setUp:function(t){var e={},i=parseFloat(t.scalar);e.background=this._getDOMRef("background"),e.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),e.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),e.deltaBg=e.backgroundFrontLayer.offsetHeight-e.background.offsetHeight,0===e.deltaBg?(isNaN(i)&&(i=.8),e.deltaBg=(this._dHeight||0)*i):(isNaN(i)&&(i=1),e.deltaBg=e.deltaBg*i),this._fxParallaxBackground=e},run:function(t,e){var i=this._fxParallaxBackground;this.transform("translate3d(0px, "+i.deltaBg*Math.min(1,t)+"px, 0px)",i.backgroundFrontLayer),i.backgroundRearLayer&&this.transform("translate3d(0px, "+i.deltaBg*Math.min(1,t)+"px, 0px)",i.backgroundRearLayer)},tearDown:function(){delete this._fxParallaxBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Q("material",{setUp:function(){return this.effects="waterfall resize-title blend-background parallax-background",!1}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Q("resize-snapped-title",{setUp:function(t){var e=this._getDOMRef("mainTitle"),i=this._getDOMRef("condensedTitle"),n=t.duration||"0.2s",r={};return i?e?(e.style.transitionProperty="opacity",e.style.transitionDuration=n,i.style.transitionProperty="opacity",i.style.transitionDuration=n,r.condensedTitle=i,r.title=e,void(this._fxResizeSnappedTitle=r)):(console.warn("Scroll effect `resize-snapped-title`: undefined `main-title`"),!1):(console.warn("Scroll effect `resize-snapped-title`: undefined `condensed-title`"),!1)},run:function(t,e){var i=this._fxResizeSnappedTitle;t>0?(i.title.style.opacity=0,i.condensedTitle.style.opacity=1):(i.title.style.opacity=1,i.condensedTitle.style.opacity=0)},tearDown:function(){var t=this._fxResizeSnappedTitle;t.title.style.transition="",t.condensedTitle.style.transition="",delete this._fxResizeSnappedTitle}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var e=t(this).parentNode,i=t(this).getOwnerRoot();return this.for?t(i).querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:e},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(t){"entry"===t?this.show():"exit"===t&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===t(this).textContent.trim()){for(var e=!0,i=t(this).getEffectiveChildNodes(),n=0;n<i.length;n++)if(""!==i[n].textContent.trim()){e=!1;break}if(e)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var e,i,n=this.offsetParent.getBoundingClientRect(),r=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),s=(r.width-o.width)/2,a=(r.height-o.height)/2,l=r.left-n.left,c=r.top-n.top;switch(this.position){case"top":e=l+s,i=c-o.height-t;break;case"bottom":e=l+s,i=c+r.height+t;break;case"left":e=l-o.width-t,i=c+a;break;case"right":e=l+r.width+t,i=c+a}this.fitToVisibleBounds?(n.left+e+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,e)+"px",this.style.right="auto"),n.top+i+o.height>window.innerHeight?(this.style.bottom=n.height-c+t+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,i)+"px",this.style.bottom="auto")):(this.style.left=e+"px",this.style.top=i+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(t){500!==t&&this.updateStyles({"--paper-tooltip-delay-in":t+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var e=this.animationConfig[t][0].timing.delay;"entry"===t?this.updateStyles({"--paper-tooltip-delay-in":e+"ms"}):"exit"===t&&this.updateStyles({"--paper-tooltip-delay-out":e+"ms"})}return this.animationConfig[t][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const et=n`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;et.setAttribute("strip-whitespace",""),e({_template:et,is:"paper-fab",behaviors:[v],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(t,e){return t.length>0||e.length>0}});var it=function(t){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,n={},r={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof o?new o(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++i}),t.__id},clone:function t(e,i){var n,o;switch(i=i||{},r.util.type(e)){case"Object":if(o=r.util.objId(e),i[o])return i[o];for(var s in n={},i[o]=n,e)e.hasOwnProperty(s)&&(n[s]=t(e[s],i));return n;case"Array":return o=r.util.objId(e),i[o]?i[o]:(n=[],i[o]=n,e.forEach((function(e,r){n[r]=t(e,i)})),n);default:return e}},getLanguage:function(t){for(;t;){var i=e.exec(t.className);if(i)return i[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,i){t.className=t.className.replace(RegExp(e,"gi"),""),t.classList.add("language-"+i)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var i in e)if(e[i].src==t)return e[i]}return null}},isActive:function(t,e,i){for(var n="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;t=t.parentElement}return!!i}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(t,e){var i=r.util.clone(r.languages[t]);for(var n in e)i[n]=e[n];return i},insertBefore:function(t,e,i,n){var o=(n=n||r.languages)[t],s={};for(var a in o)if(o.hasOwnProperty(a)){if(a==e)for(var l in i)i.hasOwnProperty(l)&&(s[l]=i[l]);i.hasOwnProperty(a)||(s[a]=o[a])}var c=n[t];return n[t]=s,r.languages.DFS(r.languages,(function(e,i){i===c&&e!=t&&(this[e]=s)})),s},DFS:function t(e,i,n,o){o=o||{};var s=r.util.objId;for(var a in e)if(e.hasOwnProperty(a)){i.call(e,a,e[a],n||a);var l=e[a],c=r.util.type(l);"Object"!==c||o[s(l)]?"Array"!==c||o[s(l)]||(o[s(l)]=!0,t(l,i,a,o)):(o[s(l)]=!0,t(l,i,null,o))}}},plugins:{},highlightAll:function(t,e){r.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,i){var n={callback:i,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),r.hooks.run("before-all-elements-highlight",n);for(var o,s=0;o=n.elements[s++];)r.highlightElement(o,!0===e,n.callback)},highlightElement:function(e,i,n){var o=r.util.getLanguage(e),s=r.languages[o];r.util.setLanguage(e,o);var a=e.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&r.util.setLanguage(a,o);var l={element:e,language:o,grammar:s,code:e.textContent};function c(t){l.highlightedCode=t,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),n&&n.call(l.element)}if(r.hooks.run("before-sanity-check",l),(a=l.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!l.code)return r.hooks.run("complete",l),void(n&&n.call(l.element));if(r.hooks.run("before-highlight",l),l.grammar)if(i&&t.Worker){var h=new Worker(r.filename);h.onmessage=function(t){c(t.data)},h.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(r.highlight(l.code,l.grammar,l.language));else c(r.util.encode(l.code))},highlight:function(t,e,i){var n={code:t,grammar:e,language:i};if(r.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),o.stringify(r.util.encode(n.tokens),n.language)},tokenize:function(t,e){var i=e.rest;if(i){for(var n in i)e[n]=i[n];delete e.rest}var r=new l;return c(r,r.head,t),a(t,r,e,r.head,0),d(r)},hooks:{all:{},add:function(t,e){var i=r.hooks.all;i[t]=i[t]||[],i[t].push(e)},run:function(t,e){var i=r.hooks.all[t];if(i&&i.length)for(var n,o=0;n=i[o++];)n(e)}},Token:o};function o(t,e,i,n){this.type=t,this.content=e,this.alias=i,this.length=0|(n||"").length}function s(t,e,i,n){t.lastIndex=e;var r=t.exec(i);if(r&&n&&r[1]){var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}function a(t,e,i,n,l,d){for(var p in i)if(i.hasOwnProperty(p)&&i[p]){var u=i[p];u=Array.isArray(u)?u:[u];for(var g=0;g<u.length;++g){if(d&&d.cause==p+","+g)return;var f=u[g],m=f.inside,v=!!f.lookbehind,b=!!f.greedy,y=f.alias;if(b&&!f.pattern.global){var _=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,_+"g")}for(var w=f.pattern||f,x=n.next,k=l;x!==e.tail&&!(d&&k>=d.reach);k+=x.value.length,x=x.next){var A=x.value;if(e.length>t.length)return;if(!(A instanceof o)){var S,z=1;if(b){if(!(S=s(w,k,t,v))||S.index>=t.length)break;var C=S.index,E=S.index+S[0].length,T=k;for(T+=x.value.length;C>=T;)T+=(x=x.next).value.length;if(k=T-=x.value.length,x.value instanceof o)continue;for(var L=x;L!==e.tail&&(T<E||"string"==typeof L.value);L=L.next)z++,T+=L.value.length;z--,A=t.slice(k,T),S.index-=k}else if(!(S=s(w,0,A,v)))continue;C=S.index;var M=S[0],O=A.slice(0,C),$=A.slice(C+M.length),H=k+A.length;d&&H>d.reach&&(d.reach=H);var I=x.prev;if(O&&(I=c(e,I,O),k+=O.length),h(e,I,z),x=c(e,I,new o(p,m?r.tokenize(M,m):M,y,M)),$&&c(e,x,$),z>1){var R={cause:p+","+g,reach:H};a(t,e,i,x.prev,k,R),d&&R.reach>d.reach&&(d.reach=R.reach)}}}}}}function l(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function c(t,e,i){var n=e.next,r={value:i,prev:e,next:n};return e.next=r,n.prev=r,t.length++,r}function h(t,e,i){for(var n=e.next,r=0;r<i&&n!==t.tail;r++)n=n.next;e.next=n,n.prev=e,t.length-=r}function d(t){for(var e=[],i=t.head.next;i!==t.tail;)e.push(i.value),i=i.next;return e}if(t.Prism=r,o.stringify=function t(e,i){if("string"==typeof e)return e;if(Array.isArray(e)){var n="";return e.forEach((function(e){n+=t(e,i)})),n}var o={type:e.type,content:t(e.content,i),tag:"span",classes:["token",e.type],attributes:{},language:i},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(o.classes,s):o.classes.push(s)),r.hooks.run("wrap",o);var a="";for(var l in o.attributes)a+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+a+">"+o.content+"</"+o.tag+">"},!t.document)return t.addEventListener?(r.disableWorkerMessageHandler||t.addEventListener("message",(function(e){var i=JSON.parse(e.data),n=i.language,o=i.code,s=i.immediateClose;t.postMessage(r.highlight(o,r.languages[n],n)),s&&t.close()}),!1),r):r;var p=r.util.currentScript();function u(){r.manual||r.highlightAll()}if(p&&(r.filename=p.src,p.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var g=document.readyState;"loading"===g||"interactive"===g&&p&&p.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */"undefined"!=typeof module&&module.exports&&(module.exports=it),"undefined"!=typeof global&&(global.Prism=it),it.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},it.languages.markup.tag.inside["attr-value"].inside.entity=it.languages.markup.entity,it.languages.markup.doctype.inside["internal-subset"].inside=it.languages.markup,it.hooks.add("wrap",(function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))})),Object.defineProperty(it.languages.markup.tag,"addInlined",{value:function(t,e){var i={};i["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:it.languages[e]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};n["language-"+e]={pattern:/[\s\S]+/,inside:it.languages[e]};var r={};r[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return t})),"i"),lookbehind:!0,greedy:!0,inside:n},it.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(it.languages.markup.tag,"addAttribute",{value:function(t,e){it.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:it.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),it.languages.html=it.languages.markup,it.languages.mathml=it.languages.markup,it.languages.svg=it.languages.markup,it.languages.xml=it.languages.extend("markup",{}),it.languages.ssml=it.languages.xml,it.languages.atom=it.languages.xml,it.languages.rss=it.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var i=t.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(it),it.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},it.languages.javascript=it.languages.extend("clike",{"class-name":[it.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),it.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,it.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:it.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:it.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:it.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:it.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:it.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),it.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:it.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),it.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),it.languages.markup&&(it.languages.markup.tag.addInlined("script","javascript"),it.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),it.languages.js=it.languages.javascript,function(){if(void 0!==it&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading…",e=function(t,e){return"✖ Error "+t+" while fetching file: "+e},i="✖ Error: File does not exist or is empty",n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",o="loading",s="loaded",a="failed",l="pre[data-src]:not(["+r+'="'+s+'"]):not(['+r+'="'+o+'"])';it.hooks.add("before-highlightall",(function(t){t.selector+=", "+l})),it.hooks.add("before-sanity-check",(function(e){var i=e.element;if(i.matches(l)){e.code="",i.setAttribute(r,o);var c=i.appendChild(document.createElement("CODE"));c.textContent=t;var p=i.getAttribute("data-src"),u=e.language;if("none"===u){var g=(/\.(\w+)$/.exec(p)||[,"none"])[1];u=n[g]||g}it.util.setLanguage(c,u),it.util.setLanguage(i,u);var f=it.plugins.autoloader;f&&f.loadLanguages(u),h(p,(function(t){i.setAttribute(r,s);var e=d(i.getAttribute("data-range"));if(e){var n=t.split(/\r\n?|\n/g),o=e[0],a=null==e[1]?n.length:e[1];o<0&&(o+=n.length),o=Math.max(0,Math.min(o-1,n.length)),a<0&&(a+=n.length),a=Math.max(0,Math.min(a,n.length)),t=n.slice(o,a).join("\n"),i.hasAttribute("data-start")||i.setAttribute("data-start",String(o+1))}c.textContent=t,it.highlightElement(c)}),(function(t){i.setAttribute(r,a),c.textContent=t}))}})),it.plugins.fileHighlight={highlight:function(t){for(var e,i=(t||document).querySelectorAll(l),n=0;e=i[n++];)it.highlightElement(e)}};var c=!1;it.fileHighlight=function(){c||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),c=!0),it.plugins.fileHighlight.highlight.apply(this,arguments)}}function h(t,n,r){var o=new XMLHttpRequest;o.open("GET",t,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?n(o.responseText):o.status>=400?r(e(o.status,o.statusText)):r(i))},o.send(null)}function d(t){var e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t||"");if(e){var i=Number(e[1]),n=e[2],r=e[3];return n?r?[i,Number(r)]:[i,void 0]:[i,i]}}}(),function(t){t.languages.xquery=t.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),t.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,t.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,t.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,t.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:t.languages.xquery,alias:"language-xquery"};var e=function(t){return"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join("")},i=function(n){for(var r=[],o=0;o<n.length;o++){var s=n[o],a=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===e(s.content[0].content[1])&&r.pop():"/>"===s.content[s.content.length-1].content||r.push({tagName:e(s.content[0].content[1]),openedBraces:0}):!(r.length>0&&"punctuation"===s.type&&"{"===s.content)||n[o+1]&&"punctuation"===n[o+1].type&&"{"===n[o+1].content||n[o-1]&&"plain-text"===n[o-1].type&&"{"===n[o-1].content?r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===s.type&&"}"===s.content?r[r.length-1].openedBraces--:"comment"!==s.type&&(a=!0):r[r.length-1].openedBraces++),(a||"string"==typeof s)&&r.length>0&&0===r[r.length-1].openedBraces){var l=e(s);o<n.length-1&&("string"==typeof n[o+1]||"plain-text"===n[o+1].type)&&(l+=e(n[o+1]),n.splice(o+1,1)),o>0&&("string"==typeof n[o-1]||"plain-text"===n[o-1].type)&&(l=e(n[o-1])+l,n.splice(o-1,1),o--),/^\s+$/.test(l)?n[o]=l:n[o]=new t.Token("plain-text",l,null,l)}s.content&&"string"!=typeof s.content&&i(s.content)}};t.hooks.add("after-tokenize",(function(t){"xquery"===t.language&&i(t.tokens)}))}(Prism),function(){if("undefined"!=typeof Prism){var t=Object.assign||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},e={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};i.prototype={setDefaults:function(e){this.defaults=t(this.defaults,e)},normalize:function(e,i){for(var r in i=t(this.defaults,i)){var o=n(r);"normalize"!==r&&"setDefaults"!==o&&i[r]&&this[o]&&(e=this[o].call(this,e,i[r]))}return e},leftTrim:function(t){return t.replace(/^\s+/,"")},rightTrim:function(t){return t.replace(/\s+$/,"")},tabsToSpaces:function(t,e){return e=0|e||4,t.replace(/\t/g,new Array(++e).join(" "))},spacesToTabs:function(t,e){return e=0|e||4,t.replace(RegExp(" {"+e+"}","g"),"\t")},removeTrailing:function(t){return t.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(t){return t.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(t){var e=t.match(/^[^\S\n\r]*(?=\S)/gm);return e&&e[0].length?(e.sort((function(t,e){return t.length-e.length})),e[0].length?t.replace(RegExp("^"+e[0],"gm"),""):t):t},indent:function(t,e){return t.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++e).join("\t")+"$&")},breakLines:function(t,e){e=!0===e?80:0|e||80;for(var i=t.split("\n"),n=0;n<i.length;++n)if(!(r(i[n])<=e)){for(var o=i[n].split(/(\s+)/g),s=0,a=0;a<o.length;++a){var l=r(o[a]);(s+=l)>e&&(o[a]="\n"+o[a],s=l)}i[n]=o.join("")}return i.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=i),Prism.plugins.NormalizeWhitespace=new i({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",(function(t){var i=Prism.plugins.NormalizeWhitespace;if((!t.settings||!1!==t.settings["whitespace-normalization"])&&Prism.util.isActive(t.element,"whitespace-normalization",!0))if(t.element&&t.element.parentNode||!t.code){var n=t.element.parentNode;if(t.code&&n&&"pre"===n.nodeName.toLowerCase()){for(var r in null==t.settings&&(t.settings={}),e)if(Object.hasOwnProperty.call(e,r)){var o=e[r];if(n.hasAttribute("data-"+r))try{var s=JSON.parse(n.getAttribute("data-"+r)||"true");typeof s===o&&(t.settings[r]=s)}catch(t){}}for(var a=n.childNodes,l="",c="",h=!1,d=0;d<a.length;++d){var p=a[d];p==t.element?h=!0:"#text"===p.nodeName&&(h?c+=p.nodeValue:l+=p.nodeValue,n.removeChild(p),--d)}if(t.element.children.length&&Prism.plugins.KeepMarkup){var u=l+t.element.innerHTML+c;t.element.innerHTML=i.normalize(u,t.settings),t.code=t.element.textContent}else t.code=l+t.code+c,t.code=i.normalize(t.code,t.settings)}}else t.code=i.normalize(t.code,t.settings)}))}function i(e){this.defaults=t({},e)}function n(t){return t.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}))}function r(t){for(var e=0,i=0;i<t.length;++i)t.charCodeAt(i)=="\t".charCodeAt(0)&&(e+=3);return t.length+e}}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var t="line-numbers",e=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(e,i){if("PRE"===e.tagName&&e.classList.contains(t)){var n=e.querySelector(".line-numbers-rows");if(n){var r=parseInt(e.getAttribute("data-start"),10)||1,o=r+(n.children.length-1);i<r&&(i=r),i>o&&(i=o);var s=i-r;return n.children[s]}}},resize:function(t){r([t])},assumeViewportIndependence:!0},n=void 0;window.addEventListener("resize",(function(){i.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+t))))})),Prism.hooks.add("complete",(function(i){if(i.code){var n=i.element,o=n.parentNode;if(o&&/pre/i.test(o.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,t)){n.classList.remove(t),o.classList.add(t);var s,a=i.code.match(e),l=a?a.length+1:1,c=new Array(l+1).join("<span></span>");(s=document.createElement("span")).setAttribute("aria-hidden","true"),s.className="line-numbers-rows",s.innerHTML=c,o.hasAttribute("data-start")&&(o.style.counterReset="linenumber "+(parseInt(o.getAttribute("data-start"),10)-1)),i.element.appendChild(s),r([o]),Prism.hooks.run("line-numbers",i)}}})),Prism.hooks.add("line-numbers",(function(t){t.plugins=t.plugins||{},t.plugins.lineNumbers=!0}))}function r(t){if(0!=(t=t.filter((function(t){var e=o(t)["white-space"];return"pre-wrap"===e||"pre-line"===e}))).length){var i=t.map((function(t){var i=t.querySelector("code"),n=t.querySelector(".line-numbers-rows");if(i&&n){var r=t.querySelector(".line-numbers-sizer"),o=i.textContent.split(e);r||((r=document.createElement("span")).className="line-numbers-sizer",i.appendChild(r)),r.innerHTML="0",r.style.display="block";var s=r.getBoundingClientRect().height;return r.innerHTML="",{element:t,lines:o,lineHeights:[],oneLinerHeight:s,sizer:r}}})).filter(Boolean);i.forEach((function(t){var e=t.sizer,i=t.lines,n=t.lineHeights,r=t.oneLinerHeight;n[i.length-1]=void 0,i.forEach((function(t,i){if(t&&t.length>1){var o=e.appendChild(document.createElement("span"));o.style.display="block",o.textContent=t}else n[i]=r}))})),i.forEach((function(t){for(var e=t.sizer,i=t.lineHeights,n=0,r=0;r<i.length;r++)void 0===i[r]&&(i[r]=e.children[n++].getBoundingClientRect().height)})),i.forEach((function(t){var e=t.sizer,i=t.element.querySelector(".line-numbers-rows");e.style.display="none",e.innerHTML="",t.lineHeights.forEach((function(t,e){i.children[e].style.height=t+"px"}))}))}}function o(t){return t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null}}();const nt=new Map;function rt(t){const e="default"===t?"prism.css":`prism-${t}.css`;if(nt.has(e))return console.log("Using cached theme: %s",e),nt.get(e);const i=new Promise(i=>{const n=P("../css/prismjs/")+e;console.log("<pb-code-highlight> loading theme %s from %s",t,n),fetch(n).then(t=>t.text()).catch(()=>i("")).then(t=>{i(I`<style>${t}</style>`)})});return nt.set(e,i),i}class ot extends(z(V)){static get properties(){return{language:{type:String},code:{type:String},theme:{type:String},lineNumbers:{type:Boolean,attribute:"line-numbers"},_themeStyles:{type:String}}}constructor(){super(),this.language="xml",this.theme="default",this.lineNumbers=!1,this._themeStyles=null}connectedCallback(){super.connectedCallback();let t=this.getAttribute("theme");null===t&&(t=H(this,"--pb-code-highlight-theme","default"),this.setAttribute("theme",t))}firstUpdated(){if(super.firstUpdated(),!this.code){const t=this.querySelector("template");this.code=t?Prism.plugins.NormalizeWhitespace.normalize(t.innerHTML):Prism.plugins.NormalizeWhitespace.normalize(this.textContent)}}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"theme":rt(i).then(t=>{this._themeStyles=t})}}updated(t){if(super.updated(t),t.has("code")){const t=this.shadowRoot.getElementById("pb-code-highlight");if(null!=t){const e=document.createElement("code");e.textContent=this.code,t.replaceChildren(e)}this.highlight()}}highlight(){Prism.highlightAllUnder(this.shadowRoot)}render(){return this.code?I`
                ${this._themeStyles}
                <pre id="pb-code-highlight" class="${this.lineNumbers?"line-numbers":""} language-${this.language}"><code>${this.code}</code></pre>
            `:I`<pre class="line-numbers"><code><code></pre>`}static get styles(){return R`
            :host {
                display: block;
            }
            pre[class*='language-'] {
                margin: 0;
            }
            code[class*='language-'] {
                white-space: var(--pb-code-highlight-white-space, pre);
            }
            pre.line-numbers {
                position: relative;
                padding-left: 3.8em;
                counter-reset: linenumber;
            }

            pre.line-numbers > code {
                position: relative;
                white-space: inherit;
            }

            .line-numbers .line-numbers-rows {
                position: absolute;
                pointer-events: none;
                top: 0;
                font-size: 100%;
                left: -3.8em;
                width: 3em; /* works for line-numbers below 1000 lines */
                letter-spacing: -1px;
                border-right: 1px solid #999;

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

            }

            .line-numbers-rows > span {
                pointer-events: none;
                display: block;
                counter-increment: linenumber;
                height: auto !important;
            }

            .line-numbers-rows > span:before {
                content: counter(linenumber);
                color: #999;
                display: block;
                padding-right: 0.8em;
                text-align: right;
            }
        `}}customElements.define("pb-code-highlight",ot);const st="https://teipublisher.com/exist/apps/tei-publisher";class at extends V{static get properties(){return{title:{type:String},code:{type:String},_editorLoaded:{type:Boolean},_showCodeLabel:{type:String},_editCodeLabel:{type:String}}}constructor(){super(),this.title="TEI Publisher Webcomponents Example",this.code="Loading ...",this._showCodeLabel="demo.showCode.show"}connectedCallback(){super.connectedCallback();const t=this.querySelector("template");this.code=at.removeIndent(t.innerHTML),this.code=this.code.replace(/\s*<style[\s\S]*>[\s\S]*?<\/style>\s*/g,"");const e=document.importNode(t.content,!0);this.appendChild(e)}render(){let t=this.code.replace(/(endpoint="[^"]+")/,`endpoint="${st}"`);t=at.indent(t,2);const e=this.querySelector("style");let i="";e&&(i=e.innerText);const n="\n@import url('https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');\n\nbody {\n    margin: 10px 20px;\n    font-size: 16px;\n    font-family: 'Roboto', 'Noto', sans - serif;\n    line-height: 1.42857;\n    font-weight: 300;\n    color: #333333;\n\n    --paper-tooltip-delay-in: 200;\n}\n\n"+at.removeIndent(i),r=`\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n\n        <title>${this.title}</title>\n        <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"><\/script>\n        <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-components-bundle.js"><\/script>\n        <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-leaflet-map.js"><\/script>\n    </head>\n\n    <body>\n    ${t}\n    </body>\n</html>`,o={title:this.title,html:r,html_pre_processor:"none",css:n,css_starter:"normalize",template:!1,editors:110};return I`
            <div class="snippet"><slot></slot></div>
            <pb-code-highlight id="source" theme="coy" language="html" line-numbers .code="${this.code}"></pb-code-highlight>
            <div id="container"></div>
            <div class="buttons">
                <button class="pretty-button" @click="${this._showCode}">${W(this._showCodeLabel)}</button>
                <form action="https://codepen.io/pen/define" method="POST" target="_blank">
                    <input type="hidden" name="data" .value="${JSON.stringify(o)}">
                    <button class="pretty-button" type="submit">${W("demo.editCode.show")}</button>
                </form>
            </div>
        `}_showCode(){const t=this.shadowRoot.getElementById("source");t.classList.contains("open")?(t.classList.remove("open"),this._showCodeLabel="demo.showCode.show"):(t.classList.add("open"),this._showCodeLabel="demo.showCode.hide")}static removeIndent(t){const e=t.match(/^[^\S]*(?=\S)/gm);return e&&e[0].length?(e.sort((t,e)=>t.length-e.length),e[0].length?t.replace(RegExp("^"+e[0],"gm"),""):t):t}static indent(t,e){return t.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++e).join("\t")+"$&")}static get styles(){return R`
            :host {
                display: block;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                padding: 20px;
            }
            pb-code-highlight {
                display: none;
                margin-top: 30px;
            }
            pb-code-highlight.open {
                display: block;
            }
            #container {
                margin-top: 20px;
            }
            .buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                padding-top: 10px;
                border-top: 1px solid var(--google-grey-400, #999);
            }
            .pretty-button {
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;
                margin: 12px 0;
                padding: 13px 44px;
                border: 2px solid #2196F3;
                background-color: transparent;
                font-size: 14px;
                font-weight: 500;
                color: #2196F3;
                text-align: center;
                text-decoration: none;
                text-transform: uppercase;
                border-radius: 0;
                -webkit-appearance: none;
                appearance: none;
            }
            .pretty-button:hover,
            .pretty-button:active {
                background-color: #2196F3;
                color: #FFF;
            }
            .pretty-button:disabled {
                background-color: transparent;
                border-color: #999;
                color: #999;
            }
        `}}customElements.define("pb-demo-snippet",at);class lt{static subscribe(t,e,i,n=!1){const r=lt._getChannels(e),o=document.addEventListener(t,t=>{i&&t.detail&&t.detail.key&&r.includes(t.detail.key)&&i(t,o)},{once:n})}static subscribeOnce(t,e=null){const i=lt._getChannels(e);return new Promise(e=>{document.addEventListener(t,t=>{t.detail&&t.detail.key&&i.includes(t.detail.key)&&e(t)},{once:!0})})}static _getChannels(t){return null!==t&&t.length?Array.isArray(t)?t:[t]:[D]}static emit(t,e=null,i=null){const n=i||{};n.key=e||D;const r=new CustomEvent(t,{detail:n});document.dispatchEvent(r)}static ifReady(t){return Array.isArray(t)||(t=[t]),new Promise(e=>{const i=t.length;if(0===i)return void e();let n=i;t.forEach(t=>{if(t._isReady)return n-=1,void(0===n&&e());const i=t.addEventListener("pb-ready",()=>{n-=1,0===n&&(t.removeEventListener("pb-ready",i),e())})})})}}window.pbEvents||(window.pbEvents=lt);const ct="2.23.2";class ht extends V{static get properties(){return Object.assign({version:{type:String,reflect:!0}},super.properties)}constructor(){super(),this.version=ct}connectedCallback(){if(super.connectedCallback(),!this.version){const t=P("../package.json");fetch(t).then(t=>t.json()).then(t=>{this.version=t.version})}}render(){return I`<span>${this.version?this.version:"unknown"}</span>`}createRenderRoot(){return this}}customElements.define("pb-version",ht);var dt="top",pt="bottom",ut="right",gt="left",ft="auto",mt=[dt,pt,ut,gt],vt="start",bt="end",yt="clippingParents",_t="viewport",wt="popper",xt="reference",kt=mt.reduce((function(t,e){return t.concat([e+"-"+vt,e+"-"+bt])}),[]),At=[].concat(mt,[ft]).reduce((function(t,e){return t.concat([e,e+"-"+vt,e+"-"+bt])}),[]),St=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function zt(t){return t?(t.nodeName||"").toLowerCase():null}function Ct(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Et(t){return t instanceof Ct(t).Element||t instanceof Element}function Tt(t){return t instanceof Ct(t).HTMLElement||t instanceof HTMLElement}function Lt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Ct(t).ShadowRoot||t instanceof ShadowRoot)}function Mt(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},r=e.elements[t];Tt(r)&&zt(r)&&(Object.assign(r.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))}function Ot(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],r=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});Tt(n)&&zt(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(t){n.removeAttribute(t)})))}))}}var $t={name:"applyStyles",enabled:!0,phase:"write",fn:Mt,effect:Ot,requires:["computeStyles"]};function Ht(t){return t.split("-")[0]}var It=Math.max,Rt=Math.min,Pt=Math.round;function Vt(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Dt(){return!/^((?!chrome|android).)*safari/i.test(Vt())}function Nt(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),r=1,o=1;e&&Tt(t)&&(r=t.offsetWidth>0&&Pt(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Pt(n.height)/t.offsetHeight||1);var s=(Et(t)?Ct(t):window).visualViewport,a=!Dt()&&i,l=(n.left+(a&&s?s.offsetLeft:0))/r,c=(n.top+(a&&s?s.offsetTop:0))/o,h=n.width/r,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Ft(t){var e=Nt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Bt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&Lt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function jt(t){return Ct(t).getComputedStyle(t)}function qt(t){return["table","td","th"].indexOf(zt(t))>=0}function Ut(t){return((Et(t)?t.ownerDocument:t.document)||window.document).documentElement}function Wt(t){return"html"===zt(t)?t:t.assignedSlot||t.parentNode||(Lt(t)?t.host:null)||Ut(t)}function Yt(t){return Tt(t)&&"fixed"!==jt(t).position?t.offsetParent:null}function Gt(t){var e=/firefox/i.test(Vt());if(/Trident/i.test(Vt())&&Tt(t)&&"fixed"===jt(t).position)return null;var i=Wt(t);for(Lt(i)&&(i=i.host);Tt(i)&&["html","body"].indexOf(zt(i))<0;){var n=jt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}function Kt(t){for(var e=Ct(t),i=Yt(t);i&&qt(i)&&"static"===jt(i).position;)i=Yt(i);return i&&("html"===zt(i)||"body"===zt(i)&&"static"===jt(i).position)?e:i||Gt(t)||e}function Xt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Zt(t,e,i){return It(t,Rt(e,i))}function Qt(t,e,i){var n=Zt(t,e,i);return n>i?i:n}function Jt(){return{top:0,right:0,bottom:0,left:0}}function te(t){return Object.assign({},Jt(),t)}function ee(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var ie=function(t,e){return te("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ee(t,mt))};function ne(t){var e,i=t.state,n=t.name,r=t.options,o=i.elements.arrow,s=i.modifiersData.popperOffsets,a=Ht(i.placement),l=Xt(a),c=[gt,ut].indexOf(a)>=0?"height":"width";if(o&&s){var h=ie(r.padding,i),d=Ft(o),p="y"===l?dt:gt,u="y"===l?pt:ut,g=i.rects.reference[c]+i.rects.reference[l]-s[l]-i.rects.popper[c],f=s[l]-i.rects.reference[l],m=Kt(o),v=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=g/2-f/2,y=h[p],_=v-d[c]-h[u],w=v/2-d[c]/2+b,x=Zt(y,w,_),k=l;i.modifiersData[n]=((e={})[k]=x,e.centerOffset=x-w,e)}}function re(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Bt(e.elements.popper,n)&&(e.elements.arrow=n)}function oe(t){return t.split("-")[1]}var se={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(t,e){var i=t.x,n=t.y,r=e.devicePixelRatio||1;return{x:Pt(i*r)/r||0,y:Pt(n*r)/r||0}}function le(t){var e,i=t.popper,n=t.popperRect,r=t.placement,o=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,p=s.x,u=void 0===p?0:p,g=s.y,f=void 0===g?0:g,m="function"==typeof h?h({x:u,y:f}):{x:u,y:f};u=m.x,f=m.y;var v=s.hasOwnProperty("x"),b=s.hasOwnProperty("y"),y=gt,_=dt,w=window;if(c){var x=Kt(i),k="clientHeight",A="clientWidth";if(x===Ct(i)&&"static"!==jt(x=Ut(i)).position&&"absolute"===a&&(k="scrollHeight",A="scrollWidth"),x=x,r===dt||(r===gt||r===ut)&&o===bt)_=pt,f-=(d&&x===w&&w.visualViewport?w.visualViewport.height:x[k])-n.height,f*=l?1:-1;if(r===gt||(r===dt||r===pt)&&o===bt)y=ut,u-=(d&&x===w&&w.visualViewport?w.visualViewport.width:x[A])-n.width,u*=l?1:-1}var S,z=Object.assign({position:a},c&&se),C=!0===h?ae({x:u,y:f},Ct(i)):{x:u,y:f};return u=C.x,f=C.y,l?Object.assign({},z,((S={})[_]=b?"0":"",S[y]=v?"0":"",S.transform=(w.devicePixelRatio||1)<=1?"translate("+u+"px, "+f+"px)":"translate3d("+u+"px, "+f+"px, 0)",S)):Object.assign({},z,((e={})[_]=b?f+"px":"",e[y]=v?u+"px":"",e.transform="",e))}function ce(t){var e=t.state,i=t.options,n=i.gpuAcceleration,r=void 0===n||n,o=i.adaptive,s=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Ht(e.placement),variation:oe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,le(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,le(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var he={passive:!0};function de(t){var e=t.state,i=t.instance,n=t.options,r=n.scroll,o=void 0===r||r,s=n.resize,a=void 0===s||s,l=Ct(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,he)})),a&&l.addEventListener("resize",i.update,he),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,he)})),a&&l.removeEventListener("resize",i.update,he)}}var pe={left:"right",right:"left",bottom:"top",top:"bottom"};function ue(t){return t.replace(/left|right|bottom|top/g,(function(t){return pe[t]}))}var ge={start:"end",end:"start"};function fe(t){return t.replace(/start|end/g,(function(t){return ge[t]}))}function me(t){var e=Ct(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ve(t){return Nt(Ut(t)).left+me(t).scrollLeft}function be(t,e){var i=Ct(t),n=Ut(t),r=i.visualViewport,o=n.clientWidth,s=n.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;var c=Dt();(c||!c&&"fixed"===e)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a+ve(t),y:l}}function ye(t){var e,i=Ut(t),n=me(t),r=null==(e=t.ownerDocument)?void 0:e.body,o=It(i.scrollWidth,i.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=It(i.scrollHeight,i.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+ve(t),l=-n.scrollTop;return"rtl"===jt(r||i).direction&&(a+=It(i.clientWidth,r?r.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function _e(t){var e=jt(t),i=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+r+n)}function we(t){return["html","body","#document"].indexOf(zt(t))>=0?t.ownerDocument.body:Tt(t)&&_e(t)?t:we(Wt(t))}function xe(t,e){var i;void 0===e&&(e=[]);var n=we(t),r=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Ct(n),s=r?[o].concat(o.visualViewport||[],_e(n)?n:[]):n,a=e.concat(s);return r?a:a.concat(xe(Wt(s)))}function ke(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ae(t,e){var i=Nt(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}function Se(t,e,i){return e===_t?ke(be(t,i)):Et(e)?Ae(e,i):ke(ye(Ut(t)))}function ze(t){var e=xe(Wt(t)),i=["absolute","fixed"].indexOf(jt(t).position)>=0&&Tt(t)?Kt(t):t;return Et(i)?e.filter((function(t){return Et(t)&&Bt(t,i)&&"body"!==zt(t)})):[]}function Ce(t,e,i,n){var r="clippingParents"===e?ze(t):[].concat(e),o=[].concat(r,[i]),s=o[0],a=o.reduce((function(e,i){var r=Se(t,i,n);return e.top=It(r.top,e.top),e.right=Rt(r.right,e.right),e.bottom=Rt(r.bottom,e.bottom),e.left=It(r.left,e.left),e}),Se(t,s,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ee(t){var e,i=t.reference,n=t.element,r=t.placement,o=r?Ht(r):null,s=r?oe(r):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case dt:e={x:a,y:i.y-n.height};break;case pt:e={x:a,y:i.y+i.height};break;case ut:e={x:i.x+i.width,y:l};break;case gt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Xt(o):null;if(null!=c){var h="y"===c?"height":"width";switch(s){case vt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case bt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Te(t,e){void 0===e&&(e={});var i=e,n=i.placement,r=void 0===n?t.placement:n,o=i.strategy,s=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?yt:a,c=i.rootBoundary,h=void 0===c?_t:c,d=i.elementContext,p=void 0===d?wt:d,u=i.altBoundary,g=void 0!==u&&u,f=i.padding,m=void 0===f?0:f,v=te("number"!=typeof m?m:ee(m,mt)),b=p===wt?xt:wt,y=t.rects.popper,_=t.elements[g?b:p],w=Ce(Et(_)?_:_.contextElement||Ut(t.elements.popper),l,h,s),x=Nt(t.elements.reference),k=Ee({reference:x,element:y,strategy:"absolute",placement:r}),A=ke(Object.assign({},y,k)),S=p===wt?A:x,z={top:w.top-S.top+v.top,bottom:S.bottom-w.bottom+v.bottom,left:w.left-S.left+v.left,right:S.right-w.right+v.right},C=t.modifiersData.offset;if(p===wt&&C){var E=C[r];Object.keys(z).forEach((function(t){var e=[ut,pt].indexOf(t)>=0?1:-1,i=[dt,pt].indexOf(t)>=0?"y":"x";z[t]+=E[i]*e}))}return z}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,r=i.boundary,o=i.rootBoundary,s=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?At:l,h=oe(n),d=h?a?kt:kt.filter((function(t){return oe(t)===h})):mt,p=d.filter((function(t){return c.indexOf(t)>=0}));0===p.length&&(p=d);var u=p.reduce((function(e,i){return e[i]=Te(t,{placement:i,boundary:r,rootBoundary:o,padding:s})[Ht(i)],e}),{});return Object.keys(u).sort((function(t,e){return u[t]-u[e]}))}function Me(t){if(Ht(t)===ft)return[];var e=ue(t);return[fe(t),e,fe(e)]}function Oe(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var r=i.mainAxis,o=void 0===r||r,s=i.altAxis,a=void 0===s||s,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,p=i.altBoundary,u=i.flipVariations,g=void 0===u||u,f=i.allowedAutoPlacements,m=e.options.placement,v=Ht(m),b=l||(v===m||!g?[ue(m)]:Me(m)),y=[m].concat(b).reduce((function(t,i){return t.concat(Ht(i)===ft?Le(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:g,allowedAutoPlacements:f}):i)}),[]),_=e.rects.reference,w=e.rects.popper,x=new Map,k=!0,A=y[0],S=0;S<y.length;S++){var z=y[S],C=Ht(z),E=oe(z)===vt,T=[dt,pt].indexOf(C)>=0,L=T?"width":"height",M=Te(e,{placement:z,boundary:h,rootBoundary:d,altBoundary:p,padding:c}),O=T?E?ut:gt:E?pt:dt;_[L]>w[L]&&(O=ue(O));var $=ue(O),H=[];if(o&&H.push(M[C]<=0),a&&H.push(M[O]<=0,M[$]<=0),H.every((function(t){return t}))){A=z,k=!1;break}x.set(z,H)}if(k)for(var I=function(t){var e=y.find((function(e){var i=x.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},R=g?3:1;R>0;R--){if("break"===I(R))break}e.placement!==A&&(e.modifiersData[n]._skip=!0,e.placement=A,e.reset=!0)}}function $e(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function He(t){return[dt,ut,pt,gt].some((function(e){return t[e]>=0}))}function Ie(t){var e=t.state,i=t.name,n=e.rects.reference,r=e.rects.popper,o=e.modifiersData.preventOverflow,s=Te(e,{elementContext:"reference"}),a=Te(e,{altBoundary:!0}),l=$e(s,n),c=$e(a,r,o),h=He(l),d=He(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}function Re(t,e,i){var n=Ht(t),r=[gt,dt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,s=o[0],a=o[1];return s=s||0,a=(a||0)*r,[gt,ut].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}function Pe(t){var e=t.state,i=t.options,n=t.name,r=i.offset,o=void 0===r?[0,0]:r,s=At.reduce((function(t,i){return t[i]=Re(i,e.rects,o),t}),{}),a=s[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=s}function Ve(t){var e=t.state,i=t.name;e.modifiersData[i]=Ee({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}function De(t){return"x"===t?"y":"x"}function Ne(t){var e=t.state,i=t.options,n=t.name,r=i.mainAxis,o=void 0===r||r,s=i.altAxis,a=void 0!==s&&s,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,p=i.tether,u=void 0===p||p,g=i.tetherOffset,f=void 0===g?0:g,m=Te(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),v=Ht(e.placement),b=oe(e.placement),y=!b,_=Xt(v),w=De(_),x=e.modifiersData.popperOffsets,k=e.rects.reference,A=e.rects.popper,S="function"==typeof f?f(Object.assign({},e.rects,{placement:e.placement})):f,z="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,E={x:0,y:0};if(x){if(o){var T,L="y"===_?dt:gt,M="y"===_?pt:ut,O="y"===_?"height":"width",$=x[_],H=$+m[L],I=$-m[M],R=u?-A[O]/2:0,P=b===vt?k[O]:A[O],V=b===vt?-A[O]:-k[O],D=e.elements.arrow,N=u&&D?Ft(D):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Jt(),B=F[L],j=F[M],q=Zt(0,k[O],N[O]),U=y?k[O]/2-R-q-B-z.mainAxis:P-q-B-z.mainAxis,W=y?-k[O]/2+R+q+j+z.mainAxis:V+q+j+z.mainAxis,Y=e.elements.arrow&&Kt(e.elements.arrow),G=Y?"y"===_?Y.clientTop||0:Y.clientLeft||0:0,K=null!=(T=null==C?void 0:C[_])?T:0,X=$+W-K,Z=Zt(u?Rt(H,$+U-K-G):H,$,u?It(I,X):I);x[_]=Z,E[_]=Z-$}if(a){var Q,J="x"===_?dt:gt,tt="x"===_?pt:ut,et=x[w],it="y"===w?"height":"width",nt=et+m[J],rt=et-m[tt],ot=-1!==[dt,gt].indexOf(v),st=null!=(Q=null==C?void 0:C[w])?Q:0,at=ot?nt:et-k[it]-A[it]-st+z.altAxis,lt=ot?et+k[it]+A[it]-st-z.altAxis:rt,ct=u&&ot?Qt(at,et,lt):Zt(u?at:nt,et,u?lt:rt);x[w]=ct,E[w]=ct-et}e.modifiersData[n]=E}}function Fe(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Be(t){return t!==Ct(t)&&Tt(t)?Fe(t):me(t)}function je(t){var e=t.getBoundingClientRect(),i=Pt(e.width)/t.offsetWidth||1,n=Pt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}function qe(t,e,i){void 0===i&&(i=!1);var n=Tt(e),r=Tt(e)&&je(e),o=Ut(e),s=Nt(t,r,i),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!i)&&(("body"!==zt(e)||_e(o))&&(a=Be(e)),Tt(e)?((l=Nt(e,!0)).x+=e.clientLeft,l.y+=e.clientTop):o&&(l.x=ve(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Ue(t){var e=new Map,i=new Set,n=[];function r(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&r(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||r(t)})),n}function We(t){var e=Ue(t);return St.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}function Ye(t){var e;return function(){return e||(e=new Promise((function(i){Promise.resolve().then((function(){e=void 0,i(t())}))}))),e}}function Ge(t){var e=t.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var Ke={placement:"bottom",modifiers:[],strategy:"absolute"};function Xe(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Ze(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,r=e.defaultOptions,o=void 0===r?Ke:r;return function(t,e,i){void 0===i&&(i=o);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ke,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},s=[],a=!1,l={state:r,setOptions:function(i){var s="function"==typeof i?i(r.options):i;h(),r.options=Object.assign({},o,r.options,s),r.scrollParents={reference:Et(t)?xe(t):t.contextElement?xe(t.contextElement):[],popper:xe(e)};var a=We(Ge([].concat(n,r.options.modifiers)));return r.orderedModifiers=a.filter((function(t){return t.enabled})),c(),l.update()},forceUpdate:function(){if(!a){var t=r.elements,e=t.reference,i=t.popper;if(Xe(e,i)){r.rects={reference:qe(e,Kt(i),"fixed"===r.options.strategy),popper:Ft(i)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(t){return r.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var o=r.orderedModifiers[n],s=o.fn,c=o.options,h=void 0===c?{}:c,d=o.name;"function"==typeof s&&(r=s({state:r,options:h,name:d,instance:l})||r)}else r.reset=!1,n=-1}}},update:Ye((function(){return new Promise((function(t){l.forceUpdate(),t(r)}))})),destroy:function(){h(),a=!0}};if(!Xe(t,e))return l;function c(){r.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,o=t.effect;if("function"==typeof o){var a=o({state:r,name:e,instance:l,options:n}),c=function(){};s.push(a||c)}}))}function h(){s.forEach((function(t){return t()})),s=[]}return l.setOptions(i).then((function(t){!a&&i.onFirstUpdate&&i.onFirstUpdate(t)})),l}}var Qe=Ze({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:de,data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:Ve,data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ce,data:{}},$t,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Pe},{name:"flip",enabled:!0,phase:"main",fn:Oe,requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:Ne,requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:ne,effect:re,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ie}]}),Je="tippy-box",ti="tippy-content",ei="tippy-backdrop",ii="tippy-arrow",ni="tippy-svg-arrow",ri={passive:!0,capture:!0},oi=function(){return document.body};function si(t,e,i){if(Array.isArray(t)){var n=t[e];return null==n?Array.isArray(i)?i[e]:i:n}return t}function ai(t,e){var i={}.toString.call(t);return 0===i.indexOf("[object")&&i.indexOf(e+"]")>-1}function li(t,e){return"function"==typeof t?t.apply(void 0,e):t}function ci(t,e){return 0===e?t:function(n){clearTimeout(i),i=setTimeout((function(){t(n)}),e)};var i}function hi(t){return t.split(/\s+/).filter(Boolean)}function di(t){return[].concat(t)}function pi(t,e){-1===t.indexOf(e)&&t.push(e)}function ui(t){return t.filter((function(e,i){return t.indexOf(e)===i}))}function gi(t){return t.split("-")[0]}function fi(t){return[].slice.call(t)}function mi(t){return Object.keys(t).reduce((function(e,i){return void 0!==t[i]&&(e[i]=t[i]),e}),{})}function vi(){return document.createElement("div")}function bi(t){return["Element","Fragment"].some((function(e){return ai(t,e)}))}function yi(t){return ai(t,"NodeList")}function _i(t){return ai(t,"MouseEvent")}function wi(t){return!(!t||!t._tippy||t._tippy.reference!==t)}function xi(t){return bi(t)?[t]:yi(t)?fi(t):Array.isArray(t)?t:fi(document.querySelectorAll(t))}function ki(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function Ai(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function Si(t){var e,i=di(t)[0];return null!=i&&null!=(e=i.ownerDocument)&&e.body?i.ownerDocument:document}function zi(t,e){var i=e.clientX,n=e.clientY;return t.every((function(t){var e=t.popperRect,r=t.popperState,o=t.props.interactiveBorder,s=gi(r.placement),a=r.modifiersData.offset;if(!a)return!0;var l="bottom"===s?a.top.y:0,c="top"===s?a.bottom.y:0,h="right"===s?a.left.x:0,d="left"===s?a.right.x:0,p=e.top-n+l>o,u=n-e.bottom-c>o,g=e.left-i+h>o,f=i-e.right-d>o;return p||u||g||f}))}function Ci(t,e,i){var n=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[n](e,i)}))}function Ei(t,e){for(var i=e;i;){var n;if(t.contains(i))return!0;i=null==i.getRootNode||null==(n=i.getRootNode())?void 0:n.host}return!1}var Ti={isTouch:!1},Li=0;function Mi(){Ti.isTouch||(Ti.isTouch=!0,window.performance&&document.addEventListener("mousemove",Oi))}function Oi(){var t=performance.now();t-Li<20&&(Ti.isTouch=!1,document.removeEventListener("mousemove",Oi)),Li=t}function $i(){var t=document.activeElement;if(wi(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}function Hi(){document.addEventListener("touchstart",Mi,ri),window.addEventListener("blur",$i)}var Ii=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,Ri={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Pi={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Vi=Object.assign({appendTo:oi,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Ri,Pi),Di=Object.keys(Vi),Ni=function(t){Object.keys(t).forEach((function(e){Vi[e]=t[e]}))};function Fi(t){var e=(t.plugins||[]).reduce((function(e,i){var n,r=i.name,o=i.defaultValue;r&&(e[r]=void 0!==t[r]?t[r]:null!=(n=Vi[r])?n:o);return e}),{});return Object.assign({},t,e)}function Bi(t,e){return(e?Object.keys(Fi(Object.assign({},Vi,{plugins:e}))):Di).reduce((function(e,i){var n=(t.getAttribute("data-tippy-"+i)||"").trim();if(!n)return e;if("content"===i)e[i]=n;else try{e[i]=JSON.parse(n)}catch(t){e[i]=n}return e}),{})}function ji(t,e){var i=Object.assign({},e,{content:li(e.content,[t])},e.ignoreAttributes?{}:Bi(t,e.plugins));return i.aria=Object.assign({},Vi.aria,i.aria),i.aria={expanded:"auto"===i.aria.expanded?e.interactive:i.aria.expanded,content:"auto"===i.aria.content?e.interactive?null:"describedby":i.aria.content},i}var qi=function(){return"innerHTML"};function Ui(t,e){t[qi()]=e}function Wi(t){var e=vi();return!0===t?e.className=ii:(e.className=ni,bi(t)?e.appendChild(t):Ui(e,t)),e}function Yi(t,e){bi(e.content)?(Ui(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?Ui(t,e.content):t.textContent=e.content)}function Gi(t){var e=t.firstElementChild,i=fi(e.children);return{box:e,content:i.find((function(t){return t.classList.contains(ti)})),arrow:i.find((function(t){return t.classList.contains(ii)||t.classList.contains(ni)})),backdrop:i.find((function(t){return t.classList.contains(ei)}))}}function Ki(t){var e=vi(),i=vi();i.className=Je,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var n=vi();function r(i,n){var r=Gi(e),o=r.box,s=r.content,a=r.arrow;n.theme?o.setAttribute("data-theme",n.theme):o.removeAttribute("data-theme"),"string"==typeof n.animation?o.setAttribute("data-animation",n.animation):o.removeAttribute("data-animation"),n.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?o.setAttribute("role",n.role):o.removeAttribute("role"),i.content===n.content&&i.allowHTML===n.allowHTML||Yi(s,t.props),n.arrow?a?i.arrow!==n.arrow&&(o.removeChild(a),o.appendChild(Wi(n.arrow))):o.appendChild(Wi(n.arrow)):a&&o.removeChild(a)}return n.className=ti,n.setAttribute("data-state","hidden"),Yi(n,t.props),e.appendChild(i),i.appendChild(n),r(t.props,t.props),{popper:e,onUpdate:r}}Ki.$$tippy=!0;var Xi=1,Zi=[],Qi=[];function Ji(t,e){var i,n,r,o,s,a,l,c=ji(t,Object.assign({},Vi,Fi(mi(e)))),h=!1,d=!1,p=!1,u=!1,g=[],f=ci(X,c.interactiveDebounce),m=Xi++,v=null,b=ui(c.plugins),y={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},_={id:m,reference:t,popper:vi(),popperInstance:v,props:c,state:y,plugins:b,clearDelayTimeouts:lt,setProps:ct,setContent:ht,show:dt,hide:pt,hideWithInteractivity:ut,enable:st,disable:at,unmount:gt,destroy:ft};if(!c.render)return _;var w=c.render(_),x=w.popper,k=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+_.id,_.popper=x,t._tippy=_,x._tippy=_;var A=b.map((function(t){return t.fn(_)})),S=t.hasAttribute("aria-expanded");return Y(),R(),$(),H("onCreate",[_]),c.showOnCreate&&rt(),x.addEventListener("mouseenter",(function(){_.props.interactive&&_.state.isVisible&&_.clearDelayTimeouts()})),x.addEventListener("mouseleave",(function(){_.props.interactive&&_.props.trigger.indexOf("mouseenter")>=0&&L().addEventListener("mousemove",f)})),_;function z(){var t=_.props.touch;return Array.isArray(t)?t:[t,0]}function C(){return"hold"===z()[0]}function E(){var t;return!(null==(t=_.props.render)||!t.$$tippy)}function T(){return l||t}function L(){var t=T().parentNode;return t?Si(t):document}function M(){return Gi(x)}function O(t){return _.state.isMounted&&!_.state.isVisible||Ti.isTouch||o&&"focus"===o.type?0:si(_.props.delay,t?0:1,Vi.delay)}function $(t){void 0===t&&(t=!1),x.style.pointerEvents=_.props.interactive&&!t?"":"none",x.style.zIndex=""+_.props.zIndex}function H(t,e,i){var n;(void 0===i&&(i=!0),A.forEach((function(i){i[t]&&i[t].apply(i,e)})),i)&&(n=_.props)[t].apply(n,e)}function I(){var e=_.props.aria;if(e.content){var i="aria-"+e.content,n=x.id;di(_.props.triggerTarget||t).forEach((function(t){var e=t.getAttribute(i);if(_.state.isVisible)t.setAttribute(i,e?e+" "+n:n);else{var r=e&&e.replace(n,"").trim();r?t.setAttribute(i,r):t.removeAttribute(i)}}))}}function R(){!S&&_.props.aria.expanded&&di(_.props.triggerTarget||t).forEach((function(t){_.props.interactive?t.setAttribute("aria-expanded",_.state.isVisible&&t===T()?"true":"false"):t.removeAttribute("aria-expanded")}))}function P(){L().removeEventListener("mousemove",f),Zi=Zi.filter((function(t){return t!==f}))}function V(e){if(!Ti.isTouch||!p&&"mousedown"!==e.type){var i=e.composedPath&&e.composedPath()[0]||e.target;if(!_.props.interactive||!Ei(x,i)){if(di(_.props.triggerTarget||t).some((function(t){return Ei(t,i)}))){if(Ti.isTouch)return;if(_.state.isVisible&&_.props.trigger.indexOf("click")>=0)return}else H("onClickOutside",[_,e]);!0===_.props.hideOnClick&&(_.clearDelayTimeouts(),_.hide(),d=!0,setTimeout((function(){d=!1})),_.state.isMounted||B())}}}function D(){p=!0}function N(){p=!1}function F(){var t=L();t.addEventListener("mousedown",V,!0),t.addEventListener("touchend",V,ri),t.addEventListener("touchstart",N,ri),t.addEventListener("touchmove",D,ri)}function B(){var t=L();t.removeEventListener("mousedown",V,!0),t.removeEventListener("touchend",V,ri),t.removeEventListener("touchstart",N,ri),t.removeEventListener("touchmove",D,ri)}function j(t,e){U(t,(function(){!_.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&e()}))}function q(t,e){U(t,e)}function U(t,e){var i=M().box;function n(t){t.target===i&&(Ci(i,"remove",n),e())}if(0===t)return e();Ci(i,"remove",s),Ci(i,"add",n),s=n}function W(e,i,n){void 0===n&&(n=!1),di(_.props.triggerTarget||t).forEach((function(t){t.addEventListener(e,i,n),g.push({node:t,eventType:e,handler:i,options:n})}))}function Y(){C()&&(W("touchstart",K,{passive:!0}),W("touchend",Z,{passive:!0})),hi(_.props.trigger).forEach((function(t){if("manual"!==t)switch(W(t,K),t){case"mouseenter":W("mouseleave",Z);break;case"focus":W(Ii?"focusout":"blur",Q);break;case"focusin":W("focusout",Q)}}))}function G(){g.forEach((function(t){var e=t.node,i=t.eventType,n=t.handler,r=t.options;e.removeEventListener(i,n,r)})),g=[]}function K(t){var e,i=!1;if(_.state.isEnabled&&!J(t)&&!d){var n="focus"===(null==(e=o)?void 0:e.type);o=t,l=t.currentTarget,R(),!_.state.isVisible&&_i(t)&&Zi.forEach((function(e){return e(t)})),"click"===t.type&&(_.props.trigger.indexOf("mouseenter")<0||h)&&!1!==_.props.hideOnClick&&_.state.isVisible?i=!0:rt(t),"click"===t.type&&(h=!i),i&&!n&&ot(t)}}function X(t){var e=t.target,i=T().contains(e)||x.contains(e);"mousemove"===t.type&&i||zi(nt().concat(x).map((function(t){var e,i=null==(e=t._tippy.popperInstance)?void 0:e.state;return i?{popperRect:t.getBoundingClientRect(),popperState:i,props:c}:null})).filter(Boolean),t)&&(P(),ot(t))}function Z(t){J(t)||_.props.trigger.indexOf("click")>=0&&h||(_.props.interactive?_.hideWithInteractivity(t):ot(t))}function Q(t){_.props.trigger.indexOf("focusin")<0&&t.target!==T()||_.props.interactive&&t.relatedTarget&&x.contains(t.relatedTarget)||ot(t)}function J(t){return!!Ti.isTouch&&C()!==t.type.indexOf("touch")>=0}function tt(){et();var e=_.props,i=e.popperOptions,n=e.placement,r=e.offset,o=e.getReferenceClientRect,s=e.moveTransition,l=E()?Gi(x).arrow:null,c=o?{getBoundingClientRect:o,contextElement:o.contextElement||T()}:t,h=[{name:"offset",options:{offset:r}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(E()){var i=M().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?i.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?i.setAttribute("data-"+t,""):i.removeAttribute("data-"+t)})),e.attributes.popper={}}}}];E()&&l&&h.push({name:"arrow",options:{element:l,padding:3}}),h.push.apply(h,(null==i?void 0:i.modifiers)||[]),_.popperInstance=Qe(c,x,Object.assign({},i,{placement:n,onFirstUpdate:a,modifiers:h}))}function et(){_.popperInstance&&(_.popperInstance.destroy(),_.popperInstance=null)}function it(){var t,e=_.props.appendTo,i=T();(t=_.props.interactive&&e===oi||"parent"===e?i.parentNode:li(e,[i])).contains(x)||t.appendChild(x),_.state.isMounted=!0,tt()}function nt(){return fi(x.querySelectorAll("[data-tippy-root]"))}function rt(t){_.clearDelayTimeouts(),t&&H("onTrigger",[_,t]),F();var e=O(!0),n=z(),r=n[0],o=n[1];Ti.isTouch&&"hold"===r&&o&&(e=o),e?i=setTimeout((function(){_.show()}),e):_.show()}function ot(t){if(_.clearDelayTimeouts(),H("onUntrigger",[_,t]),_.state.isVisible){if(!(_.props.trigger.indexOf("mouseenter")>=0&&_.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&h)){var e=O(!1);e?n=setTimeout((function(){_.state.isVisible&&_.hide()}),e):r=requestAnimationFrame((function(){_.hide()}))}}else B()}function st(){_.state.isEnabled=!0}function at(){_.hide(),_.state.isEnabled=!1}function lt(){clearTimeout(i),clearTimeout(n),cancelAnimationFrame(r)}function ct(e){if(!_.state.isDestroyed){H("onBeforeUpdate",[_,e]),G();var i=_.props,n=ji(t,Object.assign({},i,mi(e),{ignoreAttributes:!0}));_.props=n,Y(),i.interactiveDebounce!==n.interactiveDebounce&&(P(),f=ci(X,n.interactiveDebounce)),i.triggerTarget&&!n.triggerTarget?di(i.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):n.triggerTarget&&t.removeAttribute("aria-expanded"),R(),$(),k&&k(i,n),_.popperInstance&&(tt(),nt().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)}))),H("onAfterUpdate",[_,e])}}function ht(t){_.setProps({content:t})}function dt(){var t=_.state.isVisible,e=_.state.isDestroyed,i=!_.state.isEnabled,n=Ti.isTouch&&!_.props.touch,r=si(_.props.duration,0,Vi.duration);if(!(t||e||i||n||T().hasAttribute("disabled")||(H("onShow",[_],!1),!1===_.props.onShow(_)))){if(_.state.isVisible=!0,E()&&(x.style.visibility="visible"),$(),F(),_.state.isMounted||(x.style.transition="none"),E()){var o=M();ki([o.box,o.content],0)}a=function(){var t;if(_.state.isVisible&&!u){if(u=!0,x.offsetHeight,x.style.transition=_.props.moveTransition,E()&&_.props.animation){var e=M(),i=e.box,n=e.content;ki([i,n],r),Ai([i,n],"visible")}I(),R(),pi(Qi,_),null==(t=_.popperInstance)||t.forceUpdate(),H("onMount",[_]),_.props.animation&&E()&&q(r,(function(){_.state.isShown=!0,H("onShown",[_])}))}},it()}}function pt(){var t=!_.state.isVisible,e=_.state.isDestroyed,i=!_.state.isEnabled,n=si(_.props.duration,1,Vi.duration);if(!(t||e||i)&&(H("onHide",[_],!1),!1!==_.props.onHide(_))){if(_.state.isVisible=!1,_.state.isShown=!1,u=!1,h=!1,E()&&(x.style.visibility="hidden"),P(),B(),$(!0),E()){var r=M(),o=r.box,s=r.content;_.props.animation&&(ki([o,s],n),Ai([o,s],"hidden"))}I(),R(),_.props.animation?E()&&j(n,_.unmount):_.unmount()}}function ut(t){L().addEventListener("mousemove",f),pi(Zi,f),f(t)}function gt(){_.state.isVisible&&_.hide(),_.state.isMounted&&(et(),nt().forEach((function(t){t._tippy.unmount()})),x.parentNode&&x.parentNode.removeChild(x),Qi=Qi.filter((function(t){return t!==_})),_.state.isMounted=!1,H("onHidden",[_]))}function ft(){_.state.isDestroyed||(_.clearDelayTimeouts(),_.unmount(),G(),delete t._tippy,_.state.isDestroyed=!0,H("onDestroy",[_]))}}function tn(t,e){void 0===e&&(e={});var i=Vi.plugins.concat(e.plugins||[]);Hi();var n=Object.assign({},e,{plugins:i}),r=xi(t).reduce((function(t,e){var i=e&&Ji(e,n);return i&&t.push(i),t}),[]);return bi(t)?r[0]:r}tn.defaultProps=Vi,tn.setDefaultProps=Ni,tn.currentInput=Ti;Object.assign({},$t,{effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow)}});function en(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(t,e)=>0==+t?"":0===e?t.toLowerCase():t.toUpperCase()).replace("-","")}tn.setDefaultProps({render:Ki});const nn='\n    .tippy-box[data-animation=fade][data-state=hidden] {\n        opacity: 0\n    }\n\n    .tippy-iOS {\n        cursor: pointer!important;\n        -webkit-tap-highlight-color: transparent\n    }\n\n    [data-tippy-root] {\n        max-width: calc(100vw - 10px)\n    }\n\n    .tippy-box {\n        position: relative;\n        background-color: #333;\n        color: #fff;\n        border-radius: 4px;\n        font-size: var(--pb-popover-font-size, var(--pb-base-font-size, 14px));\n        line-height: var(--pb-popover-line-height, var(--pb-base-line-height, 1.4));\n        text-align: left;\n        font-style: normal;\n        font-weight: normal;\n        outline: 0;\n        transition-property: transform, visibility, opacity\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow {\n        bottom: 0\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow:before {\n        bottom: -7px;\n        left: 0;\n        border-width: 8px 8px 0;\n        border-top-color: initial;\n        transform-origin: center top\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow {\n        top: 0\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow:before {\n        top: -7px;\n        left: 0;\n        border-width: 0 8px 8px;\n        border-bottom-color: initial;\n        transform-origin: center bottom\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow {\n        right: 0\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow:before {\n        border-width: 8px 0 8px 8px;\n        border-left-color: initial;\n        right: -7px;\n        transform-origin: center left\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow {\n        left: 0\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow:before {\n        left: -7px;\n        border-width: 8px 8px 8px 0;\n        border-right-color: initial;\n        transform-origin: center right\n    }\n\n    .tippy-box[data-inertia][data-state=visible] {\n        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)\n    }\n\n    .tippy-arrow {\n        width: 16px;\n        height: 16px;\n        color: #333\n    }\n\n    .tippy-arrow:before {\n        content: "";\n        position: absolute;\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-content {\n        position: relative;\n        padding: 5px 9px;\n        z-index: 1;\n        overflow: auto;\n        max-height: var(--pb-popover-max-height, calc(100vh - 60px));\n        min-height: var(--pb-popover-min-height, auto);\n        max-width: var(--pb-popover-max-width, auto);\n        min-width: var(--pb-popover-min-width, auto);\n        color: var(--pb-popover-color);\n    }\n',rn='\n    .tippy-box[data-theme~=light-border] {\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid rgba(0, 8, 16, .15);\n        color: #333;\n        box-shadow: 0 4px 14px -2px rgba(0, 8, 16, .08)\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after, .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        content: "";\n        position: absolute;\n        z-index: -1\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after {\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after {\n        border-top-color: rgba(0, 8, 16, .2);\n        border-width: 7px 7px 0;\n        top: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg {\n        top: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after {\n        top: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff;\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after {\n        border-bottom-color: rgba(0, 8, 16, .2);\n        border-width: 0 7px 7px;\n        bottom: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg {\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after {\n        bottom: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after {\n        border-left-color: rgba(0, 8, 16, .2);\n        border-width: 7px 0 7px 7px;\n        left: 17px;\n        top: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg {\n        left: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after {\n        left: 12px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff;\n        right: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after {\n        border-width: 7px 7px 7px 0;\n        right: 17px;\n        top: 1px;\n        border-right-color: rgba(0, 8, 16, .2)\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg {\n        right: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after {\n        right: 12px\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow {\n        fill: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);\n        background-size: 16px 6px;\n        width: 16px;\n        height: 6px\n    }\n',on="\n    .tippy-box[data-theme~=light] {\n        color: #26323d;\n        box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-svg-arrow {\n        fill: #fff\n    }",sn="\n    .tippy-box[data-theme~=material] {\n        background-color: #505355;\n        font-weight: 600\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-backdrop {\n        background-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-svg-arrow {\n        fill: #505355\n    }\n",an="\n    .tippy-box[data-theme~=translucent] {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-arrow {\n        width: 14px;\n        height: 14px\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=top]>.tippy-arrow:before {\n        border-width: 7px 7px 0;\n        border-top-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=bottom]>.tippy-arrow:before {\n        border-width: 0 7px 7px;\n        border-bottom-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=left]>.tippy-arrow:before {\n        border-width: 7px 0 7px 7px;\n        border-left-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=right]>.tippy-arrow:before {\n        border-width: 7px 7px 7px 0;\n        border-right-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-backdrop {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-svg-arrow {\n        fill: rgba(0, 0, 0, .7)\n    }\n";var ln=Object.freeze({__proto__:null,camelize:en,base:nn,lightBorder:rn,light:on,material:sn,translucent:an});function cn(t,e,i){if(!t.querySelector("#pb-popover-"+e)){const n=t.nodeType===Node.DOCUMENT_NODE?document.head:t;console.log("Loading tippy styles for theme %s into %o",e,n);const r=document.createElement("style");r.type="text/css",r.id="pb-popover-"+e,r.innerHTML=i,n.appendChild(r)}}function hn(t,e){if(cn(t,"base",nn),e&&"none"!==e){const i=en(e),n=ln[i];n&&cn(t,i,n)}}class dn extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{for:{type:String},theme:{type:String},placement:{type:String},fallbackPlacement:{type:String,attribute:"fallback-placement"},persistent:{type:Boolean},trigger:{type:String},touch:{type:String},popupClass:{type:String,attribute:"popup-class"},remote:{type:String},stopPropagation:{type:Boolean,attribute:"stop-propagation"}})}constructor(){super(),this.persistent=!1,this.trigger=null,this.for=null,this.theme=null,this.placement=null,this.touch=null,this.fallbackPlacement=null,this.popupClass=null,this.stopPropagation=!1,this._tippy=null,this._content=null}render(){return this.for?I`<div class="hidden"><slot></slot></div>`:I`<span id="link" part="trigger" class="${this.persistent?"persistent":""}"><slot name="default"><slot></slot></slot></span><span class="hidden"><slot name="alternate"></slot></span>`}disconnectedCallback(){super.disconnectedCallback(),this._tippy&&this._tippy.destroy(),this._observer&&this._observer.disconnect()}_checkCSSProperties(){if(this.theme||"none"===this.theme||(this.theme=H(this,"--pb-popover-theme","none")),this.placement||(this.placement=H(this,"--pb-popover-placement","auto")),this.fallbackPlacement||(this.fallbackPlacement=H(this,"--pb-popover-fallback-placement",null)),this.persistent||(this.persistent=H(this,"--pb-popover-persistent",!1)),this.trigger||(this.trigger=H(this,"--pb-popover-trigger",null)),!this.touch){const t=H(this,"--pb-popover-touch","hold");this.touch="true"===t||t}}_injectStyles(){this._checkCSSProperties(),hn(this.getRootNode(),this.theme)}_getContent(){if(this._content)return this._content;const t=this._getSlot();if(t){const e=document.createElement("div");return t.assignedNodes().forEach(t=>{e.appendChild(t.content?t.content.cloneNode(!0):t.cloneNode(!0))}),this._content=e,e}return null}_getSlot(){return this.for?this.shadowRoot.querySelector("slot"):this.shadowRoot.querySelector("[name=alternate]")}_registerMutationObserver(){const t=this._getSlot();this._observer=new MutationObserver(()=>{this.alternate=this._getContent(),console.log("alternate changed"),this.emitTo("pb-popover-changed",this.alternate)}),this._observer.observe(this,{subtree:!0,childList:!0,characterData:!0}),t&&t.assignedNodes().forEach(t=>{this._observer.observe(t.content?t.content:t,{subtree:!0,childList:!0,characterData:!0})})}get alternate(){return this._getContent()}set alternate(t){this._content=t,this._tippy&&this._tippy.setContent(this._content)}command(t,e){"disable"===t&&(this.disabled=e,this._tippy&&(e?this._tippy.disable():this._tippy.enable()))}firstUpdated(){super.firstUpdated(),this._injectStyles(),this._registerMutationObserver(),this.trigger||(this.trigger=this.persistent?"click":"mouseenter");const t=this.getRootNode();let e;if(this.for?(e=t.getElementById(this.for),e||console.error("<pb-popover> target element %s not found",this.for)):e=this.shadowRoot.getElementById("link"),e){const i={allowHTML:!0,appendTo:t.nodeType===Node.DOCUMENT_NODE?document.body:t,placement:this.placement,interactive:!0,ignoreAttributes:!0,boundary:"viewport",maxWidth:"none",touch:this.touch,hideOnClick:!1,trigger:this.trigger};if(this.stopPropagation&&(i.onTrigger=(t,e)=>{e.stopPropagation()}),this.persistent&&(i.onClickOutside=(t,e)=>{t.hideWithInteractivity(e)}),this.theme&&"none"!==this.theme&&(i.theme=this.theme),this.fallbackPlacement){const t=this.fallbackPlacement.split(" ");i.popperOptions={modifiers:[{name:"flip",options:{fallbackPlacements:t}}]}}this.popupClass&&(i.onCreate=t=>{t.popper.classList.add(this.popupClass)}),i.onShow=t=>{this.remote?this._loadRemoteContent():t.setContent(this._getContent()),this.emitTo("pb-popover-show",{source:this,popup:t})},this._tippy=tn(e,i)}}_loadRemoteContent(){const t=this.toAbsoluteURL(this.remote);fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}).then(t=>t.text()).then(t=>{this.alternate=t}).catch(t=>{console.error("<pb-popover> Error retrieving remote content: %o",t)})}static get styles(){return[R`
                :host {
                    display: inline;
                }
                .hidden {
                    display: none;
                }
                div {
                    float: left;
                }
                #link {
                    display: inline;
                    color: inherit;
                    text-decoration: var(--pb-popover-link-decoration, var(--pb-link-text-decoration, inherit));
                }
                #link.persistent {
                    cursor: pointer;
                }
            `]}}customElements.define("pb-popover",dn);class pn extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{key:{type:String},duration:{type:Number},scroll:{type:Boolean},highlightSelf:{type:Boolean,attribute:"highlight-self"},_className:{type:String}})}constructor(){super(),this.key=null,this.duration=0,this.scroll=!1,this.highlightSelf=!1,this._className="highlight-off"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-highlight-on",this._highlightOn.bind(this)),this.subscribeTo("pb-highlight-off",this._highlightOff.bind(this))}command(t,e){super.command(t,e),this.disabled&&(this._className="highlight-off")}_mouseOver(){this.emitTo("pb-highlight-off",{source:this}),this.highlightSelf&&this._highlightOn({detail:{id:this.key}}),this.emitTo("pb-highlight-on",{id:this.key,source:this,scroll:this.scroll})}render(){return this.disabled?I`<slot></slot>`:I`<span id="content" class="${this._className}" @mouseover="${this._mouseOver}"><slot></slot></span>`}static get styles(){return R`
            :host {
                display: inline;
            }

            @keyframes keyFrameBackgroundColorIn {
                0% {
                    background-color: inherit;
                }
                100% {
                    background-color: var(--pb-highlight-color, #F9E976);
                }
            }

            #content {
                display: inline;
            }

            .highlight-on {
                background-color: var(--pb-highlight-color, #F9E976);
                animation-name: keyFrameBackgroundColorIn;
                animation-duration: 500ms;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;

            }

            .highlight-off {
                background-color: inherit;
            }
        `}_highlightOn(t){t.detail.source!=this&&t.detail.id===this.key&&(this._className="highlight-on",t.detail.scroll&&0==this.disabled&&this.scrollIntoView({block:"center",behaviour:"smooth"}),this.duration>0&&setTimeout(function(){this._className="highlight-off"}.bind(this),this.duration))}_highlightOff(t){t.detail.source!=this&&(this._className="highlight-off")}}function un(t){for(var e=[],i=0;i<t.length;){var n=t[i];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)e.push({type:"CHAR",index:i,value:t[i++]});else{var r=1,o="";if("?"===t[a=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<t.length;)if("\\"!==t[a]){if(")"===t[a]){if(0===--r){a++;break}}else if("("===t[a]&&(r++,"?"!==t[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));o+=t[a++]}else o+=t[a++]+t[a++];if(r)throw new TypeError("Unbalanced pattern at ".concat(i));if(!o)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:o}),i=a}else{for(var s="",a=i+1;a<t.length;){var l=t.charCodeAt(a);if(!(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||95===l))break;s+=t[a++]}if(!s)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:s}),i=a}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}function gn(t,e){void 0===e&&(e={});for(var i=un(t),n=e.prefixes,r=void 0===n?"./":n,o="[^".concat(yn(e.delimiter||"/#?"),"]+?"),s=[],a=0,l=0,c="",h=function(t){if(l<i.length&&i[l].type===t)return i[l++].value},d=function(t){var e=h(t);if(void 0!==e)return e;var n=i[l],r=n.type,o=n.index;throw new TypeError("Unexpected ".concat(r," at ").concat(o,", expected ").concat(t))},p=function(){for(var t,e="";t=h("CHAR")||h("ESCAPED_CHAR");)e+=t;return e};l<i.length;){var u=h("CHAR"),g=h("NAME"),f=h("PATTERN");if(g||f){var m=u||"";-1===r.indexOf(m)&&(c+=m,m=""),c&&(s.push(c),c=""),s.push({name:g||a++,prefix:m,suffix:"",pattern:f||o,modifier:h("MODIFIER")||""})}else{var v=u||h("ESCAPED_CHAR");if(v)c+=v;else if(c&&(s.push(c),c=""),h("OPEN")){m=p();var b=h("NAME")||"",y=h("PATTERN")||"",_=p();d("CLOSE"),s.push({name:b||(y?a++:""),pattern:b&&!y?o:y,prefix:m,suffix:_,modifier:h("MODIFIER")||""})}else d("END")}}return s}function fn(t,e){return mn(gn(t,e),e)}function mn(t,e){void 0===e&&(e={});var i=_n(e),n=e.encode,r=void 0===n?function(t){return t}:n,o=e.validate,s=void 0===o||o,a=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)}));return function(e){for(var i="",n=0;n<t.length;n++){var o=t[n];if("string"!=typeof o){var l=e?e[o.name]:void 0,c="?"===o.modifier||"*"===o.modifier,h="*"===o.modifier||"+"===o.modifier;if(Array.isArray(l)){if(!h)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===l.length){if(c)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var d=0;d<l.length;d++){var p=r(l[d],o);if(s&&!a[n].test(p))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(p,'"'));i+=o.prefix+p+o.suffix}}else if("string"!=typeof l&&"number"!=typeof l){if(!c){var u=h?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(u))}}else{p=r(String(l),o);if(s&&!a[n].test(p))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(p,'"'));i+=o.prefix+p+o.suffix}}else i+=o}return i}}function vn(t,e){var i=[];return bn(Sn(t,i,e),i,e)}function bn(t,e,i){void 0===i&&(i={});var n=i.decode,r=void 0===n?function(t){return t}:n;return function(i){var n=t.exec(i);if(!n)return!1;for(var o=n[0],s=n.index,a=Object.create(null),l=function(t){if(void 0===n[t])return"continue";var i=e[t-1];"*"===i.modifier||"+"===i.modifier?a[i.name]=n[t].split(i.prefix+i.suffix).map((function(t){return r(t,i)})):a[i.name]=r(n[t],i)},c=1;c<n.length;c++)l(c);return{path:o,index:s,params:a}}}function yn(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _n(t){return t&&t.sensitive?"":"i"}function wn(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,r=i.exec(t.source);r;)e.push({name:r[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),r=i.exec(t.source);return t}function xn(t,e,i){var n=t.map((function(t){return Sn(t,e,i).source}));return new RegExp("(?:".concat(n.join("|"),")"),_n(i))}function kn(t,e,i){return An(gn(t,i),e,i)}function An(t,e,i){void 0===i&&(i={});for(var n=i.strict,r=void 0!==n&&n,o=i.start,s=void 0===o||o,a=i.end,l=void 0===a||a,c=i.encode,h=void 0===c?function(t){return t}:c,d=i.delimiter,p=void 0===d?"/#?":d,u=i.endsWith,g="[".concat(yn(void 0===u?"":u),"]|$"),f="[".concat(yn(p),"]"),m=s?"^":"",v=0,b=t;v<b.length;v++){var y=b[v];if("string"==typeof y)m+=yn(h(y));else{var _=yn(h(y.prefix)),w=yn(h(y.suffix));if(y.pattern)if(e&&e.push(y),_||w)if("+"===y.modifier||"*"===y.modifier){var x="*"===y.modifier?"?":"";m+="(?:".concat(_,"((?:").concat(y.pattern,")(?:").concat(w).concat(_,"(?:").concat(y.pattern,"))*)").concat(w,")").concat(x)}else m+="(?:".concat(_,"(").concat(y.pattern,")").concat(w,")").concat(y.modifier);else"+"===y.modifier||"*"===y.modifier?m+="((?:".concat(y.pattern,")").concat(y.modifier,")"):m+="(".concat(y.pattern,")").concat(y.modifier);else m+="(?:".concat(_).concat(w,")").concat(y.modifier)}}if(l)r||(m+="".concat(f,"?")),m+=i.endsWith?"(?=".concat(g,")"):"$";else{var k=t[t.length-1],A="string"==typeof k?f.indexOf(k[k.length-1])>-1:void 0===k;r||(m+="(?:".concat(f,"(?=").concat(g,"))?")),A||(m+="(?=".concat(f,"|").concat(g,")"))}return new RegExp(m,_n(i))}function Sn(t,e,i){return t instanceof RegExp?wn(t,e):Array.isArray(t)?xn(t,e,i):kn(t,e,i)}function zn(...t){t[0]="%c<registry>%c "+t[0],t.splice(1,0,"font-weight: bold; color: #99FF33;","color: inherit; font-weight: normal"),console.log.apply(null,t)}customElements.define("pb-highlight",pn);class Cn{constructor(){this.rootPath="",this.usePath=!1,this.state={},this.channelStates={},this.hash=null,this.idHash=!0,this._listeners=[],this.urlPattern=null,this.urlIgnore=new Set,this.pathParams=new Set,this.currentUser=null}configure(t=!0,e=!1,i="",n,r){if(this.rootPath=i,this.usePath=t,this.idHash=e,this.urlPattern=n,r&&r.split(/\s*,\s*/).forEach(t=>this.urlIgnore.add(t)),this.urlPattern){const t=[];Sn(this.urlPattern,t),t.forEach(t=>this.pathParams.add(t.name)),this._decodePath=vn(this.urlPattern),this._encodePath=fn(this.urlPattern)}const o=this._stateFromURL();o?this.state=o:console.error("<registry> failed to parse URL: %s using template %s",window.location,this.urlTemplate),window.history.replaceState(null,""),window.addEventListener("popstate",t=>{if(t.state){try{this.channelStates=JSON.parse(t.state)}catch(t){return void console.error("<registry> error restoring state: %s",t.toString())}this.state=this._stateFromURL(),zn("popstate: %o",this.channelStates),this._listeners.forEach(t=>{t.callback(this.getState(t.component))}),lt.emit("pb-popstate",null,this.channelStates)}})}subscribe(t,e){this._listeners.push({component:t,callback:e})}_stateFromURL(){const t={};this.hash=window.location.hash,this.idHash&&this.hash.length>0&&!/^#\d+\./.test(this.hash)&&(t.id=this.hash.substring(1));const e=window.location.pathname.replace(new RegExp(`^${this.rootPath}/?`),"");if(this.urlPattern){const i=this._decodePath(e);Object.assign(t,i.params),zn("decoded path %s using template %s: %o",e,this.urlPattern,t)}else this.usePath&&(t.path=e);const i=new URLSearchParams(window.location.search);return i.forEach((e,n)=>{if(this.urlPattern&&this.pathParams.has(n)||this.usePath&&"path"===n)return void console.warn("Found path parameter in query, but usePath is set to true. The path parameter will be ignored.");if(n in t)return;const r=i.getAll(n);1===r.length?t[n]=e:t[n]=r}),t}getState(t){const e=F(t)[0],i=this.channelStates[e];return i||(this.channelStates[e]={},this.channelStates[e])}setState(t,e){const i=F(t)[0];this.channelStates[i]=Object.assign(this.channelStates[i],e)}clearParametersMatching(t,e){const{state:i}=this;for(const t of Object.keys(i))e.test(t)&&(i[t]=null)}get(t,e){if(!this.state)return;return t.split(".").reduce((t,e)=>{if(t[e])return t[e]},this.state)||e}set(t,e){if(!t.contains("."))return void(this.state[t]=e);const i=t.split("."),n=i.pop();i.reduce((t,e)=>(t[e]||(t[e]={}),t[e]),this.state)[n]=e}commit(t,e,i=!1){this._commit(t,e,i,!1)}replace(t,e,i=!1){this._commit(t,e,i,!0)}_commit(t,e,i,n){this.state=i?e:Object.assign(Object.assign({},this.state),e);const r=this.urlFromState();F(t).forEach(t=>{i||!this.channelStates[t]?this.channelStates[t]=e:Object.assign(this.channelStates[t],e)});const o=this.toJSON();n?(window.history.replaceState(o,"",r),zn("replace %s: %o %d",r.toString(),this.channelStates,window.history.length)):(window.history.pushState(o,"",r),zn("commit %s: %o %d",r.toString(),this.channelStates,window.history.length))}urlFromState(){const t=new URL(window.location.href);function e(e,i){if(null===e)t.searchParams.delete(i);else if(Array.isArray(e)){const n=Array.from(e);t.searchParams.set(i,n.pop()),n.forEach(e=>t.searchParams.append(i,e))}else t.searchParams.set(i,e)}for(const[t,i]of Object.entries(this.state))if(this.urlPattern){const n=t.replace(/^(?:user\.)?(.*)$/,"$1");this.pathParams.has(n)||this.urlIgnore.has(n)||e(i,n)}else"path"===t&&this.usePath||"id"===t&&this.idHash||this.urlIgnore.has(t)||e(i,t);if(this.state.path&&this.state.path.length>0)if(this.urlPattern){const e={};for(const[t,i]of Object.entries(this.state))this.pathParams.has(t)&&""===i?e[t]=null:e[t]=i;const i=this._encodePath(e);t.pathname=`${this.rootPath}/${i}`}else this.usePath&&(t.pathname=`${this.rootPath}/${this.state.path}`);return this.state.id&&!this.urlPattern&&(t.hash="#"+this.state.id),t}toJSON(){return JSON.stringify(this.channelStates)}}const En=new Cn;window.pbRegistry||(window.pbRegistry=En);class Tn extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{xmlId:{type:String,attribute:"xml-id"},nodeId:{type:String,attribute:"node-id",reflect:!0},hash:{type:String,reflect:!0},xpath:{type:String,reflect:!0},path:{type:String},odd:{type:String},view:{type:String},params:{type:Object},history:{type:Boolean}})}constructor(){super(),this.history=!0,this.params=null}connectedCallback(){super.connectedCallback(),this._id=this.nodeId,this.subscribeTo("pb-visible",t=>{if(this.nodeId){const[e,i]=t.detail.data.split(/\s*,\s*/);this.nodeId!==e||this.hash&&this.hash!==i?this.classList.remove("active"):(this.classList.add("active"),this.scrollIntoView({block:"nearest"}),this.dispatchEvent(new CustomEvent("pb-collapse-open",{composed:!0,bubbles:!0})))}}),this._content=this.innerHTML}render(){return I`<a href="#" @click="${this._onClick}">${K(this._content)}</a>`}createRenderRoot(){return this}_onClick(t){t.preventDefault();const e={id:null,root:null};this.xmlId?e.id=this.xmlId:this.nodeId&&(e.root=this.nodeId),this.path&&(e.path=this.path),this.odd&&(e.odd=this.odd),this.hash&&(e.hash=this.hash),this.view&&(e.view=this.view),this.xpath&&(e.xpath=this.xpath),this.params&&Object.assign(e,this.params),this.history&&En.commit(this,e),this.emitTo("pb-refresh",e)}}customElements.define("pb-link",Tn);class Ln extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{facs:{type:String},coordinates:{type:Array},label:{type:String},order:{type:Number},trigger:{type:String},emitOnLoad:{type:Boolean,attribute:"emit-on-load"}})}constructor(){super(),this.trigger="mouseover",this.label="",this.order=Number.POSITIVE_INFINITY,this.waitFor="pb-facsimile,pb-image-strip,pb-tify",this.default=""}connectedCallback(){super.connectedCallback(),this.wait(()=>{this.emitTo("pb-load-facsimile",{url:this.getImage(),order:this.getOrder(),element:this})})}getImage(){return this.facs}getLabel(){return this.label}getOrder(){return this.order}firstUpdated(){this.shadowRoot.querySelector("a").addEventListener(this.trigger,this._linkListener.bind(this)),this.emitOnLoad&&this.wait(()=>{this._trigger()})}render(){return I`<a href="javascript:;"><slot>${this.default}</slot></a>`}static get styles(){return R`
            :host {
            }

            a, a:link {
                text-decoration: none;
                color: inherit;
            }
        `}_linkListener(t){t.preventDefault(),this._trigger()}_trigger(){console.log("<facs-link> %s %o",this.facs,this.coordinates),this.emitTo("pb-show-annotation",{element:this,file:this.facs,order:this.getOrder(),coordinates:this.coordinates})}}customElements.define("pb-facs-link",Ln);class Mn extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{items:{type:Array},imageWidth:{attribute:"image-width",type:Number},imageHeight:{attribute:"image-height",type:Number},baseUri:{attribute:"base-uri",type:String}})}constructor(){super(),this.items=[],this.urls=new Set,this.imageHeight=80,this.imageWidth=64}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",()=>{this.items=[],this.urls=new Set,this.requestUpdate(this.items)}),this.subscribeTo("pb-load-facsimile",t=>{const{element:e,order:i}=t.detail,n=e.getImage();if(this.urls.has(n))return;this.urls.add(n);const r=this.items.map(t=>t.getOrder()).reduce((t,e,n)=>i<e?t:i===e?n:n+1,0);this.items.splice(r,0,e),this.requestUpdate()})}showIt(t){this.emitTo("pb-show-annotation",{file:t.getImage(),element:t})}renderItem(t){return I`
            <figure class="strip-item" @click="${()=>this.showIt(t)}">
                <img height="${this.imageHeight}" width="${this.imageWidth}" 
                    src="${this.baseUri}${t.getImage()}/full/${this.imageWidth},${this.imageHeight}/0/default.jpg">
                <figcaption>${t.getLabel()}</figcaption>
            </figure>
        `}render(){return I`${this.items.map(t=>this.renderItem(t))}`}static get styles(){return R`
            :host {
                display: block;
            }
        `}}function On(t,e){return window.ESGlobalBridge.requestAvailability(),new Promise(i=>{window.ESGlobalBridge.instance.load(t,e),window.addEventListener(`es-bridge-${t}-loaded`,()=>i(),{once:!0})})}function $n(t,e){let i=t.getRootNode();if(i.nodeType===Node.DOCUMENT_NODE)i=i.head;else{const t=document.querySelector("style#"+e.id);t&&t.parentNode.removeChild(t);const i=e.innerHTML.match(/@font-face[^{]+{.*?}/gs);if(i){const t=document.createElement("style");t.id=e.id,t.appendChild(document.createTextNode(i.join("\n"))),document.head.appendChild(t)}}const n=i.querySelector("#"+e.id);n&&n.parentNode.removeChild(n),i.appendChild(e)}function Hn(t,e){e.forEach(t=>{if(t.hasChildNodes()){const e=t.hasAttribute("display")||!1,i=t.querySelector("math"),n=window.MathJax.getMetricsFor(t.parentNode,e);let r,o;n.display=e,i?(o=i.outerHTML,r=window.MathJax.mathml2chtml(o,n)):(window.MathJax.texReset(),o=t.innerHTML,r=window.MathJax.tex2chtml(o,n)),t.innerHTML="",t.appendChild(r),t.setAttribute("loaded","loaded"),t.setAttribute("source",o)}}),$n(t,window.MathJax.chtmlStylesheet())}function In(t){const e=t.querySelectorAll("pb-formula");if(console.log(`<pb-formula> Found ${e.length} elements to typeset ...`),e.length>0){if(window.MathJax)return void Hn(t,e);const i=t.querySelector("pb-formula[menu]");window.MathJax={startup:{typeset:!1,pageReady:()=>Hn(t,e)},options:{enableMenu:null!==i}},On("MathJax","https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")}}customElements.get("pb-image-strip")||customElements.define("pb-image-strip",Mn);class Rn extends V{static get properties(){return Object.assign({display:{type:Boolean},menu:{type:Boolean},loaded:{type:Boolean},source:{type:String}},super.properties)}constructor(){super(),this.display=!1}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"loaded":this.loaded=!0;break;case"source":this.source=i}}render(){return this.hasChildNodes()?this.loaded?I`<div id="content" class="${this.display?"block":""}"><slot></slot></div>`:I`<span class="loading">${W("dialogs.loading")}</span>`:null}static get styles(){return R`
            :host {
                display: inline-block;
            }
            .block {
                display: block;
            }
            .loading {
                color: #808080;
            }
        `}}customElements.define("pb-formula",Rn);class Pn extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},expand:{type:Boolean},src:{type:String},container:{type:String},auto:{type:Boolean},loadOnce:{type:Boolean},fixLinks:{type:Boolean,attribute:"fix-links"},start:{type:Number},useLanguage:{type:Boolean,attribute:"use-language"},noCredentials:{type:Boolean,attribute:"no-credentials"},history:{type:Boolean},event:{type:String},userParams:{type:Object},silent:{type:Boolean},plain:{type:Boolean}})}constructor(){super(),this.auto=!1,this.loadOnce=!1,this.history=!1,this.event="pb-load",this.loaded=!1,this.language=null,this.noCredentials=!1,this.silent=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo(this.event,t=>{B("pb-page-ready",()=>{if(this.history){if(t.detail&&t.detail.params){const e=t.detail.params.start;e&&En.commit(this,{start:e})}this.userParams=En.state,En.subscribe(this,t=>{t.start&&(this.start=t.start,this.load())}),En.replace(this,this.userParams)}this.load(t)})}),this.subscribeTo("pb-toggle",t=>{this.toggleFeature(t)}),this.subscribeTo("pb-i18n-update",t=>{const e=this.language&&this.language!==t.detail.language;this.language=t.detail.language,this.useLanguage&&e&&this.load()},[]),this.history&&En.subscribe(this,t=>{this.start=t.start,this.userParams=t,this.load()}),this.signalReady()}firstUpdated(){this.auto?(this.start=En.state.start||1,B("pb-page-ready",t=>{t&&t.language&&(this.language=t.language),this.wait(()=>this.load())})):B("pb-page-ready",t=>{t&&t.language&&(this.language=t.language)})}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),e&&e!==i)switch(t){case"url":case"userParams":case"start":this.auto&&this.loader&&B("pb-page-ready",()=>{this.wait(()=>this.load())})}}render(){return I`
            <slot></slot>
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                ?with-credentials="${!this.noCredentials}"
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <paper-dialog id="errorDialog">
                <h2>${W("dialogs.error")}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${W("dialogs.close")}
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return R`
            :host {
                display: block;
            }
        `}toggleFeature(t){this.userParams=En.getState(this),console.log("<pb-load> toggle feature %o",this.userParams),t.detail.refresh&&(this.history&&En.commit(this,this.userParams),this.load())}getURL(t){let e=this.url;return this.expand&&(e=e.replace(/{([^})]+)}/g,(e,i)=>{if(!t[i])return"";const n=encodeURIComponent(t[i]||i);return delete t[i],n})),this.toAbsoluteURL(e)}load(t){if(!this.url)return;if(this.loadOnce&&this.loaded)return;this.emitTo("pb-start-update");let e={};t&&(t instanceof Event?t.detail&&t.detail.params&&(e=t.detail.params):e=t);const i=this.getDocument();this.plain||(i&&(e.doc=i.path),this.start&&!e.start&&(e.start=this.start),this.language&&(e.language=this.language)),e=this.prepareParameters(e);for(const[t,i]of Object.entries(e))null===i&&delete e[t];const n=this.getURL(e);console.log("<pb-load> Loading %s with parameters %o",n,e);const r=this.shadowRoot.getElementById("loadContent");r.params=e,r.url=n,r.generateRequest(),this.loadOnce&&(this.loaded=!0)}prepareParameters(t){return this.userParams?Object.assign(t,this.userParams):t}_handleContent(t){const e=this.shadowRoot.getElementById("loadContent").lastResponse;if(this.container)this.style.display="none",document.querySelectorAll(this.container).forEach(i=>{i.innerHTML=e,this._parseHeaders(t.detail.xhr,i),this._fixLinks(i),this._onLoad(i)});else{this.style.display="",this._clearContent();const i=document.createElement("div");i.innerHTML=e,this._parseHeaders(t.detail.xhr,i),i.slot="",this.appendChild(i),this._fixLinks(i),this._onLoad(i)}this.emitTo("pb-end-update")}_clearContent(){const t=this.shadowRoot.querySelector("slot:not([name])");t&&t.assignedNodes().forEach(t=>t.parentNode.removeChild(t))}_handleError(){this.emitTo("pb-end-update");const t=this.shadowRoot.getElementById("loadContent"),{response:e}=t.lastError;if(this.silent)return void console.error("Request failed: %s",e?e.description:"");let i;i=e?e.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>';const n=this.shadowRoot.getElementById("errorDialog");n.querySelector("paper-dialog-scrollable").innerHTML=`<p><pb-i18n key="dialogs.serverError"></pb-i18n>: ${i} </p>`,n.open()}_parseHeaders(t,e){function i(i,n){const r=e.querySelector(`[data-pagination-${i}]`);return r?r.getAttribute("data-pagination-"+i):n?0:t.getResponseHeader("pb-"+i)}const n=i("total",this.noCredentials),r=i("start",this.noCredentials);this.start!==r&&(this.start=parseInt(r)),this.emitTo("pb-results-received",{count:n?parseInt(n,10):0,start:this.start,content:e,params:this.shadowRoot.getElementById("loadContent").params})}_fixLinks(t){In(t),this.fixLinks&&(t.querySelectorAll("img").forEach(t=>{const e=t.getAttribute("src"),i=new URL(e,this.getEndpoint()+"/");t.src=i}),t.querySelectorAll("a").forEach(t=>{const e=t.getAttribute("href"),i=new URL(e,this.getEndpoint()+"/");t.href=i}))}_onLoad(t){}}customElements.define("pb-load",Pn);class Vn extends(z(Pn)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{sortBy:{type:String,attribute:"sort-by"},sortOptions:{type:Array,attribute:"sort-options"},sortLabel:{type:String},filter:{type:String},filterBy:{type:String,attribute:"filter-by"},filterOptions:{type:Array,attribute:"filter-options"},filterByLabel:{type:String},filterPlaceholderLabel:{type:String},collection:{type:String},facets:{type:Object},login:{type:String},group:{type:String},subforms:{type:String},static:{type:Boolean},_file:{type:String},_selected:{type:Array},_allowModification:{type:Boolean},_suggestions:{type:Array}})}constructor(){super(),this.sortOptions=[],this.sortLabel="browse.sort",this.sortBy="default",this.filter="",this.filterOptions=[{label:"Title",value:"title"}],this.filterByLabel="browse.filter",this.filterPlaceholderLabel="browse.filterPlaceholder",this.filterBy="title",this._allowModification=!1,this._suggestions=[],this.static=!1}connectedCallback(){super.connectedCallback(),B("pb-page-ready",()=>{En.state.sort&&(this.sortBy=En.state.sort),En.state.filter&&(this.filter=En.state.filter,this.filterBy=En.state.filterBy||this.filterBy),this.facets={},Object.keys(En.state).forEach(t=>{if(/^facet-.*$/.test(t)){const e=En.state[t];this.facets[t]?this.facets[t].push(e):Array.isArray(e)?this.facets[t]=e:this.facets[t]=[e]}}),this.collection=En.state.collection,this.collection&&En.replace(this,{collection:this.collection}),En.subscribe(this,t=>{this.collection=t.collection,this.load()})}),this.subscribeTo("pb-search-resubmit",this._facets.bind(this)),this.subscribeTo("pb-login",t=>{t.detail.userChanged&&this._facets(t)},[]),document.addEventListener("pb-i18n-update",()=>{const t=this.shadowRoot.getElementById("sort-list");let e=t.selected;t.selected=void 0,t.selected=e;const i=this.shadowRoot.getElementById("filter-list");e=i.selected,i.selected=void 0,i.selected=e})}firstUpdated(){if(B("pb-page-ready",t=>{const e=this.shadowRoot.getElementById("autocompleteLoader");j(t.apiVersion,"1.0.0")>=0?(e.url=t.endpoint+"/api/search/autocomplete",this.url||(this.url="api/collection")):(e.url=t.endpoint+"/modules/autocomplete.xql",this.url||(this.url="collection/"))}),this.shadowRoot.getElementById("autocomplete").addEventListener("autocomplete-change",this._autocomplete.bind(this)),this.login){const t=document.getElementById(this.login);t?(this.subscribeTo("pb-login",t=>{this._allowModification=this._loggedIn(t.detail.user,t.detail.group)},[]),this._allowModification=t.loggedIn&&this._loggedIn(t.user,t.groups)):console.error("<pb-browse-docs> connected pb-login element not found!")}this.shadowRoot.getElementById("sort-list").addEventListener("selected-item-changed",this._sort.bind(this)),this.shadowRoot.getElementById("delete").addEventListener("click",this._handleDelete.bind(this)),super.firstUpdated()}render(){return I`
            <custom-style>
                <style>
                    :host {
                        --suggestions-item: {
                            color: var(--pb-search-suggestions-color, black);
                        };
                        --suggestions-wrapper: {
                            background: var(--pb-search-suggestions-background, white);
                        }
                    }
                </style>
            </custom-style>
            <slot name="header"></slot>
            <div class="toolbar">
                <paper-dropdown-menu id="sort" label="${W(this.sortLabel)}" part="sort-dropdown">
                    <paper-listbox id="sort-list" selected="${this.sortBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                    ${this.sortOptions.map(t=>I`<paper-item value="${t.value}">${W(t.label)}</paper-item>`)}
                    </paper-listbox>
                </paper-dropdown-menu>
                <div>
                    <paper-dropdown-menu id="filterSelect" label="${W(this.filterByLabel)}" part="filter-dropdown">
                        <paper-listbox id="filter-list" selected="${this.filterBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value" @selected-item-changed="${this._filterChanged}">
                        ${this.filterOptions.map(t=>I`<paper-item value="${t.value}">${W(t.label)}</paper-item>`)}
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <paper-input id="filterString" type="search" name="filter" label="${W(this.filterPlaceholderLabel)}" value="${this.filter}"
                        @keyup="${this._handleEnter}" part="filter-input">
                        <iron-icon icon="search" @click="${this._filter}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="filterString" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
                </div>
            </div>
            <div class="toolbar">
                <slot name="toolbar"></slot>
                <paper-button id="delete" part="delete-button" title="${W("browse.delete")}" class="${this._canModify(this._allowModification)}">
                    <iron-icon icon="delete"></iron-icon>
                    <span class="label">${W("browse.delete")}</span>
                </paper-button>
            </div>
            <slot></slot>
            <slot name="footer"></slot>
            
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <iron-ajax
                id="autocompleteLoader"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._updateSuggestions}"></iron-ajax>

            <paper-dialog id="deleteDialog">
                <h2>${W("browse.delete")}</h2>
                <paper-dialog-scrollable>
                    <p>${W("browse.confirmDeletion",{count:this._selected?this._selected.length:0})}</p>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus @click="${this._confirmDelete}">${W("dialogs.yes")}</paper-button>
                    <paper-button dialog-confirm="dialog-cancel">${W("dialogs.no")}</paper-button>
                </div>
            </paper-dialog>
            <paper-dialog id="errorDialog">
                <h2>${W("dialogs.error")}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${W("dialogs.close")}
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return R`
            :host {
                display: block;
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));
            }

            .toolbar {
                display: flex;
                justify-content: var(--pb-browse-toolbar-justify-content);
            }

            [name="toolbar"] {
                flex: 1 0;
            }

            #sort {
                display: block;
            }

            #filterString {
                position: relative;
                display: inline-block;
                vertical-align: bottom;
            }

            .hidden {
                display: none;
            }
        `}getURL(t){if(this.static)return`collections/${this.collection?this.collection+"/":""}${t.start||"1"}.html`;const e=super.getURL(t);return this.collection?`${e}/${this.collection}`:e}prepareParameters(t){return(t=this._paramsFromSubforms(t)).sort=this.sortBy,this.filter&&(t.filter=this.filter,t.browse=this.filterBy),this.facets&&(t=Object.assign(t,this.facets)),t}_paramsFromSubforms(t){return this.subforms&&document.querySelectorAll(this.subforms).forEach(e=>{e.serializeForm&&Object.assign(t,e.serializeForm())}),t}getSelected(){const t=[];return this.container?document.querySelectorAll(this.container).forEach(e=>e.querySelectorAll(".document-select paper-checkbox[checked]").forEach(e=>{t.push(e.value)})):this.querySelectorAll(".document-select paper-checkbox[checked]").forEach(e=>{t.push(e.value)}),t}_filter(){const t=this.shadowRoot.getElementById("filterString").value,e=this.shadowRoot.getElementById("filter-list").selected;void 0!==t&&(console.log("<pb-browse-docs> Filter by %s",t),this.filter=t,En.commit(this,{filter:t,filterBy:e}),this.load())}_filterChanged(){const t=this.shadowRoot.getElementById("filter-list").selected;t&&t!==this.filterBy&&(console.log("<pb-browse-docs> Filtering on %s",t),this.filterBy=t)}_sort(){const t=this.shadowRoot.getElementById("sort-list").selected;t&&t!==this.sortBy&&(console.log("<pb-browse-docs> Sorting by %s",t),this.sortBy=t,En.commit(this,{sort:t}),this.load())}_facets(t){t.detail&&t.detail.params&&(En.clearParametersMatching(this,/^(all-|facet-).*/),this.facets=t.detail.params,this.start=1,En.commit(this,t.detail.params)),this.load()}_onLoad(t){window.scrollTo(0,0);const e=t.querySelector("[data-root]"),i=e&&e.getAttribute("data-root"),n=e&&e.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(t=>{t.disabled=!n}),t.querySelectorAll("[data-collection]").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.collection=t.getAttribute("data-collection"),this.start=1,En.commit(this,{collection:this.collection}),console.log("<pb-browse-docs> loading collection %s",this.collection),this.load()})})}_handleDelete(t,e){const i=this.shadowRoot.getElementById("deleteDialog"),n=this.getSelected();n.length>0&&(this._selected=n,i.open())}_confirmDelete(){if(!this._file&&!this._selected)return;let t;t=this._selected?this._selected:[this._file],console.log("<pb-browse-docs> Deleting %o",this._file);const e={action:"delete","docs[]":t};this._file=null,this._selected=null,this.load(e)}_loggedIn(t,e){return null!=t&&(!this.group||!!e&&e.indexOf(this.group)>-1)}_canModify(t){return t?"":"hidden"}_autocomplete(t){const e=this.shadowRoot.getElementById("autocompleteLoader");e.params={query:t.detail.option.text,field:this.filterBy},e.generateRequest()}_updateSuggestions(){const t=this.shadowRoot.getElementById("autocomplete"),e=this.shadowRoot.getElementById("autocompleteLoader");t.suggestions(e.lastResponse)}_handleEnter(t){13===t.keyCode&&this._filter()}}customElements.define("pb-browse-docs",Vn);class Dn extends Pn{static get properties(){return Object.assign(Object.assign({},super.properties),{},{collection:{type:String},static:{type:Boolean}})}constructor(){super(),this.collection=null,this.static=!1}connectedCallback(){super.connectedCallback(),B("pb-page-ready",()=>{this.collection=En.state.collection,En.subscribe(this,t=>{this.collection=t.collection})})}getURL(t){if(this.static)return`collections/${this.collection?this.collection+"/":""}${t.start||"1"}.html`;const e=super.getURL(t);return this.collection?`${e}/${this.collection}`:e}_onLoad(t){window.scrollTo(0,0);const e=t.querySelector("[data-root]"),i=e&&e.getAttribute("data-root"),n=e&&e.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(t=>{t.disabled=!n}),t.querySelectorAll("[data-collection]").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.collection=t.getAttribute("data-collection"),this.start=1,this.history&&En.commit(this,{collection:this.collection}),console.log("<pb-browse> loading collection %s",this.collection),this.emitTo("pb-search-resubmit")})})}}customElements.define("pb-browse",Dn);class Nn extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{path:{type:String,reflect:!0},rootPath:{type:String,attribute:"root-path"},odd:{type:String,reflect:!0},view:{type:String,reflect:!0},disableHistory:{type:Boolean,attribute:"disable-history"},sourceView:{type:String,attribute:"source-view"}})}constructor(){super(),this.path=null,this.rootPath="",this.disableHistory=!1}connectedCallback(){super.connectedCallback(),this.disableHistory||(En.state.path&&!this.path&&(this.path=En.state.path),this.view=En.state.view||this.view,this.odd=En.state.odd||this.odd)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),e&&(console.log("<pb-document> Emit update event"),this.emitTo("pb-document",this))}getFileName(){return this.path.replace(/^.*?([^\/]+)$/,"$1")}getCollection(){return this.path.replace(/^(.*?)\/[^\/]+$/,"$1")}getFullPath(){return this.rootPath+"/"+this.path}}customElements.define("pb-document",Nn);class Fn extends(C(N(V))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{direction:{type:String},keyboard:{type:String},rendition:{type:String}})}constructor(){super(),this.direction="forward",this.disabled=!0}connectedCallback(){super.connectedCallback(),this.keyboard&&(this.hotkeys={next:this.keyboard}),this.subscribeTo("pb-update",this._update.bind(this)),this.registerHotkey("next",()=>this.emitTo("pb-navigate",{direction:this.direction})),this.signalReady()}_update(t){"forward"===this.direction?t.detail.data.next?this.disabled=!1:this.disabled=!0:t.detail.data.previous?this.disabled=!1:this.disabled=!0}_handleClick(){this.emitTo("pb-navigate",{direction:this.direction})}render(){return I`
            <a id="button" @click="${this._handleClick}"><slot></slot></a>
        `}static get styles(){return R`
                :host {
                    display: inline;
                }
                :host([disabled]):host(:not([rendition])), :host([disabled]):host([rendition="hidden"]) {
                    display: none;
                }
                :host([disabled]):host([rendition="invisible"]) {
                    visibility: hidden;
                }
                :host([disabled]):host([rendition="visible"]) {
                    visibility: visible;
                    cursor: not-allowed;
                }
                `}}function Bn(t){return(Bn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function jn(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function qn(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),n.forEach((function(e){jn(t,e,i[e])}))}return t}function Un(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Wn(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Yn(t,e,i){return e&&Wn(t.prototype,e),i&&Wn(t,i),t}function Gn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Kn(t,e){return!e||"object"!==Bn(e)&&"function"!=typeof e?Gn(t):e}function Xn(t){return(Xn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Zn(t,e){return(Zn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Qn(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Zn(t,e)}customElements.define("pb-navigation",Fn);var Jn={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,e){console&&console[t]&&console[t].apply(console,e)}},tr=new(function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Un(this,t),this.init(e,i)}return Yn(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||Jn,this.options=e,this.debug=e.debug}},{key:"setDebug",value:function(t){this.debug=t}},{key:"log",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"log","",!0)}},{key:"warn",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","",!0)}},{key:"error",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"error","")}},{key:"deprecate",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(t,e,i,n){return n&&!this.debug?null:("string"==typeof t[0]&&(t[0]="".concat(i).concat(this.prefix," ").concat(t[0])),this.logger[e](t))}},{key:"create",value:function(e){return new t(this.logger,qn({},{prefix:"".concat(this.prefix,":").concat(e,":")},this.options))}}]),t}()),er=function(){function t(){Un(this,t),this.observers={}}return Yn(t,[{key:"on",value:function(t,e){var i=this;return t.split(" ").forEach((function(t){i.observers[t]=i.observers[t]||[],i.observers[t].push(e)})),this}},{key:"off",value:function(t,e){this.observers[t]&&(e?this.observers[t]=this.observers[t].filter((function(t){return t!==e})):delete this.observers[t])}},{key:"emit",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.observers[t]&&[].concat(this.observers[t]).forEach((function(t){t.apply(void 0,i)}));this.observers["*"]&&[].concat(this.observers["*"]).forEach((function(e){e.apply(e,[t].concat(i))}))}}]),t}();function ir(){var t,e,i=new Promise((function(i,n){t=i,e=n}));return i.resolve=t,i.reject=e,i}function nr(t){return null==t?"":""+t}function rr(t,e,i){t.forEach((function(t){e[t]&&(i[t]=e[t])}))}function or(t,e,i){function n(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function r(){return!t||"string"==typeof t}for(var o="string"!=typeof e?[].concat(e):e.split(".");o.length>1;){if(r())return{};var s=n(o.shift());!t[s]&&i&&(t[s]=new i),t=t[s]}return r()?{}:{obj:t,k:n(o.shift())}}function sr(t,e,i){var n=or(t,e,Object);n.obj[n.k]=i}function ar(t,e,i,n){var r=or(t,e,Object),o=r.obj,s=r.k;o[s]=o[s]||[],n&&(o[s]=o[s].concat(i)),n||o[s].push(i)}function lr(t,e){var i=or(t,e),n=i.obj,r=i.k;if(n)return n[r]}function cr(t,e,i){var n=lr(t,i);return void 0!==n?n:lr(e,i)}function hr(t,e,i){for(var n in e)"__proto__"!==n&&(n in t?"string"==typeof t[n]||t[n]instanceof String||"string"==typeof e[n]||e[n]instanceof String?i&&(t[n]=e[n]):hr(t[n],e[n],i):t[n]=e[n]);return t}function dr(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var pr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function ur(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,(function(t){return pr[t]})):t}var gr="undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,fr=function(t){function e(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Un(this,e),i=Kn(this,Xn(e).call(this)),gr&&er.call(Gn(i)),i.data=t||{},i.options=n,void 0===i.options.keySeparator&&(i.options.keySeparator="."),i}return Qn(e,er),Yn(e,[{key:"addNamespaces",value:function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}},{key:"removeNamespaces",value:function(t){var e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}},{key:"getResource",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,o=[t,e];return i&&"string"!=typeof i&&(o=o.concat(i)),i&&"string"==typeof i&&(o=o.concat(r?i.split(r):i)),t.indexOf(".")>-1&&(o=t.split(".")),lr(this.data,o)}},{key:"addResource",value:function(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},o=this.options.keySeparator;void 0===o&&(o=".");var s=[t,e];i&&(s=s.concat(o?i.split(o):i)),t.indexOf(".")>-1&&(n=e,e=(s=t.split("."))[1]),this.addNamespaces(e),sr(this.data,s,n),r.silent||this.emit("added",t,e,i,n)}},{key:"addResources",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in i)"string"!=typeof i[r]&&"[object Array]"!==Object.prototype.toString.apply(i[r])||this.addResource(t,e,r,i[r],{silent:!0});n.silent||this.emit("added",t,e,i)}},{key:"addResourceBundle",value:function(t,e,i,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[t,e];t.indexOf(".")>-1&&(n=i,i=e,e=(s=t.split("."))[1]),this.addNamespaces(e);var a=lr(this.data,s)||{};n?hr(a,i,r):a=qn({},a,i),sr(this.data,s,a),o.silent||this.emit("added",t,e,i)}},{key:"removeResourceBundle",value:function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}},{key:"hasResourceBundle",value:function(t,e){return void 0!==this.getResource(t,e)}},{key:"getResourceBundle",value:function(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?qn({},{},this.getResource(t,e)):this.getResource(t,e)}},{key:"getDataByLanguage",value:function(t){return this.data[t]}},{key:"toJSON",value:function(){return this.data}}]),e}(),mr={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,e,i,n,r){var o=this;return t.forEach((function(t){o.processors[t]&&(e=o.processors[t].process(e,i,n,r))})),e}},vr={},br=function(t){function e(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Un(this,e),i=Kn(this,Xn(e).call(this)),gr&&er.call(Gn(i)),rr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,Gn(i)),i.options=n,void 0===i.options.keySeparator&&(i.options.keySeparator="."),i.logger=tr.create("translator"),i}return Qn(e,er),Yn(e,[{key:"changeLanguage",value:function(t){t&&(this.language=t)}},{key:"exists",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},i=this.resolve(t,e);return i&&void 0!==i.res}},{key:"extractFromKey",value:function(t,e){var i=void 0!==e.nsSeparator?e.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");var n=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,r=e.ns||this.options.defaultNS;if(i&&t.indexOf(i)>-1){var o=t.match(this.interpolator.nestingRegexp);if(o&&o.length>0)return{key:t,namespaces:r};var s=t.split(i);(i!==n||i===n&&this.options.ns.indexOf(s[0])>-1)&&(r=s.shift()),t=s.join(n)}return"string"==typeof r&&(r=[r]),{key:t,namespaces:r}}},{key:"translate",value:function(t,e,i){var n=this;if("object"!==Bn(e)&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),e||(e={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);var r=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,o=this.extractFromKey(t[t.length-1],e),s=o.key,a=o.namespaces,l=a[a.length-1],c=e.lng||this.language,h=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(h){var d=e.nsSeparator||this.options.nsSeparator;return l+d+s}return s}var p=this.resolve(t,e),u=p&&p.res,g=p&&p.usedKey||s,f=p&&p.exactUsedKey||s,m=Object.prototype.toString.apply(u),v=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject;if(y&&u&&("string"!=typeof u&&"boolean"!=typeof u&&"number"!=typeof u)&&v.indexOf(m)<0&&("string"!=typeof b||"[object Array]"!==m)){if(!e.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,u,e):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");if(r){var _="[object Array]"===m,w=_?[]:{},x=_?f:g;for(var k in u)if(Object.prototype.hasOwnProperty.call(u,k)){var A="".concat(x).concat(r).concat(k);w[k]=this.translate(A,qn({},e,{joinArrays:!1,ns:a})),w[k]===A&&(w[k]=u[k])}u=w}}else if(y&&"string"==typeof b&&"[object Array]"===m)(u=u.join(b))&&(u=this.extendTranslation(u,t,e,i));else{var S=!1,z=!1;if(!this.isValidLookup(u)&&void 0!==e.defaultValue){if(S=!0,void 0!==e.count){var C=this.pluralResolver.getSuffix(c,e.count);u=e["defaultValue".concat(C)]}u||(u=e.defaultValue)}this.isValidLookup(u)||(z=!0,u=s);var E=e.defaultValue&&e.defaultValue!==u&&this.options.updateMissing;if(z||S||E){if(this.logger.log(E?"updateKey":"missingKey",c,l,s,E?e.defaultValue:u),r){var T=this.resolve(s,qn({},e,{keySeparator:!1}));T&&T.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var L=[],M=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&M&&M[0])for(var O=0;O<M.length;O++)L.push(M[O]);else"all"===this.options.saveMissingTo?L=this.languageUtils.toResolveHierarchy(e.lng||this.language):L.push(e.lng||this.language);var $=function(t,i){n.options.missingKeyHandler?n.options.missingKeyHandler(t,l,i,E?e.defaultValue:u,E,e):n.backendConnector&&n.backendConnector.saveMissing&&n.backendConnector.saveMissing(t,l,i,E?e.defaultValue:u,E,e),n.emit("missingKey",t,l,i,u)};if(this.options.saveMissing){var H=void 0!==e.count&&"string"!=typeof e.count;this.options.saveMissingPlurals&&H?L.forEach((function(t){n.pluralResolver.getPluralFormsOfKey(t,s).forEach((function(e){return $([t],e)}))})):$(L,s)}}u=this.extendTranslation(u,t,e,p,i),z&&u===s&&this.options.appendNamespaceToMissingKey&&(u="".concat(l,":").concat(s)),z&&this.options.parseMissingKeyHandler&&(u=this.options.parseMissingKeyHandler(u))}return u}},{key:"extendTranslation",value:function(t,e,i,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,i,n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init(qn({},i,{interpolation:qn({},this.options.interpolation,i.interpolation)}));var s,a=i.interpolation&&i.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;if(a){var l=t.match(this.interpolator.nestingRegexp);s=l&&l.length}var c=i.replace&&"string"!=typeof i.replace?i.replace:i;if(this.options.interpolation.defaultVariables&&(c=qn({},this.options.interpolation.defaultVariables,c)),t=this.interpolator.interpolate(t,c,i.lng||this.language,i),a){var h=t.match(this.interpolator.nestingRegexp);s<(h&&h.length)&&(i.nest=!1)}!1!==i.nest&&(t=this.interpolator.nest(t,(function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return r&&r[0]===i[0]?(o.logger.warn("It seems you are nesting recursively key: ".concat(i[0]," in key: ").concat(e[0])),null):o.translate.apply(o,i.concat([e]))}),i)),i.interpolation&&this.interpolator.reset()}var d=i.postProcess||this.options.postProcess,p="string"==typeof d?[d]:d;return null!=t&&p&&p.length&&!1!==i.applyPostProcessor&&(t=mr.handle(p,t,e,this.options&&this.options.postProcessPassResolved?qn({i18nResolved:n},i):i,this)),t}},{key:"resolve",value:function(t){var e,i,n,r,o,s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t=[t]),t.forEach((function(t){if(!s.isValidLookup(e)){var l=s.extractFromKey(t,a),c=l.key;i=c;var h=l.namespaces;s.options.fallbackNS&&(h=h.concat(s.options.fallbackNS));var d=void 0!==a.count&&"string"!=typeof a.count,p=void 0!==a.context&&"string"==typeof a.context&&""!==a.context,u=a.lngs?a.lngs:s.languageUtils.toResolveHierarchy(a.lng||s.language,a.fallbackLng);h.forEach((function(t){s.isValidLookup(e)||(o=t,!vr["".concat(u[0],"-").concat(t)]&&s.utils&&s.utils.hasLoadedNamespace&&!s.utils.hasLoadedNamespace(o)&&(vr["".concat(u[0],"-").concat(t)]=!0,s.logger.warn('key "'.concat(i,'" for languages "').concat(u.join(", "),'" won\'t get resolved as namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),u.forEach((function(i){if(!s.isValidLookup(e)){r=i;var o,l,h=c,u=[h];if(s.i18nFormat&&s.i18nFormat.addLookupKeys)s.i18nFormat.addLookupKeys(u,c,i,t,a);else d&&(o=s.pluralResolver.getSuffix(i,a.count)),d&&p&&u.push(h+o),p&&u.push(h+="".concat(s.options.contextSeparator).concat(a.context)),d&&u.push(h+=o);for(;l=u.pop();)s.isValidLookup(e)||(n=l,e=s.getResource(i,t,l,a))}})))}))}})),{res:e,usedKey:i,exactUsedKey:n,usedLng:r,usedNS:o}}},{key:"isValidLookup",value:function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}},{key:"getResource",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,i,n):this.resourceStore.getResource(t,e,i,n)}}]),e}();function yr(t){return t.charAt(0).toUpperCase()+t.slice(1)}var _r=function(){function t(e){Un(this,t),this.options=e,this.whitelist=this.options.supportedLngs||!1,this.supportedLngs=this.options.supportedLngs||!1,this.logger=tr.create("languageUtils")}return Yn(t,[{key:"getScriptPartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return null;var e=t.split("-");return 2===e.length?null:(e.pop(),"x"===e[e.length-1].toLowerCase()?null:this.formatLanguageCode(e.join("-")))}},{key:"getLanguagePartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return t;var e=t.split("-");return this.formatLanguageCode(e[0])}},{key:"formatLanguageCode",value:function(t){if("string"==typeof t&&t.indexOf("-")>-1){var e=["hans","hant","latn","cyrl","cans","mong","arab"],i=t.split("-");return this.options.lowerCaseLng?i=i.map((function(t){return t.toLowerCase()})):2===i.length?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=yr(i[1].toLowerCase()))):3===i.length&&(i[0]=i[0].toLowerCase(),2===i[1].length&&(i[1]=i[1].toUpperCase()),"sgn"!==i[0]&&2===i[2].length&&(i[2]=i[2].toUpperCase()),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=yr(i[1].toLowerCase())),e.indexOf(i[2].toLowerCase())>-1&&(i[2]=yr(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}},{key:"isWhitelisted",value:function(t){return this.logger.deprecate("languageUtils.isWhitelisted",'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),this.isSupportedCode(t)}},{key:"isSupportedCode",value:function(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}},{key:"getBestMatchFromCodes",value:function(t){var e,i=this;return t?(t.forEach((function(t){if(!e){var n=i.formatLanguageCode(t);i.options.supportedLngs&&!i.isSupportedCode(n)||(e=n)}})),!e&&this.options.supportedLngs&&t.forEach((function(t){if(!e){var n=i.getLanguagePartFromCode(t);if(i.isSupportedCode(n))return e=n;e=i.options.supportedLngs.find((function(t){if(0===t.indexOf(n))return t}))}})),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e):null}},{key:"getFallbackCodes",value:function(t,e){if(!t)return[];if("function"==typeof t&&(t=t(e)),"string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!e)return t.default||[];var i=t[e];return i||(i=t[this.getScriptPartFromCode(e)]),i||(i=t[this.formatLanguageCode(e)]),i||(i=t[this.getLanguagePartFromCode(e)]),i||(i=t.default),i||[]}},{key:"toResolveHierarchy",value:function(t,e){var i=this,n=this.getFallbackCodes(e||this.options.fallbackLng||[],t),r=[],o=function(t){t&&(i.isSupportedCode(t)?r.push(t):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(t)))};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(t))):"string"==typeof t&&o(this.formatLanguageCode(t)),n.forEach((function(t){r.indexOf(t)<0&&o(i.formatLanguageCode(t))})),r}}]),t}(),wr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],xr={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0==t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0==t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0==t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(1==t?0:2==t?1:(t<0||t>10)&&t%10==0?2:3)}};function kr(){var t={};return wr.forEach((function(e){e.lngs.forEach((function(i){t[i]={numbers:e.nr,plurals:xr[e.fc]}}))})),t}var Ar=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Un(this,t),this.languageUtils=e,this.options=i,this.logger=tr.create("pluralResolver"),this.rules=kr()}return Yn(t,[{key:"addRule",value:function(t,e){this.rules[t]=e}},{key:"getRule",value:function(t){return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}},{key:"needsPlural",value:function(t){var e=this.getRule(t);return e&&e.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(t,e){var i=this,n=[],r=this.getRule(t);return r?(r.numbers.forEach((function(r){var o=i.getSuffix(t,r);n.push("".concat(e).concat(o))})),n):n}},{key:"getSuffix",value:function(t,e){var i=this,n=this.getRule(t);if(n){var r=n.noAbs?n.plurals(e):n.plurals(Math.abs(e)),o=n.numbers[r];this.options.simplifyPluralSuffix&&2===n.numbers.length&&1===n.numbers[0]&&(2===o?o="plural":1===o&&(o=""));var s=function(){return i.options.prepend&&o.toString()?i.options.prepend+o.toString():o.toString()};return"v1"===this.options.compatibilityJSON?1===o?"":"number"==typeof o?"_plural_".concat(o.toString()):s():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===n.numbers.length&&1===n.numbers[0]?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}return this.logger.warn("no plural rule found for: ".concat(t)),""}}]),t}(),Sr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Un(this,t),this.logger=tr.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||function(t){return t},this.init(e)}return Yn(t,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});var e=t.interpolation;this.escape=void 0!==e.escape?e.escape:ur,this.escapeValue=void 0===e.escapeValue||e.escapeValue,this.useRawValueToEscape=void 0!==e.useRawValueToEscape&&e.useRawValueToEscape,this.prefix=e.prefix?dr(e.prefix):e.prefixEscaped||"{{",this.suffix=e.suffix?dr(e.suffix):e.suffixEscaped||"}}",this.formatSeparator=e.formatSeparator?e.formatSeparator:e.formatSeparator||",",this.unescapePrefix=e.unescapeSuffix?"":e.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":e.unescapeSuffix||"",this.nestingPrefix=e.nestingPrefix?dr(e.nestingPrefix):e.nestingPrefixEscaped||dr("$t("),this.nestingSuffix=e.nestingSuffix?dr(e.nestingSuffix):e.nestingSuffixEscaped||dr(")"),this.nestingOptionsSeparator=e.nestingOptionsSeparator?e.nestingOptionsSeparator:e.nestingOptionsSeparator||",",this.maxReplaces=e.maxReplaces?e.maxReplaces:1e3,this.alwaysFormat=void 0!==e.alwaysFormat&&e.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var t="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(t,"g");var e="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(e,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(t,e,i,n){var r,o,s,a=this,l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(t){return t.replace(/\$/g,"$$$$")}var h=function(t){if(t.indexOf(a.formatSeparator)<0){var r=cr(e,l,t);return a.alwaysFormat?a.format(r,void 0,i):r}var o=t.split(a.formatSeparator),s=o.shift().trim(),c=o.join(a.formatSeparator).trim();return a.format(cr(e,l,s),c,i,n)};this.resetRegExp();var d=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,p=n&&n.interpolation&&n.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(t){return c(t)}},{regex:this.regexp,safeValue:function(t){return a.escapeValue?c(a.escape(t)):c(t)}}].forEach((function(e){for(s=0;r=e.regex.exec(t);){if(void 0===(o=h(r[1].trim())))if("function"==typeof d){var i=d(t,r,n);o="string"==typeof i?i:""}else{if(p){o=r[0];continue}a.logger.warn("missed to pass in variable ".concat(r[1]," for interpolating ").concat(t)),o=""}else"string"==typeof o||a.useRawValueToEscape||(o=nr(o));if(t=t.replace(r[0],e.safeValue(o)),e.regex.lastIndex=0,++s>=a.maxReplaces)break}})),t}},{key:"nest",value:function(t,e){var i,n,r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=qn({},o);function a(t,e){var i=this.nestingOptionsSeparator;if(t.indexOf(i)<0)return t;var n=t.split(new RegExp("".concat(i,"[ ]*{"))),r="{".concat(n[1]);t=n[0],r=(r=this.interpolate(r,s)).replace(/'/g,'"');try{s=JSON.parse(r),e&&(s=qn({},e,s))}catch(e){return this.logger.warn("failed parsing options string in nesting for key ".concat(t),e),"".concat(t).concat(i).concat(r)}return delete s.defaultValue,t}for(s.applyPostProcessor=!1,delete s.defaultValue;i=this.nestingRegexp.exec(t);){var l=[],c=!1;if(i[0].includes(this.formatSeparator)&&!/{.*}/.test(i[1])){var h=i[1].split(this.formatSeparator).map((function(t){return t.trim()}));i[1]=h.shift(),l=h,c=!0}if((n=e(a.call(this,i[1].trim(),s),s))&&i[0]===t&&"string"!=typeof n)return n;"string"!=typeof n&&(n=nr(n)),n||(this.logger.warn("missed to resolve ".concat(i[1]," for nesting ").concat(t)),n=""),c&&(n=l.reduce((function(t,e){return r.format(t,e,o.lng,o)}),n.trim())),t=t.replace(i[0],n),this.regexp.lastIndex=0}return t}}]),t}();function zr(t,e){for(var i=t.indexOf(e);-1!==i;)t.splice(i,1),i=t.indexOf(e)}var Cr=function(t){function e(t,i,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Un(this,e),r=Kn(this,Xn(e).call(this)),gr&&er.call(Gn(r)),r.backend=t,r.store=i,r.services=n,r.languageUtils=n.languageUtils,r.options=o,r.logger=tr.create("backendConnector"),r.state={},r.queue=[],r.backend&&r.backend.init&&r.backend.init(n,o.backend,o),r}return Qn(e,er),Yn(e,[{key:"queueLoad",value:function(t,e,i,n){var r=this,o=[],s=[],a=[],l=[];return t.forEach((function(t){var n=!0;e.forEach((function(e){var a="".concat(t,"|").concat(e);!i.reload&&r.store.hasResourceBundle(t,e)?r.state[a]=2:r.state[a]<0||(1===r.state[a]?s.indexOf(a)<0&&s.push(a):(r.state[a]=1,n=!1,s.indexOf(a)<0&&s.push(a),o.indexOf(a)<0&&o.push(a),l.indexOf(e)<0&&l.push(e)))})),n||a.push(t)})),(o.length||s.length)&&this.queue.push({pending:s,loaded:{},errors:[],callback:n}),{toLoad:o,pending:s,toLoadLanguages:a,toLoadNamespaces:l}}},{key:"loaded",value:function(t,e,i){var n=t.split("|"),r=n[0],o=n[1];e&&this.emit("failedLoading",r,o,e),i&&this.store.addResourceBundle(r,o,i),this.state[t]=e?-1:2;var s={};this.queue.forEach((function(i){ar(i.loaded,[r],o),zr(i.pending,t),e&&i.errors.push(e),0!==i.pending.length||i.done||(Object.keys(i.loaded).forEach((function(t){s[t]||(s[t]=[]),i.loaded[t].length&&i.loaded[t].forEach((function(e){s[t].indexOf(e)<0&&s[t].push(e)}))})),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())})),this.emit("loaded",s),this.queue=this.queue.filter((function(t){return!t.done}))}},{key:"read",value:function(t,e,i){var n=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,s=arguments.length>5?arguments[5]:void 0;return t.length?this.backend[i](t,e,(function(a,l){a&&l&&r<5?setTimeout((function(){n.read.call(n,t,e,i,r+1,2*o,s)}),o):s(a,l)})):s(null,{})}},{key:"prepareLoading",value:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);var o=this.queueLoad(t,e,n,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((function(t){i.loadOne(t)}))}},{key:"load",value:function(t,e,i){this.prepareLoading(t,e,{},i)}},{key:"reload",value:function(t,e,i){this.prepareLoading(t,e,{reload:!0},i)}},{key:"loadOne",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,(function(n,s){n&&e.logger.warn("".concat(i,"loading namespace ").concat(o," for language ").concat(r," failed"),n),!n&&s&&e.logger.log("".concat(i,"loaded namespace ").concat(o," for language ").concat(r),s),e.loaded(t,n,s)}))}},{key:"saveMissing",value:function(t,e,i,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e)?this.logger.warn('did not save key "'.concat(i,'" as the namespace "').concat(e,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=i&&""!==i&&(this.backend&&this.backend.create&&this.backend.create(t,e,i,n,null,qn({},o,{isUpdate:r})),t&&t[0]&&this.store.addResource(t[0],e,i,n))}}]),e}();function Er(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var e={};if("object"===Bn(t[1])&&(e=t[1]),"string"==typeof t[1]&&(e.defaultValue=t[1]),"string"==typeof t[2]&&(e.tDescription=t[2]),"object"===Bn(t[2])||"object"===Bn(t[3])){var i=t[3]||t[2];Object.keys(i).forEach((function(t){e[t]=i[t]}))}return e},interpolation:{escapeValue:!0,format:function(t,e,i,n){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!1}}}function Tr(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.whitelist&&(t.whitelist&&t.whitelist.indexOf("cimode")<0&&(t.whitelist=t.whitelist.concat(["cimode"])),t.supportedLngs=t.whitelist),t.nonExplicitWhitelist&&(t.nonExplicitSupportedLngs=t.nonExplicitWhitelist),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t}function Lr(){}var Mr=new(function(t){function e(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(Un(this,e),t=Kn(this,Xn(e).call(this)),gr&&er.call(Gn(t)),t.options=Tr(i),t.services={},t.logger=tr,t.modules={external:[]},n&&!t.isInitialized&&!i.isClone){if(!t.options.initImmediate)return t.init(i,n),Kn(t,Gn(t));setTimeout((function(){t.init(i,n)}),0)}return t}return Qn(e,er),Yn(e,[{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;function n(t){return t?"function"==typeof t?new t:t:null}if("function"==typeof e&&(i=e,e={}),e.whitelist&&!e.supportedLngs&&this.logger.deprecate("whitelist",'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),e.nonExplicitWhitelist&&!e.nonExplicitSupportedLngs&&this.logger.deprecate("whitelist",'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),this.options=qn({},Er(),this.options,Tr(e)),this.format=this.options.interpolation.format,i||(i=Lr),!this.options.isClone){this.modules.logger?tr.init(n(this.modules.logger),this.options):tr.init(null,this.options);var r=new _r(this.options);this.store=new fr(this.options.resources,this.options);var o=this.services;o.logger=tr,o.resourceStore=this.store,o.languageUtils=r,o.pluralResolver=new Ar(r,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),o.interpolator=new Sr(this.options),o.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},o.backendConnector=new Cr(n(this.modules.backend),o.resourceStore,o,this.options),o.backendConnector.on("*",(function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];t.emit.apply(t,[e].concat(n))})),this.modules.languageDetector&&(o.languageDetector=n(this.modules.languageDetector),o.languageDetector.init(o,this.options.detection,this.options)),this.modules.i18nFormat&&(o.i18nFormat=n(this.modules.i18nFormat),o.i18nFormat.init&&o.i18nFormat.init(this)),this.translator=new br(this.services,this.options),this.translator.on("*",(function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];t.emit.apply(t,[e].concat(n))})),this.modules.external.forEach((function(e){e.init&&e.init(t)}))}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((function(e){t[e]=function(){var i;return(i=t.store)[e].apply(i,arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((function(e){t[e]=function(){var i;return(i=t.store)[e].apply(i,arguments),t}}));var s=ir(),a=function(){t.changeLanguage(t.options.lng,(function(e,n){t.isInitialized=!0,t.options.isClone||t.logger.log("initialized",t.options),t.emit("initialized",t.options),s.resolve(n),i(e,n)}))};return this.options.resources||!this.options.initImmediate?a():setTimeout(a,0),s}},{key:"loadResources",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Lr,n="string"==typeof t?t:this.language;if("function"==typeof t&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase())return i();var r=[],o=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach((function(t){r.indexOf(t)<0&&r.push(t)}))};if(n)o(n);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(t){return o(t)}));this.options.preload&&this.options.preload.forEach((function(t){return o(t)})),this.services.backendConnector.load(r,this.options.ns,i)}else i(null)}},{key:"reloadResources",value:function(t,e,i){var n=ir();return t||(t=this.languages),e||(e=this.options.ns),i||(i=Lr),this.services.backendConnector.reload(t,e,(function(t){n.resolve(),i(t)})),n}},{key:"use",value:function(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&mr.addPostProcessor(t),"3rdParty"===t.type&&this.modules.external.push(t),this}},{key:"changeLanguage",value:function(t,e){var i=this;this.isLanguageChangingTo=t;var n=ir();this.emit("languageChanging",t);var r=function(t,r){r?(i.language=r,i.languages=i.services.languageUtils.toResolveHierarchy(r),i.translator.changeLanguage(r),i.isLanguageChangingTo=void 0,i.emit("languageChanged",r),i.logger.log("languageChanged",r)):i.isLanguageChangingTo=void 0,n.resolve((function(){return i.t.apply(i,arguments)})),e&&e(t,(function(){return i.t.apply(i,arguments)}))},o=function(t){var e="string"==typeof t?t:i.services.languageUtils.getBestMatchFromCodes(t);e&&(i.language||(i.language=e,i.languages=i.services.languageUtils.toResolveHierarchy(e)),i.translator.language||i.translator.changeLanguage(e),i.services.languageDetector&&i.services.languageDetector.cacheUserLanguage(e)),i.loadResources(e,(function(t){r(t,e)}))};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(o):o(t):o(this.services.languageDetector.detect()),n}},{key:"getFixedT",value:function(t,e){var i=this,n=function t(e,n){var r;if("object"!==Bn(n)){for(var o=arguments.length,s=new Array(o>2?o-2:0),a=2;a<o;a++)s[a-2]=arguments[a];r=i.options.overloadTranslationOptionHandler([e,n].concat(s))}else r=qn({},n);return r.lng=r.lng||t.lng,r.lngs=r.lngs||t.lngs,r.ns=r.ns||t.ns,i.t(e,r)};return"string"==typeof t?n.lng=t:n.lngs=t,n.ns=e,n}},{key:"t",value:function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)}},{key:"exists",value:function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)}},{key:"setDefaultNamespace",value:function(t){this.options.defaultNS=t}},{key:"hasLoadedNamespace",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var s=function(t,i){var n=e.services.backendConnector.state["".concat(t,"|").concat(i)];return-1===n||2===n};if(i.precheck){var a=i.precheck(this,s);if(void 0!==a)return a}return!!this.hasResourceBundle(n,t)||(!this.services.backendConnector.backend||!(!s(n,t)||r&&!s(o,t)))}},{key:"loadNamespaces",value:function(t,e){var i=this,n=ir();return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach((function(t){i.options.ns.indexOf(t)<0&&i.options.ns.push(t)})),this.loadResources((function(t){n.resolve(),e&&e(t)})),n):(e&&e(),Promise.resolve())}},{key:"loadLanguages",value:function(t,e){var i=ir();"string"==typeof t&&(t=[t]);var n=this.options.preload||[],r=t.filter((function(t){return n.indexOf(t)<0}));return r.length?(this.options.preload=n.concat(r),this.loadResources((function(t){i.resolve(),e&&e(t)})),i):(e&&e(),Promise.resolve())}},{key:"dir",value:function(t){return t||(t=this.languages&&this.languages.length>0?this.languages[0]:this.language),t?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t))>=0?"rtl":"ltr":"rtl"}},{key:"createInstance",value:function(){return new e(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}},{key:"cloneInstance",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Lr,r=qn({},this.options,i,{isClone:!0}),o=new e(r);return["store","services","language"].forEach((function(e){o[e]=t[e]})),o.services=qn({},this.services),o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o.translator=new br(o.services,o.options),o.translator.on("*",(function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];o.emit.apply(o,[t].concat(i))})),o.init(r,n),o.translator.options=o.options,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}}]),e}());function Or(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $r(t){return($r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Hr(t,e){if("object"!==$r(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==$r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function Ir(t){var e=Hr(t,"string");return"symbol"===$r(e)?e:String(e)}function Rr(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Ir(n.key),n)}}function Pr(t,e,i){return e&&Rr(t.prototype,e),i&&Rr(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var Vr=[],Dr=Vr.forEach,Nr=Vr.slice;function Fr(t){return Dr.call(Nr.call(arguments,1),(function(e){if(e)for(var i in e)void 0===t[i]&&(t[i]=e[i])})),t}var Br=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,jr=function(t,e,i){var n=i||{};n.path=n.path||"/";var r=encodeURIComponent(e),o="".concat(t,"=").concat(r);if(n.maxAge>0){var s=n.maxAge-0;if(Number.isNaN(s))throw new Error("maxAge should be a Number");o+="; Max-Age=".concat(Math.floor(s))}if(n.domain){if(!Br.test(n.domain))throw new TypeError("option domain is invalid");o+="; Domain=".concat(n.domain)}if(n.path){if(!Br.test(n.path))throw new TypeError("option path is invalid");o+="; Path=".concat(n.path)}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");o+="; Expires=".concat(n.expires.toUTCString())}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o},qr={create:function(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};i&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*i*1e3)),n&&(r.domain=n),document.cookie=jr(t,encodeURIComponent(e),r)},read:function(t){for(var e="".concat(t,"="),i=document.cookie.split(";"),n=0;n<i.length;n++){for(var r=i[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(e))return r.substring(e.length,r.length)}return null},remove:function(t){this.create(t,"",-1)}},Ur={name:"cookie",lookup:function(t){var e;if(t.lookupCookie&&"undefined"!=typeof document){var i=qr.read(t.lookupCookie);i&&(e=i)}return e},cacheUserLanguage:function(t,e){e.lookupCookie&&"undefined"!=typeof document&&qr.create(e.lookupCookie,t,e.cookieMinutes,e.cookieDomain,e.cookieOptions)}},Wr={name:"querystring",lookup:function(t){var e;if("undefined"!=typeof window){var i=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));for(var n=i.substring(1).split("&"),r=0;r<n.length;r++){var o=n[r].indexOf("=");if(o>0)n[r].substring(0,o)===t.lookupQuerystring&&(e=n[r].substring(o+1))}}return e}},Yr=null,Gr=function(){if(null!==Yr)return Yr;try{Yr="undefined"!==window&&null!==window.localStorage;var t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch(t){Yr=!1}return Yr},Kr={name:"localStorage",lookup:function(t){var e;if(t.lookupLocalStorage&&Gr()){var i=window.localStorage.getItem(t.lookupLocalStorage);i&&(e=i)}return e},cacheUserLanguage:function(t,e){e.lookupLocalStorage&&Gr()&&window.localStorage.setItem(e.lookupLocalStorage,t)}},Xr=null,Zr=function(){if(null!==Xr)return Xr;try{Xr="undefined"!==window&&null!==window.sessionStorage;var t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch(t){Xr=!1}return Xr},Qr={name:"sessionStorage",lookup:function(t){var e;if(t.lookupSessionStorage&&Zr()){var i=window.sessionStorage.getItem(t.lookupSessionStorage);i&&(e=i)}return e},cacheUserLanguage:function(t,e){e.lookupSessionStorage&&Zr()&&window.sessionStorage.setItem(e.lookupSessionStorage,t)}},Jr={name:"navigator",lookup:function(t){var e=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var i=0;i<navigator.languages.length;i++)e.push(navigator.languages[i]);navigator.userLanguage&&e.push(navigator.userLanguage),navigator.language&&e.push(navigator.language)}return e.length>0?e:void 0}},to={name:"htmlTag",lookup:function(t){var e,i=t.htmlTag||("undefined"!=typeof document?document.documentElement:null);return i&&"function"==typeof i.getAttribute&&(e=i.getAttribute("lang")),e}},eo={name:"path",lookup:function(t){var e;if("undefined"!=typeof window){var i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(i instanceof Array)if("number"==typeof t.lookupFromPathIndex){if("string"!=typeof i[t.lookupFromPathIndex])return;e=i[t.lookupFromPathIndex].replace("/","")}else e=i[0].replace("/","")}return e}},io={name:"subdomain",lookup:function(t){var e="number"==typeof t.lookupFromSubdomainIndex?t.lookupFromSubdomainIndex+1:1,i="undefined"!=typeof window&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(i)return i[e]}};function no(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}}var ro=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Or(this,t),this.type="languageDetector",this.detectors={},this.init(e,i)}return Pr(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=t,this.options=Fr(e,this.options||{},no()),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Ur),this.addDetector(Wr),this.addDetector(Kr),this.addDetector(Qr),this.addDetector(Jr),this.addDetector(to),this.addDetector(eo),this.addDetector(io)}},{key:"addDetector",value:function(t){this.detectors[t.name]=t}},{key:"detect",value:function(t){var e=this;t||(t=this.options.order);var i=[];return t.forEach((function(t){if(e.detectors[t]){var n=e.detectors[t].lookup(e.options);n&&"string"==typeof n&&(n=[n]),n&&(i=i.concat(n))}})),this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}},{key:"cacheUserLanguage",value:function(t,e){var i=this;e||(e=this.options.caches),e&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||e.forEach((function(e){i.detectors[e]&&i.detectors[e].cacheUserLanguage(t,i.options)})))}}]),t}();ro.type="languageDetector";var oo=[],so=oo.forEach,ao=oo.slice;function lo(t){return so.call(ao.call(arguments,1),(function(e){if(e)for(var i in e)void 0===t[i]&&(t[i]=e[i])})),t}function co(t,e){if(e&&"object"===Bn(e)){var i="",n=encodeURIComponent;for(var r in e)i+="&"+n(r)+"="+n(e[r]);if(!i)return t;t=t+(-1!==t.indexOf("?")?"&":"?")+i.slice(1)}return t}function ho(t,e,i,n,r){n&&"object"===Bn(n)&&(r||(n._t=new Date),n=co("",n).slice(1)),e.queryStringParams&&(t=co(t,e.queryStringParams));try{var o;(o=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(n?"POST":"GET",t,1),e.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!e.withCredentials,n&&o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var s=e.customHeaders;if(s="function"==typeof s?s():s)for(var a in s)o.setRequestHeader(a,s[a]);o.onreadystatechange=function(){o.readyState>3&&i&&i(o.responseText,o)},o.send(n)}catch(t){console&&console.log(t)}}function po(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,parsePayload:function(t,e,i){return jn({},e,i||"")},crossDomain:!1,ajax:ho}}var uo=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Un(this,t),this.init(e,i),this.type="backend"}return Yn(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.services=t,this.options=lo(e,this.options||{},po())}},{key:"readMulti",value:function(t,e,i){var n=this.options.loadPath;"function"==typeof this.options.loadPath&&(n=this.options.loadPath(t,e));var r=this.services.interpolator.interpolate(n,{lng:t.join("+"),ns:e.join("+")});this.loadUrl(r,i)}},{key:"read",value:function(t,e,i){var n=this.options.loadPath;"function"==typeof this.options.loadPath&&(n=this.options.loadPath([t],[e]));var r=this.services.interpolator.interpolate(n,{lng:t,ns:e});this.loadUrl(r,i)}},{key:"loadUrl",value:function(t,e){var i=this;this.options.ajax(t,this.options,(function(n,r){if(r.status>=500&&r.status<600)return e("failed loading "+t,!0);if(r.status>=400&&r.status<500)return e("failed loading "+t,!1);var o,s;try{o=i.options.parse(n,t)}catch(e){s="failed parsing "+t+" to json"}if(s)return e(s,!1);e(null,o)}))}},{key:"create",value:function(t,e,i,n){var r=this;"string"==typeof t&&(t=[t]);var o=this.options.parsePayload(e,i,n);t.forEach((function(t){var i=r.services.interpolator.interpolate(r.options.addPath,{lng:t,ns:e});r.options.ajax(i,r.options,(function(t,e){}),o)}))}}]),t}();function go(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fo(t){return(fo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function mo(t,e){if("object"!==fo(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==fo(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function vo(t){var e=mo(t,"string");return"symbol"===fo(e)?e:String(e)}function bo(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,vo(n.key),n)}}function yo(t,e,i){return e&&bo(t.prototype,e),i&&bo(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}uo.type="backend";var _o=[],wo=_o.forEach,xo=_o.slice;function ko(t){return wo.call(xo.call(arguments,1),(function(e){if(e)for(var i in e)void 0===t[i]&&(t[i]=e[i])})),t}function Ao(t){return t?"function"==typeof t?new t:t:null}function So(){return{}}var zo=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};go(this,t),this.backends=[],this.type="backend",this.init(e,i)}return yo(t,[{key:"init",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.services=t,this.options=ko(i,this.options||{},So()),this.options.backends&&this.options.backends.forEach((function(i,r){e.backends[r]=e.backends[r]||Ao(i),e.backends[r].init(t,e.options.backendOptions[r],n)}))}},{key:"read",value:function(t,e,i){var n=this,r=this.backends.length,o=function o(a){if(a>=r)return i(new Error("non of the backend loaded data;",!0));var l=n.backends[a];l.read?l.read(t,e,(function(t,e){!t&&e&&Object.keys(e).length>-1?(i(null,e,a),s(a-1,e)):o(a+1)})):o(a+1)},s=function i(r,o){if(!(r<0)){var s=n.backends[r];s.save?(s.save(t,e,o),i(r-1,o)):i(r-1,o)}};o(0)}},{key:"create",value:function(t,e,i,n){this.backends.forEach((function(r){r.create&&r.create(t,e,i,n)}))}}]),t}();let Co;zo.type="backend";class Eo extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{appRoot:{type:String,attribute:"app-root"},urlTemplate:{type:String,attribute:"url-template"},urlIgnore:{type:String,attribute:"url-ignore"},urlPath:{type:String,attribute:"url-path"},idHash:{type:Boolean,attribute:"id-hash"},template:{type:String},endpoint:{type:String,reflect:!0},apiVersion:{type:String,attribute:"api-version",reflect:!0},locales:{type:String},localeFallbackNs:{type:String,attribute:"locale-fallback-ns"},supportedLanguages:{type:Array,attribute:"supported-languages",converter:t=>t.split(/\s*,\s*/)},fallbackLanguage:{type:String,attribute:"fallback-language"},language:{type:String},requireLanguage:{type:Boolean,attribute:"require-language"},unresolved:{type:Boolean,reflect:!0},theme:{type:String}})}constructor(){super(),this.unresolved=!0,this.endpoint=".",this.urlTemplate=null,this.urlIgnore=null,this.urlPath="path",this.idHash=!1,this.apiVersion=void 0,this.requireLanguage=!1,this.supportedLanguages=null,this.fallbackLanguage="en",this.theme=null,this._localeFallbacks=[],this._i18nInstance=null,Co?this.disabled=!0:(Co=this,q())}set localeFallbackNs(t){t.split(/\s+/).forEach(t=>this._localeFallbacks.push(t))}disconnectedCallback(){super.disconnectedCallback(),this._i18nInstance=null,Co===this&&(Co=null)}async connectedCallback(){if(super.connectedCallback(),this.disabled)return;En.configure("path"===this.urlPath,this.idHash,this.appRoot,this.urlTemplate,this.urlIgnore),this.endpoint=this.endpoint.replace(/\/+$/,""),this.locales&&-1===this._localeFallbacks.indexOf("app")&&this._localeFallbacks.push("app"),this._localeFallbacks.push("common");const t=En.state._target;t&&(this.endpoint=t);const e=En.state._api;e&&(this.apiVersion=e);const i=[this.toAbsoluteURL("resources/css/components.css",this.endpoint)];if(this.theme&&i.push(this.toAbsoluteURL(this.theme,this.endpoint)),console.log("<pb-page> Loading component theme stylesheets from %s",i.join(", ")),this._themeSheet=await E(i),!this.apiVersion){const t=await fetch(this.endpoint+"/login").then(t=>t.ok?null:fetch(this.endpoint+"/api/version").then(t=>t.json())).catch(()=>fetch(this.endpoint+"/api/version").then(t=>t.json()));t?(this.apiVersion=t.api,console.log(`<pb-page> Server reports API version ${this.apiVersion} with app ${t.app.name}/${t.app.version} running on ${t.engine.name}/${t.engine.version}`)):(console.log("<pb-page> No API version reported by server, assuming 0.9.0"),this.apiVersion="0.9.0")}this.requireLanguage?this._i18nInstance&&this.signalReady("pb-page-ready",{endpoint:this.endpoint,apiVersion:this.apiVersion,template:this.template,language:this._i18nInstance.language}):this.signalReady("pb-page-ready",{endpoint:this.endpoint,template:this.template,apiVersion:this.apiVersion})}firstUpdated(){if(super.firstUpdated(),this.disabled)return;this.shadowRoot.querySelector("slot").addEventListener("slotchange",()=>{const t=new CustomEvent("pb-page-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(t)},{once:!0});const t=P("../i18n/")+"{{ns}}/{{lng}}.json";console.log("<pb-page> Loading locales. common: %s; additional: %s; namespaces: %o",t,this.locales,this._localeFallbacks);const e=this.locales?[uo,uo]:[uo],i=[{loadPath:t,crossDomain:!0}];this.locales&&i.unshift({loadPath:this.locales,crossDomain:!0});const n={fallbackLng:this.fallbackLanguage,defaultNS:"common",ns:["common"],debug:!1,load:"languageOnly",detection:{lookupQuerystring:"lang"},backend:{backends:e,backendOptions:i}};if(this.language&&(n.lng=this.language),console.log("supported langs: %o",this.supportedLanguages),this.supportedLanguages&&(n.supportedLngs=this.supportedLanguages),this._localeFallbacks.length>0){const t=this._localeFallbacks.slice();n.defaultNS=t[0],n.fallbackNS=t.slice(1),n.ns=t}console.log("<pb-page> i18next options: %o",n),this._i18nInstance=Mr.createInstance(),this._i18nInstance.use(ro).use(zo),this._i18nInstance.init(n).then(t=>{Y(t),this._updateI18n(t),this.signalReady("pb-i18n-update",{t:t,language:this._i18nInstance.language}),this.requireLanguage&&this.apiVersion&&this.signalReady("pb-page-ready",{endpoint:this.endpoint,apiVersion:this.apiVersion,template:this.template,language:this._i18nInstance.language})}),this.subscribeTo("pb-i18n-language",t=>{const{language:e}=t.detail;this._i18nInstance.changeLanguage(e).then(t=>{this._updateI18n(t),this.emitTo("pb-i18n-update",{t:t,language:this._i18nInstance.language},[])},[])}),this.addEventListener("pb-global-toggle",this._toggleFeatures.bind(this)),this.unresolved=!1,console.log("<pb-page> endpoint: %s; trigger window resize",this.endpoint),this.querySelectorAll("app-header").forEach(t=>t._notifyLayoutChanged()),In(this)}_updateI18n(t){this.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n"),n=/(?:\[([^\]]+)\])?([^;]+)/g;let r=n.exec(i);for(;r;){const o=t(r[2]);r[1]?e.setAttribute(r[1],o):e.innerHTML=o,r=n.exec(i)}})}get stylesheet(){return this._themeSheet}_toggleFeatures(t){const e=t.detail;this.querySelectorAll(e.selector).forEach(t=>{const i=e.command||"toggle";t.command&&t.command(i,e.state),e.state?t.classList.add(i):t.classList.remove(i)})}render(){return I`<slot></slot>`}static get styles(){return R`
        :host {
            display: block;
        }
        `}}customElements.define("pb-page",Eo);class To extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{total:{type:Number,reflect:!0},start:{type:Number,reflect:!0},perPage:{type:Number,attribute:"per-page"},foundLabel:{type:String,attribute:"found-label"},page:{type:Number},pageCount:{type:Number,attribute:"page-count"},range:{type:Number},pages:{type:Array}})}constructor(){super(),this.total=0,this.start=1,this.perPage=10,this.page=1,this.pageCount=10,this.range=5,this.pages=[],this.foundLabel="browse.items"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",this._refresh.bind(this))}render(){return I`
            <span @click="${this._handleFirst}"><iron-icon icon="first-page"></iron-icon></span>
            ${this.pages.map((t,e)=>I`<span class="${t.class}" @click="${()=>this._handleClick(t,e)}">${t.label}</span>`)}
            <span @click="${this._handleLast}"><iron-icon icon="last-page"></iron-icon></span>

            <span class="found" part="count">${W(this.foundLabel,{count:this.total})}</span>
        `}static get styles(){return R`
            :host([total="0"]) {
                display: none;
            }

            :host {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            span {
                padding: 4px 8px;
                cursor: pointer;
            }

            .active {
                background-color: var(--pb-color-primary);
                color: var(--pb-color-inverse);
                border-radius: 50%;
                min-width: 1em;
                width: 1em;
                line-height: 1em;
                padding: .4em;
                text-align: center;

                box-shadow:  0 3px 4px 0 rgba(0, 0, 0, 0.14),
                             0 1px 8px 0 rgba(0, 0, 0, 0.12),
                             0 3px 3px -2px rgba(0, 0, 0, 0.4);
            }

            .found {
                padding-left: 20px;
            }
        `}_update(t,e){if(!e||!t)return;this.pageCount=Math.ceil(e/this.perPage),this.page=Math.ceil(t/this.perPage);let i=Math.max(this.page-Math.ceil(this.range/2)+1,1),n=Math.min(i+this.range-1,this.pageCount);i=Math.max(n-this.range+1,1),console.log("<pb-paginate> start: %d, total: %d, perPage: %d, pageCount: %s, page: %d, lower: %d, upper: %d",t,e,this.perPage,this.pageCount,this.page,i,n);const r=[];for(let t=i;t<=n;t++)r.push({label:t,class:t===this.page?"active":""});this.pages=r}_refresh(t){this.start=Number(t.detail.start),this.total=t.detail.count,this._update(this.start,this.total)}_handleClick(t,e){this.start=(this.pages[e].label-1)*this.perPage+1,["pb-load","pb-paginate"].forEach(t=>{this.emitTo(t,{params:{start:this.start,"per-page":this.perPage,page:e}})})}_handleFirst(t){this.start=1,["pb-load","pb-paginate"].forEach(t=>{this.emitTo(t,{params:{start:1,"per-page":this.perPage,page:0}})})}_handleLast(t){this.start=(this.pageCount-1)*this.perPage+1,["pb-load","pb-paginate"].forEach(t=>{this.emitTo(t,{params:{start:this.start,"per-page":this.perPage,page:this.pageCount-1}})})}}customElements.define("pb-paginate",To);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[{properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(t){return(this._clampValue(t)-this.min)/(this.max-this.min)},_clampValue:function(t){return Math.min(this.max,Math.max(this.min,this._calcStep(t)))},_calcStep:function(t){if(t=parseFloat(t),!this.step)return t;var e=Math.round((t-this.min)/this.step);return this.step<1?e/(1/this.step)+this.min:e*this.step+this.min},_validateValue:function(){var t=this._clampValue(this.value);return this.value=this.oldValue=isNaN(t)?this.oldValue:t,this.value!==t},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(t){this.toggleClass("indeterminate",t,this.$.primaryProgress)},_transformProgress:function(t,e){var i="scaleX("+e/100+")";t.style.transform=t.style.webkitTransform=i},_mainRatioChanged:function(t){this._transformProgress(this.$.primaryProgress,t)},_progressChanged:function(t,e,i,n,r){t=this._clampValue(t),e=this._clampValue(e);var o=100*this._calcRatio(t),s=100*this._calcRatio(e);this._setSecondaryRatio(o),this._transformProgress(this.$.secondaryProgress,o),this._transformProgress(this.$.primaryProgress,s),this.secondaryProgress=t,r?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",e),this.setAttribute("aria-valuemin",i),this.setAttribute("aria-valuemax",n)},_disabledChanged:function(t){this.setAttribute("aria-disabled",t?"true":"false")},_hideSecondaryProgress:function(t){return 0===t}});class Lo extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{_disabled:{type:Boolean}})}constructor(){super(),this._disabled=!0}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._startUpdate.bind(this)),this.subscribeTo("pb-end-update",this._endUpdate.bind(this))}render(){return this.style.visibility=this._disabled?"hidden":"visible",I`
            <paper-progress id="progress" indeterminate ?disabled="${this._disabled}"></paper-progress>
        `}static get styles(){return R`
            :host {
                display: block;
                visibility: hidden;
            }

            paper-progress {
                width: 100%;
            }
        `}_startUpdate(){this._disabled=!1}_endUpdate(){this._disabled=!0}}customElements.define("pb-progress",Lo);class Mo extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},name:{type:String},value:{type:String},start:{type:Number},placeHolder:{type:String,attribute:"place-holder"},redirect:{type:Boolean},currentDoc:{type:String,attribute:"current-doc"},submitOnLoad:{type:Boolean,attribute:"submit-on-load"},subforms:{type:String},disableAutocomplete:{type:Boolean,attribute:"disable-autocomplete"},source:{type:String}})}constructor(){super(),this.name="query",this.value="",this.redirect=!1,this.submitOnLoad=!1,this.placeHolder="search.placeholder",this.disableAutocomplete=!1,this.start=1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-search-resubmit",this._doSearch.bind(this)),this.subscribeTo("pb-paginate",t=>{this.start=t.detail.params.start,this._doSearch(!0)}),En.subscribe(this,t=>{this.value=t.query||"",this.start=t.start||1,this.submitOnLoad&&this.emitTo("pb-load",{url:this.action,params:t})})}firstUpdated(){if(!this.disableAutocomplete){this.shadowRoot.getElementById("autocomplete").addEventListener("autocomplete-change",this._autocomplete.bind(this))}if(this.shadowRoot.getElementById("ironform").addEventListener("iron-form-response",t=>t.detail.completes.then(t=>this.emitTo("pb-search",t.parseResponse()))),B("pb-page-ready",t=>{const e=this.shadowRoot.getElementById("autocompleteLoader"),i=this.source||"api/search/autocomplete";this.minApiVersion("1.0.0")?e.url=`${t.endpoint}/${i}`:e.url=t.endpoint+"/modules/autocomplete.xql"}),this.submitOnLoad){const t=En.state;En.replace(this,t),this.emitTo("pb-load",{url:this.action,params:t})}this.addEventListener("click",t=>{const e=t.target.closest("[slot]");e&&("searchButton"===e.slot&&this._doSearch(),"resetButton"===e.slot&&this._reset())})}render(){return I`
            <custom-style>
                <style>
                    :host {
                        --suggestions-item: {
                            color: var(--pb-search-suggestions-color, black);
                        };
                        --suggestions-wrapper: {
                            background: var(--pb-search-suggestions-background, white);
                        }
                    }
                </style>
            </custom-style>
            <iron-form id="ironform" allow-redirect="${this.redirect}">
                <form id="searchPageForm" method="get" action="${this.action}" accept="text/html">
                    <slot name="beforeInput"></slot>
                    <paper-input id="search" type="search" name="query" @keyup="${this._handleEnter}" label="${W(this.placeHolder)}"
                        value="${this.value}" always-float-label>
                        <iron-icon icon="search" @click="${this._doSearch}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="search" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
                    <slot></slot>
                    
                    <slot name="searchButton"></slot>
                    <slot name="resetButton"></slot>
                    
                </form>
            </iron-form>
            <iron-ajax
                id="autocompleteLoader"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._updateSuggestions}"></iron-ajax>
        `}static get styles(){return R`
            :host {
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));
            }
            a{
                padding:1rem;
                color:var(--pb-reset-color);
            }
            .buttons{
                margin-top:1rem;
            }
        `}_doSearch(t=!1){let e=this.shadowRoot.getElementById("ironform").serializeForm();e=this._paramsFromSubforms(e),delete e["autocomplete-custom-template"],e.start=t?this.start:1,this.redirect?window.location.href=`${this.action}?${new URLSearchParams(e)}`:(En.commit(this,e),this.emitTo("pb-load",{url:this.action,params:e}))}_paramsFromSubforms(t){return this.subforms&&document.querySelectorAll(this.subforms).forEach(e=>{e.serializeForm&&Object.assign(t,e.serializeForm())}),t}_handleEnter(t){13===t.keyCode&&this._doSearch()}_doSubmit(){this.shadowRoot.getElementById("ironform").submit()}_reset(){this.shadowRoot.getElementById("ironform").reset()}_autocomplete(t){const e=this.shadowRoot.getElementById("ironform").serializeForm(),i=this.shadowRoot.getElementById("autocompleteLoader");i.params=e,i.generateRequest()}_updateSuggestions(){const t=this.shadowRoot.getElementById("autocomplete"),e=this.shadowRoot.getElementById("autocompleteLoader");e.lastResponse&&t.suggestions(e.lastResponse)}}function Oo(t,e){const i=e.findIndex(e=>e.selector===t.selector);i>-1?e[i]=t:e.push(t)}customElements.define("pb-search",Mo);class $o extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},selector:{type:String},action:{type:String},on:{type:String},off:{type:String},default:{type:String},propertiesOn:{type:Object,attribute:"properties-on"},propertiesOff:{type:Object,attribute:"properties-off"},checked:{type:Boolean},initFromView:{type:Boolean,attribute:"init-from-view"},global:{type:Boolean}})}constructor(){super(),this.default="on",this.on="on",this.off="off",this.action="toggle",this.propertiesOn={},this.propertiesOff={},this.initFromView=!1,this.global=!1}render(){return I`
            <paper-checkbox id="checkbox" @change="${this._changed}" .checked="${this.checked}" .disabled="${this.disabled}"><slot></slot></paper-checkbox>
        `}connectedCallback(){super.connectedCallback(),En.subscribe(this,t=>{const e=t[this.name];this._setChecked(e)});const t=En.state[this.name];this._setChecked(t);const e={};e[this.name]=this.checked?this.on:this.off,En.replace(this,e),this._saveState(),this.signalReady(),B("pb-page-ready",()=>{this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:{selector:this.selector,command:this.action,state:this.checked},bubbles:!0,composed:!0})):this.selector&&this.emitTo("pb-toggle",{refresh:!1})})}_setChecked(t){this.checked=void 0!==t?t===this.on:this.default===this.on}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case this.on:this.propertiesOn[this.name]=i;break;case this.off:this.propertiesOff[this.name]=i}}_changed(){if(this.checked=this.shadowRoot.getElementById("checkbox").checked,this._saveState(),this.global){const t={};t[this.name]=this.checked?this.on:this.off,En.commit(this,t)}else this.emitTo("pb-toggle",{refresh:!this.selector})}_saveState(){const t=En.getState(this);if(t[this.name]=this.checked?this.on:this.off,Object.assign(t,this.checked?this.propertiesOn:this.propertiesOff),this.selector){const e={selector:this.selector,command:this.action,state:this.checked};this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:e,bubbles:!0,composed:!0})):(t.selectors=t.selectors||[],Oo(e,t.selectors))}}}customElements.define("pb-toggle-feature",$o),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[T]});class Ho extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},label:{type:String},selected:{type:Number},items:{type:Array}})}constructor(){super(),this.initializing=!0,this.items=[],this.label="document.selectFeature"}connectedCallback(){super.connectedCallback(),En.subscribe(this,t=>{const e=t[this.name];this.selected=void 0!==e?parseInt(e,10):0,this.shadowRoot.getElementById("list").selected=this.selected});const t=En.state[this.name];void 0!==t?this.selected=parseInt(t,10):this.items.length>0&&(this.selected=0);const e={};e[this.name]=this.selected,En.replace(this,e),this.signalReady()}firstUpdated(){super.firstUpdated(),this.shadowRoot.getElementById("list").selected=this.selected,this.shadowRoot.getElementById("menu").addEventListener("iron-select",this._selectionChanged.bind(this))}_selectionChanged(){const t=this._saveState();this.initializing?this.initializing=!1:this.emitTo("pb-toggle",{refresh:t})}_saveState(){const t=this.shadowRoot.getElementById("list").selected,e=En.getState(this);return e[this.name]=t,Object.assign(e,this.items[t].properties),this.items[t].selectors&&(e.selectors||(e.selectors=[]),this.items[t].selectors.forEach(t=>{t.global?(En.commit(this,e),this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:t,bubbles:!0,composed:!0}))):Oo({selector:t.selector,state:t.state,command:t.command},e.selectors)})),this.items[t].properties instanceof Object}render(){return I`
            <paper-dropdown-menu id="menu" label="${W(this.label)}" .disabled="${this.disabled}">
                <paper-listbox id="list" slot="dropdown-content" .selected="${this.selected}">
                    ${this.items.map(t=>I`<paper-item>${W(t.name)}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            #menu {
                width: inherit;
                min-width: inherit;
                max-width: inherit;
            }
        `}}customElements.define("pb-select-feature",Ho);var Io={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ro={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Po=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Vo={CSS:{},springs:{}};function Do(t,e,i){return Math.min(Math.max(t,e),i)}function No(t,e){return t.indexOf(e)>-1}function Fo(t,e){return t.apply(null,e)}var Bo={arr:function(t){return Array.isArray(t)},obj:function(t){return No(Object.prototype.toString.call(t),"Object")},pth:function(t){return Bo.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||Bo.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return Bo.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return Bo.hex(t)||Bo.rgb(t)||Bo.hsl(t)},key:function(t){return!Io.hasOwnProperty(t)&&!Ro.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function jo(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function qo(t,e){var i=jo(t),n=Do(Bo.und(i[0])?1:i[0],.1,100),r=Do(Bo.und(i[1])?100:i[1],.1,100),o=Do(Bo.und(i[2])?10:i[2],.1,100),s=Do(Bo.und(i[3])?0:i[3],.1,100),a=Math.sqrt(r/n),l=o/(2*Math.sqrt(r*n)),c=l<1?a*Math.sqrt(1-l*l):0,h=1,d=l<1?(l*a-s)/c:-s+a;function p(t){var i=e?e*t/1e3:t;return i=l<1?Math.exp(-i*l*a)*(h*Math.cos(c*i)+d*Math.sin(c*i)):(h+d*i)*Math.exp(-i*a),0===t||1===t?t:1-i}function u(){var e=Vo.springs[t];if(e)return e;for(var i=1/6,n=0,r=0;;)if(1===p(n+=i)){if(++r>=16)break}else r=0;var o=n*i*1e3;return Vo.springs[t]=o,o}return e?p:u}function Uo(t){return void 0===t&&(t=10),function(e){return Math.ceil(Do(e,1e-6,1)*t)*(1/t)}}var Wo,Yo,Go=function(){var t=11,e=1/(t-1);function i(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function o(t,e,o){return((i(e,o)*t+n(e,o))*t+r(e))*t}function s(t,e,o){return 3*i(e,o)*t*t+2*n(e,o)*t+r(e)}function a(t,e,i,n,r){var s,a,l=0;do{(s=o(a=e+(i-e)/2,n,r)-t)>0?i=a:e=a}while(Math.abs(s)>1e-7&&++l<10);return a}function l(t,e,i,n){for(var r=0;r<4;++r){var a=s(e,i,n);if(0===a)return e;e-=(o(e,i,n)-t)/a}return e}function c(i,n,r,c){if(0<=i&&i<=1&&0<=r&&r<=1){var h=new Float32Array(t);if(i!==n||r!==c)for(var d=0;d<t;++d)h[d]=o(d*e,i,r);return function(t){return i===n&&r===c||0===t||1===t?t:o(p(t),n,c)}}function p(n){for(var o=0,c=1,d=t-1;c!==d&&h[c]<=n;++c)o+=e;--c;var p=o+(n-h[c])/(h[c+1]-h[c])*e,u=s(p,i,r);return u>=.001?l(n,p,i,r):0===u?p:a(n,o,o+e,i,r)}}return c}(),Ko=(Wo={linear:function(){return function(t){return t}}},Yo={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var i=Do(t,1,10),n=Do(e,.1,2);return function(t){return 0===t||1===t?t:-i*Math.pow(2,10*(t-1))*Math.sin((t-1-n/(2*Math.PI)*Math.asin(1/i))*(2*Math.PI)/n)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(t,e){Yo[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(Yo).forEach((function(t){var e=Yo[t];Wo["easeIn"+t]=e,Wo["easeOut"+t]=function(t,i){return function(n){return 1-e(t,i)(1-n)}},Wo["easeInOut"+t]=function(t,i){return function(n){return n<.5?e(t,i)(2*n)/2:1-e(t,i)(-2*n+2)/2}},Wo["easeOutIn"+t]=function(t,i){return function(n){return n<.5?(1-e(t,i)(1-2*n))/2:(e(t,i)(2*n-1)+1)/2}}})),Wo);function Xo(t,e){if(Bo.fnc(t))return t;var i=t.split("(")[0],n=Ko[i],r=jo(t);switch(i){case"spring":return qo(t,e);case"cubicBezier":return Fo(Go,r);case"steps":return Fo(Uo,r);default:return Fo(n,r)}}function Zo(t){try{return document.querySelectorAll(t)}catch(t){return}}function Qo(t,e){for(var i=t.length,n=arguments.length>=2?arguments[1]:void 0,r=[],o=0;o<i;o++)if(o in t){var s=t[o];e.call(n,s,o,t)&&r.push(s)}return r}function Jo(t){return t.reduce((function(t,e){return t.concat(Bo.arr(e)?Jo(e):e)}),[])}function ts(t){return Bo.arr(t)?t:(Bo.str(t)&&(t=Zo(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function es(t,e){return t.some((function(t){return t===e}))}function is(t){var e={};for(var i in t)e[i]=t[i];return e}function ns(t,e){var i=is(t);for(var n in t)i[n]=e.hasOwnProperty(n)?e[n]:t[n];return i}function rs(t,e){var i=is(t);for(var n in e)i[n]=Bo.und(t[n])?e[n]:t[n];return i}function os(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function ss(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(e,(function(t,e,i,n){return e+e+i+i+n+n})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}function as(t){var e,i,n,r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),o=parseInt(r[1],10)/360,s=parseInt(r[2],10)/100,a=parseInt(r[3],10)/100,l=r[4]||1;function c(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}if(0==s)e=i=n=a;else{var h=a<.5?a*(1+s):a+s-a*s,d=2*a-h;e=c(d,h,o+1/3),i=c(d,h,o),n=c(d,h,o-1/3)}return"rgba("+255*e+","+255*i+","+255*n+","+l+")"}function ls(t){return Bo.rgb(t)?os(t):Bo.hex(t)?ss(t):Bo.hsl(t)?as(t):void 0}function cs(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function hs(t){return No(t,"translate")||"perspective"===t?"px":No(t,"rotate")||No(t,"skew")?"deg":void 0}function ds(t,e){return Bo.fnc(t)?t(e.target,e.id,e.total):t}function ps(t,e){return t.getAttribute(e)}function us(t,e,i){if(es([i,"deg","rad","turn"],cs(e)))return e;var n=Vo.CSS[e+i];if(!Bo.und(n))return n;var r=100,o=document.createElement(t.tagName),s=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;s.appendChild(o),o.style.position="absolute",o.style.width=r+i;var a=r/o.offsetWidth;s.removeChild(o);var l=a*parseFloat(e);return Vo.CSS[e+i]=l,l}function gs(t,e,i){if(e in t.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[e]||getComputedStyle(t).getPropertyValue(n)||"0";return i?us(t,r,i):r}}function fs(t,e){return Bo.dom(t)&&!Bo.inp(t)&&(!Bo.nil(ps(t,e))||Bo.svg(t)&&t[e])?"attribute":Bo.dom(t)&&es(Po,e)?"transform":Bo.dom(t)&&"transform"!==e&&gs(t,e)?"css":null!=t[e]?"object":void 0}function ms(t){if(Bo.dom(t)){for(var e,i=t.style.transform||"",n=/(\w+)\(([^)]*)\)/g,r=new Map;e=n.exec(i);)r.set(e[1],e[2]);return r}}function vs(t,e,i,n){var r=No(e,"scale")?1:0+hs(e),o=ms(t).get(e)||r;return i&&(i.transforms.list.set(e,o),i.transforms.last=e),n?us(t,o,n):o}function bs(t,e,i,n){switch(fs(t,e)){case"transform":return vs(t,e,n,i);case"css":return gs(t,e,i);case"attribute":return ps(t,e);default:return t[e]||0}}function ys(t,e){var i=/^(\*=|\+=|-=)/.exec(t);if(!i)return t;var n=cs(t)||0,r=parseFloat(e),o=parseFloat(t.replace(i[0],""));switch(i[0][0]){case"+":return r+o+n;case"-":return r-o+n;case"*":return r*o+n}}function _s(t,e){if(Bo.col(t))return ls(t);if(/\s/g.test(t))return t;var i=cs(t),n=i?t.substr(0,t.length-i.length):t;return e?n+e:n}function ws(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function xs(t){return 2*Math.PI*ps(t,"r")}function ks(t){return 2*ps(t,"width")+2*ps(t,"height")}function As(t){return ws({x:ps(t,"x1"),y:ps(t,"y1")},{x:ps(t,"x2"),y:ps(t,"y2")})}function Ss(t){for(var e,i=t.points,n=0,r=0;r<i.numberOfItems;r++){var o=i.getItem(r);r>0&&(n+=ws(e,o)),e=o}return n}function zs(t){var e=t.points;return Ss(t)+ws(e.getItem(e.numberOfItems-1),e.getItem(0))}function Cs(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return xs(t);case"rect":return ks(t);case"line":return As(t);case"polyline":return Ss(t);case"polygon":return zs(t)}}function Es(t){var e=Cs(t);return t.setAttribute("stroke-dasharray",e),e}function Ts(t){for(var e=t.parentNode;Bo.svg(e)&&Bo.svg(e.parentNode);)e=e.parentNode;return e}function Ls(t,e){var i=e||{},n=i.el||Ts(t),r=n.getBoundingClientRect(),o=ps(n,"viewBox"),s=r.width,a=r.height,l=i.viewBox||(o?o.split(" "):[0,0,s,a]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:s,h:a,vW:l[2],vH:l[3]}}function Ms(t,e){var i=Bo.str(t)?Zo(t)[0]:t,n=e||100;return function(t){return{property:t,el:i,svg:Ls(i),totalLength:Cs(i)*(n/100)}}}function Os(t,e,i){function n(i){void 0===i&&(i=0);var n=e+i>=1?e+i:0;return t.el.getPointAtLength(n)}var r=Ls(t.el,t.svg),o=n(),s=n(-1),a=n(1),l=i?1:r.w/r.vW,c=i?1:r.h/r.vH;switch(t.property){case"x":return(o.x-r.x)*l;case"y":return(o.y-r.y)*c;case"angle":return 180*Math.atan2(a.y-s.y,a.x-s.x)/Math.PI}}function $s(t,e){var i=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=_s(Bo.pth(t)?t.totalLength:t,e)+"";return{original:n,numbers:n.match(i)?n.match(i).map(Number):[0],strings:Bo.str(t)||e?n.split(i):[]}}function Hs(t){return Qo(t?Jo(Bo.arr(t)?t.map(ts):ts(t)):[],(function(t,e,i){return i.indexOf(t)===e}))}function Is(t){var e=Hs(t);return e.map((function(t,i){return{target:t,id:i,total:e.length,transforms:{list:ms(t)}}}))}function Rs(t,e){var i=is(e);if(/^spring/.test(i.easing)&&(i.duration=qo(i.easing)),Bo.arr(t)){var n=t.length;2===n&&!Bo.obj(t[0])?t={value:t}:Bo.fnc(e.duration)||(i.duration=e.duration/n)}var r=Bo.arr(t)?t:[t];return r.map((function(t,i){var n=Bo.obj(t)&&!Bo.pth(t)?t:{value:t};return Bo.und(n.delay)&&(n.delay=i?0:e.delay),Bo.und(n.endDelay)&&(n.endDelay=i===r.length-1?e.endDelay:0),n})).map((function(t){return rs(t,i)}))}function Ps(t){for(var e=Qo(Jo(t.map((function(t){return Object.keys(t)}))),(function(t){return Bo.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),i={},n=function(n){var r=e[n];i[r]=t.map((function(t){var e={};for(var i in t)Bo.key(i)?i==r&&(e.value=t[i]):e[i]=t[i];return e}))},r=0;r<e.length;r++)n(r);return i}function Vs(t,e){var i=[],n=e.keyframes;for(var r in n&&(e=rs(Ps(n),e)),e)Bo.key(r)&&i.push({name:r,tweens:Rs(e[r],t)});return i}function Ds(t,e){var i={};for(var n in t){var r=ds(t[n],e);Bo.arr(r)&&1===(r=r.map((function(t){return ds(t,e)}))).length&&(r=r[0]),i[n]=r}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function Ns(t,e){var i;return t.tweens.map((function(n){var r=Ds(n,e),o=r.value,s=Bo.arr(o)?o[1]:o,a=cs(s),l=bs(e.target,t.name,a,e),c=i?i.to.original:l,h=Bo.arr(o)?o[0]:c,d=cs(h)||cs(l),p=a||d;return Bo.und(s)&&(s=c),r.from=$s(h,p),r.to=$s(ys(s,h),p),r.start=i?i.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Xo(r.easing,r.duration),r.isPath=Bo.pth(o),r.isPathTargetInsideSVG=r.isPath&&Bo.svg(e.target),r.isColor=Bo.col(r.from.original),r.isColor&&(r.round=1),i=r,r}))}var Fs={css:function(t,e,i){return t.style[e]=i},attribute:function(t,e,i){return t.setAttribute(e,i)},object:function(t,e,i){return t[e]=i},transform:function(t,e,i,n,r){if(n.list.set(e,i),e===n.last||r){var o="";n.list.forEach((function(t,e){o+=e+"("+t+") "})),t.style.transform=o}}};function Bs(t,e){Is(t).forEach((function(t){for(var i in e){var n=ds(e[i],t),r=t.target,o=cs(n),s=bs(r,i,o,t),a=ys(_s(n,o||cs(s)),s),l=fs(r,i);Fs[l](r,i,a,t.transforms,!0)}}))}function js(t,e){var i=fs(t.target,e.name);if(i){var n=Ns(e,t),r=n[n.length-1];return{type:i,property:e.name,animatable:t,tweens:n,duration:r.end,delay:n[0].delay,endDelay:r.endDelay}}}function qs(t,e){return Qo(Jo(t.map((function(t){return e.map((function(e){return js(t,e)}))}))),(function(t){return!Bo.und(t)}))}function Us(t,e){var i=t.length,n=function(t){return t.timelineOffset?t.timelineOffset:0},r={};return r.duration=i?Math.max.apply(Math,t.map((function(t){return n(t)+t.duration}))):e.duration,r.delay=i?Math.min.apply(Math,t.map((function(t){return n(t)+t.delay}))):e.delay,r.endDelay=i?r.duration-Math.max.apply(Math,t.map((function(t){return n(t)+t.duration-t.endDelay}))):e.endDelay,r}var Ws=0;function Ys(t){var e=ns(Io,t),i=ns(Ro,t),n=Vs(i,t),r=Is(t.targets),o=qs(r,n),s=Us(o,i),a=Ws;return Ws++,rs(e,{id:a,children:[],animatables:r,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var Gs=[],Ks=function(){var t;function e(){t||Xs()&&Zs.suspendWhenDocumentHidden||!(Gs.length>0)||(t=requestAnimationFrame(i))}function i(e){for(var n=Gs.length,r=0;r<n;){var o=Gs[r];o.paused?(Gs.splice(r,1),n--):(o.tick(e),r++)}t=r>0?requestAnimationFrame(i):void 0}function n(){Zs.suspendWhenDocumentHidden&&(Xs()?t=cancelAnimationFrame(t):(Gs.forEach((function(t){return t._onDocumentVisibility()})),Ks()))}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",n),e}();function Xs(){return!!document&&document.hidden}function Zs(t){void 0===t&&(t={});var e,i=0,n=0,r=0,o=0,s=null;function a(t){var e=window.Promise&&new Promise((function(t){return s=t}));return t.finished=e,e}var l=Ys(t);a(l);function c(){var t=l.direction;"alternate"!==t&&(l.direction="normal"!==t?"normal":"reverse"),l.reversed=!l.reversed,e.forEach((function(t){return t.reversed=l.reversed}))}function h(t){return l.reversed?l.duration-t:t}function d(){i=0,n=h(l.currentTime)*(1/Zs.speed)}function p(t,e){e&&e.seek(t-e.timelineOffset)}function u(t){if(l.reversePlayback)for(var i=o;i--;)p(t,e[i]);else for(var n=0;n<o;n++)p(t,e[n])}function g(t){for(var e=0,i=l.animations,n=i.length;e<n;){var r=i[e],o=r.animatable,s=r.tweens,a=s.length-1,c=s[a];a&&(c=Qo(s,(function(e){return t<e.end}))[0]||c);for(var h=Do(t-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(h)?1:c.easing(h),p=c.to.strings,u=c.round,g=[],f=c.to.numbers.length,m=void 0,v=0;v<f;v++){var b=void 0,y=c.to.numbers[v],_=c.from.numbers[v]||0;b=c.isPath?Os(c.value,d*y,c.isPathTargetInsideSVG):_+d*(y-_),u&&(c.isColor&&v>2||(b=Math.round(b*u)/u)),g.push(b)}var w=p.length;if(w){m=p[0];for(var x=0;x<w;x++){p[x];var k=p[x+1],A=g[x];isNaN(A)||(m+=k?A+k:A+" ")}}else m=g[0];Fs[r.type](o.target,r.property,m,o.transforms),r.currentValue=m,e++}}function f(t){l[t]&&!l.passThrough&&l[t](l)}function m(){l.remaining&&!0!==l.remaining&&l.remaining--}function v(t){var o=l.duration,d=l.delay,p=o-l.endDelay,v=h(t);l.progress=Do(v/o*100,0,100),l.reversePlayback=v<l.currentTime,e&&u(v),!l.began&&l.currentTime>0&&(l.began=!0,f("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,f("loopBegin")),v<=d&&0!==l.currentTime&&g(0),(v>=p&&l.currentTime!==o||!o)&&g(o),v>d&&v<p?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,f("changeBegin")),f("change"),g(v)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,f("changeComplete")),l.currentTime=Do(v,0,o),l.began&&f("update"),t>=o&&(n=0,m(),l.remaining?(i=r,f("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,f("loopComplete"),f("complete"),!l.passThrough&&"Promise"in window&&(s(),a(l)))))}return l.reset=function(){var t=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===t,l.remaining=l.loop,e=l.children;for(var i=o=e.length;i--;)l.children[i].reset();(l.reversed&&!0!==l.loop||"alternate"===t&&1===l.loop)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=d,l.set=function(t,e){return Bs(t,e),l},l.tick=function(t){r=t,i||(i=r),v((r+(n-i))*Zs.speed)},l.seek=function(t){v(h(t))},l.pause=function(){l.paused=!0,d()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Gs.push(l),d(),Ks())},l.reverse=function(){c(),l.completed=!l.reversed,d()},l.restart=function(){l.reset(),l.play()},l.remove=function(t){Js(Hs(t),l)},l.reset(),l.autoplay&&l.play(),l}function Qs(t,e){for(var i=e.length;i--;)es(t,e[i].animatable.target)&&e.splice(i,1)}function Js(t,e){var i=e.animations,n=e.children;Qs(t,i);for(var r=n.length;r--;){var o=n[r],s=o.animations;Qs(t,s),s.length||o.children.length||n.splice(r,1)}i.length||n.length||e.pause()}function ta(t){for(var e=Hs(t),i=Gs.length;i--;){Js(e,Gs[i])}}function ea(t,e){void 0===e&&(e={});var i=e.direction||"normal",n=e.easing?Xo(e.easing):null,r=e.grid,o=e.axis,s=e.from||0,a="first"===s,l="center"===s,c="last"===s,h=Bo.arr(t),d=h?parseFloat(t[0]):parseFloat(t),p=h?parseFloat(t[1]):0,u=cs(h?t[1]:t)||0,g=e.start||0+(h?d:0),f=[],m=0;return function(t,e,v){if(a&&(s=0),l&&(s=(v-1)/2),c&&(s=v-1),!f.length){for(var b=0;b<v;b++){if(r){var y=l?(r[0]-1)/2:s%r[0],_=l?(r[1]-1)/2:Math.floor(s/r[0]),w=y-b%r[0],x=_-Math.floor(b/r[0]),k=Math.sqrt(w*w+x*x);"x"===o&&(k=-w),"y"===o&&(k=-x),f.push(k)}else f.push(Math.abs(s-b));m=Math.max.apply(Math,f)}n&&(f=f.map((function(t){return n(t/m)*m}))),"reverse"===i&&(f=f.map((function(t){return o?t<0?-1*t:-t:Math.abs(m-t)})))}return g+(h?(p-d)/m:d)*(Math.round(100*f[e])/100)+u}}function ia(t){void 0===t&&(t={});var e=Zs(t);return e.duration=0,e.add=function(i,n){var r=Gs.indexOf(e),o=e.children;function s(t){t.passThrough=!0}r>-1&&Gs.splice(r,1);for(var a=0;a<o.length;a++)s(o[a]);var l=rs(i,ns(Ro,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Bo.und(n)?c:ys(n,c),s(e),e.seek(l.timelineOffset);var h=Zs(l);s(h),o.push(h);var d=Us(o,t);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Zs.version="3.2.1",Zs.speed=1,Zs.suspendWhenDocumentHidden=!0,Zs.running=Gs,Zs.remove=ta,Zs.get=bs,Zs.set=Bs,Zs.convertPx=us,Zs.path=Ms,Zs.setDashoffset=Es,Zs.stagger=ea,Zs.timeline=ia,Zs.easing=Xo,Zs.penner=Ko,Zs.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};class na extends(z(N(V))){static get properties(){return Object.assign({src:{type:String},odd:{type:String},view:{type:String},nodeId:{type:String,attribute:"node-id"},xmlId:{type:Array,attribute:"xml-id"},xpath:{type:String},map:{type:String},onUpdate:{type:Boolean,attribute:"on-update"},notFound:{type:String,attribute:"not-found"},url:{type:String},static:{type:String},appendFootnotes:{type:Boolean,attribute:"append-footnotes"},suppressHighlight:{type:Boolean,attribute:"suppress-highlight"},columnSeparator:{type:String,attribute:"column-separator"},direction:{type:String},loadCss:{type:String,attribute:"load-css"},fixLinks:{type:Boolean,attribute:"fix-links"},useLanguage:{type:Boolean,attribute:"use-language"},animation:{type:Boolean},infiniteScroll:{type:Boolean,attribute:"infinite-scroll"},infiniteScrollMax:{type:Number,attribute:"infinite-scroll-max"},waitFor:{type:String,attribute:"wait-for"},disableHistory:{type:Boolean,attribute:"disable-history"},beforeUpdate:{type:String,attribute:"before-update-event"},noScroll:{type:Boolean,attribute:"no-scroll"},_features:{type:Object},_content:{type:Node,attribute:!1},_column1:{type:Node,attribute:!1},_column2:{type:Node,attribute:!1},_footnotes:{type:Node,attribute:!1},_style:{type:Node,attribute:!1},_additionalParams:{type:Object}},super.properties)}constructor(){super(),this.src=null,this.url=null,this.onUpdate=!1,this.appendFootnotes=!1,this.notFound=null,this.animation=!1,this.direction="ltr",this.suppressHighlight=!1,this.highlight=!1,this.infiniteScrollMax=10,this.disableHistory=!1,this.beforeUpdate=null,this.noScroll=!1,this._features={},this._additionalParams={},this._selector={},this._chunks=[],this._scrollTarget=null,this.static=null}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"src":this._updateSource(i,e)}}connectedCallback(){if(super.connectedCallback(),this.loadCss&&B("pb-page-ready",()=>{E([this.toAbsoluteURL(this.loadCss)]).then(t=>{this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t]})}),this.infiniteScroll&&(this.columnSeparator=null,this.animation=!1,this._content=document.createElement("div"),this._content.className="infinite-content"),!this.disableHistory){En.state.id&&!this.xmlId&&(this.xmlId=En.state.id),En.state.action&&"search"===En.state.action&&(this.highlight=!0),"single"===this.view?this.nodeId=null:En.state.root&&!this.nodeId&&(this.nodeId=En.state.root);const t={id:this.xmlId,view:this.getView(),odd:this.getOdd(),path:this.getDocument().path};"single"!==this.view&&(t.root=this.nodeId),console.log("id: %s; state: %o",this.id,t),En.replace(this,t),En.subscribe(this,t=>{this._setState(t),this._refresh()})}this.waitFor||(this.waitFor="pb-toggle-feature,pb-select-feature,pb-navigation"),this.subscribeTo("pb-navigate",t=>{t.detail.source&&t.detail.source===this||this.navigate(t.detail.direction)}),this.subscribeTo("pb-refresh",this._refresh.bind(this)),this.subscribeTo("pb-toggle",t=>{this.toggleFeature(t)}),this.subscribeTo("pb-zoom",t=>{this.zoom(t.detail.direction)}),this.subscribeTo("pb-i18n-update",t=>{const e=this._features.language&&this._features.language!==t.detail.language;this._features.language=t.detail.language,this.useLanguage&&e&&(this._setState(En.getState(this)),this._refresh())},[]),this.signalReady(),this.onUpdate&&this.subscribeTo("pb-update",t=>{this._refresh(t)})}disconnectedCallback(){super.disconnectedCallback(),this._scrollObserver&&this._scrollObserver.disconnect()}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!0),this.infiniteScroll&&(this._topObserver=this.shadowRoot.getElementById("top-observer"),this._bottomObserver=this.shadowRoot.getElementById("bottom-observer"),this._bottomObserver.style.display="none",this._topObserver.style.display="none",this._scrollObserver=new IntersectionObserver(t=>{this._content&&t.forEach(t=>{if(t.isIntersecting)if("bottom-observer"===t.target.id){const t=this._content.lastElementChild;if(t){const e=t.getAttribute("data-next");e&&!this._content.querySelector(`[data-root="${e}"]`)&&(console.log("<pb-view> Loading next page: %s",e),this._checkChunks("forward"),this._load(e,"forward"))}}else{const t=this._content.firstElementChild;if(t){const e=t.getAttribute("data-previous");e&&!this._content.querySelector(`[data-root="${e}"]`)&&(this._checkChunks("backward"),this._load(e,"backward"))}}})})),this.onUpdate||B("pb-page-ready",t=>{t&&t.language&&(this._features.language=t.language),this.wait(()=>{this.disableHistory||this._setState(En.state),this._refresh()})})}getOdd(){return this.odd||this.getDocument().odd||"teipublisher"}getView(){return this.view||this.getDocument().view||"single"}forceUpdate(){this._load(this.nodeId)}animate(){this.animation&&("forward"===this.lastDirection?Zs({targets:this.shadowRoot.getElementById("view"),opacity:[0,1],translateX:[1e3,0],duration:300,easing:"linear"}):Zs({targets:this.shadowRoot.getElementById("view"),opacity:[0,1],translateX:[-1e3,0],duration:300,easing:"linear"}))}enableScrollbar(t){t?this.classList.add("noscroll"):this.classList.remove("noscroll")}_refresh(t){if(t&&t.detail){if(t.detail.hash&&!this.noScroll&&!(t.detail.id||t.detail.path||t.detail.odd||t.detail.view||t.detail.position)){this._scrollTarget=t.detail.hash;const e=this.shadowRoot.getElementById(this._scrollTarget);return void(e&&setTimeout(()=>e.scrollIntoView({block:"nearest"})))}if(t.detail.path){this.getDocument().path=t.detail.path}t.detail.id?this.xmlId=t.detail.id:null==t.detail.id&&(this.xmlId=null),this.odd=t.detail.odd||this.odd,void 0!==t.detail.columnSeparator&&(this.columnSeparator=t.detail.columnSeparator),this.view=t.detail.view||this.getView(),t.detail.xpath&&(this.xpath=t.detail.xpath,this.nodeId=null),null===t.detail.root?this.nodeId=null:this.nodeId=(void 0!==t.detail.position?t.detail.position:t.detail.root)||this.nodeId,En.pathParams.forEach(e=>{this._additionalParams[e]=t.detail[e]}),this.noScroll||(this._scrollTarget=t.detail.hash)}this._updateStyles(),this.infiniteScroll&&this._clear(),this._load(this.nodeId)}_load(t,e){if(!this.getDocument().path)return void console.log("No path");if(this._loading)return;this._loading=!0;const i=this.getParameters(t);e&&(i._dir=e),this._doLoad(i)}_doLoad(t){this.emitTo("pb-start-update",t),console.log("<pb-view> Loading view with params %o",t),this.infiniteScroll||this._clear(),this._scrollObserver&&(this._bottomObserver&&this._scrollObserver.unobserve(this._bottomObserver),this._topObserver&&this._scrollObserver.unobserve(this._topObserver));const e=this.shadowRoot.getElementById("loadContent");if(null!==this.static)return void this._staticUrl(t).then(t=>{e.url=t,e.generateRequest()});this.url||(this.minApiVersion("1.0.0")?this.url="api/parts":this.url="modules/lib/components.xql");let i=`${this.getEndpoint()}/${this.url}`;this.minApiVersion("1.0.0")&&(i+=`/${encodeURIComponent(this.getDocument().path)}/json`),e.url=i,e.params=t,e.generateRequest()}async _staticUrl(t){function e(e){const i=[];return e.sort().forEach(e=>{t.hasOwnProperty(e)&&i.push(`${e}=${t[e]}`)}),i.join("&")}const i=await fetch("index.json").then(t=>t.json()),n=["odd","view","xpath","map"];this.querySelectorAll("pb-param").forEach(t=>n.push("user."+t.getAttribute("name")));let r=t.id?e([...n,"id"]):e([...n,"root"]),o=i[r];return o||(r=e(n),o=i[r]),console.log("<pb-view> Static lookup %s: %s",r,o),""+o}_clear(){this.infiniteScroll?(this._content=document.createElement("div"),this._content.className="infinite-content"):this._content=null,this._column1=null,this._column2=null,this._footnotes=null,this._chunks=[]}_handleError(){this._clear();const t=this.shadowRoot.getElementById("loadContent");let e;const{response:i}=t.lastError;let n;e=i?i.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>',n=null!=this.notFound?`<p>${this.notFound}</p>`:`<p><pb-i18n key="dialogs.serverError"></pb-i18n>: ${e} </p>`,this._replaceContent({content:n}),this.emitTo("pb-end-update")}_handleContent(){const t=this.shadowRoot.getElementById("loadContent"),e=t.lastResponse;if(e){if(e.error)return null!=this.notFound&&(this._content=this.notFound),void this.emitTo("pb-end-update",null);this._replaceContent(e,t.params._dir),this.animate(),this._scrollTarget&&this.updateComplete.then(()=>{const t=this.shadowRoot.getElementById(this._scrollTarget)||this.shadowRoot.querySelector(`[node-id="${this._scrollTarget}"]`);t&&window.requestAnimationFrame(()=>setTimeout(()=>{t.scrollIntoView({block:"nearest"})},400)),this._scrollTarget=null}),this.next=e.next,this.nextId=e.nextId,this.previous=e.previous,this.previousId=e.previousId,this.nodeId=e.root,this.switchView=e.switchView,this.updateComplete.then(()=>{const i=this.shadowRoot.getElementById("view");this._applyToggles(i),this._fixLinks(i),In(i);const n={data:e,root:i,params:t.params,id:this.xmlId,position:this.nodeId};this.emitTo("pb-update",n),this._scroll()}),this.emitTo("pb-end-update",null)}else console.error("<pb-view> No response received")}_replaceContent(t,e){const i=document.createDocumentFragment(),n=document.createElement("div");i.appendChild(n),n.innerHTML=t.content,this.beforeUpdate?this.emitTo(this.beforeUpdate,{data:t,root:n,render:i=>{this._doReplaceContent(i,t,e)}}):this._doReplaceContent(n,t,e)}_doReplaceContent(t,e,i){if(this.columnSeparator)this._replaceColumns(t),this._loading=!1;else if(this.infiniteScroll){let n;switch(t.className="scroll-fragment",t.setAttribute("data-root",e.root),e.next&&t.setAttribute("data-next",e.next),e.previous&&t.setAttribute("data-previous",e.previous),i){case"backward":n=this._content.firstElementChild,this._chunks.unshift(t),this.updateComplete.then(()=>{n.scrollIntoView(!0),this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._content.insertBefore(t,n);break;default:this.updateComplete.then(()=>{this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._chunks.push(t),this._content.appendChild(t)}}else this._content=t,this._loading=!1;if(this.appendFootnotes){const t=document.createElement("div");e.footnotes&&(t.innerHTML=e.footnotes),this._footnotes=t}return this._initFootnotes(this._footnotes),t}_checkVisibility(){const t=this._chunks[this._chunks.length-1].hasAttribute("data-next");this._bottomObserver.style.display=t?"":"none";const e=this._chunks[0].hasAttribute("data-previous");this._topObserver.style.display=e?"":"none"}_replaceColumns(t){let e;if(this.columnSeparator){const i=t.querySelectorAll(this.columnSeparator);i.length>1&&(e=i[i.length-1])}if(e){const i=this._getFragmentBefore(t,e),n=this._getFragmentAfter(t,e);"ltr"===this.direction?(this._column1=i,this._column2=n):(this._column2=i,this._column1=n)}else this._content=t}_scroll(){if(!this.noScroll&&En.hash){const t=this.shadowRoot.getElementById(En.hash.substring(1));console.log("hash target: %o",t),t&&window.requestAnimationFrame(()=>setTimeout(()=>{t.scrollIntoView({block:"center",inline:"nearest"})},400))}}_scrollToElement(t,e){const i=this.shadowRoot.getElementById(e.hash.substring(1));i&&(t.preventDefault(),console.log("<pb-view> Scrolling to element %s",i.id),i.scrollIntoView({block:"center",inline:"nearest"}))}_updateStyles(){let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),null!==this.static?t.setAttribute("href",`${this.static}/css/${this.getOdd()}.css`):t.setAttribute("href",`${this.getEndpoint()}/transform/${this.getOdd()}.css`),this._style=t}_fixLinks(t){if(this.fixLinks){const e=this.getDocument(),i=this.toAbsoluteURL(e.path);t.querySelectorAll("img").forEach(t=>{const e=t.getAttribute("src"),n=new URL(e,i);t.src=n}),t.querySelectorAll("a").forEach(t=>{const e=t.getAttribute("href");if(e===t.hash)t.addEventListener("click",e=>this._scrollToElement(e,t));else{const n=new URL(e,i);t.href=n}})}else t.querySelectorAll("a").forEach(t=>{t.getAttribute("href")===t.hash&&t.addEventListener("click",e=>this._scrollToElement(e,t))})}_initFootnotes(t){t&&t.querySelectorAll(".note, .fn-back").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const i=this.shadowRoot.getElementById("content").querySelector(t.hash);i&&i.scrollIntoView()})})}_getParameters(){const t=[];this.querySelectorAll("pb-param").forEach((function(e){t["user."+e.getAttribute("name")]=e.getAttribute("value")}));for(const[e,i]of Object.entries(this._features))t["user."+e]=i;if(this._additionalParams)for(const[e,i]of Object.entries(this._additionalParams))t[e]=i;return t}getParameters(t){t=t||this.nodeId;const e=this.getDocument(),i=this._getParameters();return this.minApiVersion("1.0.0")||(i.doc=e.path),i.odd=this.getOdd()+".odd",i.view=this.getView(),t&&(i.root=t),this.xpath&&(i.xpath=this.xpath),this.xmlId&&(i.id=this.xmlId),!this.suppressHighlight&&this.highlight&&(i.highlight="yes"),this.map&&(i.map=this.map),i}_applyToggles(t){for(const[e,i]of Object.entries(this._selector))t.querySelectorAll(e).forEach(t=>{const e=i.command||"toggle";t.command&&t.command(e,i.state),i.state?t.classList.add(e):t.classList.remove(e)})}goto(t){this._load(t)}gotoId(t){this.xmlId=t,this._load()}navigate(t){"single"!==this.getView()&&(this.lastDirection=t,"backward"===t?this.previous&&(this.disableHistory||this.map||En.commit(this,{id:this.previousId||null,root:this.previousId?null:this.previous}),this.xmlId=this.previousId,this._load(this.xmlId?null:this.previous,t)):this.next&&(this.disableHistory||this.map||En.commit(this,{id:this.nextId||null,root:this.nextId?null:this.next}),this.xmlId=this.nextId,this._load(this.xmlId?null:this.next,t)))}_checkChunks(t){if(this.infiniteScroll&&0!==this.infiniteScrollMax){if(this._chunks.length===this.infiniteScrollMax)switch(t){case"forward":this._content.removeChild(this._chunks.shift());break;default:this._content.removeChild(this._chunks.pop())}this.emitTo("pb-navigate",{direction:t,source:this})}}zoom(t){const e=this.shadowRoot.getElementById("view"),i=window.getComputedStyle(e).getPropertyValue("font-size"),n=parseInt(i.replace(/^(\d+)px/,"$1"));e.style.fontSize="in"===t?n+1+"px":n-1+"px"}toggleFeature(t){const e=En.getState(this);if(e&&this._setState(e),t.detail.refresh)this._updateStyles(),this._load();else{const t=this.shadowRoot.getElementById("view");this._applyToggles(t)}En.commit(this,e)}_setState(t){for(const[e,i]of Object.entries(t))if(En.pathParams.has(e))this._additionalParams[e]=i;else switch(e){case"odd":case"view":case"columnSeparator":case"xpath":case"nodeId":case"path":case"root":break;default:this._features[e]=i}t.odd&&!this.getAttribute("odd")&&(this.odd=t.odd),t.view&&!this.getAttribute("view")&&(this.view=t.view,"single"===this.view?this.nodeId=null:this.nodeId=this.switchView),t.xpath&&!this.getAttribute("xpath")&&(this.xpath=t.xpath),t.hasOwnProperty("columnSeparator")&&(this.columnSeparator=t.columnSeparator),this.xmlId=!this.getAttribute("xml-id")&&t.id||this.xmlId,this.nodeId=!this.getAttribute("xml-id")&&t.root||null,t.path&&(this.getDocument().path=t.path),t.selectors&&t.selectors.forEach(t=>{this._selector[t.selector]={state:t.state,command:t.command||"toggle"}})}_getFragmentBefore(t,e){const i=document.createRange();return i.setStartBefore(t),i.setEndBefore(e),i.cloneContents()}_getFragmentAfter(t,e){const i=document.createRange();return i.setStartBefore(e),i.setEndAfter(t),i.cloneContents()}_updateSource(t,e){void 0!==e&&t!==e&&(this.xpath=null,this.odd=null,this.xmlId=null,this.nodeId=null)}static get styles(){return R`
            :host {
                display: block;
                background: transparent;
            }

            :host(.noscroll) {
                scrollbar-width: none; /* Firefox 64 */
                -ms-overflow-style: none;
            }

            :host(.noscroll)::-webkit-scrollbar { 
                width: 0 !important;
                display: none; 
            }

            [id] {
                scroll-margin-top: var(--pb-view-scroll-margin-top);
            }

            #view {
                position: relative;
            }

            .columns {
                display: grid;
                grid-template-columns: calc(50% - var(--pb-view-column-gap, 10px) / 2) calc(50% - var(--pb-view-column-gap, 10px) / 2);
                grid-column-gap: var(--pb-view-column-gap, 10px);
            }

            .margin-note {
                display: none;
            }

            @media (min-width: 769px) {
                .content.margin-right {
                    margin-right: 200px;
                }

                .margin-note {
                    background: rgba(153, 153, 153, 0.2);
                    display: block;
                    font-size: small;
                    margin-right: -200px;
                    margin-bottom: 5px;
                    padding: 5px 0;
                    float: right;
                    clear: both;
                    width: 180px;
                }

                .margin-note .n {
                  color: #777777;
                }
            }

            a[rel=footnote] {
                font-size: var(--pb-footnote-font-size, var(--pb-content-font-size, 75%));
                font-family: var(--pb-footnote-font-family, --pb-content-font-family);
                vertical-align: super;
                color: var(--pb-footnote-color, var(--pb-color-primary, #333333));
                text-decoration: none;
                padding: var(--pb-footnote-padding, 0 0 0 .25em);
            }

            .list dt {
                float: left;
            }

            .footnote .fn-number {
                float: left;
                font-size: var(--pb-footnote-font-size, var(--pb-content-font-size, 75%));
            }

            .observer {
                display: block;
                width: 100%;
                height: var(--pb-view-loader-height, 16px);
                font-family: var(--pb-view-loader-font, --pb-base-font);
                color: var(--pb-view-loader-color, black);
                background: var(--pb-view-loader-background, #909090);
                background-image: var(--pb-view-loader-background-image, repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px));
                animation-name: loader;
                animation-timing-function: linear;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }

            @keyframes loader {
                0% {
                    background-position: 3rem 0;
                }
                
                100% {
                    background-position: 0 0;
                }
            }

            .scroll-fragment {
                animation: fadeIn ease 500ms;
            }

            @keyframes fadeIn {
                0% {opacity:0;}
                100% {opacity:1;}
            }
        `}render(){return[I`
                <div id="view" part="content">
                    ${this._style}
                    ${this.infiniteScroll?I`<div id="top-observer" class="observer"></div>`:null}
                    <div class="columns">
                        <div id="column1">${this._column1}</div>
                        <div id="column2">${this._column2}</div>
                    </div>
                    <div id="content">${this._content}</div>
                    ${this.infiniteScroll?I`<div id="bottom-observer" class="observer"></div>`:null}
                    <div id="footnotes" part="footnotes">${this._footnotes}</div>
                </div>
                <paper-dialog id="errorDialog">
                    <h2>${W("dialogs.error")}</h2>
                    <paper-dialog-scrollable></paper-dialog-scrollable>
                    <div class="buttons">
                        <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                        ${W("dialogs.close")}
                        </paper-button>
                    </div>
                </paper-dialog>
                <iron-ajax
                    id="loadContent"
                    verbose
                    handle-as="json"
                    method="get"
                    with-credentials
                    @response="${this._handleContent}"
                    @error="${this._handleError}"></iron-ajax>
            `]}}customElements.define("pb-view",na);const ra=[0,100],oa=[0,100],sa=t=>`${1===t.length?"0":""}${t}`,aa=(t,e,i)=>Math.max(Math.min(t,i),e),la=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,ca=(t,e,i)=>{const n=la(t,e);for(let r=0;r<(null==i?void 0:i.length);r++){const o=i[r];if(2===(null==o?void 0:o.length)&&n>=o[0]&&n<=o[1])return ca(t,e,i)}return n},ha=t=>{const e=t.length;let i=0;for(let n=0;n<e;n++)i=(i<<5)-i+t.charCodeAt(n),i&=i;return i},da=(t,e)=>"number"==typeof e?e:t%Math.abs(e[1]-e[0])+e[0],pa=(t,e)=>"number"==typeof t?aa(Math.abs(t),...e):1===t.length||t[0]===t[1]?aa(Math.abs(t[0]),...e):[Math.abs(aa(t[0],...e)),aa(Math.abs(t[1]),...e)],ua=(t,e,i)=>(i<0?i+=1:i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t),ga=(t,e,i)=>{let n,r,o;if(t/=360,i/=100,0===(e/=100))n=r=o=i;else{const s=i<.5?i*(1+e):i+e-i*e,a=2*i-s;n=ua(a,s,t+1/3),r=ua(a,s,t),o=ua(a,s,t-1/3)}return[Math.round(255*n),Math.round(255*r),Math.round(255*o)]},fa=(t,e,i,n)=>(299*t+587*e+114*i)/1e3>=n,ma=(t,e,i)=>`hsl(${t}, ${e}%, ${i}%)`,va=(t,e,i,n)=>{switch(n){case"rgb":return`rgb(${t}, ${e}, ${i})`;case"hex":default:return`#${sa(t.toString(16))}${sa(e.toString(16))}${sa(i.toString(16))}`}},ba=(t,{format:e="hex",saturation:i=[50,55],lightness:n=[50,60],differencePoint:r=130}={})=>{const o=Math.abs(ha(String(t))),s=da(o,[0,360]),a=da(o,pa(i,ra)),l=da(o,pa(n,oa)),[c,h,d]=ga(s,a,l);return{color:"hsl"===e?ma(s,a,l):va(c,h,d,e),isLight:fa(c,h,d,r)}};function ya(t,e){let i=t;for(;i.parentNode!==e;)i=i.parentElement;return i}function _a(t){let e=t;e.nodeType===Node.TEXT_NODE&&(e=e.parentNode);const i=e.getAttribute("href");return i&&/^#fn_.*$/.test(i)}function wa(t,e,i){const n=document.createTreeWalker(t);for(n.currentNode=e;n.previousNode();){const t=n.currentNode;t.nodeType===Node.ELEMENT_NODE||_a(t)||(i+=t.textContent.length)}return i}function xa(t,e,i="start"){if(t.nodeType===Node.ELEMENT_NODE){const n=t.closest("[data-tei]");if(0===e)return{parent:n.getAttribute("data-tei"),offset:0};const r=n.childNodes[e];return{parent:n.getAttribute("data-tei"),offset:"end"===i?wa(n,r,0)-1:wa(n,r,0)}}const n=t.parentNode.closest("[data-tei]");if(n)return{parent:n.getAttribute("data-tei"),offset:wa(n,t,e)};console.error("No container with data-tei found for %o",t.parentNode)}function ka(t,e){let i=0,n=t.parentNode;for(;n&&n!==t.getRootNode();)n.classList.contains(e)&&(i+=1),n=n.parentNode;return i}function Aa(t,e){const i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);return i.currentNode=e,i.nextNode()?i.currentNode:e}function Sa(t,e){let i=e;const n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(;n.nextNode();)if(!_a(n.currentNode)&&n.currentNode.textContent.length>0){if(i-n.currentNode.textContent.length<=0)return[n.currentNode,i];i-=n.currentNode.textContent.length}return null}function za(t,e,i,n=3){let r=e-1,o=0;for(;r>=0;){if(/[\p{P}\s]/.test(t.charAt(r))){for(;r>1&&/[\p{P}\s]/.test(t.charAt(r-1));)r-=1;if(o+=1,o===n)break}r-=1}let s=i+1;for(o=0;s<t.length;){if(/[\p{P}\s]/.test(t.charAt(s))){for(;s<t.length-1&&/[\p{P}\s]/.test(t.charAt(s+1));)s+=1;if(o+=1,o===n)break}s+=1}return`... ${t.substring(r,e)}<mark>${t.substring(e,i)}</mark>${t.substring(i,s+1)} ...`}function Ca(t){let e=t.parentElement;e.textContent.length<40&&(e=e.parentNode);const i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let n=0,r=0;const o=[];for(;i.nextNode();)i.currentNode===t&&(r=n),n+=i.currentNode.textContent.length,o.push(i.currentNode.textContent);return[o.join(""),r]}function Ea(t){const e={};return Object.keys(t.properties).forEach(i=>{const n=t.properties[i];n&&n.length>0&&(e[i]=n)}),Object.assign(t,{properties:e})}ba.random=({format:t="hex",saturation:e=[50,55],lightness:i=[50,60],differencePoint:n=130,excludeHue:r}={})=>{e=pa(e,ra),i=pa(i,oa);const o=r?ca(0,359,r):la(0,359),s="number"==typeof e?e:la(...e),a="number"==typeof i?i:la(...i),[l,c,h]=ga(o,s,a);return{color:"hsl"===t?ma(o,s,a):va(l,c,h,t),isLight:fa(l,c,h,n)}};class Ta extends na{static get properties(){return Object.assign({key:{type:String},keyMap:{type:Object,attribute:"key-map"},caseSensitive:{type:Boolean}},super.properties)}constructor(){super(),this.key="ref",this.keyMap={},this.caseSensitive=!1,this._ranges=[],this._rangesMap=new Map,this._history=[],this._disabled=!1}connectedCallback(){super.connectedCallback();let t=!1;this._inHandler=!1,this._pendingCallback=null;const e=(t=10)=>{this._pendingCallback=setTimeout(()=>{this._selectionChanged()},t)};this._eventHandler=i=>{if("selectionchange"===i.type||this._inHandler)return;if("mousedown"===i.type&&(t=!0),"mouseup"===i.type&&(t=!1),t)return;this._cancelPendingCallback();const n="mouseup"===i.type?10:100;e(n)},document.addEventListener("selectionchange",this._eventHandler.bind(this)),this.shadowRoot.addEventListener("mousedown",this._eventHandler.bind(this)),this.shadowRoot.addEventListener("mouseup",this._eventHandler.bind(this)),this.subscribeTo("pb-add-annotation",t=>this.addAnnotation(t.detail)),this.subscribeTo("pb-edit-annotation",this._editAnnotation.bind(this)),this.subscribeTo("pb-refresh",()=>{this._ranges=[],this._rangesMap.clear(),this._currentSelection=null,this._clearMarkers(),this.emitTo("pb-annotations-changed",{ranges:this._ranges,refresh:!0})}),this.addEventListener("pb-disable",()=>{this._disabled=!0}),this.addEventListener("pb-enable",()=>{this._disabled=!1}),this._resizeHandler()}get annotations(){return this._ranges}set annotations(t){this._ranges=t,this.updateAnnotations(!0),this._markIncompleteAnnotations(),this._initAnnotationColors(),this._annotationStyles()}saveHistory(){this._history.push(JSON.stringify(this._ranges)),this.emitTo("pb-annotations-history",this._history)}getHistory(){return this._history}popHistory(){if(0===this._history.length)return void console.warn("<pb-view-annotate> history is empty");this._scrollTop=this.scrollTop;const t=this._history.pop();this._clearMarkers(),this._ranges=JSON.parse(t),this._rangesMap.clear(),this._refresh(),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),this.emitTo("pb-annotations-history",this._history)}clearHistory(t){this._history=t||[]}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!1),hn(this.shadowRoot,"light-border")}render(){return[...super.render(),I`<div id="marker-layer"></div>`]}zoom(t){super.zoom(t),window.requestAnimationFrame(()=>this.refreshMarkers())}getKey(t){return this.keyMap[t]||this.key}_resizeHandler(){let t=null;const e=()=>{t=setTimeout(()=>{t=null,this.refreshMarkers()},200)};window.addEventListener("resize",()=>{t||this._clearMarkers(),t&&clearTimeout(t),e()})}_refresh(t){super._refresh(t),t&&t.detail&&t.detail.preserveScroll&&(this._scrollTop=this.scrollTop)}_handleContent(){super._handleContent(),this.updateComplete.then(()=>setTimeout(()=>{this._initAnnotationColors(),this._annotationStyles(),this.updateAnnotations(),this._markIncompleteAnnotations(),this._scrollTop&&(this.scrollTop=this._scrollTop,this._scrollTop=void 0),this.emitTo("pb-annotations-loaded")},300))}_updateAnnotation(t,e=!1,i=!1){const n=this.shadowRoot.getElementById("view"),r=Array.from(n.querySelectorAll(`[data-tei="${t.context}"]`)).filter(t=>null===t.closest("pb-popover")&&"footnote"!==t.getAttribute("rel"))[0];if(!r)return null;const o=document.createRange(),s=Sa(r,t.start),a=Sa(r,t.end);if(!s||!a)return console.error("<pb-view-annotate> Invalid range for %o",r),null;if(console.log("<pb-view-annotate> Range before adjust: %o %o",s,a),s[1]===s[0].textContent.length){const t=Aa(r,s[0]);t===a[0]?(o.setStart(t,0),s[0]=t,s[1]=0):o.setStartBefore(s[0].nextSibling||t)}else s[0]!==a[0]&&0===s[1]?o.setStartBefore(ya(s[0],r)):o.setStart(s[0],s[1]);s[0]!==a[0]&&a[0].textContent.length-1===a[1]?o.setEndAfter(ya(a[0],r)):o.setEnd(a[0],a[1]),console.log("<pb-view-annotate> Range: %o",o);const l=document.createElement("span"),c=""===t.properties[this.getKey(t.type)]?"incomplete":"";l.className=`annotation annotation-${t.type} ${t.type} ${c} ${t.before?"before":""}`,l.dataset.type=t.type,l.dataset.annotation=JSON.stringify(t.properties);try{o.surroundContents(l)}catch(t){if(e)return null;throw new Error("An error occurred. The annotation may not be displayed. You should consider saving and reloading the document.")}return this._rangesMap.set(l,t),i||this.refreshMarkers(),l}updateAnnotations(t=!1){this._ranges.forEach(e=>{let i;switch(e.type){case"delete":i=this.shadowRoot.querySelector(`[data-tei="${e.node}"]`),i?this._deleteAnnotation(i):console.error("Annotation %s not found",e.context);break;case"modify":if(i=this.shadowRoot.querySelector(`[data-tei="${e.node}"]`),!i){console.error("<pb-view-annotate> Target node not found for %o",e.node);break}i.dataset.annotation=JSON.stringify(e.properties);break;default:this._updateAnnotation(e,t,!0)}}),window.requestAnimationFrame(()=>this.refreshMarkers())}_getSelection(){return this.shadowRoot.getSelection?this.shadowRoot.getSelection():window.getSelection()}_selectionChanged(){if(this._disabled)return;const t=this._getSelection(),e=this._selectedRange(t);if(e){let i=!1;const n=e.commonAncestorContainer;if(n.nodeType===Node.ELEMENT_NODE){if(e.startContainer.parentElement!==n){const t=ya(e.startContainer,n);e.setStartBefore(t),i=!0}if(e.endContainer.parentElement!==n){const t=ya(e.endContainer,n);e.setEndAfter(t),i=!0}}this._markSelection(e),this._currentSelection=e,console.log("<pb-view-annotate> selection: %o",e),i&&setTimeout(()=>{this._inHandler=!0;try{t.removeAllRanges(),t.addRange(e)}finally{this._inHandler=!1}},100),this.emitTo("pb-selection-changed",{hasContent:!0,range:e,selected:t.toString()})}else this._clearSelection(),this.emitTo("pb-selection-changed",{hasContent:!1})}_markSelection(t){const e=this.shadowRoot.getElementById("view").getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");this._clearSelection();const n=t.getClientRects();for(let t=0;t<n.length;t++){const r=n[t],o=document.createElement("div");o.className="selection-marker",o.style.position="absolute",o.style.left=r.left-e.left+"px",o.style.top=r.top-e.top+"px",o.style.width=r.width+"px",o.style.height=r.height+"px",o.style.backgroundColor="var(--pb-annotation-selection, #f9ea7678)",i.appendChild(o)}}_clearSelection(){const t=this.shadowRoot.getElementById("marker-layer");t.querySelectorAll(".selection-marker").forEach(e=>{t.removeChild(e)})}updateAnnotation(t,e=!1){t=Ea(t);const i=this._updateAnnotation(t,e);return i&&(this._ranges.push(t),this.emitTo("pb-annotations-changed",{type:t.type,text:t.text,ranges:this._ranges})),i}addAnnotation(t){const e=t.range||this._currentSelection;if(e.collapsed&&!t.before)return null;const i=xa(e.startContainer,e.startOffset),n=xa(e.endContainer,e.endOffset,"end"),r={context:i.parent,start:i.offset,end:t.before?i.offset:n.offset,text:t.before?"":e.cloneContents().textContent,before:t.before};return t.type&&(r.type=t.type),t.properties&&(r.properties=t.properties),console.log("<pb-view-annotate> range adjusted: %o",r),this._ranges.push(Ea(r)),this.emitTo("pb-annotations-changed",{type:r.type,text:r.text,ranges:this._ranges}),this._checkAnnotationColor(r.type),this._updateAnnotation(r)}deleteAnnotation(t){if(t.dataset.tei){const e=this._ranges.findIndex(e=>"modify"===e.type&&e.node===t.dataset.tei);e>-1&&this._ranges.splice(e,1);const i=t.parentNode.closest("[data-tei]"),n={type:"delete",node:t.dataset.tei,context:i.dataset.tei};this._ranges.push(n)}else{const e=this._rangesMap.get(t);this._rangesMap.delete(t);const i=this._ranges.indexOf(e);console.log("<pb-view-annotate> deleting annotation %o",e),this._ranges.splice(i,1)}this._deleteAnnotation(t)}_deleteAnnotation(t){const e=document.createRange();for(let i=0;i<t.childNodes.length;i++){const n=t.childNodes[i].cloneNode(!0);t.parentNode.insertBefore(n,t),0===i&&e.setStartBefore(n),i===t.childNodes.length-1&&e.setEndAfter(n)}t.parentNode.removeChild(t),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),window.requestAnimationFrame(()=>this.refreshMarkers()),this._inHandler=!0;try{const t=this._getSelection();t.removeAllRanges(),t.addRange(e)}catch(t){console.error("<pb-view-annotate> %s",t.message)}finally{this._inHandler=!1}}editAnnotation(t,e){if(t.dataset.tei){const i=t.closest("[data-tei]");let n=this._ranges.find(e=>"modify"===e.type&&e.node===t.dataset.tei);n||(n={type:"modify",node:t.dataset.tei,context:i.dataset.tei},this._ranges.push(n)),n.properties=e,n=Ea(n),this.emitTo("pb-annotations-changed",{ranges:this._ranges})}else{let i=this._rangesMap.get(t);i?(i.properties=e,i=Ea(i),this.emitTo("pb-annotations-changed",{ranges:this._ranges})):console.error("no range found for edit span %o",t)}const i=JSON.parse(t.dataset.annotation),n=Object.assign(i||{},e);t.dataset.annotation=JSON.stringify(n),""!==n[this.getKey(t.dataset.type)]&&t.classList.remove("incomplete")}_editAnnotation(t){this.editAnnotation(t.detail.target,t.detail.properties)}_selectedRange(t){if(!t||0===t.rangeCount)return null;if(t.anchorNode.getRootNode()!==this.shadowRoot)return null;const e=t.getRangeAt(0);return e.collapsed?null:e}_cancelPendingCallback(){this._pendingCallback&&(clearTimeout(this._pendingCallback),this._pendingCallback=null)}_createTooltip(t){if(t._tippy||!t.dataset.annotation)return;const e=document.createElement("div");e.className="annotation-popup";const i=document.createElement("div");i.className="info",e.appendChild(i);const n=document.createElement("div");n.className="toolbar";const r=document.createElement("span");if(r.className="annotation-type",n.appendChild(r),t.dataset.annotation){const e=document.createElement("paper-icon-button");e.setAttribute("icon","icons:create"),e.setAttribute("title",G("annotations.edit")),e.addEventListener("click",()=>{const e=JSON.parse(t.dataset.annotation),i=t.textContent;this.emitTo("pb-annotation-edit",Object.assign({},{target:t,type:t.dataset.type,properties:e,text:i}))}),n.appendChild(e)}const o=document.createElement("paper-icon-button");o.setAttribute("icon","icons:delete"),o.setAttribute("title",G("annotations.delete")),o.addEventListener("click",()=>{this.saveHistory(),this.deleteAnnotation(t)}),n.appendChild(o),e.appendChild(n);const s=this.shadowRoot.getElementById("view");tn(t,{content:e,allowHTML:!0,interactive:!0,appendTo:s.nodeType===Node.DOCUMENT_NODE?document.body:s,theme:"light-border",hideOnClick:!1,maxWidth:"auto",trigger:"click",placement:"left",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["right","top","bottom"]}}]},onTrigger:(n,o)=>{o.preventDefault(),o.stopPropagation();const s=t.dataset.type,a=JSON.parse(t.dataset.annotation)||{},l=this._annotationColors.get(s);if(r.innerHTML=s,r.style.backgroundColor=`var(--pb-annotation-${s})`,r.style.color=`var(${l&&l.isLight?"--pb-color-primary":"--pb-color-inverse"})`,a[this.getKey(s)])this.emitTo("pb-annotation-detail",{type:s,id:a[this.getKey(s)],container:i,span:t,ready:()=>n.setContent(e)});else{i.innerHTML="";const t=Object.keys(a);if(0===t.length){const t=document.createElement("p");t.innerHTML=G("annotations.no-properties"),i.appendChild(t)}else{const e=document.createElement("table");t.forEach(t=>{const i=document.createElement("tr"),n=document.createElement("td");n.innerHTML=t,i.appendChild(n);const r=document.createElement("td");r.innerHTML=JSON.stringify(a[t],null,2),i.appendChild(r),e.appendChild(i)}),i.appendChild(e)}}},onClickOutside:(t,e)=>{t.hideWithInteractivity(e)}})}_showMarker(t,e,i,n=0){const r=t.getClientRects(),o=t.dataset.type;if(!t.classList.contains("before"))for(let t=0;t<r.length;t++){const s=r[t],a=document.createElement("div");a.className="marker annotation-"+o,a.style.position="absolute",a.style.left=s.left-i.left+"px",a.style.top=s.top-i.top+s.height+"px",a.style.marginTop=n+"px",a.style.width=s.width+"px",a.style.height="3px",a.style.backgroundColor=`var(--pb-annotation-${o})`,a.part="annotation",e.appendChild(a)}this._createTooltip(t)}_clearMarkers(){this.shadowRoot.getElementById("marker-layer").innerHTML=""}refreshMarkers(){const t=this.shadowRoot.getElementById("view"),e=t.getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");i.style.display="none",this._clearMarkers(),t.querySelectorAll(".annotation").forEach(t=>{t._tippy&&t._tippy.destroy(),this._showMarker(t,i,e,5*ka(t,"annotation"))}),i.style.display="block"}search(t,e){function i(t){let e=t.replace(/[/.?+*\\]/g,t=>"\\"+t).replace(/[\s\n\t]+/g,"\\s+");return/^\w/.test(e)&&(e="\\b"+e),/\w$/.test(e)&&(e+="\\b"),e}function n(t){return t.nodeType===Node.TEXT_NODE?NodeFilter.FILTER_ACCEPT:t.classList.contains("annotation-popup")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP}n.acceptNode=n;const r=[];if(!e||0===e.length)return r;const o=e.filter(t=>t&&t.length>0).map(t=>i(t)).join("|");console.log(`<pb-view-annotate> Searching content for ${o}...`);const s=new RegExp(o,this.caseSensitive?"g":"gi"),a=document.createTreeWalker(this.shadowRoot.getElementById("view"),NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,n);for(;a.nextNode();){let e=a.currentNode;const i=Array.from(e.textContent.matchAll(s));for(const n of i){const i=n.index+n[0].length;let o=!1,s=null;const a=e.parentNode.dataset.annotation,l=e.parentNode.dataset.type;if(a&&l){const e=JSON.parse(a)||{};o=l===t,s=e[this.getKey(t)]}const c=xa(e,n.index),h=xa(e,i,"end"),[d,p]=Ca(e),u={annotated:o,context:c.parent,start:c.offset,end:h.offset,textNode:e,kwic:za(d,p+n.index,p+i)};u[this.getKey(t)]=s,r.push(u)}}return r}scrollTo(t){const e=this.shadowRoot.getElementById("view"),i=document.createRange();if(t.annotated)i.selectNode(t.textNode);else{const n=Array.from(e.querySelectorAll(`[data-tei="${t.context}"]`)).filter(t=>null===t.closest("pb-popover")&&"footnote"!==t.getAttribute("rel"))[0],r=Sa(n,t.start),o=Sa(n,t.end);i.setStart(r[0],r[1]),i.setEnd(o[0],o[1])}const n=e.getBoundingClientRect(),r=i.getBoundingClientRect();let o=e.querySelector("[part=highlight]");o||(o=document.createElement("div"),o.part="highlight",o.style.position="absolute",e.appendChild(o)),o.style.left=r.left-n.left-4+"px",o.style.top=r.top-n.top-4+"px",o.style.width=r.width+4+"px",o.style.height=r.height+"px",i.startContainer.parentNode.scrollIntoView(!0)}hideMarker(){const t=this.shadowRoot.getElementById("view").querySelector("[part=highlight]");t&&(t.style.top="-1000px")}_markIncompleteAnnotations(){this.shadowRoot.getElementById("view").querySelectorAll(".annotation.authority").forEach(t=>{if(t.dataset.type){const e=JSON.parse(t.dataset.annotation),i=this.getKey(t.dataset.type);e[i]&&0!==e[i].length?t.classList.remove("incomplete"):t.classList.add("incomplete")}})}_initAnnotationColors(){this._annotationColors=new Map;const t=new Set;this.shadowRoot.getElementById("view").querySelectorAll(".annotation").forEach(e=>{e.dataset.type&&t.add(e.dataset.type)}),t.forEach(t=>{this._annotationColors.set(t,ba("annotation-"+t.repeat(4),{saturation:70,lightness:[30,60]}))}),this.emitTo("pb-annotation-colors",{colors:this._annotationColors})}_checkAnnotationColor(t){this._annotationColors.has(t)||(this._annotationColors.set(t,ba("annotation-"+t.repeat(4),{saturation:70,lightness:[30,60]})),this._annotationStyles(),this.emitTo("pb-annotation-colors",{colors:this._annotationColors}))}_annotationStyles(){const t=this.shadowRoot.getElementById("view");let e=t.querySelector("_annotation-styles");e&&e.parentNode.removeChild(e);const i=[],n=[];this._annotationColors.forEach((t,e)=>{i.push(`--pb-annotation-${e}: ${t.color};`),i.push(`--pb-annotation-${e}-border: 2px solid var(--pb-annotation-${e});`),n.push(`\n        .annotation-${e}::after {\n          background-color: var(--pb-annotation-${e});\n          border-color: var(--pb-annotation-${e});\n          color: var(${t.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n        .annotation-${e}.incomplete::after {\n          background: repeating-linear-gradient(\n            315deg,\n            var(--pb-annotation-${e}),\n            var(--pb-annotation-${e}) 5px,\n            var(${t.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 5px,\n            var(${t.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 10px\n          );\n          color: var(${t.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n      `)});const r=`\n      :host {\n        ${i.join("\n")}\n      }\n\n      ${n.join("\n")}\n    `;e=document.createElement("style"),e.className="_annotation-styles",e.innerHTML=r,t.insertBefore(e,t.firstChild)}static get styles(){return[super.styles,R`
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
        }

        .annotation.before::after {
          margin-left: 0;
          border-radius: 4px;
        }

        [part=highlight] {
          border: 3px solid rgb(255, 174, 0);
          border-radius: 8px;
        }`]}}customElements.define("pb-view-annotate",Ta);class La extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{icon:{type:String},direction:{type:String}})}constructor(){super(),this.icon="icons:zoom-in",this.direction="in"}connectedCallback(){super.connectedCallback()}_handleClick(){this.emitTo("pb-zoom",{direction:this.direction})}render(){return I`
            <paper-icon-button icon="${this.icon}" @click="${this._handleClick}"></paper-icon-button>
        `}}customElements.define("pb-zoom",La);class Ma extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{toggle:{type:String},opened:{type:Boolean,reflect:!0},maxWidth:{type:String,attribute:"max-width"},position:{type:String,reflect:!0}})}constructor(){super(),this.opened=!1,this.position="left"}connectedCallback(){super.connectedCallback();const t=this.toggle?document.getElementById(this.toggle):null;t&&t.addEventListener("click",this._toggle.bind(this)),document.body.addEventListener("click",()=>{this.opened&&(this.opened=!1)}),this.addEventListener("click",t=>t.stopPropagation()),this.subscribeTo("pb-refresh",this._close.bind(this))}firstUpdated(){this.maxWidth?(void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()):this.classList.add("overlay")}_handleResize(){const t=document.getElementById(this.toggle),e=`(max-width: ${this.maxWidth})`;window.matchMedia(e).matches?(console.log("<pb-drawer> entering overlay mode"),this.classList.add("overlay"),t&&(t.style.display="")):(console.log("<pb-drawer> leaving overlay mode"),this.classList.remove("overlay"),t&&(t.style.display="none"))}_toggle(t){t&&(t.preventDefault(),t.stopPropagation()),this.opened?this.opened=!1:(this.opened=!0,this.emitTo("pb-load"))}_close(){this.opened=!1}render(){return I`
            <div part="content"><slot></slot></div>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            :host(.overlay) {
                position: fixed;
                bottom: 0;
                width: var(--pb-drawer-width, 448px);
                height: 100vh;
                z-index: 1000;
                overflow: auto;
                display: block;
                transition: var(--pb-drawer-transition, .5s);
            }
            :host(.overlay[position="left"]) {
                left: calc(0px - var(--pb-drawer-width, 448px));
            }
            :host(.overlay[position="right"]) {
                right: calc(0px - var(--pb-drawer-width, 448px));
            }

            :host([opened][position="left"]) {
                left: 0;
                transition: var(--pb-drawer-transition, .5s);
            }
            :host([opened][position="right"]) {
                right: 0;
                transition: var(--pb-drawer-transition, .5s);
            }

            div {
                padding: 10px;
            }
        `}}customElements.define("pb-drawer",Ma);class Oa extends V{static get properties(){return Object.assign(Object.assign({},super.properties),{},{query:{type:String},match:{type:Boolean,reflect:!0}})}constructor(){super(),this.query="(max-width:460px)",this.match=!1}firstUpdated(){void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()}_handleResize(){let{query:t}=this;/\(.*\)$/.test(t)||(t=`(${t})`),window.matchMedia(t).matches?!1===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!0},composed:!0,bubbles:!0})),this.match=!0):!0===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!1},composed:!0,bubbles:!0})),this.match=!1)}render(){return I`
            ${this.match?I`<slot></slot>`:null}
        `}static get styles(){return R`
            :host {
                display: inherit;
            }
        `}}customElements.define("pb-media-query",Oa);class $a extends Pn{firstUpdated(){this.shadowRoot.getElementById("ironform").addEventListener("iron-form-presubmit",t=>{t.preventDefault(),this._submit()}),this.addEventListener("click",t=>{"searchButtonTop"===t.target.slot&&this.submit(),"searchButtonBottom"===t.target.slot&&this.submit(),"resetButton"===t.target.slot&&this._reset()}),this._submissionHandlers()}render(){return I`
            <iron-form id="ironform">
                <form action="" accept="text/html" method="GET">
                    <slot name="searchButtonTop"></slot>
                    <slot></slot>
                    <slot name="searchButtonBottom"></slot>
                    <slot name="resetButton"></slot>
                </form>
            </iron-form>

            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <paper-dialog id="errorDialog">
                <h2>Error</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                        Close
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return R`
            :host {
                display: block;
            }
        `}submit(){this.shadowRoot.getElementById("ironform").submit()}_submit(){const t=this.serializeForm();this.emitTo("pb-search-resubmit",{params:t}),this.emitTo("pb-submit",{params:t})}_reset(){this.shadowRoot.getElementById("ironform").reset()}serializeForm(){const t=this.shadowRoot.getElementById("ironform")._getSubmittableElements(),e={};for(const i of t)e[i.name]=null;return Object.assign(e,this.shadowRoot.getElementById("ironform").serializeForm())}_parseHeaders(t){}_onLoad(t){super._onLoad(t),this.dispatchEvent(new CustomEvent("pb-custom-form-loaded",{detail:t}))}_submissionHandlers(){this.autoSubmit&&this.querySelectorAll(this.autoSubmit).forEach(t=>{const e=t.nodeName.toLowerCase();let i="change";t instanceof HTMLButtonElement||"paper-icon-button"===e||"paper-button"===e||"input"===e&&("button"===t.type||"submit"===t.type||"reset"===t.type)?i="click":"paper-input"===e||t instanceof HTMLInputElement&&"text"===t.type?i="keyup":"paper-dropdown-menu"===e&&(i="value-changed"),t.addEventListener(i,this._submit.bind(this))})}static get properties(){return Object.assign({autoSubmit:{type:String,attribute:"auto-submit"}},super.properties)}}customElements.define("pb-custom-form",$a),
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
function(t){var e;if("function"==typeof define&&define.amd&&(define(t),e=!0),"object"==typeof exports&&(module.exports=t(),e=!0),!e){var i=window.Cookies,n=window.Cookies=t();n.noConflict=function(){return window.Cookies=i,n}}}((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var i=arguments[t];for(var n in i)e[n]=i[n]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function i(n){function r(){}function o(e,i,o){if("undefined"!=typeof document){"number"==typeof(o=t({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var s=JSON.stringify(i);/^[\{\[]/.test(s)&&(i=s)}catch(t){}i=n.write?n.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var l in o)o[l]&&(a+="; "+l,!0!==o[l]&&(a+="="+o[l].split(";")[0]));return document.cookie=e+"="+i+a}}function s(t,i){if("undefined"!=typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var a=o[s].split("="),l=a.slice(1).join("=");i||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=e(a[0]);if(l=(n.read||n)(l,c)||e(l),i)try{l=JSON.parse(l)}catch(t){}if(r[c]=l,t===c)break}catch(t){}}return t?r[t]:r}}return r.set=o,r.get=function(t){return s(t,!1)},r.getJSON=function(t){return s(t,!0)},r.remove=function(e,i){o(e,"",t(i,{expires:-1}))},r.defaults={},r.withConverter=i,r}return i((function(){}))}));class Ha extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{src:{type:String},url:{type:String},type:{type:String},odd:{type:String},dialog:{type:String},title:{type:String},source:{type:Boolean},params:{type:String},_target:{type:String,reflect:!0},_href:{type:String,reflect:!0},_token:{type:String}})}constructor(){super(),this.source=!1,this._target="_self",this.type=""}firstUpdated(){this.src&&this.subscribeTo("pb-document",t=>{t.detail.id===this.src&&(this.odd=t.detail.odd)}),this.subscribeTo("pb-refresh",t=>{t.detail.odd&&(this.odd=t.detail.odd,this._href=this._computeURL())}),B("pb-page-ready",()=>{this._target=this._computeTarget(),this._href=this._computeURL()})}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),e)switch(t){case"source":this._target=this._computeTarget();break;case"src":case"type":case"file":case"odd":case"params":case"url":this._href=this._computeURL()}}render(){return I`
            <a id="button" @click="${this._handleClick}" title="${this.title}" target="${this._target}" href="${this._href}"><slot></slot></a>
        `}static get styles(){return R`
            :host {
                display: inline-block;
            }

            a {
                text-decoration: var(--pb-download-text-decoration, none);
                color: var(--pb-download-color);
            }
        `}_computeTarget(){return this.source?"_blank":"_self"}_computeURL(){let t;this._token=797*(new Date).getTime();const e=this.getDocument();if(e)if(this.url)t=`${this.toAbsoluteURL(this.url)}?odd=${this.odd?this.odd:e.odd}.odd`;else{const i=this.getEndpoint()+"/";t=this.lessThanApiVersion("1.0.0")?`${e.getFileName()}${this.type?"."+this.type:""}?odd=${this.odd?this.odd:e.odd}.odd&cache=no&token=${this._token}`:`${i}api/document/${encodeURIComponent(e.path)}/${this.type||"html"}?odd=${this.odd?this.odd:e.odd}.odd&token=${this._token}`}else t=/^(?:[a-z]+:)?\/\//i.test(this.url)?this.url:`${this.getEndpoint()}/${this.url}`,t=this.lessThanApiVersion("1.0.0")?`${t}${this.type?"."+this.type:""}?odd=${this.odd}&cache=no&token='${this._token}`:`${t}/${this.type}?odd=${this.odd}&token='${this._token}`;return this.params&&(t+="&"+this.params),this.source&&(t+="&source=true"),t}_handleClick(t){if(this.dialog){const t=document.getElementById(this.dialog);t.open();const e=this._token,i=window.setInterval(()=>{Cookies.get("simple.token")===e&&(window.clearInterval(i),Cookies.remove("simple.token"),t.close())})}"_self"===this._target&&(t.preventDefault(),window.location=this._href)}}customElements.define("pb-download",Ha);class Ia extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{loggedIn:{type:Boolean,attribute:"logged-in",reflect:!0},user:{type:String},password:{type:String},group:{type:String},groups:{type:Array},auto:{type:Boolean},loginLabel:{type:String,reflect:!0,attribute:"login-label"},logoutLabel:{type:String,reflect:!0,attribute:"logout-label"},loginIcon:{type:String,attribute:"login-icon"},logoutIcon:{type:String,attribute:"logout-icon"},_invalid:{type:Boolean},_hasFocus:{type:Boolean}})}constructor(){super(),this.loggedIn=!1,this.loginLabel="login.login",this.logoutLabel="login.as",this.user="",this.groups=[],this.loginIcon="account-circle",this.logoutIcon="supervisor-account",this._hasFocus=!0}firstUpdated(){super.firstUpdated(),this._checkLogin=this.shadowRoot.getElementById("checkLogin"),this._loginDialog=this.shadowRoot.getElementById("loginDialog"),window.addEventListener("blur",()=>{this._hasFocus=!1}),window.addEventListener("focus",()=>{this._hasFocus||(this._hasFocus=!0,this._checkLogin.body=null,this._checkLogin.generateRequest())}),B("pb-page-ready",t=>{U(t.apiVersion,"1.0.0")?this._checkLogin.url=t.endpoint+"/api/login/":this._checkLogin.url=t.endpoint+"/login",this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}),this.addEventListener("keyup",t=>{13===t.keyCode&&(t.preventDefault(),this._confirmLogin())})}render(){return I`
            <a href="#" @click="${this._show}" role="button" title="${this.user?this.user:this.loginLabel}">
                ${this.loggedIn?I`<iron-icon icon="${this.logoutIcon}"></iron-icon> <span class="label">${W(this.logoutLabel,{user:this.user})}</span>`:I`<iron-icon icon="${this.loginIcon}"></iron-icon> <span class="label">${W(this.loginLabel)}</span>`}
            </a>

            <paper-dialog id="loginDialog">
                <h2>${W("login.login")}</h2>
                <paper-dialog-scrollable>
                    <form action="login">
                        <paper-input id="user" name="user" label="${W("login.user")}" value="${this.user}" autofocus></paper-input>
                        <paper-input id="password" name="password" label="${W("login.password")}" type="password"></paper-input>
                        <input id="logout" type="hidden" name="logout"></input>
                    </form>
                    <slot name="information"></slot>
                    ${this._invalid?I`
                            <p id="message" part="message-invalid">${W("login.invalid")}<span part="group-invalid">${this.group?I` (${W("login.requiredGroup",{group:this.group})})`:null}</span>.
                            </p>
                        `:null}
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button autofocus @click="${this._confirmLogin}">${W(this.loginLabel)}</paper-button>
                </div>
            </paper-dialog>

            <iron-ajax id="checkLogin" with-credentials
                handle-as="json" @response="${this._handleResponse}" @error="${this._handleError}"
                method="post"
                content-type="application/x-www-form-urlencoded"></iron-ajax>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            paper-dialog {
                min-width: 320px;
                max-width: 640px;
                min-height: 128px;
            }

            paper-dialog h2 {
                background-color: #607D8B;
                padding: 16px 8px;
                margin-top: 0;
                color: #F0F0F0;
            }

            a {
                color: var(--pb-login-link-color, --pb-link-color);
                text-decoration: none;
                display: flex;
                gap:0.5rem;
            }

            #message {
                color: var(--paper-red-800);
            }
        `}_show(t){t.preventDefault(),this.loggedIn?(this._checkLogin.body={logout:this.user},this._checkLogin.generateRequest()):this._loginDialog.open()}_confirmLogin(){this.user=this.shadowRoot.getElementById("user").value,this.password=this.shadowRoot.getElementById("password").value,this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}_handleResponse(){const t=this._checkLogin.lastResponse;t.user&&this._checkGroup(t)?(t.userChanged=!this.loggedIn||this.user!==t.user,this.loggedIn=!0,this.user=t.user,this.groups=t.groups,this._invalid=!1,this._loginDialog.close()):(t.userChanged=this.loggedIn,this.loggedIn=!1,this.password=null,this._loginDialog.opened?this._invalid=!0:this.auto&&this._loginDialog.open()),this.emitTo("pb-login",t),this.loggedIn?En.currentUser={user:this.user,groups:this.groups}:En.currentUser=null}_handleError(){this.loggedIn=!1,this.password=null;const t={userChanged:this.loggedIn,user:null};this._loginDialog.opened?this._invalid=!0:this.auto&&this._loginDialog.open(),En.currentUser=null,this.emitTo("pb-login",t)}_isItemInArray(t,e){return t.some(t=>e===t)}_checkGroup(t){if(this.group){let e=this.group.split(/[\s+,]+/),i=!1;return t.groups&&e.forEach(async e=>{i=this._isItemInArray(t.groups,e)||i}),i}return!0}}customElements.define("pb-login",Ia);class Ra extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},title:{type:String},method:{type:String},event:{type:String},confirm:{type:String},quiet:{type:Boolean},_message:{type:String}})}constructor(){super(),this.method="get",this.confirm=null,this.quiet=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onUpdate.bind(this))}render(){return I`
            <a id="button" @click="${this._handleClick}" title="${this.title}"><slot></slot></a>
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="${this.method}"
                with-credentials
                @error="${this._handleError}"
                @response="${this._handleResponse}"></iron-ajax>
            <pb-message id="confirmDialog"></pb-message>
            <slot name="title" style="display: none"></slot>
            <progress id="progress" max="100"></progress>
        `}firstUpdated(){super.firstUpdated();const t=this.shadowRoot.querySelector("slot[name=title]");this._dialogTitle="",t.assignedNodes().forEach(t=>{this._dialogTitle+=t.innerHTML}),this.button=this.querySelector("paper-button"),this.progress=this.shadowRoot.querySelector("progress")}static get styles(){return R`
            :host {
                display: block;
            }
            slot[name="title"] {
                margin: 0;
            }
            progress{
                width: 100%;
                display: none;
            }
            progress.running{
                display: block;
            }
        `}_handleClick(t){if(t.preventDefault(),this.confirm){this.shadowRoot.getElementById("confirmDialog").confirm(this._dialogTitle,G(this.confirm)).then(()=>this.trigger()).catch(()=>console.log("<pb-ajax> Action cancelled"))}else this.trigger()}async trigger(){this._disable();this.shadowRoot.getElementById("loadContent").url=`${this.getEndpoint()}/${this.url}`,this.emitTo("pb-start-update"),await this.shadowRoot.getElementById("loadContent").generateRequest()}_enable(){this.button&&(this.button.removeAttribute("disabled"),this.button.removeAttribute("readonly"),this.progress.classList.remove("running"))}_disable(){this.button&&(this.button.setAttribute("disabled","disabled"),this.button.setAttribute("readonly","readonly"),this.progress.classList.add("running"))}_handleResponse(){this._enable();const t=this.shadowRoot.getElementById("loadContent").lastResponse;if(this._message=t,!this.quiet){this.shadowRoot.getElementById("confirmDialog").show(this._dialogTitle,this._message)}this.emitTo("pb-end-update"),this.event&&this.emitTo(this.event)}_handleError(){this._enable();const t=this.shadowRoot.getElementById("loadContent").lastError.response,e=(new DOMParser).parseFromString(t,"application/xml").querySelector("message");this._message=e?e.textContent:t;this.shadowRoot.getElementById("confirmDialog").show(G("dialogs.error"),this._message),this.emitTo("pb-end-update")}_onUpdate(t){this.shadowRoot.getElementById("loadContent").params=t.detail.params}}customElements.define("pb-ajax",Ra);class Pa extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},selected:{type:String},nolabel:{type:Boolean}})}constructor(){super(),this.label="language"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",t=>{this.selected=t.detail.language.replace(/^([^-]+).*$/,"$1")},[]),B("pb-i18n-update",t=>{this.selected=t.language.replace(/^([^-]+).*$/,"$1")})}render(){return I`
            ${this.nolabel?I`
                    <paper-dropdown-menu>
                        <paper-listbox id="menu" slot="dropdown-content" class="dropdown-content" selected="${this.selected}"
                            attr-for-selected="value" @selected-item-changed="${this._changed}">
                            <slot></slot>
                        </paper-listbox>
                    </paper-dropdown-menu>`:I`
                    <paper-dropdown-menu label="${W(this.label)}">
                        <paper-listbox id="menu" slot="dropdown-content" class="dropdown-content" selected="${this.selected}"
                            attr-for-selected="value" @selected-item-changed="${this._changed}">
                            <slot></slot>
                        </paper-listbox>
                    </paper-dropdown-menu>`}
        `}static get styles(){return R`
            :host {
                display: block;
                --paper-input-container-input-color: var(--pb-lang-input-color, black);
                --paper-input-container-color: var(--pb-lang-label-color, --paper-grey-100);
            }
        `}_changed(){const t=this.shadowRoot.getElementById("menu").selected;t!==this.selected&&(console.log("<pb-lang> Language changed to %s",t),this.emitTo("pb-i18n-language",{language:t}),this.selected=t)}}customElements.define("pb-lang",Pa);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Va=n`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Va.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;

        @apply --paper-tab-content-focused;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,is:"paper-tab",behaviors:[r,o,s],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var e=t(this).parentNode;return!!e&&!!e.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var e=this.queryEffectiveChildren("a");if(!e)return;if(t.target===e)return;e.click()}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,is:"paper-tabs",behaviors:[y,[b,{hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}}]],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(e){t(this).querySelectorAll("paper-tab").forEach(e?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,e,i){return!e||i?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,e){return t?"scrollable"+(e?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,e){return t?"hidden":e?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",(function(){this._scroll(),this._tabChanged(this.selectedItem)}),10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",(function(){this._tabChanged(null,this._previousTab),this._previousTab=null}),1)},_activateHandler:function(){this._cancelPendingActivation(),_._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,e){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,e)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,e){if(this.scrollable){var i=e&&-e.ddx||0;this._affectScroll(i)}},_down:function(t){this.async((function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)}),1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var e=this.$.tabsContainer.scrollLeft;this._leftHidden=0===e,this._rightHidden=e===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,e){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var i=this.$.tabsContent.getBoundingClientRect(),n=i.width,r=t.getBoundingClientRect(),o=r.left-i.left;if(this._pos={width:this._calcPercent(r.width,n),left:this._calcPercent(o,n)},this.noSlide||null==e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var s=e.getBoundingClientRect(),a=this.items.indexOf(e),l=this.items.indexOf(t),c=5;this.$.selectionBar.classList.add("expand");var h=a<l;this._isRTL&&(h=!h),h?this._positionBar(this._calcPercent(r.left+r.width-s.left,n)-c,this._left):this._positionBar(this._calcPercent(s.left+s.width-r.left,n)-c,this._calcPercent(o,n)+c),this.scrollable&&this._scrollToSelectedIfNeeded(r.width,o)},_scrollToSelectedIfNeeded:function(t,e){var i=e-this.$.tabsContainer.scrollLeft;(i<0||(i+=t-this.$.tabsContainer.offsetWidth)>0)&&(this.$.tabsContainer.scrollLeft+=i)},_calcPercent:function(t,e){return 100*t/e},_positionBar:function(t,e){t=t||0,e=e||0,this._width=t,this._left=e,this.transform("translateX("+e+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var e=this.$.selectionBar.classList;e.contains("expand")?(e.remove("expand"),e.add("contract"),this._positionBar(this._pos.width,this._pos.left)):e.contains("contract")&&e.remove("contract")}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[y,w],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(t,e){this.async(this.notifyResize)}});class Da extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{selected:{type:Number,reflect:!0}})}constructor(){super(),this.selected=0,this._initialized=!1}connectedCallback(){super.connectedCallback(),B("pb-page-ready",()=>{this.selected=En.state.tab||0,En.subscribe(this,t=>{this.selected=t.tab})})}firstUpdated(){super.firstUpdated(),this.emitTo("pb-tab",{selected:this.selected})}_switchTab(t){const e=parseInt(t.detail.value,10);this.selected!==e&&(this.emitTo("pb-tab",{selected:e}),this.selected=e,this._initialized?En.commit(this,{tab:this.selected}):En.replace(this,{tab:this.selected}),this._initialized=!0)}render(){return I`
            <paper-tabs id="tabs" selected="${this.selected||0}" @selected-changed="${this._switchTab}">
                <slot name="tab"></slot>
            </paper-tabs>
            <iron-pages part="pages" selected="${this.selected}">
                <slot name="page"></slot>
            </iron-pages>
        `}static get styles(){return R`
            :host {
                display: block;
            }
        `}}customElements.define("pb-tabs",Da),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){a(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(t){var e=27;t.keyCode===e&&(t.preventDefault(),this.close())},_track:function(t){if(!this.persistent&&!this.disableSwipe)switch(t.preventDefault(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackMove(t);break;case"end":this._trackEnd(t)}},_trackStart:function(t){this._drawerState=this._DRAWER_STATE.TRACKING;var e=this.$.contentContainer.getBoundingClientRect();this._savedWidth=e.width,"left"===this.position?this._translateOffset=e.left:this._translateOffset=e.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(t){this._translateDrawer(t.detail.dx+this._translateOffset),this._trackDetails.push({dx:t.detail.dx,timeStamp:Date.now()})},_trackEnd:function(t){var e=t.detail.dx+this._translateOffset,i=this.getWidth(),n="left"===this.position?e>=0||e<=-i:e<=0||e>=i;if(!n){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(t,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var o=i/2;t.detail.dx<-o?this.opened="right"===this.position:t.detail.dx>o&&(this.opened="left"===this.position),n?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(t,e){for(var i,n=Date.now(),r=n-100,o=0,s=e.length-1;o<=s;){var a=o+s>>1,l=e[a];l.timeStamp>=r?(i=l,s=a-1):o=a+1}return i?(t.detail.dx-i.dx)/(n-i.timeStamp||1):0},_flingDrawer:function(t,e){var i=this._calculateVelocity(t,e);if(!(Math.abs(i)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var n,r=t.detail.dx+this._translateOffset,o=this.getWidth(),s="left"===this.position,a=i>0;n=!a&&s?-(r+o):a&&!s?o-r:-r,a?(i=Math.max(i,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(i=Math.min(i,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*n/i;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(t){this.style.transitionDuration=t+"ms",this.$.contentContainer.style.transitionDuration=t+"ms",this.$.scrim.style.transitionDuration=t+"ms"},_styleTransitionTimingFunction:function(t){this.$.contentContainer.style.transitionTimingFunction=t,this.$.scrim.style.transitionTimingFunction=t},_translateDrawer:function(t){var e=this.getWidth();"left"===this.position?(t=Math.max(-e,Math.min(t,0)),this.$.scrim.style.opacity=1+t/e):(t=Math.max(0,Math.min(t,e)),this.$.scrim.style.opacity=1-t/e),this.translate3d(t+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var t=this._drawerState;t===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,t!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),t!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var e=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),i=t(this).querySelectorAll(e);i.length>0?(this._firstTabStop=i[0],this._lastTabStop=i[i.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var n=this.getAttribute("tabindex");n&&parseInt(n,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(e){if(!this.noFocusTrap){var i=9;this._drawerState===this._DRAWER_STATE.OPENED&&e.keyCode===i&&(e.shiftKey?this._firstTabStop&&t(e).localTarget===this._firstTabStop&&(e.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&t(e).localTarget===this._lastTabStop&&(e.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(t,e){this.toggleClass("visible",t&&!e,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var t=this.query;t&&(this.full||"("===t[0]||(t="("+t+")"),this._mq=window.matchMedia(t),this._add(),this.queryHandler(this._mq))},queryHandler:function(t){this._setQueryMatches(t.matches)}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Na=[y,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){t(e).path[0]!==this&&(this.resetLayout(),e.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var t=this._updateLayoutStates.bind(this);this._layoutDebouncer=l.debounce(this._layoutDebouncer,c,t),h(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var t=this;requestAnimationFrame((function(){t.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this)}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/e({_template:n`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[Na],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return t(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var t=this.drawer;t&&t.setAttribute("no-transition","")},_clickHandler:function(e){var i=t(e).localTarget;if(i&&i.hasAttribute("drawer-toggle")){var n=this.drawer;n&&!n.persistent&&n.toggle()}},_updateLayoutStates:function(){var t=this.drawer;this.isAttached&&t&&(this._drawerPosition=this.narrow?null:t.position,this._drawerNeedsReset&&(this.narrow?(t.opened=this.openedWhenNarrow,t.persistent=!1):t.opened=t.persistent=!0,t.hasAttribute("no-transition")&&a(this,(function(){t.removeAttribute("no-transition")})),this._drawerNeedsReset=!1))},_narrowChanged:function(){this._drawerNeedsReset=!0,this.resetLayout()},_onQueryMatchesChanged:function(t){this._setNarrow(t.detail.value)},_computeMediaQuery:function(t,e){return t?"(min-width: 0px)":"(max-width: "+e+")"}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Fa=document.createElement("template");Fa.setAttribute("style","display: none;"),Fa.innerHTML='<dom-module id="app-grid-style">\n  <template>\n    <style>\n      :host {\n        /**\n         * The width for the expandible item is:\n         * ((100% - subPixelAdjustment) / columns * itemColumns - gutter\n         *\n         * - subPixelAdjustment: 0.1px (Required for IE 11)\n         * - gutter: var(--app-grid-gutter)\n         * - columns: var(--app-grid-columns)\n         * - itemColumn: var(--app-grid-expandible-item-columns)\n         */\n        --app-grid-expandible-item: {\n          -webkit-flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n          flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n          max-width: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n        };\n      }\n\n      .app-grid {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n\n        padding-top: var(--app-grid-gutter, 0px);\n        padding-left: var(--app-grid-gutter, 0px);\n        box-sizing: border-box;\n      }\n\n      .app-grid > * {\n        /* Required for IE 10 */\n        -ms-flex: 1 1 100%;\n        -webkit-flex: 1;\n        flex: 1;\n\n        /* The width for an item is: (100% - subPixelAdjustment - gutter * columns) / columns */\n        -webkit-flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n        flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n\n        max-width: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n        margin-bottom: var(--app-grid-gutter, 0px);\n        margin-right: var(--app-grid-gutter, 0px);\n        height: var(--app-grid-item-height);\n        box-sizing: border-box;\n      }\n\n      .app-grid[has-aspect-ratio] > * {\n        position: relative;\n      }\n\n      .app-grid[has-aspect-ratio] > *::before {\n        display: block;\n        content: "";\n        padding-top: var(--app-grid-item-height, 100%);\n      }\n\n      .app-grid[has-aspect-ratio] > * > * {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Fa.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[J,Na],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e,i=t(this.$.slot).getDistributedNodes(),n=0;e=i[n];n++)if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("sticky")){this._stickyElRef=e;break}this._stickyElRef||(this._stickyElRef=e)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(t,e){if(0!==this._height){var i=0,n=0,r=this._top,o=(this._lastScrollTop,this._maxHeaderTop),s=t-this._lastScrollTop,a=Math.abs(s),l=t>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?r+s:t,0,o)),t>=this._dHeight&&(n=this.condenses&&!this.fixed?Math.max(this._dHeight,n):n,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&a<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=c),t>=o))if(Math.abs(this._initScrollTop-t)>30||a>10){l&&t>=o?n=o:!l&&t>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var h=s/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-r)/h,0,300)+"ms"}else n=this._top;i=0===this._dHeight?t>0?1:0:n/this._dHeight,e||(this._lastScrollTop=t,this._top=n,this._wasScrollingDown=l,this._lastTimestamp=c),(e||i!==this._progress||r!==n||0===t)&&(this._progress=i,this._runEffects(i,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),t(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){switch(e){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return t(this).querySelector("[main-title]");case"condensedTitle":return t(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[Na],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return t(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),i=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(i.marginTop=e+"px",i.paddingTop=""):(i.paddingTop=e+"px",i.marginTop="")}}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        position: relative;
        display: block;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
        height: 100%;
      }

      #backgroundFrontLayer {
        min-height: 100%;
        pointer-events: none;
        background-size: cover;
        @apply --app-box-background-front-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled]) #backgroundFrontLayer {
        transition: none !important;
      }
    </style>

    <div id="background">
      <div id="backgroundFrontLayer">
        <slot name="background"></slot>
      </div>
    </div>
    <div id="contentContainer">
      <slot></slot>
    </div>
`,is:"app-box",behaviors:[J,y],listeners:{"iron-resize":"_resizeHandler"},_progress:0,attached:function(){this.resetLayout()},_debounceRaf:function(t){var e=this;this._raf&&window.cancelAnimationFrame(this._raf),this._raf=window.requestAnimationFrame((function(){e._raf=null,t.call(e)}))},resetLayout:function(){this._debounceRaf((function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=this.disabled;this.disabled=!0,this._elementTop=this._getElementTop(),this._elementHeight=this.offsetHeight,this._cachedScrollTargetHeight=this._scrollTargetHeight,this._setUpEffect(),this._updateScrollState(t),this.disabled=e}}))},_getElementTop:function(){for(var t=this,e=0;t&&t!==this.scrollTarget;)e+=t.offsetTop,t=t.offsetParent;return e},_updateScrollState:function(t){if(this.isOnScreen()){var e=this._elementTop-t;this._progress=1-(e+this._elementHeight)/this._cachedScrollTargetHeight,this._runEffects(this._progress,t)}},isOnScreen:function(){return this._elementTop<this._scrollTop+this._cachedScrollTargetHeight&&this._elementTop+this._elementHeight>this._scrollTop},_resizeHandler:function(){this.resetLayout()},_getDOMRef:function(t){return"background"===t?this.$.background:"backgroundFrontLayer"===t?this.$.backgroundFrontLayer:void 0},getScrollState:function(){return{progress:this._progress}}});class Ba extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{active:{type:Number,reflect:!0},label:{type:String},panels:{type:Array,reflect:!0},draggable:{type:Boolean}})}constructor(){super(),this.active=0,this.label="View",this.panels=null,this.position=-1,this.draggable=!1}connectedCallback(){if(super.connectedCallback(),!this.panels){const t=[];this.querySelectorAll("template").forEach(e=>t.push(e.title)),this.panels=t}this._show()}firstUpdated(){const t=this.shadowRoot.getElementById("drag-handle");let e=null;this.draggable&&t.addEventListener("dragstart",t=>{t.dataTransfer.setDragImage(this,10,10),t.dataTransfer.setData("text",this.position),e=this}),this.addEventListener("dragover",t=>{t.preventDefault()}),document.addEventListener("dragenter",t=>{t.stopPropagation(),t.preventDefault(),e!==this&&(this.contains(t.target)?this.classList.add("dragover"):this.classList.remove("dragover"))}),this.addEventListener("drop",t=>{t.stopPropagation(),t.preventDefault(),e=null,this.dispatchEvent(new CustomEvent("pb-drop",{detail:{panel:t.dataTransfer.getData("text"),target:this},bubbles:!0,composed:!0}))})}render(){return I`
            <app-toolbar id="toolbar">
                <paper-dropdown-menu id="menu" label="${this.label}">
                    <paper-listbox id="panels" slot="dropdown-content" class="dropdown-content" 
                    selected="${this.active}" @selected-item-changed="${this._update}">
                    ${this.panels.map(t=>I`<paper-item>${t}</paper-item>`)}
                </paper-listbox>
                </paper-dropdown-menu>
                ${this.draggable?I`<paper-icon-button id="drag-handle" icon="icons:open-with" draggable="true"></paper-icon-button>`:""}
                <slot name="toolbar"></slot>
            </app-toolbar>
            <slot></slot>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            app-toolbar {
                padding: 0;
                justify-content: space-between;
            }

            ::slotted(._pb_panel) {
                overflow: auto;
                max-height: calc(var(--pb-panel-max-height) - 72px);
            }

            app-toolbar {
                font-size: 75%;
            }

            :host(.dragover) {
                background-color: var(--pb-grid-highlight-color, var(--pb-highlight-color));
                animation: highlight 1s;
            }

            @keyframes highlight {
                from {
                    background-color: transparent;
                }
                to {
                    background-color: var(--pb-grid-highlight-color, var(--pb-highlight-color));
                }
            }
        `}_update(){const t=this.shadowRoot.getElementById("panels").selected;this.active!==t&&(this.active=t,this._show())}_show(){const t=this.querySelectorAll("template");this.active>=t.length&&(this.active=t.length-1),console.log("<pb-panel> showing panel %s",this.active),this.querySelectorAll("._pb_panel").forEach(t=>t.style.display="none");const e=this.querySelector("._pb_panel"+this.active);if(e)e.style.display="";else{const e=t[this.active],i=document.importNode(e.content,!0),n=document.createElement("div");n.className="_pb_panel _pb_panel"+this.active,n.appendChild(i),this.appendChild(n),this.emitTo("pb-panel",{panel:this,active:this.active})}}refresh(){this.emitTo("pb-refresh",null)}}customElements.define("pb-panel",Ba);class ja extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{panels:{type:Array},direction:{type:String},_columns:{type:Number},animated:{type:String},animation:{type:Boolean}})}constructor(){super(),this.panels=[],this.direction="ltr",this.animated="pb-view",this.animation=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-panel",t=>{const e=this._getPanelIndex(t.detail.panel);e<0||(console.log("<pb-grid> Updating panel %d to show %s",e,t.detail.active),this.panels["rtl"===this.direction?this.panels.length-e-1:e]=t.detail.active,En.commit(this,this._getState()))}),this.subscribeTo("pb-zoom",t=>{this.zoom(t.detail.direction)});const t=En.get("panels");t&&(this.panels=t.split(".").map(t=>parseInt(t))),En.subscribe(this,t=>{const e=t.panels?t.panels.split("."):[];this.panels=e,this.innerHTML="",this.panels.forEach(t=>this._insertPanel(t)),this._update()}),this._columns=this.panels.length,this.template=this.querySelector("template")}firstUpdated(){this.panels.forEach(t=>this._insertPanel(t)),En.commit(this,this._getState()),this._animate(),this._update(),this.addEventListener("pb-drop",t=>{const e=parseInt(t.detail.panel),i=this._getPanelIndex(t.detail.target);console.log("<pb-grid> Insert panel %d at %d in %s",e,i,this.panels),this.querySelectorAll("._grid_panel").forEach(t=>{t.classList.remove("dragover")}),this.panels.splice(i,0,this.panels.splice(e,1)[0]),this.innerHTML="",this.panels.forEach(t=>this._insertPanel(t)),En.commit(this,this._getState()),this._update()})}_animate(){if(this.animation&&"anime"in window){const t=document.querySelectorAll(this.animated),e=anime.timeline({easing:"linear",duration:400});e.add({targets:t,opacity:{value:[0,.6],duration:200,delay:100,easing:"linear"},translateX:[2e3,0],duration:400,delay:anime.stagger(100,{start:100})}),e.add({targets:t,opacity:[.6,1],duration:200,delay:anime.stagger(50)}),e.play()}}addPanel(t){let e=t;if(t||this.panels.length||(e=0),!t&&this.panels.length){e=this.panels.reduce((t,e)=>Math.max(t,e),0)+1}this._columns+=1,this.panels.push(e),this._insertPanel(e),En.commit(this,this._getState()),this._update(),this.emitTo("pb-refresh")}removePanel(t){let e,i;"number"==typeof t?(e=this.panels.indexOf(t),i=this.querySelector(`[active="${t}"]`)):(i=t,e=this._getPanelIndex(t)),console.log("<pb-grid> Removing panel %d",e),this.panels.splice("rtl"===this.direction?this.panels.length-e-1:e,1),i.parentNode.removeChild(i),this._columns-=1,En.commit(this,this._getState()),this._assignPanelIds(),this._update()}_insertPanel(t){const e=document.importNode(this.template.content.firstElementChild,!0);e.setAttribute("active",t),"ltr"===this.direction||0===this.querySelectorAll("._grid_panel").length?this.appendChild(e):this.insertBefore(e,this.firstElementChild),e.classList.add("_grid_panel"),this._assignPanelIds()}_update(){const t=Array.from(this.children).filter(t=>!(t instanceof HTMLTemplateElement)).map(t=>{const e=window.getComputedStyle(t).getPropertyValue("max-width");return e&&"none"!==e?e:"1fr"});this.style.setProperty("--pb-computed-column-widths",t.join(" "))}_getPanelIndex(t){return Array.from(this.querySelectorAll("._grid_panel")).indexOf(t)}_assignPanelIds(){this.querySelectorAll("._grid_panel").forEach((t,e)=>{t.position=e})}_getState(){return{panels:this.panels.join(".")}}render(){return I`<slot></slot>`}static get styles(){return R`
            :host {
                display: grid;
                grid-template-columns: var(--pb-grid-column-widths, var(--pb-computed-column-widths));
                grid-column-gap: var(--pb-grid-column-gap, 20px);
                justify-content: space-between;
            }
        `}zoom(t){const e=window.getComputedStyle(this).getPropertyValue("font-size"),i=parseInt(e.replace(/^(\d+)px/,"$1"));this.style.fontSize="in"===t?i+1+"px":i-1+"px"}}customElements.get("pb-grid")||customElements.define("pb-grid",ja);class qa extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},grid:{type:String},initial:{type:Number}})}constructor(){super(),this.action="add",this.initial=0}connectedCallback(){super.connectedCallback()}render(){return I`
            <a @click="${this._click}"><slot></slot></a>
        `}static get styles(){return R`
            :host {
                display: block;
            }
        `}_click(){const t=document.querySelector(this.grid);if(!t||!t.addPanel)return console.error("<pb-grid-action> grid not found: %s",this.grid);"add"===this.action?t.addPanel(this.initial):t.removePanel(this.parentNode)}}function Ua(t,e){return t.some(t=>e===t)}function Wa(t,e,i){if(null==t)return!1;if(i){if(!e)return!1;const t=i.split(/[\s+,]+/);let n=!1;return t.forEach(async t=>{n=Ua(e,t)||n}),n}return!0}customElements.define("pb-grid-action",qa);class Ya extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{login:{type:String},show:{type:Boolean,reflect:!0},group:{type:String}})}constructor(){super(),this.show=!1}firstUpdated(){this.shadowRoot.querySelector("slot[name=fallback]").assignedNodes().length>0&&(console.log(this),this.classList.add("fallback")),this.subscribeTo("pb-login",t=>{this.show=this._loggedIn(t.detail.user,t.detail.groups)},[]),this.show=En.currentUser&&this._loggedIn(En.currentUser.user,En.currentUser.groups)}render(){return I`
            ${this.show&&!this.disabled?I`<slot></slot>`:I`<slot name="fallback"></slot>`}
        `}static get styles(){return R`
            :host {
                display: none;
            }

            :host(.fallback), :host([show]) {
                display: inherit;
            }
        `}_loggedIn(t,e){return Wa(t,e,this.group)}}customElements.define("pb-restricted",Ya);class Ga extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{odds:{type:Array},target:{type:String},_valid:{type:Boolean},_current:{type:String}})}constructor(){super(),this.odds=[]}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-refresh-odds",t=>{this._refresh();const e=this.shadowRoot.getElementById("regenerate"),i=t.detail.odds.map(t=>"odd="+t).join("&");this.minApiVersion("1.0.0")?e.url="api/odd?"+i:e.url="modules/lib/regenerate.xql?"+i,e.trigger()})}firstUpdated(){super.firstUpdated(),this._loader=this.shadowRoot.getElementById("load"),B("pb-page-ready",t=>{j(t.apiVersion,"1.0.0")<0?this._loader.url=t.endpoint+"/modules/lib/components-odd.xql":this._loader.url=t.endpoint+"/api/odd",this._refresh()})}_refresh(t){this.emitTo("pb-start-update"),this._loader.params=t,this._loader.generateRequest()}_update(){this.emitTo("pb-end-update"),this.odds=this._loader.lastResponse,this.requestUpdate()}_selectODD(t){const e=t.model.itemsIndex;this.odds.forEach((t,i)=>{i!==e&&t.current&&(this.set("odds."+i+".current",!1),this.set("odds."+e+".current",!0))});const i={odd:t.model.item.name+".odd"};console.log("<pb-manage-odds> selected ODD: %o",i),this.emitTo("pb-load",{params:i})}_createODD(){const t=this.shadowRoot.querySelector('paper-input[name="new_odd"]').value,e=this.shadowRoot.querySelector('paper-input[name="title"]').value;if(console.log("<pb-manage-odds> create ODD: %s, %s",t,e),this.lessThanApiVersion("1.0.0"))this._refresh({new_odd:t,title:e});else{const i=this.shadowRoot.getElementById("create");i.url=`${this.getEndpoint()}/api/odd/${t}`,i.params={title:e},this.emitTo("pb-start-update"),i.generateRequest()}}_created(t){this.emitTo("pb-end-update"),201===t.detail.status?this._refresh():console.log("<pb-manage-odds> unexpected response for create odd: %o",t.detail)}_createByExample(){const t={new_odd:this.shadowRoot.querySelector('paper-input[name="new_odd"]').value,title:this.shadowRoot.querySelector('paper-input[name="title"]').value},e=document.getElementById(this.target);e||e.getSelected||console.error("<pb-manage-odds> target %s not found",this.target);const i=e.getSelected();document.querySelectorAll(".document-select paper-checkbox[checked]").forEach(t=>{i.push(t.value)}),console.log("<pb-manage-odds> create ODD by example: %o",i),t.byExample=i,this._refresh(t)}_delete(t){this._current=t,this.shadowRoot.getElementById("deleteDialog").open()}_confirmDelete(){if(this._current){if(console.log("<pb-manage-odds> deleting ODD: %s",this._current),this.lessThanApiVersion("1.0.0"))this._refresh({delete:this._current});else{this.emitTo("pb-start-update");const t=this.shadowRoot.getElementById("delete");t.url=`${this.getEndpoint()}/api/odd/${this._current}`,t.generateRequest()}this._current=null}else console.error("<pb-manage-odds> no file marked for deletion")}_deleted(){const t=this.shadowRoot.getElementById("delete").lastError;410===t.status?this._refresh():(console.error("<pb-manage-odds> failed to delete odd: %d %o",t.status,t.response),this.emitTo("pb-end-update"))}_validate(){const t=this.shadowRoot.getElementById("ironform").validate();this.shadowRoot.getElementById("createBtn").disabled=!t,this.shadowRoot.getElementById("createByEx").disabled=!t}render(){if(!this.odds)return null;const t=this.lessThanApiVersion("1.0.0")?"modules/lib/regenerate.xql":"api/odd";return I`
            <pb-restricted login="login">
                <pb-ajax id="regenerateAll" url="${t}" method="post" title="${W("odd.manage.regenerate-all")}"
                    emit="${this.emit?this.emit:""}" .emitConfig="${this.emitConfig}">
                    <h3 slot="title">${W("odd.manage.regenerate-all")}</h3>
                    <paper-button raised="raised"><a href="#">${W("odd.manage.regenerate-all")}</a></paper-button>
                </pb-ajax>
            </pb-restricted>
            ${this.odds.map(e=>I`
                <div class="odd">
                    <a href="odd-editor.html?odd=${e.name}.odd" target="_blank"
                        title="edit ODD in graphical editor">${e.label}</a>
                    <!-- TODO this toolbar should only appear once per ODD files papercard -->
                    <app-toolbar>
                        ${e.canWrite?I`
                                    <pb-restricted login="login">
                                        <pb-ajax url="${t}?odd=${e.name}.odd" method="post" class="editor-link"
                                            emit="${this.emit?this.emit:""}" .emitConfig="${this.emitConfig}">
                                            <h2 slot="title">${W("menu.admin.recompile")}</h2>
                                            <paper-icon-button title="Regenerate ODD" icon="update"></paper-icon-button>
                                        </pb-ajax>
                                        <paper-icon-button title="Delete ODD" icon="delete" @click="${()=>this._delete(e.name+".odd")}"
                                            class="editor-link"></paper-icon-button>
                                    </pb-restricted>
                                `:null}
                        <a href="odd-editor.html?odd=${e.name}.odd" target="_blank" class="editor-link"
                           title="edit ODD in graphical editor"><iron-icon icon="reorder"></iron-icon></a>
                        <pb-edit-xml path="${e.path}" class="editor-link">
                            <paper-icon-button title="Edit XML" icon="create"></paper-icon-button>
                        </pb-edit-xml>
                    </app-toolbar>
                </div>
                <div class="odd-description">${e.description}</div>
            `)}
            <pb-restricted login="login">
                <form action="" method="GET">
                    <paper-input name="new_odd" label="${W("odd.manage.filename")}" required auto-validate pattern="[a-zA-Z0-9-_]+"
                        error-message="${W("odd.manage.filename-error")}"></paper-input>
                    <paper-input name="title" label="${W("odd.manage.title")}" auto-validate required minlength="1"
                        error-message="${W("odd.manage.title-error")}"></paper-input>
                    <paper-button id="createBtn" @click="${this._createODD}">
                        <iron-icon icon="create"></iron-icon>${W("odd.manage.create")}
                    </paper-button>
                    <!--paper-button id="createByEx" @click="${this._createByExample}">
                        <iron-icon icon="build"></iron-icon>
                        ${W("odd.manage.create-from-example")}
                    </paper-button-->
                </form>
            </pb-restricted>
            <pb-ajax id="regenerate" url="${t}" method="post"></pb-ajax>
            <iron-ajax
                id="load"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._update}">
            </iron-ajax>
            <iron-ajax id="delete" method="delete" with-credentials @error="${this._deleted}"></iron-ajax>
            <iron-ajax id="create" method="post" with-credentials @response="${this._created}" @error="${this._created}"></iron-ajax>
            <paper-dialog id="deleteDialog">
                <h2>${W("browse.delete")}</h2>
                <paper-dialog-scrollable>
                    <p>${W("odd.manage.delete",{file:this.file})}</p>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus @click="${this._confirmDelete}">
                        ${W("dialogs.yes")}
                    </paper-button>
                    <paper-button dialog-confirm="dialog-cancel">
                        ${W("dialogs.no")}
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            .odd {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .odd paper-checkbox {
                display: block;
                flex: 0 0;
                margin-right: 1em;
            }

            .odd a,
            .odd a:link,
            .odd a:visited{
                display: block;
                flex: 10 0;
                color:var(--pb-manage-odds-link-color);
            }

            .odd app-toolbar {
                flex: 1 0;
                justify-content: flex-end;
                padding: 0;
                min-height:0.25rem;
            }

            pb-restricted {
                display: flex;
            }

            .odd-description {
                color: #888888;
                font-size: 0.8em;
                margin-bottom: 0.25rem;
            }

            #regenerateAll {
                display: block;
                width: 100%;
                margin-top: 10px;
                text-align: right;
            }
            
            #regenerateAll a{
                text-decoration: none;
                color: inherit;
            }

            [icon]{
                color:var(--pb-manage-odds-icon-color);
            }

            [icon='reorder']
            {
                width:24px;
                height: 24px;
            }

            /* @media (hover:hover) and (pointer: fine){
                .odd app-toolbar .editor-link{
                    opacity: 0;
                }
                .odd:hover .editor-link{
                    opacity: 1;
                    transition: opacity 0.6s;
                }
            } */
        `}}customElements.get("pb-manage-odds")||customElements.define("pb-manage-odds",Ga);const Ka=document.createElement("template");Ka.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Ka.content);const Xa=n`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Xa.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let Za=!1;window.addEventListener("keydown",()=>{Za=!0},{capture:!0}),window.addEventListener("mousedown",()=>{Za=!1},{capture:!0});const Qa=t=>class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}},Ja=t=>class extends(Qa(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}get _keyboardActive(){return Za}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this.contains(t.relatedTarget)||this._focus():-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();const t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){const t=document.createElement("input");t.style.position="absolute",t.style.opacity="0",t.tabIndex=this.tabIndex,this.parentNode.insertBefore(t,this.nextSibling),t.focus(),t.addEventListener("focusout",()=>this.parentNode.removeChild(t))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&Za?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class tl extends(L(Ja(M(d(p))))){static get template(){return n`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){u(this,"down",()=>!this.disabled&&this.setAttribute("active","")),u(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(tl.is,tl);const el=n`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-indeterminate {
        0% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }

      /* RTL specific styles */

      :host([indeterminate][dir="rtl"]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      :host(:not([aria-valuenow])[dir="rtl"]) [part="value"]::before,
      :host([indeterminate][dir="rtl"]) [part="value"]::before {
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      @keyframes vaadin-progress-indeterminate-rtl {
        0% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      /* Contrast color */

      :host([theme~="contrast"][dir="rtl"]) [part="value"],
      :host([theme~="contrast"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"][dir="rtl"]) [part="value"],
      :host([theme~="error"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"][dir="rtl"]) [part="value"],
      :host([theme~="success"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild(el.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const il=t=>class extends t{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(t,e,i){const n=this._normalizeValue(t,e,i);this.style.setProperty("--vaadin-progress-value",n),this.updateStyles({"--vaadin-progress-value":String(n)})}_valueChanged(t,e){this.setAttribute("aria-valuenow",t)}_minChanged(t,e){this.setAttribute("aria-valuemin",t)}_maxChanged(t,e){this.setAttribute("aria-valuemax",t)}_normalizeValue(t,e,i){let n;return t||0==t?e>=i?n=1:(n=(t-e)/(i-e),n=Math.min(Math.max(n,0),1)):n=0,n}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class nl extends(L(M(il(p)))){static get template(){return n`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"] {
        transform-origin: 100% 50%;
      }
    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(nl.is,nl);const rl=n`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      :host([max-files-reached]) [part='drop-label'] {
        color: var(--lumo-disabled-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(rl.content);const ol=document.createElement("template");ol.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(ol.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class sl extends(M(p)){static get template(){return n`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(t){t&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(t){return t/100}_fireFileEvent(t){return t.preventDefault(),this.dispatchEvent(new CustomEvent(t.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(t,e){const i=Boolean(t);this.hasAttribute(e)!==i&&(i?this.setAttribute(e,""):this.removeAttribute(e))}}customElements.define(sl.is,sl);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class al extends(L(M(p))){static get template(){return n`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.4.3"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(t){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(t){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(t);const e=this.i18n.units.sizeBase||1e3,i=~~(Math.log(t)/Math.log(e)),n=Math.max(0,Math.min(3,i-1));return parseFloat((t/Math.pow(e,i)).toFixed(n))+" "+this.i18n.units.size[i]}_splitTimeByUnits(t){const e=[60,60,24,1/0],i=[0];for(var n=0;n<e.length&&t>0;n++)i[n]=t%e[n],t=Math.floor(t/e[n]);return i}_formatTime(t,e){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(t,e);for(;e.length<3;)e.push(0);return e.reverse().map(t=>(t<10?"0":"")+t).join(":")}_formatFileProgress(t){return t.totalStr+": "+t.progress+"% ("+(t.loaded>0?this.i18n.uploading.remainingTime.prefix+t.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(t,e){return t>=0&&e>=t}_onDragover(t){t.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),t.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(t){t.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(t){this.nodrop||(t.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(t.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(t){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(t){this.headers=void 0}for(var e in this.headers)t.setRequestHeader(e,this.headers[e]);this.timeout&&(t.timeout=this.timeout),t.withCredentials=this.withCredentials}_setStatus(t,e,i,n){t.elapsed=n,t.elapsedStr=this._formatTime(t.elapsed,this._splitTimeByUnits(t.elapsed)),t.remaining=Math.ceil(n*(e/i-1)),t.remainingStr=this._formatTime(t.remaining,this._splitTimeByUnits(t.remaining)),t.speed=~~(e/n/1024),t.totalStr=this._formatSize(e),t.loadedStr=this._formatSize(i),t.status=this._formatFileProgress(t)}uploadFiles(t){t&&!Array.isArray(t)&&(t=[t]),t=(t=t||this.files).filter(t=>!t.complete),Array.prototype.forEach.call(t,this._uploadFile.bind(this))}_uploadFile(t){if(t.uploading)return;const e=Date.now(),i=t.xhr=this._createXhr();let n,r;i.upload.onprogress=o=>{clearTimeout(n),r=Date.now();const s=(r-e)/1e3,a=o.loaded,l=o.total,c=~~(a/l*100);t.loaded=a,t.progress=c,t.indeterminate=a<=0||a>=l,t.error?t.indeterminate=t.status=void 0:t.abort||(c<100?(this._setStatus(t,l,a,s),n=setTimeout(()=>{t.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(t)},2e3)):(t.loadedStr=t.totalStr,t.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(t),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:t,xhr:i}}))},i.onreadystatechange=()=>{if(4==i.readyState){if(clearTimeout(n),t.indeterminate=t.uploading=!1,t.abort)return void this._notifyFileChanges(t);t.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:t,xhr:i},cancelable:!0})))return;0===i.status?t.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?t.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(t.error=this.i18n.uploading.error.forbidden),t.complete=!t.error,this.dispatchEvent(new CustomEvent("upload-"+(t.error?"error":"success"),{detail:{file:t,xhr:i}})),this._notifyFileChanges(t)}};const o=new FormData;t.uploadTarget=t.uploadTarget||this.target||"",t.formDataName=this.formDataName;if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:t,xhr:i},cancelable:!0})))return;o.append(t.formDataName,t,t.name),i.open(this.method,t.uploadTarget,!0),this._configureXhr(i),t.status=this.i18n.uploading.status.connecting,t.uploading=t.indeterminate=!0,t.complete=t.abort=t.error=t.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:t,xhr:i}})),this._notifyFileChanges(t)};this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:t,xhr:i,formData:o},cancelable:!0}))&&i.send(o)}_retryFileUpload(t){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&this._uploadFile(t)}_abortFileUpload(t){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(t.abort=!0,t.xhr&&t.xhr.abort(),this._notifyFileChanges(t))}_notifyFileChanges(t){var e="files."+this.files.indexOf(t)+".";for(var i in t)t.hasOwnProperty(i)&&this.notifyPath(e+i,t[i])}_addFiles(t){Array.prototype.forEach.call(t,this._addFile.bind(this))}_addFile(t){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&t.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.fileIsTooBig}}));const e=t.name.match(/\.[^\.]*$|$/)[0],i=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||i.test(t.type)||i.test(e)?(t.loaded=0,t.held=!0,t.status=this.i18n.uploading.status.held,this.unshift("files",t),this.noAuto||this._uploadFile(t)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.incorrectFileType}}))}_removeFile(t){this.files.indexOf(t)>-1&&this.splice("files",this.files.indexOf(t),1)}_onAddFilesTouchEnd(t){t.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){g()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(t){this._addFiles(t.target.files)}_onFileStart(t){this._uploadFile(t.detail.file)}_onFileRetry(t){this._retryFileUpload(t.detail.file)}_onFileAbort(t){this._abortFileUpload(t.detail.file)}_onFileRemove(t){this._removeFile(t.detail.file)}_dragoverChanged(t){t?this.setAttribute("dragover",t):this.removeAttribute("dragover")}_dragoverValidChanged(t){t?this.setAttribute("dragover-valid",t):this.removeAttribute("dragover-valid")}_i18nPlural(t,e){return 1==t?e.one:e.many}_isMultiple(t){return 1!=t}}customElements.define(al.is,al);class ll extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{target:{type:String},accept:{type:String},_files:{type:Object},event:{type:String}})}constructor(){super(),this._files=new Map,this.event="pb-load"}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.subscribeTo("pb-collection",t=>{this.target=t.detail.collection})}firstUpdated(){super.firstUpdated();const t=this.shadowRoot.getElementById("uploader");t.addEventListener("upload-before",e=>{this.emitTo("pb-start-update");const{file:i}=e.detail;this._files.set(i.name,i),this.requestUpdate(),this.minApiVersion("1.0.0")&&this.target&&(i.uploadTarget=`${t.target}${encodeURIComponent(this.target)}`)}),t.addEventListener("upload-request",t=>{this.target&&this.lessThanApiVersion("1.0.0")&&t.detail.formData.append("root",this.target)}),t.addEventListener("upload-error",t=>{this.emitTo("pb-end-update"),t.detail.file.error=t.detail.xhr.responseText,this.requestUpdate()}),t.addEventListener("upload-success",()=>{let e=!0;const i=[];t.files.forEach(t=>{t.complete||t.error||t.aborted?/^.*\.odd$/.test(t.name)&&i.push(t.name):e=!1,this.requestUpdate()}),e&&(this.emitTo("pb-end-update"),this.emitTo(this.event),i.length>0&&this.emitTo("pb-refresh-odds",{odds:i}))}),B("pb-page-ready",()=>{this.minApiVersion("1.0.0")?t.target=this.getEndpoint()+"/api/upload/":t.target=this.getEndpoint()+"/modules/lib/upload.xql"})}render(){const t=H(this,"--pb-upload-button-icon","icons:file-upload"),e=H(this,"--pb-upload-drop-icon",null);return I`
            <vaadin-upload id="uploader" accept="${this.accept}" method="post" tabindex="-1" form-data-name="files[]"
                with-credentials>
                ${e?I`<iron-icon slot="drop-label-icon" icon="${e}"></iron-icon>`:I`<span slot="drop-label-icon"></span>`}
                <span slot="drop-label">${W("upload.drop",{accept:this.accept})}</span>
                <paper-button id="uploadBtn" slot="add-button">
                    ${t?I`<iron-icon icon="${t}"></iron-icon>`:null}
                    ${W("upload.upload")}
                </paper-button>
                <div slot="file-list">
                    <ul>
                    ${this._files.size>0?I`
                            <li class="close">
                                <paper-icon-button icon="icons:clear" @click="${this.clearList}"></paper-icon-button>
                            </li>`:""}
                    ${this.renderFiles()}
                    </ul>
                </div>
            </vaadin-upload>
        `}renderFiles(){const t=[];for(const e of this._files.values()){let i="icons:hourglass-empty";e.complete?i="icons:check":(e.error||e.aborted)&&(i="icons:error-outline");const n=/.docx/.test(e.name)?e.name+".xml":e.name;let r;r=this.target?`${this.target}/${n}`:n,t.push(I`
                <li>
                    <iron-icon icon="${i}"></iron-icon>
                    ${e.error?e.name:I`<a href="${r}">${e.name}</a>`}
                </li>
            `),e.error&&t.push(I`
                    <li class="error" part="error">${JSON.parse(e.error).description}</li>
                `)}return t}clearList(){this._files.clear(),this.requestUpdate()}static get styles(){return R`
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            li {
                margin-top: 8px;
            }
            .close {
                text-align: right;
            }
            .error {
                color: red;
            }
            #uploadBtn iron-icon {
                padding-right: 8px;
            }
        `}}customElements.define("pb-upload",ll),function(){var t={},e={};!function(t,e){function i(t){if("number"==typeof t)return t;var e={};for(var i in t)e[i]=t[i];return e}function n(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=k}function r(){return t.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function o(e,i,r){var o=new n;return i&&(o.fill="both",o.duration="auto"),"number"!=typeof e||isNaN(e)?void 0!==e&&Object.getOwnPropertyNames(e).forEach((function(i){if("auto"!=e[i]){if(("number"==typeof o[i]||"duration"==i)&&("number"!=typeof e[i]||isNaN(e[i])))return;if("fill"==i&&-1==w.indexOf(e[i]))return;if("direction"==i&&-1==x.indexOf(e[i]))return;if("playbackRate"==i&&1!==e[i]&&t.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;o[i]=e[i]}})):o.duration=e,o}function s(t){return"number"==typeof t&&(t=isNaN(t)?{duration:0}:{duration:t}),t}function a(e,i){return o(e=t.numericTimingToObject(e),i)}function l(t,e,i,n){return t<0||t>1||i<0||i>1?k:function(r){function o(t,e,i){return 3*t*(1-i)*(1-i)*i+3*e*(1-i)*i*i+i*i*i}if(r<=0){var s=0;return t>0?s=e/t:!e&&i>0&&(s=n/i),s*r}if(r>=1){var a=0;return i<1?a=(n-1)/(i-1):1==i&&t<1&&(a=(e-1)/(t-1)),1+a*(r-1)}for(var l=0,c=1;l<c;){var h=(l+c)/2,d=o(t,i,h);if(Math.abs(r-d)<1e-5)return o(e,n,h);d<r?l=h:c=h}return o(e,n,h)}}function c(t,e){return function(i){if(i>=1)return 1;var n=1/t;return(i+=e*n)-i%n}}function h(t){E||(E=document.createElement("div").style),E.animationTimingFunction="",E.animationTimingFunction=t;var e=E.animationTimingFunction;if(""==e&&r())throw new TypeError(t+" is not a valid value for easing");return e}function d(t){if("linear"==t)return k;var e=L.exec(t);if(e)return l.apply(this,e.slice(1).map(Number));var i=M.exec(t);if(i)return c(Number(i[1]),z);var n=O.exec(t);return n?c(Number(n[1]),{start:A,middle:S,end:z}[n[2]]):C[t]||k}function p(t){return Math.abs(u(t)/t.playbackRate)}function u(t){return 0===t.duration||0===t.iterations?0:t.duration*t.iterations}function g(t,e,i){if(null==e)return $;var n=i.delay+t+i.endDelay;return e<Math.min(i.delay,n)?H:e>=Math.min(i.delay+t,n)?I:R}function f(t,e,i,n,r){switch(n){case H:return"backwards"==e||"both"==e?0:null;case R:return i-r;case I:return"forwards"==e||"both"==e?t:null;case $:return null}}function m(t,e,i,n,r){var o=r;return 0===t?e!==H&&(o+=i):o+=n/t,o}function v(t,e,i,n,r,o){var s=t===1/0?e%1:t%1;return 0!==s||i!==I||0===n||0===r&&0!==o||(s=1),s}function b(t,e,i,n){return t===I&&e===1/0?1/0:1===i?Math.floor(n)-1:Math.floor(n)}function y(t,e,i){var n=t;if("normal"!==t&&"reverse"!==t){var r=e;"alternate-reverse"===t&&(r+=1),n="normal",r!==1/0&&r%2!=0&&(n="reverse")}return"normal"===n?i:1-i}function _(t,e,i){var n=g(t,e,i),r=f(t,i.fill,e,n,i.delay);if(null===r)return null;var o=m(i.duration,n,i.iterations,r,i.iterationStart),s=v(o,i.iterationStart,n,i.iterations,r,i.duration),a=b(n,i.iterations,s,o),l=y(i.direction,a,s);return i._easingFunction(l)}var w="backwards|forwards|both|none".split("|"),x="reverse|alternate|alternate-reverse".split("|"),k=function(t){return t};n.prototype={_setMember:function(e,i){this["_"+e]=i,this._effect&&(this._effect._timingInput[e]=i,this._effect._timing=t.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=t.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(t){this._setMember("delay",t)},get delay(){return this._delay},set endDelay(t){this._setMember("endDelay",t)},get endDelay(){return this._endDelay},set fill(t){this._setMember("fill",t)},get fill(){return this._fill},set iterationStart(t){if((isNaN(t)||t<0)&&r())throw new TypeError("iterationStart must be a non-negative number, received: "+t);this._setMember("iterationStart",t)},get iterationStart(){return this._iterationStart},set duration(t){if("auto"!=t&&(isNaN(t)||t<0)&&r())throw new TypeError("duration must be non-negative or auto, received: "+t);this._setMember("duration",t)},get duration(){return this._duration},set direction(t){this._setMember("direction",t)},get direction(){return this._direction},set easing(t){this._easingFunction=d(h(t)),this._setMember("easing",t)},get easing(){return this._easing},set iterations(t){if((isNaN(t)||t<0)&&r())throw new TypeError("iterations must be non-negative, received: "+t);this._setMember("iterations",t)},get iterations(){return this._iterations}};var A=1,S=.5,z=0,C={ease:l(.25,.1,.25,1),"ease-in":l(.42,0,1,1),"ease-out":l(0,0,.58,1),"ease-in-out":l(.42,0,.58,1),"step-start":c(1,A),"step-middle":c(1,S),"step-end":c(1,z)},E=null,T="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",L=new RegExp("cubic-bezier\\("+T+","+T+","+T+","+T+"\\)"),M=/steps\(\s*(\d+)\s*\)/,O=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,$=0,H=1,I=2,R=3;t.cloneTimingInput=i,t.makeTiming=o,t.numericTimingToObject=s,t.normalizeTimingInput=a,t.calculateActiveDuration=p,t.calculateIterationProgress=_,t.calculatePhase=g,t.normalizeEasing=h,t.parseEasingFunction=d}(t),function(t,e){function i(t,e){return t in h&&h[t][e]||e}function n(t){return"display"===t||0===t.lastIndexOf("animation",0)||0===t.lastIndexOf("transition",0)}function r(t,e,r){if(!n(t)){var o=a[t];if(o)for(var s in l.style[t]=e,o){var c=o[s],h=l.style[c];r[c]=i(c,h)}else r[t]=i(t,e)}}function o(t){var e=[];for(var i in t)if(!(i in["easing","offset","composite"])){var n=t[i];Array.isArray(n)||(n=[n]);for(var r,o=n.length,s=0;s<o;s++)(r={}).offset="offset"in t?t.offset:1==o?1:s/(o-1),"easing"in t&&(r.easing=t.easing),"composite"in t&&(r.composite=t.composite),r[i]=n[s],e.push(r)}return e.sort((function(t,e){return t.offset-e.offset})),e}function s(e){function i(){var t=n.length;null==n[t-1].offset&&(n[t-1].offset=1),t>1&&null==n[0].offset&&(n[0].offset=0);for(var e=0,i=n[0].offset,r=1;r<t;r++){var o=n[r].offset;if(null!=o){for(var s=1;s<r-e;s++)n[e+s].offset=i+(o-i)*s/(r-e);e=r,i=o}}}if(null==e)return[];window.Symbol&&Symbol.iterator&&Array.prototype.from&&e[Symbol.iterator]&&(e=Array.from(e)),Array.isArray(e)||(e=o(e));for(var n=e.map((function(e){var i={};for(var n in e){var o=e[n];if("offset"==n){if(null!=o){if(o=Number(o),!isFinite(o))throw new TypeError("Keyframe offsets must be numbers.");if(o<0||o>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if("composite"==n){if("add"==o||"accumulate"==o)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if("replace"!=o)throw new TypeError("Invalid composite mode "+o+".")}else o="easing"==n?t.normalizeEasing(o):""+o;r(n,o,i)}return null==i.offset&&(i.offset=null),null==i.easing&&(i.easing="linear"),i})),s=!0,a=-1/0,l=0;l<n.length;l++){var c=n[l].offset;if(null!=c){if(c<a)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");a=c}else s=!1}return n=n.filter((function(t){return t.offset>=0&&t.offset<=1})),s||i(),n}var a={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},l=document.createElementNS("http://www.w3.org/1999/xhtml","div"),c={thin:"1px",medium:"3px",thick:"5px"},h={borderBottomWidth:c,borderLeftWidth:c,borderRightWidth:c,borderTopWidth:c,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:c,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};t.convertToArrayForm=o,t.normalizeKeyframes=s}(t),function(t){var e={};t.isDeprecated=function(t,i,n,r){var o=r?"are":"is",s=new Date,a=new Date(i);return a.setMonth(a.getMonth()+3),!(s<a&&(t in e||console.warn("Web Animations: "+t+" "+o+" deprecated and will stop working on "+a.toDateString()+". "+n),e[t]=!0,1))},t.deprecated=function(e,i,n,r){var o=r?"are":"is";if(t.isDeprecated(e,i,n,r))throw new Error(e+" "+o+" no longer supported. "+n)}}(t),function(){if(document.documentElement.animate){var i=document.documentElement.animate([],0),n=!0;if(i&&(n=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach((function(t){void 0===i[t]&&(n=!0)}))),!n)return}!function(t,e,i){function n(t){for(var e={},i=0;i<t.length;i++)for(var n in t[i])if("offset"!=n&&"easing"!=n&&"composite"!=n){var r={offset:t[i].offset,easing:t[i].easing,value:t[i][n]};e[n]=e[n]||[],e[n].push(r)}for(var o in e){var s=e[o];if(0!=s[0].offset||1!=s[s.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return e}function r(i){var n=[];for(var r in i)for(var o=i[r],s=0;s<o.length-1;s++){var a=s,l=s+1,c=o[a].offset,h=o[l].offset,d=c,p=h;0==s&&(d=-1/0,0==h&&(l=a)),s==o.length-2&&(p=1/0,1==c&&(a=l)),n.push({applyFrom:d,applyTo:p,startOffset:o[a].offset,endOffset:o[l].offset,easingFunction:t.parseEasingFunction(o[a].easing),property:r,interpolation:e.propertyInterpolation(r,o[a].value,o[l].value)})}return n.sort((function(t,e){return t.startOffset-e.startOffset})),n}e.convertEffectInput=function(i){var o=n(t.normalizeKeyframes(i)),s=r(o);return function(t,i){if(null!=i)s.filter((function(t){return i>=t.applyFrom&&i<t.applyTo})).forEach((function(n){var r=i-n.startOffset,o=n.endOffset-n.startOffset,s=0==o?0:n.easingFunction(r/o);e.apply(t,n.property,n.interpolation(s))}));else for(var n in o)"offset"!=n&&"easing"!=n&&"composite"!=n&&e.clear(t,n)}}}(t,e),function(t,e,i){function n(t){return t.replace(/-(.)/g,(function(t,e){return e.toUpperCase()}))}function r(t,e,i){a[i]=a[i]||[],a[i].push([t,e])}function o(t,e,i){for(var o=0;o<i.length;o++)r(t,e,n(i[o]))}function s(i,r,o){var s=i;/-/.test(i)&&!t.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(s=n(i)),"initial"!=r&&"initial"!=o||("initial"==r&&(r=l[s]),"initial"==o&&(o=l[s]));for(var c=r==o?[]:a[s],h=0;c&&h<c.length;h++){var d=c[h][0](r),p=c[h][0](o);if(void 0!==d&&void 0!==p){var u=c[h][1](d,p);if(u){var g=e.Interpolation.apply(null,u);return function(t){return 0==t?r:1==t?o:g(t)}}}}return e.Interpolation(!1,!0,(function(t){return t?o:r}))}var a={};e.addPropertiesHandler=o;var l={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",strokeDasharray:"none",strokeDashoffset:"0px",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};e.propertyInterpolation=s}(t,e),function(t,e,i){function n(e){var i=t.calculateActiveDuration(e),n=function(n){return t.calculateIterationProgress(i,n,e)};return n._totalDuration=e.delay+i+e.endDelay,n}e.KeyframeEffect=function(i,r,o,s){var a,l=n(t.normalizeTimingInput(o)),c=e.convertEffectInput(r),h=function(){c(i,a)};return h._update=function(t){return null!==(a=l(t))},h._clear=function(){c(i,null)},h._hasSameTarget=function(t){return i===t},h._target=i,h._totalDuration=l._totalDuration,h._id=s,h}}(t,e),function(t,e){function i(t,e){return!(!e.namespaceURI||-1==e.namespaceURI.indexOf("/svg"))&&(s in t||(t[s]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)),t[s])}function n(t,e,i){i.enumerable=!0,i.configurable=!0,Object.defineProperty(t,e,i)}function r(t){this._element=t,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=t.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=i(window,t),this._savedTransformAttr=null;for(var e=0;e<this._style.length;e++){var n=this._style[e];this._surrogateStyle[n]=this._style[n]}this._updateIndices()}function o(t){if(!t._webAnimationsPatchedStyle){var e=new r(t);try{n(t,"style",{get:function(){return e}})}catch(e){t.style._set=function(e,i){t.style[e]=i},t.style._clear=function(e){t.style[e]=""}}t._webAnimationsPatchedStyle=t.style}}var s="_webAnimationsUpdateSvgTransformAttr",a={cssText:1,length:1,parentRule:1},l={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},c={removeProperty:1,setProperty:1};for(var h in r.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(t){for(var e={},i=0;i<this._surrogateStyle.length;i++)e[this._surrogateStyle[i]]=!0;this._surrogateStyle.cssText=t,this._updateIndices();for(i=0;i<this._surrogateStyle.length;i++)e[this._surrogateStyle[i]]=!0;for(var n in e)this._isAnimatedProperty[n]||this._style.setProperty(n,this._surrogateStyle.getPropertyValue(n))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(t){return function(){return this._surrogateStyle[t]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(e,i){this._style[e]=i,this._isAnimatedProperty[e]=!0,this._updateSvgTransformAttr&&"transform"==t.unprefixedPropertyName(e)&&(null==this._savedTransformAttr&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",t.transformToSvgMatrix(i)))},_clear:function(e){this._style[e]=this._surrogateStyle[e],this._updateSvgTransformAttr&&"transform"==t.unprefixedPropertyName(e)&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[e]}},l)r.prototype[h]=function(t,e){return function(){var i=this._surrogateStyle[t].apply(this._surrogateStyle,arguments);return e&&(this._isAnimatedProperty[arguments[0]]||this._style[t].apply(this._style,arguments),this._updateIndices()),i}}(h,h in c);for(var d in document.documentElement.style)d in a||d in l||function(t){n(r.prototype,t,{get:function(){return this._surrogateStyle[t]},set:function(e){this._surrogateStyle[t]=e,this._updateIndices(),this._isAnimatedProperty[t]||(this._style[t]=e)}})}(d);t.apply=function(e,i,n){o(e),e.style._set(t.propertyName(i),n)},t.clear=function(e,i){e._webAnimationsPatchedStyle&&e.style._clear(t.propertyName(i))}}(e),function(t){window.Element.prototype.animate=function(e,i){var n="";return i&&i.id&&(n=i.id),t.timeline._play(t.KeyframeEffect(this,e,i,n))}}(e),function(t,e){function i(t,e,n){if("number"==typeof t&&"number"==typeof e)return t*(1-n)+e*n;if("boolean"==typeof t&&"boolean"==typeof e)return n<.5?t:e;if(t.length==e.length){for(var r=[],o=0;o<t.length;o++)r.push(i(t[o],e[o],n));return r}throw"Mismatched interpolation arguments "+t+":"+e}t.Interpolation=function(t,e,n){return function(r){return n(i(t,e,r))}}}(e),function(t,e){function i(t,e,i){return Math.max(Math.min(t,i),e)}function n(e,n,r){var o=t.dot(e,n),s=[];if(1===(o=i(o,-1,1)))s=e;else for(var a=Math.acos(o),l=1*Math.sin(r*a)/Math.sqrt(1-o*o),c=0;c<4;c++)s.push(e[c]*(Math.cos(r*a)-o*l)+n[c]*l);return s}var r=function(){function t(t,e){for(var i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],n=0;n<4;n++)for(var r=0;r<4;r++)for(var o=0;o<4;o++)i[n][r]+=e[n][o]*t[o][r];return i}function e(t){return 0==t[0][2]&&0==t[0][3]&&0==t[1][2]&&0==t[1][3]&&0==t[2][0]&&0==t[2][1]&&1==t[2][2]&&0==t[2][3]&&0==t[3][2]&&1==t[3][3]}function i(i,n,r,o,s){for(var a=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],l=0;l<4;l++)a[l][3]=s[l];for(l=0;l<3;l++)for(var c=0;c<3;c++)a[3][l]+=i[c]*a[c][l];var h=o[0],d=o[1],p=o[2],u=o[3],g=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];g[0][0]=1-2*(d*d+p*p),g[0][1]=2*(h*d-p*u),g[0][2]=2*(h*p+d*u),g[1][0]=2*(h*d+p*u),g[1][1]=1-2*(h*h+p*p),g[1][2]=2*(d*p-h*u),g[2][0]=2*(h*p-d*u),g[2][1]=2*(d*p+h*u),g[2][2]=1-2*(h*h+d*d),a=t(a,g);var f=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];r[2]&&(f[2][1]=r[2],a=t(a,f)),r[1]&&(f[2][1]=0,f[2][0]=r[0],a=t(a,f)),r[0]&&(f[2][0]=0,f[1][0]=r[0],a=t(a,f));for(l=0;l<3;l++)for(c=0;c<3;c++)a[l][c]*=n[l];return e(a)?[a[0][0],a[0][1],a[1][0],a[1][1],a[3][0],a[3][1]]:a[0].concat(a[1],a[2],a[3])}return i}();t.composeMatrix=r,t.quat=n}(e),function(t,e,i){t.sequenceNumber=0;var n=function(t,e,i){this.target=t,this.currentTime=e,this.timelineTime=i,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=t,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};e.Animation=function(e){this.id="",e&&e._id&&(this.id=e._id),this._sequenceNumber=t.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=e,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},e.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,e.timeline._animations.push(this))},_tickCurrentTime:function(t,e){t!=this._currentTime&&(this._currentTime=t,this._isFinished&&!e&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(t){t=+t,isNaN(t)||(e.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-t/this._playbackRate),this._currentTimePending=!1,this._currentTime!=t&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(t,!0),e.applyDirtiedAnimation(this)))},get startTime(){return this._startTime},set startTime(t){t=+t,isNaN(t)||this._paused||this._idle||(this._startTime=t,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),e.applyDirtiedAnimation(this))},get playbackRate(){return this._playbackRate},set playbackRate(t){if(t!=this._playbackRate){var i=this.currentTime;this._playbackRate=t,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),e.applyDirtiedAnimation(this)),null!=i&&(this.currentTime=i)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),e.applyDirtiedAnimation(this)},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,e.applyDirtiedAnimation(this))},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),e.applyDirtiedAnimation(this))},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(t,e){"function"==typeof e&&"finish"==t&&this._finishHandlers.push(e)},removeEventListener:function(t,e){if("finish"==t){var i=this._finishHandlers.indexOf(e);i>=0&&this._finishHandlers.splice(i,1)}},_fireEvents:function(t){if(this._isFinished){if(!this._finishedFlag){var e=new n(this,this._currentTime,t),i=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout((function(){i.forEach((function(t){t.call(e.target,e)}))}),0),this._finishedFlag=!0}}else this._finishedFlag=!1},_tick:function(t,e){this._idle||this._paused||(null==this._startTime?e&&(this.startTime=t-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((t-this._startTime)*this.playbackRate)),e&&(this._currentTimePending=!1,this._fireEvents(t))},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var t=this._effect._target;return t._activeAnimations||(t._activeAnimations=[]),t._activeAnimations},_markTarget:function(){var t=this._targetAnimations();-1===t.indexOf(this)&&t.push(this)},_unmarkTarget:function(){var t=this._targetAnimations(),e=t.indexOf(this);-1!==e&&t.splice(e,1)}}}(t,e),function(t,e,i){function n(t){var e=c;c=[],t<f.currentTime&&(t=f.currentTime),f._animations.sort(r),f._animations=a(t,!0,f._animations)[0],e.forEach((function(e){e[1](t)})),s(),void 0}function r(t,e){return t._sequenceNumber-e._sequenceNumber}function o(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function s(){u.forEach((function(t){t()})),u.length=0}function a(t,i,n){g=!0,p=!1,e.timeline.currentTime=t,d=!1;var r=[],o=[],s=[],a=[];return n.forEach((function(e){e._tick(t,i),e._inEffect?(o.push(e._effect),e._markTarget()):(r.push(e._effect),e._unmarkTarget()),e._needsTick&&(d=!0);var n=e._inEffect||e._needsTick;e._inTimeline=n,n?s.push(e):a.push(e)})),u.push.apply(u,r),u.push.apply(u,o),d&&requestAnimationFrame((function(){})),g=!1,[s,a]}var l=window.requestAnimationFrame,c=[],h=0;window.requestAnimationFrame=function(t){var e=h++;return 0==c.length&&l(n),c.push([e,t]),e},window.cancelAnimationFrame=function(t){c.forEach((function(e){e[0]==t&&(e[1]=function(){})}))},o.prototype={_play:function(i){i._timing=t.normalizeTimingInput(i.timing);var n=new e.Animation(i);return n._idle=!1,n._timeline=this,this._animations.push(n),e.restart(),e.applyDirtiedAnimation(n),n}};var d=!1,p=!1;e.restart=function(){return d||(d=!0,requestAnimationFrame((function(){})),p=!0),p},e.applyDirtiedAnimation=function(t){if(!g){t._markTarget();var i=t._targetAnimations();i.sort(r),a(e.timeline.currentTime,!1,i.slice())[1].forEach((function(t){var e=f._animations.indexOf(t);-1!==e&&f._animations.splice(e,1)})),s()}};var u=[],g=!1,f=new o;e.timeline=f}(t,e),function(t,e){function i(t,e){for(var i=0,n=0;n<t.length;n++)i+=t[n]*e[n];return i}function n(t,e){return[t[0]*e[0]+t[4]*e[1]+t[8]*e[2]+t[12]*e[3],t[1]*e[0]+t[5]*e[1]+t[9]*e[2]+t[13]*e[3],t[2]*e[0]+t[6]*e[1]+t[10]*e[2]+t[14]*e[3],t[3]*e[0]+t[7]*e[1]+t[11]*e[2]+t[15]*e[3],t[0]*e[4]+t[4]*e[5]+t[8]*e[6]+t[12]*e[7],t[1]*e[4]+t[5]*e[5]+t[9]*e[6]+t[13]*e[7],t[2]*e[4]+t[6]*e[5]+t[10]*e[6]+t[14]*e[7],t[3]*e[4]+t[7]*e[5]+t[11]*e[6]+t[15]*e[7],t[0]*e[8]+t[4]*e[9]+t[8]*e[10]+t[12]*e[11],t[1]*e[8]+t[5]*e[9]+t[9]*e[10]+t[13]*e[11],t[2]*e[8]+t[6]*e[9]+t[10]*e[10]+t[14]*e[11],t[3]*e[8]+t[7]*e[9]+t[11]*e[10]+t[15]*e[11],t[0]*e[12]+t[4]*e[13]+t[8]*e[14]+t[12]*e[15],t[1]*e[12]+t[5]*e[13]+t[9]*e[14]+t[13]*e[15],t[2]*e[12]+t[6]*e[13]+t[10]*e[14]+t[14]*e[15],t[3]*e[12]+t[7]*e[13]+t[11]*e[14]+t[15]*e[15]]}function r(t){var e=t.rad||0;return((t.deg||0)/360+(t.grad||0)/400+(t.turn||0))*(2*Math.PI)+e}function o(t){switch(t.t){case"rotatex":var e=r(t.d[0]);return[1,0,0,0,0,Math.cos(e),Math.sin(e),0,0,-Math.sin(e),Math.cos(e),0,0,0,0,1];case"rotatey":e=r(t.d[0]);return[Math.cos(e),0,-Math.sin(e),0,0,1,0,0,Math.sin(e),0,Math.cos(e),0,0,0,0,1];case"rotate":case"rotatez":e=r(t.d[0]);return[Math.cos(e),Math.sin(e),0,0,-Math.sin(e),Math.cos(e),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var i=t.d[0],n=t.d[1],o=t.d[2],s=(e=r(t.d[3]),i*i+n*n+o*o);if(0===s)i=1,n=0,o=0;else if(1!==s){var a=Math.sqrt(s);i/=a,n/=a,o/=a}var l=Math.sin(e/2),c=l*Math.cos(e/2),h=l*l;return[1-2*(n*n+o*o)*h,2*(i*n*h+o*c),2*(i*o*h-n*c),0,2*(i*n*h-o*c),1-2*(i*i+o*o)*h,2*(n*o*h+i*c),0,2*(i*o*h+n*c),2*(n*o*h-i*c),1-2*(i*i+n*n)*h,0,0,0,0,1];case"scale":return[t.d[0],0,0,0,0,t.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return[t.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return[1,0,0,0,0,t.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return[1,0,0,0,0,1,0,0,0,0,t.d[0],0,0,0,0,1];case"scale3d":return[t.d[0],0,0,0,0,t.d[1],0,0,0,0,t.d[2],0,0,0,0,1];case"skew":var d=r(t.d[0]),p=r(t.d[1]);return[1,Math.tan(p),0,0,Math.tan(d),1,0,0,0,0,1,0,0,0,0,1];case"skewx":e=r(t.d[0]);return[1,0,0,0,Math.tan(e),1,0,0,0,0,1,0,0,0,0,1];case"skewy":e=r(t.d[0]);return[1,Math.tan(e),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":return[1,0,0,0,0,1,0,0,0,0,1,0,i=t.d[0].px||0,n=t.d[1].px||0,0,1];case"translatex":return[1,0,0,0,0,1,0,0,0,0,1,0,i=t.d[0].px||0,0,0,1];case"translatey":return[1,0,0,0,0,1,0,0,0,0,1,0,0,n=t.d[0].px||0,0,1];case"translatez":return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,o=t.d[0].px||0,1];case"translate3d":return[1,0,0,0,0,1,0,0,0,0,1,0,i=t.d[0].px||0,n=t.d[1].px||0,o=t.d[2].px||0,1];case"perspective":return[1,0,0,0,0,1,0,0,0,0,1,t.d[0].px?-1/t.d[0].px:0,0,0,0,1];case"matrix":return[t.d[0],t.d[1],0,0,t.d[2],t.d[3],0,0,0,0,1,0,t.d[4],t.d[5],0,1];case"matrix3d":return t.d}}function s(t){return 0===t.length?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:t.map(o).reduce(n)}function a(t){return[l(s(t))]}var l=function(){function t(t){return t[0][0]*t[1][1]*t[2][2]+t[1][0]*t[2][1]*t[0][2]+t[2][0]*t[0][1]*t[1][2]-t[0][2]*t[1][1]*t[2][0]-t[1][2]*t[2][1]*t[0][0]-t[2][2]*t[0][1]*t[1][0]}function e(e){for(var i=1/t(e),n=e[0][0],r=e[0][1],o=e[0][2],s=e[1][0],a=e[1][1],l=e[1][2],c=e[2][0],h=e[2][1],d=e[2][2],p=[[(a*d-l*h)*i,(o*h-r*d)*i,(r*l-o*a)*i,0],[(l*c-s*d)*i,(n*d-o*c)*i,(o*s-n*l)*i,0],[(s*h-a*c)*i,(c*r-n*h)*i,(n*a-r*s)*i,0]],u=[],g=0;g<3;g++){for(var f=0,m=0;m<3;m++)f+=e[3][m]*p[m][g];u.push(f)}return u.push(1),p.push(u),p}function n(t){return[[t[0][0],t[1][0],t[2][0],t[3][0]],[t[0][1],t[1][1],t[2][1],t[3][1]],[t[0][2],t[1][2],t[2][2],t[3][2]],[t[0][3],t[1][3],t[2][3],t[3][3]]]}function r(t,e){for(var i=[],n=0;n<4;n++){for(var r=0,o=0;o<4;o++)r+=t[o]*e[o][n];i.push(r)}return i}function o(t){var e=s(t);return[t[0]/e,t[1]/e,t[2]/e]}function s(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}function a(t,e,i,n){return[i*t[0]+n*e[0],i*t[1]+n*e[1],i*t[2]+n*e[2]]}function l(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function c(c){var h=[c.slice(0,4),c.slice(4,8),c.slice(8,12),c.slice(12,16)];if(1!==h[3][3])return null;for(var d=[],p=0;p<4;p++)d.push(h[p].slice());for(p=0;p<3;p++)d[p][3]=0;if(0===t(d))return null;var u,g=[];h[0][3]||h[1][3]||h[2][3]?(g.push(h[0][3]),g.push(h[1][3]),g.push(h[2][3]),g.push(h[3][3]),u=r(g,n(e(d)))):u=[0,0,0,1];var f=h[3].slice(0,3),m=[];m.push(h[0].slice(0,3));var v=[];v.push(s(m[0])),m[0]=o(m[0]);var b=[];m.push(h[1].slice(0,3)),b.push(i(m[0],m[1])),m[1]=a(m[1],m[0],1,-b[0]),v.push(s(m[1])),m[1]=o(m[1]),b[0]/=v[1],m.push(h[2].slice(0,3)),b.push(i(m[0],m[2])),m[2]=a(m[2],m[0],1,-b[1]),b.push(i(m[1],m[2])),m[2]=a(m[2],m[1],1,-b[2]),v.push(s(m[2])),m[2]=o(m[2]),b[1]/=v[2],b[2]/=v[2];var y=l(m[1],m[2]);if(i(m[0],y)<0)for(p=0;p<3;p++)v[p]*=-1,m[p][0]*=-1,m[p][1]*=-1,m[p][2]*=-1;var _,w,x=m[0][0]+m[1][1]+m[2][2]+1;return x>1e-4?(_=.5/Math.sqrt(x),w=[(m[2][1]-m[1][2])*_,(m[0][2]-m[2][0])*_,(m[1][0]-m[0][1])*_,.25/_]):m[0][0]>m[1][1]&&m[0][0]>m[2][2]?w=[.25*(_=2*Math.sqrt(1+m[0][0]-m[1][1]-m[2][2])),(m[0][1]+m[1][0])/_,(m[0][2]+m[2][0])/_,(m[2][1]-m[1][2])/_]:m[1][1]>m[2][2]?(_=2*Math.sqrt(1+m[1][1]-m[0][0]-m[2][2]),w=[(m[0][1]+m[1][0])/_,.25*_,(m[1][2]+m[2][1])/_,(m[0][2]-m[2][0])/_]):(_=2*Math.sqrt(1+m[2][2]-m[0][0]-m[1][1]),w=[(m[0][2]+m[2][0])/_,(m[1][2]+m[2][1])/_,.25*_,(m[1][0]-m[0][1])/_]),[f,v,b,w,u]}return c}();t.dot=i,t.makeMatrixDecomposition=a,t.transformListToMatrix=s}(e),function(t){function e(t,e){var i=t.exec(e);if(i)return[i=t.ignoreCase?i[0].toLowerCase():i[0],e.substr(i.length)]}function i(t,e){var i=t(e=e.replace(/^\s*/,""));if(i)return[i[0],i[1].replace(/^\s*/,"")]}function n(t,n,r){t=i.bind(null,t);for(var o=[];;){var s=t(r);if(!s)return[o,r];if(o.push(s[0]),!(s=e(n,r=s[1]))||""==s[1])return[o,r];r=s[1]}}function r(t,e){for(var i=0,n=0;n<e.length&&(!/\s|,/.test(e[n])||0!=i);n++)if("("==e[n])i++;else if(")"==e[n]&&(0==--i&&n++,i<=0))break;var r=t(e.substr(0,n));return null==r?void 0:[r,e.substr(n)]}function o(t,e){for(var i=t,n=e;i&&n;)i>n?i%=n:n%=i;return t*e/(i+n)}function s(t){return function(e){var i=t(e);return i&&(i[0]=void 0),i}}function a(t,e){return function(i){return t(i)||[e,i]}}function l(e,i){for(var n=[],r=0;r<e.length;r++){var o=t.consumeTrimmed(e[r],i);if(!o||""==o[0])return;void 0!==o[0]&&n.push(o[0]),i=o[1]}if(""==i)return n}function c(t,e,i,n,r){for(var s=[],a=[],l=[],c=o(n.length,r.length),h=0;h<c;h++){var d=e(n[h%n.length],r[h%r.length]);if(!d)return;s.push(d[0]),a.push(d[1]),l.push(d[2])}return[s,a,function(e){var n=e.map((function(t,e){return l[e](t)})).join(i);return t?t(n):n}]}function h(t,e,i){for(var n=[],r=[],o=[],s=0,a=0;a<i.length;a++)if("function"==typeof i[a]){var l=i[a](t[s],e[s++]);n.push(l[0]),r.push(l[1]),o.push(l[2])}else!function(t){n.push(!1),r.push(!1),o.push((function(){return i[t]}))}(a);return[n,r,function(t){for(var e="",i=0;i<t.length;i++)e+=o[i](t[i]);return e}]}t.consumeToken=e,t.consumeTrimmed=i,t.consumeRepeated=n,t.consumeParenthesised=r,t.ignore=s,t.optional=a,t.consumeList=l,t.mergeNestedRepeated=c.bind(null,null),t.mergeWrappedNestedRepeated=c,t.mergeList=h}(e),function(t){function e(e){function i(e){var i=t.consumeToken(/^inset/i,e);return i?(n.inset=!0,i):(i=t.consumeLengthOrPercent(e))?(n.lengths.push(i[0]),i):(i=t.consumeColor(e))?(n.color=i[0],i):void 0}var n={inset:!1,lengths:[],color:null},r=t.consumeRepeated(i,/^/,e);if(r&&r[0].length)return[n,r[1]]}function i(i){var n=t.consumeRepeated(e,/^,/,i);if(n&&""==n[1])return n[0]}function n(e,i){for(;e.lengths.length<Math.max(e.lengths.length,i.lengths.length);)e.lengths.push({px:0});for(;i.lengths.length<Math.max(e.lengths.length,i.lengths.length);)i.lengths.push({px:0});if(e.inset==i.inset&&!!e.color==!!i.color){for(var n,r=[],o=[[],0],s=[[],0],a=0;a<e.lengths.length;a++){var l=t.mergeDimensions(e.lengths[a],i.lengths[a],2==a);o[0].push(l[0]),s[0].push(l[1]),r.push(l[2])}if(e.color&&i.color){var c=t.mergeColors(e.color,i.color);o[1]=c[0],s[1]=c[1],n=c[2]}return[o,s,function(t){for(var i=e.inset?"inset ":" ",o=0;o<r.length;o++)i+=r[o](t[0][o])+" ";return n&&(i+=n(t[1])),i}]}}function r(e,i,n,r){function o(t){return{inset:t,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var s=[],a=[],l=0;l<n.length||l<r.length;l++){var c=n[l]||o(r[l].inset),h=r[l]||o(n[l].inset);s.push(c),a.push(h)}return t.mergeNestedRepeated(e,i,s,a)}var o=r.bind(null,n,", ");t.addPropertiesHandler(i,o,["box-shadow","text-shadow"])}(e),function(t,e){function i(t){return t.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function n(t,e,i){return Math.min(e,Math.max(t,i))}function r(t){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t))return Number(t)}function o(t,e){return[t,e,i]}function s(t,e){if(0!=t)return l(0,1/0)(t,e)}function a(t,e){return[t,e,function(t){return Math.round(n(1,1/0,t))}]}function l(t,e){return function(r,o){return[r,o,function(r){return i(n(t,e,r))}]}}function c(t){var e=t.trim().split(/\s*[\s,]\s*/);if(0!==e.length){for(var i=[],n=0;n<e.length;n++){var o=r(e[n]);if(void 0===o)return;i.push(o)}return i}}function h(t,e){if(t.length==e.length)return[t,e,function(t){return t.map(i).join(" ")}]}function d(t,e){return[t,e,Math.round]}t.clamp=n,t.addPropertiesHandler(c,h,["stroke-dasharray"]),t.addPropertiesHandler(r,l(0,1/0),["border-image-width","line-height"]),t.addPropertiesHandler(r,l(0,1),["opacity","shape-image-threshold"]),t.addPropertiesHandler(r,s,["flex-grow","flex-shrink"]),t.addPropertiesHandler(r,a,["orphans","widows"]),t.addPropertiesHandler(r,d,["z-index"]),t.parseNumber=r,t.parseNumberList=c,t.mergeNumbers=o,t.numberToString=i}(e),function(t,e){function i(t,e){if("visible"==t||"visible"==e)return[0,1,function(i){return i<=0?t:i>=1?e:"visible"}]}t.addPropertiesHandler(String,i,["visibility"])}(e),function(t,e){function i(t){t=t.trim(),o.fillStyle="#000",o.fillStyle=t;var e=o.fillStyle;if(o.fillStyle="#fff",o.fillStyle=t,e==o.fillStyle){o.fillRect(0,0,1,1);var i=o.getImageData(0,0,1,1).data;o.clearRect(0,0,1,1);var n=i[3]/255;return[i[0]*n,i[1]*n,i[2]*n,n]}}function n(e,i){return[e,i,function(e){function i(t){return Math.max(0,Math.min(255,t))}if(e[3])for(var n=0;n<3;n++)e[n]=Math.round(i(e[n]/e[3]));return e[3]=t.numberToString(t.clamp(0,1,e[3])),"rgba("+e.join(",")+")"}]}var r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");r.width=r.height=1;var o=r.getContext("2d");t.addPropertiesHandler(i,n,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","fill","flood-color","lighting-color","outline-color","stop-color","stroke","text-decoration-color"]),t.consumeColor=t.consumeParenthesised.bind(null,i),t.mergeColors=n}(e),function(t,e){function i(t){function e(){var e=a.exec(t);s=e?e[0]:void 0}function i(){var t=Number(s);return e(),t}function n(){if("("!==s)return i();e();var t=o();return")"!==s?NaN:(e(),t)}function r(){for(var t=n();"*"===s||"/"===s;){var i=s;e();var r=n();"*"===i?t*=r:t/=r}return t}function o(){for(var t=r();"+"===s||"-"===s;){var i=s;e();var n=r();"+"===i?t+=n:t-=n}return t}var s,a=/([\+\-\w\.]+|[\(\)\*\/])/g;return e(),o()}function n(t,e){if("0"==(e=e.trim().toLowerCase())&&"px".search(t)>=0)return{px:0};if(/^[^(]*$|^calc/.test(e)){e=e.replace(/calc\(/g,"(");var n={};e=e.replace(t,(function(t){return n[t]=null,"U"+t}));for(var r="U("+t.source+")",o=e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+r,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),s=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],a=0;a<s.length;)s[a].test(o)?(o=o.replace(s[a],"$1"),a=0):a++;if("D"==o){for(var l in n){var c=i(e.replace(new RegExp("U"+l,"g"),"").replace(new RegExp(r,"g"),"*0"));if(!isFinite(c))return;n[l]=c}return n}}}function r(t,e){return o(t,e,!0)}function o(e,i,n){var r,o=[];for(r in e)o.push(r);for(r in i)o.indexOf(r)<0&&o.push(r);return e=o.map((function(t){return e[t]||0})),i=o.map((function(t){return i[t]||0})),[e,i,function(e){var i=e.map((function(i,r){return 1==e.length&&n&&(i=Math.max(i,0)),t.numberToString(i)+o[r]})).join(" + ");return e.length>1?"calc("+i+")":i}]}var s="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",a=n.bind(null,new RegExp(s,"g")),l=n.bind(null,new RegExp(s+"|%","g")),c=n.bind(null,/deg|rad|grad|turn/g);t.parseLength=a,t.parseLengthOrPercent=l,t.consumeLengthOrPercent=t.consumeParenthesised.bind(null,l),t.parseAngle=c,t.mergeDimensions=o;var h=t.consumeParenthesised.bind(null,a),d=t.consumeRepeated.bind(void 0,h,/^/),p=t.consumeRepeated.bind(void 0,d,/^,/);t.consumeSizePairList=p;var u=function(t){var e=p(t);if(e&&""==e[1])return e[0]},g=t.mergeNestedRepeated.bind(void 0,r," "),f=t.mergeNestedRepeated.bind(void 0,g,",");t.mergeNonNegativeSizePair=g,t.addPropertiesHandler(u,f,["background-size"]),t.addPropertiesHandler(l,r,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),t.addPropertiesHandler(l,o,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"])}(e),function(t,e){function i(e){return t.consumeLengthOrPercent(e)||t.consumeToken(/^auto/,e)}function n(e){var n=t.consumeList([t.ignore(t.consumeToken.bind(null,/^rect/)),t.ignore(t.consumeToken.bind(null,/^\(/)),t.consumeRepeated.bind(null,i,/^,/),t.ignore(t.consumeToken.bind(null,/^\)/))],e);if(n&&4==n[0].length)return n[0]}function r(e,i){return"auto"==e||"auto"==i?[!0,!1,function(n){var r=n?e:i;if("auto"==r)return"auto";var o=t.mergeDimensions(r,r);return o[2](o[0])}]:t.mergeDimensions(e,i)}function o(t){return"rect("+t+")"}var s=t.mergeWrappedNestedRepeated.bind(null,o,r,", ");t.parseBox=n,t.mergeBoxes=s,t.addPropertiesHandler(n,s,["clip"])}(e),function(t,e){function i(t){return function(e){var i=0;return t.map((function(t){return t===h?e[i++]:t}))}}function n(t){return t}function r(e){if("none"==(e=e.toLowerCase().trim()))return[];for(var i,n=/\s*(\w+)\(([^)]*)\)/g,r=[],o=0;i=n.exec(e);){if(i.index!=o)return;o=i.index+i[0].length;var s=i[1],a=u[s];if(!a)return;var l=i[2].split(","),c=a[0];if(c.length<l.length)return;for(var h=[],g=0;g<c.length;g++){var f,m=l[g],v=c[g];if(void 0===(f=m?{A:function(e){return"0"==e.trim()?p:t.parseAngle(e)},N:t.parseNumber,T:t.parseLengthOrPercent,L:t.parseLength}[v.toUpperCase()](m):{a:p,n:h[0],t:d}[v]))return;h.push(f)}if(r.push({t:s,d:h}),n.lastIndex==e.length)return r}}function o(t){return t.toFixed(6).replace(".000000","")}function s(e,i){if(e.decompositionPair!==i){e.decompositionPair=i;var n=t.makeMatrixDecomposition(e)}if(i.decompositionPair!==e){i.decompositionPair=e;var r=t.makeMatrixDecomposition(i)}return null==n[0]||null==r[0]?[[!1],[!0],function(t){return t?i[0].d:e[0].d}]:(n[0].push(0),r[0].push(1),[n,r,function(e){var i=t.quat(n[0][3],r[0][3],e[5]);return t.composeMatrix(e[0],e[1],e[2],i,e[4]).map(o).join(",")}])}function a(t){return t.replace(/[xy]/,"")}function l(t){return t.replace(/(x|y|z|3d)?$/,"3d")}function c(e,i){var n=t.makeMatrixDecomposition&&!0,r=!1;if(!e.length||!i.length){e.length||(r=!0,e=i,i=[]);for(var o=0;o<e.length;o++){var c=e[o].t,h=e[o].d,d="scale"==c.substr(0,5)?1:0;i.push({t:c,d:h.map((function(t){if("number"==typeof t)return d;var e={};for(var i in t)e[i]=d;return e}))})}}var p=function(t,e){return"perspective"==t&&"perspective"==e||("matrix"==t||"matrix3d"==t)&&("matrix"==e||"matrix3d"==e)},g=[],f=[],m=[];if(e.length!=i.length){if(!n)return;g=[(k=s(e,i))[0]],f=[k[1]],m=[["matrix",[k[2]]]]}else for(o=0;o<e.length;o++){var v=e[o].t,b=i[o].t,y=e[o].d,_=i[o].d,w=u[v],x=u[b];if(p(v,b)){if(!n)return;var k=s([e[o]],[i[o]]);g.push(k[0]),f.push(k[1]),m.push(["matrix",[k[2]]])}else{if(v==b)c=v;else if(w[2]&&x[2]&&a(v)==a(b))c=a(v),y=w[2](y),_=x[2](_);else{if(!w[1]||!x[1]||l(v)!=l(b)){if(!n)return;g=[(k=s(e,i))[0]],f=[k[1]],m=[["matrix",[k[2]]]];break}c=l(v),y=w[1](y),_=x[1](_)}for(var A=[],S=[],z=[],C=0;C<y.length;C++){k=("number"==typeof y[C]?t.mergeNumbers:t.mergeDimensions)(y[C],_[C]);A[C]=k[0],S[C]=k[1],z.push(k[2])}g.push(A),f.push(S),m.push([c,z])}}if(r){var E=g;g=f,f=E}return[g,f,function(t){return t.map((function(t,e){var i=t.map((function(t,i){return m[e][1][i](t)})).join(",");return"matrix"==m[e][0]&&16==i.split(",").length&&(m[e][0]="matrix3d"),m[e][0]+"("+i+")"})).join(" ")}]}var h=null,d={px:0},p={deg:0},u={matrix:["NNNNNN",[h,h,0,0,h,h,0,0,0,0,1,0,h,h,0,1],n],matrix3d:["NNNNNNNNNNNNNNNN",n],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",i([h,h,1]),n],scalex:["N",i([h,1,1]),i([h,1])],scaley:["N",i([1,h,1]),i([1,h])],scalez:["N",i([1,1,h])],scale3d:["NNN",n],skew:["Aa",null,n],skewx:["A",null,i([h,p])],skewy:["A",null,i([p,h])],translate:["Tt",i([h,h,d]),n],translatex:["T",i([h,d,d]),i([h,d])],translatey:["T",i([d,h,d]),i([d,h])],translatez:["L",i([d,d,h])],translate3d:["TTL",n]};t.addPropertiesHandler(r,c,["transform"]),t.transformToSvgMatrix=function(e){var i=t.transformListToMatrix(r(e));return"matrix("+o(i[0])+" "+o(i[1])+" "+o(i[4])+" "+o(i[5])+" "+o(i[12])+" "+o(i[13])+")"}}(e),function(t){function e(t){var e=Number(t);if(!(isNaN(e)||e<100||e>900||e%100!=0))return e}function i(e){return e=100*Math.round(e/100),400===(e=t.clamp(100,900,e))?"normal":700===e?"bold":String(e)}function n(t,e){return[t,e,i]}t.addPropertiesHandler(e,n,["font-weight"])}(e),function(t){function e(t){var e={};for(var i in t)e[i]=-t[i];return e}function i(e){return t.consumeToken(/^(left|center|right|top|bottom)\b/i,e)||t.consumeLengthOrPercent(e)}function n(e,n){var r=t.consumeRepeated(i,/^/,n);if(r&&""==r[1]){var o=r[0];if(o[0]=o[0]||"center",o[1]=o[1]||"center",3==e&&(o[2]=o[2]||{px:0}),o.length==e){if(/top|bottom/.test(o[0])||/left|right/.test(o[1])){var a=o[0];o[0]=o[1],o[1]=a}if(/left|right|center|Object/.test(o[0])&&/top|bottom|center|Object/.test(o[1]))return o.map((function(t){return"object"==typeof t?t:s[t]}))}}}function r(n){var r=t.consumeRepeated(i,/^/,n);if(r){for(var o=r[0],a=[{"%":50},{"%":50}],l=0,c=!1,h=0;h<o.length;h++){var d=o[h];"string"==typeof d?(c=/bottom|right/.test(d),a[l={left:0,right:0,center:l,top:1,bottom:1}[d]]=s[d],"center"==d&&l++):(c&&((d=e(d))["%"]=(d["%"]||0)+100),a[l]=d,l++,c=!1)}return[a,r[1]]}}function o(e){var i=t.consumeRepeated(r,/^,/,e);if(i&&""==i[1])return i[0]}var s={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},a=t.mergeNestedRepeated.bind(null,t.mergeDimensions," ");t.addPropertiesHandler(n.bind(null,3),a,["transform-origin"]),t.addPropertiesHandler(n.bind(null,2),a,["perspective-origin"]),t.consumePosition=r,t.mergeOffsetList=a;var l=t.mergeNestedRepeated.bind(null,a,", ");t.addPropertiesHandler(o,l,["background-position","object-position"])}(e),function(t){function e(e){var i=t.consumeToken(/^circle/,e);if(i&&i[0])return["circle"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0,/^\(/)),n,t.ignore(t.consumeToken.bind(void 0,/^at/)),t.consumePosition,t.ignore(t.consumeToken.bind(void 0,/^\)/))],i[1]));var o=t.consumeToken(/^ellipse/,e);if(o&&o[0])return["ellipse"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0,/^\(/)),r,t.ignore(t.consumeToken.bind(void 0,/^at/)),t.consumePosition,t.ignore(t.consumeToken.bind(void 0,/^\)/))],o[1]));var s=t.consumeToken(/^polygon/,e);return s&&s[0]?["polygon"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0,/^\(/)),t.optional(t.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),t.consumeSizePairList,t.ignore(t.consumeToken.bind(void 0,/^\)/))],s[1])):void 0}function i(e,i){if(e[0]===i[0])return"circle"==e[0]?t.mergeList(e.slice(1),i.slice(1),["circle(",t.mergeDimensions," at ",t.mergeOffsetList,")"]):"ellipse"==e[0]?t.mergeList(e.slice(1),i.slice(1),["ellipse(",t.mergeNonNegativeSizePair," at ",t.mergeOffsetList,")"]):"polygon"==e[0]&&e[1]==i[1]?t.mergeList(e.slice(2),i.slice(2),["polygon(",e[1],s,")"]):void 0}var n=t.consumeParenthesised.bind(null,t.parseLengthOrPercent),r=t.consumeRepeated.bind(void 0,n,/^/),o=t.mergeNestedRepeated.bind(void 0,t.mergeDimensions," "),s=t.mergeNestedRepeated.bind(void 0,o,",");t.addPropertiesHandler(e,i,["shape-outside"])}(e),function(t,e){function i(t,e){e.concat([t]).forEach((function(e){e in document.documentElement.style&&(n[t]=e),r[e]=t}))}var n={},r={};i("transform",["webkitTransform","msTransform"]),i("transformOrigin",["webkitTransformOrigin"]),i("perspective",["webkitPerspective"]),i("perspectiveOrigin",["webkitPerspectiveOrigin"]),t.propertyName=function(t){return n[t]||t},t.unprefixedPropertyName=function(t){return r[t]||t}}(e)}(),function(){if(void 0===document.createElement("div").animate([]).oncancel){if(window.performance&&performance.now)var t=function(){return performance.now()};else t=function(){return Date.now()};var e=function(t,e,i){this.target=t,this.currentTime=e,this.timelineTime=i,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=t,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()},i=window.Element.prototype.animate;window.Element.prototype.animate=function(n,r){var o=i.call(this,n,r);o._cancelHandlers=[],o.oncancel=null;var s=o.cancel;o.cancel=function(){s.call(this);var i=new e(this,null,t()),n=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout((function(){n.forEach((function(t){t.call(i.target,i)}))}),0)};var a=o.addEventListener;o.addEventListener=function(t,e){"function"==typeof e&&"cancel"==t?this._cancelHandlers.push(e):a.call(this,t,e)};var l=o.removeEventListener;return o.removeEventListener=function(t,e){if("cancel"==t){var i=this._cancelHandlers.indexOf(e);i>=0&&this._cancelHandlers.splice(i,1)}else l.call(this,t,e)},o}}}(),function(t){var e=document.documentElement,i=null,n=!1;try{var r="0"==getComputedStyle(e).getPropertyValue("opacity")?"1":"0";(i=e.animate({opacity:[r,r]},{duration:1})).currentTime=0,n=getComputedStyle(e).getPropertyValue("opacity")==r}catch(t){}finally{i&&i.cancel()}if(!n){var o=window.Element.prototype.animate;window.Element.prototype.animate=function(e,i){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&e[Symbol.iterator]&&(e=Array.from(e)),Array.isArray(e)||null===e||(e=t.convertToArrayForm(e)),o.call(this,e,i)}}}(t)}(),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host > ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      :host > ::slotted(:not(.iron-selected):not(.neon-animating))
       {
        display: none !important;
      }

      :host > ::slotted(.neon-animating) {
        pointer-events: none;
      }
    </style>

    <slot id="content"></slot>
  `,is:"neon-animated-pages",behaviors:[y,w,x],properties:{activateEvent:{type:String,value:""},animateInitialSelection:{type:Boolean,value:!1}},listeners:{"iron-select":"_onIronSelect","neon-animation-finish":"_onNeonAnimationFinish"},_onIronSelect:function(t){var e=t.detail.item;if(!(this.items.indexOf(e)<0)){var i=this._valueToItem(this._prevSelected)||!1;this._prevSelected=this.selected,i||this.animateInitialSelection?(this.animationConfig=[],this.entryAnimation?this.animationConfig.push({name:this.entryAnimation,node:e}):e.getAnimationConfig&&this.animationConfig.push({animatable:e,type:"entry"}),i&&(i.classList.contains("neon-animating")&&(this._squelchNextFinishEvent=!0,this.cancelAnimation(),this._completeSelectedChanged(),this._squelchNextFinishEvent=!1),this.exitAnimation?this.animationConfig.push({name:this.exitAnimation,node:i}):i.getAnimationConfig&&this.animationConfig.push({animatable:i,type:"exit"}),i.classList.add("neon-animating")),e.classList.add("neon-animating"),this.animationConfig.length>=1?this.isAttached?this.playAnimation(void 0,{fromPage:i,toPage:e}):this.async((function(){this.playAnimation(void 0,{fromPage:null,toPage:e})})):this._completeSelectedChanged(i,e)):this._completeSelectedChanged()}},_completeSelectedChanged:function(e,i){if(i&&i.classList.remove("neon-animating"),e&&e.classList.remove("neon-animating"),!i||!e)for(var n,r=t(this.$.content).getDistributedNodes(),o=0;n=r[o];o++)n.classList&&n.classList.remove("neon-animating");this.async(this._notifyPageResize)},_onNeonAnimationFinish:function(t){this._squelchNextFinishEvent?this._squelchNextFinishEvent=!1:this._completeSelectedChanged(t.detail.fromPage,t.detail.toPage)},_notifyPageResize:function(){var t=this.selectedItem||this._valueToItem(this.selected);this.resizerShouldNotify=function(e){return e==t},this.notifyResize()}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
  `,is:"neon-animatable",behaviors:[k,y]}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"cascaded-animation",behaviors:[A],configure:function(t){this._animations=[];var e=t.nodes,i=[],n=t.nodeDelay||50;t.timing=t.timing||{},t.timing.delay=t.timing.delay||0;for(var r,o,s=t.timing.delay,a=0;o=e[a];a++){t.timing.delay+=n,t.node=o;var l=document.createElement(t.animation);if(!l.isNeonAnimation){console.warn(this.is+":",t.animation,"not found!"),r=!0;break}var c=l.configure(t);this._animations.push(l),i.push(c)}if(t.timing.delay=s,t.node=null,!r)return this._effect=new GroupEffect(i),this._effect},complete:function(){for(var t,e=0;t=this._animations[e];e++)t.complete(t.config)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const cl=[A,{properties:{sharedElements:{type:Object}},findSharedElements:function(t){var e=t.fromPage,i=t.toPage;if(!e||!i)return console.warn(this.is+":",e?"toPage":"fromPage","is undefined!"),null;if(!e.sharedElements||!i.sharedElements)return console.warn(this.is+":","sharedElements are undefined for",e.sharedElements?i:e),null;var n=e.sharedElements[t.id],r=i.sharedElements[t.id];return n&&r?(this.sharedElements={from:n,to:r},this.sharedElements):(console.warn(this.is+":","sharedElement with id",t.id,"not found in",n?i:e),null)}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"hero-animation",behaviors:[cl],configure:function(t){var e=this.findSharedElements(t);if(e){var i=e.from.getBoundingClientRect(),n=e.to.getBoundingClientRect(),r=i.left-n.left,o=i.top-n.top,s=i.width/n.width,a=i.height/n.height;return this._effect=new KeyframeEffect(e.to,[{transform:"translate("+r+"px,"+o+"px) scale("+s+","+a+")"},{transform:"none"}],this.timingFromConfig(t)),this.setPrefixedProperty(e.to,"transformOrigin","0 0"),e.to.style.zIndex=1e4,e.from.style.visibility="hidden",this._effect}},complete:function(t){var e=this.findSharedElements(t);if(!e)return null;e.to.style.zIndex="",e.from.style.visibility=""}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"opaque-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"1"}],this.timingFromConfig(t)),e.style.opacity="0",this._effect},complete:function(t){t.node.style.opacity=""}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"ripple-animation",behaviors:[cl],configure:function(t){var e,i,n=this.findSharedElements(t);if(!n)return null;var r=n.to.getBoundingClientRect();if(t.gesture)e=t.gesture.x-(r.left+r.width/2),i=t.gesture.y-(r.top+r.height/2);else{var o=n.from.getBoundingClientRect();e=o.left+o.width/2-(r.left+r.width/2),i=o.top+o.height/2-(r.top+r.height/2)}var s="translate("+e+"px,"+i+"px)",a=Math.max(r.width+2*Math.abs(e),r.height+2*Math.abs(i)),l=Math.sqrt(2*a*a),c="scale("+l/r.width+","+l/r.height+")";return this._effect=new KeyframeEffect(n.to,[{transform:s+" scale(0)"},{transform:s+" "+c}],this.timingFromConfig(t)),this.setPrefixedProperty(n.to,"transformOrigin","50% 50%"),n.to.style.borderRadius="50%",this._effect},complete:function(){this.sharedElements&&(this.setPrefixedProperty(this.sharedElements.to,"transformOrigin",""),this.sharedElements.to.style.borderRadius="")}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"reverse-ripple-animation",behaviors:[cl],configure:function(t){var e,i,n=this.findSharedElements(t);if(!n)return null;var r=n.from.getBoundingClientRect();if(t.gesture)e=t.gesture.x-(r.left+r.width/2),i=t.gesture.y-(r.top+r.height/2);else{var o=n.to.getBoundingClientRect();e=o.left+o.width/2-(r.left+r.width/2),i=o.top+o.height/2-(r.top+r.height/2)}var s="translate("+e+"px,"+i+"px)",a=Math.max(r.width+2*Math.abs(e),r.height+2*Math.abs(i)),l=Math.sqrt(2*a*a),c="scale("+l/r.width+","+l/r.height+")";return this._effect=new KeyframeEffect(n.from,[{transform:s+" "+c},{transform:s+" scale(0)"}],this.timingFromConfig(t)),this.setPrefixedProperty(n.from,"transformOrigin","50% 50%"),n.from.style.borderRadius="50%",this._effect},complete:function(){this.sharedElements&&(this.setPrefixedProperty(this.sharedElements.from,"transformOrigin",""),this.sharedElements.from.style.borderRadius="")}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"scale-down-animation",behaviors:[A],configure:function(t){var e=t.node,i="scale(0, 0)";return"x"===t.axis?i="scale(0, 1)":"y"===t.axis&&(i="scale(1, 0)"),this._effect=new KeyframeEffect(e,[{transform:"scale(1,1)"},{transform:i}],this.timingFromConfig(t)),t.transformOrigin&&this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"scale-up-animation",behaviors:[A],configure:function(t){var e=t.node,i="scale(0)";return"x"===t.axis?i="scale(0, 1)":"y"===t.axis&&(i="scale(1, 0)"),this._effect=new KeyframeEffect(e,[{transform:i},{transform:"scale(1, 1)"}],this.timingFromConfig(t)),t.transformOrigin&&this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-from-left-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translateX(-100%)"},{transform:"none"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-from-right-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translateX(100%)"},{transform:"none"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-from-top-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translateY(-100%)"},{transform:"translateY(0%)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-from-bottom-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translateY(100%)"},{transform:"translateY(0)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-left-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"none"},{transform:"translateX(-100%)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-right-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"none"},{transform:"translateX(100%)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-up-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translate(0)"},{transform:"translateY(-100%)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"slide-down-animation",behaviors:[A],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translateY(0%)"},{transform:"translateY(100%)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({is:"transform-animation",behaviors:[A],configure:function(t){var e=t.node,i=t.transformFrom||"none",n=t.transformTo||"none";return this._effect=new KeyframeEffect(e,[{transform:i},{transform:n}],this.timingFromConfig(t)),t.transformOrigin&&this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin),this._effect}});class hl extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},odds:{type:Array},name:{type:String},odd:{type:String,notify:!0}})}constructor(){super(),this.label="document.selectODD",this.odds=[]}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onTargetUpdate.bind(this))}firstUpdated(){super.firstUpdated(),B("pb-page-ready",()=>{this._refresh()})}render(){return I`
            <paper-dropdown-menu id="menu" label="${W(this.label)}" name="${this.name}">
                <paper-listbox id="odds" slot="dropdown-content" class="dropdown-content" selected="${this.odd}"
                    attr-for-selected="value" @selected-item-changed="${this._selected}">
                    ${this.odds.map(t=>I`<paper-item value="${t.name}">${t.label}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>

            <iron-ajax
                id="load"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._update}"></iron-ajax>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            paper-dropdown-menu {
                --paper-listbox-background-color: white;
                width: 100%;
            }
        `}_selected(){const t=this.shadowRoot.getElementById("odds").selected;if(t===this.odd)return;this.odd=t,console.log("<pb-select-odd> Switching to ODD %s",this.odd);const e=this.getDocument();e&&(e.odd=this.odd),En.commit(this,{odd:this.odd}),this.emitTo("pb-refresh",{odd:this.odd})}_refresh(){const t=this.shadowRoot.getElementById("load");this.minApiVersion("1.0.0")?t.url=this.getEndpoint()+"/api/odd":t.url=this.getEndpoint()+"/modules/lib/components-list-odds.xql",t.params={odd:this.odd},t.generateRequest()}_update(){const t=this.shadowRoot.getElementById("load");this.odds=t.lastResponse}_onTargetUpdate(t){let e=t.detail.data.odd;e&&(e=e.replace(/^(.*?)\.[^\.]+$/,"$1")),e!==this.odd&&console.log("<pb-select-odd> Set current ODD from %s to %s",this.odd,e),this.odd=e}}customElements.define("pb-select-odd",hl);class dl extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},template:{type:String},_templates:{type:Array}})}constructor(){super(),this.label="document.selectTemplate",this._templates=[]}firstUpdated(){B("pb-page-ready",t=>{this.template=t.template;const e=this.shadowRoot.getElementById("getTemplates");this.minApiVersion("1.0.0")?e.url=t.endpoint+"/api/templates":e.url=t.endpoint+"/modules/lib/components-list-templates.xql",e.generateRequest()})}render(){return I`
            <paper-dropdown-menu id="menu" label="${W(this.label)}" name="${this.name}">
                <paper-listbox id="templates" slot="dropdown-content" class="dropdown-content" 
                    selected="${this.template}" attr-for-selected="value"
                    @selected-item-changed="${this._selected}">
                ${this._templates.map(t=>I`<paper-item value="${t.name}">${t.title}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>

            <iron-ajax id="getTemplates" with-credentials
                handle-as="json" @response="${this._handleTemplatesResponse}"
                method="GET"></iron-ajax>
        `}static get styles(){return R`
            :host {
                display: block;
            }
            paper-dropdown-menu {
                --paper-listbox-background-color: white;
                width: 100%;
            }
        `}_selected(){const t=this.shadowRoot.getElementById("templates").selected;t!==this.template&&(En.replace(this,{template:t}),window.location.reload())}_handleTemplatesResponse(){const t=this.shadowRoot.getElementById("getTemplates");this._templates=t.lastResponse}}customElements.define("pb-select-template",dl);class pl extends pn{static get properties(){return Object.assign(Object.assign({},super.properties),{},{longitude:{type:Number},latitude:{type:Number},label:{type:String},event:{type:String},zoom:{type:Number},auto:{type:Boolean}})}constructor(){super(),this.event="mouseover",this.auto=!1,this.zoom=null}connectedCallback(){super.connectedCallback(),this.event&&this.addEventListener(this.event,()=>this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,zoom:this.zoom,popup:this.popup,element:this,event:this.event})),this.auto&&this.waitForChannel(()=>{this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,popup:this.popup,fitBounds:!0,element:this})})}render(){return I`<span id="content"><slot></slot></span>`}get popup(){const t=this.querySelector("template");if(t){const e=document.createElement("div");return e.appendChild(t.content.cloneNode(!0)),e}return null}static get styles(){return R`
            :host {
                display: inline;
                cursor: pointer;
            }

            [name="popup"] {
                display: none;
            }

            @keyframes keyFrameBackgroundColorIn {
                0% {
                    background-color: inherit;
                }
                100% {
                    background-color: var(--pb-highlight-color, #F9E976);
                }
            }

            #content {
                display: inline;
            }

            .highlight-on {
                background-color: var(--pb-highlight-color, #F9E976);
                animation-name: keyFrameBackgroundColorIn;
                animation-duration: 500ms;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;

            }

            .highlight-off {
                background-color: inherit;
            }
        `}}customElements.define("pb-geolocation",pl);class ul extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{initial:{type:Number},_instances:{type:Array}})}constructor(){super(),this.initial=1,this._instances=[]}connectedCallback(){super.connectedCallback(),this.template=this.querySelector("template");const t=En.state;if(this._computeInitial(t),0===this._instances.length)for(let e=0;e<this.initial;e++)this._add(t)}_computeInitial(t){const e=Object.keys(t).filter(t=>/\[\d+\]$/.test(t)).sort();if(e.length>0){const t=e[e.length-1].replace(/^.*\[(\d+)\]$/,"$1");this.initial=parseInt(t,10)}}setData(t){this._instances=[],this._computeInitial(t);for(let e=0;e<this.initial;e++)this._add(t);this.requestUpdate()}add(){this._add(),this.requestUpdate()}_add(t){const e=this._instances.length+1,i=document.importNode(this.template.content,!0),n=document.createElement("div");n.appendChild(i),n.querySelectorAll("[name]").forEach(i=>{const n=void 0===i.name?`${i.attributes.getNamedItem("name").nodeValue}[${e}]`:`${i.name}[${e}]`;t&&t[n]&&("checkbox"===i.type||"radio"===i.type?i.checked=t[n]===i.value:i.value=t[n]),i.name=n}),this._instances.push(n)}_renumber(){this._instances.forEach((t,e)=>{t.querySelectorAll("[name]").forEach(t=>{const i=t.name.replace(/^(.*)\[\d+\]$/,"$1");t.name=`${i}[${e+1}]`})})}delete(t){this._instances.splice(t,1),this._renumber(),this.requestUpdate()}render(){return I`
            <div class="instances">${this._instances.map(this.renderInstance.bind(this))}</div>
            <paper-icon-button icon="add" @click="${this.add}"></paper-icon-button>
        `}renderInstance(t,e){return I`
            <div class="instance">
                ${t}
                <paper-icon-button icon="delete" @click="${()=>this.delete(e)}"></paper-icon-button>
            </div>`}createRenderRoot(){return this}}customElements.define("pb-repeat",ul);class gl extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String}})}constructor(){super(),this._pan=null}connectedCallback(){super.connectedCallback(),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("svg-pan-zoom","https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"),this.subscribeTo("pb-show-annotation",t=>{this.url!==t.detail.file&&(this.url=t.detail.file)})}firstUpdated(){super.firstUpdated(),this.container=this.shadowRoot.getElementById("image")}updated(t){t.has("url")&&this.url&&this.url!==t.get("url")&&this.load()}load(){if(!this.url)return;const t=this.toAbsoluteURL(this.url);console.log("<pb-svg> Loading %s",t),this._pan&&(this._pan.destroy(),this._pan=null,this.container.innerHTML=""),fetch(t).then(t=>t.text()).then(t=>{if(!window.svgPanZoom)return void console.error("<pb-svg> svgPanZoom not available");const e=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;this.container.appendChild(e),this._pan=window.svgPanZoom(e,{controlIconsEnabled:!0,fit:!0,center:!0})})}render(){return I`<div id="image"></div>`}static get styles(){return R`
            :host {
                display: block;
            }

            #image svg {
                height: var(--pb-svg-height, 100%);
                width: var(--pb-svg-width, 100%);
            }
        `}}customElements.define("pb-svg",gl);class fl extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{showNavigationControl:{type:Boolean,attribute:"show-navigation-control"},showNavigator:{type:Boolean,attribute:"show-navigator"},showSequenceMode:{type:Boolean,attribute:"show-sequence-control"},showHomeControl:{type:Boolean,attribute:"show-home-control"},showFullPageControl:{type:Boolean,attribute:"show-full-page-control"},showDownloadButton:{type:Boolean,attribute:"show-download-control"},defaultZoomLevel:{type:Number,attribute:"default-zoom-level"},showRotationControl:{type:Boolean,attribute:"show-rotation-control"},constrainDuringPan:{type:Boolean,attribute:"contrain-during-pan"},visibilityRatio:{type:Number,attribute:"visibility-ratio"},referenceStrip:{type:Boolean,attribute:"reference-strip"},referenceStripSizeRatio:{type:Number,attribute:"reference-strip-size-ratio"},type:{type:String},baseUri:{type:String,attribute:"base-uri"},prefixUrl:{type:String,attribute:"prefix-url"},facsimiles:{type:Array},loaded:{type:Boolean,reflect:!0},crossOriginPolicy:{type:String,attribute:"cors"}})}constructor(){super(),this._facsimiles=[],this.baseUri="",this.crossOriginPolicy="anonymous",this.type="iiif",this.visibilityRatio=1,this.defaultZoomLevel=0,this.sequenceMode=!1,this.showHomeControl=!1,this.showNavigator=!1,this.showNavigationControl=!1,this.showFullPageControl=!1,this.showRotationControl=!1,this.showDownloadButton=!1,this.constrainDuringPan=!1,this.referenceStrip=!1,this.referenceStripSizeRatio=.2,this.prefixUrl="../images/openseadragon/",this.loaded=!1}set facsimiles(t){this._facsimiles=t||[],this.loaded=this._facsimiles.length>0,this.emitTo("pb-facsimile-status",{status:"loading"})}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._clearAll.bind(this)),this.subscribeTo("pb-load-facsimile",t=>{const{element:e,order:i}=t.detail,n=this._facsimiles.map(t=>t.getOrder?t.getOrder():Number.POSITIVE_INFINITY).reduce((t,e,n)=>i<e?t:i===e?n:n+1,0);this._facsimiles.splice(n,0,e),this.loaded=this._facsimiles.length>0,this._facsimileObserver()}),this.subscribeTo("pb-show-annotation",this._showAnnotationListener.bind(this))}firstUpdated(){try{window.ESGlobalBridge.requestAvailability();const t=P("../lib/openseadragon.min.js");window.ESGlobalBridge.instance.load("openseadragon",t),window.addEventListener("es-bridge-openseadragon-loaded",this._initOpenSeadragon.bind(this),{once:!0})}catch(t){console.error(t.message)}}render(){return I`
            <slot name="before"></slot>
            <!-- Openseadragon -->

            <div id="viewer" part="image"></div>
            <slot name="after"></slot>
            ${this.showDownloadButton?I`<a id="downloadBtn" title="Download">&#8676;</a>`:""}

        `}static get styles(){return R`
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
            #downloadBtn{
                position: absolute;
                z-index: 100;
                bottom:0.25rem;
                width:1.35rem;
                height:1.35rem;
                transform:rotate(-90deg);
                cursor: pointer;
                border: thin solid #D7DDE8;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:0.75rem;
                background-image:linear-gradient(to left, #fafafa 0%, #D7DDE8  51%, #bbbbbb  100%);
                font-size:1.2rem;
                box-shadow: -2px 1px 5px 0px rgba(0,0,0,0.75);
            }
            #downloadBtn:hover{
                background-image:radial-gradient( white, #efefef);
            }
        `}_initOpenSeadragon(){const t=P(this.prefixUrl+(this.prefixUrl.endsWith("/")?"":"/")),e={element:this.shadowRoot.getElementById("viewer"),prefixUrl:t,preserveViewport:!0,showZoomControl:!0,sequenceMode:this.showSequenceMode,showHomeControl:this.showHomeControl,showFullPageControl:this.showFullPageControl,showNavigator:this.showNavigator,showNavigationControl:this.showNavigationControl,showRotationControl:this.showRotationControl,autoHideControls:!1,visibilityRatio:1,minZoomLevel:1,defaultZoomLevel:this.defaultZoomLevel,constrainDuringPan:!0,crossOriginPolicy:this.crossOriginPolicy};this.referenceStrip&&(e.showReferenceStrip=!0,e.referenceStripSizeRatio=this.referenceStripSizeRatio),this.viewer=OpenSeadragon(e),this.viewer.addHandler("open",()=>{this.resetZoom(),this.emitTo("pb-facsimile-status",{status:"loaded",facsimiles:this._facsimiles})}),this.viewer.addHandler("open-failed",t=>{console.error("<pb-facsimile> open failed: %s",t.message),this.loaded=!1,this.emitTo("pb-facsimile-status",{status:"fail"})});const i=this.shadowRoot.querySelector("#downloadBtn");this.showDownloadButton&&i.addEventListener("click",t=>{t.preventDefault();const e=this.viewer.drawer.canvas.toDataURL("image/png"),i=document.createElement("a");i.href=e,i.download="download",i.click()}),this.ownerPage=document.querySelector("pb-page"),this.ownerPage&&(this.pbPageDisplay=window.getComputedStyle(this.ownerPage).getPropertyValue("display"),this.viewer.addHandler("full-screen",t=>{t.fullScreen?this.ownerPage.style.display="none":(this.viewer.clearOverlays(),this.emitTo("pb-refresh"),this.ownerPage.style.display=this.pbPageDisplay)})),this._facsimileObserver(),this.signalReady()}_facsimileObserver(){if(!this.viewer)return;if(0===this._facsimiles.length)return this.viewer.close();const t=this._facsimiles.map(t=>{const e=this.baseUri+(t.getImage?t.getImage():t);return"iiif"===this.type?e+"/info.json":{tileSource:{type:"image",url:e,buildPyramid:!1}}});this.viewer.open(t),this.viewer.goToPage(0)}_clearAll(){this.viewer&&(this.resetZoom(),this.viewer.clearOverlays(),this.facsimiles=[])}_showAnnotationListener(t){if(!this.viewer)return;const e="runtime-overlay";if(this.viewer.removeOverlay(this.overlay),!t.detail.file||0===t.detail.file)return console.error("file missing",t.detail);if(t.detail.coordinates&&(!t.detail.coordinates[0]||4!==t.detail.coordinates.length))return console.error("coords incomplete or missing",t.detail);const i=t.detail.element?this._pageByElement(t.detail.element):this._pageIndexByUrl(t.detail.file);if(i<0)return console.error("page not found",t.detail);if(this.viewer.currentPage()!==i&&this.viewer.goToPage(i),t.detail.coordinates){const[i,n,r,o]=t.detail.coordinates,s=this.viewer.world.getItemAt(0),a=s.viewportToImageRectangle(s.getBounds(!0));a.containsPoint(new OpenSeadragon.Point(i,n))||this.viewer.viewport.fitBoundsWithConstraints(s.imageToViewportRectangle(i,n,a.width,a.height));const l=document.createElement("div");this.overlay=l,l.id=e;const c=s.imageToViewportRectangle(i,n,r,o);this.viewer.addOverlay({element:l,location:c})}}_pageByElement(t){return this._facsimiles.indexOf(t)}_pageIndexByUrl(t){return this._facsimiles.findIndex(e=>e.getImage()===t)}resetZoom(){this.viewer&&this.viewer.viewport.goHome()}}customElements.get("pb-facsimile")||customElements.define("pb-facsimile",fl);class ml extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{endpoint:{type:String},label:{type:String},endpoints:{type:Array},auto:{type:Boolean}})}constructor(){super(),this.endpoints=[],this.label="dts.endpoint"}connectedCallback(){super.connectedCallback(),this.endpoint=En.state.endpoint}updated(t){if(super.updated(),t.has("endpoints")){!this.shadowRoot.getElementById("endpoints").selectedItem&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url)}}render(){return I`
            <paper-dropdown-menu id="menu" label="${W(this.label)}">
                <paper-listbox id="endpoints" slot="dropdown-content" class="dropdown-content" selected="${this.endpoint}" attr-for-selected="value"
                    @selected-item-changed="${this._selected}">
                    ${this.endpoints.map(t=>I`<paper-item value="${t.url?t.url:""}">${t.title}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>
        `}static get styles(){return R`
            :host {
                display: block;
            }
        `}_selected(){const t=this.shadowRoot.getElementById("endpoints").selectedItem;if(!t)return;const e=t.getAttribute("value");if(!e)return;const i=this.endpoints.find(t=>t.url===e);En.commit(this,{endpoint:i.url}),console.log("<dts-select-endpoint> Setting endpoint to %s",e),this.emitTo("dts-endpoint",{endpoint:i.url,collection:i.collection,reload:!this.endpoint}),this.endpoint=i.url}}customElements.define("dts-select-endpoint",ml);class vl extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{baseUri:{type:String},data:{type:Object},collection:{type:String},page:{type:Number},perPage:{type:Number},_collectionEndpoint:{type:String}})}constructor(){super(),this._parentCollections=[],this.collection="default"}connectedCallback(){super.connectedCallback(),this.collection=En.state.id,this.page=En.state.page,this.subscribeTo("dts-endpoint",t=>{this._setEndpoint(t.detail.endpoint,t.detail.collection,t.detail.reload)}),this.subscribeTo("pb-load",t=>{this.page=t.detail.params.page,console.log("<dts-client> Loading page %d",this.page),this._update()})}firstUpdated(){super.firstUpdated(),this.queryAPI=this.shadowRoot.getElementById("queryAPI"),this.documentsAPI=this.shadowRoot.getElementById("documentsAPI"),this.signalReady()}_setEndpoint(t,e,i){i||(this.page=null),this.collection=e,this._configureEndpoint(t),this.baseUri=t}_configureEndpoint(t){t&&(console.log("<dts-client> initializing connection to endpoint %s",t),this.emitTo("pb-start-update"),this.queryAPI.url=t,this.queryAPI.generateRequest())}_navigate(t,e,i=!0){t.preventDefault(),i&&this._parentCollections.push(this.collection),this.collection=e&&"object"==typeof e?e["@id"]:e,this.page=null,console.log("<dts-client> navigating to collection %s",this.collection),this._update()}_navigateUp(t){0!==this._parentCollections.length&&this._navigate(t,this._parentCollections.pop(),!1)}_preview(t,e){t.preventDefault(),this.emitTo("pb-start-update");const i=e["dts:passage"]||e["dts:download"],n=new URL(i,this.baseUri).toString();console.log("<dts-client> downloading %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=this.getEndpoint()+"/modules/lib/dts.xql",this.documentsAPI.params={preview:n,id:e["@id"]}):(this.documentsAPI.url=this.getEndpoint()+"/api/dts/import",this.documentsAPI.params={uri:n,temp:!0}),this.documentsAPI.generateRequest()}_download(t,e){this.emitTo("pb-start-update");const i=e["dts:passage"]||e["dts:download"],n=new URL(i,this.baseUri).toString();console.log("<dts-client> importing %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=this.getEndpoint()+"/modules/lib/dts.xql",this.documentsAPI.params={import:n,id:e["@id"]}):(this.documentsAPI.url=this.getEndpoint()+"/api/dts/import",this.documentsAPI.params={uri:n,temp:!1}),this.documentsAPI.generateRequest()}_update(){this.emitTo("pb-start-update");const t={};this.collection&&(t.id=this.collection),this.page&&(t.page=this.page+1),En.commit(this,t),this.queryAPI.params=t,this.queryAPI.url=this._collectionEndpoint,this.queryAPI.generateRequest()}_handleResponse(){const t=this.queryAPI.lastResponse;"EntryPoint"===t["@type"]?(this._collectionEndpoint=new URL(t.collections,this.baseUri).toString(),console.log("<dts-client> configured collection endpoint: %s",this._collectionEndpoint),this._update()):(this.data=t,console.log("<dts-client> received collection data: %o",t),!this.page&&t.totalItems>t.member.length&&(this.perPage=t.member.length),this.emitTo("pb-results-received",{start:this.page&&this.page>0?this.page*this.perPage+1:1,count:t.totalItems})),this.emitTo("pb-end-update")}_handlePreview(){const t=this.documentsAPI.lastResponse;this.emitTo("pb-end-update");const e=new URL(t.path,window.location.href);window.location.replace(e)}_handleError(t){this.emitTo("pb-end-update");const e=t.target.lastError.response,i=(new DOMParser).parseFromString(e,"application/xml").querySelector("message"),n=document.getElementById("errorDialog"),r=n.querySelector("paper-dialog-scrollable");r.innerHTML=i?i.textContent:t.detail.error.message,n.open()}static _getCreator(t){const e=t["dts:dublincore"];return e?e["dc:creator"]:null}static _getLicense(t){const e=t["dts:dublincore"];return e?e["dc:license"]:null}render(){return I`
            <slot name="toolbar"></slot>
            ${this.baseUri?this._renderClient():""}
            
            <iron-ajax
                id="queryAPI"
                verbose
                handle-as="json"
                method="get"
                @response="${this._handleResponse}"
                @error="${this._handleError}"></iron-ajax>
            <iron-ajax
                id="documentsAPI"
                verbose
                handle-as="json"
                method="get"
                @response="${this._handlePreview}"
                @error="${this._handleError}"></iron-ajax>
        `}_renderClient(){return I`
            <div class="uri">${this.baseUri}</div>
            <h3 part="collection-title">${this.data?this.data.title:"Loading ..."}</h3>
            <slot name="pagination"></slot>
            ${this._parentCollections.length>0||this.collection?I`
                        <paper-button part="parent-link" @click="${this._navigateUp}">
                            <iron-icon icon="icons:arrow-upward"></iron-icon>
                            ${W("browse.up")}
                        </paper-button>`:null}
            ${this.data?this._renderMembers():""}
        `}_renderMembers(){const t=[];return this.data.member.forEach(e=>{t.push(I`<div class="member">${this._renderMember(e)}</div>`)}),t}_renderMember(t){if("Collection"===t["@type"])return I`
                <iron-icon icon="icons:folder-open"></iron-icon>
                <div class="details">
                    <a href="#" @click="${e=>this._navigate(e,t)}" part="link">
                        <h4 class="collection" part="collection-title">
                            ${t.title}
                        </h4>
                    </a>
                </div>
            `;const e=vl._getLicense(t);return I`
            <iron-icon icon="icons:code"></iron-icon>
            <div class="details">
                <div>
                    <a href="#" @click="${e=>this._preview(e,t)}" part="link">
                        <h4 part="title">
                            ${t.title}
                        </h4>
                    </a>
                    <p part="creator" class="creator">${vl._getCreator(t)}</p>
                    ${e?I`<p part="license" class="license"><a href="${e}">${W("dts.licence")}</a></p>`:""}
                </div>
                <iron-icon title="${W("dts.import")}" icon="icons:file-download" 
                    @click="${e=>this._download(e,t)}">
                </iron-icon>
            </div>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            .uri {
                color: #607d8a;
                margin-top: 12px;
                font-weight: bold;
            }
            h3 {
                margin-top: 0;
            }
            .member {
                display: flex;
            }
            .member .details {
                flex: 2;
                margin-left: 20px;
                display: flex;
                justify-content: space-between;
            }
            .member iron-icon {
                width: 24px;
            }
            .member h4 {
                margin: 0;
            }
            .member h4.collection {
                margin-bottom: 10px;
            }
            [name='toolbar'] {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #f6a622;
                font-size: 85%;
            }
        `}}customElements.define("dts-client",vl);class bl extends V{static get properties(){return Object.assign(Object.assign({},super.properties),{},{user:{type:String},hash:{type:String},height:{type:Number},theme:{type:String},preview:{type:Boolean},editable:{type:Boolean}})}constructor(){super(),this.height=256,this.theme="light"}render(){let t=`height=${this.height}&theme-id=${this.theme}&default-tab=html,result`;this.editable&&(t+="&editable=true");const e=`https://codepen.io/${this.user}/embed/${this.preview?"preview/":""}${this.hash}?${t}`;return I`
            <iframe height="${this.height}" scrolling="no" title="${this.labe}l" 
                src="${e}" frameborder="no" allowtransparency="true" allowfullscreen>
                Loading codepen ...
            </iframe>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            iframe {
                width: 100%;
            }
        `}}customElements.define("pb-codepen",bl),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).marked=e()}(void 0,(function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}function i(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function o(t){var e={exports:{}};return t(e,e.exports),e.exports}var s=o((function(t){function e(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function i(e){t.exports.defaults=e}t.exports={defaults:e(),getDefaults:e,changeDefaults:i}})),a=/[&<>"']/,l=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,h=/[<>"']|&(?!#?\w+;)/g,d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=function(t){return d[t]};function u(t,e){if(e){if(a.test(t))return t.replace(l,p)}else if(c.test(t))return t.replace(h,p);return t}var g=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function f(t){return t.replace(g,(function(t,e){return"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""}))}var m=/(^|[^\[])\^/g;function v(t,e){t=t.source||t,e=e||"";var i={replace:function(e,n){return n=(n=n.source||n).replace(m,"$1"),t=t.replace(e,n),i},getRegex:function(){return new RegExp(t,e)}};return i}var b=/[^\w:]/g,y=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function _(t,e,i){if(t){var n;try{n=decodeURIComponent(f(i)).replace(b,"").toLowerCase()}catch(t){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}e&&!y.test(i)&&(i=S(e,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(t){return null}return i}var w={},x=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,A=/^([^:]+:\/*[^/]*)[\s\S]*$/;function S(t,e){w[" "+t]||(x.test(t)?w[" "+t]=t+"/":w[" "+t]=E(t,"/",!0));var i=-1===(t=w[" "+t]).indexOf(":");return"//"===e.substring(0,2)?i?e:t.replace(k,"$1")+e:"/"===e.charAt(0)?i?e:t.replace(A,"$1")+e:t+e}function z(t){for(var e,i,n=1;n<arguments.length;n++)for(i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}function C(t,e){var i=t.replace(/\|/g,(function(t,e,i){for(var n=!1,r=e;--r>=0&&"\\"===i[r];)n=!n;return n?"|":" |"})).split(/ \|/),n=0;if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;n<i.length;n++)i[n]=i[n].trim().replace(/\\\|/g,"|");return i}function E(t,e,i){var n=t.length;if(0===n)return"";for(var r=0;r<n;){var o=t.charAt(n-r-1);if(o!==e||i){if(o===e||!i)break;r++}else r++}return t.substr(0,n-r)}function T(t,e){if(-1===t.indexOf(e[1]))return-1;for(var i=t.length,n=0,r=0;r<i;r++)if("\\"===t[r])r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&--n<0)return r;return-1}function L(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function M(t,e){if(e<1)return"";for(var i="";e>1;)1&e&&(i+=t),e>>=1,t+=t;return i+t}var O={escape:u,unescape:f,edit:v,cleanUrl:_,resolveUrl:S,noopTest:{exec:function(){}},merge:z,splitCells:C,rtrim:E,findClosingBracket:T,checkSanitizeDeprecation:L,repeatString:M},$=s.defaults,H=O.rtrim,I=O.splitCells,R=O.escape,P=O.findClosingBracket;function V(t,e,i){var n=e.href,r=e.title?R(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");return"!"!==t[0].charAt(0)?{type:"link",raw:i,href:n,title:r,text:o}:{type:"image",raw:i,href:n,title:r,text:R(o)}}function D(t,e){var i=t.match(/^(\s+)(?:```)/);if(null===i)return e;var n=i[1];return e.split("\n").map((function(t){var e=t.match(/^\s+/);return null===e?t:e[0].length>=n.length?t.slice(n.length):t})).join("\n")}var N=function(){function t(t){this.options=t||$}var e=t.prototype;return e.space=function(t){var e=this.rules.block.newline.exec(t);if(e)return e[0].length>1?{type:"space",raw:e[0]}:{raw:"\n"}},e.code=function(t,e){var i=this.rules.block.code.exec(t);if(i){var n=e[e.length-1];if(n&&"paragraph"===n.type)return{raw:i[0],text:i[0].trimRight()};var r=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?r:H(r,"\n")}}},e.fences=function(t){var e=this.rules.block.fences.exec(t);if(e){var i=e[0],n=D(i,e[3]||"");return{type:"code",raw:i,lang:e[2]?e[2].trim():e[2],text:n}}},e.heading=function(t){var e=this.rules.block.heading.exec(t);if(e){var i=e[2].trim();if(/#$/.test(i)){var n=H(i,"#");this.options.pedantic?i=n.trim():n&&!/ $/.test(n)||(i=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:i}}},e.nptable=function(t){var e=this.rules.block.nptable.exec(t);if(e){var i={type:"table",header:I(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[],raw:e[0]};if(i.header.length===i.align.length){var n,r=i.align.length;for(n=0;n<r;n++)/^ *-+: *$/.test(i.align[n])?i.align[n]="right":/^ *:-+: *$/.test(i.align[n])?i.align[n]="center":/^ *:-+ *$/.test(i.align[n])?i.align[n]="left":i.align[n]=null;for(r=i.cells.length,n=0;n<r;n++)i.cells[n]=I(i.cells[n],i.header.length);return i}}},e.hr=function(t){var e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}},e.blockquote=function(t){var e=this.rules.block.blockquote.exec(t);if(e){var i=e[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:e[0],text:i}}},e.list=function(t){var e=this.rules.block.list.exec(t);if(e){var i,n,r,o,s,a,l,c,h=e[0],d=e[2],p=d.length>1,u={type:"list",raw:h,ordered:p,start:p?+d.slice(0,-1):"",loose:!1,items:[]},g=e[0].match(this.rules.block.item),f=!1,m=g.length;r=this.rules.block.listItemStart.exec(g[0]);for(var v=0;v<m;v++){if(h=i=g[v],v!==m-1){if(o=this.rules.block.listItemStart.exec(g[v+1]),this.options.pedantic?o[1].length>r[1].length:o[1].length>r[0].length||o[1].length>3){g.splice(v,2,g[v]+"\n"+g[v+1]),v--,m--;continue}(!this.options.pedantic||this.options.smartLists?o[2][o[2].length-1]!==d[d.length-1]:p===(1===o[2].length))&&(s=g.slice(v+1).join("\n"),u.raw=u.raw.substring(0,u.raw.length-s.length),v=m-1),r=o}n=i.length,~(i=i.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(n-=i.length,i=this.options.pedantic?i.replace(/^ {1,4}/gm,""):i.replace(new RegExp("^ {1,"+n+"}","gm"),"")),a=f||/\n\n(?!\s*$)/.test(i),v!==m-1&&(f="\n"===i.charAt(i.length-1),a||(a=f)),a&&(u.loose=!0),this.options.gfm&&(c=void 0,(l=/^\[[ xX]\] /.test(i))&&(c=" "!==i[1],i=i.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:h,task:l,checked:c,loose:a,text:i})}return u}},e.html=function(t){var e=this.rules.block.html.exec(t);if(e)return{type:this.options.sanitize?"paragraph":"html",raw:e[0],pre:!this.options.sanitizer&&("pre"===e[1]||"script"===e[1]||"style"===e[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):R(e[0]):e[0]}},e.def=function(t){var e=this.rules.block.def.exec(t);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}},e.table=function(t){var e=this.rules.block.table.exec(t);if(e){var i={type:"table",header:I(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[]};if(i.header.length===i.align.length){i.raw=e[0];var n,r=i.align.length;for(n=0;n<r;n++)/^ *-+: *$/.test(i.align[n])?i.align[n]="right":/^ *:-+: *$/.test(i.align[n])?i.align[n]="center":/^ *:-+ *$/.test(i.align[n])?i.align[n]="left":i.align[n]=null;for(r=i.cells.length,n=0;n<r;n++)i.cells[n]=I(i.cells[n].replace(/^ *\| *| *\| *$/g,""),i.header.length);return i}}},e.lheading=function(t){var e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1]}},e.paragraph=function(t){var e=this.rules.block.paragraph.exec(t);if(e)return{type:"paragraph",raw:e[0],text:"\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1]}},e.text=function(t,e){var i=this.rules.block.text.exec(t);if(i){var n=e[e.length-1];return n&&"text"===n.type?{raw:i[0],text:i[0]}:{type:"text",raw:i[0],text:i[0]}}},e.escape=function(t){var e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:R(e[1])}},e.tag=function(t,e,i){var n=this.rules.inline.tag.exec(t);if(n)return!e&&/^<a /i.test(n[0])?e=!0:e&&/^<\/a>/i.test(n[0])&&(e=!1),!i&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?i=!0:i&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(i=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:e,inRawBlock:i,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):R(n[0]):n[0]}},e.link=function(t){var e=this.rules.inline.link.exec(t);if(e){var i=e[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;var n=H(i.slice(0,-1),"\\");if((i.length-n.length)%2==0)return}else{var r=P(e[2],"()");if(r>-1){var o=(0===e[0].indexOf("!")?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,o).trim(),e[3]=""}}var s=e[2],a="";if(this.options.pedantic){var l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);l&&(s=l[1],a=l[3])}else a=e[3]?e[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(s=this.options.pedantic&&!/>$/.test(i)?s.slice(1):s.slice(1,-1)),V(e,{href:s?s.replace(this.rules.inline._escapes,"$1"):s,title:a?a.replace(this.rules.inline._escapes,"$1"):a},e[0])}},e.reflink=function(t,e){var i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){var n=(i[2]||i[1]).replace(/\s+/g," ");if(!(n=e[n.toLowerCase()])||!n.href){var r=i[0].charAt(0);return{type:"text",raw:r,text:r}}return V(i,n,i[0])}},e.strong=function(t,e,i){void 0===i&&(i="");var n=this.rules.inline.strong.start.exec(t);if(n&&(!n[1]||n[1]&&(""===i||this.rules.inline.punctuation.exec(i)))){e=e.slice(-1*t.length);var r,o="**"===n[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(o.lastIndex=0;null!=(n=o.exec(e));)if(r=this.rules.inline.strong.middle.exec(e.slice(0,n.index+3)))return{type:"strong",raw:t.slice(0,r[0].length),text:t.slice(2,r[0].length-2)}}},e.em=function(t,e,i){void 0===i&&(i="");var n=this.rules.inline.em.start.exec(t);if(n&&(!n[1]||n[1]&&(""===i||this.rules.inline.punctuation.exec(i)))){e=e.slice(-1*t.length);var r,o="*"===n[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(o.lastIndex=0;null!=(n=o.exec(e));)if(r=this.rules.inline.em.middle.exec(e.slice(0,n.index+2)))return{type:"em",raw:t.slice(0,r[0].length),text:t.slice(1,r[0].length-1)}}},e.codespan=function(t){var e=this.rules.inline.code.exec(t);if(e){var i=e[2].replace(/\n/g," "),n=/[^ ]/.test(i),r=/^ /.test(i)&&/ $/.test(i);return n&&r&&(i=i.substring(1,i.length-1)),i=R(i,!0),{type:"codespan",raw:e[0],text:i}}},e.br=function(t){var e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}},e.del=function(t){var e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2]}},e.autolink=function(t,e){var i,n,r=this.rules.inline.autolink.exec(t);if(r)return n="@"===r[2]?"mailto:"+(i=R(this.options.mangle?e(r[1]):r[1])):i=R(r[1]),{type:"link",raw:r[0],text:i,href:n,tokens:[{type:"text",raw:i,text:i}]}},e.url=function(t,e){var i;if(i=this.rules.inline.url.exec(t)){var n,r;if("@"===i[2])r="mailto:"+(n=R(this.options.mangle?e(i[0]):i[0]));else{var o;do{o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0]}while(o!==i[0]);n=R(i[0]),r="www."===i[1]?"http://"+n:n}return{type:"link",raw:i[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}},e.inlineText=function(t,e,i){var n,r=this.rules.inline.text.exec(t);if(r)return n=e?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):R(r[0]):r[0]:R(this.options.smartypants?i(r[0]):r[0]),{type:"text",raw:r[0],text:n}},t}(),F=O.noopTest,B=O.edit,j=O.merge,q={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:F,table:F,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};q.def=B(q.def).replace("label",q._label).replace("title",q._title).getRegex(),q.bullet=/(?:[*+-]|\d{1,9}[.)])/,q.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,q.item=B(q.item,"gm").replace(/bull/g,q.bullet).getRegex(),q.listItemStart=B(/^( *)(bull)/).replace("bull",q.bullet).getRegex(),q.list=B(q.list).replace(/bull/g,q.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+q.def.source+")").getRegex(),q._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",q._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,q.html=B(q.html,"i").replace("comment",q._comment).replace("tag",q._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),q.paragraph=B(q._paragraph).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.blockquote=B(q.blockquote).replace("paragraph",q.paragraph).getRegex(),q.normal=j({},q),q.gfm=j({},q.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),q.gfm.nptable=B(q.gfm.nptable).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.gfm.table=B(q.gfm.table).replace("hr",q.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",q._tag).getRegex(),q.pedantic=j({},q.normal,{html:B("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",q._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:F,paragraph:B(q.normal._paragraph).replace("hr",q.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",q.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var U={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:F,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:F,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};U.punctuation=B(U.punctuation).replace(/punctuation/g,U._punctuation).getRegex(),U._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",U._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",U._comment=B(q._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),U.em.start=B(U.em.start).replace(/punctuation/g,U._punctuation).getRegex(),U.em.middle=B(U.em.middle).replace(/punctuation/g,U._punctuation).replace(/overlapSkip/g,U._overlapSkip).getRegex(),U.em.endAst=B(U.em.endAst,"g").replace(/punctuation/g,U._punctuation).getRegex(),U.em.endUnd=B(U.em.endUnd,"g").replace(/punctuation/g,U._punctuation).getRegex(),U.strong.start=B(U.strong.start).replace(/punctuation/g,U._punctuation).getRegex(),U.strong.middle=B(U.strong.middle).replace(/punctuation/g,U._punctuation).replace(/overlapSkip/g,U._overlapSkip).getRegex(),U.strong.endAst=B(U.strong.endAst,"g").replace(/punctuation/g,U._punctuation).getRegex(),U.strong.endUnd=B(U.strong.endUnd,"g").replace(/punctuation/g,U._punctuation).getRegex(),U.blockSkip=B(U._blockSkip,"g").getRegex(),U.overlapSkip=B(U._overlapSkip,"g").getRegex(),U._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,U._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,U._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,U.autolink=B(U.autolink).replace("scheme",U._scheme).replace("email",U._email).getRegex(),U._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,U.tag=B(U.tag).replace("comment",U._comment).replace("attribute",U._attribute).getRegex(),U._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,U._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,U._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,U.link=B(U.link).replace("label",U._label).replace("href",U._href).replace("title",U._title).getRegex(),U.reflink=B(U.reflink).replace("label",U._label).getRegex(),U.reflinkSearch=B(U.reflinkSearch,"g").replace("reflink",U.reflink).replace("nolink",U.nolink).getRegex(),U.normal=j({},U),U.pedantic=j({},U.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",U._label).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",U._label).getRegex()}),U.gfm=j({},U.normal,{escape:B(U.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),U.gfm.url=B(U.gfm.url,"i").replace("email",U.gfm._extended_email).getRegex(),U.breaks=j({},U.gfm,{br:B(U.br).replace("{2,}","*").getRegex(),text:B(U.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var W={block:q,inline:U},Y=s.defaults,G=W.block,K=W.inline,X=O.repeatString;function Z(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Q(t){var e,i,n="",r=t.length;for(e=0;e<r;e++)i=t.charCodeAt(e),Math.random()>.5&&(i="x"+i.toString(16)),n+="&#"+i+";";return n}var J=function(){function t(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Y,this.options.tokenizer=this.options.tokenizer||new N,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var e={block:G.normal,inline:K.normal};this.options.pedantic?(e.block=G.pedantic,e.inline=K.pedantic):this.options.gfm&&(e.block=G.gfm,this.options.breaks?e.inline=K.breaks:e.inline=K.gfm),this.tokenizer.rules=e}t.lex=function(e,i){return new t(i).lex(e)},t.lexInline=function(e,i){return new t(i).inlineTokens(e)};var i=t.prototype;return i.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(t,this.tokens,!0),this.inline(this.tokens),this.tokens},i.blockTokens=function(t,e,i){var n,r,o,s;for(void 0===e&&(e=[]),void 0===i&&(i=!0),this.options.pedantic&&(t=t.replace(/^ +$/gm,""));t;)if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.type&&e.push(n);else if(n=this.tokenizer.code(t,e))t=t.substring(n.raw.length),n.type?e.push(n):((s=e[e.length-1]).raw+="\n"+n.raw,s.text+="\n"+n.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.nptable(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),n.tokens=this.blockTokens(n.text,[],i),e.push(n);else if(n=this.tokenizer.list(t)){for(t=t.substring(n.raw.length),o=n.items.length,r=0;r<o;r++)n.items[r].tokens=this.blockTokens(n.items[r].text,[],!1);e.push(n)}else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(i&&(n=this.tokenizer.def(t)))t=t.substring(n.raw.length),this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else if(i&&(n=this.tokenizer.paragraph(t)))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.text(t,e))t=t.substring(n.raw.length),n.type?e.push(n):((s=e[e.length-1]).raw+="\n"+n.raw,s.text+="\n"+n.text);else if(t){var a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return e},i.inline=function(t){var e,i,n,r,o,s,a=t.length;for(e=0;e<a;e++)switch((s=t[e]).type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},r=s.header.length,i=0;i<r;i++)s.tokens.header[i]=[],this.inlineTokens(s.header[i],s.tokens.header[i]);for(r=s.cells.length,i=0;i<r;i++)for(o=s.cells[i],s.tokens.cells[i]=[],n=0;n<o.length;n++)s.tokens.cells[i][n]=[],this.inlineTokens(o[n],s.tokens.cells[i][n]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(r=s.items.length,i=0;i<r;i++)this.inline(s.items[i].tokens)}return t},i.inlineTokens=function(t,e,i,n){var r;void 0===e&&(e=[]),void 0===i&&(i=!1),void 0===n&&(n=!1);var o,s,a,l=t;if(this.tokens.links){var c=Object.keys(this.tokens.links);if(c.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(l));)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,o.index)+"["+X("a",o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,o.index)+"["+X("a",o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;t;)if(s||(a=""),s=!1,r=this.tokenizer.escape(t))t=t.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.tag(t,i,n))t=t.substring(r.raw.length),i=r.inLink,n=r.inRawBlock,e.push(r);else if(r=this.tokenizer.link(t))t=t.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,n)),e.push(r);else if(r=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,n)),e.push(r);else if(r=this.tokenizer.strong(t,l,a))t=t.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,n),e.push(r);else if(r=this.tokenizer.em(t,l,a))t=t.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,n),e.push(r);else if(r=this.tokenizer.codespan(t))t=t.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.br(t))t=t.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.del(t))t=t.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,n),e.push(r);else if(r=this.tokenizer.autolink(t,Q))t=t.substring(r.raw.length),e.push(r);else if(i||!(r=this.tokenizer.url(t,Q))){if(r=this.tokenizer.inlineText(t,n,Z))t=t.substring(r.raw.length),a=r.raw.slice(-1),s=!0,e.push(r);else if(t){var h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else t=t.substring(r.raw.length),e.push(r);return e},e(t,null,[{key:"rules",get:function(){return{block:G,inline:K}}}]),t}(),tt=s.defaults,et=O.cleanUrl,it=O.escape,nt=function(){function t(t){this.options=t||tt}var e=t.prototype;return e.code=function(t,e,i){var n=(e||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(t,n);null!=r&&r!==t&&(i=!0,t=r)}return t=t.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+it(n,!0)+'">'+(i?t:it(t,!0))+"</code></pre>\n":"<pre><code>"+(i?t:it(t,!0))+"</code></pre>\n"},e.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},e.html=function(t){return t},e.heading=function(t,e,i,n){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+n.slug(i)+'">'+t+"</h"+e+">\n":"<h"+e+">"+t+"</h"+e+">\n"},e.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},e.list=function(t,e,i){var n=e?"ol":"ul";return"<"+n+(e&&1!==i?' start="'+i+'"':"")+">\n"+t+"</"+n+">\n"},e.listitem=function(t){return"<li>"+t+"</li>\n"},e.checkbox=function(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},e.paragraph=function(t){return"<p>"+t+"</p>\n"},e.table=function(t,e){return e&&(e="<tbody>"+e+"</tbody>"),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"},e.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},e.tablecell=function(t,e){var i=e.header?"th":"td";return(e.align?"<"+i+' align="'+e.align+'">':"<"+i+">")+t+"</"+i+">\n"},e.strong=function(t){return"<strong>"+t+"</strong>"},e.em=function(t){return"<em>"+t+"</em>"},e.codespan=function(t){return"<code>"+t+"</code>"},e.br=function(){return this.options.xhtml?"<br/>":"<br>"},e.del=function(t){return"<del>"+t+"</del>"},e.link=function(t,e,i){if(null===(t=et(this.options.sanitize,this.options.baseUrl,t)))return i;var n='<a href="'+it(t)+'"';return e&&(n+=' title="'+e+'"'),n+=">"+i+"</a>"},e.image=function(t,e,i){if(null===(t=et(this.options.sanitize,this.options.baseUrl,t)))return i;var n='<img src="'+t+'" alt="'+i+'"';return e&&(n+=' title="'+e+'"'),n+=this.options.xhtml?"/>":">"},e.text=function(t){return t},t}(),rt=function(){function t(){}var e=t.prototype;return e.strong=function(t){return t},e.em=function(t){return t},e.codespan=function(t){return t},e.del=function(t){return t},e.html=function(t){return t},e.text=function(t){return t},e.link=function(t,e,i){return""+i},e.image=function(t,e,i){return""+i},e.br=function(){return""},t}(),ot=function(){function t(){this.seen={}}var e=t.prototype;return e.serialize=function(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},e.getNextSafeSlug=function(t,e){var i=t,n=0;if(this.seen.hasOwnProperty(i)){n=this.seen[t];do{i=t+"-"+ ++n}while(this.seen.hasOwnProperty(i))}return e||(this.seen[t]=n,this.seen[i]=0),i},e.slug=function(t,e){void 0===e&&(e={});var i=this.serialize(t);return this.getNextSafeSlug(i,e.dryrun)},t}(),st=s.defaults,at=O.unescape,lt=function(){function t(t){this.options=t||st,this.options.renderer=this.options.renderer||new nt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new rt,this.slugger=new ot}t.parse=function(e,i){return new t(i).parse(e)},t.parseInline=function(e,i){return new t(i).parseInline(e)};var e=t.prototype;return e.parse=function(t,e){void 0===e&&(e=!0);var i,n,r,o,s,a,l,c,h,d,p,u,g,f,m,v,b,y,_="",w=t.length;for(i=0;i<w;i++)switch((d=t[i]).type){case"space":continue;case"hr":_+=this.renderer.hr();continue;case"heading":_+=this.renderer.heading(this.parseInline(d.tokens),d.depth,at(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue;case"code":_+=this.renderer.code(d.text,d.lang,d.escaped);continue;case"table":for(c="",l="",o=d.header.length,n=0;n<o;n++)l+=this.renderer.tablecell(this.parseInline(d.tokens.header[n]),{header:!0,align:d.align[n]});for(c+=this.renderer.tablerow(l),h="",o=d.cells.length,n=0;n<o;n++){for(l="",s=(a=d.tokens.cells[n]).length,r=0;r<s;r++)l+=this.renderer.tablecell(this.parseInline(a[r]),{header:!1,align:d.align[r]});h+=this.renderer.tablerow(l)}_+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(d.tokens),_+=this.renderer.blockquote(h);continue;case"list":for(p=d.ordered,u=d.start,g=d.loose,o=d.items.length,h="",n=0;n<o;n++)v=(m=d.items[n]).checked,b=m.task,f="",m.task&&(y=this.renderer.checkbox(v),g?m.tokens.length>0&&"text"===m.tokens[0].type?(m.tokens[0].text=y+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=y+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:y}):f+=y),f+=this.parse(m.tokens,g),h+=this.renderer.listitem(f,b,v);_+=this.renderer.list(h,p,u);continue;case"html":_+=this.renderer.html(d.text);continue;case"paragraph":_+=this.renderer.paragraph(this.parseInline(d.tokens));continue;case"text":for(h=d.tokens?this.parseInline(d.tokens):d.text;i+1<w&&"text"===t[i+1].type;)h+="\n"+((d=t[++i]).tokens?this.parseInline(d.tokens):d.text);_+=e?this.renderer.paragraph(h):h;continue;default:var x='Token with "'+d.type+'" type was not found.';if(this.options.silent)return void console.error(x);throw new Error(x)}return _},e.parseInline=function(t,e){e=e||this.renderer;var i,n,r="",o=t.length;for(i=0;i<o;i++)switch((n=t[i]).type){case"escape":r+=e.text(n.text);break;case"html":r+=e.html(n.text);break;case"link":r+=e.link(n.href,n.title,this.parseInline(n.tokens,e));break;case"image":r+=e.image(n.href,n.title,n.text);break;case"strong":r+=e.strong(this.parseInline(n.tokens,e));break;case"em":r+=e.em(this.parseInline(n.tokens,e));break;case"codespan":r+=e.codespan(n.text);break;case"br":r+=e.br();break;case"del":r+=e.del(this.parseInline(n.tokens,e));break;case"text":r+=e.text(n.text);break;default:var s='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(s);throw new Error(s)}return r},t}(),ct=O.merge,ht=O.checkSanitizeDeprecation,dt=O.escape,pt=s.getDefaults,ut=s.changeDefaults,gt=s.defaults;function ft(t,e,i){if(null==t)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if("function"==typeof e&&(i=e,e=null),e=ct({},ft.defaults,e||{}),ht(e),i){var n,r=e.highlight;try{n=J.lex(t,e)}catch(t){return i(t)}var o=function(t){var o;if(!t)try{o=lt.parse(n,e)}catch(e){t=e}return e.highlight=r,t?i(t):i(null,o)};if(!r||r.length<3)return o();if(delete e.highlight,!n.length)return o();var s=0;return ft.walkTokens(n,(function(t){"code"===t.type&&(s++,setTimeout((function(){r(t.text,t.lang,(function(e,i){if(e)return o(e);null!=i&&i!==t.text&&(t.text=i,t.escaped=!0),0===--s&&o()}))}),0))})),void(0===s&&o())}try{var a=J.lex(t,e);return e.walkTokens&&ft.walkTokens(a,e.walkTokens),lt.parse(a,e)}catch(t){if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",e.silent)return"<p>An error occurred:</p><pre>"+dt(t.message+"",!0)+"</pre>";throw t}}return ft.options=ft.setOptions=function(t){return ct(ft.defaults,t),ut(ft.defaults),ft},ft.getDefaults=pt,ft.defaults=gt,ft.use=function(t){var e=ct({},t);if(t.renderer&&function(){var i=ft.defaults.renderer||new nt,n=function(e){var n=i[e];i[e]=function(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];var a=t.renderer[e].apply(i,o);return!1===a&&(a=n.apply(i,o)),a}};for(var r in t.renderer)n(r);e.renderer=i}(),t.tokenizer&&function(){var i=ft.defaults.tokenizer||new N,n=function(e){var n=i[e];i[e]=function(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];var a=t.tokenizer[e].apply(i,o);return!1===a&&(a=n.apply(i,o)),a}};for(var r in t.tokenizer)n(r);e.tokenizer=i}(),t.walkTokens){var i=ft.defaults.walkTokens;e.walkTokens=function(e){t.walkTokens(e),i&&i(e)}}ft.setOptions(e)},ft.walkTokens=function(t,e){for(var i,n=r(t);!(i=n()).done;){var o=i.value;switch(e(o),o.type){case"table":for(var s,a=r(o.tokens.header);!(s=a()).done;){var l=s.value;ft.walkTokens(l,e)}for(var c,h=r(o.tokens.cells);!(c=h()).done;)for(var d,p=r(c.value);!(d=p()).done;){var u=d.value;ft.walkTokens(u,e)}break;case"list":ft.walkTokens(o.items,e);break;default:o.tokens&&ft.walkTokens(o.tokens,e)}}},ft.parseInline=function(t,e){if(null==t)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=ct({},ft.defaults,e||{}),ht(e);try{var i=J.lexInline(t,e);return e.walkTokens&&ft.walkTokens(i,e.walkTokens),lt.parseInline(i,e)}catch(t){if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",e.silent)return"<p>An error occurred:</p><pre>"+dt(t.message+"",!0)+"</pre>";throw t}},ft.Parser=lt,ft.parser=lt.parse,ft.Renderer=nt,ft.TextRenderer=rt,ft.Lexer=J,ft.lexer=J.lex,ft.Tokenizer=N,ft.Slugger=ot,ft.parse=ft,ft}));const yl=new window.marked.Renderer;function _l(t){const e=t.match(/^[^\S]*(?=\S)/gm);return e&&e[0].length?(e.sort((t,e)=>t.length-e.length),e[0].length?t.replace(RegExp("^"+e[0],"gm"),""):t):t}yl.code=function(t,e,i){return`<pb-code-highlight language="${e}" line-numbers>\n        <template>${t}</template>\n    </pb-code-highlight>`},window.marked.setOptions({renderer:yl});class wl extends(N(V)){static get properties(){return Object.assign({content:{type:String},url:{type:String}},super.properties)}constructor(){super(),this._url=null}set url(t){this._url=t,B("pb-page-ready",t=>{this._load(t.endpoint)})}connectedCallback(){if(super.connectedCallback(),this.style.display="block",!this.content){const t=document.createElement("div");for(let e=0;e<this.childNodes.length;e++){const i=this.childNodes[e];t.appendChild(document.importNode(i.content||i,!0))}this.content=_l(t.innerHTML)}this.subscribeTo("pb-zoom",t=>{this.zoom(t.detail.direction)})}_load(t){const e=this.toAbsoluteURL(this._url,t);fetch(e,{credentials:"same-origin"}).then(t=>t.text()).catch(()=>(console.error("<pb-markdown> failed to load content from %s",e.toString()),Promise.resolve(this.content))).then(t=>{this.content=t})}createRenderRoot(){return this}render(){return this.content?I`<div>${K(window.marked(this.content))}</div>`:null}zoom(t){const e=window.getComputedStyle(this).getPropertyValue("font-size"),i=parseInt(e.replace(/^(\d+)px/,"$1"));this.style.fontSize="in"===t?i+1+"px":i-1+"px"}}customElements.define("pb-markdown",wl);const xl=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){const e=t.target;e.emitTo("pb-visible",{data:e.data})}})});class kl extends(N(V)){static get properties(){return Object.assign({data:{type:String}},super.properties)}disconnectedCallback(){super.disconnectedCallback(),xl&&xl.unobserve(this)}firstUpdated(){xl.observe(this)}render(){return I`<slot></slot>`}static get styles(){return R`
            :host {
                display: inline;
            }
        `}}function Al(t,e){const i=[];return t.forEach(t=>{let n,r;if("object"==typeof t?(n=t.text,r=t.value):(n=t.toString(),r=n),n.toLowerCase().indexOf(e)>-1){const t={};t.text=n,t.value=r,i.push(t)}}),i}customElements.define("pb-observable",kl);class Sl extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},value:{type:String},placeholder:{type:String,attribute:"placeholder"},source:{type:String},preload:{type:Boolean},suggestions:{type:Array},substring:{type:Boolean},icon:{type:String}})}constructor(){super(),this.placeholder="search.placeholder",this.suggestions=[],this.lastSelected=null,this.preload=!1,this.substring=!1,this._hiddenInput=null,this._initialized=!1}connectedCallback(){super.connectedCallback()}firstUpdated(){this.closest("iron-form,pb-search,pb-custom-form")||(this._hiddenInput=document.createElement("input"),this._hiddenInput.type="hidden",this._hiddenInput.name=this.name,this.appendChild(this._hiddenInput));const t=this.shadowRoot.getElementById("autocomplete");if(t.addEventListener("autocomplete-change",this._autocomplete.bind(this)),this.preload&&this.source)this.substring&&(t.queryFn=Al),B("pb-page-ready",()=>{this._sendRequest()});else if(this.value)if(this.source)B("pb-page-ready",()=>{this._sendRequest(this.value)});else{const t=this.shadowRoot.getElementById("search"),e=this.suggestions.find(t=>t.text?t.value===this.value:t===this.value);e&&(t.value=e.text||e,this._hiddenInput&&(this._hiddenInput.value=e.value||e)),this._hiddenInput&&(this._hiddenInput.value=this.value)}}render(){return I`
            <custom-style>
                <style>
                    :host {
                        --suggestions-item: {
                            color: var(--pb-search-suggestions-color, black);
                        };
                        --suggestions-wrapper: {
                            background: var(--pb-search-suggestions-background, white);
                        };
                    }
                </style>
            </custom-style>
            <slot></slot>
            <paper-input id="search" type="search" name="query" @keyup="${this._setInput}" label="${W(this.placeholder)}"
                always-float-label>
                ${this.icon?I`<iron-icon icon="${this.icon}" slot="prefix"></iron-icon>`:null}
            </paper-input>
            <paper-autocomplete-suggestions id="autocomplete" for="search" .source="${this.suggestions}" ?remote-source="${!this.preload&&this.source}"
                @autocomplete-selected="${this._autocompleteSelected}"></paper-autocomplete-suggestions>
          
        <iron-ajax
            id="autocompleteLoader"
            verbose
            handle-as="json"
            method="get"
            with-credentials
            @response="${this._updateSuggestions}"></iron-ajax>

        
    `}static get styles(){return R`
            :host {
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));

                display: flex;
                align-items: center;
            }

            ::slotted {
                display: block;
                margin-left: 10px;
            }
        `}_autocomplete(t){const e=this.shadowRoot.getElementById("search");this._sendRequest(e.value)}_sendRequest(t){const e=this.shadowRoot.getElementById("autocompleteLoader");e.url=this.toAbsoluteURL(this.source);const i=this._getParameters();i.query=t,e.params=i,e.generateRequest()}_updateSuggestions(){const t=this.shadowRoot.getElementById("autocompleteLoader");if(this._initialized){const e=this.shadowRoot.getElementById("autocomplete");t.lastResponse&&(this.suggestions=t.lastResponse,e.suggestions(this.suggestions))}else if(t.lastResponse){const e=t.lastResponse,i=this.shadowRoot.getElementById("search"),n=e.find(t=>t.text?t.value===this.value:t===this.value);n?(i.value=n.text||n,this._hiddenInput&&(this._hiddenInput.value=n.value||n)):this._hiddenInput&&(this._hiddenInput.value=this.value),this.preload&&(this.suggestions=e)}this._initialized=!0}_getParameters(){const t={};return this.querySelectorAll("[name]").forEach(e=>{t[e.name]=e.value}),t}_autocompleteSelected(t){const{text:e,value:i}=t.detail;this.lastSelected=e;this.shadowRoot.getElementById("search").value=e,this.value=i,this._hiddenInput&&(this._hiddenInput.value=this.value),this.emitTo("pb-autocomplete-selected",{text:e,value:i})}_setInput(t){const e=this.shadowRoot.getElementById("search");if(this.value=e.value,this._hiddenInput&&(this._hiddenInput.value=this.value),13===t.keyCode){const t=this.suggestions.find(t=>t.text?t.value===this.value:t===this.value);if(!t)return;t.value?this.emitTo("pb-autocomplete-selected",{text:t.text,value:t.value}):this.emitTo("pb-autocomplete-selected",{text:t,value:t})}}}customElements.define("pb-autocomplete",Sl);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const zl=e({is:"iron-label",listeners:{tap:"_tapHandler"},properties:{for:{type:String,value:"",reflectToAttribute:!0,observer:"_forChanged"},_forElement:Object},attached:function(){this._forChanged()},ready:function(){this._generateLabelId()},_generateLabelId:function(){if(!this.id){var e="iron-label-"+zl._labelNumber++;t(this).setAttribute("id",e)}},_findTarget:function(){if(this.for){var e=t(this).getOwnerRoot();return t(e).querySelector("#"+this.for)}var i=t(this).querySelector("[iron-label-target]");return i||(i=t(this).firstElementChild),i},_tapHandler:function(e){this._forElement&&(t(e).localTarget!==this._forElement&&(this._forElement.focus(),this._forElement.click()))},_applyLabelledBy:function(){this._forElement&&t(this._forElement).setAttribute("aria-labelledby",this.id)},_forChanged:function(){this._forElement&&t(this._forElement).removeAttribute("aria-labelledby"),this._forElement=this._findTarget(),this._applyLabelledBy()}});zl._labelNumber=0;class Cl extends(N(V)){static get properties(){return Object.assign({label:{type:String},value:{type:String,reflect:!0},values:{type:Array,reflect:!0},name:{type:String},source:{type:String},multi:{type:Boolean},_items:{type:Array},_selected:{type:Array}},super.properties)}constructor(){super(),this.value=null,this.values=[],this._items=[],this._selected=[],this._inIronForm=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",this._refresh.bind(this)),this.multi&&(0===this.values.length&&this.value&&(this.values=[this.value]),this.value=void 0)}firstUpdated(){super.firstUpdated(),this._inIronForm=this.closest("iron-form, pb-search,pb-custom-form");const t=this.shadowRoot.querySelector('[name="subform"]');t&&t.assignedNodes().forEach(t=>{this.name&&t.addEventListener("change",this._loadRemote.bind(this));t.querySelectorAll("[name]").forEach(t=>{t.addEventListener("change",this._loadRemote.bind(this))})}),B("pb-page-ready",()=>{this._loadRemote()})}_refresh(){const t=this.shadowRoot.getElementById("list");t&&setTimeout(()=>{const e=t.selected;t.selected=void 0,t.selected=e})}_clear(t){const e=this.shadowRoot.querySelector(t);e&&e.assignedNodes().forEach(t=>{t.parentNode.removeChild(t)})}_loadRemote(){if(!this.source)return;let t=this.toAbsoluteURL(this.source);t+=t.includes("?")?"&":"?",t+=this._getParameters(),console.log("<pb-select> loading items from %s",t),fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}).then(t=>t.json()).then(t=>{this._clear("slot:not([name])");const e=t.map(Cl.jsonEntry2item);console.log("<pb-select> loaded %d items",e.length),this._items=e}).catch(()=>console.error("<pb-select> request to %s failed",t))}static jsonEntry2item(t){return{label:t.text,value:t.value}}_getParameters(){const t=this.shadowRoot.querySelector('[name="subform"]'),e=[];return t&&t.assignedNodes().forEach(t=>{t.querySelectorAll("[name]").forEach(t=>{e.push(`${t.name}=${encodeURIComponent(t.value)}`)})}),e.join("&")}render(){return this.multi?I`
                <slot name="subform"></slot>
                <iron-label for="list" part="label">${W(this.label)}</iron-label>
                ${this.multi?I`<paper-listbox id="list" slot="dropdown-content" class="dropdown-content" 
                    .selectedValues="${this.values}" multi
                    attr-for-selected="value" @iron-select="${this._changed}" @iron-deselect="${this._changed}">
                    <slot></slot>
                    ${this._items.map(t=>I`<paper-item value="${t.value}">${t.label}</paper-item>`)}
                </paper-listbox>`:I`<paper-listbox id="list" slot="dropdown-content" class="dropdown-content" 
                    .selected="${this.value}"
                    attr-for-selected="value" @iron-select="${this._changed}" @iron-deselect="${this._changed}">
                    <slot></slot>
                    ${this._items.map(t=>I`<paper-item value="${t.value}">${t.label}</paper-item>`)}
                </paper-listbox>`}
                <slot name="output"></slot>
            `:I`
            <slot name="subform"></slot>
            <paper-dropdown-menu label="${W(this.label)}">
                <paper-listbox id="list" slot="dropdown-content" class="dropdown-content" .selected="${this.value}"
                    attr-for-selected="value" @iron-select="${this._changed}">
                    <slot></slot>
                    ${this._items.map(t=>I`<paper-item value="${t.value}">${t.label}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>
            <slot name="output"></slot>
        `}_changed(){const t=this.shadowRoot.getElementById("list"),e=Array.of(this._selected);if(this.multi?(this._selected=t.selectedValues,this.values=this._selected):(this._selected=[t.selected],this.value=t.selected),this._selected.length!==e.length||!this._selected.every((t,i)=>t===e[i])){if(!this._inIronForm||this.multi){this._clear('[name="output"]');(this.multi?this.values:[this.value]).forEach(t=>{const e=document.createElement("input");e.type="hidden",e.name=this.name,e.value=t,e.slot="output",this.appendChild(e)})}this.dispatchEvent(new CustomEvent("change"))}}static get styles(){return R`
            :host {
                display: flex;
                flex-direction: column;
                position:relative;
                margin-top:1rem;
            }

            iron-label {
                font: var(--pb-base-font);
                font-size:var(--pb-font-caption);
                font-weight: 400;
                color: var(--pb-color-lighter);
            }
            
            paper-listbox{
                overflow:auto;
            }
        `}}customElements.define("pb-select",Cl);class El extends(z(N(V))){static get properties(){return Object.assign({label:{type:String}},super.properties)}constructor(){super(),this.label="clipboard.label"}render(){return I`
            <h3>${W(this.label)}</h3>
            <div>
                <slot></slot>
                <paper-icon-button icon="icons:content-copy" @click="${this._copy}"
                    title="${W("clipboard.copy")}"></paper-icon-button>
            </div>
        `}_copy(){const t=this.shadowRoot.querySelector("slot"),e=document.createElement("div");t.assignedNodes().forEach(t=>{e.appendChild(document.importNode(t,!0))}),navigator.clipboard.writeText(e.innerText)}static get styles(){return R`
            :host {
                display: block;
            }
            h3 {
                margin: 0;
                font-size: .85em;
                font-weight: normal;
                color: #3a3a3a;
            }
            div {
                display: flex;
                align-items: center;
                padding: 0 16px;
            }
        `}}customElements.define("pb-clipboard",El);class Tl{constructor(t){this._prefix=t.getAttribute("prefix"),this._config={name:t.getAttribute("name"),properties:{}},this._register=this._config.name}get register(){return this._register}get name(){return this._register}set name(t){this._register=t}get editable(){return!1}query(t){throw new Error("Method query not implemented")}info(t,e){return e.innerHTML="not implemented",Promise.resolve()}async select(t){return Promise.resolve(t)}async getRecord(t){return Promise.reject()}}class Ll extends Tl{async query(t){const e=t.replace(/[^\w\s]+/g,""),i=[],n="https://api.metagrid.ch/search?query="+encodeURIComponent(e);return new Promise(t=>{fetch(n).then(t=>t.json()).then(e=>{e.resources.forEach(t=>{const e=`${t.metadata.last_name}, ${t.metadata.first_name} `,n={register:this._register,id:`${t.provider.slug}-${t.identifier}`,label:e,details:`${t.metadata.birth_date} - ${t.metadata.death_date}`,link:t.link.uri,provider:t.provider.slug};i.push(n)}),t({totalItems:e.meta.total,items:i})})})}info(t,e){const i=t.indexOf("-"),n=t.substring(0,i);return new Promise(i=>{this.getRecord(t).then(t=>{const r=`\n          <h3 class="label">\n            <a href="https://${t.link.uri}" target="_blank">\n              ${t.metadata.last_name}, ${t.metadata.first_name}\n            </a>\n          </h3>\n          <p>${t.metadata.birth_date} - ${t.metadata.death_date}</p>\n        `;e.innerHTML=r,i({id:`${n}-${t.identifier}`,strings:[`${t.metadata.first_name} ${t.metadata.last_name}`]})})})}async getRecord(t){const e=t.indexOf("-"),i=t.substring(0,e),n=t.substring(e+1);return fetch(`https://api.metagrid.ch/search?slug=${i}&query=${n}`).then(t=>t.json()).then(t=>{const e=t.resources[0],i=Object.assign({},e);return i.name=`${e.metadata.first_name} ${e.metadata.last_name}`,i.links=["https://"+e.link.uri],e.metadata.birth_date&&e.metadata.birth_date.length>0&&(i.birth=e.metadata.birth_date),e.metadata.death_date&&e.metadata.death_date.length>0&&(i.death=e.metadata.death_date),i}).catch(t=>Promise.reject(t))}}class Ml extends Tl{constructor(t){super(t),this.user=t.getAttribute("user")}async query(t){const e=[];return new Promise(i=>{fetch(`https://secure.geonames.org/searchJSON?formatted=true&q=${encodeURIComponent(t)}&maxRows=100&&username=${this.user}&style=full`).then(t=>t.json()).then(t=>{t.geonames.forEach(t=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${t.geonameId}`:t.geonameId,label:t.toponymName,details:`${t.fcodeName} - ${t.adminName1}, ${t.countryName}`,link:"https://www.geonames.org/"+t.geonameId,strings:[t.toponymName],provider:"geonames.org"};e.push(i)}),i({totalItems:t.totalResultsCount,items:e})})})}info(t,e){return t?new Promise((i,n)=>{this.getRecord(t).then(t=>{if(t.status)return void n(t.status.message);const r=`\n            <h3 class="label">\n              <a href="${t.link}" target="_blank">${t.name}</a>\n            </h3>\n            <p class="fcode">${t.note} - ${t.region}, ${t.country}</p>\n          `;e.innerHTML=r,i({id:this._prefix?`${this._prefix}-${t.geonameId}`:t.geonameId,strings:[t.name]})}).catch(()=>n())}):Promise.resolve({})}async getRecord(t){const e=this._prefix?t.substring(this._prefix.length+1):t;return fetch(`https://secure.geonames.org/getJSON?geonameId=${encodeURIComponent(e)}&username=${this.user}`).then(t=>t.ok?t.json():Promise.reject(t.status)).then(t=>{const e=Object.assign({},t);return e.name=t.toponymName,e.country=t.countryName,e.region=t.adminName1,e.note=t.fcodeName,e.links=["https://www.geonames.org/"+t.geonameId,"https://"+t.wikipediaURL],e}).catch(()=>Promise.reject())}}function Ol(t="",e){return t.replace(/\${([^}]+)}/g,(t,i)=>{let n;return e[i]&&(n=e[i]),n||""})}function $l(t,e){const i=t.querySelector(e);if(i instanceof HTMLTemplateElement){const t=document.createElement("div");return t.appendChild(i.content.cloneNode(!0)),t.innerHTML}return""}class Hl extends Tl{constructor(t){super(t),this.apiKey=t.getAttribute("api-key"),this.baseKey=t.getAttribute("base"),this.table=t.getAttribute("table"),this.view=t.getAttribute("view"),this.filterExpr=t.getAttribute("filter"),this.labelExpr=t.getAttribute("label");const e=t.getAttribute("fields");this.fields=e?e.split(/\s*,\s*/):["ID"];const i=t.getAttribute("tokenize");this.tokenize=i?i.split(/\s*,\s*/):[this.fields[0]],this.tokenizeChars=t.getAttribute("tokenize-regex")||"\\W",this.infoExpr=$l(t,".info"),this.detailExpr=$l(t,".detail"),this._init()}_init(){window.ESGlobalBridge.requestAvailability();const t=P("../lib/airtable.browser.js");window.ESGlobalBridge.instance.load("airtable",t),window.addEventListener("es-bridge-airtable-loaded",this._initAirtable.bind(this),{once:!0})}_initAirtable(){const t=require("airtable");this.base=new t({apiKey:this.apiKey}).base(this.baseKey)}async query(t){t=t.toLowerCase();const e=[],i=this.filterExpr?Ol(this.filterExpr,{key:t}):null,n={fields:this.fields,maxRecords:100};return this.view&&(n.view=this.view),i&&(n.filterByFormula=i),new Promise((t,i)=>{this.base(this.table).select(n).firstPage((n,r)=>{if(n)return console.error(n),void i(n);r.forEach(t=>{const i={};this.fields.forEach(e=>{i[e]=t.get(e)});const n={register:this._register,id:t.id,label:Ol(this.labelExpr,i),details:Ol(this.detailExpr,i),provider:"airtable"};e.push(n)}),t({totalItems:3,items:e})})})}info(t,e){return new Promise((i,n)=>{this.base(this.table).find(t,(r,o)=>{if(r){switch(r.statusCode){case 404:n(`No record found for ${t} in table ${this.table}`);break;default:n(`${r.statusCode}: ${r.message}`)}return}if(0===Object.keys(o.fields).length)return void n(`No record found for ${t} in table ${this.table}`);let s=[];const a={};this.fields.forEach(t=>{const e=o.get(t);e&&(a[t]=e,s.push(e))});const l=new RegExp(this.tokenizeChars);this.tokenize.forEach(t=>{a[t]&&(s=s.concat(a[t].split(l)))}),s=s.filter(t=>!/^\d+$/.test(t)),s.sort((t,e)=>e.length-t.length),e.innerHTML=Ol(this.infoExpr,a),i({id:o.id,strings:s})})})}}function Il(t){let e="";t.professionOrOccupation&&t.professionOrOccupation.length>0&&(e=t.professionOrOccupation.map(t=>t.label).join(", ")),t.biographicalOrHistoricalInformation&&(e=`${e}; ${t.biographicalOrHistoricalInformation.join(", ")}`);const i=[];return t.dateOfBirth&&t.dateOfBirth.length>0&&i.push(t.dateOfBirth[0]),t.dateOfDeath&&t.dateOfDeath.length>0&&(i.push(" - "),i.push(t.dateOfDeath[0])),i.length>0?`${i.join("")}${e?"; "+e:""}`:e}class Rl extends Tl{query(t){const e=[];let i;switch(this._register){case"place":i="PlaceOrGeographicName";break;case"term":i="SubjectHeading";break;case"organization":i="CorporateBody";break;default:i="Person"}return new Promise(n=>{fetch(`https://lobid.org/gnd/search?q=${encodeURIComponent(t)}&filter=%2B%28type%3A${i}%29&format=json&size=100`).then(t=>t.json()).then(t=>{t.member.forEach(t=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${t.gndIdentifier}`:t.gndIdentifier,label:t.preferredName,link:t.id,details:Il(t),strings:[t.preferredName].concat(t.variantName),provider:"GND"};e.push(i)}),n({totalItems:t.totalItems,items:e})})})}async getRecord(t){const e=this._prefix?t.substring(this._prefix.length+1):t;return fetch(`https://lobid.org/gnd/${e}.json`).then(t=>t.ok?t.json():Promise.reject()).then(t=>{const e=Object.assign({},t);return e.name=t.preferredName,e.link=t.id,t.dateOfBirth&&t.dateOfBirth.length>0&&(e.birth=t.dateOfBirth[0]),t.dateOfDeath&&t.dateOfDeath.length>0&&(e.death=t.dateOfDeath[0]),t.biographicalOrHistoricalInformation&&(e.note=t.biographicalOrHistoricalInformation.join("; ")),t.professionOrOccupation&&t.professionOrOccupation.length>0&&(e.profession=t.professionOrOccupation.map(t=>t.label)),e}).catch(()=>Promise.reject())}info(t,e){return t?new Promise((i,n)=>{this.getRecord(t).then(t=>{let n;t.type.indexOf("SubjectHeading")>-1?n=this.infoSubject(t):t.type.indexOf("AuthorityResource")>-1&&(n=this.infoPerson(t));const r=`\n          <h3 class="label">\n            <a href="https://${t.id}" target="_blank"> ${t.preferredName} </a>\n          </h3>\n          ${n}\n        `;e.innerHTML=r,i({id:this._prefix?`${this._prefix}-${t.gndIdentifier}`:t.gndIdentifier,strings:[t.preferredName].concat(t.variantName)})}).catch(()=>n())}):Promise.resolve()}infoPerson(t){const e=t.professionOrOccuption?t.professionOrOccupation.map(t=>t.label):[];return`<p>${t.dateOfBirth} - ${t.dateOfDeath}</p>\n      <p>${e.join(" ")}</p>`}infoSubject(t){if(t.broaderTermGeneral){return`<p>${t.broaderTermGeneral.map(t=>t.label).join(", ")}</p>`}return""}}class Pl extends Tl{constructor(t){super(t),this._api=t.getAttribute("api"),this._limit=t.getAttribute("limit")||999999}async query(t){const e=[],i=this.getRegister(),n=`https://meta.karl-barth.ch/api/${i}?${"bibls"===i?"biblsearch":"search"}=${encodeURIComponent(t)}&perPage=${this._limit}`,r=this.getLabelField();return new Promise(t=>{fetch(n).then(t=>t.json()).then(n=>{n.data.forEach(t=>{if("organization"===this._register&&"organisation"!==t.authority_type||"person"===this._register&&"person"!==t.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}:${t["full-id"]}`:t["full-id"],label:"string"==typeof r?t[r]:r(t),details:""+t["full-id"],link:`https://meta.karl-barth.ch/${i}/${t.id}`,strings:["string"==typeof r?t[r]:r(t)],provider:"KBGA"};e.push(n)}),t({totalItems:n.meta.total,items:e})})})}info(t,e){if(!t)return Promise.resolve({});const i=this.getLabelField();return new Promise(n=>{this.getRecord(t).then(t=>{const r=t.data.death?"† "+t.data.death:"",o=t.data.birth?`<p>* ${t.data.birth} ${r}</p>`:"",s=t.data.note_bio?`<p>${t.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${t.wikipediaURL}" target="_blank">${"string"==typeof i?t.data[i]:i(t.data)}</a></h3>\n              ${o}\n              ${s}\n          `;e.innerHTML=a,n({id:t.data["full-id"],strings:["string"==typeof i?t.data[i]:i(t.data)]})})})}async getRecord(t){const e=t.replace(/^.*-([^-]+)$/,"$1");return fetch(`https://meta.karl-barth.ch/api/${this.getRegister()}/${e}`).then(t=>t.json()).then(t=>{const e=Object.assign({},t);switch(e.name=t.data[this.getLabelField()],this._register){case"place":e.country=t.data.country,e.location=t.data.location.coordinates,e.links=t.data.links.map(t=>t.url);break;case"person":e.birth=t.data.birth,e.death=t.data.death,e.note=t.data.note_bio,e.links=["https://"+t.wikipediaURL]}return e}).catch(t=>Promise.reject(t))}getLabelField(){let t;switch(this._register){case"place":t="placeName_full";break;case"term":t="fullLabel";break;case"abbreviation":t="label";break;case"bibl":case"songs":t="asHtml";break;default:t="persName_full"}return t}getRegister(){if(this._api)return this._api;let t;switch(this._register){case"person":case"organization":t="actors";break;case"place":t="places";break;case"term":t="terms";break;case"abbreviation":t="abbreviations";break;case"bibl":t="bibls";break;default:t=this._register}return t}}class Vl extends Tl{constructor(t){super(t),this._url=t.getAttribute("url")||"https://archives.georgfischer.com/api",this._api=t.getAttribute("api"),this._limit=t.getAttribute("limit")||999999,this._provider=t.getAttribute("provider")||t.getAttribute("connector")}async query(t){const e=[],i=this.getRegister(),n=`${this._url}/${i}?search=${encodeURIComponent(t)}&perPage=${this._limit}`,r=this.getLabelField();return new Promise(t=>{fetch(n).then(t=>t.json()).then(n=>{n.data?(n.data.forEach(t=>{if("organization"===this._register&&"Person"===t.authority_type||"person"===this._register&&"Person"!==t.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}-${t.id}`:t.id,label:t[r],details:""+t.id,link:`${this._url}/${i}/${t.id}`,strings:[t[r]],provider:this._provider};e.push(n)}),t({totalItems:n.meta.total,items:e})):t({totalItems:0,items:[]})}).catch(t=>Promise.reject(t))})}info(t,e){if(!t)return Promise.resolve({});const i=this._prefix?t.substring(this._prefix.length+1):t,n=this.getLabelField();return new Promise(t=>{this.getRecord(i).then(i=>{const r=i.data.death?"† "+i.data.death:"",o=i.data.birth?`<p>* ${i.data.birth} ${r}</p>`:"",s=i.data.note_bio?`<p>${i.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${i.wikipediaURL}" target="_blank">${i.data[n]}</a></h3>\n              ${o}\n              ${s}\n          `;e.innerHTML=a,t({id:this._prefix?`${this._prefix}-${i.data.id}`:i.data.id,strings:[i.data[n]]})})})}async getRecord(t){const e=t.replace(/^.*-([^-]+)$/,"$1"),i=`${this._url}/${this.getRegister()}/${e}`;return fetch(i).then(t=>t.json()).then(t=>{const e=Object.assign({},t);switch(e.name=t.data[this.getLabelField()],this._register){case"place":e.country=t.data.country,t.data.location&&t.data.location.coordinates&&(e.location=t.data.location.coordinates),e.links=t.data.links.map(t=>t.url);break;case"person":e.birth=t.data.birth,e.death=t.data.death,e.note=t.data.note_bio,e.links=["https://"+t.wikipediaURL]}return e}).catch(t=>Promise.reject(t))}getLabelField(){let t;switch(this._register){case"term":t="label";break;default:t="fullname"}return t}getRegister(){if(this._api)return this._api;let t;switch(this._register){case"person":case"organization":t="actors";break;case"origPlace":case"place":t="places";break;case"term":t="keywords";break;case"abbreviation":t="abbreviations";break;default:t=this._register}return t}}async function Dl(t){const e=await fetch(t);return await e.json()}class Nl extends Tl{constructor(t){super(t),this.endpoint=t.getAttribute("endpoint"),this.debug=t.getAttribute("debug"),Dl(this.endpoint).then(t=>{this.ORConfig=t,this.debug&&console.log("OpenReconcile connector for register '%s' at endpoint <%s>. Using config: %o",this._register,this.endpoint,this.ORConfig)})}async query(t){const e=[],i={q1:{query:t}};return new Promise(t=>{fetch(this.endpoint,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:"queries=".concat(JSON.stringify(i))}).then(t=>t.json()).then(i=>{i.q1.result.forEach(t=>{this.ORConfig.view?this.view=this.ORConfig.view.url.replace("{{id}}",t.id):this.view=t.id,t.description?this.description=t.description:t.type?this.description=t.type.map(t=>t.name.toString()).join(", "):this.description="";const i={register:this._register,id:this._prefix?`${this._prefix}-${t.id}`:t.id,label:t.name,link:this.view,details:this.description,provider:"OpenReconcile"};e.push(i)}),this.debug&&console.log("OpenReconcile results: %o",e),t({totalItems:i.q1.result.length,items:e})})})}info(t,e){return t?this.ORConfig.preview?new Promise((i,n)=>{const r=this._prefix?t.substring(this._prefix.length+1):t,o=this.ORConfig.preview.url.replace("{{id}}",encodeURIComponent(r));fetch(o).then(t=>t.text()).then(t=>{e.innerHTML=t,i({id:this._prefix?`${this._prefix}-${r}`:r})}).catch(()=>n())}):(e.innerHTML="no 'preview' information in endpoint's manifest",Promise.resolve()):Promise.resolve({})}}class Fl extends Tl{constructor(t,e){super(e),this._editable=e.hasAttribute("edit"),this._endpoint=t,this._connectors=Bl(t,e),this._connectors.forEach(t=>{t.name=this.name}),console.log("custom connector: endpoint: %s; using authorities: %o",this._endpoint,this._connectors)}get editable(){return this._editable}async query(t){return new Promise(e=>{fetch(`${this._endpoint}/api/register/search/${this._register}?query=${encodeURIComponent(t)}`).then(t=>t.json()).then(async i=>{let n=[];const r=new Set;i.forEach(t=>{n.push({register:this._register,id:t.id,label:t.label,link:t.link,details:t.details,provider:"local"}),r.add(t.id)});let o=i.length;for(const e of this._connectors){const i=await e.query(t);n=n.concat(i.items.filter(t=>!r.has(t.id))),o+=i.totalItems}e({totalItems:o,items:n})})})}info(t,e){if(!t)return Promise.resolve({});const i=t;return new Promise((n,r)=>{fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(i)}`).then(async i=>{if(i.ok){const t=await i.json();return e.innerHTML=t.details,void n({id:t.id,strings:t.strings,editable:this._editable})}if(404===i.status)for(const i of this._connectors)try{const r=await i.info(t,e);r&&n(r)}catch(t){}r()})})}async select(t){let e;for(const i of this._connectors)if(e=await i.getRecord(t.id).catch(()=>null),e)break;return e?fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(t.id)}`,{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>t.ok?t.json():Promise.reject(Error(t.status.toString()))):Promise.resolve(t)}}function Bl(t,e){const i=[];return e.querySelectorAll(":scope > pb-authority").forEach(e=>{let n;switch(e.getAttribute("connector")){case"GND":n=new Rl(e);break;case"GeoNames":n=new Ml(e);break;case"Airtable":n=new Hl(e);break;case"KBGA":n=new Pl(e);break;case"Anton":case"GF":n=new Vl(e);break;case"ReconciliationService":n=new Nl(e);break;case"Custom":n=new Fl(t,e);break;default:n=new Ll(e)}i.push(n)}),i}class jl extends(N(V)){static get properties(){return Object.assign({query:{type:String,reflect:!0},sortByLabel:{type:Boolean,attribute:"sort-by-label"},stopwords:{type:String},group:{type:String},_results:{type:Array}},super.properties)}constructor(){super(),this.query="",this.type=null,this.sortByLabel=!1,this._results=[],this._authorities={},this.group="tei"}connectedCallback(){super.connectedCallback(),this._stopwordSet=new Set,this.stopwords&&this.stopwords.split(/\s*,\s*/).forEach(t=>this._stopwordSet.add(t.toLowerCase())),this.subscribeTo("pb-authority-lookup",t=>{this.query=t.detail.query,this.type=t.detail.type,this._results=[],this._query()}),B("pb-page-ready",()=>{Bl(this.getEndpoint(),this).forEach(t=>{this._authorities[t.register]=t})}),console.log("<pb-authority-lookup> Registered authorities: %o",this._authorities)}render(){return I`
      <paper-input
        id="query"
        label="${W("annotations.lookup")}"
        always-float-label
        value="${this.query}"
        @change="${this._queryChanged}"
      >
        <iron-icon icon="icons:search" slot="prefix"></iron-icon>
        ${this._authorities[this.type]&&this._authorities[this.type].editable?I`
            <pb-restricted group="${this.group}" slot="suffix">
              <paper-icon-button icon="icons:add" @click="${this._addEntity}" title="${W("annotations.add-entity")}"></paper-icon-button>
            </pb-restricted>
            `:null}
      </paper-input>
      <slot name="authform"></slot>
      <div id="output">
        <ul part="output">
          ${this._results.map(t=>this._formatItem(t))}
        </ul>
      </div>
    `}async lookup(t,e,i){if(!e||""===e)return console.log("<pb-authority-lookup> Key is empty"),i.innerHTML="",Promise.resolve();const n=this._authorities[t];console.log("<pb-authority-lookup> Retrieving info for %s from %s using %s",e,t,n.constructor.name);let r=await n.info(e,i);return r.strings&&(r=Object.assign(r,{strings:r.strings.filter(t=>t&&!this._stopwordSet.has(t.toLowerCase()))})),r}_formatItem(t){return I`
      <li>
          <div class="icons">
              <paper-icon-button
                  icon="icons:link"
                  @click="${()=>this._select(t)}"
                  title="link to"
              ></paper-icon-button>
          </div>
          <div class="link">
            ${t.link?I`<a target="_blank" href="${t.link}">${K(t.label)}</a>`:I`${K(t.label)}`}
          </div>
        ${t.occurrences>0?I`<div><span class="occurrences" part="occurrences">${t.occurrences}</span></div>`:null}
        ${t.provider?I`<div><span class="source" part="source">${t.provider}</span></div>`:null}
        <div><span class="register" part="register">${t.register}</span></div>

        ${this._authorities[this.type]&&this._authorities[this.type].editable?I`
            <pb-restricted group="${this.group}">
              <div class="icons">
                  <paper-icon-button
                      icon="editor:mode-edit"
                      @click="${()=>this._editEntity(t)}"
                      title="${W("annotations.edit-entity")}"
                  ></paper-icon-button>
              </div>
            </pb-restricted>`:null}
        ${t.details?I`<div class="details" part="details">${t.details}</div>`:null}

      </li>
    `}_select(t){const e=this._authorities[t.register],i={strings:t.strings,type:t.register,properties:{ref:t.id}};e?e.select(t).then(()=>this.emitTo("pb-authority-select",i)).catch(t=>this.emitTo("pb-authority-error",{status:t.message})):this.emitTo("pb-authority-select",i)}_editEntity(t){const e=this._authorities[t.register];e?e.select(t).then(()=>this.emitTo("pb-authority-edit-entity",{id:t.id,type:t.register})):this.emitTo("pb-authority-edit-entity",{id:t.id,type:t.register})}_queryChanged(){this._results=[],this.query=this.shadowRoot.getElementById("query").value,this._query()}_query(){this.emitTo("pb-start-update"),this._authorities[this.type].query(this.query).then(t=>{this._occurrences(t.items).then(t=>{this._results=t}),this.emitTo("pb-end-update"),this.shadowRoot.getElementById("query").focus()})}_addEntity(){this.emitTo("pb-authority-new-entity",{query:this.query,type:this.type})}_occurrences(t){const e=new FormData;return e.append("register",this.type),t.forEach(t=>{e.append("id",t.id)}),new Promise(i=>{fetch(this.getEndpoint()+"/api/annotations/occurrences",{method:"POST",body:e}).then(t=>{if(t.ok)return t.json()}).then(e=>{t.forEach(t=>{e[t.id]?t.occurrences=e[t.id]:t.occurrences=0}),t.sort((t,e)=>{const i=e.occurrences-t.occurrences;return 0===i?"local"===t.provider&&"local"!==e.provider?-1:"local"===e.provider&&"local"!==t.provider?1:this.sortByLabel?t.label.localeCompare(e.label):0:i}),i(t)})})}static get styles(){return R`
      :host {
        display: flex;
        flex-direction: column;
      }

      header {
        display: flex;
        align-items: center;
      }

      .link {
        flex-grow: 2;
      }
      #output {
        overflow: auto;
        /*FireFox*/
        scrollbar-width: none;
      }

      /*
      #output .icons{
          visibility: hidden;
      }
      #output .icons:hover{
          visibility: visible;
      }
      */

      #output ul {
        width: 100%;
        padding: 0;
        list-style: none;
      }
      #output li {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          border-bottom: 1px solid #efefef;
      }
        #output li:hover{
            background:#efefef;
        }
      #output td:nth-child(3), #output td:nth-child(4), #output td:nth-child(5) {
        text-align: right;
        vertical-align: middle;
      }

      .details, .source, .register, .occurrences {
        font-size: .85rem;
          width: 100%;
      }

      .source, .register, .occurrences {
        border-radius: 4px;
        padding: 4px;
        color: var(--pb-color-inverse);
      }

      .source {
        background-color: #637b8c;
      }
      .register {
        background-color: var(--pb-color-lighter);
      }
      .occurrences {
        background-color: var(--pb-color-focus);
      }
    `}}customElements.define("pb-authority-lookup",jl);class ql extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{data:{type:Object},documents:{type:Array},doc:{type:String},perPage:{type:Number,attribute:"per-page"},pattern:{type:String},first:{type:Number},sort:{type:String},target:{type:String,attribute:"target"}})}constructor(){super(),this.data={documents:[]},this.documents=[],this.first=1,this.doc=null,this.sort=null}static get styles(){return R`
            :host {
                display: block;
                max-width:100%;
            }
            table{
                width:100%;
            }
            .docName{
                text-align:left;
            }
            pb-paginate{
                justify-content:center;
                padding-bottom:3rem;
            }
            th, td{
                padding:0.3rem;
            }
            th:nth-child(1),td:nth-child(1){
                width:35%;
            }
            th:nth-child(5), td:nth-child(5){
                width:35%;
            }
            .left, .hit-count{
                text-align:right;
            }
            .right{
                text-align:left;
            }
            td.hit{
                text-align:center;
                white-space:nowrap;
            }
            table{
                cell-spacing:0;
                cell-padding:0;
            }
            tr{
                cell-spacing:0;
                cell-padding:0;
            }
            .t-head th{
                border-bottom:thin solid #999;
            }
            td.hit{
                position:relative;
                padding:0 1rem;
            }
            [icon=create]{
                display:none;
                position:absolute;
                top:-8px;
                right:-8px;
                color:blue;
            }
            td.hit:hover [icon=create]{
                display:inline-block;
            }

        `}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-load",t=>{this.first=Number(t.detail.params.start),this.load()}),this.subscribeTo("force-load",t=>{this.load(),this.requestUpdate()}),this.subscribeTo("pb-results-received",t=>{this.data=t.detail.data,this.documents=this.data.documents,this._animate()})}render(){return I`
            <pb-paginate part="paginator" per-page="${this.perPage}" range="5"></pb-paginate>
            <table>
                <tr class="t-head">
                    <th class="docName">Doc Id</th>
                    <th class="left">before</th>
                    <th>hit</th>
                    <th class="right">after</th>
                    <th class="hit-count">hits</th>
                </tr>
                ${this.documents.map(t=>I`
                    <tr>
                        <td colspan="4" class="docName">
                            <a href="${this.target}/${t.id}.xml?pattern=${this.pattern}&page=${t.matches[0].page[0]}"
                               target="_blank">${t.id}</a>
                        </td>
                        <td class="hit-count">
                            <span class="hit-count">${t.hits}</span>
                        </td>
                    </tr>
                    ${t.matches.map(e=>I`
                        <tr>
                            <td class="left" colspan="2">${e.left}</td>
                            <td class="hit">
                                <a href="${this.target}/${t.id}.xml?pattern=${this.pattern}&match=${e.match.words[0]}&page=${e.page[0]}" target="_blank">${e.match.display}</a>
                                <!--<paper-icon-button icon="create"></paper-icon-button>-->
                            </td>
                            <td class="right" colspan="2">${e.right}</td>
                        </tr>
                    `)}
                `)}
            </table>
        `}async load(){if(!this.getEndpoint())return;if(!this.pattern)return;let t=`${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}`;this.doc&&(t+="&doc="+this.doc),this.sort&&(t+="&sort="+this.sort),await fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}).then(t=>t.json()).then(t=>{this.data=t,localStorage.setItem("pb-kwic-results",JSON.stringify(this.data)),this.emitTo("pb-results-received",{count:t.docs?parseInt(t.docs,10):0,start:t.start,params:t.params,data:t},[])}).catch(t=>{alert("Error retrieving remote content: "+t)})}_animate(){Zs({targets:this.shadowRoot.querySelector("table"),opacity:[0,1],duration:200,delay:200,easing:"linear"})}}customElements.define("pb-blacklab-results",ql);class Ul extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{current:{type:Number},view:{type:String},pattern:{type:String},match:{type:String},docid:{type:String},hits:{type:Array},kwicData:{type:Object},matchParam:{type:String},pageId:{type:String},perDocument:{type:Number,attribute:"per-document"}})}connectedCallback(){super.connectedCallback(),this.current=1,this.perDocument=100,this.hits=[],this.kwicData={},B("pb-page-ready",()=>{this.viewElement=document.getElementById(this.view),this.viewElement?this.shadow=this.viewElement.shadowRoot:console.error(`${this}: view element with id ${this.view} does not exist`)}),this.subscribeTo("pb-update",()=>{this._loadDocResults()}),this.subscribeTo("pb-refresh",t=>{this.dynMatch=t.detail.match})}render(){return I`
            ${0!==this.hits.length?I`
                <section class="kwic-display">
                    <paper-icon-button icon="icons:arrow-back" @click="${this._handlePrev}" ?disabled="${1===this.current}"></paper-icon-button>
                    <span class="current">${this.current}</span> / <span class="counter">${this.count}</span>
                    <paper-icon-button icon="icons:arrow-forward" @click="${this._handleNext}" ?disabled="${this.current===this.hits.length}"></paper-icon-button>
                </section>`:""}
        `}async _loadDocResults(){if(!this.getEndpoint())return;const t=new URLSearchParams(window.location.search);this.pattern=t.get("pattern"),this.dynMatch?this.matchParam=this.dynMatch:this.matchParam=t.get("match"),this.pageId=t.get("id"),this.docId=t.get("doc");const e=`${this.getEndpoint()}/api/blacklab/doc?pattern=${this.pattern}&doc=${this.docId}&per-document=${this.perDocument}&format=json`;await fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}).then(t=>t.json()).then(t=>{this.kwicData=t}).then(()=>{this._markAllMatches(),this._showMatch(this.matchParam)}).catch(t=>{console.error("Error retrieving remote content: ",t)})}_markAllMatches(){const t=this.kwicData.documents;if(this.count=this.kwicData.hits,this.hits=t[Object.keys(t)[0]].hits,Array.isArray(this.hits))this.hits.forEach(t=>{const e=t.match.words[0],i=t.match.words[1];this._addMarkerClasses(e,i)});else{const t=this.hits.match.words[0],e=this.hits.match.words[1];this._addMarkerClasses(t,e)}this.requestUpdate()}_showMatch(t){const e=this._getMatchObject(t);this._navigateToMatch(e)}_getMatchObject(t){if(!t)return Array.isArray(this.hits)?this.hits[this.current-1]:this.hits;if(Array.isArray(this.hits)){const e=this.hits.find(e=>e.match.words[0]===t);return this.current=this.hits.findIndex(t=>t===e)+1,e}return this.current=1,this.hits}_navigateToMatch(t){const e=t.page[0],i=t.match.words[0],n=`${this._endpoint}/${this.docId}.xml?doc=${this.docId}&pattern=${this.pattern}&match=${t.match.words[0]}&id=${e}`;this.pageId!==e?this.emitTo("pb-refresh",{id:e,match:i}):(this._highlight(t),window.history.replaceState({},"",n))}_highlight(t){this._resetCurrentMarker();const e=t.match.words[0],i=t.match.words[1],n=this.shadow.querySelector("#"+e);n&&n.parentNode.classList.add("kwic-current");const r=this.shadow.querySelector("#"+i);r&&r.parentNode.classList.add("kwic-current"),n.scrollIntoView({block:"center",inline:"nearest"})}_resetCurrentMarker(){const t=this.shadow.querySelectorAll(".kwic-current");Array.from(t).forEach(t=>{t.classList.remove("kwic-current")})}_addMarkerClasses(t,e){const i=this.shadow.querySelector("#"+t);if(!i)return;i.parentNode.classList.add("kwic-start");const n=this.shadow.getElementById(e);n?n.parentNode.classList.add("kwic-end"):i.classList.add("kwic-end")}_handlePrev(){this.current-=1;const t=this.hits[this.current-1];this._navigateToMatch(t)}_handleNext(){const t=this.hits[this.current];this._navigateToMatch(t),this.current+=1}static get styles(){return R`
            :host {
                display: block;
            }
            .counter, .current{
                padding:0 0.5rem;
            }

        `}}function Wl(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Yl(t,e,i){return e&&Wl(t.prototype,e),i&&Wl(t,i),t}function Gl(){return(Gl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function Kl(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Xl(t,e)}function Xl(t,e){return(Xl=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Zl(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ql(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function Jl(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return Ql(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Ql(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}customElements.define("pb-blacklab-highlight",Ul);var tc,ec,ic,nc,rc,oc,sc,ac={},lc=[],cc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function hc(t,e){for(var i in e)t[i]=e[i];return t}function dc(t){var e=t.parentNode;e&&e.removeChild(t)}function pc(t,e,i){var n,r,o,s={};for(o in e)"key"==o?n=e[o]:"ref"==o?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?tc.call(arguments,2):i),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===s[o]&&(s[o]=t.defaultProps[o]);return uc(t,s,n,r,null)}function uc(t,e,i,n,r){var o={type:t,props:e,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++ic:r};return null==r&&null!=ec.vnode&&ec.vnode(o),o}function gc(t){return t.children}function fc(t,e){this.props=t,this.context=e}function mc(t,e){if(null==e)return t.__?mc(t.__,t.__.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e)return i.__e;return"function"==typeof t.type?mc(t):null}function vc(t){var e,i;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e){t.__e=t.__c.base=i.__e;break}return vc(t)}}function bc(t){(!t.__d&&(t.__d=!0)&&rc.push(t)&&!yc.__r++||oc!==ec.debounceRendering)&&((oc=ec.debounceRendering)||setTimeout)(yc)}function yc(){for(var t;yc.__r=rc.length;)t=rc.sort((function(t,e){return t.__v.__b-e.__v.__b})),rc=[],t.some((function(t){var e,i,n,r,o,s;t.__d&&(o=(r=(e=t).__v).__e,(s=e.__P)&&(i=[],(n=hc({},r)).__v=r.__v+1,Cc(s,r,n,e.__n,void 0!==s.ownerSVGElement,null!=r.__h?[o]:null,i,null==o?mc(r):o,r.__h),Ec(i,r),r.__e!=o&&vc(r)))}))}function _c(t,e,i,n,r,o,s,a,l,c){var h,d,p,u,g,f,m,v=n&&n.__k||lc,b=v.length;for(i.__k=[],h=0;h<e.length;h++)if(null!=(u=i.__k[h]=null==(u=e[h])||"boolean"==typeof u?null:"string"==typeof u||"number"==typeof u||"bigint"==typeof u?uc(null,u,null,null,u):Array.isArray(u)?uc(gc,{children:u},null,null,null):u.__b>0?uc(u.type,u.props,u.key,null,u.__v):u)){if(u.__=i,u.__b=i.__b+1,null===(p=v[h])||p&&u.key==p.key&&u.type===p.type)v[h]=void 0;else for(d=0;d<b;d++){if((p=v[d])&&u.key==p.key&&u.type===p.type){v[d]=void 0;break}p=null}Cc(t,u,p=p||ac,r,o,s,a,l,c),g=u.__e,(d=u.ref)&&p.ref!=d&&(m||(m=[]),p.ref&&m.push(p.ref,null,u),m.push(d,u.__c||g,u)),null!=g?(null==f&&(f=g),"function"==typeof u.type&&u.__k===p.__k?u.__d=l=wc(u,l,t):l=xc(t,u,p,v,g,l),"function"==typeof i.type&&(i.__d=l)):l&&p.__e==l&&l.parentNode!=t&&(l=mc(p))}for(i.__e=f,h=b;h--;)null!=v[h]&&("function"==typeof i.type&&null!=v[h].__e&&v[h].__e==i.__d&&(i.__d=mc(n,h+1)),Mc(v[h],v[h]));if(m)for(h=0;h<m.length;h++)Lc(m[h],m[++h],m[++h])}function wc(t,e,i){for(var n,r=t.__k,o=0;r&&o<r.length;o++)(n=r[o])&&(n.__=t,e="function"==typeof n.type?wc(n,e,i):xc(i,n,n,r,n.__e,e));return e}function xc(t,e,i,n,r,o){var s,a,l;if(void 0!==e.__d)s=e.__d,e.__d=void 0;else if(null==i||r!=o||null==r.parentNode)t:if(null==o||o.parentNode!==t)t.appendChild(r),s=null;else{for(a=o,l=0;(a=a.nextSibling)&&l<n.length;l+=2)if(a==r)break t;t.insertBefore(r,o),s=o}return void 0!==s?s:r.nextSibling}function kc(t,e,i){"-"===e[0]?t.setProperty(e,i):t[e]=null==i?"":"number"!=typeof i||cc.test(e)?i:i+"px"}function Ac(t,e,i,n,r){var o;t:if("style"===e)if("string"==typeof i)t.style.cssText=i;else{if("string"==typeof n&&(t.style.cssText=n=""),n)for(e in n)i&&e in i||kc(t.style,e,"");if(i)for(e in i)n&&i[e]===n[e]||kc(t.style,e,i[e])}else if("o"===e[0]&&"n"===e[1])o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=i,i?n||t.addEventListener(e,o?zc:Sc,o):t.removeEventListener(e,o?zc:Sc,o);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==i?"":i;break t}catch(t){}"function"==typeof i||(null!=i&&(!1!==i||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,i):t.removeAttribute(e))}}function Sc(t){this.l[t.type+!1](ec.event?ec.event(t):t)}function zc(t){this.l[t.type+!0](ec.event?ec.event(t):t)}function Cc(t,e,i,n,r,o,s,a,l){var c,h,d,p,u,g,f,m,v,b,y,_,w,x=e.type;if(void 0!==e.constructor)return null;null!=i.__h&&(l=i.__h,a=e.__e=i.__e,e.__h=null,o=[a]),(c=ec.__b)&&c(e);try{t:if("function"==typeof x){if(m=e.props,v=(c=x.contextType)&&n[c.__c],b=c?v?v.props.value:c.__:n,i.__c?f=(h=e.__c=i.__c).__=h.__E:("prototype"in x&&x.prototype.render?e.__c=h=new x(m,b):(e.__c=h=new fc(m,b),h.constructor=x,h.render=Oc),v&&v.sub(h),h.props=m,h.state||(h.state={}),h.context=b,h.__n=n,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=x.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=hc({},h.__s)),hc(h.__s,x.getDerivedStateFromProps(m,h.__s))),p=h.props,u=h.state,d)null==x.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==x.getDerivedStateFromProps&&m!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,b),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,b)||e.__v===i.__v){h.props=m,h.state=h.__s,e.__v!==i.__v&&(h.__d=!1),h.__v=e,e.__e=i.__e,e.__k=i.__k,e.__k.forEach((function(t){t&&(t.__=e)})),h.__h.length&&s.push(h);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,b),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(p,u,g)}))}if(h.context=b,h.props=m,h.__v=e,h.__P=t,y=ec.__r,_=0,"prototype"in x&&x.prototype.render)h.state=h.__s,h.__d=!1,y&&y(e),c=h.render(h.props,h.state,h.context);else do{h.__d=!1,y&&y(e),c=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++_<25);h.state=h.__s,null!=h.getChildContext&&(n=hc(hc({},n),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(p,u)),w=null!=c&&c.type===gc&&null==c.key?c.props.children:c,_c(t,Array.isArray(w)?w:[w],e,i,n,r,o,s,a,l),h.base=e.__e,e.__h=null,h.__h.length&&s.push(h),f&&(h.__E=h.__=null),h.__e=!1}else null==o&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=Tc(i.__e,e,i,n,r,o,s,l);(c=ec.diffed)&&c(e)}catch(t){e.__v=null,(l||null!=o)&&(e.__e=a,e.__h=!!l,o[o.indexOf(a)]=null),ec.__e(t,e,i)}}function Ec(t,e){ec.__c&&ec.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){ec.__e(t,e.__v)}}))}function Tc(t,e,i,n,r,o,s,a){var l,c,h,d=i.props,p=e.props,u=e.type,g=0;if("svg"===u&&(r=!0),null!=o)for(;g<o.length;g++)if((l=o[g])&&"setAttribute"in l==!!u&&(u?l.localName===u:3===l.nodeType)){t=l,o[g]=null;break}if(null==t){if(null===u)return document.createTextNode(p);t=r?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,p.is&&p),o=null,a=!1}if(null===u)d===p||a&&t.data===p||(t.data=p);else{if(o=o&&tc.call(t.childNodes),c=(d=i.props||ac).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!a){if(null!=o)for(d={},g=0;g<t.attributes.length;g++)d[t.attributes[g].name]=t.attributes[g].value;(h||c)&&(h&&(c&&h.__html==c.__html||h.__html===t.innerHTML)||(t.innerHTML=h&&h.__html||""))}if(function(t,e,i,n,r){var o;for(o in i)"children"===o||"key"===o||o in e||Ac(t,o,null,i[o],n);for(o in e)r&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||i[o]===e[o]||Ac(t,o,e[o],i[o],n)}(t,p,d,r,a),h)e.__k=[];else if(g=e.props.children,_c(t,Array.isArray(g)?g:[g],e,i,n,r&&"foreignObject"!==u,o,s,o?o[0]:i.__k&&mc(i,0),a),null!=o)for(g=o.length;g--;)null!=o[g]&&dc(o[g]);a||("value"in p&&void 0!==(g=p.value)&&(g!==t.value||"progress"===u&&!g||"option"===u&&g!==d.value)&&Ac(t,"value",g,d.value,!1),"checked"in p&&void 0!==(g=p.checked)&&g!==t.checked&&Ac(t,"checked",g,d.checked,!1))}return t}function Lc(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){ec.__e(t,i)}}function Mc(t,e,i){var n,r;if(ec.unmount&&ec.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||Lc(n,null,e)),null!=(n=t.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(t){ec.__e(t,e)}n.base=n.__P=null}if(n=t.__k)for(r=0;r<n.length;r++)n[r]&&Mc(n[r],e,"function"!=typeof t.type);i||null==t.__e||dc(t.__e),t.__e=t.__d=void 0}function Oc(t,e,i){return this.constructor(t,i)}function $c(t,e,i){var n,r,o;ec.__&&ec.__(t,e),r=(n="function"==typeof i)?null:i&&i.__k||e.__k,o=[],Cc(e,t=(!n&&i||e).__k=pc(gc,null,[t]),r||ac,ac,void 0!==e.ownerSVGElement,!n&&i?[i]:r?null:e.firstChild?tc.call(e.childNodes):null,o,!n&&i?i:r?r.__e:e.firstChild,n),Ec(o,t)}function Hc(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}tc=lc.slice,ec={__e:function(t,e,i,n){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(t)),s=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(t,n||{}),s=r.__d),s)return r.__E=r}catch(e){t=e}throw t}},ic=0,nc=function(t){return null!=t&&void 0===t.constructor},fc.prototype.setState=function(t,e){var i;i=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=hc({},this.state),"function"==typeof t&&(t=t(hc({},i),this.props)),t&&hc(i,t),null!=t&&this.__v&&(e&&this.__h.push(e),bc(this))},fc.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),bc(this))},fc.prototype.render=gc,rc=[],yc.__r=0,sc=0;var Ic=function(){function t(t){this._id=void 0,this._id=t||Hc()}return Yl(t,[{key:"id",get:function(){return this._id}}]),t}(),Rc={search:{placeholder:"Type a keyword..."},sort:{sortAsc:"Sort column ascending",sortDesc:"Sort column descending"},pagination:{previous:"Previous",next:"Next",navigate:function(t,e){return"Page "+t+" of "+e},page:function(t){return"Page "+t},showing:"Showing",of:"of",to:"to",results:"results"},loading:"Loading...",noRecordsFound:"No matching records found",error:"An error happened while fetching the data"},Pc=function(){function t(t){this._language=void 0,this._defaultLanguage=void 0,this._language=t,this._defaultLanguage=Rc}var e=t.prototype;return e.getString=function(t,e){if(!e||!t)return null;var i=t.split("."),n=i[0];if(e[n]){var r=e[n];return"string"==typeof r?function(){return r}:"function"==typeof r?r:this.getString(i.slice(1).join("."),r)}return null},e.translate=function(t){var e;return(e=this.getString(t,this._language)||this.getString(t,this._defaultLanguage))?e.apply(void 0,[].slice.call(arguments,1)):t},t}(),Vc=function(t){function e(e,i){var n,r;return(n=t.call(this,e,i)||this).config=void 0,n._=void 0,n.config=function(t){if(!t)return null;var e=Object.keys(t);return e.length?t[e[0]].props.value:null}(i),n.config&&(n._=(r=n.config.translator,function(t){return r.translate.apply(r,[t].concat([].slice.call(arguments,1)))})),n}return Kl(e,t),e}(fc),Dc=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype.render=function(){return pc(this.props.parentElement,{dangerouslySetInnerHTML:{__html:this.props.content}})},e}(Vc);function Nc(t,e){return pc(Dc,{content:t,parentElement:e})}Dc.defaultProps={parentElement:"span"};var Fc,Bc=function(t){function e(e){var i;return(i=t.call(this)||this).data=void 0,i.update(e),i}Kl(e,t);var i=e.prototype;return i.cast=function(t){return t instanceof HTMLElement?Nc(t.outerHTML):t},i.update=function(t){return this.data=this.cast(t),this},e}(Ic),jc=function(t){function e(e){var i;return(i=t.call(this)||this)._cells=void 0,i.cells=e||[],i}Kl(e,t);var i=e.prototype;return i.cell=function(t){return this._cells[t]},i.toArray=function(){return this.cells.map((function(t){return t.data}))},e.fromCells=function(t){return new e(t.map((function(t){return new Bc(t.data)})))},Yl(e,[{key:"cells",get:function(){return this._cells},set:function(t){this._cells=t}},{key:"length",get:function(){return this.cells.length}}]),e}(Ic),qc=function(t){function e(e){var i;return(i=t.call(this)||this)._rows=void 0,i._length=void 0,i.rows=e instanceof Array?e:e instanceof jc?[e]:[],i}return Kl(e,t),e.prototype.toArray=function(){return this.rows.map((function(t){return t.toArray()}))},e.fromRows=function(t){return new e(t.map((function(t){return jc.fromCells(t.cells)})))},e.fromArray=function(t){return new e((t=function(t){return!t[0]||t[0]instanceof Array?t:[t]}(t)).map((function(t){return new jc(t.map((function(t){return new Bc(t)})))})))},Yl(e,[{key:"rows",get:function(){return this._rows},set:function(t){this._rows=t}},{key:"length",get:function(){return this._length||this.rows.length},set:function(t){this._length=t}}]),e}(Ic),Uc=function(){function t(){this.callbacks=void 0}var e=t.prototype;return e.init=function(t){this.callbacks||(this.callbacks={}),t&&!this.callbacks[t]&&(this.callbacks[t]=[])},e.on=function(t,e){return this.init(t),this.callbacks[t].push(e),this},e.off=function(t,e){var i=t;return this.init(),this.callbacks[i]&&0!==this.callbacks[i].length?(this.callbacks[i]=this.callbacks[i].filter((function(t){return t!=e})),this):this},e.emit=function(t){var e=arguments,i=t;return this.init(i),this.callbacks[i].length>0&&(this.callbacks[i].forEach((function(t){return t.apply(void 0,[].slice.call(e,1))})),!0)},t}();!function(t){t[t.Initiator=0]="Initiator",t[t.ServerFilter=1]="ServerFilter",t[t.ServerSort=2]="ServerSort",t[t.ServerLimit=3]="ServerLimit",t[t.Extractor=4]="Extractor",t[t.Transformer=5]="Transformer",t[t.Filter=6]="Filter",t[t.Sort=7]="Sort",t[t.Limit=8]="Limit"}(Fc||(Fc={}));var Wc=function(t){function e(e){var i;return(i=t.call(this)||this).id=void 0,i._props=void 0,i._props={},i.id=Hc(),e&&i.setProps(e),i}Kl(e,t);var i=e.prototype;return i.process=function(){var t=[].slice.call(arguments);this.validateProps instanceof Function&&this.validateProps.apply(this,t),this.emit.apply(this,["beforeProcess"].concat(t));var e=this._process.apply(this,t);return this.emit.apply(this,["afterProcess"].concat(t)),e},i.setProps=function(t){return Object.assign(this._props,t),this.emit("propsUpdated",this),this},Yl(e,[{key:"props",get:function(){return this._props}}]),e}(Uc),Yc=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype._process=function(t){return this.props.keyword?(e=String(this.props.keyword).trim(),i=this.props.columns,n=this.props.ignoreHiddenColumns,r=t,o=this.props.selector,e=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new qc(r.rows.filter((function(t,r){return t.cells.some((function(t,s){if(!t)return!1;if(n&&i&&i[s]&&"object"==typeof i[s]&&i[s].hidden)return!1;var a="";if("function"==typeof o)a=o(t.data,r,s);else if("object"==typeof t.data){var l=t.data;l&&l.props&&l.props.content&&(a=l.props.content)}else a=String(t.data);return new RegExp(e,"gi").test(a)}))})))):t;var e,i,n,r,o},Yl(e,[{key:"type",get:function(){return Fc.Filter}}]),e}(Wc);function Gc(){return""+"gridjs"+[].slice.call(arguments).reduce((function(t,e){return t+"-"+e}),"")}function Kc(){return[].slice.call(arguments).filter((function(t){return t})).reduce((function(t,e){return(t||"")+" "+e}),"").trim()||null}var Xc,Zc=function(t){function e(e){var i;return(i=t.call(this)||this)._state=void 0,i.dispatcher=void 0,i.dispatcher=e,i._state=i.getInitialState(),e.register(i._handle.bind(Zl(i))),i}Kl(e,t);var i=e.prototype;return i._handle=function(t){this.handle(t.type,t.payload)},i.setState=function(t){var e=this._state;this._state=t,this.emit("updated",t,e)},Yl(e,[{key:"state",get:function(){return this._state}}]),e}(Uc),Qc=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.getInitialState=function(){return{keyword:null}},i.handle=function(t,e){"SEARCH_KEYWORD"===t&&this.search(e.keyword)},i.search=function(t){this.setState({keyword:t})},e}(Zc),Jc=function(){function t(t){this.dispatcher=void 0,this.dispatcher=t}return t.prototype.dispatch=function(t,e){this.dispatcher.dispatch({type:t,payload:e})},t}(),th=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype.search=function(t){this.dispatch("SEARCH_KEYWORD",{keyword:t})},e}(Jc),eh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype._process=function(t){if(!this.props.keyword)return t;var e={};return this.props.url&&(e.url=this.props.url(t.url,this.props.keyword)),this.props.body&&(e.body=this.props.body(t.body,this.props.keyword)),Gl({},t,e)},Yl(e,[{key:"type",get:function(){return Fc.ServerFilter}}]),e}(Wc),ih=new(function(){function t(){}var e=t.prototype;return e.format=function(t,e){return"[Grid.js] ["+e.toUpperCase()+"]: "+t},e.error=function(t,e){void 0===e&&(e=!1);var i=this.format(t,"error");if(e)throw Error(i);console.error(i)},e.warn=function(t){console.warn(this.format(t,"warn"))},e.info=function(t){console.info(this.format(t,"info"))},t}()),nh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e}(Vc);!function(t){t[t.Header=0]="Header",t[t.Footer=1]="Footer",t[t.Cell=2]="Cell"}(Xc||(Xc={}));var rh=function(){function t(){this.plugins=void 0,this.plugins=[]}var e=t.prototype;return e.get=function(t){var e=this.plugins.filter((function(e){return e.id===t}));return e.length>0?e[0]:null},e.add=function(t){return t.id?null!==this.get(t.id)?(ih.error("Duplicate plugin ID: "+t.id),this):(this.plugins.push(t),this):(ih.error("Plugin ID cannot be empty"),this)},e.remove=function(t){return this.plugins.splice(this.plugins.indexOf(this.get(t)),1),this},e.list=function(t){return(null!=t||null!=t?this.plugins.filter((function(e){return e.position===t})):this.plugins).sort((function(t,e){return t.order-e.order}))},t}(),oh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype.render=function(){var t=this;if(this.props.pluginId){var e=this.config.plugin.get(this.props.pluginId);return e?pc(gc,{},pc(e.component,Gl({plugin:e},e.props,this.props.props))):null}return void 0!==this.props.position?pc(gc,{},this.config.plugin.list(this.props.position).map((function(e){return pc(e.component,Gl({plugin:e},e.props,t.props.props))}))):null},e}(Vc),sh=function(t){function e(e,i){var n;(n=t.call(this,e,i)||this).searchProcessor=void 0,n.actions=void 0,n.store=void 0,n.storeUpdatedFn=void 0,n.actions=new th(n.config.dispatcher),n.store=new Qc(n.config.dispatcher);var r,o=e.keyword;return e.enabled&&(o&&n.actions.search(o),n.storeUpdatedFn=n.storeUpdated.bind(Zl(n)),n.store.on("updated",n.storeUpdatedFn),r=e.server?new eh({keyword:e.keyword,url:e.server.url,body:e.server.body}):new Yc({keyword:e.keyword,columns:n.config.header&&n.config.header.columns,ignoreHiddenColumns:e.ignoreHiddenColumns||void 0===e.ignoreHiddenColumns,selector:e.selector}),n.searchProcessor=r,n.config.pipeline.register(r)),n}Kl(e,t);var i=e.prototype;return i.componentWillUnmount=function(){this.config.pipeline.unregister(this.searchProcessor),this.store.off("updated",this.storeUpdatedFn)},i.storeUpdated=function(t){this.searchProcessor.setProps({keyword:t.keyword})},i.onChange=function(t){this.actions.search(t.target.value)},i.render=function(){if(!this.props.enabled)return null;var t,e,i,n=this.onChange.bind(this);return this.searchProcessor instanceof eh&&(t=n,e=this.props.debounceTimeout,n=function(){var n=arguments;return new Promise((function(r){i&&clearTimeout(i),i=setTimeout((function(){return r(t.apply(void 0,[].slice.call(n)))}),e)}))}),pc("div",{className:Gc(Kc("search",this.config.className.search))},pc("input",{type:"search",placeholder:this._("search.placeholder"),"aria-label":this._("search.placeholder"),onInput:n,className:Kc(Gc("input"),Gc("search","input")),value:this.store.state.keyword}))},e}(nh);sh.defaultProps={debounceTimeout:250};var ah=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},i._process=function(t){var e=this.props.page;return new qc(t.rows.slice(e*this.props.limit,(e+1)*this.props.limit))},Yl(e,[{key:"type",get:function(){return Fc.Limit}}]),e}(Wc),lh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype._process=function(t){var e={};return this.props.url&&(e.url=this.props.url(t.url,this.props.page,this.props.limit)),this.props.body&&(e.body=this.props.body(t.body,this.props.page,this.props.limit)),Gl({},t,e)},Yl(e,[{key:"type",get:function(){return Fc.ServerLimit}}]),e}(Wc),ch=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).processor=void 0,n.onUpdateFn=void 0,n.setTotalFromTabularFn=void 0,n.state={limit:e.limit,page:e.page||0,total:0},n}Kl(e,t);var i=e.prototype;return i.componentWillMount=function(){var t,e=this;this.props.enabled&&(this.setTotalFromTabularFn=this.setTotalFromTabular.bind(this),this.props.server?(t=new lh({limit:this.state.limit,page:this.state.page,url:this.props.server.url,body:this.props.server.body}),this.config.pipeline.on("afterProcess",this.setTotalFromTabularFn)):(t=new ah({limit:this.state.limit,page:this.state.page})).on("beforeProcess",this.setTotalFromTabularFn),this.processor=t,this.config.pipeline.register(t),this.config.pipeline.on("error",(function(){e.setState({total:0,page:0})})))},i.setTotalFromTabular=function(t){this.setTotal(t.length)},i.onUpdate=function(t){this.props.resetPageOnUpdate&&t!==this.processor&&this.setPage(0)},i.componentDidMount=function(){this.onUpdateFn=this.onUpdate.bind(this),this.config.pipeline.on("updated",this.onUpdateFn)},i.componentWillUnmount=function(){this.config.pipeline.unregister(this.processor),this.config.pipeline.off("updated",this.onUpdateFn)},i.setPage=function(t){if(t>=this.pages||t<0||t===this.state.page)return null;this.setState({page:t}),this.processor.setProps({page:t})},i.setTotal=function(t){this.setState({total:t})},i.renderPages=function(){var t=this;if(this.props.buttonsCount<=0)return null;var e=Math.min(this.pages,this.props.buttonsCount),i=Math.min(this.state.page,Math.floor(e/2));return this.state.page+Math.floor(e/2)>=this.pages&&(i=e-(this.pages-this.state.page)),pc(gc,null,this.pages>e&&this.state.page-i>0&&pc(gc,null,pc("button",{tabIndex:0,role:"button",onClick:this.setPage.bind(this,0),title:this._("pagination.firstPage"),"aria-label":this._("pagination.firstPage"),className:this.config.className.paginationButton},this._("1")),pc("button",{tabIndex:-1,className:Kc(Gc("spread"),this.config.className.paginationButton)},"...")),Array.from(Array(e).keys()).map((function(e){return t.state.page+(e-i)})).map((function(e){return pc("button",{tabIndex:0,role:"button",onClick:t.setPage.bind(t,e),className:Kc(t.state.page===e?Kc(Gc("currentPage"),t.config.className.paginationButtonCurrent):null,t.config.className.paginationButton),title:t._("pagination.page",e+1),"aria-label":t._("pagination.page",e+1)},t._(""+(e+1)))})),this.pages>e&&this.pages>this.state.page+i+1&&pc(gc,null,pc("button",{tabIndex:-1,className:Kc(Gc("spread"),this.config.className.paginationButton)},"..."),pc("button",{tabIndex:0,role:"button",onClick:this.setPage.bind(this,this.pages-1),title:this._("pagination.page",this.pages),"aria-label":this._("pagination.page",this.pages),className:this.config.className.paginationButton},this._(""+this.pages))))},i.renderSummary=function(){return pc(gc,null,this.props.summary&&this.state.total>0&&pc("div",{role:"status","aria-live":"polite",className:Kc(Gc("summary"),this.config.className.paginationSummary),title:this._("pagination.navigate",this.state.page+1,this.pages)},this._("pagination.showing")," ",pc("b",null,this._(""+(this.state.page*this.state.limit+1)))," ",this._("pagination.to")," ",pc("b",null,this._(""+Math.min((this.state.page+1)*this.state.limit,this.state.total)))," ",this._("pagination.of")," ",pc("b",null,this._(""+this.state.total))," ",this._("pagination.results")))},i.render=function(){return this.props.enabled?pc("div",{className:Kc(Gc("pagination"),this.config.className.pagination)},this.renderSummary(),pc("div",{className:Gc("pages")},this.props.prevButton&&pc("button",{tabIndex:0,role:"button",disabled:0===this.state.page,onClick:this.setPage.bind(this,this.state.page-1),title:this._("pagination.previous"),"aria-label":this._("pagination.previous"),className:Kc(this.config.className.paginationButton,this.config.className.paginationButtonPrev)},this._("pagination.previous")),this.renderPages(),this.props.nextButton&&pc("button",{tabIndex:0,role:"button",disabled:this.pages===this.state.page+1||0===this.pages,onClick:this.setPage.bind(this,this.state.page+1),title:this._("pagination.next"),"aria-label":this._("pagination.next"),className:Kc(this.config.className.paginationButton,this.config.className.paginationButtonNext)},this._("pagination.next")))):null},Yl(e,[{key:"pages",get:function(){return Math.ceil(this.state.total/this.state.limit)}}]),e}(nh);function hh(t,e){return"string"==typeof t?t.indexOf("%")>-1?e/100*parseInt(t,10):parseInt(t,10):t}function dh(t){return t?Math.floor(t)+"px":""}ch.defaultProps={summary:!0,nextButton:!0,prevButton:!0,buttonsCount:3,limit:10,resetPageOnUpdate:!0};var ph=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).tableElement=void 0,n.tableClassName=void 0,n.tableStyle=void 0,n.tableElement=n.props.tableRef.current.base.cloneNode(!0),n.tableElement.style.position="absolute",n.tableElement.style.width="100%",n.tableElement.style.zIndex="-2147483640",n.tableElement.style.visibility="hidden",n.tableClassName=n.tableElement.className,n.tableStyle=n.tableElement.style.cssText,n}Kl(e,t);var i=e.prototype;return i.widths=function(){this.tableElement.className=this.tableClassName+" "+Gc("shadowTable"),this.tableElement.style.tableLayout="auto",this.tableElement.style.width="auto",this.tableElement.style.padding="0",this.tableElement.style.margin="0",this.tableElement.style.border="none",this.tableElement.style.outline="none";var t=Array.from(this.base.parentNode.querySelectorAll("thead th")).reduce((function(t,e){var i;return e.style.width=e.clientWidth+"px",Gl(((i={})[e.getAttribute("data-column-id")]={minWidth:e.clientWidth},i),t)}),{});return this.tableElement.className=this.tableClassName,this.tableElement.style.cssText=this.tableStyle,this.tableElement.style.tableLayout="auto",Array.from(this.base.parentNode.querySelectorAll("thead th")).reduce((function(t,e){return t[e.getAttribute("data-column-id")].width=e.clientWidth,t}),t)},i.render=function(){var t=this;return this.props.tableRef.current?pc("div",{ref:function(e){e&&e.appendChild(t.tableElement)}}):null},e}(Vc);function uh(t){if(!t)return"";var e=t.split(" ");return 1===e.length&&/([a-z][A-Z])+/g.test(t)?t:e.map((function(t,e){return 0==e?t.toLowerCase():t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join("")}var gh=function(t){function e(){var e;return(e=t.call(this)||this)._columns=void 0,e._columns=[],e}Kl(e,t);var i=e.prototype;return i.adjustWidth=function(t){var i=t.container,n=t.tableRef,r=t.tempRef,o=t.tempRef||!0;if(!i)return this;var s=i.clientWidth,a={current:null},l={};if(n.current&&o){var c=pc(ph,{tableRef:n});c.ref=a,$c(c,r.current),l=a.current.widths()}for(var h,d=Jl(e.tabularFormat(this.columns).reduce((function(t,e){return t.concat(e)}),[]));!(h=d()).done;){var p=h.value;p.columns&&p.columns.length>0||(!p.width&&o?p.id in l&&(p.width=dh(l[p.id].width),p.minWidth=dh(l[p.id].minWidth)):p.width=dh(hh(p.width,s)))}return n.current&&o&&$c(null,r.current),this},i.setSort=function(t,e){for(var i,n=Jl(e||this.columns||[]);!(i=n()).done;){var r=i.value;r.columns&&r.columns.length>0&&(r.sort={enabled:!1}),void 0===r.sort&&t.sort&&(r.sort={enabled:!0}),r.sort?"object"==typeof r.sort&&(r.sort=Gl({enabled:!0},r.sort)):r.sort={enabled:!1},r.columns&&this.setSort(t,r.columns)}},i.setFixedHeader=function(t,e){for(var i,n=Jl(e||this.columns||[]);!(i=n()).done;){var r=i.value;void 0===r.fixedHeader&&(r.fixedHeader=t.fixedHeader),r.columns&&this.setFixedHeader(t,r.columns)}},i.setResizable=function(t,e){for(var i,n=Jl(e||this.columns||[]);!(i=n()).done;){var r=i.value;void 0===r.resizable&&(r.resizable=t.resizable),r.columns&&this.setResizable(t,r.columns)}},i.setID=function(t){for(var e,i=Jl(t||this.columns||[]);!(e=i()).done;){var n=e.value;n.id||"string"!=typeof n.name||(n.id=uh(n.name)),n.id||ih.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'),n.columns&&this.setID(n.columns)}},i.populatePlugins=function(t,e){for(var i,n=Jl(e);!(i=n()).done;){var r=i.value;void 0!==r.plugin&&t.plugin.add(Gl({id:r.id,props:{}},r.plugin,{position:Xc.Cell}))}},e.fromColumns=function(t){for(var i,n=new e,r=Jl(t);!(i=r()).done;){var o=i.value;if("string"==typeof o||nc(o))n.columns.push({name:o});else if("object"==typeof o){var s=o;s.columns&&(s.columns=e.fromColumns(s.columns).columns),"object"==typeof s.plugin&&void 0===s.data&&(s.data=null),n.columns.push(o)}}return n},e.fromUserConfig=function(t){var i=new e;return t.from?i.columns=e.fromHTMLTable(t.from).columns:t.columns?i.columns=e.fromColumns(t.columns).columns:!t.data||"object"!=typeof t.data[0]||t.data[0]instanceof Array||(i.columns=Object.keys(t.data[0]).map((function(t){return{name:t}}))),i.columns.length?(i.setID(),i.setSort(t),i.setFixedHeader(t),i.setResizable(t),i.populatePlugins(t,i.columns),i):null},e.fromHTMLTable=function(t){for(var i,n=new e,r=Jl(t.querySelector("thead").querySelectorAll("th"));!(i=r()).done;){var o=i.value;n.columns.push({name:o.innerHTML,width:o.width})}return n},e.tabularFormat=function(t){var e=[],i=t||[],n=[];if(i&&i.length){e.push(i);for(var r,o=Jl(i);!(r=o()).done;){var s=r.value;s.columns&&s.columns.length&&(n=n.concat(s.columns))}n.length&&(e=e.concat(this.tabularFormat(n)))}return e},e.leafColumns=function(t){var e=[],i=t||[];if(i&&i.length)for(var n,r=Jl(i);!(n=r()).done;){var o=n.value;o.columns&&0!==o.columns.length||e.push(o),o.columns&&(e=e.concat(this.leafColumns(o.columns)))}return e},e.maximumDepth=function(t){return this.tabularFormat([t]).length-1},Yl(e,[{key:"columns",get:function(){return this._columns},set:function(t){this._columns=t}},{key:"visibleColumns",get:function(){return this._columns.filter((function(t){return!t.hidden}))}}]),e}(Ic),fh=function(){function t(){this._callbacks=void 0,this._isDispatching=void 0,this._isHandled=void 0,this._isPending=void 0,this._lastID=void 0,this._pendingPayload=void 0,this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}var e=t.prototype;return e.register=function(t){var e="ID_"+this._lastID++;return this._callbacks[e]=t,e},e.unregister=function(t){if(!this._callbacks[t])throw Error("Dispatcher.unregister(...): "+t+" does not map to a registered callback.");delete this._callbacks[t]},e.waitFor=function(t){if(!this._isDispatching)throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var i=t[e];if(this._isPending[i]){if(!this._isHandled[i])throw Error("Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for "+i+".")}else{if(!this._callbacks[i])throw Error("Dispatcher.waitFor(...): "+i+" does not map to a registered callback.");this._invokeCallback(i)}}},e.dispatch=function(t){if(this._isDispatching)throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");this._startDispatching(t);try{for(var e in this._callbacks)this._isPending[e]||this._invokeCallback(e)}finally{this._stopDispatching()}},e.isDispatching=function(){return this._isDispatching},e._invokeCallback=function(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0},e._startDispatching=function(t){for(var e in this._callbacks)this._isPending[e]=!1,this._isHandled[e]=!1;this._pendingPayload=t,this._isDispatching=!0},e._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},t}(),mh=function(){},vh=function(t){function e(e){var i;return(i=t.call(this)||this).data=void 0,i.set(e),i}Kl(e,t);var i=e.prototype;return i.get=function(){try{return Promise.resolve(this.data()).then((function(t){return{data:t,total:t.length}}))}catch(t){return Promise.reject(t)}},i.set=function(t){return t instanceof Array?this.data=function(){return t}:t instanceof Function&&(this.data=t),this},e}(mh),bh=function(t){function e(e){var i;return(i=t.call(this)||this).options=void 0,i.options=e,i}Kl(e,t);var i=e.prototype;return i.handler=function(t){return"function"==typeof this.options.handle?this.options.handle(t):t.ok?t.json():(ih.error("Could not fetch data: "+t.status+" - "+t.statusText,!0),null)},i.get=function(t){var e=Gl({},this.options,t);return"function"==typeof e.data?e.data(e):fetch(e.url,e).then(this.handler.bind(this)).then((function(t){return{data:e.then(t),total:"function"==typeof e.total?e.total(t):void 0}}))},e}(mh),yh=function(){function t(){}return t.createFromUserConfig=function(t){var e=null;return t.data&&(e=new vh(t.data)),t.from&&(e=new vh(this.tableElementToArray(t.from)),t.from.style.display="none"),t.server&&(e=new bh(t.server)),e||ih.error("Could not determine the storage type",!0),e},t.tableElementToArray=function(t){for(var e,i,n=[],r=Jl(t.querySelector("tbody").querySelectorAll("tr"));!(e=r()).done;){for(var o,s=[],a=Jl(e.value.querySelectorAll("td"));!(o=a()).done;){var l=o.value;1===l.childNodes.length&&l.childNodes[0].nodeType===Node.TEXT_NODE?s.push((i=l.innerHTML,(new DOMParser).parseFromString(i,"text/html").documentElement.textContent)):s.push(Nc(l.innerHTML))}n.push(s)}return n},t}(),_h="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function wh(t,e,i){if(!t.s){if(i instanceof xh){if(!i.s)return void(i.o=wh.bind(null,t,e));1&e&&(e=i.s),i=i.v}if(i&&i.then)return void i.then(wh.bind(null,t,e),wh.bind(null,t,2));t.s=e,t.v=i;var n=t.o;n&&n(t)}}var xh=function(){function t(){}return t.prototype.then=function(e,i){var n=new t,r=this.s;if(r){var o=1&r?e:i;if(o){try{wh(n,1,o(this.v))}catch(t){wh(n,2,t)}return n}return this}return this.o=function(t){try{var r=t.v;1&t.s?wh(n,1,e?e(r):r):i?wh(n,1,i(r)):wh(n,2,r)}catch(t){wh(n,2,t)}},n},t}();function kh(t){return t instanceof xh&&1&t.s}var Ah,Sh=function(t){function e(e){var i;return(i=t.call(this)||this)._steps=new Map,i.cache=new Map,i.lastProcessorIndexUpdated=-1,e&&e.forEach((function(t){return i.register(t)})),i}Kl(e,t);var i=e.prototype;return i.clearCache=function(){this.cache=new Map,this.lastProcessorIndexUpdated=-1},i.register=function(t,e){if(void 0===e&&(e=null),null===t.type)throw Error("Processor type is not defined");t.on("propsUpdated",this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(t,e),this.afterRegistered(t)},i.unregister=function(t){if(t){var e=this._steps.get(t.type);e&&e.length&&(this._steps.set(t.type,e.filter((function(e){return e!=t}))),this.emit("updated",t))}},i.addProcessorByPriority=function(t,e){var i=this._steps.get(t.type);if(!i){var n=[];this._steps.set(t.type,n),i=n}if(null===e||e<0)i.push(t);else if(i[e]){var r=i.slice(0,e-1),o=i.slice(e+1);this._steps.set(t.type,r.concat(t).concat(o))}else i[e]=t},i.getStepsByType=function(t){return this.steps.filter((function(e){return e.type===t}))},i.getSortedProcessorTypes=function(){return Object.keys(Fc).filter((function(t){return!isNaN(Number(t))})).map((function(t){return Number(t)}))},i.process=function(t){try{var e=this,i=function(t){return e.lastProcessorIndexUpdated=r.length,e.emit("afterProcess",o),o},n=e.lastProcessorIndexUpdated,r=e.steps,o=t,s=function(t,i){try{var s=function(t,e,i){if("function"==typeof t[_h]){var n,r,o,s=t[_h]();if(function t(i){try{for(;!(n=s.next()).done;)if((i=e(n.value))&&i.then){if(!kh(i))return void i.then(t,o||(o=wh.bind(null,r=new xh,2)));i=i.v}r?wh(r,1,i):r=i}catch(t){wh(r||(r=new xh),2,t)}}(),s.return){var a=function(t){try{n.done||s.return()}catch(t){}return t};if(r&&r.then)return r.then(a,(function(t){throw a(t)}));a()}return r}if(!("length"in t))throw new TypeError("Object is not iterable");for(var l=[],c=0;c<t.length;c++)l.push(t[c]);return function(t,e,i){var n,r,o=-1;return function i(s){try{for(;++o<t.length;)if((s=e(o))&&s.then){if(!kh(s))return void s.then(i,r||(r=wh.bind(null,n=new xh,2)));s=s.v}n?wh(n,1,s):n=s}catch(t){wh(n||(n=new xh),2,t)}}(),n}(l,(function(t){return e(l[t])}))}(r,(function(t){var i=e.findProcessorIndexByID(t.id),r=function(){if(i>=n)return Promise.resolve(t.process(o)).then((function(i){e.cache.set(t.id,o=i)}));o=e.cache.get(t.id)}();if(r&&r.then)return r.then((function(){}))}))}catch(t){return i(t)}return s&&s.then?s.then(void 0,i):s}(0,(function(t){throw ih.error(t),e.emit("error",o),t}));return Promise.resolve(s&&s.then?s.then(i):i())}catch(t){return Promise.reject(t)}},i.findProcessorIndexByID=function(t){return this.steps.findIndex((function(e){return e.id==t}))},i.setLastProcessorIndex=function(t){var e=this.findProcessorIndexByID(t.id);this.lastProcessorIndexUpdated>e&&(this.lastProcessorIndexUpdated=e)},i.processorPropsUpdated=function(t){this.setLastProcessorIndex(t),this.emit("propsUpdated"),this.emit("updated",t)},i.afterRegistered=function(t){this.setLastProcessorIndex(t),this.emit("afterRegister"),this.emit("updated",t)},Yl(e,[{key:"steps",get:function(){for(var t,e=[],i=Jl(this.getSortedProcessorTypes());!(t=i()).done;){var n=this._steps.get(t.value);n&&n.length&&(e=e.concat(n))}return e.filter((function(t){return t}))}}]),e}(Uc),zh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype._process=function(t){try{return Promise.resolve(this.props.storage.get(t))}catch(t){return Promise.reject(t)}},Yl(e,[{key:"type",get:function(){return Fc.Extractor}}]),e}(Wc),Ch=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype._process=function(t){var e=qc.fromArray(t.data);return e.length=t.total,e},Yl(e,[{key:"type",get:function(){return Fc.Transformer}}]),e}(Wc),Eh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype._process=function(){return Object.entries(this.props.serverStorageOptions).filter((function(t){return"function"!=typeof t[1]})).reduce((function(t,e){var i;return Gl({},t,((i={})[e[0]]=e[1],i))}),{})},Yl(e,[{key:"type",get:function(){return Fc.Initiator}}]),e}(Wc),Th=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.castData=function(t){if(!t||!t.length)return[];if(!this.props.header||!this.props.header.columns)return t;var e=gh.leafColumns(this.props.header.columns);return t[0]instanceof Array?t.map((function(t){var i=0;return e.map((function(e,n){return void 0!==e.data?(i++,"function"==typeof e.data?e.data(t):e.data):t[n-i]}))})):"object"!=typeof t[0]||t[0]instanceof Array?[]:t.map((function(t){return e.map((function(e,i){return void 0!==e.data?"function"==typeof e.data?e.data(t):e.data:e.id?t[e.id]:(ih.error("Could not find the correct cell for column at position "+i+".\n                          Make sure either 'id' or 'selector' is defined for all columns."),null)}))}))},i._process=function(t){return{data:this.castData(t.data),total:t.total}},Yl(e,[{key:"type",get:function(){return Fc.Transformer}}]),e}(Wc),Lh=function(){function t(){}return t.createFromConfig=function(t){var e=new Sh;return t.storage instanceof bh&&e.register(new Eh({serverStorageOptions:t.server})),e.register(new zh({storage:t.storage})),e.register(new Th({header:t.header})),e.register(new Ch),e},t}(),Mh=function(){function t(e){this._userConfig=void 0,Object.assign(this,Gl({},t.defaultConfig(),e)),this._userConfig={}}var e=t.prototype;return e.assign=function(t){for(var e=0,i=Object.keys(t);e<i.length;e++){var n=i[e];"_userConfig"!==n&&(this[n]=t[n])}return this},e.update=function(e){return e?(this._userConfig=Gl({},this._userConfig,e),this.assign(t.fromUserConfig(this._userConfig)),this):this},t.defaultConfig=function(){return{plugin:new rh,dispatcher:new fh,tableRef:{current:null},tempRef:{current:null},width:"100%",height:"auto",autoWidth:!0,style:{},className:{}}},t.fromUserConfig=function(e){var i=new t(e);return i._userConfig=e,"boolean"==typeof e.sort&&e.sort&&i.assign({sort:{multiColumn:!0}}),i.assign({header:gh.fromUserConfig(i)}),i.assign({storage:yh.createFromUserConfig(e)}),i.assign({pipeline:Lh.createFromConfig(i)}),i.assign({translator:new Pc(e.language)}),i.plugin.add({id:"search",position:Xc.Header,component:sh,props:Gl({enabled:!0===e.search||e.search instanceof Object},e.search)}),i.plugin.add({id:"pagination",position:Xc.Footer,component:ch,props:Gl({enabled:!0===e.pagination||e.pagination instanceof Object},e.pagination)}),e.plugins&&e.plugins.forEach((function(t){return i.plugin.add(t)})),i},t}();!function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Loaded=2]="Loaded",t[t.Rendered=3]="Rendered",t[t.Error=4]="Error"}(Ah||(Ah={}));var Oh,$h,Hh,Ih=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.content=function(){return this.props.column&&"function"==typeof this.props.column.formatter?this.props.column.formatter(this.props.cell.data,this.props.row,this.props.column):this.props.column&&this.props.column.plugin?pc(oh,{pluginId:this.props.column.id,props:{column:this.props.column,cell:this.props.cell,row:this.props.row}}):this.props.cell.data},i.handleClick=function(t){this.props.messageCell||this.config.eventEmitter.emit("cellClick",t,this.props.cell,this.props.column,this.props.row)},i.getCustomAttributes=function(t){return t?"function"==typeof t.attributes?t.attributes(this.props.cell.data,this.props.row,this.props.column):t.attributes:{}},i.render=function(){return pc("td",Gl({role:this.props.role,colSpan:this.props.colSpan,"data-column-id":this.props.column&&this.props.column.id,className:Kc(Gc("td"),this.props.className,this.config.className.td),style:Gl({},this.props.style,this.config.style.td),onClick:this.handleClick.bind(this)},this.getCustomAttributes(this.props.column)),this.content())},e}(Vc),Rh=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.getColumn=function(t){if(this.props.header){var e=gh.leafColumns(this.props.header.columns);if(e)return e[t]}return null},i.handleClick=function(t){this.props.messageRow||this.config.eventEmitter.emit("rowClick",t,this.props.row)},i.getChildren=function(){var t=this;return this.props.children?this.props.children:pc(gc,null,this.props.row.cells.map((function(e,i){var n=t.getColumn(i);return n&&n.hidden?null:pc(Ih,{key:e.id,cell:e,row:t.props.row,column:n})})))},i.render=function(){return pc("tr",{className:Kc(Gc("tr"),this.config.className.tr),onClick:this.handleClick.bind(this)},this.getChildren())},e}(Vc),Ph=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype.render=function(){return pc(Rh,{messageRow:!0},pc(Ih,{role:"alert",colSpan:this.props.colSpan,messageCell:!0,cell:new Bc(this.props.message),className:Kc(Gc("message"),this.props.className?this.props.className:null)}))},e}(Vc),Vh=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.headerLength=function(){return this.props.header?this.props.header.visibleColumns.length:0},i.render=function(){var t=this;return pc("tbody",{className:Kc(Gc("tbody"),this.config.className.tbody)},this.props.data&&this.props.data.rows.map((function(e){return pc(Rh,{key:e.id,row:e,header:t.props.header})})),this.props.status===Ah.Loading&&(!this.props.data||0===this.props.data.length)&&pc(Ph,{message:this._("loading"),colSpan:this.headerLength(),className:Kc(Gc("loading"),this.config.className.loading)}),this.props.status===Ah.Rendered&&this.props.data&&0===this.props.data.length&&pc(Ph,{message:this._("noRecordsFound"),colSpan:this.headerLength(),className:Kc(Gc("notfound"),this.config.className.notfound)}),this.props.status===Ah.Error&&pc(Ph,{message:this._("error"),colSpan:this.headerLength(),className:Kc(Gc("error"),this.config.className.error)}))},e}(Vc),Dh=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.validateProps=function(){for(var t,e=Jl(this.props.columns);!(t=e()).done;){var i=t.value;void 0===i.direction&&(i.direction=1),1!==i.direction&&-1!==i.direction&&ih.error("Invalid sort direction "+i.direction)}},i.compare=function(t,e){return t>e?1:t<e?-1:0},i.compareWrapper=function(t,e){for(var i,n=0,r=Jl(this.props.columns);!(i=r()).done;){var o=i.value;if(0!==n)break;var s=t.cells[o.index].data,a=e.cells[o.index].data;n|="function"==typeof o.compare?o.compare(s,a)*o.direction:this.compare(s,a)*o.direction}return n},i._process=function(t){var e=[].concat(t.rows);e.sort(this.compareWrapper.bind(this));var i=new qc(e);return i.length=t.length,i},Yl(e,[{key:"type",get:function(){return Fc.Sort}}]),e}(Wc),Nh=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.getInitialState=function(){return[]},i.handle=function(t,e){"SORT_COLUMN"===t?this.sortColumn(e.index,e.direction,e.multi,e.compare):"SORT_COLUMN_TOGGLE"===t&&this.sortToggle(e.index,e.multi,e.compare)},i.sortToggle=function(t,e,i){var n=[].concat(this.state).find((function(e){return e.index===t}));this.sortColumn(t,n&&1===n.direction?-1:1,e,i)},i.sortColumn=function(t,e,i,n){var r=[].concat(this.state),o=r.length,s=r.find((function(e){return e.index===t})),a=!1,l=!1,c=!1,h=!1;if(void 0!==s?i?-1===s.direction?c=!0:h=!0:1===o?h=!0:o>1&&(l=!0,a=!0):0===o?a=!0:o>0&&!i?(a=!0,l=!0):o>0&&i&&(a=!0),l&&(r=[]),a)r.push({index:t,direction:e,compare:n});else if(h){var d=r.indexOf(s);r[d].direction=e}else if(c){var p=r.indexOf(s);r.splice(p,1)}this.setState(r)},e}(Zc),Fh=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.sortColumn=function(t,e,i,n){this.dispatch("SORT_COLUMN",{index:t,direction:e,multi:i,compare:n})},i.sortToggle=function(t,e,i){this.dispatch("SORT_COLUMN_TOGGLE",{index:t,multi:e,compare:i})},e}(Jc),Bh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype._process=function(t){var e={};return this.props.url&&(e.url=this.props.url(t.url,this.props.columns)),this.props.body&&(e.body=this.props.body(t.body,this.props.columns)),Gl({},t,e)},Yl(e,[{key:"type",get:function(){return Fc.ServerSort}}]),e}(Wc),jh=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).sortProcessor=void 0,n.actions=void 0,n.store=void 0,n.updateStateFn=void 0,n.updateSortProcessorFn=void 0,n.actions=new Fh(n.config.dispatcher),n.store=new Nh(n.config.dispatcher),e.enabled&&(n.sortProcessor=n.getOrCreateSortProcessor(),n.updateStateFn=n.updateState.bind(Zl(n)),n.store.on("updated",n.updateStateFn),n.state={direction:0}),n}Kl(e,t);var i=e.prototype;return i.componentWillUnmount=function(){this.config.pipeline.unregister(this.sortProcessor),this.store.off("updated",this.updateStateFn),this.updateSortProcessorFn&&this.store.off("updated",this.updateSortProcessorFn)},i.updateState=function(){var t=this,e=this.store.state.find((function(e){return e.index===t.props.index}));this.setState(e?{direction:e.direction}:{direction:0})},i.updateSortProcessor=function(t){this.sortProcessor.setProps({columns:t})},i.getOrCreateSortProcessor=function(){var t=Fc.Sort;this.config.sort&&"object"==typeof this.config.sort.server&&(t=Fc.ServerSort);var e,i=this.config.pipeline.getStepsByType(t);return i.length>0?e=i[0]:(this.updateSortProcessorFn=this.updateSortProcessor.bind(this),this.store.on("updated",this.updateSortProcessorFn),e=t===Fc.ServerSort?new Bh(Gl({columns:this.store.state},this.config.sort.server)):new Dh({columns:this.store.state}),this.config.pipeline.register(e)),e},i.changeDirection=function(t){t.preventDefault(),t.stopPropagation(),this.actions.sortToggle(this.props.index,!0===t.shiftKey&&this.config.sort.multiColumn,this.props.compare)},i.render=function(){if(!this.props.enabled)return null;var t=this.state.direction,e="neutral";return 1===t?e="asc":-1===t&&(e="desc"),pc("button",{tabIndex:-1,"aria-label":this._("sort.sort"+(1===t?"Desc":"Asc")),title:this._("sort.sort"+(1===t?"Desc":"Asc")),className:Kc(Gc("sort"),Gc("sort",e),this.config.className.sort),onClick:this.changeDirection.bind(this)})},e}(Vc),qh=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).moveFn=void 0,e.upFn=void 0,e}Kl(e,t);var i=e.prototype;return i.getPageX=function(t){return t instanceof MouseEvent?Math.floor(t.pageX):Math.floor(t.changedTouches[0].pageX)},i.start=function(t){var e,i,n,r,o;t.stopPropagation(),this.setState({offsetStart:parseInt(this.props.thRef.current.style.width,10)-this.getPageX(t)}),this.upFn=this.end.bind(this),this.moveFn=(e=this.move.bind(this),void 0===(i=10)&&(i=100),function(){var t=[].slice.call(arguments);n?(clearTimeout(r),r=setTimeout((function(){Date.now()-o>=i&&(e.apply(void 0,t),o=Date.now())}),Math.max(i-(Date.now()-o),0))):(e.apply(void 0,t),o=Date.now(),n=!0)}),document.addEventListener("mouseup",this.upFn),document.addEventListener("touchend",this.upFn),document.addEventListener("mousemove",this.moveFn),document.addEventListener("touchmove",this.moveFn)},i.move=function(t){t.stopPropagation();var e=this.props.thRef.current;this.state.offsetStart+this.getPageX(t)>=parseInt(e.style.minWidth,10)&&(e.style.width=this.state.offsetStart+this.getPageX(t)+"px")},i.end=function(t){t.stopPropagation(),document.removeEventListener("mouseup",this.upFn),document.removeEventListener("mousemove",this.moveFn),document.removeEventListener("touchmove",this.moveFn),document.removeEventListener("touchend",this.upFn)},i.render=function(){return pc("div",{className:Kc(Gc("th"),Gc("resizable")),onMouseDown:this.start.bind(this),onTouchStart:this.start.bind(this),onClick:function(t){return t.stopPropagation()}})},e}(Vc),Uh=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).sortRef={current:null},n.thRef={current:null},n.state={style:{}},n}Kl(e,t);var i=e.prototype;return i.isSortable=function(){return this.props.column.sort.enabled},i.isResizable=function(){return this.props.column.resizable},i.onClick=function(t){t.stopPropagation(),this.isSortable()&&this.sortRef.current.changeDirection(t)},i.keyDown=function(t){this.isSortable()&&13===t.which&&this.onClick(t)},i.componentDidMount=function(){var t=this;setTimeout((function(){if(t.props.column.fixedHeader&&t.thRef.current){var e=t.thRef.current.offsetTop;"number"==typeof e&&t.setState({style:{top:e}})}}),0)},i.content=function(){return void 0!==this.props.column.name?this.props.column.name:void 0!==this.props.column.plugin?pc(oh,{pluginId:this.props.column.plugin.id,props:{column:this.props.column}}):null},i.getCustomAttributes=function(){var t=this.props.column;return t?"function"==typeof t.attributes?t.attributes(null,null,this.props.column):t.attributes:{}},i.render=function(){var t={};return this.isSortable()&&(t.tabIndex=0),pc("th",Gl({ref:this.thRef,"data-column-id":this.props.column&&this.props.column.id,className:Kc(Gc("th"),this.isSortable()?Gc("th","sort"):null,this.props.column.fixedHeader?Gc("th","fixed"):null,this.config.className.th),onClick:this.onClick.bind(this),style:Gl({},this.config.style.th,{minWidth:this.props.column.minWidth,width:this.props.column.width},this.state.style,this.props.style),onKeyDown:this.keyDown.bind(this),rowSpan:this.props.rowSpan>1?this.props.rowSpan:void 0,colSpan:this.props.colSpan>1?this.props.colSpan:void 0},this.getCustomAttributes(),t),pc("div",{className:Gc("th","content")},this.content()),this.isSortable()&&pc(jh,Gl({ref:this.sortRef,index:this.props.index},this.props.column.sort)),this.isResizable()&&this.props.index<this.config.header.visibleColumns.length-1&&pc(qh,{column:this.props.column,thRef:this.thRef}))},e}(Vc),Wh=function(t){function e(){return t.apply(this,arguments)||this}Kl(e,t);var i=e.prototype;return i.renderColumn=function(t,e,i,n){var r=function(t,e,i){var n=gh.maximumDepth(t),r=i-e;return{rowSpan:Math.floor(r-n-n/r),colSpan:t.columns&&t.columns.length||1}}(t,e,n);return pc(Uh,{column:t,index:i,colSpan:r.colSpan,rowSpan:r.rowSpan})},i.renderRow=function(t,e,i){var n=this,r=gh.leafColumns(this.props.header.columns);return pc(Rh,null,t.map((function(t){return t.hidden?null:n.renderColumn(t,e,r.indexOf(t),i)})))},i.renderRows=function(){var t=this,e=gh.tabularFormat(this.props.header.columns);return e.map((function(i,n){return t.renderRow(i,n,e.length)}))},i.render=function(){return this.props.header?pc("thead",{key:this.props.header.id,className:Kc(Gc("thead"),this.config.className.thead)},this.renderRows()):null},e}(Vc),Yh=function(t){function e(){return t.apply(this,arguments)||this}return Kl(e,t),e.prototype.render=function(){return pc("table",{role:"grid",className:Kc(Gc("table"),this.config.className.table),style:Gl({},this.config.style.table,{height:this.props.height})},pc(Wh,{header:this.props.header}),pc(Vh,{data:this.props.data,status:this.props.status,header:this.props.header}))},e}(Vc),Gh=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).headerRef={current:null},n.state={isActive:!0},n}Kl(e,t);var i=e.prototype;return i.componentDidMount=function(){0===this.headerRef.current.children.length&&this.setState({isActive:!1})},i.render=function(){return this.state.isActive?pc("div",{ref:this.headerRef,className:Kc(Gc("head"),this.config.className.header),style:Gl({},this.config.style.header)},pc(oh,{position:Xc.Header})):null},e}(Vc),Kh=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).footerRef={current:null},n.state={isActive:!0},n}Kl(e,t);var i=e.prototype;return i.componentDidMount=function(){0===this.footerRef.current.children.length&&this.setState({isActive:!1})},i.render=function(){return this.state.isActive?pc("div",{ref:this.footerRef,className:Kc(Gc("footer"),this.config.className.footer),style:Gl({},this.config.style.footer)},pc(oh,{position:Xc.Footer})):null},e}(Vc),Xh=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).configContext=void 0,n.processPipelineFn=void 0,n.configContext=function(t,e){var i={__c:e="__cC"+sc++,__:null,Consumer:function(t,e){return t.children(e)},Provider:function(t){var i,n;return this.getChildContext||(i=[],(n={})[e]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&i.some(bc)},this.sub=function(t){i.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){i.splice(i.indexOf(t),1),e&&e.call(t)}}),t.children}};return i.Provider.__=i.Consumer.contextType=i}(),n.state={status:Ah.Loading,header:e.header,data:null},n}Kl(e,t);var i=e.prototype;return i.processPipeline=function(){try{var t=this;t.props.config.eventEmitter.emit("beforeLoad"),t.setState({status:Ah.Loading});var e=function(e,i){try{var n=Promise.resolve(t.props.pipeline.process()).then((function(e){t.setState({data:e,status:Ah.Loaded}),t.props.config.eventEmitter.emit("load",e)}))}catch(t){return i(t)}return n&&n.then?n.then(void 0,i):n}(0,(function(e){ih.error(e),t.setState({status:Ah.Error,data:null})}));return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},i.componentDidMount=function(){try{var t=this,e=t.props.config;return Promise.resolve(t.processPipeline()).then((function(){e.header&&t.state.data&&t.state.data.length&&t.setState({header:e.header.adjustWidth(e)}),t.processPipelineFn=t.processPipeline.bind(t),t.props.pipeline.on("updated",t.processPipelineFn)}))}catch(t){return Promise.reject(t)}},i.componentWillUnmount=function(){this.props.pipeline.off("updated",this.processPipelineFn)},i.componentDidUpdate=function(t,e){e.status!=Ah.Rendered&&this.state.status==Ah.Loaded&&(this.setState({status:Ah.Rendered}),this.props.config.eventEmitter.emit("ready"))},i.render=function(){return pc(this.configContext.Provider,{value:this.props.config},pc("div",{role:"complementary",className:Kc("gridjs",Gc("container"),this.state.status===Ah.Loading?Gc("loading"):null,this.props.config.className.container),style:Gl({},this.props.config.style.container,{width:this.props.width})},this.state.status===Ah.Loading&&pc("div",{className:Gc("loading-bar")}),pc(Gh,null),pc("div",{className:Gc("wrapper"),style:{height:this.props.height}},pc(Yh,{ref:this.props.config.tableRef,data:this.state.data,header:this.state.header,width:this.props.width,height:this.props.height,status:this.state.status})),pc(Kh,null),pc("div",{ref:this.props.config.tempRef,id:"gridjs-temp",className:Gc("temp")})))},e}(Vc),Zh=function(t){function e(e){var i;return(i=t.call(this)||this).config=void 0,i.plugin=void 0,i.config=new Mh({instance:Zl(i),eventEmitter:Zl(i)}).update(e),i.plugin=i.config.plugin,i}Kl(e,t);var i=e.prototype;return i.updateConfig=function(t){return this.config.update(t),this},i.createElement=function(){return pc(Xh,{config:this.config,pipeline:this.config.pipeline,header:this.config.header,width:this.config.width,height:this.config.height})},i.forceRender=function(){return this.config&&this.config.container||ih.error("Container is empty. Make sure you call render() before forceRender()",!0),this.config.pipeline.clearCache(),$c(null,this.config.container),$c(this.createElement(),this.config.container),this},i.render=function(t){return t||ih.error("Container element cannot be null",!0),t.childNodes.length>0?(ih.error("The container element "+t+" is not empty. Make sure the container is empty and call render() again"),this):(this.config.container=t,$c(this.createElement(),t),this)},e}(Uc),Qh=[],Jh=[],td=ec.__b,ed=ec.__r,id=ec.diffed,nd=ec.__c,rd=ec.unmount;function od(){for(var t;t=Qh.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ad),t.__H.__h.forEach(ld),t.__H.__h=[]}catch(e){t.__H.__h=[],ec.__e(e,t.__v)}}ec.__b=function(t){Oh=null,td&&td(t)},ec.__r=function(t){ed&&ed(t),0;var e=(Oh=t.__c).__H;e&&($h===Oh?(e.__h=[],Oh.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=Jh,t.__N=t.i=void 0}))):(e.__h.forEach(ad),e.__h.forEach(ld),e.__h=[])),$h=Oh},ec.diffed=function(t){id&&id(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==Qh.push(e)&&Hh===ec.requestAnimationFrame||((Hh=ec.requestAnimationFrame)||function(t){var e,i=function(){clearTimeout(n),sd&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(i,100);sd&&(e=requestAnimationFrame(i))})(od)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==Jh&&(t.__=t.__V),t.i=void 0,t.__V=Jh}))),$h=Oh=null},ec.__c=function(t,e){e.some((function(t){try{t.__h.forEach(ad),t.__h=t.__h.filter((function(t){return!t.__||ld(t)}))}catch(i){e.some((function(t){t.__h&&(t.__h=[])})),e=[],ec.__e(i,t.__v)}})),nd&&nd(t,e)},ec.unmount=function(t){rd&&rd(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach((function(t){try{ad(t)}catch(t){e=t}})),e&&ec.__e(e,i.__v))};var sd="function"==typeof requestAnimationFrame;function ad(t){var e=Oh,i=t.__c;"function"==typeof i&&(t.__c=void 0,i()),Oh=e}function ld(t){var e=Oh;t.__c=t.__(),Oh=e}class cd extends V{static get properties(){return Object.assign({label:{type:String},property:{type:String},sort:{type:Boolean},width:{type:String}},super.properties)}constructor(){super(),this.label="no-label",this.property=null,this.sort=!1,this.width=null}connectedCallback(){super.connectedCallback()}data(){const t={name:this.label,sort:{enabled:this.sort},formatter:t=>Nc(t)};return this.property&&(t.id=this.property),this.width&&(t.width=this.width),t}}customElements.define("pb-table-column",cd);class hd extends(N(V)){static get properties(){return Object.assign({source:{type:String},cssPath:{type:String,attribute:"css-path"},resizable:{type:Boolean},perPage:{type:Number,attribute:"per-page"},height:{type:String},search:{type:Boolean},_params:{type:Object}},super.properties)}constructor(){super(),this.cssPath="../css/gridjs",this._params={},this.resizable=!1,this.search=!1,this.perPage=10,this.height=null,this.fixedHeader=!1}async connectedCallback(){if(super.connectedCallback(),this.subscribeTo("pb-search-resubmit",t=>{this._params=Object.assign({},t.detail.params);for(const[t,e]of Object.entries(this._params))null===e&&delete this._params[t];this._submit()}),En.subscribe(this,t=>{this._params=t,this._submit()}),this.subscribeTo("pb-i18n-update",t=>{const e=this.language&&this.language!==t.detail.language;this.language=t.detail.language,e&&this._submit()},[]),!this.height){const t=getComputedStyle(this).getPropertyValue("--pb-table-grid-height");this.height=t||"auto"}const t=await E([P(this.cssPath)+"/mermaid.min.css"]),e=O(this),i=[...this.shadowRoot.adoptedStyleSheets,t];e&&i.push(e),this.shadowRoot.adoptedStyleSheets=i}firstUpdated(){const t=this.shadowRoot.getElementById("table"),e=this.querySelectorAll("pb-table-column"),i=[];e.forEach(t=>i.push(t.data())),B("pb-page-ready",e=>{e&&e.language&&(this.language=e.language),this._params=En.state;const n=this.toAbsoluteURL(this.source),r={height:this.height,fixedHeader:!0,columns:i,resizable:this.resizable,server:{url:n,then:t=>t.results,total:t=>t.count},sort:{multiColumn:!1,enabled:!0,server:{url:(t,e)=>{if(!e.length)return t;const n=e[0];return`${t}${t.indexOf("?")>-1?"&":"?"}order=${i[n.index].id}&dir=${1===n.direction?"asc":"desc"}`}}},pagination:{enabled:!0,limit:this.perPage,server:{url:(t,e,i)=>{const n=this.shadowRoot.getElementById("form");return n&&Object.assign(this._params,n.serializeForm()),this._params.limit=i,this._params.start=e*i+1,this.language&&(this._params.language=this.language),En.commit(this,this._params),`${t}${t.indexOf("?")>-1?"&":"?"}${new URLSearchParams(this._params).toString()}`}}}};this.grid=new Zh(r),this.grid.on("load",()=>{this.emitTo("pb-results-received",{params:this._params})}),this.grid.render(t)})}_submit(){this.grid.forceRender()}render(){return I`
            ${this.search?I`
                    <iron-form id="form">
                        <form action="">
                            <paper-input id="search" name="search" label="Search" @keyup="${t=>13==t.keyCode?this._submit():null}">
                                <paper-icon-button icon="search" @click="${this._submit}" slot="suffix"></paper-icon-button>
                            </paper-input>
                        </form>
                    </iron-form>
                `:null}
            <div id="table"></div>
        `}static get styles(){return R`
            :host {
                display: block;
            }
            button {
                border: 0;
            }
        `}}customElements.define("pb-table-grid",hd);class dd extends(z(N(V))){static get properties(){return Object.assign({url:{type:String},selected:{type:String},subforms:{type:String},_categories:{type:Array}},super.properties)}constructor(){super(),this._categories=[],this._params={},this.selected=null,this.subforms=null,this._initialized=!1}connectedCallback(){super.connectedCallback(),B("pb-page-ready",()=>{this.selected=En.state.category||this.selected,En.subscribe(this,t=>{console.log("<pb-split-list> popstate: %o",t),this.selected=t.category,this.submit(!1)})}),this.subscribeTo("pb-submit",this.load.bind(this))}firstUpdated(){super.firstUpdated(),B("pb-page-ready",()=>{this.load()})}submit(t=!0){this.load(t)}load(t=!0){const e=this._paramsFromSubforms({});this.selected&&(e.category=this.selected),t&&(this._initialized?En.commit(this,e):En.replace(this,e)),this._initialized=!0;const i=new URLSearchParams(e),n=`${this.toAbsoluteURL(this.url)}?${i.toString()}`;console.log("<pb-split-list> Fetching from URL: "+n),this.emitTo("pb-start-update"),fetch(n).then(t=>t.ok?t.json():Promise.reject(t.status)).then(t=>{this._categories=t.categories,this.innerHTML=t.items.join(""),this.emitTo("pb-end-update")}).catch(t=>{console.error("<pb-split-list> Error caught: "+t),this.emitTo("pb-end-update")})}_selectCategory(t,e){t.preventDefault(),this.selected=e,this.load()}_paramsFromSubforms(t){return this.subforms&&document.querySelectorAll(this.subforms).forEach(e=>{e.serializeForm&&Object.assign(t,e.serializeForm())}),t}render(){return I`
            <header>
            ${this._categories.map(t=>I`
                        <a part="${this.selected===t.category?"active-category":"category"}" href="#${t.category}" title="${t.count}" class="${this.selected===t.category?"active":""}"
                            @click="${e=>this._selectCategory(e,t.category)}">
                            ${t.label?K(t.label):t.category}
                        </a>
                    `)}
            </header>
            <div id="items" part="items"><slot></slot></div>
        `}static get styles(){return R`
            :host {
                display: block;
            }

            header {
                display: flex;
                flex-wrap: wrap;
                column-gap: 10px;
                width: 100%;
            }

            #items {
                display: grid;
                grid-template-columns: repeat(var(--pb-categorized-list-columns, 2), auto);
                grid-auto-rows: 1fr;
                column-gap: 10px;
                width: 100%;
            }

            [part=category], #items a {
                text-decoration: none;
                color: var(--pb-link-color);
            }

            [part=active-category] {
                text-decoration: none;
                color: var(--pb-highlight-color);
            }
        `}}customElements.define("pb-split-list",dd);class pd{constructor(t={},e=60,i=["D","W","M","Y","5Y","10Y"]){this.data={invalid:{},valid:{}},this.maxInterval=e,this.scopes=i,this._validateJsonData(t)}getMinDateStr(){return Object.keys(this.data.valid).sort()[0]}getMaxDateStr(){let t=Object.keys(this.data.valid);return t.sort()[t.length-1]}getMinDate(){return this._dateStrToUTCDate(this.getMinDateStr())}getMaxDate(){return this._dateStrToUTCDate(this.getMaxDateStr())}getEndOfRangeDate(t,e){return this._UTCDateToDateStr(this._increaseDateBy(t,e))}export(t){if(t=t||this._autoAssignScope(),!this.scopes.includes(t))throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${t}"`);const e={data:[],scope:t,binTitleRotated:this._binTitleRotatedLookup(t)};if(0===Object.keys(this.data.valid).length)return e;const i=this._classify(this.getMinDateStr(),t),n=this._getFirstDay(i);let r=this._dateStrToUTCDate(n);const o=this.getMaxDate();for(;r<=o;){const i=this._UTCDateToDateStr(r),n=this._classify(i,t);e.data.push(this._buildBinObject(i,n,t)),r=this._increaseDateBy(t,r)}if(Object.keys(this.data.valid).sort().forEach(i=>{const n=this._classify(i,t),r=e.data.find(t=>t.category===n);try{const t=this.data.valid[i];"object"==typeof t?(r.value+=t.count||0,t.info&&(r.info=r.info.concat(t.info))):r.value+=this.data.valid[i]||0}catch(t){console.log(t),console.log("currentCategory"),console.log(n)}}),this.data.invalid){let t=0,i=[];Object.values(this.data.invalid).forEach(e=>{"object"==typeof e?(t+=e.count||0,i=i.concat(e.info)):t+=e}),t>0&&e.data.push({tooltip:G("timeline.unknown"),title:G("timeline.unknown"),category:"?",separator:!0,value:t,info:i})}return e}_autoAssignScope(){for(let t=0;t<this.scopes.length;t++)if(this._computeIntervalSize(this.scopes[t])<=this.maxInterval)return this.scopes[t];throw new Error(`Interval too big! Computed: ${this._computeIntervalSize(this.scopes[i])}. Allowed: ${this.maxInterval}. Try to increase maxInterval.`)}_validateJsonData(t){Object.keys(t).sort().forEach(e=>{this._isValidDateStr(e)?this.data.valid[e]=t[e]:this.data.invalid[e]=t[e]})}_binTitleRotatedLookup(t){return{"10Y":!0,"5Y":!0,Y:!0,M:!1,W:!0,D:!0}[t]}_buildBinObject(t,e,i){const n=t.split("-"),r=n[0],o=n[1],s=n[2],a={dateStr:t,category:e,value:0,info:[]};if("10Y"===i)a.tooltip=`${e} - ${Number(e)+9}`,a.selectionStart=""+e,a.selectionEnd=""+(Number(e)+9),Number(e)%100==0&&(a.title=`${e} - ${Number(e)+99}`,a.binTitle=e,a.seperator=!0);else if("5Y"===i)a.tooltip=`${e} - ${Number(e)+4}`,a.selectionStart=""+e,a.selectionEnd=""+(Number(e)+4),Number(e)%50==0&&(a.title=`${e} - ${Number(e)+49}`,a.binTitle=e,a.seperator=!0);else if("Y"===i)a.tooltip=e,a.selectionStart=e,a.selectionEnd=e,Number(e)%10==0&&(a.title=`${e} - ${Number(e)+9}`,a.binTitle=""+e,a.seperator=!0);else if("M"===i){const t=Number(o),e=this._monthLookup(t);a.binTitle=e[0],a.tooltip=`${e} ${r}`,a.selectionStart=`${e} ${r}`,a.selectionEnd=`${e} ${r}`,1===t&&(a.title=r,a.seperator=!0)}else if("W"===i){const i=e.split("-")[1];a.tooltip=`${r} ${i}`,a.selectionStart=`${r} ${i}`,a.selectionEnd=`${r} ${i}`;let n=this._dateStrToUTCDate(t),o=this._addDays(n,-7);n.getUTCMonth()!==o.getUTCMonth()&&(a.binTitle=i,a.title=this._monthLookup(n.getUTCMonth()+1)),a.seperator="W1"===i}else{if("D"!==i)throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${i}"`);a.tooltip=t,a.selectionStart=t,a.selectionEnd=t,1===this._dateStrToUTCDate(t).getUTCDay()&&(a.binTitle=`${Number(s)}.${Number(o)}`,a.title=""+this._classify(t,"W").replace("-"," "),a.seperator=!0)}return a}_classify(t,e){if(!t.match(/^\d{4}-\d{2}-\d{2}$/))throw new Error(`invalid dateStr format, expected "YYYY-MM-DD", got: "${t}".`);if(!t||!e)throw new Error(`both inputs must be provided. Got dateStr=${t}, scope=${e}`);switch(e){case"10Y":case"5Y":const i=Number(e.replace("Y",""));return(Math.floor(Number(t.split("-")[0])/i)*i).toString();case"Y":return t.substr(0,4);case"M":return t.substr(0,7);case"W":const n=this._dateStrToUTCDate(t);return this._UTCDateToWeekFormat(n);case"D":return t}}_getFirstDay(t){if(t.match(/^\d{4}-\d{2}-\d{2}$/))return t;if(t.match(/^\d{4}-\d{2}$/))return t+"-01";if(t.match(/^\d{4}$/))return t+"-01-01";if(t.match(/^\d{4}-W([1-9]|[1-4][0-9]|5[0-3])$/)){const e=t.split("-"),i=Number(e[0]),n=Number(e[1].replace("W",""));return this._getDateStrOfISOWeek(i,n)}throw new Error("invalid categoryStr")}_dateStrToUTCDate(t){if(!this._isValidDateStr(t))throw new Error(`invalid dateStr, expected "YYYY-MM-DD" with month[1-12] and day[1-31], got: "${t}".`);const e=t.split("-"),i=Number(e[0]),n=Number(e[1]),r=Number(e[2]);return new Date(Date.UTC(i,n-1,r))}_UTCDateToDateStr(t){return t.toISOString().split("T")[0]}_UTCDateToWeekFormat(t){return`${this._getISOWeekYear(t)}-W${this._getISOWeek(t)}`}_getISOWeek(t){let e=new Date(t.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);let i=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-i.getTime())/864e5-3+(i.getDay()+6)%7)/7)}_getISOWeekYear(t){var e=new Date(t.getTime());return e.setDate(e.getDate()+3-(e.getDay()+6)%7),e.getFullYear()}_getDateStrOfISOWeek(t,e){let i=new Date(Date.UTC(t,0,1+7*(e-1))),n=i.getUTCDay(),r=i;return n<=4?r.setDate(i.getDate()-i.getUTCDay()+1):r.setDate(i.getDate()+8-i.getUTCDay()),r.toISOString().split("T")[0]}getIntervalSizes(){return{D:this._computeIntervalSize("D"),W:this._computeIntervalSize("W"),M:this._computeIntervalSize("M"),Y:this._computeIntervalSize("Y"),"5Y":this._computeIntervalSize("5Y"),"10Y":this._computeIntervalSize("10Y")}}_computeIntervalSize(t){const e=this.getMaxDateStr();if(!e)return 0;const i=this._dateStrToUTCDate(e),n=this._getFirstDay(this._classify(this.getMinDateStr(),t));let r=this._dateStrToUTCDate(n),o=0;for(;r<=i;)o++,r=this._increaseDateBy(t,r);return o}_increaseDateBy(t,e){switch(t){case"D":return this._addDays(e,1);case"W":return this._addDays(e,7);case"M":return this._addMonths(e,1);case"Y":return this._addYears(e,1);case"5Y":return this._addYears(e,5);case"10Y":return this._addYears(e,10)}}_addDays(t,e){let i=new Date(t.valueOf());return i.setUTCDate(i.getUTCDate()+e),i}_addMonths(t,e){let i=new Date(t.valueOf()),n=i.getUTCDate();return i.setUTCMonth(i.getUTCMonth()+ +e),i.getUTCDate()!=n&&i.setUTCDate(0),i}_addYears(t,e){let i=new Date(t.valueOf());return i.setUTCFullYear(i.getUTCFullYear()+e),i}_isValidDateStr(t){if(!t)return!1;let e=t.split("-");if(3!==e.length)return!1;let i=e[0],n=e[1],r=e[2];return"0000"!==i&&"00"!==r&&"00"!==n&&(!(Number(r)<1||Number(r)>31)&&!(Number(n)<1||Number(n)>12))}_monthLookup(t){if(t>12||t<1)throw new Error("invalid 'num' provided, expected 1-12. Got: "+t);return{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}[t.toString()]}}class ud{constructor(){}run(t){this.input=t,this.day="??",this.month="??",this.year="????";const e=this.input.match(this._isoMatchRegex()),i=this.input.match(this._customRegex()),n=this.input.match(this._weekMatchRegex()),r=this.input.match(this._yearAndMonthRegex());if(e){const t=e[1].split(/-|\/|\s/);this.year=t[0],this.month=this._setWithLeadingZero(t[1]),this.day=this._setWithLeadingZero(t[2])}else if(r){const t=r[1].split("-");this.year=t[0],this.month=this._setWithLeadingZero(t[1]),this.day="01"}else if(i){const t=i[0].split(/\.|\s|\/|-/);this.day=this._setWithLeadingZero(t[0]),this.month=this._setWithLeadingZero(t[1]),this.year=t[2]}else{if(n){const t=n[0].split(/\.|\s|\/|-/),e=Number(t[0]),i=Number(t[1].replace("W0","").replace("W",""));return this._getDateStrOfISOWeek(e,i)}this._findYear(),this._findMonth(),this._findDay()}return this._buildResult()}_buildResult(){return"????"!=this.year&&"??"===this.month&&(this.month="01"),"??"!=this.month&&"??"===this.day&&(this.day="01"),`${this.year}-${this.month}-${this.day}`}_isoMatchRegex(){return/(?:\s|^)(\d{4}(-|\s|\/)([0][1-9]|[1-9]|10|11|12)(-|\s|\/)([0][1-9]|[1-2][0-9]|3[01]|[1-9]))(?=\s|$|\.)/}_customRegex(){return/\d{1,2}(\.|\s|\/|-)\d{1,2}(\.|\s|\/|-)\d{4}/}_weekMatchRegex(){return/\d{4}(\.|\s|\/|-)W\d{1,2}(?=\s|$|\.)/}_yearAndMonthRegex(){return/(?:\s|^)(\d{4}-([0][1-9]|[1-9]|10|11|12))(?=\s|$)/}_findYear(){let t=/[1-9]{1}[0-9]{3}/;const e=this.input.match(t);e&&(this.year=e[0],this._removeMatchFromInput(e))}_findMonth(){this._monthDictionaryValues().forEach(t=>{const e=new RegExp(`(?:\\s|^)(${t})(?=\\s|$|\\.)`,"i"),i=this.input.match(e);if(i)return this.month=this._monthDictionary()[i[1].toLowerCase()],this._removeMatchFromInput(i),this.month})}_findDay(){const t=/(?:\s|^)([0][1-9]|[1-2][0-9]|3[01]|[1-9])(?=\s|$|\.|st|nd|rd|th)/,e=this.input.match(t);e&&(this.day=this._setWithLeadingZero(e[1]))}_setWithLeadingZero(t){return 1==(t=t.toString()).length?"0"+t:t}_removeMatchFromInput(t){if(t&&t[0]&&t.index){let e=t[0].length,i=this.input.split("");i.splice(t.index,e),this.input=i.join("")}}_monthDictionaryValues(){return Object.keys(this._monthDictionary())}_monthDictionary(){return{jan:"01",januar:"01",feb:"02",februar:"02","mär":"03","märz":"03",apr:"04",april:"04",mai:"05",mai:"05",jun:"06",juni:"06",jul:"07",juli:"07",aug:"08",august:"08",sep:"09",september:"09",okt:"10",oktober:"10",nov:"11",november:"11",dez:"12",dezember:"12",jan:"01",january:"01",feb:"02",february:"02",mar:"03",march:"03",apr:"04",april:"04",may:"05",may:"05",jun:"06",june:"06",jul:"07",july:"07",aug:"08",august:"08",sep:"09",september:"09",oct:"10",october:"10",nov:"11",november:"11",dec:"12",december:"12",janv:"01",janvier:"01","févr":"02","février'":"02",mars:"03",mars:"03",avr:"04",avril:"04",mai:"05",mai:"05",juin:"06",juin:"06",juil:"07",juillet:"07","août":"08","août":"08",sept:"09",septembre:"09",oct:"10",octobre:"10",nov:"11",novembre:"11","déc":"12","décembre":"12",gen:"01",gennaio:"01",feb:"02",febbraio:"02",mar:"03",marzo:"03",apr:"04",aprile:"04",mag:"05",maggio:"05",giu:"06",giugno:"06",lug:"07",luglio:"07",ago:"08",agosto:"08",set:"09",settembre:"09",ott:"10",ottobre:"10",nov:"11",novembre:"11",dic:"12",dicembre:"12"}}_getDateStrOfISOWeek(t,e){let i=new Date(t,0,1+7*(e-1)),n=i.getDay(),r=i;return n<=4?r.setDate(i.getDate()-i.getDay()+1):r.setDate(i.getDate()+8-i.getDay()),r.getFullYear()>t?t+"-12-31":r.getFullYear()<t?t+"-01-01":this._dateToDateStr(r)}_dateToDateStr(t){let e=new Date(t),i=this._setWithLeadingZero(e.getMonth()+1),n=this._setWithLeadingZero(e.getDate());return`${e.getFullYear()}-${i}-${n}`}}class gd extends(N(V)){static get styles(){return R`
      :host{
        display: block;
      }
      .hidden {
        visibility: hidden;
      }
      .draggable {
        cursor: grab;
        user-select: none;
        padding-right: 30px !important;
      }
      .wrapper {
        margin: 0 auto;
        padding: var(--pb-timeline-padding);
        width: auto;
        height: var(--pb-timeline-height, 80px);
        display: flex;
        position: relative;
      }
      .wrapper.empty {
        display: none;
      }

      .label {
        display: flex;
        align-items: center;
      }
      .bin-container {
        cursor: crosshair;
        margin-top: 20px;
        min-width: var(--pb-timeline-min-width, 14px);
        max-width: var(--pb-timeline-max-width, 20px);
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        align-items: flex-end;
        // justify-content: center;
        position: relative;
      }
      .bin-container.border-left, .bin-container.unknown {
        border-left: 1px solid rgba(0,0,0,0.4);
      }
      .bin-container.unknown {
        margin-left: 40px;
      }
      .bin-container:hover .bin {
        background-color: var(--pb-timeline-color-highlight, #3f52b5);
      }
      .bin-container.selected > .bin {
        background-color: var(--pb-timeline-color-highlight, #3f52b5);
      }
      .bin-container.selected p {
        font-weight: bold;
      }
      .bin-container.white {
        background-color: var(--pb-timeline-color-light, white);
      }
      .bin-container.grey {
        background-color: var(--pb-timeline-color-dark, #f1f1f1);
      }
      .bin-container.selected {
        background-color: var(--pb-timeline-color-selected, #e6eaff) !important;
      }
      .bin {
        width: 80%;
        background-color: var(--pb-timeline-color-bin, #ccc);
        border-radius: 2px;
        user-select: none;
      }
      p.bin-title {
        pointer-events: none;
        position: absolute;
        top: 5px;
        z-index: 10;
        margin: 0;
        font-size: var(--pb-timeline-title-font-size, 12px);
        user-select: none;
        white-space: nowrap;
      }
      p.bin-title.months {
        top: -1px;
      }
      p.bin-title.weeks {
        top: 3px;
      }
      p.bin-title.days {
        top: -1px;
      }
      p.bin-title.rotated {
        transform: rotate(-90deg);
      }
      .bins-title {
        cursor: auto;
        font-weight: normal !important;
        margin: 0;
        white-space: nowrap;
        z-index: 200;
        position: absolute;
        left: 0;
        top: -20px;
        font-size: var(--pb-timeline-title-font-size, 12px);
        background-color: var(--pb-timeline-background-color-title, #535353);
        color: var(--pb-timeline-color-title, #ffffff);
        padding: 2px 4px;
        border-radius: 5px;
        height: var(--pb-timeline-title-font-size, 12px);
        line-height: var(--pb-timeline-title-font-size, 12px);
        user-select: none;
      }
      .info {
        display: none;
      }

      /* TOOLTIP */
      #tooltip {
        display: inline-block;
        position: absolute;
        min-width: var(--pb-timeline-tooltip-min-width, 200px);
        font-size: var(--pb-timeline-tooltip-font-size, 11px);
        line-height: 1.25;
        background: var(--pb-timeline-background-color-title, #535353);
        color: var(--pb-timeline-color-title, #ffffff);
        text-align: left;
        border-radius: 6px;
        padding: 5px 10px;
        top: var(--pb-timeline-height, 80px);
        left: 0;
        z-index: 1000;
      }
      #tooltip ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      #tooltip-close {
        position: absolute;
        top: -13px;
        right: -10px;
      }
      #tooltip::after { /* small triangle that points to top */
        content: "";
        position: absolute;
        bottom: 100%;
        left: 10px;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
      }
      #tooltip.right::after {
        right: 10px;
        left: auto;
      }
      /* pure css close button for tooltip */
      .close{
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        overflow: hidden;
        transform: scale(0.25);
      }
      .close.rounded.black {
        cursor: pointer;
      }
      .close::before, .close::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #fff;
      }
      .close::before {
        transform: rotate(45deg);
      }
      .close::after {
        transform: rotate(-45deg);
      }
      .close.thick::before, .close.thick::after {
        height: 4px;
        margin-top: -2px;
      }
      .close.black::before, .close.black::after {
        height: 8px;
        margin-top: -4px;
      }
      .close.rounded::before, .close.rounded::after {
        border-radius: 5px;
      }
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{startDate:{type:String,reflect:!0,attribute:"start-date"},endDate:{type:String,reflect:!0,attribute:"end-date"},scope:{type:String},scopes:{type:Array},maxInterval:{type:Number,attribute:"max-interval"},url:{type:String},auto:{type:Boolean},resettable:{type:Boolean},_language:{type:String}})}constructor(){super(),this.maxHeight=80,this.multiplier=.75,this.mousedown=!1,this.startDate="",this.endDate="",this.scope="",this.scopes=["D","W","M","Y","5Y","10Y"],this.maxInterval=60,this.url="",this.auto=!1,this.resettable=!1,this._language="en",this._resetSelectionProperty()}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",()=>{const t=this.shadowRoot.getElementById("loadData"),e=this.toAbsoluteURL(this.url,this.getEndpoint());t.url=e,t.generateRequest()}),this.subscribeTo("pb-i18n-update",t=>{this._language=t.detail.language})}firstUpdated(){this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.tooltip=this.shadowRoot.getElementById("tooltip"),document.addEventListener("mouseup",()=>{this._mouseUp()}),document.addEventListener("pb-timeline-daterange-changed",t=>{const e=t.detail.startDateStr,i=t.detail.endDateStr;if(this._fullRangeSelected(e,i))return console.log("_fullRangeSelected() is true"),void this.resetSelection();this.select(e,i)}),document.addEventListener("pb-timeline-reset-selection",()=>{this.resetSelection(),this._hideTooltip()})}updated(t){t.has("scope")&&this.searchResult&&(this.scopes.includes(this.scope)?this.setData(this.searchResult.export(this.scope)):console.error("unknown scope ",this.scope))}setData(t){this.dataObj=t,this.maxValue=Math.max(...this.dataObj.data.map(t=>t.value)),this.requestUpdate(),this.updateComplete.then(()=>{this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.resetSelection(),this._resetTooltip()})}get label(){return this.dataObj&&0!==this.dataObj.data.length?1===this.dataObj.data.length?this.dataObj.data[0].category:`${this.dataObj.data[0].category} – ${this.dataObj.data[this.dataObj.data.length-1].category}`:""}getSelectedStartDateStr(){return this.shadowRoot.querySelectorAll(".bin-container.selected")[0].dataset.selectionstart}getSelectedEndDateStr(){const t=this.shadowRoot.querySelectorAll(".bin-container.selected");return t[t.length-1].dataset.selectionend}getSelectedCategories(){const t=this.shadowRoot.querySelectorAll(".bin-container.selected"),e=[];return t.forEach(t=>e.push(t.dataset.category)),e}getSelectedItemCount(){const t=this.shadowRoot.querySelectorAll(".bin-container.selected");let e=0;return t.forEach(t=>{e+=parseInt(t.dataset.value)}),e}resetSelection(){this.bins.forEach(t=>{t.classList.remove("selected")}),this._resetSelectionProperty(),this._hideTooltip()}select(t,e){this.bins.forEach(i=>{i.dataset.isodatestr>=t&&i.dataset.isodatestr<=e?i.classList.add("selected"):i.classList.remove("selected")}),this._displayTooltip(),this._showtooltipSelection()}_fullRangeSelected(t,e){const i=this.bins[0].dataset.isodatestr,n=e===this.bins[this.bins.length-1].dataset.isodatestr;return i&&n}_mouseDown(t){this.resetSelection(),this.mousedown=!0,this.selection.start=this._getMousePosition(t).x,this._applySelectionToBins()}_mouseUp(){if(this.mousedown){this.mousedown=!1;const t=this.getSelectedStartDateStr(),e=this.getSelectedEndDateStr();if(t){const i=(new ud).run(t),n=(new ud).run(e),r=this.getSelectedItemCount();this._dispatchTimelineDaterangeChangedEvent(i,n,this.getSelectedCategories(),r)}}}_mouseMove(t){this.mousedown?(this._brushing(t),this._showtooltipSelection()):void 0===this.selection.start&&this._showtooltip(t)}_mouseenter(){this.dataObj&&this._displayTooltip()}_getMousePosition(t){let e=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect();return{x:t.clientX-e.left+1,y:t.clientY-e.top+1}}_brushing(t){this.selection.end=this._getMousePosition(t).x,this._applySelectionToBins()}_dispatchTimelineDaterangeChangedEvent(t,e,i,n){"????-??-??"===t?this.emitTo("pb-timeline-date-changed",{startDateStr:null,endDateStr:null,categories:["?"],count:n}):t===e?"D"!==this.dataObj.scope?this.emitTo("pb-timeline-daterange-changed",{startDateStr:t,endDateStr:this.searchResult.getEndOfRangeDate(this.dataObj.scope,e),scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-date-changed",{startDateStr:t,endDateStr:null,scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-daterange-changed",{startDateStr:t,endDateStr:e,categories:i,scope:this.dataObj.scope,count:n,label:this.label})}_dispatchPbTimelineResetSelectionEvent(){this.emitTo("pb-timeline-reset-selection")}_showtooltip(t){const e=this._getElementInterval(t.currentTarget);let i;e[0]<e[2]?(i=Math.round((e[0]+e[1])/2-10),this.tooltip.classList.remove("right")):(i=Math.round((e[0]+e[1])/2-this.tooltip.offsetWidth)+10,this.tooltip.classList.add("right")),this.tooltip.style.left=i+"px";const n=t.currentTarget.dataset.tooltip,r=this._numberWithCommas(t.currentTarget.dataset.value),o=t.currentTarget.querySelector(".info");this.tooltip.querySelector("#tooltip-text").innerHTML=`<div><strong>${n}</strong>: ${r}</div><ul>${o?o.innerHTML:""}</ul>`}_showtooltipSelection(){const t=this._getSelectedBins(),e=[this._getElementInterval(t[0])[0],this._getElementInterval(t[t.length-1])[1]],i=`${t[0].dataset.selectionstart} - ${t[t.length-1].dataset.selectionend}`,n=t.map(t=>Number(t.dataset.value)).reduce((t,e)=>t+e),r=this._numberWithCommas(n);this.tooltip.querySelector("#tooltip-text").innerHTML=`<strong>${i}</strong>: ${r}`,this.tooltip.querySelector("#tooltip-close").classList.remove("hidden"),this.tooltip.classList.add("draggable");const o=Math.round((e[0]+e[1])/2-this.tooltip.offsetWidth/2);this.tooltip.style.left=o+"px"}_resetTooltip(){this._hideTooltip(),this.tooltip.style.left="-1000px",this.tooltip.querySelector("#tooltip-text").innerHTML=""}_hideTooltip(){void 0===this.selection.start&&(this.tooltip.classList.add("hidden"),this.tooltip.classList.remove("draggable"),this.tooltip.querySelector("#tooltip-close").classList.add("hidden"))}_displayTooltip(){this.tooltip.classList.remove("hidden")}_getElementInterval(t){let e=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect(),i=t,n=[i.getBoundingClientRect().x,i.getBoundingClientRect().x+i.getBoundingClientRect().width];return[n[0]-e.left+1,n[1]-e.left+1,e.width/2]}_getSelectionInterval(){return[this.selection.start,this.selection.end].sort((t,e)=>t-e)}_getSelectedBins(){return Array.prototype.slice.call(this.bins).filter(t=>t.classList.contains("selected"))}_resetSelectionProperty(){this.selection={start:void 0,end:void 0}}_applySelectionToBins(){const t=this._getSelectionInterval();this.bins.forEach(e=>{const i=this._getElementInterval(e);this._areOverlapping(i,t)?e.classList.add("selected"):e.classList.remove("selected")})}_numberWithCommas(t){return new Intl.NumberFormat(this._language,{style:"decimal"}).format(t)}_areOverlapping(t,e){return e[0]<t[0]?e[1]>t[0]:e[0]<t[1]}render(){return I`
      <div class="label" part="label">
        <span class="label"><slot name="label"></slot>${this.label}</span>
        ${this.resettable?I`
            <paper-icon-button id="clear" icon="icons:clear" title="${W("timeline.clear")}"
            @click="${this._dispatchPbTimelineResetSelectionEvent}"></paper-icon-button>
          `:null}
      </div>
      <div class="wrapper ${!this.dataObj||this.dataObj.data.length<=1?"empty":""}"
        @mouseenter="${this._mouseenter}"
        @mouseleave="${this._hideTooltip}">
        ${this.dataObj?this.renderBins():""}
        ${this.renderTooltip()}
        <iron-ajax
            id="loadData"
            verbose
            handle-as="json"
            method="get"
            with-credentials
            @response="${this._handleResponse}"
            url="${this.url}?start=${this.startDate}&end=${this.endDate}"
            ?auto="${this.auto}"></iron-ajax>
      </div>
    `}renderTooltip(){return I`
      <div id="tooltip" class="hidden" part="tooltip">
        <div id="tooltip-text"></div>
        <div
          id="tooltip-close"
          class="hidden"
          @click="${this._dispatchPbTimelineResetSelectionEvent}"
          ><span class="close rounded black"></span>
        </div>
      </div>
    `}renderBins(){return I`
      ${this.dataObj.data.map((t,e)=>I`
          <div class="bin-container ${t.seperator?"border-left":""}
            ${e%2==0?"grey":"white"} ${"?"===t.category?"unknown":""}"
            data-tooltip="${t.tooltip}"
            data-category="${t.category}"
            data-selectionstart="${t.selectionStart}"
            data-selectionend="${t.selectionEnd}"
            data-isodatestr="${t.dateStr}"
            data-datestr="${t.dateStr}"
            data-value="${t.value}"
            @mousemove="${this._mouseMove}"
            @mousedown="${this._mouseDown}">
            <div class="bin" style="height: ${t.value/this.maxValue*this.maxHeight*this.multiplier}px"></div>
            <p class="bin-title
              ${this.dataObj.binTitleRotated?"rotated":""}
              ${this.scope}"
              >${t.binTitle?t.binTitle:""}
            </p>
            ${t.title?I`
              <p class="bins-title" part="title">${t.title}</p>
            `:""}
            ${this.renderInfo(t)}
          </div>
        `)}
    `}renderInfo(t){return t.info&&t.info.length>0&&t.info.length<=10?I`
        <ul class="info">
        ${t.info.map(t=>I`<li>${K(t)}</li>`)}
        </ul>
      `:null}async _handleResponse(){await this.updateComplete;const t=this.shadowRoot.getElementById("loadData").lastResponse;let e={};this.startDate&&this.endDate?Object.keys(t).filter(t=>t>=this.startDate&&t<this.endDate).forEach(i=>{e[i]=t[i]}):e=t,this.searchResult=new pd(e,this.maxInterval,this.scopes),this.setData(this.searchResult.export(this.scope)),this.emitTo("pb-timeline-loaded",{value:!0,label:this.label})}}function fd(t,e){t.split(/\s+/).forEach(t=>{e(t)})}customElements.define("pb-timeline",gd);class md{constructor(){this._events=void 0,this._events={}}on(t,e){fd(t,t=>{const i=this._events[t]||[];i.push(e),this._events[t]=i})}off(t,e){var i=arguments.length;0!==i?fd(t,t=>{if(1===i)return void delete this._events[t];const n=this._events[t];void 0!==n&&(n.splice(n.indexOf(e),1),this._events[t]=n)}):this._events={}}trigger(t,...e){var i=this;fd(t,t=>{const n=i._events[t];void 0!==n&&n.forEach(t=>{t.apply(i,e)})})}}function vd(t){return t.plugins={},class extends t{constructor(...t){super(...t),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(e,i){t.plugins[e]={name:e,fn:i}}initializePlugins(t){var e,i;const n=this,r=[];if(Array.isArray(t))t.forEach(t=>{"string"==typeof t?r.push(t):(n.plugins.settings[t.name]=t.options,r.push(t.name))});else if(t)for(e in t)t.hasOwnProperty(e)&&(n.plugins.settings[e]=t[e],r.push(e));for(;i=r.shift();)n.require(i)}loadPlugin(e){var i=this,n=i.plugins,r=t.plugins[e];if(!t.plugins.hasOwnProperty(e))throw new Error('Unable to find "'+e+'" plugin');n.requested[e]=!0,n.loaded[e]=r.fn.apply(i,[i.plugins.settings[e]||{}]),n.names.push(e)}require(t){var e=this,i=e.plugins;if(!e.plugins.loaded.hasOwnProperty(t)){if(i.requested[t])throw new Error('Plugin has circular dependency ("'+t+'")');e.loadPlugin(t)}return i.loaded[t]}}}
/*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */const bd=t=>(t=t.filter(Boolean)).length<2?t[0]||"":1==kd(t)?"["+t.join("")+"]":"(?:"+t.join("|")+")",yd=t=>{if(!wd(t))return t.join("");let e="",i=0;const n=()=>{i>1&&(e+="{"+i+"}")};return t.forEach((r,o)=>{r!==t[o-1]?(n(),e+=r,i=1):i++}),n(),e},_d=t=>{let e=Sd(t);return bd(e)},wd=t=>new Set(t).size!==t.length,xd=t=>(t+"").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu,"\\$1"),kd=t=>t.reduce((t,e)=>Math.max(t,Ad(e)),0),Ad=t=>Sd(t).length,Sd=t=>Array.from(t)
/*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */,zd=t=>{if(1===t.length)return[[t]];let e=[];const i=t.substring(1);return zd(i).forEach((function(i){let n=i.slice(0);n[0]=t.charAt(0)+n[0],e.push(n),n=i.slice(0),n.unshift(t.charAt(0)),e.push(n)})),e},Cd=[[0,65535]],Ed="[̀-ͯ·ʾʼ]";let Td,Ld;const Md=3,Od={},$d={"/":"⁄∕",0:"߀",a:"ⱥɐɑ",aa:"ꜳ",ae:"æǽǣ",ao:"ꜵ",au:"ꜷ",av:"ꜹꜻ",ay:"ꜽ",b:"ƀɓƃ",c:"ꜿƈȼↄ",d:"đɗɖᴅƌꮷԁɦ",e:"ɛǝᴇɇ",f:"ꝼƒ",g:"ǥɠꞡᵹꝿɢ",h:"ħⱨⱶɥ",i:"ɨı",j:"ɉȷ",k:"ƙⱪꝁꝃꝅꞣ",l:"łƚɫⱡꝉꝇꞁɭ",m:"ɱɯϻ",n:"ꞥƞɲꞑᴎлԉ",o:"øǿɔɵꝋꝍᴑ",oe:"œ",oi:"ƣ",oo:"ꝏ",ou:"ȣ",p:"ƥᵽꝑꝓꝕρ",q:"ꝗꝙɋ",r:"ɍɽꝛꞧꞃ",s:"ßȿꞩꞅʂ",t:"ŧƭʈⱦꞇ",th:"þ",tz:"ꜩ",u:"ʉ",v:"ʋꝟʌ",vy:"ꝡ",w:"ⱳ",y:"ƴɏỿ",z:"ƶȥɀⱬꝣ",hv:"ƕ"};for(let t in $d){let e=$d[t]||"";for(let i=0;i<e.length;i++){let n=e.substring(i,i+1);Od[n]=t}}const Hd=new RegExp(Object.keys(Od).join("|")+"|"+Ed,"gu"),Id=t=>{void 0===Td&&(Td=Fd(t||Cd))},Rd=(t,e="NFKD")=>t.normalize(e),Pd=t=>Sd(t).reduce((t,e)=>t+Vd(e),""),Vd=t=>(t=Rd(t).toLowerCase().replace(Hd,t=>Od[t]||""),Rd(t,"NFC"));function*Dd(t){for(const[e,i]of t)for(let t=e;t<=i;t++){let e=String.fromCharCode(t),i=Pd(e);i!=e.toLowerCase()&&(i.length>Md||0!=i.length&&(yield{folded:i,composed:e,code_point:t}))}}const Nd=t=>{const e={},i=(t,i)=>{const n=e[t]||new Set,r=new RegExp("^"+_d(n)+"$","iu");i.match(r)||(n.add(xd(i)),e[t]=n)};for(let e of Dd(t))i(e.folded,e.folded),i(e.folded,e.composed);return e},Fd=t=>{const e=Nd(t),i={};let n=[];for(let t in e){let r=e[t];r&&(i[t]=_d(r)),t.length>1&&n.push(xd(t))}n.sort((t,e)=>e.length-t.length);const r=bd(n);return Ld=new RegExp("^"+r,"u"),i},Bd=(t,e=1)=>{let i=0;return t=t.map(t=>(Td[t]&&(i+=t.length),Td[t]||t)),i>=e?yd(t):""},jd=(t,e=1)=>(e=Math.max(e,t.length-1),bd(zd(t).map(t=>Bd(t,e)))),qd=(t,e=!0)=>{let i=t.length>1?1:0;return bd(t.map(t=>{let n=[];const r=e?t.length():t.length()-1;for(let e=0;e<r;e++)n.push(jd(t.substrs[e]||"",i));return yd(n)}))},Ud=(t,e)=>{for(const i of e){if(i.start!=t.start||i.end!=t.end)continue;if(i.substrs.join("")!==t.substrs.join(""))continue;let e=t.parts;const n=t=>{for(const i of e){if(i.start===t.start&&i.substr===t.substr)return!1;if(1!=t.length&&1!=i.length){if(t.start<i.start&&t.end>i.start)return!0;if(i.start<t.start&&i.end>t.start)return!0}}return!1};if(!(i.parts.filter(n).length>0))return!0}return!1};class Wd{constructor(){this.parts=[],this.substrs=[],this.start=0,this.end=0}add(t){t&&(this.parts.push(t),this.substrs.push(t.substr),this.start=Math.min(t.start,this.start),this.end=Math.max(t.end,this.end))}last(){return this.parts[this.parts.length-1]}length(){return this.parts.length}clone(t,e){let i=new Wd,n=JSON.parse(JSON.stringify(this.parts)),r=n.pop();for(const t of n)i.add(t);let o=e.substr.substring(0,t-r.start),s=o.length;return i.add({start:r.start,end:r.start+s,length:s,substr:o}),i}}const Yd=t=>{Id(),t=Pd(t);let e="",i=[new Wd];for(let n=0;n<t.length;n++){let r=t.substring(n).match(Ld);const o=t.substring(n,n+1),s=r?r[0]:null;let a=[],l=new Set;for(const t of i){const e=t.last();if(!e||1==e.length||e.end<=n)if(s){const e=s.length;t.add({start:n,end:n+e,length:e,substr:s}),l.add("1")}else t.add({start:n,end:n+1,length:1,substr:o}),l.add("2");else if(s){let i=t.clone(n,e);const r=s.length;i.add({start:n,end:n+r,length:r,substr:s}),a.push(i)}else l.add("3")}if(a.length>0){a=a.sort((t,e)=>t.length()-e.length());for(let t of a)Ud(t,i)||i.push(t)}else if(n>0&&1==l.size&&!l.has("3")){e+=qd(i,!1);let t=new Wd;const n=i[0];n&&t.add(n.last()),i=[t]}}return e+=qd(i,!0),e},Gd=(t,e)=>{if(t)return t[e]},Kd=(t,e)=>{if(t){for(var i,n=e.split(".");(i=n.shift())&&(t=t[i]););return t}},Xd=(t,e,i)=>{var n,r;return t?(t+="",null==e.regex||-1===(r=t.search(e.regex))?0:(n=e.string.length/t.length,0===r&&(n+=.5),n*i)):0},Zd=(t,e)=>{var i=t[e];if("function"==typeof i)return i;i&&!Array.isArray(i)&&(t[e]=[i])},Qd=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},Jd=(t,e)=>"number"==typeof t&&"number"==typeof e?t>e?1:t<e?-1:0:(t=Pd(t+"").toLowerCase())>(e=Pd(e+"").toLowerCase())?1:e>t?-1:0;
/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */
/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */
class tp{constructor(t,e){this.items=void 0,this.settings=void 0,this.items=t,this.settings=e||{diacritics:!0}}tokenize(t,e,i){if(!t||!t.length)return[];const n=[],r=t.split(/\s+/);var o;return i&&(o=new RegExp("^("+Object.keys(i).map(xd).join("|")+"):(.*)$")),r.forEach(t=>{let i,r=null,s=null;o&&(i=t.match(o))&&(r=i[1],t=i[2]),t.length>0&&(s=this.settings.diacritics?Yd(t)||null:xd(t),s&&e&&(s="\\b"+s)),n.push({string:t,regex:s?new RegExp(s,"iu"):null,field:r})}),n}getScoreFunction(t,e){var i=this.prepareSearch(t,e);return this._getScoreFunction(i)}_getScoreFunction(t){const e=t.tokens,i=e.length;if(!i)return function(){return 0};const n=t.options.fields,r=t.weights,o=n.length,s=t.getAttrFn;if(!o)return function(){return 1};const a=1===o?function(t,e){const i=n[0].field;return Xd(s(e,i),t,r[i]||1)}:function(t,e){var i=0;if(t.field){const n=s(e,t.field);!t.regex&&n?i+=1/o:i+=Xd(n,t,1)}else Qd(r,(n,r)=>{i+=Xd(s(e,r),t,n)});return i/o};return 1===i?function(t){return a(e[0],t)}:"and"===t.options.conjunction?function(t){var n,r=0;for(let i of e){if((n=a(i,t))<=0)return 0;r+=n}return r/i}:function(t){var n=0;return Qd(e,e=>{n+=a(e,t)}),n/i}}getSortFunction(t,e){var i=this.prepareSearch(t,e);return this._getSortFunction(i)}_getSortFunction(t){var e,i=[];const n=this,r=t.options,o=!t.query&&r.sort_empty?r.sort_empty:r.sort;if("function"==typeof o)return o.bind(this);const s=function(e,i){return"$score"===e?i.score:t.getAttrFn(n.items[i.id],e)};if(o)for(let e of o)(t.query||"$score"!==e.field)&&i.push(e);if(t.query){e=!0;for(let t of i)if("$score"===t.field){e=!1;break}e&&i.unshift({field:"$score",direction:"desc"})}else i=i.filter(t=>"$score"!==t.field);return i.length?function(t,e){var n,r;for(let o of i){if(r=o.field,n=("desc"===o.direction?-1:1)*Jd(s(r,t),s(r,e)))return n}return 0}:null}prepareSearch(t,e){const i={};var n=Object.assign({},e);if(Zd(n,"sort"),Zd(n,"sort_empty"),n.fields){Zd(n,"fields");const t=[];n.fields.forEach(e=>{"string"==typeof e&&(e={field:e,weight:1}),t.push(e),i[e.field]="weight"in e?e.weight:1}),n.fields=t}return{options:n,query:t.toLowerCase().trim(),tokens:this.tokenize(t,n.respect_word_boundaries,i),total:0,items:[],weights:i,getAttrFn:n.nesting?Kd:Gd}}search(t,e){var i,n,r=this;n=this.prepareSearch(t,e),e=n.options,t=n.query;const o=e.score||r._getScoreFunction(n);t.length?Qd(r.items,(t,r)=>{i=o(t),(!1===e.filter||i>0)&&n.items.push({score:i,id:r})}):Qd(r.items,(t,e)=>{n.items.push({score:1,id:e})});const s=r._getSortFunction(n);return s&&n.items.sort(s),n.total=n.items.length,"number"==typeof e.limit&&(n.items=n.items.slice(0,e.limit)),n}}const ep=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},ip=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(np(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},np=t=>"string"==typeof t&&t.indexOf("<")>-1,rp=t=>t.replace(/['"\\]/g,"\\$&"),op=(t,e)=>{var i=document.createEvent("HTMLEvents");i.initEvent(e,!0,!1),t.dispatchEvent(i)},sp=(t,e)=>{Object.assign(t.style,e)},ap=(t,...e)=>{var i=cp(e);(t=hp(t)).map(t=>{i.map(e=>{t.classList.add(e)})})},lp=(t,...e)=>{var i=cp(e);(t=hp(t)).map(t=>{i.map(e=>{t.classList.remove(e)})})},cp=t=>{var e=[];return ep(t,t=>{"string"==typeof t&&(t=t.trim().split(/[\11\12\14\15\40]/)),Array.isArray(t)&&(e=e.concat(t))}),e.filter(Boolean)},hp=t=>(Array.isArray(t)||(t=[t]),t),dp=(t,e,i)=>{if(!i||i.contains(t))for(;t&&t.matches;){if(t.matches(e))return t;t=t.parentNode}},pp=(t,e=0)=>e>0?t[t.length-1]:t[0],up=t=>0===Object.keys(t).length,gp=(t,e)=>{if(!t)return-1;e=e||t.nodeName;for(var i=0;t=t.previousElementSibling;)t.matches(e)&&i++;return i},fp=(t,e)=>{ep(e,(e,i)=>{null==e?t.removeAttribute(i):t.setAttribute(i,""+e)})},mp=(t,e)=>{t.parentNode&&t.parentNode.replaceChild(e,t)},vp=(t,e)=>{if(null===e)return;if("string"==typeof e){if(!e.length)return;e=new RegExp(e,"i")}const i=t=>{var i=t.data.match(e);if(i&&t.data.length>0){var n=document.createElement("span");n.className="highlight";var r=t.splitText(i.index);r.splitText(i[0].length);var o=r.cloneNode(!0);return n.appendChild(o),mp(r,n),1}return 0},n=t=>{1!==t.nodeType||!t.childNodes||/(script|style)/i.test(t.tagName)||"highlight"===t.className&&"SPAN"===t.tagName||Array.from(t.childNodes).forEach(t=>{r(t)})},r=t=>3===t.nodeType?i(t):(n(t),0);r(t)},bp=t=>{var e=t.querySelectorAll("span.highlight");Array.prototype.forEach.call(e,(function(t){var e=t.parentNode;e.replaceChild(t.firstChild,t),e.normalize()}))},yp=65,_p=13,wp=27,xp=37,kp=38,Ap=39,Sp=40,zp=8,Cp=46,Ep=9,Tp="undefined"!=typeof navigator&&/Mac/.test(navigator.userAgent)?"metaKey":"ctrlKey";var Lp={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:'<input type="text" autocomplete="off" size="1" />',copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(t){return t.length>0},render:{}};const Mp=t=>null==t?null:Op(t),Op=t=>"boolean"==typeof t?t?"1":"0":t+"",$p=t=>(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Hp=(t,e)=>{var i;return function(n,r){var o=this;i&&(o.loading=Math.max(o.loading-1,0),clearTimeout(i)),i=setTimeout((function(){i=null,o.loadedSearches[n]=!0,t.call(o,n,r)}),e)}},Ip=(t,e,i)=>{var n,r=t.trigger,o={};for(n of(t.trigger=function(){var i=arguments[0];if(-1===e.indexOf(i))return r.apply(t,arguments);o[i]=arguments},i.apply(t,[]),t.trigger=r,e))n in o&&r.apply(t,o[n])},Rp=t=>({start:t.selectionStart||0,length:(t.selectionEnd||0)-(t.selectionStart||0)}),Pp=(t,e=!1)=>{t&&(t.preventDefault(),e&&t.stopPropagation())},Vp=(t,e,i,n)=>{t.addEventListener(e,i,n)},Dp=(t,e)=>!!e&&(!!e[t]&&1===(e.altKey?1:0)+(e.ctrlKey?1:0)+(e.shiftKey?1:0)+(e.metaKey?1:0)),Np=(t,e)=>{const i=t.getAttribute("id");return i||(t.setAttribute("id",e),e)},Fp=t=>t.replace(/[\\"']/g,"\\$&"),Bp=(t,e)=>{e&&t.append(e)};function jp(t,e){var i=Object.assign({},Lp,e),n=i.dataAttr,r=i.labelField,o=i.valueField,s=i.disabledField,a=i.optgroupField,l=i.optgroupLabelField,c=i.optgroupValueField,h=t.tagName.toLowerCase(),d=t.getAttribute("placeholder")||t.getAttribute("data-placeholder");if(!d&&!i.allowEmptyOption){let e=t.querySelector('option[value=""]');e&&(d=e.textContent)}var p={placeholder:d,options:[],optgroups:[],items:[],maxItems:null},u=()=>{const e=t.getAttribute(n);if(e)p.options=JSON.parse(e),ep(p.options,t=>{p.items.push(t[o])});else{var s=t.value.trim()||"";if(!i.allowEmptyOption&&!s.length)return;const e=s.split(i.delimiter);ep(e,t=>{const e={};e[r]=t,e[o]=t,p.options.push(e)}),p.items=e}};return"select"===h?(()=>{var e,h=p.options,d={},u=1,g=t=>{var e=Object.assign({},t.dataset),i=n&&e[n];return"string"==typeof i&&i.length&&(e=Object.assign(e,JSON.parse(i))),e},f=(t,e)=>{var n=Mp(t.value);if(null!=n&&(n||i.allowEmptyOption)){if(d.hasOwnProperty(n)){if(e){var l=d[n][a];l?Array.isArray(l)?l.push(e):d[n][a]=[l,e]:d[n][a]=e}}else{var c=g(t);c[r]=c[r]||t.textContent,c[o]=c[o]||n,c[s]=c[s]||t.disabled,c[a]=c[a]||e,c.$option=t,d[n]=c,h.push(c)}t.selected&&p.items.push(n)}},m=t=>{var e,i;(i=g(t))[l]=i[l]||t.getAttribute("label")||"",i[c]=i[c]||u++,i[s]=i[s]||t.disabled,p.optgroups.push(i),e=i[c],ep(t.children,t=>{f(t,e)})};p.maxItems=t.hasAttribute("multiple")?null:1,ep(t.children,t=>{"optgroup"===(e=t.tagName.toLowerCase())?m(t):"option"===e&&f(t)})})():u(),Object.assign({},Lp,p,e)}var qp=0;class Up extends(vd(md)){constructor(t,e){var i;super(),this.control_input=void 0,this.wrapper=void 0,this.dropdown=void 0,this.control=void 0,this.dropdown_content=void 0,this.focus_node=void 0,this.order=0,this.settings=void 0,this.input=void 0,this.tabIndex=void 0,this.is_select_tag=void 0,this.rtl=void 0,this.inputId=void 0,this._destroy=void 0,this.sifter=void 0,this.isOpen=!1,this.isDisabled=!1,this.isRequired=void 0,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.ignoreHover=!1,this.hasOptions=!1,this.currentResults=void 0,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],qp++;var n=ip(t);if(n.tomselect)throw new Error("Tom Select already initialized on this element");n.tomselect=this,i=(window.getComputedStyle&&window.getComputedStyle(n,null)).getPropertyValue("direction");const r=jp(n,e);this.settings=r,this.input=n,this.tabIndex=n.tabIndex||0,this.is_select_tag="select"===n.tagName.toLowerCase(),this.rtl=/rtl/i.test(i),this.inputId=Np(n,"tomselect-"+qp),this.isRequired=n.required,this.sifter=new tp(this.options,{diacritics:r.diacritics}),r.mode=r.mode||(1===r.maxItems?"single":"multi"),"boolean"!=typeof r.hideSelected&&(r.hideSelected="multi"===r.mode),"boolean"!=typeof r.hidePlaceholder&&(r.hidePlaceholder="multi"!==r.mode);var o=r.createFilter;"function"!=typeof o&&("string"==typeof o&&(o=new RegExp(o)),o instanceof RegExp?r.createFilter=t=>o.test(t):r.createFilter=t=>this.settings.duplicates||!this.options[t]),this.initializePlugins(r.plugins),this.setupCallbacks(),this.setupTemplates();const s=ip("<div>"),a=ip("<div>"),l=this._render("dropdown"),c=ip('<div role="listbox" tabindex="-1">'),h=this.input.getAttribute("class")||"",d=r.mode;var p;(ap(s,r.wrapperClass,h,d),ap(a,r.controlClass),Bp(s,a),ap(l,r.dropdownClass,d),r.copyClassesToDropdown&&ap(l,h),ap(c,r.dropdownContentClass),Bp(l,c),ip(r.dropdownParent||s).appendChild(l),np(r.controlInput))?(p=ip(r.controlInput),Qd(["autocorrect","autocapitalize","autocomplete"],t=>{n.getAttribute(t)&&fp(p,{[t]:n.getAttribute(t)})}),p.tabIndex=-1,a.appendChild(p),this.focus_node=p):r.controlInput?(p=ip(r.controlInput),this.focus_node=p):(p=ip("<input/>"),this.focus_node=a);this.wrapper=s,this.dropdown=l,this.dropdown_content=c,this.control=a,this.control_input=p,this.setup()}setup(){const t=this,e=t.settings,i=t.control_input,n=t.dropdown,r=t.dropdown_content,o=t.wrapper,s=t.control,a=t.input,l=t.focus_node,c={passive:!0},h=t.inputId+"-ts-dropdown";fp(r,{id:h}),fp(l,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":h});const d=Np(l,t.inputId+"-ts-control"),p="label[for='"+rp(t.inputId)+"']",u=document.querySelector(p),g=t.focus.bind(t);if(u){Vp(u,"click",g),fp(u,{for:d});const e=Np(u,t.inputId+"-ts-label");fp(l,{"aria-labelledby":e}),fp(r,{"aria-labelledby":e})}if(o.style.width=a.style.width,t.plugins.names.length){const e="plugin-"+t.plugins.names.join(" plugin-");ap([o,n],e)}(null===e.maxItems||e.maxItems>1)&&t.is_select_tag&&fp(a,{multiple:"multiple"}),e.placeholder&&fp(i,{placeholder:e.placeholder}),!e.splitOn&&e.delimiter&&(e.splitOn=new RegExp("\\s*"+xd(e.delimiter)+"+\\s*")),e.load&&e.loadThrottle&&(e.load=Hp(e.load,e.loadThrottle)),t.control_input.type=a.type,Vp(n,"mousemove",()=>{t.ignoreHover=!1}),Vp(n,"mouseenter",e=>{var i=dp(e.target,"[data-selectable]",n);i&&t.onOptionHover(e,i)},{capture:!0}),Vp(n,"click",e=>{const i=dp(e.target,"[data-selectable]");i&&(t.onOptionSelect(e,i),Pp(e,!0))}),Vp(s,"click",e=>{var n=dp(e.target,"[data-ts-item]",s);n&&t.onItemSelect(e,n)?Pp(e,!0):""==i.value&&(t.onClick(),Pp(e,!0))}),Vp(l,"keydown",e=>t.onKeyDown(e)),Vp(i,"keypress",e=>t.onKeyPress(e)),Vp(i,"input",e=>t.onInput(e)),Vp(l,"blur",e=>t.onBlur(e)),Vp(l,"focus",e=>t.onFocus(e)),Vp(i,"paste",e=>t.onPaste(e));const f=e=>{const r=e.composedPath()[0];if(!o.contains(r)&&!n.contains(r))return t.isFocused&&t.blur(),void t.inputState();r==i&&t.isOpen?e.stopPropagation():Pp(e,!0)},m=()=>{t.isOpen&&t.positionDropdown()};Vp(document,"mousedown",f),Vp(window,"scroll",m,c),Vp(window,"resize",m,c),this._destroy=()=>{document.removeEventListener("mousedown",f),window.removeEventListener("scroll",m),window.removeEventListener("resize",m),u&&u.removeEventListener("click",g)},this.revertSettings={innerHTML:a.innerHTML,tabIndex:a.tabIndex},a.tabIndex=-1,a.insertAdjacentElement("afterend",t.wrapper),t.sync(!1),e.items=[],delete e.optgroups,delete e.options,Vp(a,"invalid",()=>{t.isValid&&(t.isValid=!1,t.isInvalid=!0,t.refreshState())}),t.updateOriginalInput(),t.refreshItems(),t.close(!1),t.inputState(),t.isSetup=!0,a.disabled?t.disable():t.enable(),t.on("change",this.onChange),ap(a,"tomselected","ts-hidden-accessible"),t.trigger("initialize"),!0===e.preload&&t.preload()}setupOptions(t=[],e=[]){this.addOptions(t),Qd(e,t=>{this.registerOptionGroup(t)})}setupTemplates(){var t=this,e=t.settings.labelField,i=t.settings.optgroupLabelField,n={optgroup:t=>{let e=document.createElement("div");return e.className="optgroup",e.appendChild(t.options),e},optgroup_header:(t,e)=>'<div class="optgroup-header">'+e(t[i])+"</div>",option:(t,i)=>"<div>"+i(t[e])+"</div>",item:(t,i)=>"<div>"+i(t[e])+"</div>",option_create:(t,e)=>'<div class="create">Add <strong>'+e(t.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"};t.settings.render=Object.assign({},n,t.settings.render)}setupCallbacks(){var t,e,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(t in i)(e=this.settings[i[t]])&&this.on(t,e)}sync(t=!0){const e=this,i=t?jp(e.input,{delimiter:e.settings.delimiter}):e.settings;e.setupOptions(i.options,i.optgroups),e.setValue(i.items||[],!0),e.lastQuery=null}onClick(){var t=this;if(t.activeItems.length>0)return t.clearActiveItems(),void t.focus();t.isFocused&&t.isOpen?t.blur():t.focus()}onMouseDown(){}onChange(){op(this.input,"input"),op(this.input,"change")}onPaste(t){var e=this;e.isInputHidden||e.isLocked?Pp(t):e.settings.splitOn&&setTimeout(()=>{var t=e.inputValue();if(t.match(e.settings.splitOn)){var i=t.trim().split(e.settings.splitOn);Qd(i,t=>{Mp(t)&&(this.options[t]?e.addItem(t):e.createItem(t))})}},0)}onKeyPress(t){var e=this;if(!e.isLocked){var i=String.fromCharCode(t.keyCode||t.which);return e.settings.create&&"multi"===e.settings.mode&&i===e.settings.delimiter?(e.createItem(),void Pp(t)):void 0}Pp(t)}onKeyDown(t){var e=this;if(e.ignoreHover=!0,e.isLocked)t.keyCode!==Ep&&Pp(t);else{switch(t.keyCode){case yp:if(Dp(Tp,t)&&""==e.control_input.value)return Pp(t),void e.selectAll();break;case wp:return e.isOpen&&(Pp(t,!0),e.close()),void e.clearActiveItems();case Sp:if(!e.isOpen&&e.hasOptions)e.open();else if(e.activeOption){let t=e.getAdjacent(e.activeOption,1);t&&e.setActiveOption(t)}return void Pp(t);case kp:if(e.activeOption){let t=e.getAdjacent(e.activeOption,-1);t&&e.setActiveOption(t)}return void Pp(t);case _p:return void(e.canSelect(e.activeOption)?(e.onOptionSelect(t,e.activeOption),Pp(t)):(e.settings.create&&e.createItem()||document.activeElement==e.control_input&&e.isOpen)&&Pp(t));case xp:return void e.advanceSelection(-1,t);case Ap:return void e.advanceSelection(1,t);case Ep:return void(e.settings.selectOnTab&&(e.canSelect(e.activeOption)&&(e.onOptionSelect(t,e.activeOption),Pp(t)),e.settings.create&&e.createItem()&&Pp(t)));case zp:case Cp:return void e.deleteSelection(t)}e.isInputHidden&&!Dp(Tp,t)&&Pp(t)}}onInput(t){var e=this;if(!e.isLocked){var i=e.inputValue();e.lastValue!==i&&(e.lastValue=i,e.settings.shouldLoad.call(e,i)&&e.load(i),e.refreshOptions(),e.trigger("type",i))}}onOptionHover(t,e){this.ignoreHover||this.setActiveOption(e,!1)}onFocus(t){var e=this,i=e.isFocused;if(e.isDisabled)return e.blur(),void Pp(t);e.ignoreFocus||(e.isFocused=!0,"focus"===e.settings.preload&&e.preload(),i||e.trigger("focus"),e.activeItems.length||(e.showInput(),e.refreshOptions(!!e.settings.openOnFocus)),e.refreshState())}onBlur(t){if(!1!==document.hasFocus()){var e=this;if(e.isFocused){e.isFocused=!1,e.ignoreFocus=!1;var i=()=>{e.close(),e.setActiveItem(),e.setCaret(e.items.length),e.trigger("blur")};e.settings.create&&e.settings.createOnBlur?e.createItem(null,i):i()}}}onOptionSelect(t,e){var i,n=this;e.parentElement&&e.parentElement.matches("[data-disabled]")||(e.classList.contains("create")?n.createItem(null,()=>{n.settings.closeAfterSelect&&n.close()}):void 0!==(i=e.dataset.value)&&(n.lastQuery=null,n.addItem(i),n.settings.closeAfterSelect&&n.close(),!n.settings.hideSelected&&t.type&&/click/.test(t.type)&&n.setActiveOption(e)))}canSelect(t){return!!(this.isOpen&&t&&this.dropdown_content.contains(t))}onItemSelect(t,e){var i=this;return!i.isLocked&&"multi"===i.settings.mode&&(Pp(t),i.setActiveItem(e,t),!0)}canLoad(t){return!!this.settings.load&&!this.loadedSearches.hasOwnProperty(t)}load(t){const e=this;if(!e.canLoad(t))return;ap(e.wrapper,e.settings.loadingClass),e.loading++;const i=e.loadCallback.bind(e);e.settings.load.call(e,t,i)}loadCallback(t,e){const i=this;i.loading=Math.max(i.loading-1,0),i.lastQuery=null,i.clearActiveOption(),i.setupOptions(t,e),i.refreshOptions(i.isFocused&&!i.isInputHidden),i.loading||lp(i.wrapper,i.settings.loadingClass),i.trigger("load",t,e)}preload(){var t=this.wrapper.classList;t.contains("preloaded")||(t.add("preloaded"),this.load(""))}setTextboxValue(t=""){var e=this.control_input;e.value!==t&&(e.value=t,op(e,"update"),this.lastValue=t)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(t,e){Ip(this,e?[]:["change"],()=>{this.clear(e),this.addItems(t,e)})}setMaxItems(t){0===t&&(t=null),this.settings.maxItems=t,this.refreshState()}setActiveItem(t,e){var i,n,r,o,s,a,l=this;if("single"!==l.settings.mode){if(!t)return l.clearActiveItems(),void(l.isFocused&&l.showInput());if("click"===(i=e&&e.type.toLowerCase())&&Dp("shiftKey",e)&&l.activeItems.length){for(a=l.getLastActive(),(r=Array.prototype.indexOf.call(l.control.children,a))>(o=Array.prototype.indexOf.call(l.control.children,t))&&(s=r,r=o,o=s),n=r;n<=o;n++)t=l.control.children[n],-1===l.activeItems.indexOf(t)&&l.setActiveItemClass(t);Pp(e)}else"click"===i&&Dp(Tp,e)||"keydown"===i&&Dp("shiftKey",e)?t.classList.contains("active")?l.removeActiveItem(t):l.setActiveItemClass(t):(l.clearActiveItems(),l.setActiveItemClass(t));l.hideInput(),l.isFocused||l.focus()}}setActiveItemClass(t){const e=this,i=e.control.querySelector(".last-active");i&&lp(i,"last-active"),ap(t,"active last-active"),e.trigger("item_select",t),-1==e.activeItems.indexOf(t)&&e.activeItems.push(t)}removeActiveItem(t){var e=this.activeItems.indexOf(t);this.activeItems.splice(e,1),lp(t,"active")}clearActiveItems(){lp(this.activeItems,"active"),this.activeItems=[]}setActiveOption(t,e=!0){t!==this.activeOption&&(this.clearActiveOption(),t&&(this.activeOption=t,fp(this.focus_node,{"aria-activedescendant":t.getAttribute("id")}),fp(t,{"aria-selected":"true"}),ap(t,"active"),e&&this.scrollToOption(t)))}scrollToOption(t,e){if(!t)return;const i=this.dropdown_content,n=i.clientHeight,r=i.scrollTop||0,o=t.offsetHeight,s=t.getBoundingClientRect().top-i.getBoundingClientRect().top+r;s+o>n+r?this.scroll(s-n+o,e):s<r&&this.scroll(s,e)}scroll(t,e){const i=this.dropdown_content;e&&(i.style.scrollBehavior=e),i.scrollTop=t,i.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(lp(this.activeOption,"active"),fp(this.activeOption,{"aria-selected":null})),this.activeOption=null,fp(this.focus_node,{"aria-activedescendant":null})}selectAll(){const t=this;if("single"===t.settings.mode)return;const e=t.controlChildren();e.length&&(t.hideInput(),t.close(),t.activeItems=e,Qd(e,e=>{t.setActiveItemClass(e)}))}inputState(){var t=this;t.control.contains(t.control_input)&&(fp(t.control_input,{placeholder:t.settings.placeholder}),t.activeItems.length>0||!t.isFocused&&t.settings.hidePlaceholder&&t.items.length>0?(t.setTextboxValue(),t.isInputHidden=!0):(t.settings.hidePlaceholder&&t.items.length>0&&fp(t.control_input,{placeholder:""}),t.isInputHidden=!1),t.wrapper.classList.toggle("input-hidden",t.isInputHidden))}hideInput(){this.inputState()}showInput(){this.inputState()}inputValue(){return this.control_input.value.trim()}focus(){var t=this;t.isDisabled||(t.ignoreFocus=!0,t.control_input.offsetWidth?t.control_input.focus():t.focus_node.focus(),setTimeout(()=>{t.ignoreFocus=!1,t.onFocus()},0))}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(t){return this.sifter.getScoreFunction(t,this.getSearchOptions())}getSearchOptions(){var t=this.settings,e=t.sortField;return"string"==typeof t.sortField&&(e=[{field:t.sortField}]),{fields:t.searchField,conjunction:t.searchConjunction,sort:e,nesting:t.nesting}}search(t){var e,i,n=this,r=this.getSearchOptions();if(n.settings.score&&"function"!=typeof(i=n.settings.score.call(n,t)))throw new Error('Tom Select "score" setting must be a function that returns a function');return t!==n.lastQuery?(n.lastQuery=t,e=n.sifter.search(t,Object.assign(r,{score:i})),n.currentResults=e):e=Object.assign({},n.currentResults),n.settings.hideSelected&&(e.items=e.items.filter(t=>{let e=Mp(t.id);return!(e&&-1!==n.items.indexOf(e))})),e}refreshOptions(t=!0){var e,i,n,r,o,s,a,l,c,h;const d={},p=[];var u=this,g=u.inputValue();const f=g===u.lastQuery||""==g&&null==u.lastQuery;var m=u.search(g),v=null,b=u.settings.shouldOpen||!1,y=u.dropdown_content;for(f&&(v=u.activeOption)&&(c=v.closest("[data-group]")),r=m.items.length,"number"==typeof u.settings.maxOptions&&(r=Math.min(r,u.settings.maxOptions)),r>0&&(b=!0),e=0;e<r;e++){let t=m.items[e];if(!t)continue;let r=t.id,a=u.options[r];if(void 0===a)continue;let l=Op(r),h=u.getOption(l,!0);for(u.settings.hideSelected||h.classList.toggle("selected",u.items.includes(l)),o=a[u.settings.optgroupField]||"",i=0,n=(s=Array.isArray(o)?o:[o])&&s.length;i<n;i++){o=s[i],u.optgroups.hasOwnProperty(o)||(o="");let t=d[o];void 0===t&&(t=document.createDocumentFragment(),p.push(o)),i>0&&(h=h.cloneNode(!0),fp(h,{id:a.$id+"-clone-"+i,"aria-selected":null}),h.classList.add("ts-cloned"),lp(h,"active"),u.activeOption&&u.activeOption.dataset.value==r&&c&&c.dataset.group===o.toString()&&(v=h)),t.appendChild(h),d[o]=t}}u.settings.lockOptgroupOrder&&p.sort((t,e)=>{const i=u.optgroups[t],n=u.optgroups[e];return(i&&i.$order||0)-(n&&n.$order||0)}),a=document.createDocumentFragment(),Qd(p,t=>{let e=d[t];if(!e||!e.children.length)return;let i=u.optgroups[t];if(void 0!==i){let t=document.createDocumentFragment(),n=u.render("optgroup_header",i);Bp(t,n),Bp(t,e);let r=u.render("optgroup",{group:i,options:t});Bp(a,r)}else Bp(a,e)}),y.innerHTML="",Bp(y,a),u.settings.highlight&&(bp(y),m.query.length&&m.tokens.length&&Qd(m.tokens,t=>{vp(y,t.regex)}));var _=t=>{let e=u.render(t,{input:g});return e&&(b=!0,y.insertBefore(e,y.firstChild)),e};if(u.loading?_("loading"):u.settings.shouldLoad.call(u,g)?0===m.items.length&&_("no_results"):_("not_loading"),(l=u.canCreate(g))&&(h=_("option_create")),u.hasOptions=m.items.length>0||l,b){if(m.items.length>0){if(v||"single"!==u.settings.mode||null==u.items[0]||(v=u.getOption(u.items[0])),!y.contains(v)){let t=0;h&&!u.settings.addPrecedence&&(t=1),v=u.selectable()[t]}}else h&&(v=h);t&&!u.isOpen&&(u.open(),u.scrollToOption(v,"auto")),u.setActiveOption(v)}else u.clearActiveOption(),t&&u.isOpen&&u.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(t,e=!1){const i=this;if(Array.isArray(t))return i.addOptions(t,e),!1;const n=Mp(t[i.settings.valueField]);return null!==n&&!i.options.hasOwnProperty(n)&&(t.$order=t.$order||++i.order,t.$id=i.inputId+"-opt-"+t.$order,i.options[n]=t,i.lastQuery=null,e&&(i.userOptions[n]=e,i.trigger("option_add",n,t)),n)}addOptions(t,e=!1){Qd(t,t=>{this.addOption(t,e)})}registerOption(t){return this.addOption(t)}registerOptionGroup(t){var e=Mp(t[this.settings.optgroupValueField]);return null!==e&&(t.$order=t.$order||++this.order,this.optgroups[e]=t,e)}addOptionGroup(t,e){var i;e[this.settings.optgroupValueField]=t,(i=this.registerOptionGroup(e))&&this.trigger("optgroup_add",i,e)}removeOptionGroup(t){this.optgroups.hasOwnProperty(t)&&(delete this.optgroups[t],this.clearCache(),this.trigger("optgroup_remove",t))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(t,e){const i=this;var n,r;const o=Mp(t),s=Mp(e[i.settings.valueField]);if(null===o)return;const a=i.options[o];if(null==a)return;if("string"!=typeof s)throw new Error("Value must be set in option data");const l=i.getOption(o),c=i.getItem(o);if(e.$order=e.$order||a.$order,delete i.options[o],i.uncacheValue(s),i.options[s]=e,l){if(i.dropdown_content.contains(l)){const t=i._render("option",e);mp(l,t),i.activeOption===l&&i.setActiveOption(t)}l.remove()}c&&(-1!==(r=i.items.indexOf(o))&&i.items.splice(r,1,s),n=i._render("item",e),c.classList.contains("active")&&ap(n,"active"),mp(c,n)),i.lastQuery=null}removeOption(t,e){const i=this;t=Op(t),i.uncacheValue(t),delete i.userOptions[t],delete i.options[t],i.lastQuery=null,i.trigger("option_remove",t),i.removeItem(t,e)}clearOptions(t){const e=(t||this.clearFilter).bind(this);this.loadedSearches={},this.userOptions={},this.clearCache();const i={};Qd(this.options,(t,n)=>{e(t,n)&&(i[n]=t)}),this.options=this.sifter.items=i,this.lastQuery=null,this.trigger("option_clear")}clearFilter(t,e){return this.items.indexOf(e)>=0}getOption(t,e=!1){const i=Mp(t);if(null===i)return null;const n=this.options[i];if(null!=n){if(n.$div)return n.$div;if(e)return this._render("option",n)}return null}getAdjacent(t,e,i="option"){var n,r=this;if(!t)return null;n="item"==i?r.controlChildren():r.dropdown_content.querySelectorAll("[data-selectable]");for(let i=0;i<n.length;i++)if(n[i]==t)return e>0?n[i+1]:n[i-1];return null}getItem(t){if("object"==typeof t)return t;var e=Mp(t);return null!==e?this.control.querySelector(`[data-value="${Fp(e)}"]`):null}addItems(t,e){var i=this,n=Array.isArray(t)?t:[t];const r=(n=n.filter(t=>-1===i.items.indexOf(t)))[n.length-1];n.forEach(t=>{i.isPending=t!==r,i.addItem(t,e)})}addItem(t,e){Ip(this,e?[]:["change","dropdown_close"],()=>{var i,n;const r=this,o=r.settings.mode,s=Mp(t);if((!s||-1===r.items.indexOf(s)||("single"===o&&r.close(),"single"!==o&&r.settings.duplicates))&&null!==s&&r.options.hasOwnProperty(s)&&("single"===o&&r.clear(e),"multi"!==o||!r.isFull())){if(i=r._render("item",r.options[s]),r.control.contains(i)&&(i=i.cloneNode(!0)),n=r.isFull(),r.items.splice(r.caretPos,0,s),r.insertAtCaret(i),r.isSetup){if(!r.isPending&&r.settings.hideSelected){let t=r.getOption(s),e=r.getAdjacent(t,1);e&&r.setActiveOption(e)}r.isPending||r.settings.closeAfterSelect||r.refreshOptions(r.isFocused&&"single"!==o),0!=r.settings.closeAfterSelect&&r.isFull()?r.close():r.isPending||r.positionDropdown(),r.trigger("item_add",s,i),r.isPending||r.updateOriginalInput({silent:e})}(!r.isPending||!n&&r.isFull())&&(r.inputState(),r.refreshState())}})}removeItem(t=null,e){const i=this;if(!(t=i.getItem(t)))return;var n,r;const o=t.dataset.value;n=gp(t),t.remove(),t.classList.contains("active")&&(r=i.activeItems.indexOf(t),i.activeItems.splice(r,1),lp(t,"active")),i.items.splice(n,1),i.lastQuery=null,!i.settings.persist&&i.userOptions.hasOwnProperty(o)&&i.removeOption(o,e),n<i.caretPos&&i.setCaret(i.caretPos-1),i.updateOriginalInput({silent:e}),i.refreshState(),i.positionDropdown(),i.trigger("item_remove",o,t)}createItem(t=null,e=(()=>{})){3===arguments.length&&(e=arguments[2]),"function"!=typeof e&&(e=()=>{});var i,n=this,r=n.caretPos;if(t=t||n.inputValue(),!n.canCreate(t))return e(),!1;n.lock();var o=!1,s=t=>{if(n.unlock(),!t||"object"!=typeof t)return e();var i=Mp(t[n.settings.valueField]);if("string"!=typeof i)return e();n.setTextboxValue(),n.addOption(t,!0),n.setCaret(r),n.addItem(i),e(t),o=!0};return i="function"==typeof n.settings.create?n.settings.create.call(this,t,s):{[n.settings.labelField]:t,[n.settings.valueField]:t},o||s(i),!0}refreshItems(){var t=this;t.lastQuery=null,t.isSetup&&t.addItems(t.items),t.updateOriginalInput(),t.refreshState()}refreshState(){const t=this;t.refreshValidityState();const e=t.isFull(),i=t.isLocked;t.wrapper.classList.toggle("rtl",t.rtl);const n=t.wrapper.classList;n.toggle("focus",t.isFocused),n.toggle("disabled",t.isDisabled),n.toggle("required",t.isRequired),n.toggle("invalid",!t.isValid),n.toggle("locked",i),n.toggle("full",e),n.toggle("input-active",t.isFocused&&!t.isInputHidden),n.toggle("dropdown-active",t.isOpen),n.toggle("has-options",up(t.options)),n.toggle("has-items",t.items.length>0)}refreshValidityState(){var t=this;t.input.validity&&(t.isValid=t.input.validity.valid,t.isInvalid=!t.isValid)}isFull(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems}updateOriginalInput(t={}){const e=this;var i,n;const r=e.input.querySelector('option[value=""]');if(e.is_select_tag){const t=[],s=e.input.querySelectorAll("option:checked").length;function o(i,n,o){return i||(i=ip('<option value="'+$p(n)+'">'+$p(o)+"</option>")),i!=r&&e.input.append(i),t.push(i),(i!=r||s>0)&&(i.selected=!0),i}e.input.querySelectorAll("option:checked").forEach(t=>{t.selected=!1}),0==e.items.length&&"single"==e.settings.mode?o(r,"",""):e.items.forEach(r=>{if(i=e.options[r],n=i[e.settings.labelField]||"",t.includes(i.$option)){o(e.input.querySelector(`option[value="${Fp(r)}"]:not(:checked)`),r,n)}else i.$option=o(i.$option,r,n)})}else e.input.value=e.getValue();e.isSetup&&(t.silent||e.trigger("change",e.getValue()))}open(){var t=this;t.isLocked||t.isOpen||"multi"===t.settings.mode&&t.isFull()||(t.isOpen=!0,fp(t.focus_node,{"aria-expanded":"true"}),t.refreshState(),sp(t.dropdown,{visibility:"hidden",display:"block"}),t.positionDropdown(),sp(t.dropdown,{visibility:"visible",display:"block"}),t.focus(),t.trigger("dropdown_open",t.dropdown))}close(t=!0){var e=this,i=e.isOpen;t&&(e.setTextboxValue(),"single"===e.settings.mode&&e.items.length&&e.hideInput()),e.isOpen=!1,fp(e.focus_node,{"aria-expanded":"false"}),sp(e.dropdown,{display:"none"}),e.settings.hideSelected&&e.clearActiveOption(),e.refreshState(),i&&e.trigger("dropdown_close",e.dropdown)}positionDropdown(){if("body"===this.settings.dropdownParent){var t=this.control,e=t.getBoundingClientRect(),i=t.offsetHeight+e.top+window.scrollY,n=e.left+window.scrollX;sp(this.dropdown,{width:e.width+"px",top:i+"px",left:n+"px"})}}clear(t){var e=this;if(e.items.length){var i=e.controlChildren();Qd(i,t=>{e.removeItem(t,!0)}),e.showInput(),t||e.updateOriginalInput(),e.trigger("clear")}}insertAtCaret(t){const e=this,i=e.caretPos,n=e.control;n.insertBefore(t,n.children[i]||null),e.setCaret(i+1)}deleteSelection(t){var e,i,n,r,o=this;e=t&&t.keyCode===zp?-1:1,i=Rp(o.control_input);const s=[];if(o.activeItems.length)r=pp(o.activeItems,e),n=gp(r),e>0&&n++,Qd(o.activeItems,t=>s.push(t));else if((o.isFocused||"single"===o.settings.mode)&&o.items.length){const t=o.controlChildren();let n;e<0&&0===i.start&&0===i.length?n=t[o.caretPos-1]:e>0&&i.start===o.inputValue().length&&(n=t[o.caretPos]),void 0!==n&&s.push(n)}if(!o.shouldDelete(s,t))return!1;for(Pp(t,!0),void 0!==n&&o.setCaret(n);s.length;)o.removeItem(s.pop());return o.showInput(),o.positionDropdown(),o.refreshOptions(!1),!0}shouldDelete(t,e){const i=t.map(t=>t.dataset.value);return!(!i.length||"function"==typeof this.settings.onDelete&&!1===this.settings.onDelete(i,e))}advanceSelection(t,e){var i,n,r=this;r.rtl&&(t*=-1),r.inputValue().length||(Dp(Tp,e)||Dp("shiftKey",e)?(n=(i=r.getLastActive(t))?i.classList.contains("active")?r.getAdjacent(i,t,"item"):i:t>0?r.control_input.nextElementSibling:r.control_input.previousElementSibling)&&(n.classList.contains("active")&&r.removeActiveItem(i),r.setActiveItemClass(n)):r.moveCaret(t))}moveCaret(t){}getLastActive(t){let e=this.control.querySelector(".last-active");if(e)return e;var i=this.control.querySelectorAll(".active");return i?pp(i,t):void 0}setCaret(t){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.isLocked=!0,this.refreshState()}unlock(){this.isLocked=!1,this.refreshState()}disable(){var t=this;t.input.disabled=!0,t.control_input.disabled=!0,t.focus_node.tabIndex=-1,t.isDisabled=!0,this.close(),t.lock()}enable(){var t=this;t.input.disabled=!1,t.control_input.disabled=!1,t.focus_node.tabIndex=t.tabIndex,t.isDisabled=!1,t.unlock()}destroy(){var t=this,e=t.revertSettings;t.trigger("destroy"),t.off(),t.wrapper.remove(),t.dropdown.remove(),t.input.innerHTML=e.innerHTML,t.input.tabIndex=e.tabIndex,lp(t.input,"tomselected","ts-hidden-accessible"),t._destroy(),delete t.input.tomselect}render(t,e){var i,n;const r=this;if("function"!=typeof this.settings.render[t])return null;if(!(n=r.settings.render[t].call(this,e,$p)))return null;if(n=ip(n),"option"===t||"option_create"===t?e[r.settings.disabledField]?fp(n,{"aria-disabled":"true"}):fp(n,{"data-selectable":""}):"optgroup"===t&&(i=e.group[r.settings.optgroupValueField],fp(n,{"data-group":i}),e.group[r.settings.disabledField]&&fp(n,{"data-disabled":""})),"option"===t||"item"===t){const i=Op(e[r.settings.valueField]);fp(n,{"data-value":i}),"item"===t?(ap(n,r.settings.itemClass),fp(n,{"data-ts-item":""})):(ap(n,r.settings.optionClass),fp(n,{role:"option",id:e.$id}),e.$div=n,r.options[i]=e)}return n}_render(t,e){const i=this.render(t,e);if(null==i)throw"HTMLElement expected";return i}clearCache(){Qd(this.options,t=>{t.$div&&(t.$div.remove(),delete t.$div)})}uncacheValue(t){const e=this.getOption(t);e&&e.remove()}canCreate(t){return this.settings.create&&t.length>0&&this.settings.createFilter.call(this,t)}hook(t,e,i){var n=this,r=n[e];n[e]=function(){var e,o;return"after"===t&&(e=r.apply(n,arguments)),o=i.apply(n,arguments),"instead"===t?o:("before"===t&&(e=r.apply(n,arguments)),e)}}}function Wp(){Vp(this.input,"change",()=>{this.sync()})}function Yp(){var t=this,e=t.onOptionSelect;t.settings.hideSelected=!1;var i=function(t){setTimeout(()=>{var e=t.querySelector("input");e instanceof HTMLInputElement&&(t.classList.contains("selected")?e.checked=!0:e.checked=!1)},1)};t.hook("after","setupTemplates",()=>{var e=t.settings.render.option;t.settings.render.option=(i,n)=>{var r=ip(e.call(t,i,n)),o=document.createElement("input");o.addEventListener("click",(function(t){Pp(t)})),o.type="checkbox";const s=Mp(i[t.settings.valueField]);return s&&t.items.indexOf(s)>-1&&(o.checked=!0),r.prepend(o),r}}),t.on("item_remove",e=>{var n=t.getOption(e);n&&(n.classList.remove("selected"),i(n))}),t.on("item_add",e=>{var n=t.getOption(e);n&&i(n)}),t.hook("instead","onOptionSelect",(n,r)=>{if(r.classList.contains("selected"))return r.classList.remove("selected"),t.removeItem(r.dataset.value),t.refreshOptions(),void Pp(n,!0);e.call(t,n,r),i(r)})}function Gp(t){const e=this,i=Object.assign({className:"clear-button",title:"Clear All",html:t=>`<div class="${t.className}" title="${t.title}">&#10799;</div>`},t);e.on("initialize",()=>{var t=ip(i.html(i));t.addEventListener("click",t=>{e.isDisabled||(e.clear(),"single"===e.settings.mode&&e.settings.allowEmptyOption&&e.addItem(""),t.preventDefault(),t.stopPropagation())}),e.control.appendChild(t)})}function Kp(){var t=this;if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===t.settings.mode){var e=t.lock,i=t.unlock;t.hook("instead","lock",()=>{var i=$(t.control).data("sortable");return i&&i.disable(),e.call(t)}),t.hook("instead","unlock",()=>{var e=$(t.control).data("sortable");return e&&e.enable(),i.call(t)}),t.on("initialize",()=>{var e=$(t.control).sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:t.isLocked,start:(t,i)=>{i.placeholder.css("width",i.helper.css("width")),e.css({overflow:"visible"})},stop:()=>{e.css({overflow:"hidden"});var i=[];e.children("[data-value]").each((function(){this.dataset.value&&i.push(this.dataset.value)})),t.setValue(i)}})})}}function Xp(t){const e=this,i=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:t=>'<div class="'+t.headerClass+'"><div class="'+t.titleRowClass+'"><span class="'+t.labelClass+'">'+t.title+'</span><a class="'+t.closeClass+'">&times;</a></div></div>'},t);e.on("initialize",()=>{var t=ip(i.html(i)),n=t.querySelector("."+i.closeClass);n&&n.addEventListener("click",t=>{Pp(t,!0),e.close()}),e.dropdown.insertBefore(t,e.dropdown.firstChild)})}function Zp(){var t=this;t.hook("instead","setCaret",e=>{"single"!==t.settings.mode&&t.control.contains(t.control_input)?(e=Math.max(0,Math.min(t.items.length,e)))==t.caretPos||t.isPending||t.controlChildren().forEach((i,n)=>{n<e?t.control_input.insertAdjacentElement("beforebegin",i):t.control.appendChild(i)}):e=t.items.length,t.caretPos=e}),t.hook("instead","moveCaret",e=>{if(!t.isFocused)return;const i=t.getLastActive(e);if(i){const n=gp(i);t.setCaret(e>0?n+1:n),t.setActiveItem(),lp(i,"last-active")}else t.setCaret(t.caretPos+e)})}function Qp(){const t=this;t.settings.shouldOpen=!0,t.hook("before","setup",()=>{t.focus_node=t.control,ap(t.control_input,"dropdown-input");const e=ip('<div class="dropdown-input-wrap">');e.append(t.control_input),t.dropdown.insertBefore(e,t.dropdown.firstChild);const i=ip('<input class="items-placeholder" tabindex="-1" />');i.placeholder=t.settings.placeholder||"",t.control.append(i)}),t.on("initialize",()=>{t.control_input.addEventListener("keydown",e=>{switch(e.keyCode){case wp:return t.isOpen&&(Pp(e,!0),t.close()),void t.clearActiveItems();case Ep:t.focus_node.tabIndex=-1}return t.onKeyDown.call(t,e)}),t.on("blur",()=>{t.focus_node.tabIndex=t.isDisabled?-1:t.tabIndex}),t.on("dropdown_open",()=>{t.control_input.focus()});const e=t.onBlur;t.hook("instead","onBlur",i=>{if(!i||i.relatedTarget!=t.control_input)return e.call(t)}),Vp(t.control_input,"blur",()=>t.onBlur()),t.hook("before","close",()=>{t.isOpen&&t.focus_node.focus({preventScroll:!0})})})}function Jp(){var t=this;t.on("initialize",()=>{var e=document.createElement("span"),i=t.control_input;e.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",t.wrapper.appendChild(e);var n=["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"];for(const t of n)e.style[t]=i.style[t];var r=()=>{e.textContent=i.value,i.style.width=e.clientWidth+"px"};r(),t.on("update item_add item_remove",r),Vp(i,"input",r),Vp(i,"keyup",r),Vp(i,"blur",r),Vp(i,"update",r)})}function tu(){var t=this,e=t.deleteSelection;this.hook("instead","deleteSelection",i=>!!t.activeItems.length&&e.call(t,i))}function eu(){this.hook("instead","setActiveItem",()=>{}),this.hook("instead","selectAll",()=>{})}function iu(){var t=this,e=t.onKeyDown;t.hook("instead","onKeyDown",i=>{var n,r,o,s;if(!t.isOpen||i.keyCode!==xp&&i.keyCode!==Ap)return e.call(t,i);t.ignoreHover=!0,s=dp(t.activeOption,"[data-group]"),n=gp(t.activeOption,"[data-selectable]"),s&&(s=i.keyCode===xp?s.previousSibling:s.nextSibling)&&(r=(o=s.querySelectorAll("[data-selectable]"))[Math.min(o.length-1,n)])&&t.setActiveOption(r)})}function nu(t){const e=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},t);var i=this;if(e.append){var n='<a href="javascript:void(0)" class="'+e.className+'" tabindex="-1" title="'+$p(e.title)+'">'+e.label+"</a>";i.hook("after","setupTemplates",()=>{var t=i.settings.render.item;i.settings.render.item=(e,r)=>{var o=ip(t.call(i,e,r)),s=ip(n);return o.appendChild(s),Vp(s,"mousedown",t=>{Pp(t,!0)}),Vp(s,"click",t=>{Pp(t,!0),i.isLocked||i.shouldDelete([o],t)&&(i.removeItem(o),i.refreshOptions(!1),i.inputState())}),o}})}}function ru(t){const e=this,i=Object.assign({text:t=>t[e.settings.labelField]},t);e.on("item_remove",(function(t){if(e.isFocused&&""===e.control_input.value.trim()){var n=e.options[t];n&&e.setTextboxValue(i.text.call(e,n))}}))}function ou(){const t=this,e=t.canLoad,i=t.clearActiveOption,n=t.loadCallback;var r,o,s={},a=!1,l=[];if(t.settings.shouldLoadMore||(t.settings.shouldLoadMore=()=>{if(r.clientHeight/(r.scrollHeight-r.scrollTop)>.9)return!0;if(t.activeOption){var e=t.selectable();if(Array.from(e).indexOf(t.activeOption)>=e.length-2)return!0}return!1}),!t.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method";t.settings.sortField=[{field:"$order"},{field:"$score"}];const c=e=>!("number"==typeof t.settings.maxOptions&&r.children.length>=t.settings.maxOptions)&&!(!(e in s)||!s[e]),h=(e,i)=>t.items.indexOf(i)>=0||l.indexOf(i)>=0;t.setNextUrl=(t,e)=>{s[t]=e},t.getUrl=e=>{if(e in s){const t=s[e];return s[e]=!1,t}return s={},t.settings.firstUrl.call(t,e)},t.hook("instead","clearActiveOption",()=>{if(!a)return i.call(t)}),t.hook("instead","canLoad",i=>i in s?c(i):e.call(t,i)),t.hook("instead","loadCallback",(e,i)=>{if(a){if(o){const i=e[0];void 0!==i&&(o.dataset.value=i[t.settings.valueField])}}else t.clearOptions(h);n.call(t,e,i),a=!1}),t.hook("after","refreshOptions",()=>{const e=t.lastValue;var i;c(e)?(i=t.render("loading_more",{query:e}))&&(i.setAttribute("data-selectable",""),o=i):e in s&&!r.querySelector(".no-results")&&(i=t.render("no_more_results",{query:e})),i&&(ap(i,t.settings.optionClass),r.append(i))}),t.on("initialize",()=>{l=Object.keys(t.options),r=t.dropdown_content,t.settings.render=Object.assign({},{loading_more:()=>'<div class="loading-more-results">Loading more results ... </div>',no_more_results:()=>'<div class="no-more-results">No more results</div>'},t.settings.render),r.addEventListener("scroll",()=>{t.settings.shouldLoadMore.call(t)&&c(t.lastValue)&&(a||(a=!0,t.load.call(t,t.lastValue)))})})}function su(t){if(document.getElementById("__pb-multi-select-css"))return;const e=P("../css/tom-select"),i=document.createElement("link");i.id="__pb-multi-select-css",i.href=`${e}/tom-select.${t}.min.css`,i.rel="stylesheet",document.head.appendChild(i)}Up.define("change_listener",Wp),Up.define("checkbox_options",Yp),Up.define("clear_button",Gp),Up.define("drag_drop",Kp),Up.define("dropdown_header",Xp),Up.define("caret_position",Zp),Up.define("dropdown_input",Qp),Up.define("input_autogrow",Jp),Up.define("no_backspace_delete",tu),Up.define("no_active_items",eu),Up.define("optgroup_columns",iu),Up.define("remove_button",nu),Up.define("restore_on_backspace",ru),Up.define("virtual_scroll",ou);const au=t=>t?`<div>${G(t.text)}</div>`:"";class lu extends(N(V)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{placeholder:{type:String},source:{type:String},closeAfterSelect:{type:Boolean,attribute:"close-after-select"},preload:{type:Boolean},onBlur:{type:String,attribute:"on-blur"},onChange:{type:String,attribute:"on-change"}})}get value(){return this._select?this._select.getValue():null}set value(t){this._select&&(this._select.clear(!0),this._select.sync(),this._select.setValue(t,!1),this._select.sync())}set renderItem(t){this.renderFunction=t}constructor(){super(),this.theme="default",this.source=null,this.closeAfterSelect=!1,this.preload=!1,this.renderFunction=au,this.onBlur="pb-combo-box-blur",this.onChange="pb-combo-box-change",this.placeholder=""}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",()=>{this._select&&(this._select.settings.placeholder=G(this.placeholder),this._select.inputState(),this.source?this._select.refreshOptions(!1):(this._select.clearOptions(),this._select.sync()))})}firstUpdated(){su(this.theme);let t=this.querySelector("select,input");t||(t=document.createElement("input"),this.appendChild(t)),t.autocomplete=!1,B("pb-page-ready",()=>{const e={};if(this.source){const t=this.toAbsoluteURL(this.source);e.labelField="text",e.valueField="value",e.searchField=[],e.preload=this.preload,e.load=(e,i)=>{fetch(`${t}?query=${encodeURIComponent(e)}`,{method:"GET",mode:"cors",credentials:"same-origin"}).then(t=>t.json()).then(t=>{i(t)}).catch(()=>{i()})},e.render={option:this.renderFunction,item:this.renderFunction}}e.placeholder=G(this.placeholder),e.closeAfterSelect=this.closeAfterSelect,e.onBlur=()=>this.emitTo(this.onBlur,{value:this.value}),e.onChange=()=>this.emitTo(this.onChange,{value:this.value}),this._select=new Up(t,e)})}createRenderRoot(){return this}}customElements.define("pb-combo-box",lu);class cu extends(N(V)){static get properties(){return Object.assign({src:{type:String},styles:{type:String},url:{type:String,reflect:!0,readOnly:!0},raw:{type:Boolean}},super.properties)}constructor(){super(),this.url="about:blank",this.raw=!1}firstUpdated(){super.firstUpdated(),this._iframe=this.shadowRoot.querySelector("iframe"),this._iframe.addEventListener("load",()=>{"about:blank"!==this._iframe.src&&(this._iframe.className="",this.emitTo("pb-end-update"))}),B("pb-page-ready",()=>{this.refresh()})}print(){this._iframe.contentWindow.print()}refresh(){this.emitTo("pb-start-update"),this._iframe.className="hidden",this._iframe.src="about:blank";const t=this.getDocument(),e=new URLSearchParams;t.odd&&e.set("odd",t.odd+".odd"),e.set("base",`${this.getEndpoint()}/${t.getCollection()}/`),this._getCustomStyles().forEach(t=>e.append("style",t));const i=e.toString();this.url=`${this.getEndpoint()}/api/document/${encodeURIComponent(t.path)}/print?${i}`;const n=new URLSearchParams(i);n.set("wc","true"),this.raw||(n.set("script",P("../lib/paged.polyfill.js")),n.append("style",P("../css/pagedjs/interface.css"))),this._iframe.src=`${this.getEndpoint()}/api/document/${encodeURIComponent(t.path)}/print?${n.toString()}`}render(){return I`
            <iframe title="Preview" src="about:blank"></iframe>
        `}_getCustomStyles(){let t=[];return this.styles&&(t=this.styles.split(/\s*,\s*/)),t}static get styles(){return R`
            :host {
                display: block;
            }

            iframe {
                border: 0;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 0.5s ease-out 0.5s;
            }

            .hidden {
                opacity: 0;
                transition: opacity 0.5s ease-out;
            }

        `}}customElements.define("pb-print-preview",cu);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const hu=n`<iron-iconset-svg name="editor" size="24">
<svg><defs>
<g id="attach-file"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></g>
<g id="attach-money"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path></g>
<g id="border-all"><path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"></path></g>
<g id="border-bottom"><path d="M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"></path></g>
<g id="border-clear"><path d="M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"></path></g>
<g id="border-color"><path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"></path><path fill-opacity=".36" d="M0 20h24v4H0z"></path></g>
<g id="border-horizontal"><path d="M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="border-inner"><path d="M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"></path></g>
<g id="border-left"><path d="M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"></path></g>
<g id="border-outer"><path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"></path></g>
<g id="border-right"><path d="M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"></path></g>
<g id="border-style"><path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"></path></g>
<g id="border-top"><path d="M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"></path></g>
<g id="border-vertical"><path d="M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"></path></g>
<g id="bubble-chart"><circle cx="7.2" cy="14.4" r="3.2"></circle><circle cx="14.8" cy="18" r="2"></circle><circle cx="15.2" cy="8.8" r="4.8"></circle></g>
<g id="drag-handle"><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path></g>
<g id="format-align-center"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path></g>
<g id="format-align-justify"><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path></g>
<g id="format-align-left"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path></g>
<g id="format-align-right"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path></g>
<g id="format-bold"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></g>
<g id="format-clear"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"></path></g>
<g id="format-color-fill"><path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"></path><path fill-opacity=".36" d="M0 20h24v4H0z"></path></g>
<g id="format-color-reset"><path d="M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z"></path></g>
<g id="format-color-text"><path fill-opacity=".36" d="M0 20h24v4H0z"></path><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"></path></g>
<g id="format-indent-decrease"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></g>
<g id="format-indent-increase"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></g>
<g id="format-italic"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path></g>
<g id="format-line-spacing"><path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"></path></g>
<g id="format-list-bulleted"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path></g>
<g id="format-list-numbered"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></g>
<g id="format-paint"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"></path></g>
<g id="format-quote"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></g>
<g id="format-shapes"><path d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"></path></g>
<g id="format-size"><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"></path></g>
<g id="format-strikethrough"><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path></g>
<g id="format-textdirection-l-to-r"><path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z"></path></g>
<g id="format-textdirection-r-to-l"><path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z"></path></g>
<g id="format-underlined"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></g>
<g id="functions"><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"></path></g>
<g id="highlight"><path d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"></path></g>
<g id="insert-chart"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="insert-comment"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></g>
<g id="insert-drive-file"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path></g>
<g id="insert-emoticon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="insert-invitation"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="insert-link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="insert-photo"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>
<g id="linear-scale"><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"></path></g>
<g id="merge-type"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"></path></g>
<g id="mode-comment"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path></g>
<g id="mode-edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="monetization-on"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path></g>
<g id="money-off"><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"></path></g>
<g id="multiline-chart"><path d="M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"></path></g>
<g id="pie-chart"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"></path></g>
<g id="pie-chart-outlined"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z"></path></g>
<g id="publish"><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path></g>
<g id="short-text"><path d="M4 9h16v2H4zm0 4h10v2H4z"></path></g>
<g id="show-chart"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"></path></g>
<g id="space-bar"><path d="M18 9v4H6V9H4v6h16V9z"></path></g>
<g id="strikethrough-s"><path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z"></path></g>
<g id="text-fields"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path></g>
<g id="title"><path d="M5 4v3h5.5v12h3V7H19V4z"></path></g>
<g id="vertical-align-bottom"><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"></path></g>
<g id="vertical-align-center"><path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"></path></g>
<g id="vertical-align-top"><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"></path></g>
<g id="wrap-text"><path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(hu.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const du=n`<iron-iconset-svg name="social" size="24">
<svg><defs>
<g id="cake"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"></path></g>
<g id="domain"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
<g id="group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="group-add"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></g>
<g id="location-city"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></g>
<g id="mood"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="mood-bad"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="notifications"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g>
<g id="notifications-active"><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path></g>
<g id="notifications-none"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></g>
<g id="notifications-off"><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"></path></g>
<g id="notifications-paused"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"></path></g>
<g id="pages"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"></path></g>
<g id="party-mode"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"></path></g>
<g id="people"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="people-outline"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></g>
<g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-add"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-outline"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="plus-one"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"></path></g>
<g id="poll"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="public"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></g>
<g id="school"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></g>
<g id="sentiment-dissatisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path></g>
<g id="sentiment-neutral"><path d="M9 14h6v1.5H9z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="sentiment-satisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"></path></g>
<g id="sentiment-very-dissatisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="sentiment-very-satisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></g>
<g id="whatshot"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(du.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const pu=n`<iron-iconset-svg name="maps" size="24">
<svg><defs>
<g id="add-location"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"></path></g>
<g id="beenhere"><path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"></path></g>
<g id="directions"><path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path></g>
<g id="directions-bike"><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path></g>
<g id="directions-boat"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"></path></g>
<g id="directions-bus"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></g>
<g id="directions-car"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></g>
<g id="directions-railway"><path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"></path></g>
<g id="directions-run"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"></path></g>
<g id="directions-subway"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></g>
<g id="directions-transit"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></g>
<g id="directions-walk"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"></path></g>
<g id="edit-location"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z"></path></g>
<g id="ev-station"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"></path></g>
<g id="flight"><path d="M10.18 9"></path><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></g>
<g id="hotel"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g>
<g id="layers"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"></path></g>
<g id="layers-clear"><path d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"></path></g>
<g id="local-activity"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></g>
<g id="local-airport"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></g>
<g id="local-atm"><path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path></g>
<g id="local-bar"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"></path></g>
<g id="local-cafe"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"></path></g>
<g id="local-car-wash"><path d="M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z"></path></g>
<g id="local-convenience-store"><path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"></path></g>
<g id="local-dining"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></g>
<g id="local-drink"><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"></path></g>
<g id="local-florist"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"></path></g>
<g id="local-gas-station"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="local-grocery-store"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="local-hospital"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"></path></g>
<g id="local-hotel"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g>
<g id="local-laundry-service"><path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></g>
<g id="local-library"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></g>
<g id="local-mall"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"></path></g>
<g id="local-movies"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="local-offer"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></g>
<g id="local-parking"><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></g>
<g id="local-pharmacy"><path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></g>
<g id="local-phone"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></g>
<g id="local-pizza"><path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="local-play"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></g>
<g id="local-post-office"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="local-printshop"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="local-see"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="local-shipping"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="local-taxi"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></g>
<g id="map"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"></path></g>
<g id="my-location"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="navigation"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></g>
<g id="near-me"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></g>
<g id="person-pin"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"></path></g>
<g id="person-pin-circle"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z"></path></g>
<g id="pin-drop"><path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z"></path></g>
<g id="place"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rate-review"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path></g>
<g id="restaurant"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"></path></g>
<g id="restaurant-menu"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></g>
<g id="satellite"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"></path></g>
<g id="store-mall-directory"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="streetview"><path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"></path><circle cx="18" cy="6" r="5"></circle><path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"></path></g>
<g id="subway"><circle cx="15.5" cy="16" r="1"></circle><circle cx="8.5" cy="16" r="1"></circle><path d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z"></path></g>
<g id="terrain"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></g>
<g id="traffic"><path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z"></path></g>
<g id="train"><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="tram"><path d="M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"></path></g>
<g id="transfer-within-a-station"><path d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"></path></g>
<g id="zoom-out-map"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(pu.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const uu=n`<iron-iconset-svg name="image" size="24">
<svg><defs>
<g id="add-a-photo"><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"></path></g>
<g id="add-to-photos"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="adjust"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"></path></g>
<g id="assistant"><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"></path></g>
<g id="assistant-photo"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="audiotrack"><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"></path></g>
<g id="blur-circular"><path d="M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="blur-linear"><path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"></path></g>
<g id="blur-off"><path d="M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"></path></g>
<g id="blur-on"><path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="brightness-1"><circle cx="12" cy="12" r="10"></circle></g>
<g id="brightness-2"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></g>
<g id="brightness-3"><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"></path></g>
<g id="brightness-4"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></g>
<g id="brightness-5"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></g>
<g id="brightness-6"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></g>
<g id="brightness-7"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></g>
<g id="broken-image"><path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"></path></g>
<g id="brush"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></g>
<g id="burst-mode"><path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"></path></g>
<g id="camera"><path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"></path></g>
<g id="camera-alt"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="camera-front"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z"></path></g>
<g id="camera-rear"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"></path></g>
<g id="camera-roll"><path d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"></path></g>
<g id="center-focus-strong"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"></path></g>
<g id="center-focus-weak"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="collections"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></g>
<g id="collections-bookmark"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"></path></g>
<g id="color-lens"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="colorize"><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path></g>
<g id="compare"><path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="control-point"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="control-point-duplicate"><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></g>
<g id="crop"><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"></path></g>
<g id="crop-16-9"><path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"></path></g>
<g id="crop-3-2"><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"></path></g>
<g id="crop-5-4"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"></path></g>
<g id="crop-7-5"><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"></path></g>
<g id="crop-din"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></g>
<g id="crop-free"><path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="crop-landscape"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"></path></g>
<g id="crop-original"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"></path></g>
<g id="crop-portrait"><path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"></path></g>
<g id="crop-rotate"><path d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"></path></g>
<g id="crop-square"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"></path></g>
<g id="dehaze"><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"></path></g>
<g id="details"><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"></path></g>
<g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="exposure"><path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"></path></g>
<g id="exposure-neg-1"><path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"></path></g>
<g id="exposure-neg-2"><path d="M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z"></path></g>
<g id="exposure-plus-1"><path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"></path></g>
<g id="exposure-plus-2"><path d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"></path></g>
<g id="exposure-zero"><path d="M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"></path></g>
<g id="filter"><path d="M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-1"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-2"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"></path></g>
<g id="filter-3"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z"></path></g>
<g id="filter-4"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-5"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z"></path></g>
<g id="filter-6"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z"></path></g>
<g id="filter-7"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z"></path></g>
<g id="filter-8"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"></path></g>
<g id="filter-9"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z"></path></g>
<g id="filter-9-plus"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z"></path></g>
<g id="filter-b-and-w"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z"></path></g>
<g id="filter-center-focus"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="filter-drama"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path></g>
<g id="filter-frames"><path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"></path></g>
<g id="filter-hdr"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></g>
<g id="filter-none"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></g>
<g id="filter-tilt-shift"><path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"></path></g>
<g id="filter-vintage"><path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g>
<g id="flare"><path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"></path></g>
<g id="flash-auto"><path d="M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"></path></g>
<g id="flash-off"><path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"></path></g>
<g id="flash-on"><path d="M7 2v11h3v9l7-12h-4l4-8z"></path></g>
<g id="flip"><path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"></path></g>
<g id="gradient"><path d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"></path></g>
<g id="grain"><path d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="grid-off"><path d="M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"></path></g>
<g id="grid-on"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path></g>
<g id="hdr-off"><path d="M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z"></path></g>
<g id="hdr-on"><path d="M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z"></path></g>
<g id="hdr-strong"><path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="hdr-weak"><path d="M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g>
<g id="healing"><path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"></path></g>
<g id="image"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>
<g id="image-aspect-ratio"><path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"></path></g>
<g id="iso"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"></path></g>
<g id="landscape"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></g>
<g id="leak-add"><path d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z"></path></g>
<g id="leak-remove"><path d="M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z"></path></g>
<g id="lens"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path></g>
<g id="linked-camera"><circle cx="12" cy="14" r="3.2"></circle><path d="M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6"></path><path d="M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="looks"><path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="looks-3"><path d="M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z"></path></g>
<g id="looks-4"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"></path></g>
<g id="looks-5"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z"></path></g>
<g id="looks-6"><path d="M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z"></path></g>
<g id="looks-one"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"></path></g>
<g id="looks-two"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z"></path></g>
<g id="loupe"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="monochrome-photos"><path d="M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z"></path></g>
<g id="movie-creation"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="movie-filter"><path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"></path></g>
<g id="music-note"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></g>
<g id="nature"><path d="M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z"></path></g>
<g id="nature-people"><path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"></path></g>
<g id="navigate-before"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="navigate-next"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="palette"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="panorama"><path d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"></path></g>
<g id="panorama-fish-eye"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="panorama-horizontal"><path d="M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z"></path></g>
<g id="panorama-vertical"><path d="M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z"></path></g>
<g id="panorama-wide-angle"><path d="M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"></path></g>
<g id="photo"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></g>
<g id="photo-album"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z"></path></g>
<g id="photo-camera"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="photo-filter"><path d="M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z"></path></g>
<g id="photo-library"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></g>
<g id="photo-size-select-actual"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path></g>
<g id="photo-size-select-large"><path d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"></path></g>
<g id="photo-size-select-small"><path d="M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z"></path></g>
<g id="picture-as-pdf"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></g>
<g id="portrait"><path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></g>
<g id="remove-red-eye"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="rotate-90-degrees-ccw"><path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"></path></g>
<g id="rotate-left"><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"></path></g>
<g id="rotate-right"><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"></path></g>
<g id="slideshow"><path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></g>
<g id="straighten"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"></path></g>
<g id="style"><path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"></path></g>
<g id="switch-camera"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path></g>
<g id="switch-video"><path d="M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path></g>
<g id="tag-faces"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="texture"><path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"></path></g>
<g id="timelapse"><path d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="timer"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="timer-10"><path d="M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z"></path></g>
<g id="timer-3"><path d="M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z"></path></g>
<g id="timer-off"><path d="M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z"></path></g>
<g id="tonality"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"></path></g>
<g id="transform"><path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"></path></g>
<g id="tune"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></g>
<g id="view-comfy"><path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"></path></g>
<g id="view-compact"><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"></path></g>
<g id="vignette"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"></path></g>
<g id="wb-auto"><path d="M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"></path></g>
<g id="wb-cloudy"><path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path></g>
<g id="wb-incandescent"><path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"></path></g>
<g id="wb-iridescent"><path d="M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"></path></g>
<g id="wb-sunny"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(uu.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" autocapitalize$="[[autocapitalize]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[f,r],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},autocapitalize:{type:String,value:"none"},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(t){this.$.textarea.selectionStart=t},set selectionEnd(t){this.$.textarea.selectionEnd=t},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&!navigator.userAgent.match(/OS 1[3456789]/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var t=this.$.textarea.validity.valid;return t&&(this.required&&""===this.value?t=!1:this.hasValidator()&&(t=f.validate.call(this,this.value))),this.invalid=!t,this.fire("iron-input-validate"),t},_bindValueChanged:function(t){this.value=t},_valueChanged:function(t){var e=this.textarea;e&&(e.value!==t&&(e.value=t||0===t?t:""),this.bindValue=t,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var i=t(e).path;this.value=i?i[0].value:e.target.value},_constrain:function(t){var e;for(t=t||[""],e=this.maxRows>0&&t.length>this.maxRows?t.slice(0,this.maxRows):t.slice(0);this.rows>0&&e.length<this.rows;)e.push("");return e.join("<br/>")+"&#160;"},_valueForMirror:function(){var t=this.textarea;if(t)return this.tokens=t&&t.value?t.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:n`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[S,m],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(t){this.$.input.textarea.selectionStart=t},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(t){this.$.input.textarea.selectionEnd=t},_ariaLabelledByChanged:function(t){this._focusableElement.setAttribute("aria-labelledby",t)},_ariaDescribedByChanged:function(t){this._focusableElement.setAttribute("aria-describedby",t)},get _focusableElement(){return this.inputElement.textarea}});
