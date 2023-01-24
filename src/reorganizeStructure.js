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
const writePatternModule = require('./methods-file/write-pattern-module');
const checkChangesStructure = require('./check-changes/check-changes-structure');
const fileCompareReturn = require('./check-changes/file-compare-return');

function reorganizeStructure(folderNameController, folderNameService, folderNameRepositories, folderNameEntities) {
  installDependencies();
  const countOldFiles = checkChangesStructure(folderNameController, folderNameService, folderNameRepositories, folderNameEntities, true);
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
  const countNewfiles = checkChangesStructure(null, null, folderNameRepositories, null, false);
  createModuleInFolderRoutes('src/routes');
  writePatternModule('src/routes');
  createFolders('private-services', 'src');
  moveFolderToFolderPrivateService('src/routes', 'src/private-services');
  uninstallDepedencies();

  return fileCompareReturn(countOldFiles, countNewfiles);
}

module.exports = reorganizeStructure;