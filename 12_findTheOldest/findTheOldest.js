const findTheOldest = function(people) {
  const thisYear = new Date().getFullYear();
  let peopleArray = people;
  
  for (let i = 0; i < people.length; i++) {
    const person = people[i];

    if (!person.yearOfDeath) {
      peopleArray[i].yearOfDeath = thisYear;
    }
  }
  
  const array = peopleArray.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
