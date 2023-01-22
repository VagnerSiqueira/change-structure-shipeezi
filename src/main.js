const getFileNameToCreateFolderAndMove = require("./methods-file/get-filename-to-use-in-folder-and-file");
const moveFileToNewFolder = require("./methods-file/move-file-to-new-folder");
const createFolders = require("./methods-folder/create-folder");
const moveFoldersIn = require("./methods-folder/move-folders-in");
const removeFolders = require("./methods-folder/remove-folders");
const installDependencies = require("./resolve-dependecies/install-dependencies");
const uninstallDepedencies = require("./resolve-dependecies/unistall-dependencies");
const moveControllersAndRename = require ("./methods-file/move-controllers-and-rename");
const createModuleInFolderRoutes = require("./methods-file/create-module-in-folders-routes");
const moveFolderToFolderPrivateService = require('./methods-folder/move-folder-to-private-services');

function reorganizeStructure(folderNameController, folderNameService, folderNameRepositories, folderNameEntities) {
  installDependencies();
  createFolders('routes', 'src');
  getFileNameToCreateFolderAndMove(`src/${folderNameRepositories}/${folderNameEntities}`, null, 'entity');
  getFileNameToCreateFolderAndMove(`src/${folderNameService}/bo`, 'service');
  moveFoldersIn(`src/${folderNameService}/bo`, 'src/routes/');
  moveFoldersIn(`src/${folderNameRepositories}/${folderNameEntities}`, `src/${folderNameRepositories}`);
  moveFileToNewFolder(
    `src/${folderNameService}/abstract.service.ts`,
    'src/routes/abstract.service.ts',
  );
  moveFileToNewFolder(
    `src/${folderNameService}/service.module.ts`,
    'src/routes/routes.module.ts',
  );
  removeFolders(`src/${folderNameRepositories}/${folderNameEntities}`);
  removeFolders(`src/${folderNameService}`);
  moveControllersAndRename(`src/${folderNameController}`, 'src/routes');
  removeFolders(`src/${folderNameController}`);
  createModuleInFolderRoutes('src/routes');
  createFolders('private-services', 'src');
  moveFolderToFolderPrivateService('src/routes', 'src/private-services')
  uninstallDepedencies();
}

module.exports = reorganizeStructure;