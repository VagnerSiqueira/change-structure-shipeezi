const countFiles = require('./count-files');

function checkChangesStructure(folderNameController, folderNameService, folderNameRepositories, folderNameEntity, oldStructure = true) {
 if(oldStructure) {
  const controllers = countFiles(`src/${folderNameController}`, true);
  const services = countFiles(`src/${folderNameService}`, true);
  const entities = countFiles(`src/${folderNameRepositories}/${folderNameEntity}`, true);

  return [controllers, services, entities]
 }
 else {
  const controllers = countFiles(`src/${folderNameController}`, false, 'controller');
  const services = countFiles(`src/routes`, false, 'service');
  const entities = countFiles(`src/${folderNameRepositories}`, false, 'entity');

  return [controllers, services, entities]
 }
}

module.exports = checkChangesStructure;
