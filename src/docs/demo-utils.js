// Shared helpers to make demo hydration consistent across pages

export async function ready (tags = []) {
  if (!Array.isArray(tags)) tags = [tags]
  await Promise.all(tags.map(t => customElements.whenDefined(t)))
}

export function stampIfNeeded (snippet) {
  if (!snippet) return null
  const template = snippet.querySelector('template')
  if (!template) return snippet
  if (!template.dataset.stamped) {
    const clone = template.content.cloneNode(true)
    template.dataset.stamped = 'true'
    snippet.appendChild(clone)
  }
  return snippet
}

export function firePageReady (detail = {}) {
  const { endpoint = '.', apiVersion = '1.0.0', template = null } = detail
  requestAnimationFrame(() => {
    document.dispatchEvent(new CustomEvent('pb-page-ready', {
      detail: { endpoint, apiVersion, template }
    }))
  })
}

export async function syncPbSelect (host) {
  if (!host) return
  await host.updateComplete
  const root = host.shadowRoot
  if (!root) return
  if (host.hasAttribute('multi')) {
    const values = Array.isArray(host.values) ? host.values : []
    root.querySelectorAll('input[type="checkbox"]').forEach(box => {
      box.checked = values.includes(box.value)
    })
  } else {
    const sel = root.querySelector('select')
    if (sel) sel.value = host.value ?? ''
  }
  host.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
}

export function wireFormOutput (form, output) {
  const render = () => {
    output.textContent = new URLSearchParams(new FormData(form)).toString()
  }
  form.addEventListener('submit', ev => {
    ev.preventDefault()
    render()
  })
  return render
}

function findOutput (root, form) {
  const selector = form.dataset.demoOutput || form.getAttribute('data-demo-output')
  if (selector) {
    return root.querySelector(selector) || form.querySelector(selector)
  }
  const fallback = form.parentElement
  if (fallback) {
    const sibling = fallback.querySelector('code[id], pre[id], span[id]')
    if (sibling) return sibling
  }
  return null
}

export function autoWireForms (root) {
  const forms = root.querySelectorAll('form')
  forms.forEach(form => {
    if (form.dataset.demoWired) return
    const output = findOutput(root, form)
    if (!output) {
      form.dataset.demoWired = 'skip'
      return
    }
    const render = () => {
      output.textContent = new URLSearchParams(new FormData(form)).toString()
    }
    form.addEventListener('submit', ev => {
      ev.preventDefault()
      render()
    })
    form.dataset.demoWired = 'true'
    render()
  })
}
