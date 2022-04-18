const data = require('../data/zoo_data');

// const expected = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

const zooLocation = () => {
  const mapLocation = {
    NE: data.species.filter((location) => location.location === 'NE')
      .map((animal) => animal.name),
    NW: data.species.filter((location) => location.location === 'NW')
      .map((animal) => animal.name),
    SE: data.species.filter((location) => location.location === 'SE')
      .map((animal) => animal.name),
    SW: data.species.filter((location) => location.location === 'SW')
      .map((animal) => animal.name),
};
  return mapLocation;
};

function getAnimalMap(options) {
  if (!options || includeNames === undefined) {
    return zooLocation();
  }
  if (includeNames === true) {
    const mapLocation = {
      NE: data.species.filter((location) => location.location === 'NE')
        .map((animal) => animal.residents),
      NW: data.species.filter((location) => location.location === 'NW')
        .map((animal) => animal.residents),
      SE: data.species.filter((location) => location.location === 'SE')
        .map((animal) => animal.residents),
      SW: data.species.filter((location) => location.location === 'SW')
        .map((animal) => animal.residents),
    }
  }
}

module.exports = getAnimalMap;
