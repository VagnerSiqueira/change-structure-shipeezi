const fs = require('fs');
const path = require('path');
const child = require('child_process');

function createModuleInFolderRoutes(pathRoutes) {
  try {
    const folders = fs.readdirSync(path.resolve(pathRoutes));

    folders.forEach((folder) => {
      
      if (!path.extname(folder)) {
        child.execSync(`npx nest g mo ${folder} routes/${folder} --flat`);
        console.log(`create module ${folder} successfully`);
      }
    });    
  } catch (error) {
    console.log(`Failed create module: ${pathRoutes}`)
    throw new Error(error.message)
  }

}

module.exports = createModuleInFolderRoutes;