const inquirer = require('inquirer');
const ui = new inquirer.ui.BottomBar();
let loadingTimer = 0;
let startDate = 0;
class Messager {
    static startLoading(str) {
        clearInterval(Messager.loadingTimer);

        const loader = [`⠏ ${str}`, `⠧ ${str}`, `⠹ ${str}`, `⠼ ${str}`, `⠧ ${str}`];
        const length = loader.length;
        let i = 0;

        Messager.loadingTimer = setInterval(() => {
            ui.updateBottomBar(loader[i++ % length]);
        }, 300);
    }

    static endLoading(str) {
        clearInterval(Messager.loadingTimer);
        ui.updateBottomBar('');

        if (str) {
            Messager.log(str);
        }
    }

    static log(str) {
        ui.log.write(str);
    }

    static startCommand() {
        Messager.startDate = Date.now();
    }

    static endCommand() {
        const msTaken = Date.now() - Messager.startDate;
        Messager.log(`Done in ${(msTaken / 1000).toFixed(2)}s`);
        process.exit(1);
    }
}

module.exports = Messager;
