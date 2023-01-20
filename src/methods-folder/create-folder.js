import * as fs from 'fs';
import * as path from 'path';

export function createFolders(folderName, relativePath) {
  try {
    const relativePathToCreate = path.resolve(relativePath);

    fs.mkdirSync(`${relativePathToCreate}/${folderName}`);
    
    console.log(`Folder ${folderName} created successfully!`);
    
    return `${relativePathToCreate}/${folderName}`;
  } catch (error) {
    throw new Error(`Create folder ${folderName} failed`);
  }
}