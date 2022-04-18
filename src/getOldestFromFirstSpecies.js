const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((person) => person.id === id);
  const firstAnimal = employee.responsibleFor[0];
  const verifyAnimal = data.species.find((animal) => animal.id === firstAnimal);
  const oldestAnimal = verifyAnimal.residents.sort((a, b) => b.age - a.age);
  return [oldestAnimal[0].name, oldestAnimal[0].sex, oldestAnimal[0].age];
}

module.exports = getOldestFromFirstSpecies;
