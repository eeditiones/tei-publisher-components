import { css } from 'lit-element';

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
    .replace('-', '');
}

/**
 * The themes are written for the class names of `pb-popover`'s popup
 * (`.pb-popover-root > .pb-popover-box > .pb-popover-content + .pb-popover-arrow`).
 * Translate them to the class names of tippy.js.
 *
 * @deprecated Only used by the deprecated `loadTippyStyles`.
 */
export function toTippy(cssCode) {
  return cssCode
    .replace(/\.pb-popover-(box|content|arrow|svg-arrow|backdrop)\b/g, '.tippy-$1')
    .replace(/\.pb-popover-root\b/g, '[data-tippy-root]');
}

/**
 * Default look of the popup. The selectors are wrapped in `:where()`, so they
 * have no specificity: a theme or an application stylesheet (e.g. the CSS of an
 * ODD) overrides them, no matter in which order the styles are loaded.
 */
export const base = `
    :where(.pb-popover-box[data-animation=fade][data-state=hidden]) {
        opacity: 0
    }

    :where(.pb-popover-root) {
        max-width: calc(100vw - 10px)
    }

    :where(.pb-popover-box) {
        position: relative;
        background-color: #333;
        color: #fff;
        border-radius: 4px;
        font-size: clamp(
          calc(var(--pb-popover-font-size, 1rem) * var(--pb-min-zoom, 0.5)), 
          calc(var(--pb-popover-font-size, 1rem) * var(--pb-zoom-factor)), 
          calc(var(--pb-popover-font-size, 1rem) * var(--pb-max-zoom, 3.0))
        );
        line-height: calc(var(--pb-popover-line-height, 1.5) * var(--pb-zoom-factor));

        text-align: left;
        font-style: normal;
        font-weight: normal;
        outline: 0;
        transition-property: transform, visibility, opacity;
    }

    :where(.pb-popover-box[data-placement^=top]>.pb-popover-arrow) {
        bottom: 0
    }

    :where(.pb-popover-box[data-placement^=top]>.pb-popover-arrow)::before {
        bottom: -7px;
        left: 0;
        border-width: 8px 8px 0;
        border-top-color: initial;
        transform-origin: center top
    }

    :where(.pb-popover-box[data-placement^=bottom]>.pb-popover-arrow) {
        top: 0
    }

    :where(.pb-popover-box[data-placement^=bottom]>.pb-popover-arrow)::before {
        top: -7px;
        left: 0;
        border-width: 0 8px 8px;
        border-bottom-color: initial;
        transform-origin: center bottom
    }

    :where(.pb-popover-box[data-placement^=left]>.pb-popover-arrow) {
        right: 0
    }

    :where(.pb-popover-box[data-placement^=left]>.pb-popover-arrow)::before {
        border-width: 8px 0 8px 8px;
        border-left-color: initial;
        right: -7px;
        transform-origin: center left
    }

    :where(.pb-popover-box[data-placement^=right]>.pb-popover-arrow) {
        left: 0
    }

    :where(.pb-popover-box[data-placement^=right]>.pb-popover-arrow)::before {
        left: -7px;
        border-width: 8px 8px 8px 0;
        border-right-color: initial;
        transform-origin: center right
    }

    :where(.pb-popover-box[data-inertia][data-state=visible]) {
        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)
    }

    :where(.pb-popover-arrow) {
        width: 16px;
        height: 16px;
        color: #333
    }

    :where(.pb-popover-arrow)::before {
        content: "";
        position: absolute;
        border-color: transparent;
        border-style: solid
    }

    :where(.pb-popover-content) {
        position: relative;
        padding: 5px 9px;
        z-index: 1;
        overflow: auto;
        max-height: var(--pb-popover-max-height, calc(100vh - 60px));
        min-height: var(--pb-popover-min-height, auto);
        max-width: var(--pb-popover-max-width, auto);
        min-width: var(--pb-popover-min-width, auto);
        color: var(--pb-popover-color);
    }
`;

export const lightBorder = `
    .pb-popover-box[data-theme~=light-border] {
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 8, 16, .15);
        color: #333;
        box-shadow: 0 4px 14px -2px rgba(0, 8, 16, .08)
    }

    .pb-popover-box[data-theme~=light-border]>.pb-popover-backdrop {
        background-color: #fff
    }

    .pb-popover-box[data-theme~=light-border]>.pb-popover-arrow:after, .pb-popover-box[data-theme~=light-border]>.pb-popover-svg-arrow:after {
        content: "";
        position: absolute;
        z-index: -1
    }

    .pb-popover-box[data-theme~=light-border]>.pb-popover-arrow:after {
        border-color: transparent;
        border-style: solid
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=top]>.pb-popover-arrow:before {
        border-top-color: #fff
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=top]>.pb-popover-arrow:after {
        border-top-color: rgba(0, 8, 16, .2);
        border-width: 7px 7px 0;
        top: 17px;
        left: 1px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=top]>.pb-popover-svg-arrow>svg {
        top: 16px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=top]>.pb-popover-svg-arrow:after {
        top: 17px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=bottom]>.pb-popover-arrow:before {
        border-bottom-color: #fff;
        bottom: 16px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=bottom]>.pb-popover-arrow:after {
        border-bottom-color: rgba(0, 8, 16, .2);
        border-width: 0 7px 7px;
        bottom: 17px;
        left: 1px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=bottom]>.pb-popover-svg-arrow>svg {
        bottom: 16px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=bottom]>.pb-popover-svg-arrow:after {
        bottom: 17px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=left]>.pb-popover-arrow:before {
        border-left-color: #fff
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=left]>.pb-popover-arrow:after {
        border-left-color: rgba(0, 8, 16, .2);
        border-width: 7px 0 7px 7px;
        left: 17px;
        top: 1px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=left]>.pb-popover-svg-arrow>svg {
        left: 11px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=left]>.pb-popover-svg-arrow:after {
        left: 12px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=right]>.pb-popover-arrow:before {
        border-right-color: #fff;
        right: 16px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=right]>.pb-popover-arrow:after {
        border-width: 7px 7px 7px 0;
        right: 17px;
        top: 1px;
        border-right-color: rgba(0, 8, 16, .2)
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=right]>.pb-popover-svg-arrow>svg {
        right: 11px
    }

    .pb-popover-box[data-theme~=light-border][data-placement^=right]>.pb-popover-svg-arrow:after {
        right: 12px
    }

    .pb-popover-box[data-theme~=light-border]>.pb-popover-svg-arrow {
        fill: #fff
    }

    .pb-popover-box[data-theme~=light-border]>.pb-popover-svg-arrow:after {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);
        background-size: 16px 6px;
        width: 16px;
        height: 6px
    }
`;

export const light = `
    .pb-popover-box[data-theme~=light] {
        color: #26323d;
        box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);
        background-color: #fff
    }

    .pb-popover-box[data-theme~=light][data-placement^=top]>.pb-popover-arrow:before {
        border-top-color: #fff
    }

    .pb-popover-box[data-theme~=light][data-placement^=bottom]>.pb-popover-arrow:before {
        border-bottom-color: #fff
    }

    .pb-popover-box[data-theme~=light][data-placement^=left]>.pb-popover-arrow:before {
        border-left-color: #fff
    }

    .pb-popover-box[data-theme~=light][data-placement^=right]>.pb-popover-arrow:before {
        border-right-color: #fff
    }

    .pb-popover-box[data-theme~=light]>.pb-popover-backdrop {
        background-color: #fff
    }

    .pb-popover-box[data-theme~=light]>.pb-popover-svg-arrow {
        fill: #fff
    }`;

export const material = `
    .pb-popover-box[data-theme~=material] {
        background-color: #505355;
        font-weight: 600
    }

    .pb-popover-box[data-theme~=material][data-placement^=top]>.pb-popover-arrow:before {
        border-top-color: #505355
    }

    .pb-popover-box[data-theme~=material][data-placement^=bottom]>.pb-popover-arrow:before {
        border-bottom-color: #505355
    }

    .pb-popover-box[data-theme~=material][data-placement^=left]>.pb-popover-arrow:before {
        border-left-color: #505355
    }

    .pb-popover-box[data-theme~=material][data-placement^=right]>.pb-popover-arrow:before {
        border-right-color: #505355
    }

    .pb-popover-box[data-theme~=material]>.pb-popover-backdrop {
        background-color: #505355
    }

    .pb-popover-box[data-theme~=material]>.pb-popover-svg-arrow {
        fill: #505355
    }
`;

export const translucent = `
    .pb-popover-box[data-theme~=translucent] {
        background-color: rgba(0, 0, 0, .7)
    }

    .pb-popover-box[data-theme~=translucent]>.pb-popover-arrow {
        width: 14px;
        height: 14px
    }

    .pb-popover-box[data-theme~=translucent][data-placement^=top]>.pb-popover-arrow:before {
        border-width: 7px 7px 0;
        border-top-color: rgba(0, 0, 0, .7)
    }

    .pb-popover-box[data-theme~=translucent][data-placement^=bottom]>.pb-popover-arrow:before {
        border-width: 0 7px 7px;
        border-bottom-color: rgba(0, 0, 0, .7)
    }

    .pb-popover-box[data-theme~=translucent][data-placement^=left]>.pb-popover-arrow:before {
        border-width: 7px 0 7px 7px;
        border-left-color: rgba(0, 0, 0, .7)
    }

    .pb-popover-box[data-theme~=translucent][data-placement^=right]>.pb-popover-arrow:before {
        border-width: 7px 7px 7px 0;
        border-right-color: rgba(0, 0, 0, .7)
    }

    .pb-popover-box[data-theme~=translucent]>.pb-popover-backdrop {
        background-color: rgba(0, 0, 0, .7)
    }

    .pb-popover-box[data-theme~=translucent]>.pb-popover-svg-arrow {
        fill: rgba(0, 0, 0, .7)
    }
`;
