import { getFileNameToCreateFolderAndMove } from "./methods-file/get-filename-to-use-in-folder-and-file";
import { moveFileToNewFolder } from "./methods-file/move-file-to-new-folder";
import { createFolders } from "./methods-folder/create-folder";
import { moveFoldersIn } from "./methods-folder/move-folders-in";
import { removeFolders } from "./methods-folder/remove-folders";
import { installDependencies } from "./resolve-dependecies/install-dependencies";
import { uninstallDepedencies } from "./resolve-dependecies/unistall-dependencies";
import { moveControllersAndRename } from "./methods-file/move-controllers-and-rename"
import { createModuleInFolderRoutes } from "./methods-file/create-module-in-folders-routes";

export function reorganizeStructure(folderNameController: string, folderNameService: string, folderNameRepositories: string, folderNameEntities: string) {
  installDependencies();
  createFolders('routes', 'src');
  getFileNameToCreateFolderAndMove(`src/${folderNameRepositories}/${folderNameEntities}`);
  getFileNameToCreateFolderAndMove(`src/${folderNameService}/bo`, `${folderNameService}`);
  moveFoldersIn(`src/${folderNameService}/bo`, 'src/routes/');
  moveFoldersIn(`src/${folderNameRepositories}/${folderNameEntities}`, `src/${folderNameRepositories}`);
  moveFileToNewFolder(
    `src/${folderNameService}/abstract.service.ts`,
    'src/routes/abstract.service.ts',
  );
  moveFileToNewFolder(
    `src/${folderNameService}/service.module.ts`,
    'src/routes/routes.module.ts',
  );
  removeFolders(`src/${folderNameRepositories}/${folderNameEntities}`);
  removeFolders(`src/${folderNameService}`);
  moveControllersAndRename(`src/${folderNameController}`, 'src/routes');
  removeFolders(`src/${folderNameController}`);
  createModuleInFolderRoutes('src/routes');
  uninstallDepedencies();
}
