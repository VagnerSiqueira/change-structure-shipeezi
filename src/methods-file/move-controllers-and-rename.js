const fs = require('fs');
const path = require('path');
const formatedNameToUseInFolderAndFile = require('../methods-format-name/formated-name-to-use-in-folder-and-file');
const moveFileToNewFolder = require( './move-file-to-new-folder');

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
      const nameFormated = formatedNameToUseInFolderAndFile(
        controller,
        'controller',
      );

      if(nameFormated){
        moveFileToNewFolder(
          path.resolve(`${controllerPath}/${controller}`),
          path.resolve(
            `${routesPath}/${nameFormated.fileWithoutExtensionName}/${nameFormated.fileWithExtension}`,
          ),
          false,
        );
      }
    });

    console.log(`Controllers moved successfully!`)
  } catch (error) {
    console.log('Failed move controllers');
    throw new Error(error.message);
  }
}

module.exports = moveControllersAndRename;