import * as mod from '../../../../node_modules/path-to-regexp/dist/index.js'

const api = mod.default || mod

export const match = api.match
export const compile = api.compile
export const pathToRegexp = api.pathToRegexp
export const parse = api.parse
export const stringify = api.stringify

export default api
