/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const nightwatchConfig = require('terra-toolkit/lib/nightwatch/nightwatch.config.js').default;
const webpackConfig = require('./packages/terra-site/webpack.config');
const getPackageTestDirectories = require('terra-toolkit/lib/nightwatch/setup-helper.js').getPackageTestDirectories;

let srcFolders;
const isRepoTest = !process.cwd().includes('/packages/');

if (isRepoTest) {
  srcFolders = getPackageTestDirectories('lerna.json');
} else {
  srcFolders = 'tests/nightwatch/';
}

const config = nightwatchConfig(webpackConfig, srcFolders);


if (isRepoTest) {
  config.custom_commands_path = [
    './node_modules/nightwatch-axe/src/commands',
  ];
} else {
  config.custom_commands_path = [
    '../../node_modules/nightwatch-axe/src/commands',
  ];
}

module.exports = config;
