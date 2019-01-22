const path = require('path');
const Messager = require('./Messager');
const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const replace = require('rollup-plugin-replace');

const output = [
    {
        file: 't.cjs.js',
        format: 'cjs',
        exports: 'named',
    },
    {
        file: 't.es.js',
        format: 'es',
        exports: 'named',
    },
    {
        file: 't.umd.js',
        format: 'umd',
        name: 'figicons',
        exports: 'named',
    },
];
const plugins = [
    json({
        compact: true,
    }),
    external(),
    resolve(),
    typescript({
        clean: true,
        rollupCommonJSResolveHack: true,
        exclude: ['*.d.ts', '**/*.d.ts'],
    }),
    commonjs({
        include: ['node_modules/**'],
        exclude: ['node_modules/process-es6/**'],
        namedExports: {
            'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        },
    }),
    replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
    }),
];

class Packager {
    static async package() {
        console.log('e');
        const outputOptions = rollupConfig.output;

        [path.join(__dirname, '..', 'components/FigiconReact.tsx')].forEach(async input => {
            const bundle = await rollup.rollup({ input, plugins });

            output.forEach(o => {
                bundle.write(o);
            });
        });
    }
}

module.exports = Packager;
