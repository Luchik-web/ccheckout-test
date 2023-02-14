/* eslint-disable */
const { resolve } = require('path');
const appDir = resolve(__dirname, '.');
const eslintConfigBuilder = require('@comfy/core/src/eslint/eslintrc.config.js');

module.exports = eslintConfigBuilder(appDir);
