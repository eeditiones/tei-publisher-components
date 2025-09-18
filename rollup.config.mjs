import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import analyze from 'rollup-plugin-analyzer';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve Verovio ESM files to absolute paths without using package exports
const VERO_WASM_MJS = path.resolve(__dirname, 'node_modules/verovio/dist/verovio-module.mjs');
const VERO_ESM_MJS  = path.resolve(__dirname, 'node_modules/verovio/dist/verovio.mjs');

const production = process.env.BUILD === 'production';

// Legacy WebComponents polyfills are no longer needed in our Vite/ESM setup
// Keep this empty so transform steps below don’t inject the loader script
const wcloader = '';
const pbbundle = '<script type="module" src="../pb-components-bundle.js"></script>';

function replaceDemo(input, scripts) {
  const output = input.toString().replace(/<!--scripts-->.*\/scripts-->/gs, scripts);
  return output.replace(
    /endpoint=".*?"/g,
    'endpoint="https://teipublisher.com/exist/apps/tei-publisher" api-version="1.0.0"',
  );
}

export default [
  {
    input: [
      'src/polymer-hack.js',
      'src/pb-components-bundle.js',
      'src/pb-leaflet-map.js',
      'src/pb-odd-editor.js',
      'src/pb-edit-app.js',
      'src/pb-code-editor.js',
      'src/pb-tify.js',
      'src/pb-mei.js',
    ],
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: !production,
    },
    external: ['module', 'fs', 'path', 'url'],
    plugins: [
      alias({
        entries: [
          { find: 'verovio/wasm', replacement: VERO_WASM_MJS },
          { find: 'verovio/esm', replacement: VERO_ESM_MJS },
        ],
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
        'const PB_COMPONENTS_VERSION = null': `const PB_COMPONENTS_VERSION = '${pkg.version}'`,
      }),
      babel({
        babelHelpers: 'bundled',
        assumptions: {
          setSpreadProperties: true,
        },
        plugins: [
          ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
          ['@babel/plugin-transform-optional-chaining', { useBuiltIns: true }],
        ],
      }),
      resolve({ browser: true, preferBuiltins: false }),
      commonjs(),
      production &&
        terser({
          ecma: 2022,
          module: true,
          compress: {
            // keep conservative to avoid breaking modern syntax
            reduce_vars: false,
          },
          format: { comments: false },
        }),
      analyze({
        summaryOnly: true,
      }),
      copy({
        targets: [
          {
            src: './node_modules/tify/dist/tify.css',
            dest: './css/tify',
          },
          {
            src: './node_modules/gridjs/dist/theme/mermaid.min.css',
            dest: './css/gridjs',
          },
          {
            src: './node_modules/leaflet/dist/leaflet.css',
            dest: './css/leaflet',
          },
          {
            src: './node_modules/leaflet/dist/images/*',
            dest: './images/leaflet',
          },
          // {
          //     src: './node_modules/openseadragon/build/openseadragon/openseadragon.min.js',
          //     dest: './lib'
          // },
          // {
          //     src: './node_modules/openseadragon/build/openseadragon/images/*',
          //     dest: './images/openseadragon'
          // },
          // { src: './node_modules/openseadragon/build/openseadragon/openseadragon.min.js.map', 
          //   dest: './lib' },
          {
            src: './node_modules/prismjs/themes/*',
            dest: './css/prismjs',
          },
          {
            src: './node_modules/leaflet/dist/leaflet-src.js',
            dest: './lib',
          },
          { src: './node_modules/leaflet/dist/leaflet-src.js.map', dest: './lib' },
          {
            src: './node_modules/leaflet/dist/leaflet.css',
            dest: './css/leaflet',
          },
          {
            src: './node_modules/leaflet/dist/images/layers.png',
            dest: './css/leaflet/images',
          },
          {
            src: './node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js',
            dest: './lib',
          },
          { src: './node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js.map', dest: './lib' },
          {
            src: './node_modules/leaflet.markercluster/dist/*.css',
            dest: './css/leaflet',
          },
          {
            src: './node_modules/leaflet-control-geocoder/dist/Control.Geocoder.min.js*',
            dest: './lib',
          },
          {
            src: './node_modules/leaflet-control-geocoder/dist/Control.Geocoder.css',
            dest: './css/leaflet',
          },
          {
            src: './node_modules/tom-select/dist/css/*.min.css',
            dest: './css/tom-select',
          },
          {
            src: './node_modules/tom-select/dist/css/tom-select.default.min.css.map',
            dest: './css/tom-select',
          },
          {
            src: './src/assets/pagedjs/*.css',
            dest: './css/pagedjs',
          },
          {
            src: './node_modules/pagedjs/dist/paged.polyfill.js',
            dest: 'lib',
          },
          {
            src: './node_modules/airtable/build/airtable.browser.js',
            dest: 'lib',
          },
          {
            src: './node_modules/web-midi-player/index.js',
            dest: 'lib/web-midi-player',
          },
          {
            src: './src/assets/components.css',
            dest: 'css',
          },
          {
            src: './src/assets/design-system.css',
            dest: 'dist/css',
          },
          {
            src: './lib/openseadragon.min.js',
            dest: './dist/lib',
          },
          {
            src: './lib/openseadragon.min.js.map',
            dest: './dist/lib',
          },
        ],
      }),
    ],
  },
  {
    input: 'src/docs/pb-component-docs.js',
    output: {
      file: 'dist/pb-component-docs.js',
      format: 'es',
      sourcemap: !production,
    },
    external: ['module', 'fs', 'path', 'url'],
    plugins: [
      alias({
        entries: [
          { find: 'verovio/wasm', replacement: VERO_WASM_MJS },
          { find: 'verovio/esm', replacement: VERO_ESM_MJS },
        ],
      }),
      resolve({ browser: true, preferBuiltins: false }),
      commonjs(),
      production &&
        terser({
          ecma: 2022,
          module: true,
          compress: {
            reduce_vars: false,
          },
          format: { comments: false },
        }),
      copy({
        targets: [
          {
            src: [
              'demo/*.html',
              '!**/pb-tify.html',
              '!**/pb-odd-editor.html',
              '!**/pb-leaflet-map*.html',
              '!**/pb-code-editor.html',
            ],
            dest: 'dist/demo',
            transform: contents => replaceDemo(contents, `${wcloader}${pbbundle}`),
          },
          {
            src: 'demo/pb-odd-editor.html',
            dest: 'dist/demo',
            transform: contents =>
              replaceDemo(
                contents,
                `${wcloader}${pbbundle}<script type="module" src="../pb-odd-editor.js"></script>`,
              ),
          },
          {
            src: [
              'demo/pb-leaflet-map.html',
              'demo/pb-leaflet-map2.html',
              'demo/pb-leaflet-map3.html',
            ],
            dest: 'dist/demo',
            transform: contents =>
              replaceDemo(
                contents,
                `${wcloader}${pbbundle}<script type="module" src="../pb-leaflet-map.js"></script>`,
              ),
          },
          {
            src: ['demo/pb-code-editor.html'],
            dest: 'dist/demo',
            transform: contents =>
              replaceDemo(
                contents,
                `${wcloader}${pbbundle}<script type="module" src="../pb-code-editor.js"></script>`,
              ),
          },
          {
            src: ['demo/pb-tify.html'],
            dest: 'dist/demo',
            transform: contents =>
              replaceDemo(
                contents,
                `${wcloader}${pbbundle}<script type="module" src="../pb-tify.js"></script>`,
              ),
          },
          {
            src: ['demo/pb-mei.html'],
            dest: 'dist/demo',
            transform: contents =>
              replaceDemo(
                contents,
                `${wcloader}${pbbundle}<script type="module" src="../pb-mei.js"></script>`,
              ),
          },
          {
            src: 'api.html',
            dest: 'dist',
            transform: contents =>
              replaceDemo(
                contents,
                `${wcloader}<script type="module" src="pb-component-docs.js"></script>`,
              ),
          },
          {
            src: ['demo/*.json', 'demo/*.css', 'demo/*.png'],
            dest: 'dist/demo',
          },
          {
            src: 'pb-elements.json',
            dest: 'dist',
          },
          {
            src: ['images/*.png', 'images/*.ico', 'images/*.svg'],
            dest: 'dist/images',
          },
          {
            src: './src/assets/design-system.css',
            dest: 'dist/css',
          },
        ],
      }),
    ],
  },
];
