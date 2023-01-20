"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDotToAddDash = void 0;
function removeDotToAddDash(name) {
    if (!name.includes('-')) {
        return name.replace(/\./gi, '-');
    }
    return name;
}
exports.removeDotToAddDash = removeDotToAddDash;
