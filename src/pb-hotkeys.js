import hotkeys from 'hotkeys-js';

const EXCLUDED_TAGS = ['INPUT', 'SELECT', 'TEXTAREA', 'PAPER-INPUT', 'PAPER-TEXTAREA', 'PB-SEARCH'];
const excluded = new Set(EXCLUDED_TAGS);

// disable hotkeys for form elements
let firstLoad = true;
if (firstLoad) {
  hotkeys.filter = event => {
    const { tagName } = event.target || event.srcElement;
    return !(tagName.isContentEditable || excluded.has(tagName));
  };
  firstLoad = false;
}

/**
 * Mixin to register handlers for keyboard shortcuts. Property `hotkeys` should be an object
 * containing a symbolic name for the action as key and a keyboard shortcut as value. Subclasses
 * can then map the symbolic name to a function by calling `registerHotkey`.
 *
 */
export const pbHotkeys = superclass =>
  class PbHotkeys extends superclass {
    static get properties() {
      return {
        ...super.properties,
        hotkeys: {
          type: Object,
        },
      };
    }

    constructor() {
      super();
      this.hotkeys = {};
    }

    /**
     *
     * @param {String} name symbolic name, must be defined in `this.hotkeys`
     * @param {import('hotkeys-js').KeyHandler} callback a callback function
     */
    registerHotkey(name, callback, target) {
      if (name && this.hotkeys[name]) {
        if (target) {
          hotkeys(this.hotkeys[name], { element: target }, callback);
        } else {
          hotkeys(this.hotkeys[name], callback);
        }
      }
    }

    display(name) {
      if (name && this.hotkeys[name]) {
        const output = [];
        const keys = this.hotkeys[name].split(/\s*,\s*/);
        keys.forEach(key => {
          output.push(key.replace('+', '-'));
        });
        return output.join(', ');
      }
      return '';
    }
  };

export function registerHotkey(name, callback, target) {
  if (target) {
    hotkeys(name, { element: target }, callback);
  } else {
    hotkeys(name, callback);
  }
}

window.pbKeyboard = registerHotkey;
