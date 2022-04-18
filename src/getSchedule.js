const data = require('../data/zoo_data');

const days = Object.keys(data.hours);

const animalsPerDay = (day) => {
  const dayExhibit = [];
  data.species.forEach((animal) => {
    if (animal.availability.includes(day)) {
      dayExhibit.push(animal.name);
    }
  });
  return dayExhibit;
};

const withoutParam = () => {
  const schedule = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      schedule[day] = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };
      return schedule;
    }
    schedule[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: animalsPerDay(day),
    };
  });
  return schedule;
};

const dayParam = (day) => {
  const schedule = {};
  if (day === 'Monday') {
    schedule[day] = {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    };
    return schedule;
  }
  schedule[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: animalsPerDay(day),
  };
  return schedule;
};

const animalParam = (animal) => {
  const exhibit = data.species.find((ani) => ani.name === animal).availability;
  return exhibit;
};

function getSchedule(scheduleTarget) {
  if (data.species.find((animal) => animal.name === scheduleTarget)) {
    return animalParam(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return dayParam(scheduleTarget);
  }
  return withoutParam();
}

module.exports = getSchedule;
