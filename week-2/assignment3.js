//Part 1: Arithmetic Operators

//1. create two numbers:

let numX = 5;

let numY = 10;

console.log(numX, numY);

console.log(numX + numY); // Add

console.log(numX / numY); // Divide

console.log(numX * numY); // Multiply

console.log(numX - numY); // Subtract

console.log("-----------------------");

//2. Create a number and:Increase and Decrease  by 1

numX--; //numX is decrease by 1

numY++; //numY is increased by 1

console.log(numX); // prinst decreased number (4)
console.log(numY); // prints increased number (11)

console.log("-----------------------");

//3.Create two numbers and print: The remainder

console.log(numY % numX); // The remainder when the first is divided by the second

console.log("-----------------------");

//4. create a number and raise it to the power of 3

console.log(numX ** 3); // prints 4*4*4=64

console.log("----------2-------------");

//Part 2: Comparison Operators

//1.Create two variables:

let x = 5;
let y = "10";

console.log(x === y); // strict equal, outcome will be FALSE, because number is not equal to string

console.log("-----------------------");

//2.Create two different numbers

let a = 5;
let b = 10;

console.log(a > b); // false 5 is not greater than 10
console.log(a < b); // true 5 is less than 10

console.log("-----------------------");

//Create two values and check if they are not equal using !==.

console.log(x !== y); // strict not equal -- x=5 number is not equal to  y="10" string

console.log("-----------3------------");

// Part 3: Logical Operators

//1.1. Create two comparison expressions and combine them using `&&`.

let expression1 = 2 > 1; // true
let expression2 = 3 > 2; // true

console.log(expression1 && expression2); // will print TRUE, because both expressions are true

console.log("-----------------------");

console.log(expression1 || expression2); // will print true, becasue both expressions are true

console.log("-----------------------");

//3.Create a boolean variable and reverse

let skyIsBlue = true;

console.log(!skyIsBlue);

console.log("------------4-----------");

// Part 4: Truthy vs Falsy

//1.Create a variable with a value that is falsy

let variable = 0; //falsy

if (variable) {
  console.log("Falsy value detected"); //it will not run because 0 is considered as false in boolean context
}

let veriable1 = 1; //truthy

if (veriable1) {
  console.log("Truthy value detected"); // it will run because 1 is considered as true in a boolean context
}

let myName = "" || "David";
console.log(myName);

console.log("🧪 Challenge (Optional ⭐)");

let username = "Davit"; // variable
let sinedUP = false; //

if (username && sinedUP) {
  console.log("welcome back");
} else {
  console.log("please sign up");
}
