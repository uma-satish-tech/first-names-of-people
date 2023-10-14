const namesList = require("../country/state/city/index");
const firstNames = require("../utilities/utils/index");

const getPeopleInCity = function names(namesList) {
  return firstNames(namesList);
};

module.exports = getPeopleInCity;
