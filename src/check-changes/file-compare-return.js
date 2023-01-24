const Status = require('./status-file'); 

function fileCompareReturn(oldStructure, newStructure) {
  const countControllers = oldStructure[0] - newStructure[0];
  const countServices = oldStructure[1] - newStructure[1];
  const countEntities = oldStructure[2] - newStructure[2];

  let filesFailedOrSuccess = {};
  
  countControllers > 0 ? filesFailedOrSuccess.controller = Status.FAILED : filesFailedOrSuccess.controller = Status.SUCCESS
  countServices > 0 ? filesFailedOrSuccess.service = Status.FAILED : filesFailedOrSuccess.service = Status.SUCCESS
  countEntities > 0 ? filesFailedOrSuccess.entity = Status.FAILED : filesFailedOrSuccess.entity = Status.SUCCESS

  return filesFailedOrSuccess;
}

module.exports = fileCompareReturn;