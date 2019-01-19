#!/usr/bin/env node --harmony

const program = require('commander');
const inquirer = require('inquirer');
const storage = require('node-persist');
const fetch = require('../scripts/fetch');
const package = require('../package.json');
const keyStoreDir = './bin/store/keyStore';

async function run() {
    const keyStore = storage.create({ dir: keyStoreDir });
    await keyStore.init();

    const allKeys = await keyStore.keys();

    await keyStore.setItem('eIOdDEWeiHETuccK5xpfNhEc', '6742-59554322-f562-4177-8848-f7125dce459a');

    const keysList = allKeys.length > 0 ? allKeys : [{ name: 'No saved project found', disabled: 'Create a new one below' }];

    program
        .name('figicons')
        .version(package.version)
        .option('-K, --key', 'Figma project key')
        .option('-T, --token', 'Figma account token')
        .action(function(env, options) {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'selectedKey',
                        message: 'Select a saved Figma project, or a create new one',
                        choices: [...keysList, new inquirer.Separator(), 'Create new'],
                    },
                    {
                        type: 'input',
                        name: 'key',
                        message: 'Enter the file key of your Figma project',
                        when: function(answers) {
                            return answers.selectedKey === 'Create new';
                        },
                    },
                    {
                        type: 'input',
                        name: 'token',
                        message: 'Enter a personal access token (leave blank if project is public)',
                        when: function(answers) {
                            return answers.selectedKey === 'Create new';
                        },
                    },
                ])
                .then(async answers => {
                    const { key, token, selectedKey } = answers;
                    let config = { key, token };

                    if (key && token) {
                        await keyStore.setItem(key, token);
                        config.key = key;
                        config.token = token;
                    } else {
                        config.key = selectedKey;
                        config.token = await keyStore.getItem(selectedKey);
                    }

                    console.log(config);
                    fetch(config.key, config.token);

                    console.log(JSON.stringify(answers, null, '  '));
                });
        })
        .parse(process.argv);
}

run();
