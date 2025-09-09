import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import analyze from 'rollup-plugin-analyzer';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const production = process.env.BUILD === 'production';

const wcloader =
  '<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>';
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
          { find: 'verovio/wasm', replacement: 'node_modules/verovio/dist/verovio-module.mjs' },
          { find: 'verovio/esm', replacement: 'node_modules/verovio/dist/verovio.mjs' },
        ],
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
        'const PB_COMPONENTS_VERSION = null': `const PB_COMPONENTS_VERSION = '${pkg.version}'`,
      }),
      babel({
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
          compress: {
            reduce_vars: false,
          },
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
          {
            src: './node_modules/openseadragon/build/openseadragon/openseadragon.min.js',
            dest: './lib',
          },
          {
            src: './node_modules/openseadragon/build/openseadragon/images/*',
            dest: './images/openseadragon',
          },
          {
            src: './node_modules/prismjs/themes/*',
            dest: './css/prismjs',
          },
          {
            src: './node_modules/leaflet/dist/leaflet-src.js',
            dest: './lib',
          },
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
          { find: 'verovio/wasm', replacement: 'node_modules/verovio/dist/verovio-module.mjs' },
          { find: 'verovio/esm', replacement: 'node_modules/verovio/dist/verovio.mjs' },
        ],
      }),
      resolve({ browser: true, preferBuiltins: false }),
      commonjs(),
      production &&
        terser({
          compress: {
            reduce_vars: false,
          },
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
        ],
      }),
    ],
  },
];
