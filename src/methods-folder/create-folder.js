const fs = require('fs');
const path = require('path');

function createFolders(folderName, relativePath) {
  try {
    const relativePathToCreate = path.resolve(relativePath);

    fs.mkdirSync(`${relativePathToCreate}/${folderName}`);
    
    console.log(`Folder ${folderName} created successfully!`);
    
    return `${relativePathToCreate}/${folderName}`;
  } catch (error) {
    throw new Error(`Create folder ${folderName} failed`);
  }
}

module.exports = createFolders;