import { ReturnToFormatName } from "../types/return-to-format-name.interface";
import { removeDotToAddDash } from "./remove-dot-to-add-dash";

export function formatedNameToUseInFolderAndFile(
  fileName: string,
  extensionNameWithoutDot?: string,
): ReturnToFormatName | undefined{
  const fileNameToString = fileName.toString();
  let indexStartExtensionName: number;
  let indexEndExtensioName: number;
  let fileNameWithOutExtension = fileNameToString.replace('.ts', '');
  let fileFormated: string;
  let finalNameFile: string;

  if (fileNameWithOutExtension.includes('module')) return;

  const qntOfDots = (fileNameWithOutExtension.match(/\./g) || []).length;

  if (qntOfDots > 0) {  
    if (extensionNameWithoutDot) {
      indexStartExtensionName =
        fileNameToString.lastIndexOf(extensionNameWithoutDot) - 1;

      indexEndExtensioName = fileNameWithOutExtension.length;

      finalNameFile = fileNameWithOutExtension.slice(
        indexStartExtensionName,
        indexEndExtensioName,
      );

      fileNameWithOutExtension = fileNameWithOutExtension.replace(
        finalNameFile,
        '',
      );

      fileFormated = removeDotToAddDash(fileNameWithOutExtension);
  
      return {
        fileWithExtension: `${fileFormated}${finalNameFile}.ts`,
        fileWithoutExtensionName: fileFormated,
      };
    }

    fileFormated = removeDotToAddDash(fileNameWithOutExtension);

    return {
      fileWithExtension: `${fileFormated}.ts`,
      fileWithoutExtensionName: fileFormated,
    };
  }

  fileFormated = removeDotToAddDash(fileNameWithOutExtension);

  return {
    fileWithExtension: fileNameToString,
    fileWithoutExtensionName: fileFormated,
  };
}