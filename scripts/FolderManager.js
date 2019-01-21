const fs = require('fs');
const path = require('path');

class FolderManager {
    static async createDefault(dir) {
        dir = path.join('./', dir);
        FolderManager.del(dir);
        fs.mkdirSync(dir);
        fs.mkdirSync(path.join(dir, 'icons'));
        fs.mkdirSync(path.join(dir, 'components'));
    }

    static del(path) {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function(file, index) {
                const curPath = path + '/' + file;
                if (fs.lstatSync(curPath).isDirectory()) {
                    FolderManager.del(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    }
}

module.exports = FolderManager;
