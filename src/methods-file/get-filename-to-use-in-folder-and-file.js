const fs = require('fs');
const path = require('path');
const createFolders = require('../methods-folder/create-folder')
const formatedNameToUseInFolderAndFile = require('../methods-format-name/formated-name-to-use-in-folder-and-file')
const moveFileToNewFolder = require('./move-file-to-new-folder')
const renameFile = require('./rename-file')

function getFileNameToCreateFolderAndMove(
  relativePathToCreate,
  patternNameFile,
  addPatternName,
) {
  const pathToCreate = path.resolve(relativePathToCreate);
  let files;
  try {
    files = fs.readdirSync(pathToCreate);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
  files.forEach((file) => {
    if (!file.includes('.ts')) return;
    let fileName = file;
    let patternName = patternNameFile;

    if (addPatternName && !patternNameFile) {
      fileName = `${file}.${addPatternName}`;
      patternName = addPatternName;
    }

    const localeFile = `${pathToCreate}/${file}`;

    const nameFormated = formatedNameToUseInFolderAndFile(
      fileName,
      patternName,
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