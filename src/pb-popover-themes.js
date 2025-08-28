import { css } from 'lit-element';

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
    .replace('-', '');
}

export const base = `
    .tippy-box[data-animation=fade][data-state=hidden] {
        opacity: 0
    }

    .tippy-iOS {
        cursor: pointer!important;
        -webkit-tap-highlight-color: transparent
    }

    [data-tippy-root] {
        max-width: calc(100vw - 10px)
    }

    .tippy-box {
        position: relative;
        background-color: #333;
        color: #fff;
        border-radius: 4px;
        font-size: var(--pb-popover-font-size, var(--pb-base-font-size, 14px));
        line-height: var(--pb-popover-line-height, var(--pb-base-line-height, 1.4));
        text-align: left;
        font-style: normal;
        font-weight: normal;
        outline: 0;
        transition-property: transform, visibility, opacity
    }

    .tippy-box[data-placement^=top]>.tippy-arrow {
        bottom: 0
    }

    .tippy-box[data-placement^=top]>.tippy-arrow:before {
        bottom: -7px;
        left: 0;
        border-width: 8px 8px 0;
        border-top-color: initial;
        transform-origin: center top
    }

    .tippy-box[data-placement^=bottom]>.tippy-arrow {
        top: 0
    }

    .tippy-box[data-placement^=bottom]>.tippy-arrow:before {
        top: -7px;
        left: 0;
        border-width: 0 8px 8px;
        border-bottom-color: initial;
        transform-origin: center bottom
    }

    .tippy-box[data-placement^=left]>.tippy-arrow {
        right: 0
    }

    .tippy-box[data-placement^=left]>.tippy-arrow:before {
        border-width: 8px 0 8px 8px;
        border-left-color: initial;
        right: -7px;
        transform-origin: center left
    }

    .tippy-box[data-placement^=right]>.tippy-arrow {
        left: 0
    }

    .tippy-box[data-placement^=right]>.tippy-arrow:before {
        left: -7px;
        border-width: 8px 8px 8px 0;
        border-right-color: initial;
        transform-origin: center right
    }

    .tippy-box[data-inertia][data-state=visible] {
        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)
    }

    .tippy-arrow {
        width: 16px;
        height: 16px;
        color: #333
    }

    .tippy-arrow:before {
        content: "";
        position: absolute;
        border-color: transparent;
        border-style: solid
    }

    .tippy-content {
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
    .tippy-box[data-theme~=light-border] {
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 8, 16, .15);
        color: #333;
        box-shadow: 0 4px 14px -2px rgba(0, 8, 16, .08)
    }

    .tippy-box[data-theme~=light-border]>.tippy-backdrop {
        background-color: #fff
    }

    .tippy-box[data-theme~=light-border]>.tippy-arrow:after, .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {
        content: "";
        position: absolute;
        z-index: -1
    }

    .tippy-box[data-theme~=light-border]>.tippy-arrow:after {
        border-color: transparent;
        border-style: solid
    }

    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before {
        border-top-color: #fff
    }

    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after {
        border-top-color: rgba(0, 8, 16, .2);
        border-width: 7px 7px 0;
        top: 17px;
        left: 1px
    }

    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg {
        top: 16px
    }

    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after {
        top: 17px
    }

    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before {
        border-bottom-color: #fff;
        bottom: 16px
    }

    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after {
        border-bottom-color: rgba(0, 8, 16, .2);
        border-width: 0 7px 7px;
        bottom: 17px;
        left: 1px
    }

    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg {
        bottom: 16px
    }

    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after {
        bottom: 17px
    }

    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before {
        border-left-color: #fff
    }

    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after {
        border-left-color: rgba(0, 8, 16, .2);
        border-width: 7px 0 7px 7px;
        left: 17px;
        top: 1px
    }

    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg {
        left: 11px
    }

    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after {
        left: 12px
    }

    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before {
        border-right-color: #fff;
        right: 16px
    }

    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after {
        border-width: 7px 7px 7px 0;
        right: 17px;
        top: 1px;
        border-right-color: rgba(0, 8, 16, .2)
    }

    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg {
        right: 11px
    }

    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after {
        right: 12px
    }

    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow {
        fill: #fff
    }

    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);
        background-size: 16px 6px;
        width: 16px;
        height: 6px
    }
`;

export const light = `
    .tippy-box[data-theme~=light] {
        color: #26323d;
        box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);
        background-color: #fff
    }

    .tippy-box[data-theme~=light][data-placement^=top]>.tippy-arrow:before {
        border-top-color: #fff
    }

    .tippy-box[data-theme~=light][data-placement^=bottom]>.tippy-arrow:before {
        border-bottom-color: #fff
    }

    .tippy-box[data-theme~=light][data-placement^=left]>.tippy-arrow:before {
        border-left-color: #fff
    }

    .tippy-box[data-theme~=light][data-placement^=right]>.tippy-arrow:before {
        border-right-color: #fff
    }

    .tippy-box[data-theme~=light]>.tippy-backdrop {
        background-color: #fff
    }

    .tippy-box[data-theme~=light]>.tippy-svg-arrow {
        fill: #fff
    }`;

export const material = `
    .tippy-box[data-theme~=material] {
        background-color: #505355;
        font-weight: 600
    }

    .tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before {
        border-top-color: #505355
    }

    .tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before {
        border-bottom-color: #505355
    }

    .tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before {
        border-left-color: #505355
    }

    .tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before {
        border-right-color: #505355
    }

    .tippy-box[data-theme~=material]>.tippy-backdrop {
        background-color: #505355
    }

    .tippy-box[data-theme~=material]>.tippy-svg-arrow {
        fill: #505355
    }
`;

export const translucent = `
    .tippy-box[data-theme~=translucent] {
        background-color: rgba(0, 0, 0, .7)
    }

    .tippy-box[data-theme~=translucent]>.tippy-arrow {
        width: 14px;
        height: 14px
    }

    .tippy-box[data-theme~=translucent][data-placement^=top]>.tippy-arrow:before {
        border-width: 7px 7px 0;
        border-top-color: rgba(0, 0, 0, .7)
    }

    .tippy-box[data-theme~=translucent][data-placement^=bottom]>.tippy-arrow:before {
        border-width: 0 7px 7px;
        border-bottom-color: rgba(0, 0, 0, .7)
    }

    .tippy-box[data-theme~=translucent][data-placement^=left]>.tippy-arrow:before {
        border-width: 7px 0 7px 7px;
        border-left-color: rgba(0, 0, 0, .7)
    }

    .tippy-box[data-theme~=translucent][data-placement^=right]>.tippy-arrow:before {
        border-width: 7px 7px 7px 0;
        border-right-color: rgba(0, 0, 0, .7)
    }

    .tippy-box[data-theme~=translucent]>.tippy-backdrop {
        background-color: rgba(0, 0, 0, .7)
    }

    .tippy-box[data-theme~=translucent]>.tippy-svg-arrow {
        fill: rgba(0, 0, 0, .7)
    }
`;
