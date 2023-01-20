import * as fs from 'fs';
import * as path from 'path';
import * as child from 'child_process';

export function createModuleInFolderRoutes(pathRoutes: string) {
  const folders = fs.readdirSync(path.resolve(pathRoutes));

  folders.forEach((folder) => {
    
    if (!path.extname(folder)) {
      child.execSync(`npx nest g mo ${folder} routes/${folder} --flat`);
      console.log(`create module ${folder} successfully`);
    }
  });
}