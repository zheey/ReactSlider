import sass from 'rollup-plugin-sass';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins:
        [
            sass({ insert: true }),
            babel({
                exclude: 'node_modules/**',
                plugins: [ 'external-helpers' ]
            }),
            image()
        ],
    external: ['react', 'react-dom']
}