const Status = require('./status-file'); 

function fileCompareReturn(oldStructure, newStructure) {
  const countControllers = oldStructure[0] - newStructure[0];
  const countServices = oldStructure[1] - newStructure[1];
  const countEntities = oldStructure[2] - newStructure[2];

  let filesFailedOrSuccess = {};
  
  countControllers === 0 ? filesFailedOrSuccess.controller = Status.SUCCESS : filesFailedOrSuccess.controller = Status.FAILED;
  countServices === 0 ? filesFailedOrSuccess.service = Status.SUCCESS : filesFailedOrSuccess.service = Status.FAILED;
  countEntities === 0 ? filesFailedOrSuccess.entity = Status.SUCCESS : filesFailedOrSuccess.entity = Status.FAILED;

  console.log(countControllers, countServices, countEntities);
  
  return filesFailedOrSuccess;
}

module.exports = fileCompareReturn;