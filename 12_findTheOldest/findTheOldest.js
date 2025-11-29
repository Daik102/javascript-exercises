const findTheOldest = function(people) {
  const thisYear = new Date().getFullYear;
  const array = people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
