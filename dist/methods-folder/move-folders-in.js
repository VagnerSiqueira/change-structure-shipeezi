"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFoldersIn = void 0;
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const fsx = __importStar(require("fs-extra"));
function moveFoldersIn(pathFoldersToMove, newPath) {
    try {
        const pathFoldersRelative = path.resolve(pathFoldersToMove);
        const newPathRelative = path.resolve(newPath);
        const folders = fs.readdirSync(pathFoldersRelative);
        for (const folder of folders) {
            fsx.moveSync(path.resolve(`${pathFoldersRelative}/${folder}`), path.resolve(`${newPathRelative}/${folder}`));
            console.log(`Moved ${folder} successfully!`);
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.moveFoldersIn = moveFoldersIn;
