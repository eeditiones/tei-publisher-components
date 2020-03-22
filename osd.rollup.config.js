import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './node_modules/openseadragon/build/openseadragon/openseadragon.js',
    output: {
        file: './assets/openseadragon.esm.js',
        format: 'es',
    },
    plugins: [
        commonjs({
            namedExports: {
                'openseadragon': ['OpenSeadragon']
            }
        })
    ],
}