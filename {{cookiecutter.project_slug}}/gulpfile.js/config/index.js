'use strict';

var config = {};

function checkProd() {
    return process.env.DJANGO_SETTINGS_MODULE === 'config.settings.production';
}

function checkStage() {
    return process.env.DJANGO_SETTINGS_MODULE === 'config.settings.production';
}

function checkDev() {
    return process.env.DJANGO_SETTINGS_MODULE === 'config.settings.local';
}

config.publicDirectory = './build';
config.sourceDirectory = './source';
config.prod = checkProd();
config.stage = checkStage();
config.dev = checkDev();

module.exports = config;
