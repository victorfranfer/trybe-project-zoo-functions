const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const defaultReturn = {};
    species.forEach((curAnimal) => {
      defaultReturn[curAnimal.name] = curAnimal.residents.length;
    });
    return defaultReturn;
  }
  if (animal.sex === undefined) {
    return species.find((curAnimal) => curAnimal.name === animal.specie).residents.length;
  }
  return species.find((curAnimal) => curAnimal.name === animal.specie).residents
    .filter((curAnimal) => curAnimal.sex === animal.sex).length;
}

module.exports = countAnimals;
