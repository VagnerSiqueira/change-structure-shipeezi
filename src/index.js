#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const packageJson = require('../package.json');
const reorganizeStructure = require('./reorganizeStructure');
const Status = require('./check-changes/status-file');
const chalk = require('chalk');

program.version(packageJson.version);

let controller;
let service;
let repositorie;
let entity;

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
                message: 'Name of the parent folder that contains the entities folder: ',
                validate: value => value ? true : 'Repositorie name is required!' 
            },
            {
                type: 'input',
                name: 'entity',
                message: 'Name of the folder the entity are in: ',
                validate: value => value ? true : 'Entity name is required!' 
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
        entity = answers.entity;
      
        if(answers.approve === 'y') {
            if(controller && service && repositorie && entity) {
                const fileCompareReturn = reorganizeStructure(controller, service, repositorie, entity);
                if(fileCompareReturn.controller === Status.SUCCESS) console.log(`${chalk.green(`Controllers: ${Status.SUCCESS}`)}`);
                if(fileCompareReturn.controller === Status.FAILED) console.log(`${chalk.red(`Controllers: ${Status.FAILED}`)}`);
                if(fileCompareReturn.service === Status.SUCCESS) console.log(`${chalk.green(`Services: ${Status.SUCCESS}`)}`);
                if(fileCompareReturn.service === Status.FAILED) console.log(`${chalk.red(`Services: ${Status.FAILED}`)}`);
                if(fileCompareReturn.entity === Status.SUCCESS) console.log(`${chalk.green(`Entities: ${Status.SUCCESS}`)}`);
                if(fileCompareReturn.entity === Status.FAILED) console.log(`${chalk.red(`Entites: ${Status.FAILED}`)}`);
            }
        }
    })

program.parse(process.argv);