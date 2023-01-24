const countFiles = require('./count-files');

function checkChangesStructure(folderNameController, folderNameService, folderNameRepositories, folderNameEntity, oldStructure) {
 if(oldStructure) {
  const controllers = countFiles(`src/${folderNameController}`, oldStructure);
  const services = countFiles(`src/bo/${folderNameService}`, oldStructure);
  const entities = countFiles(`src/${folderNameRepositories}/${folderNameEntity}`, oldStructure);

  return [controllers, services, entities]
 }
 else {
  const controllers = countFiles(`src/routes`, oldStructure, 'controller');
  const services = countFiles(`src/routes`, oldStructure, 'service');
  const privateServices = countFiles(`src/private-services`, oldStructure, 'service');
  const entities = countFiles(`src/${folderNameRepositories}`, oldStructure, 'entity');

  return [controllers, services + privateServices, entities]
 }
}

module.exports = checkChangesStructure;
