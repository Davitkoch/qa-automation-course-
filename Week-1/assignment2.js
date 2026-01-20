//1.Identify the Data Type

// "Hello World"  -  String (Text data)
// 42  -  Number (NUmeric velue)
// true  -  Boollean (Logical velue)
// null  -  null (intentional absence)
// undefined  -  undefined (not assigned value)
// [1, 2, 3]  -  array (ordered collection of values)
// { name: "Alex", age: 20 } - Object (key-value pairs)

//2.Create Variables

let myFavoriteMovie = "Kingdom of Heaven"; //assigning variable
console.log(myFavoriteMovie); //prints the value of verible

let myAge = 36; //assigning variable
myAge = 37; // reassigning variable
console.log(myAge); // prints the value of variable

let iLikeJS = false; // assigning boolean value
iLikeJS = true; // reassigning boolean value
console.log("do i like JS?", iLikeJS); // prints bollean value WHETHER I LIKE JS?

let personWhoWon; // undefined variable, not assigned variable
console.log("who won?", personWhoWon); // the winner is undefined
personWhoWon = "David"; // later winner is defined
console.log("who won?", personWhoWon); // prints who won? david

let firstPlace = null; // no one won yet, game is still going
console.log("First place holder:", firstPlace); // prints  - wfirst place holde: null
firstPlace = "David"; // later first place holder is reviealed
console.log("first place holder:", firstPlace); // prints first place holder: David

//3.Primitive vs Non-Primitive

let a = "JS"; // primitive because it holds single velue (string)
let b = [10, 20]; // non-primitive because it holds multiple value (array)
let c = 100; // primitive because it holds single value (number)
let d = { city: "Paris" }; // non primitve because it holds multiple value (object)

//4.Modify the Value

let x = "Hello";
let y = x;
y = "Hi";

// A) Value of x is "Hello"
// B) this is primitive behavior, because strings are primitive, and they do not combine in something complex.

//5.Array

const newPerson = ["David", 36, "male", 1989, true];
console.log(newPerson);
const newCar = ["ford", 2025, "blue", "old", false];
console.log(newCar);
const rainbow = ["colors", 7, "red", "violet", true];
console.log(rainbow);

//console.log(newPerson, newCar, rainbow);

//6.Object
///////////////////////
const game = {
  name: "Best Game",
  year: 2025,
  platform: ["pc", "PS", "console"],
  type: "single player",
  intertaining: true,
};
console.log(game);
////////////////////
const food = {
  name: "Dumplings",
  origin: "China",
  quantityToEat: 20,
  madeOf: ["chicken", "flour", "spices"],
  delicious: true,
};
console.log(food);
////////////////////
const city = {
  name: "Tbilisi",
  country: "Georgia",
  yearFounded: 458,
  river: "yes",
  beutiful: true,
};
console.log(city);
///////////////////////
const sport = {
  name: "football",
  bestChampionship: "EPL",
  numberOfPlayers: [24, "two teams"],
  goodGame: true,
  origin: {
    place: "Europe",
    country: "England",
  },
};
console.log(sport);
//////////////////////
const movie = {
  name: "godfather",
  series: ["movie1", "movie2", "movie3"],
  director: "Copola",
  year: 1972,
  good: true,
};
console.log(movie);

//7. If Statement

let number = 1;
if (number > 0) {
  console.log("Positive number");
}
// number is positive (1) so if  number is more then 0 it is printing "POSITIVE NUMBER"

//8. if-else

let skyIsBlue = true; // Boolean veriable

if (skyIsBlue) {
  console.log("go outside"); // it is true so it will print "go outside"
} else {
  console.log("Do not go outside"); // it is not true so it will not print anything
}

// change the boolean

//let skyIsBlue = false;
//if (skyIsBlue) {
//  console.log("go outside"); // it is not true so it will not print
//} else {
//  console.log("Do not go outside"); // it is true so it will  print "do not go outside"
//}

//9 else if

let studentScore = 69;
if (studentScore > 90) {
  console.log("Grade A"); //will print Grade A
} else if (studentScore > 80) {
  console.log("Grade B"); //will print GRADE B
} else if (studentScore >= 70) {
  console.log("Grade C"); //will print GRADE C
} else {
  console.log("Fail"); //in any other case prints FAIL
}

//10. Switch Statement

let Question = "right answer"; // question and the answe

switch (Question) {
  case "right answer":
    console.log("true"); // if someone answers "RIGHT ANSWER" - will print "TRUE"
    break;
  case "wrong answer":
    console.log("false"); // if someone answers "wrong answer" - will print "false"
    break;
  case "another wrong answer":
    console.log("false again"); // if someone answers "another wrong answer" - will print "false again"
    break;
  default:
    console.log("try again"); // in case of all other answers it will print "try again"
}

//11. Challenge (Optional - No hint)

let number1 = 444;

if (number1 < 0) {
  console.log("negative number, we don't care!");
} else if (number1 < 10) {
  console.log("single digit number!");
} else if (number1 < 100) {
  console.log("double digit number!");
} else {
  console.log(
    "definitely not a negative, single or double digit number, so it is something else!",
  );
}
