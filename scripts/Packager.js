const path = require('path');
const Messager = require('./Messager');
const microbundle = require('microbundle');
class Packager {
    static async package() {
        const root = path.join(__dirname, '..');
        const path1 = path.join(root, './components/FigiconReact.tsx');
        console.log(path1);
        microbundle({
            entries: [path1, './components/FigiconWebComponent.ts'],
            cwd: root,
            format: 'umd',
            sourcemap: false,
        }).then(e => {
            console.log('DONE');
            console.log(e);
        });
    }
}

module.exports = Packager;

// Packager.package();
