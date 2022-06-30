import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import analyze from 'rollup-plugin-analyzer';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import pkg from "./package.json";

const production = process.env.BUILD === 'production';

const wcloader = '<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"></script>';
const pbbundle = '<script type="module" src="../pb-components-bundle.js"></script>';

function replaceDemo(input, scripts) {
    const output = input.toString().replace(/<!--scripts-->.*\/scripts-->/sg, scripts);
    return output.replace(/endpoint=".*"/g, 'endpoint="https://teipublisher.com/exist/apps/tei-publisher"');
}

export default [
    {
        input: [
            'src/pb-components-bundle.js',
            'src/pb-leaflet-map.js',
            'src/pb-odd-editor.js',
            'src/pb-edit-app.js'
        ],
        output: {
            dir: 'dist',
            format: 'es',
            sourcemap: !production
        },
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                'const PB_COMPONENTS_VERSION = null': `const PB_COMPONENTS_VERSION = '${pkg.version}'`
            }),
            babel({
                "assumptions": {
                    "setSpreadProperties": true
                },
                "plugins": [
                    ["@babel/plugin-proposal-object-rest-spread", { "useBuiltIns": true }]
                ]
            }),
            resolve(),
            production && terser({
                compress: {
                    reduce_vars: false
                }
            }),
            analyze({
                summaryOnly: true
            }),
            copy({
                targets: [
                    {
                        src: './node_modules/gridjs/dist/theme/mermaid.min.css',
                        dest: './css/gridjs'
                    },
                    {
                        src: './node_modules/leaflet/dist/leaflet.css',
                        dest: './css/leaflet'
                    },
                    {
                        src: './node_modules/leaflet/dist/images/*',
                        dest: './images/leaflet'
                    },
                    {
                        src: './node_modules/openseadragon/build/openseadragon/openseadragon.min.js',
                        dest: './lib'
                    },
                    {
                        src: './node_modules/openseadragon/build/openseadragon/images/*',
                        dest: './images/openseadragon'
                    },
                    {
                        src: './node_modules/prismjs/themes/*',
                        dest: './css/prismjs'
                    },
                    {
                        src: './node_modules/codemirror/theme/*',
                        dest: './css/codemirror'
                    },
                    {
                        src: './node_modules/leaflet/dist/leaflet-src.js',
                        dest: './lib'
                    },
                    {
                        src: './node_modules/leaflet/dist/leaflet.css',
                        dest: './css/leaflet'
                    },
                    {
                        src: './node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js',
                        dest: './lib'
                    },
                    {
                        src: './node_modules/leaflet.markercluster/dist/*.css',
                        dest: './css/leaflet'
                    },
                    {
                        src: './node_modules/tom-select/dist/css/*.min.css',
                        dest: './css/tom-select'
                    }
                ]
            })
        ]
    },
    {
        input: 'src/docs/pb-component-docs.js',
        output: {
            file: 'dist/pb-component-docs.js',
            format: 'es',
            sourcemap: !production
        },
        plugins: [
            resolve(),
            production && terser({
                compress: {
                    reduce_vars: false
                }
            }),
            copy({
                targets: [
                    {
                        src: ['demo/*.html', '!**/pb-odd-editor.html', '!**/pb-leaflet-map*.html'],
                        dest: 'dist/demo',
                        transform: (contents) => replaceDemo(contents, `${wcloader}${pbbundle}`)
                    },
                    {
                        src: 'demo/pb-odd-editor.html',
                        dest: 'dist/demo',
                        transform: (contents) =>
                            replaceDemo(contents, `${wcloader}${pbbundle}<script type="module" src="../pb-odd-editor.js"></script>`)
                    },
                    {
                        src: ['demo/pb-leaflet-map.html', 'demo/pb-leaflet-map2.html', 'demo/pb-leaflet-map3.html'],
                        dest: 'dist/demo',
                        transform: (contents) =>
                            replaceDemo(contents, `${wcloader}${pbbundle}<script type="module" src="../pb-leaflet-map.js"></script>`)
                    },
                    {
                        src: 'api.html',
                        dest: 'dist',
                        transform: (contents) =>
                            replaceDemo(contents, `${wcloader}<script type="module" src="pb-component-docs.js"></script>`)
                    },
                    {
                        src: ['demo/*.json', 'demo/*.css', 'demo/*.png'],
                        dest: 'dist/demo'
                    },
                    {
                        src: 'pb-elements.json',
                        dest: 'dist'
                    },
                    {
                        src: ['images/*.png', 'images/*.ico', 'images/*.svg'],
                        dest: 'dist/images'
                    }
                ]
            })
        ]
    }
]