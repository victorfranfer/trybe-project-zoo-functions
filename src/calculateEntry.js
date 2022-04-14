const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const childNum = entrants.filter((child) => child.age < 18).length;
  const adultNum = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const seniorNum = entrants.filter((senior) => senior.age >= 50).length;
  return { child: childNum, adult: adultNum, senior: seniorNum };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countedEntrants = countEntrants(entrants);
  const childPrice = countedEntrants.child * data.prices.child;
  const adultPrice = countedEntrants.adult * data.prices.adult;
  const seniorPrice = countedEntrants.senior * data.prices.senior;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
