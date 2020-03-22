import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy';

export default {
    input: './node_modules/openseadragon/build/openseadragon/openseadragon.js',
    output: {
        file: './assets/openseadragon.esm.js',
        format: 'es',
    },
    plugins: [
        copy({
            targets: [
                {
                    src: './node_modules/leaflet/dist/leaflet.css',
                    dest: './assets/leaflet'
                },
                {
                    src: './node_modules/leaflet/dist/images/*',
                    dest: './assets/leaflet'
                },
                {
                    src: './node_modules/openseadragon/build/openseadragon/images/*',
                    dest: './assets/openseadragon'
                },
                {
                    src: './node_modules/prismjs/themes/*',
                    dest: './assets/prismjs'
                }
            ]
        }),
        commonjs({
            namedExports: {
                'openseadragon': ['OpenSeadragon']
            }
        })
    ],
}