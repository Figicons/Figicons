const path = require('path');
const microbundle = require('microbundle');

class Packager {
    static async package() {
        const root = path.join(__dirname, '..');
        const path1 = path.join(root, './components/FigiconReact.tsx');
        console.log(root);
        microbundle({
            entries: [path1, './components/FigiconWebComponent.ts'],
            cwd: root,
            format: 'es',
            sourcemap: false,
            jsx: 'react',
        }).then(e => {
            console.log('DONE');
            console.log(e);
        });
    }
}

module.exports = Packager;

Packager.package();
