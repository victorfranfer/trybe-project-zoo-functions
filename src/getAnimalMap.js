const data = require('../data/zoo_data');

// const locations = ['NE', 'NW', 'SE', 'SW'];
// let animals = {};
// let sections = [];

// const speciesMap = () => {
//   const map = {};
//   locations.forEach((location) => {
//     const speciesLocation = data.species.filter((animals) => animals.location === location);
//     const animalsMap = speciesLocation.map((animals) => animals.name);
//     map[`${location}`] = animalsMap;
//   });
//   return map;
// }

// const includeNames = () => {
//   locations.forEach((location) => {
//     const speciesLocation = data.species.filter((animal) => animal.location === location);
//     speciesLocation.forEach((animal) => {
//       animals[`${animal.name}`] = animal.residents.map((obj) => obj.name);
//       sections.push(animals);
//       animals = {};
//     })
//   })
// }
function getAnimalMap(options) {}

module.exports = getAnimalMap;
