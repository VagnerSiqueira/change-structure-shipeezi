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
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveControllersAndRename = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const formated_name_to_use_in_folder_and_file_1 = require("../methods-format-name/formated-name-to-use-in-folder-and-file");
const move_file_to_new_folder_1 = require("./move-file-to-new-folder");
function moveControllersAndRename(controllerPath, routesPath) {
    try {
        const filesInControllerPath = fs.readdirSync(path.resolve(controllerPath));
        const controllers = [];
        filesInControllerPath.forEach((file) => {
            if (!file.includes('module.ts')) {
                controllers.push(file);
            }
        });
        controllers.forEach((controller) => {
            const nameFormated = (0, formated_name_to_use_in_folder_and_file_1.formatedNameToUseInFolderAndFile)(controller, 'controller');
            if (nameFormated) {
                (0, move_file_to_new_folder_1.moveFileToNewFolder)(path.resolve(`${controllerPath}/${controller}`), path.resolve(`${routesPath}/${nameFormated.fileWithoutExtensionName}/${nameFormated.fileWithExtension}`), false);
            }
        });
        console.log(`Controllers moved successfully!`);
    }
    catch (error) {
        console.log('Failed move controllers');
        throw new Error(error.message);
    }
}
exports.moveControllersAndRename = moveControllersAndRename;
