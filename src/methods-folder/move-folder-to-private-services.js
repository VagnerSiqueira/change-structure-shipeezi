const path = require('path');
const fsx = require('fs-extra');
const fs = require('fs');

function moveFolderToFolderPrivateService (oldPathService, newPathPrivateService) {
  const pathRelative = path.resolve(oldPathService);
  let folderInRoutes;
  
  try {
    folderInRoutes = fs.readdirSync(pathRelative);
  } catch (error) {
    throw new Error(error.message);  
  }

  folderInRoutes.forEach((folder) => {
    if(path.extname(folder)) return;
    
    const pathSubFolderInRoute = path.resolve(`${oldPathService}/${folder}`);
    const subFolderInRoutes = fs.readdirSync(pathSubFolderInRoute);
    const haveController = subFolderInRoutes.filter((value) => value.includes('controller'));
    if(!haveController) {
      try {
        fsx.moveSync(pathSubFolderInRoute, path.resolve(`${newPathPrivateService}/${folder}`));
        console.log(`Moved ${folder} to private-services successfully!`);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  })
}

module.exports = moveFolderToFolderPrivateService;