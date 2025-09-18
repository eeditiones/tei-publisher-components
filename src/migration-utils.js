/**
 * Migration utilities for Polymer to Native HTML conversion
 * Common patterns and helpers to assist with the migration process
 */

/**
 * AJAX Helper - Replaces iron-ajax with fetch-based implementation
 */
export class AjaxHelper {
  /**
   * Make an HTTP request
   * @param {string} url - Request URL
   * @param {Object} options - Request options
   * @param {string} [options.method='GET'] - HTTP method
   * @param {Object} [options.headers={}] - Request headers
   * @param {*} [options.body] - Request body
   * @param {string} [options.contentType='application/json'] - Content type
   * @param {boolean} [options.handleAs='json'] - Response format
   * @param {number} [options.timeout=10000] - Request timeout in ms
   * @returns {Promise} Promise that resolves with response data
   */
  static async request(url, options = {}) {
    const {
      method = 'GET',
      headers = {},
      body,
      contentType = 'application/json',
      handleAs = 'json',
      timeout = 10000
    } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const requestHeaders = {
        ...headers
      };

      // Set content type if body is present
      if (body && !requestHeaders['Content-Type']) {
        requestHeaders['Content-Type'] = contentType;
      }

      const response = await fetch(url, {
        method,
        headers: requestHeaders,
        body: body ? (typeof body === 'string' ? body : JSON.stringify(body)) : undefined,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
        error.status = response.status;
        error.response = response;
        throw error;
      }

      // Handle different response types
      switch (handleAs) {
        case 'json':
          return await response.json();
        case 'text':
          return await response.text();
        case 'blob':
          return await response.blob();
        case 'arrayBuffer':
          return await response.arrayBuffer();
        default:
          return response;
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
  }

  /**
   * GET request shorthand
   */
  static get(url, options = {}) {
    return this.request(url, { ...options, method: 'GET' });
  }

  /**
   * POST request shorthand
   */
  static post(url, body, options = {}) {
    return this.request(url, { ...options, method: 'POST', body });
  }

  /**
   * PUT request shorthand
   */
  static put(url, body, options = {}) {
    return this.request(url, { ...options, method: 'PUT', body });
  }

  /**
   * DELETE request shorthand
   */
  static delete(url, options = {}) {
    return this.request(url, { ...options, method: 'DELETE' });
  }
}

/**
 * Form validation utilities to replace iron-form functionality
 */
export class FormHelper {
  /**
   * Validate a form element
   * @param {HTMLFormElement} form - Form to validate
   * @returns {Object} Validation result
   */
  static validate(form) {
    const result = {
      valid: true,
      errors: []
    };

    const elements = form.querySelectorAll('input, select, textarea');
    
    elements.forEach(element => {
      if (!element.checkValidity()) {
        result.valid = false;
        result.errors.push({
          element,
          message: element.validationMessage,
          name: element.name || element.id
        });
      }
    });

    return result;
  }

  /**
   * Serialize form data
   * @param {HTMLFormElement} form - Form to serialize
   * @returns {Object} Form data as key-value pairs
   */
  static serialize(form) {
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      if (data[key]) {
        // Handle multiple values (checkboxes, multi-select)
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    }

    return data;
  }

  /**
   * Reset form and clear validation states
   * @param {HTMLFormElement} form - Form to reset
   */
  static reset(form) {
    form.reset();
    
    // Clear custom validation states
    const elements = form.querySelectorAll('input, select, textarea');
    elements.forEach(element => {
      element.setCustomValidity('');
      element.classList.remove('pb-invalid');
    });
  }
}

/**
 * Accessibility utilities for keyboard navigation and ARIA
 */
export class AccessibilityHelper {
  /**
   * Manage focus trap within an element
   * @param {HTMLElement} container - Container to trap focus within
   * @returns {Object} Trap control object
   */
  static createFocusTrap(container) {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTabKey(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }

    return {
      activate() {
        container.addEventListener('keydown', handleTabKey);
        if (firstElement) firstElement.focus();
      },
      deactivate() {
        container.removeEventListener('keydown', handleTabKey);
      }
    };
  }

  /**
   * Announce text to screen readers
   * @param {string} message - Message to announce
   * @param {string} priority - Announcement priority ('polite' or 'assertive')
   */
  static announce(message, priority = 'polite') {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'pb-sr-only';
    announcer.textContent = message;

    document.body.appendChild(announcer);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }

  /**
   * Generate unique IDs for ARIA relationships
   * @param {string} prefix - ID prefix
   * @returns {string} Unique ID
   */
  static generateId(prefix = 'pb') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Setup ARIA tabs pattern
   * @param {HTMLElement} tabContainer - Container with tabs and panels
   * @returns {Object} Tab management functions
   */
  static setupTabs(tabContainer) {
    const tabs = tabContainer.querySelectorAll('[role="tab"]');
    const panels = tabContainer.querySelectorAll('[role="tabpanel"]');

    function selectTab(selectedTab) {
      tabs.forEach((tab, index) => {
        const isSelected = tab === selectedTab;
        tab.setAttribute('aria-selected', isSelected);
        tab.tabIndex = isSelected ? 0 : -1;
        
        if (panels[index]) {
          panels[index].hidden = !isSelected;
        }
      });
    }

    function handleKeyDown(e) {
      const currentIndex = Array.from(tabs).indexOf(e.target);
      let newIndex;

      switch (e.key) {
        case 'ArrowLeft':
          newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
          break;
        case 'ArrowRight':
          newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
          break;
        case 'Home':
          newIndex = 0;
          break;
        case 'End':
          newIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      e.preventDefault();
      tabs[newIndex].focus();
      selectTab(tabs[newIndex]);
    }

    // Setup event listeners
    tabs.forEach(tab => {
      tab.addEventListener('click', () => selectTab(tab));
      tab.addEventListener('keydown', handleKeyDown);
    });

    return {
      selectTab: (index) => selectTab(tabs[index]),
      getSelectedIndex: () => Array.from(tabs).findIndex(tab => 
        tab.getAttribute('aria-selected') === 'true'
      )
    };
  }
}

/**
 * Event utilities for component communication
 */
export class EventHelper {
  /**
   * Create and dispatch a custom event
   * @param {HTMLElement} element - Element to dispatch from
   * @param {string} type - Event type
   * @param {*} detail - Event detail data
   * @param {Object} options - Event options
   */
  static dispatch(element, type, detail = null, options = {}) {
    const event = new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true,
      ...options
    });

    element.dispatchEvent(event);
  }

  /**
   * Debounce function execution
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function execution
   * @param {Function} func - Function to throttle
   * @param {number} limit - Time limit in milliseconds
   * @returns {Function} Throttled function
   */
  static throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

/**
 * CSS utilities for dynamic styling
 */
export class StyleHelper {
  /**
   * Apply styles to an element using CSS custom properties
   * @param {HTMLElement} element - Target element
   * @param {Object} styles - Styles object
   */
  static setCustomProperties(element, styles) {
    Object.entries(styles).forEach(([property, value]) => {
      const cssProperty = property.startsWith('--') ? property : `--${property}`;
      element.style.setProperty(cssProperty, value);
    });
  }

  /**
   * Toggle class with optional condition
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class name to toggle
   * @param {boolean} [condition] - Optional condition
   */
  static toggleClass(element, className, condition) {
    if (condition !== undefined) {
      element.classList.toggle(className, condition);
    } else {
      element.classList.toggle(className);
    }
  }

  /**
   * Add ripple effect to element
   * @param {HTMLElement} element - Target element
   * @param {Event} event - Trigger event (for positioning)
   */
  static addRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.className = 'pb-ripple';
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;

    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
}

/**
 * Animation utilities
 */
export class AnimationHelper {
  /**
   * Fade in element
   * @param {HTMLElement} element - Element to animate
   * @param {number} duration - Animation duration
   * @returns {Promise} Animation completion promise
   */
  static fadeIn(element, duration = 300) {
    return new Promise(resolve => {
      element.style.opacity = '0';
      element.style.display = 'block';
      element.style.transition = `opacity ${duration}ms ease-in-out`;

      requestAnimationFrame(() => {
        element.style.opacity = '1';
        setTimeout(resolve, duration);
      });
    });
  }

  /**
   * Fade out element
   * @param {HTMLElement} element - Element to animate
   * @param {number} duration - Animation duration
   * @returns {Promise} Animation completion promise
   */
  static fadeOut(element, duration = 300) {
    return new Promise(resolve => {
      element.style.opacity = '1';
      element.style.transition = `opacity ${duration}ms ease-in-out`;

      requestAnimationFrame(() => {
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.display = 'none';
          resolve();
        }, duration);
      });
    });
  }

  /**
   * Slide down element
   * @param {HTMLElement} element - Element to animate
   * @param {number} duration - Animation duration
   * @returns {Promise} Animation completion promise
   */
  static slideDown(element, duration = 300) {
    return new Promise(resolve => {
      element.style.height = '0';
      element.style.overflow = 'hidden';
      element.style.transition = `height ${duration}ms ease-in-out`;
      element.style.display = 'block';

      const height = element.scrollHeight;

      requestAnimationFrame(() => {
        element.style.height = height + 'px';
        setTimeout(() => {
          element.style.height = '';
          element.style.overflow = '';
          element.style.transition = '';
          resolve();
        }, duration);
      });
    });
  }

  /**
   * Slide up element
   * @param {HTMLElement} element - Element to animate
   * @param {number} duration - Animation duration
   * @returns {Promise} Animation completion promise
   */
  static slideUp(element, duration = 300) {
    return new Promise(resolve => {
      const height = element.offsetHeight;
      element.style.height = height + 'px';
      element.style.overflow = 'hidden';
      element.style.transition = `height ${duration}ms ease-in-out`;

      requestAnimationFrame(() => {
        element.style.height = '0';
        setTimeout(() => {
          element.style.display = 'none';
          element.style.height = '';
          element.style.overflow = '';
          element.style.transition = '';
          resolve();
        }, duration);
      });
    });
  }
}

/**
 * Component lifecycle utilities
 */
export class ComponentHelper {
  /**
   * Wait for element to be defined and connected
   * @param {string} tagName - Custom element tag name
   * @returns {Promise} Promise that resolves when element is ready
   */
  static async waitForElement(tagName) {
    await customElements.whenDefined(tagName);
    
    return new Promise(resolve => {
      const element = document.createElement(tagName);
      if (element.connectedCallback) {
        const originalCallback = element.connectedCallback;
        element.connectedCallback = function() {
          originalCallback.call(this);
          resolve(this);
        };
      } else {
        resolve(element);
      }
    });
  }

  /**
   * Create element with attributes and properties
   * @param {string} tagName - Element tag name
   * @param {Object} attributes - HTML attributes
   * @param {Object} properties - Element properties
   * @param {string} textContent - Text content
   * @returns {HTMLElement} Created element
   */
  static createElement(tagName, attributes = {}, properties = {}, textContent = '') {
    const element = document.createElement(tagName);

    // Set attributes
    Object.entries(attributes).forEach(([name, value]) => {
      if (value !== null && value !== undefined) {
        element.setAttribute(name, value);
      }
    });

    // Set properties
    Object.entries(properties).forEach(([name, value]) => {
      element[name] = value;
    });

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  }

  /**
   * Observer for element attribute changes
   * @param {HTMLElement} element - Element to observe
   * @param {Function} callback - Callback function
   * @param {Array} attributeFilter - Attributes to watch
   * @returns {MutationObserver} Observer instance
   */
  static observeAttributes(element, callback, attributeFilter = []) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes') {
          callback(mutation.attributeName, mutation.oldValue, 
                   element.getAttribute(mutation.attributeName));
        }
      });
    });

    observer.observe(element, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: attributeFilter.length > 0 ? attributeFilter : undefined
    });

    return observer;
  }
}

/**
 * Default export with all utilities
 */
export default {
  AjaxHelper,
  FormHelper,
  AccessibilityHelper,
  EventHelper,
  StyleHelper,
  AnimationHelper,
  ComponentHelper
};