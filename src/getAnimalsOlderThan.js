const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const requiredAnimal = species.find((especie) => especie.name === animal);
  return requiredAnimal.residents.every((resident) => resident.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
