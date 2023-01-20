import * as fs from 'fs';
import * as path from 'path';
import { formatedNameToUseInFolderAndFile } from '../methods-format-name/formated-name-to-use-in-folder-and-file';
import { moveFileToNewFolder } from './move-file-to-new-folder';

export function moveControllersAndRename(controllerPath, routesPath) {
  try {
    const filesInControllerPath = fs.readdirSync(path.resolve(controllerPath));
    const controllers = [];

    filesInControllerPath.forEach((file) => {
      if (!file.includes('module.ts')) {
        controllers.push(file);
      }
    });

    controllers.forEach((controller) => {
      const nameFormated = formatedNameToUseInFolderAndFile(
        controller,
        'controller',
      );

      if(nameFormated){
        moveFileToNewFolder(
          path.resolve(`${controllerPath}/${controller}`),
          path.resolve(
            `${routesPath}/${nameFormated.fileWithoutExtensionName}/${nameFormated.fileWithExtension}`,
          ),
          false,
        );
      }
    });

    console.log(`Controllers moved successfully!`)
  } catch (error) {
    console.log('Failed move controllers');
    throw new Error(error.message);
  }
}
