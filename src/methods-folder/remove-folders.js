import * as path from 'path';
import * as fsx from 'fs-extra';

export function removeFolders(pathFolder) {
  try {
    fsx.removeSync(path.resolve(pathFolder));

    console.log(`Folder ${pathFolder} removed successfully!`);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}