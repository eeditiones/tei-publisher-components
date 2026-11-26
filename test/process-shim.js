// tippy.js reads process.env.NODE_ENV, which the bundler replaces in builds
// (and es-dev-server in dev mode) but which does not exist in karma.
window.process = window.process || { env: { NODE_ENV: 'production' } };
