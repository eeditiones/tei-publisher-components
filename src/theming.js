import { waitOnce } from "./pb-mixin.js";
import 'construct-style-sheets-polyfill';

/**
 * Maps theme selector to CSSStyleSheet or null.
 * 
 * @type {Map<string,(CSSStyleSheet|null)>}
 */
const themeMap = new Map();

/**
 * Load one or more CSS stylesheet from the given URL and return
 * a CSSStyleSheet. The returned stylesheet can be assigned
 * to `adoptedStyleSheets`.
 * 
 * @param {string[]} urls absolute URL
 * @returns {Promise<CSSStyleSheet|null>} constructed CSSStyleSheet or null
 */
export async function loadStylesheets(urls) {
    const output = [];
    for (const url of urls) {
        const css = await loadResource(url);
        if (css) {
            output.push(css);
        }
    }
    if (output.length > 0) {
        const sheet = new CSSStyleSheet();
        return sheet.replace(output.join(''));
    }
    return null;
}

function loadResource(url) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            console.warn('<theming> Component stylesheet not found: %s', url);
            return null;
        })
        .then(text => text)
        .catch(error => {
            console.error('<theming> Error loading stylesheet %s: %o', url, error);
            return null;
        });
}

/**
 * From the global component theme, import all rules which would apply to the
 * given element into a new CSSStyleSheet and return it.
 * 
 * @param {HTMLElement} elem a web component or HTML element
 * @returns {CSSStyleSheet|null} a new CSSStylesheet or null
 */
export function importStyles(elem) {
    const theme = getThemeCSS();
    if (!theme) {
        return null;
    }
    const selectors = getSelectors(elem).join('|');
    if (themeMap.has(selectors)) {
        return themeMap.get(selectors);
    }
    const prefixRegex = new RegExp(`^(${selectors})\\b`);
    let adoptedSheet = null;
    const rules = theme.cssRules;
    const newCSS = copyStyles(rules, prefixRegex, []);
    if (newCSS.length > 0) {
        adoptedSheet = new CSSStyleSheet();
        adoptedSheet.replaceSync(newCSS.join(''));
    }
    console.log('<theming> caching stylesheet for %s', selectors);
    themeMap.set(selectors, adoptedSheet);
    return adoptedSheet;
}

export function getThemeCSS() {
    const page = document.querySelector('pb-page');
    if (!page) {
        return null;
    }
    const theme = page.stylesheet;
    if (!theme) {
        // no component styles defined
        return null;
    }
    return theme;
}

/**
 * Recursively copy matching styles from the theme CSS
 * to create a new CSS stylesheet having all styles required
 * by the component.
 * 
 * @param {CSSRule[]} rules 
 * @param {RegExp} prefixRegex 
 * @param {string[]} output 
 * @returns {string[]}
 */
function copyStyles(rules, prefixRegex, output) {
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule instanceof CSSStyleRule) {
            if (prefixRegex.test(rule.selectorText)) {
                const css = rule.cssText.replace(prefixRegex, `:host($1) `);
                output.push(css);
            }
        } else if (rule instanceof CSSMediaRule) {
            output.push(`\n@media ${rule.conditionText} {\n`);
            copyStyles(rule.cssRules, prefixRegex, output);
            output.push('\n}\n');
        } else if (rule instanceof CSSFontFaceRule) {
            // not allowed in constructed stylesheets
        } else {
            output.push(rule.cssText);
        }
    }
    return output;
}

/**
 * Get a list of selectors, which could match the given component.
 * This will return the local name of the component, a selector for the id
 * and all classes assigned.
 * 
 * @param {HTMLElement} component the web component
 * @returns {string[]} list of selectors
 */
function getSelectors(component) {
    const prefixes = [component.localName];
    if (component.id) {
        prefixes.push(`#${component.id}`);
    }
    component.classList.forEach((cls) => prefixes.push(`.${cls}`));
    return prefixes;
}

/**
 * Implements support for injecting user-defined styles into a web component's shadow DOM.
 * Styles will be copied from the global component theme CSS imported by `pb-page` 
 * (see `theme` property on `pb-page`)
 */
export const themableMixin = (superclass) => class ThemableMixin extends superclass {

    connectedCallback() {
        super.connectedCallback();
        waitOnce('pb-page-ready', (options) => {
            const theme = getThemeCSS();
            if (theme) {
                this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, theme];
            }
        });
    }
};