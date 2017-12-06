import commonJS from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'bin/views/clientRender.js',
    output: {
        file: 'public/app.js',
        format: 'iife',
        name: 'app',
        sourcemap: true
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': '"production"'
        }),
        nodeResolve(),
        commonJS(),
        sourcemaps()
    ]
};