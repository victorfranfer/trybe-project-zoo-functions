const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedEmployees = employees.filter((employee) => employee.managers.includes(managerId));
  return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
