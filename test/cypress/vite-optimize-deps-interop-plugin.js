// Cypress CT + Vite 8: @cypress/vite-dev-server reads optimizeDeps.esbuildOptions during
// dep pre-bundle; Rolldown can expose a stub getter that throws "Not implemented".
// Delete this file when Cypress supports Vite 8's resolved config without that read.
function cypressViteOptimizeDepsInteropPlugin () {
  return {
    name: 'cypress-vite-optimize-deps-interop',
    configResolved (config) {
      if (!config?.optimizeDeps) return
      try {
        Object.defineProperty(config.optimizeDeps, 'esbuildOptions', {
          value: {},
          configurable: true,
          enumerable: true,
          writable: true
        })
      } catch {
        config.optimizeDeps.esbuildOptions = {}
      }
    }
  }
}

module.exports = { cypressViteOptimizeDepsInteropPlugin }
