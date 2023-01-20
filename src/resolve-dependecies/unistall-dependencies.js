import * as child from 'child_process';

export function uninstallDepedencies() {
  child.execSync('yarn remove fs-extra');
}