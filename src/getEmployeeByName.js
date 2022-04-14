const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => employeeName === employee.firstName
  || employeeName === employee.lastName);
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
