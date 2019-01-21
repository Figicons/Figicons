const inquirer = require('inquirer');

class Messager {
    constructor() {
        this.ui = new inquirer.ui.BottomBar();
        this.loadingTimer = 0;
        this.startDate = 0;
    }

    startLoading(str) {
        clearInterval(this.loadingTimer);

        const loader = [`⠏ ${str}`, `⠧ ${str}`, `⠹ ${str}`, `⠼ ${str}`, `⠧ ${str}`];
        const length = loader.length;
        let i = 0;

        this.loadingTimer = setInterval(() => {
            this.ui.updateBottomBar(loader[i++ % length]);
        }, 300);
    }

    endLoading(str) {
        clearInterval(this.loadingTimer);
        this.ui.updateBottomBar('');

        if (str) {
            this.log(str);
        }
    }

    log(str) {
        this.ui.log.write(str);
    }

    startCommand() {
        this.startDate = Date.now();
    }

    endCommand() {
        const msTaken = Date.now() - this.startDate;
        this.log(`Done in ${(msTaken / 1000).toFixed(2)}s`);
        process.exit(1);
    }
}

module.exports = Messager;
