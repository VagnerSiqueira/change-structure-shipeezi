#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const packageJson = require('../package.json');
const reorganizeStructure = require('./main.js');

program.version(packageJson.version);

let controller;
let service;
let repositorie;
let entitie;

program.command('init')
    .action(async () => {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'controller',
                message: 'Name of the folder the controllers are in: ',
                validate: value => value ? true : 'Controller name is required!' 
            },
            {
                type: 'input',
                name: 'service',
                message: 'Name of the folder the service are in: ',
                validate: value => value ? true : 'Service name is required!' 
            },
            {
                type: 'input',
                name: 'repositorie',
                message: 'Name of the folder the repositorie are in: ',
                validate: value => value ? true : 'Repositorie name is required!' 
            },
            {
                type: 'input',
                name: 'entitie',
                message: 'Name of the folder the entitie are in: ',
                validate: value => value ? true : 'Entitie name is required!' 
            },
            {
                type: 'input',
                name: 'approve',
                message: 'Do you want to apply the changes? y/n',
                validate: (value) => value === 'y' || value === 'n' ? true : 'Type "y" or "n" !'
            }
        ])

        controller = answers.controller;
        service = answers.service;
        repositorie = answers.repositorie;
        entitie = answers.entitie;
      
        if(answers.approve === 'y') {
            if(controller && service && repositorie && entitie) {
                reorganizeStructure(controller, service, repositorie, entitie)
            }
        }
    })

program.parse(process.argv);