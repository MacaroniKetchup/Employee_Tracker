//Imports
const inquirer = require('inquirer');
const menu = require('./lib/prompts');

async function menuOptions() {
    await menu();
}

menuOptions();