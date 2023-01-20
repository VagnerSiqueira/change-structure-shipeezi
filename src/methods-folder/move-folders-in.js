const fs = require('fs');
const path = require('path');
const fsx = require('fs-extra');

function moveFoldersIn(pathFoldersToMove, newPath) {
  try {
    const pathFoldersRelative = path.resolve(pathFoldersToMove);

    const newPathRelative = path.resolve(newPath);
    
    const folders = fs.readdirSync(pathFoldersRelative);
    
    for (const folder of folders) {
      fsx.moveSync(
        path.resolve(`${pathFoldersRelative}/${folder}`),
        path.resolve(`${newPathRelative}/${folder}`),
      );
      console.log(`Moved ${folder} successfully!`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = moveFoldersIn;