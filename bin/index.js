#!/usr/bin/env node --harmony

const program = require('commander');
const inquirer = require('inquirer');
const Fetcher = require('../scripts/Fetcher');
const Parser = require('../scripts/Parser');
const Messager = require('../scripts/Messager');
const storage = require('node-persist');
const package = require('../package.json');
const keyStoreDir = './bin/store/keyStore';

async function run() {
    const parser = new Parser();
    const messager = new Messager();
    const keyStore = storage.create({ dir: keyStoreDir });

    await keyStore.init();

    const keys = await keyStore.keys();
    const values = await keyStore.values();

    await keyStore.setItem('eIOdDEWeiHETuccK5xpfNhEc', {
        name: 'Sample icons',
        token: '6742-59554322-f562-4177-8848-f7125dce459a',
    });

    const keysList =
        keys.length > 0
            ? keys.reduce((a, k, i) => {
                  const val = values[i];
                  a.push({ name: `${val.name} (${k})`, value: k });
                  return a;
              }, [])
            : [{ name: 'No saved project found', disabled: 'Create a new one below' }];

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
                        config.key = key;
                        config.token = token;
                    } else {
                        const { token: selectedToken } = await keyStore.getItem(selectedKey);
                        config.key = selectedKey;
                        config.token = selectedToken;
                    }

                    const fetcher = new Fetcher({
                        key: config.key,
                        token: config.token,
                    });

                    try {
                        messager.startLoading('Fetching icons from Figma');
                        const figmaData = await fetcher.request(`files/${config.key}`);
                        await fetcher.grabImageData(figmaData.document.children[0].children);
                        messager.endLoading(`Fetched ${figmaData.document.children[0].children.length} icons from: ${figmaData.name}`);

                        messager.startLoading('Cleaning & optimizing icons');
                        await parser.clean();
                        messager.endLoading(`Cleaned & optimized icons`);

                        messager.startLoading('Parsing icons');
                        await parser.parse();
                        messager.endLoading(`Parsed icons`);

                        await keyStore.setItem(config.key, {
                            name: figmaData.name,
                            token: config.token,
                        });
                    } catch (error) {
                        messager.log(error.message);
                    }

                    // console.log(JSON.stringify(answers, null, '  '));
                });
        })
        .parse(process.argv);
}

run();
