const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'test/**/*.test.js', type: 'module' },
        { pattern: 'i18n/**/*', watched: false, included: false, served: true },
        { pattern: 'demo/*.json', watched: false, included: false, served: true }
      ],
      proxies: {
        '/demo': '/base/demo',
        '/demo/i18n': '/base/demo/i18n',
        '/i18n': '/base/i18n'
      },

      // see the karma-esm docs for all options
      esm: {
        // if you are using 'bare module imports' you will need this option
        nodeResolve: true
      },
      client: {
        endpoint: config.endpoint ? config.endpoint : 'http://localhost:8080/exist/apps/tei-publisher/',
        passwd: config.passwd ? config.passwd : 'simple',
        mocha: {
          timeout: 10000
        }
      }
    })
  );
  return config;
};