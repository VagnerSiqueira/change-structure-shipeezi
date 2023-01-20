import * as fs from 'fs';
import * as path from 'path';
import { createFolders } from '../methods-folder/create-folder';
import { formatedNameToUseInFolderAndFile } from '../methods-format-name/formated-name-to-use-in-folder-and-file';
import { moveFileToNewFolder } from './move-file-to-new-folder';
import { renameFile } from './rename-file';

export function getFileNameToCreateFolderAndMove(
  relativePathToCreate,
  patternNameFile,
) {
  const pathToCreate = path.resolve(relativePathToCreate);
  const files = fs.readdirSync(pathToCreate);
  files.forEach((file) => {
    if (!file.includes('.ts')) return;

    const localeFile = `${pathToCreate}/${file}`;

    const nameFormated = formatedNameToUseInFolderAndFile(
      file,
      patternNameFile,
    );

    if(nameFormated){
      const newFolderName = createFolders(
        nameFormated.fileWithoutExtensionName,
        pathToCreate,
      );
  
      const newFileName = `${pathToCreate}/${nameFormated.fileWithExtension}`;
  
      const pathToMovedNewFile = `${newFolderName}/${nameFormated.fileWithExtension}`;
  
      renameFile(localeFile, newFileName);
  
      moveFileToNewFolder(newFileName, pathToMovedNewFile);
    }
  });
}