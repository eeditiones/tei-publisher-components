import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';

const production = process.env.BUILD === 'production';

export default {
    input: ['src/pb-components-bundle.js', 'src/pb-facsimile.js', 'src/pb-leaflet-map.js'],
    output: {
        dir: 'dist',
        format: 'es',
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