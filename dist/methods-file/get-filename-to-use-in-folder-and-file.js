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
exports.getFileNameToCreateFolderAndMove = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const create_folder_1 = require("../methods-folder/create-folder");
const formated_name_to_use_in_folder_and_file_1 = require("../methods-format-name/formated-name-to-use-in-folder-and-file");
const move_file_to_new_folder_1 = require("./move-file-to-new-folder");
const rename_file_1 = require("./rename-file");
function getFileNameToCreateFolderAndMove(relativePathToCreate, patternNameFile) {
    const pathToCreate = path.resolve(relativePathToCreate);
    const files = fs.readdirSync(pathToCreate);
    files.forEach((file) => {
        if (!file.includes('.ts'))
            return;
        const localeFile = `${pathToCreate}/${file}`;
        const nameFormated = (0, formated_name_to_use_in_folder_and_file_1.formatedNameToUseInFolderAndFile)(file, patternNameFile);
        if (nameFormated) {
            const newFolderName = (0, create_folder_1.createFolders)(nameFormated.fileWithoutExtensionName, pathToCreate);
            const newFileName = `${pathToCreate}/${nameFormated.fileWithExtension}`;
            const pathToMovedNewFile = `${newFolderName}/${nameFormated.fileWithExtension}`;
            (0, rename_file_1.renameFile)(localeFile, newFileName);
            (0, move_file_to_new_folder_1.moveFileToNewFolder)(newFileName, pathToMovedNewFile);
        }
    });
}
exports.getFileNameToCreateFolderAndMove = getFileNameToCreateFolderAndMove;
