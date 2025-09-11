# Cypress Component Testing (CT) Guide

This repository ships a Cypress Component Testing setup for pb-components. It is tuned to be robust from a cold start (no prior `npm run dev`), and to work well with legacy Polymer elements and third‑party libraries.

## Run CT

- Interactive runner: `npm run cy:open:ct`
- Headless run: `npm run cy:run:ct`

If Vite’s optimizer cache misbehaves (rare after our config changes), clear it and re‑run:

- `rm -rf node_modules/.vite`
- `npm run cy:run:ct`

## Vite integration

Cypress CT spins up a Vite dev server. Some dependencies don’t prebundle cleanly under the optimizer. We exclude those in `vite.config.js`:

- `@polymer/*` (iron-ajax, paper-*), `@cwmr/paper-autocomplete`
- `gridjs`
- `construct-style-sheets-polyfill`

This prevents missing prebundle chunks on cold starts.

## Support files

- `test/cypress/support/component-index.html`
  - Mirrors app‑level CSS for realistic rendering in CT.

- `test/cypress/support/component.js`
  - `cy.waitForEvent(name)` – one‑shot document event wait.
  - Global i18n intercepts for `i18n/common/{en,de}.json` to avoid noisy 404s.
  - Targeted `uncaught:exception` ignore for benign `language` null during startup.
  - `cy.stubFetchJson(pattern, responder)` – robust fetch stub, installed pre‑ and post‑mount.

## Testing patterns (idiomatic and robust)

- Prefer component APIs + `updateComplete`
  - Set properties (`value`, `values`) and await `updateComplete` instead of typing into shadow inputs.
  - Example: pb-select, pb-search.

- Internal iron-ajax patterns
  - Spy/stub the internal loader (e.g. `#autocompleteLoader` or `#loadContent`).
  - Simulate responses by setting `lastResponse` and dispatching `response`.
  - For some code paths (preload), call a component method (e.g. `_updateSuggestions()`) and await `updateComplete` to settle state.
  - Used in: pb-ajax, pb-autocomplete.

- Fetch‑based components
  - Use `cy.stubFetchJson()` to stub `window.fetch` with real `Response` objects.
  - Install pre‑mount to catch first requests; also verifies calls with `@fetch`.
  - Used in: pb-table-grid.

- Network aliasing
  - When using `cy.intercept`, register before `cy.mount()` and use broad patterns like `**/path/*.json*` to tolerate CT iframe paths.
  - Prefer spies/stubs (above) when timing is sensitive.

- Scoped selectors
  - Avoid `.shadow()` in specs; rely on `includeShadowDom: true` and query predictable containers (e.g. `#content` in pb-view) to avoid matching dialog headings.

## Component specifics

- pb-view
  - Mount with `api-version="1.0.0"` to hit `api/parts/.../json` endpoints.
  - `cy.wait('@parts')` before assertions; query inside `#content`.

- pb-ajax
  - Stub internal `iron-ajax` (`#loadContent`); set `lastResponse`, dispatch `response`.
  - Assert via reflected attributes and rendered dialog content.

- pb-autocomplete
  - Remote: spy internal loader, simulate `response`, dispatch `autocomplete-selected`, assert `lastSelected` and `value`.
  - Preload (deterministic): after first render, either
    - Set `comp.suggestions = data` and await `updateComplete`, or
    - Set loader `lastResponse`, call `_updateSuggestions()`, await `updateComplete`.

- pb-table-grid
  - Pass `css-path="/css/gridjs"` in the spec so theme CSS resolves under CT.
  - Component guards against null constructed stylesheets.
  - Use `cy.stubFetchJson(/demo\/grid\.json/, responder)` to serve rows and verify content.
  - Force initial render via `comp._submit()` after ensuring `grid` instance exists.

- pb-select
  - Programmatically set `value`/`values` and await `updateComplete`; serialize forms via native `FormData`.

- pb-search
  - Set `value` via API; trigger submit with component method (e.g., `_doSearch()`); assert `pb-load` payload.

## Troubleshooting

- Vite missing chunk errors (node_modules/.vite/chunk-*.js)
  - Clear cache: `rm -rf node_modules/.vite` and rerun CT.
  - Ensure `optimizeDeps.exclude` contains the listed legacy deps.

- CSS theme not applied (pb-table-grid)
  - Use `css-path="/css/gridjs"` in the spec; the CT index hosts these under `/css`.

- Event races (e.g., `pb-page-ready`)
  - Prefer spies/stubs or direct component method triggers rather than waiting on events that may have fired before the listener attached.

## Adding a new CT spec

1) Register intercepts/spies/stubs before `cy.mount()`.
2) Mount minimal markup with `pb-page` (add `api-version` as needed).
3) Gate on a deterministic signal (alias/spies/component `updateComplete`).
4) Trigger behavior via component APIs or dispatched events.
5) Assert state/DOM; use retryable `.should(...)` where appropriate.

Keep tests focused and deterministic; prefer component APIs and stubs over brittle UI interactions unless you’re validating UX.

## Parity with the legacy Karma suite

Most of the Karma tests have been migrated to CT, often with stronger coverage and more realistic rendering:

- Migrated: pb-document, pb-view (including formulas), pb-ajax, pb-i18n, pb-mixin, pb-events, pb-markdown,
  pb-select, pb-autocomplete (static/remote/preload), pb-table-grid, pb-facsimile (annotation flow), pb-grid.
- Intentional skip: pb-search “setParameters/getParameters” (Karma had this slated for rewrite; CT currently
  covers submit/reset flows. Add a registry‑driven parameter test later if needed.)
