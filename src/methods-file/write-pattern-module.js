const fs = require('fs');
const path = require('path');

function patternModule(nameModule) {
  return `import { Module } from '@nestjs/common';
  import { ConfigModule } from '@nestjs/config';
  import {
    repositories,
    RepositoryModule,
  } from '../../repositories/repository.module';
  
  const services = [];
  
  @Module({
    controllers: [],
    exports: services,
    imports: [ConfigModule.forRoot(), repositories, RepositoryModule],
    providers: services,
  })
  ${nameModule}`;
}

function writePatternModule(pathFolderHaveModule) {
  const pathModuleRelative = path.resolve(pathFolderHaveModule);
  let subFoldersInRoutes;
  try {
    subFoldersInRoutes = fs.readdirSync(pathModuleRelative);
  } catch (error) {
    throw new Error(error.message);
  }

  subFoldersInRoutes.forEach((folder) => {
    if (path.extname(folder)) return;

    let files;

    try {
      files = fs.readdirSync(`${pathModuleRelative}/${folder}`);
    } catch (error) {
      throw new Error(error.message);
    }

    let filePathModule;

    files.forEach((file) => {
      if (file.includes('module')) {
        filePathModule = path.resolve(
          `${pathModuleRelative}/${folder}/${file}`,
        );
      }
    });

    if (!filePathModule) return;
    console.log(filePathModule);
    const fileModule = fs.readFileSync(filePathModule, 'utf-8');

    const linesInFileModule = fileModule.split(/\r?\n/);

    let nameModule;

    linesInFileModule.forEach((line) => {
      if (line.includes('export class')) {
        nameModule = line;
      }
    });

    if (!nameModule) return;

    fs.writeFileSync(filePathModule, patternModule(nameModule), 'utf-8');
  });
}

module.exports = writePatternModule;
