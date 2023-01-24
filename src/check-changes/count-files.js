const path = require('path')
const countFilesInFoldersAndSubFolders = require('./count-files-in-folders-and-Subfolders');

function countFiles(pathFolder, oldStructure, typeFile) {
  try {
    const pathFolderRelative = path.resolve(pathFolder);
    let count = 0;

    if(oldStructure) {
      count = countFilesInFoldersAndSubFolders(pathFolderRelative, oldStructure);
    }
    if(!oldStructure) {
      count = countFilesInFoldersAndSubFolders(pathFolderRelative, oldStructure, typeFile)
    }

    return count;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = countFiles;