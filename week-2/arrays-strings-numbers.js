let carBrand = ["bmw", "mercedes", "porsche", "vw", "audi"];

let numbers = (10, 20, 30, 40, 50);

let extraSpaceString = "   davit  kochiashvili   ";

let decimalNumber = 2.25;

// PART 1: ARRAYS (Car Brands)

//Task 1: Accessing & Properties

console.log(carBrand[0]); // first car
console.log(carBrand[4]); // last car
console.log(carBrand.length); // how many car brands are there

//Task 2: Updating Elements

carBrand[1] = "mazda"; // changed second car
carBrand[4] = "ford";

console.log(carBrand);

//Task 3: Mutator Methods

carBrand.push("honda"); // adding new car to the end

console.log(carBrand);

carBrand.pop(); // removes last element

console.log(carBrand);

carBrand.unshift("honda"); // adds new car in the begining

console.log(carBrand);

carBrand.shift(); // removes first car

console.log(carBrand);

carBrand.reverse(); // reverse the array

console.log(carBrand);

carBrand.sort(); // sort alphabeticaly

console.log(carBrand);

//Task 4: Finder Methods

console.log(carBrand.includes("toyota")); //checks if it includes toyota

console.log(carBrand.indexOf("bmw")); // index of BMW

console.log(carBrand.lastIndexOf("vw")); // last index of vw

//Task 5: Joiners

console.log(carBrand.join(" ")); // converts the car vrands into single string with no seperator

console.log(Array.isArray(carBrand)); // checks if cars veriable is array

let str = "engine";
let chars = Array.from(str); //Convert the word "ENGINE" into an array of characters
console.log(chars);

//PART 2: STRING MANIPULATION
//Task 6: Clean a String

console.log(extraSpaceString.trim()); // removes extra space from the string

console.log(extraSpaceString.length); // shows lenghh of the string

//✍ Task 7: Case & Access

console.log(extraSpaceString.toUpperCase()); // converts to upper case characters

console.log(extraSpaceString.toLowerCase()); // converts to lower case characters

extraSpaceString = "davit kochiashvili";
console.log(extraSpaceString[0]); // first caharacter
console.log(extraSpaceString[17]); //last character

// Task 8: Slice & Replace

console.log(extraSpaceString.slice(0, 5));
console.log(extraSpaceString.slice(6, 17));

console.log(extraSpaceString.replace("davit", "kochiashvili"));

//Task 9: Search Methods

console.log(extraSpaceString.includes("car")); // checks if it includes car

console.log(extraSpaceString.indexOf("davit")); // checks the index of davit

console.log(extraSpaceString.startsWith("d")); // checks if strings strats with d

console.log(extraSpaceString.endsWith("i")); // checks if string ends with i

//Task 10: Split & Concat

console.log(extraSpaceString.split(" ")); // split the string into 2 words
console.log(extraSpaceString.concat("")); // join two strings

//Task 11: Template Literals

let carBrand1 = "bmw";
const carYear = 2000;
let carAge = 2026 - carYear;

console.log(
  `hi, my vihicle is,${carBrand1} ${carYear} and is: ${carAge} years old`,
);

//🔹 PART 3: NUMBERS
// Task 12: Rounding

let num = 3.6;
console.log(Math.round(num)); // round nomal
console.log(Math.floor(num)); // round down
console.log(Math.ceil(num)); // round up
console.log(Math.trunc(num)); // remove decimal

//Task 13: Formatting

num = 24.3333;

console.log(num.toFixed(2)); // result will be fixed decimal and it will be string not number.

//🔁 Task 14: Conversions

num = "24.3333";

console.log(Number(num)); // converts string into number
console.log(parseInt(num)); // converts decimal to integer
console.log(parseFloat(num)); // converts decimal string ito float

//✅ Task 15: Checking

let value = "abc";

console.log(isNaN(value)); // checking value is not a number

console.log(Number.isInteger(num)); // checking number is an integer

// Task 16: Math Utilities

numbers = (1, 2, 3, 4, 5);

console.log(Math.abs(-20));

console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.max(1, 2, 3, 4, 5));

console.log(Math.pow(10, 10));

console.log(Math.sqrt(100));

// Task 17: Random Numbers

console.log(Math.random());

console.log(Math.floor(Math.random()) + 1);

//🚀 FINAL MINI CHALLENGE

let sentence = " I like nice cars ";
let newSentence = sentence.trim().toUpperCase().split(" ");

console.log(sentence.trim().toUpperCase().split(" "));

console.log(`there are ${newSentence.length} words`);
