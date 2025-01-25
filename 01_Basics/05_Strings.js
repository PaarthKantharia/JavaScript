const name = "Paarth Kantharia"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Bagira')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.charAt(8)); // leaves blank spot for postions that can not be put in the string.
console.log(gameName.indexOf('t')); // Characters ".indexOF" gives "-1" as the location for charaters that do not exist in the string.
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
console.log(newString) // Last postion charater is not taken into recognisation.

const anotherString = gameName.slice(-8, 2)
console.log(anotherString);

const newStringOne = "   Paarth    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "http://PaarthKantharia.com/Paarth%20Bagira"

console.log(url.replace('%20', '-'))

console.log(url.includes('King'))

 console.log(gameName.split('-'));