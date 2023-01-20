#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const inquirer = __importStar(require("inquirer"));
const main_1 = __importDefault(require("./main"));
let controller;
let service;
let repositorie;
let entitie;
commander_1.default.command('init')
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.default.prompt([
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
    ]);
    controller = answers.controller;
    service = answers.controller;
    repositorie = answers.repositorie;
    entitie = answers.entitie;
    if (answers.approve === 'y') {
        if (controller && service && repositorie && entitie) {
            (0, main_1.default)(controller, service, repositorie, entitie);
        }
    }
}));
commander_1.default.parse(process.argv);
