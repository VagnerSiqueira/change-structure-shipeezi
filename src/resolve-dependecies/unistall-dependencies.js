const child = require('child_process');

function uninstallDepedencies() {
  child.execSync('yarn remove fs-extra');
}

module.exports = uninstallDepedencies;