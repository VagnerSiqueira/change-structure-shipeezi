const path = require('path');

function moveFileToNewFolder(
  oldPath,
  newPath,
  forceError = true,
) {
  try {
    fsx.moveSync(path.resolve(oldPath), path.resolve(newPath));
  } catch (error) {
    console.log(`File not moved to new path: ${newPath}`);
    
    if (forceError) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}

module.exports = moveFileToNewFolder;