const fs = require('fs');
const path = require('path');

function countFilesInFoldersAndSubFolders(pathFolder, oldStructure, typeFile) {
  try {
    const pathFolderRelative = path.resolve(pathFolder);
    let count = 0;

    if(oldStructure) {
      const files = fs.readdirSync(pathFolderRelative);
      const filesNotModule = files.filter((file) => !file.includes('module'));
      count = Number(filesNotModule.length);
      console.log(count)
    }
  
    if(!oldStructure && typeFile) {
      const folders = fs.readdirSync(pathFolderRelative);
      folders.forEach((subFolder) => {
        if(!path.extname(subFolder)){
          const files = fs.readdirSync(path.resolve(`${pathFolderRelative}/${subFolder}`));
          const filesNotModule = files.filter((file) => file.includes(typeFile) && !file.includes('module'));
          count += filesNotModule.length;
          console.log(count)
        }
      });
    }

    return count;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = countFilesInFoldersAndSubFolders;