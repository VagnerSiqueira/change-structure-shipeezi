const fs = require('fs');
const path = require('path');
const createFolders = require('../methods-folder/create-folder')
const formatedNameToUseInFolderAndFile = require('../methods-format-name/formated-name-to-use-in-folder-and-file')
const moveFileToNewFolder = require('./move-file-to-new-folder')
const renameFile = require('./rename-file')

function getFileNameToCreateFolderAndMove(
  relativePathToCreate,
  patternNameFile,
) {
  const pathToCreate = path.resolve(relativePathToCreate);
  const files = fs.readdirSync(pathToCreate);
  files.forEach((file) => {
    if (!file.includes('.ts')) return;

    const localeFile = `${pathToCreate}/${file}`;

    const nameFormated = formatedNameToUseInFolderAndFile(
      file,
      patternNameFile,
    );

    if(nameFormated){
      const newFolderName = createFolders(
        nameFormated.fileWithoutExtensionName,
        pathToCreate,
      );
  
      const newFileName = `${pathToCreate}/${nameFormated.fileWithExtension}`;
  
      const pathToMovedNewFile = `${newFolderName}/${nameFormated.fileWithExtension}`;
  
      renameFile(localeFile, newFileName);
  
      moveFileToNewFolder(newFileName, pathToMovedNewFile);
    }
  });
}

module.exports = getFileNameToCreateFolderAndMove;