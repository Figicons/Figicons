#!/usr/bin/env node --harmony

/**
 * Module dependencies.
 */

const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');
const fetch = require('../scripts/fetch');
const package = require('../package.json');

program
    .name('figicons')
    .version(package.version)
    .option('-K, --key', 'Figma project key')
    .option('-T, --token', 'Figma account token')
    .action(function(env, options) {
        co(function*() {
            const key = yield prompt('Figma File key: ');
            const token = yield prompt('Figma Personal Access Token: ');
            console.log('key: %s token: %s', key, token);

            fetch(key, token);
        });
    })
    .parse(process.argv);
