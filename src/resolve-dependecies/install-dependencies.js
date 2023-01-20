const child = require('child_process');

function installDependencies() {
  child.execSync('yarn add @nestjs/schematics -D');
  child.execSync('yarn add fs-extra');
}

module.exports = installDependencies