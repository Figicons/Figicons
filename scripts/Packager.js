const path = require('path');
const Messager = require('./Messager');
const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const replace = require('rollup-plugin-replace');

const path1 = path.join(__dirname, '..', 'components/FigiconReact.tsx');
const paths = [path1];
Messager.log(path1);
Messager.log(path.join(__dirname, '..', 'node_modules', '**'));

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
    resolve({
        module: true,
        jsnext: true,
    }),
    typescript({
        typescript: require('typescript'),
        clean: true,
        rollupCommonJSResolveHack: true,
        exclude: ['*.d.ts', '**/*.d.ts'],
    }),

    commonjs({
        include: /\/node_modules\//,
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
        Messager.startLoading(`🛠  Packaging Components`);
        paths.forEach(async input => {
            const bundle = await rollup.rollup({ input, plugins });

            output.forEach(o => {
                bundle.write(o);
            });
        });

        Messager.endLoading(`📦  %s Packaged React & Web Components`);
    }
}

module.exports = Packager;

// Packager.package();
