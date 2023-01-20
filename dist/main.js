"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_filename_to_use_in_folder_and_file_1 = require("./methods-file/get-filename-to-use-in-folder-and-file");
const move_file_to_new_folder_1 = require("./methods-file/move-file-to-new-folder");
const create_folder_1 = require("./methods-folder/create-folder");
const move_folders_in_1 = require("./methods-folder/move-folders-in");
const remove_folders_1 = require("./methods-folder/remove-folders");
const install_dependencies_1 = require("./resolve-dependecies/install-dependencies");
const unistall_dependencies_1 = require("./resolve-dependecies/unistall-dependencies");
const move_controllers_and_rename_1 = require("./methods-file/move-controllers-and-rename");
const create_module_in_folders_routes_1 = require("./methods-file/create-module-in-folders-routes");
function reorganizeStructure(folderNameController, folderNameService, folderNameRepositories, folderNameEntities) {
    (0, install_dependencies_1.installDependencies)();
    (0, create_folder_1.createFolders)('routes', 'src');
    (0, get_filename_to_use_in_folder_and_file_1.getFileNameToCreateFolderAndMove)(`src/${folderNameRepositories}/${folderNameEntities}`);
    (0, get_filename_to_use_in_folder_and_file_1.getFileNameToCreateFolderAndMove)(`src/${folderNameService}/bo`, `${folderNameService}`);
    (0, move_folders_in_1.moveFoldersIn)(`src/${folderNameService}/bo`, 'src/routes/');
    (0, move_folders_in_1.moveFoldersIn)(`src/${folderNameRepositories}/${folderNameEntities}`, `src/${folderNameRepositories}`);
    (0, move_file_to_new_folder_1.moveFileToNewFolder)(`src/${folderNameService}/abstract.service.ts`, 'src/routes/abstract.service.ts');
    (0, move_file_to_new_folder_1.moveFileToNewFolder)(`src/${folderNameService}/service.module.ts`, 'src/routes/routes.module.ts');
    (0, remove_folders_1.removeFolders)(`src/${folderNameRepositories}/${folderNameEntities}`);
    (0, remove_folders_1.removeFolders)(`src/${folderNameService}`);
    (0, move_controllers_and_rename_1.moveControllersAndRename)(`src/${folderNameController}`, 'src/routes');
    (0, remove_folders_1.removeFolders)(`src/${folderNameController}`);
    (0, create_module_in_folders_routes_1.createModuleInFolderRoutes)('src/routes');
    (0, unistall_dependencies_1.uninstallDepedencies)();
}
exports.default = reorganizeStructure;
