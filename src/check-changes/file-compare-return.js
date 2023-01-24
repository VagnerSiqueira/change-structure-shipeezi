const Status = require('./status-file'); 

function fileCompareReturn(oldStructure, newStructure) {
  console.log(oldStructure);
  console.log(newStructure);

  const countControllers = Number(oldStructure[0]) - Number(newStructure[0]);
  const countServices = Number(oldStructure[1]) - Number(newStructure[1]);
  const countEntities = Number(oldStructure[2]) - Number(newStructure[2]);

  let filesFailedOrSuccess = {};
  
  countControllers === 0 ? filesFailedOrSuccess.controller = Status.SUCCESS : filesFailedOrSuccess.controller = Status.FAILED;
  countServices === 0 ? filesFailedOrSuccess.service = Status.SUCCESS : filesFailedOrSuccess.service = Status.FAILED;
  countEntities === 0 ? filesFailedOrSuccess.entity = Status.SUCCESS : filesFailedOrSuccess.entity = Status.FAILED;
  
  return filesFailedOrSuccess;
}

module.exports = fileCompareReturn;