import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import analyze from 'rollup-plugin-analyzer';

const production = process.env.BUILD === 'production';

export default [
    {
        input: [
            'src/pb-components-bundle.js',
            'src/pb-facsimile.js',
            'src/pb-leaflet-map.js',
            'src/pb-odd-editor.js',
            'src/pb-edit-app.js',
            '@polymer/iron-component-page/iron-component-page.js'
        ],
        output: {
            dir: 'dist',
            format: 'es',
            sourcemap: !production
        },
        plugins: [
            resolve(),
            production && terser(),
            analyze({
                summaryOnly: true
            }),
            copy({
                targets: [
                    {
                        src: './node_modules/leaflet/dist/leaflet.css',
                        dest: './css/leaflet'
                    },
                    {
                        src: './node_modules/leaflet/dist/images/*',
                        dest: './images/leaflet'
                    },
                    {
                        src: './node_modules/openseadragon/build/openseadragon/images/*',
                        dest: './images/openseadragon'
                    },
                    {
                        src: './node_modules/prismjs/themes/*',
                        dest: './css/prismjs'
                    }
                ]
            })
        ]
    },
    {
        input: 'src/pb-components-all.js',
        output: {
            file: 'dist/pb-components-all.js',
            format: 'iife',
            sourcemap: true
        },
        plugins: [
            resolve(),
            production && terser(),
            analyze({
                summaryOnly: true
            })
        ]
    }
]