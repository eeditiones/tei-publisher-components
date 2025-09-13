// Centralized Lit re-exports to ease migration from lit-element/lit-html
// Components can import from this module during migration and later switch to direct 'lit' imports.
export { LitElement, html, css, nothing, noChange } from 'lit';
export { property, state, query, queryAssignedElements, queryAssignedNodes } from 'lit/decorators.js';
export { unsafeHTML } from 'lit/directives/unsafe-html.js';
export { repeat } from 'lit/directives/repeat.js';
export { ifDefined } from 'lit/directives/if-defined.js';
export { classMap } from 'lit/directives/class-map.js';
export { styleMap } from 'lit/directives/style-map.js';
export { when } from 'lit/directives/when.js';
export { keyed } from 'lit/directives/keyed.js';
