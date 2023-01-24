const fs = require('fs');
const path = require('path');

function countFilesInFoldersAndSubFolders(pathFolder, oldStructure = true, typeFile) {
  try {
    const pathFolderRelative = path.resolve(pathFolder);
    let count = 0;

    if(oldStructure) {
      const files = fs.readdirSync(pathFolderRelative);
      const filesNotModule = files.filter((file) => !file.includes('module'));
      count = filesNotModule.length;
    }
  
    if(!oldStructure && typeFile) {
      const folders = fs.readdirSync(pathFolderRelative);
      folders.forEach((subFolder) => {
        if(path.extname(subFolder)) return;
        const files = fs.readdirSync(path.resolve(`${pathFolderRelative}/${subFolder}`));
        const filesNotModule = files.filter((file) => file.includes(typeFile));
        count = filesNotModule.length;
      });
    }

    return count;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = countFilesInFoldersAndSubFolders;