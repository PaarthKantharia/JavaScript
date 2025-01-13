// Primitive 

// 7 types : String, Number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId)

const bigNumber = 65484548946666n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Falcon", "AntMan"];
let myObj = {
    name: "Paarth kantharia",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

// DataType Outcomes :

/* Premetive DataType Outcomes */

console.log(typeof score)  // Numbers --- Number 
console.log(typeof scorevalue) // Decimal Number --- Number
console.log(typeof isloggedIn) // True/False --- Boolean
console.log(typeof outsidetemp) // Null --- object
console.log(typeof userEmail) // not set/Defined yet --- Undefined
console.log(typeof id) // Symbol --- Symbol
console.log(typeof anotherId) // Symbol --- Symbol
console.log(typeof bigNumber) // BigNumber end "n" --- bigint

/* Reference (Non primitive) DataType Outcomes */// Always Object

console.log(typeof heros) // Array --- Object
console.log(typeof myObj) // Object --- Object
console.log(typeof myFunction) // Funtion --- Function--Object


// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Premitative) and Heap (Non-Premitative)

let myYoutubeName = "Paarth kantharia";

let anothername = myYoutubeName;

anothername = "CodeWithPaarth";

console.log(myYoutubeName); // Paarth kantharia
console.log(anothername); // CodeWithPaarth

let userOne = {
    email: "userone@example.com",
    name: "User One"
};

let userTwo = userOne;

userTwo.email = "usertwo@example.com";

console.log(userOne.email); // usertwo@example.com
console.log(userTwo.email); // usertwo@example.com
