"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatedNameToUseInFolderAndFile = void 0;
const remove_dot_to_add_dash_1 = require("./remove-dot-to-add-dash");
function formatedNameToUseInFolderAndFile(fileName, extensionNameWithoutDot) {
    const fileNameToString = fileName.toString();
    let indexStartExtensionName;
    let indexEndExtensioName;
    let fileNameWithOutExtension = fileNameToString.replace('.ts', '');
    let fileFormated;
    let finalNameFile;
    if (fileNameWithOutExtension.includes('module'))
        return;
    const qntOfDots = (fileNameWithOutExtension.match(/\./g) || []).length;
    if (qntOfDots > 0) {
        if (extensionNameWithoutDot) {
            indexStartExtensionName =
                fileNameToString.lastIndexOf(extensionNameWithoutDot) - 1;
            indexEndExtensioName = fileNameWithOutExtension.length;
            finalNameFile = fileNameWithOutExtension.slice(indexStartExtensionName, indexEndExtensioName);
            fileNameWithOutExtension = fileNameWithOutExtension.replace(finalNameFile, '');
            fileFormated = (0, remove_dot_to_add_dash_1.removeDotToAddDash)(fileNameWithOutExtension);
            return {
                fileWithExtension: `${fileFormated}${finalNameFile}.ts`,
                fileWithoutExtensionName: fileFormated,
            };
        }
        fileFormated = (0, remove_dot_to_add_dash_1.removeDotToAddDash)(fileNameWithOutExtension);
        return {
            fileWithExtension: `${fileFormated}.ts`,
            fileWithoutExtensionName: fileFormated,
        };
    }
    fileFormated = (0, remove_dot_to_add_dash_1.removeDotToAddDash)(fileNameWithOutExtension);
    return {
        fileWithExtension: fileNameToString,
        fileWithoutExtensionName: fileFormated,
    };
}
exports.formatedNameToUseInFolderAndFile = formatedNameToUseInFolderAndFile;
