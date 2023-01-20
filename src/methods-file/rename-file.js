const fs = require('fs');

function renameFile(oldPathWithFileName, newPathWithFileName) {
  try {
    fs.renameSync(oldPathWithFileName, newPathWithFileName);
    console.log(`Renamed file ${newPathWithFileName} successfully`)
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = renameFile