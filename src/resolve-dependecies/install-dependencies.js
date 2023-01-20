import * as child from 'child_process';

export function installDependencies() {
  child.execSync('yarn add @nestjs/schematics -D');
  child.execSync('yarn add fs-extra');
}