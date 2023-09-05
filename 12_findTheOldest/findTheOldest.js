const findTheOldest = function (people) {
  let currentYear = new Date().getFullYear();
  let arr = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath) {
      people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
    } else {
      people[i].age = currentYear - people[i].yearOfBirth;
    }
    arr.push(people[i].age);
  }

  let idx = arr.indexOf(Math.max(...arr));

  return people[idx];
};

// Do not edit below this line
module.exports = findTheOldest;
