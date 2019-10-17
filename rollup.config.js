import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';

const production = process.env.PRODUCTION;

export default {
    input: 'index.js',
    output: {
        file: 'bundle.js',
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