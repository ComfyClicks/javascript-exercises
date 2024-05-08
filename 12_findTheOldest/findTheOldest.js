const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]


const findTheOldest = function(arr) {
  return arr.reduce((acc, curr) => {
    const currentYear = new Date().getFullYear();
    let accAge = acc.yearOfDeath ? acc.yearOfDeath - acc.yearOfBirth : currentYear - acc.yearOfBirth;
    let currAge = curr.yearOfDeath ? curr.yearOfDeath - curr.yearOfBirth : currentYear - curr.yearOfBirth;
    return currAge > accAge ? curr : acc;
  });
};


console.log(findTheOldest(people));


// Do not edit below this line
module.exports = findTheOldest;
