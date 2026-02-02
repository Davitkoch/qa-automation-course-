function greet() {
  const addition = 2 + 5;
  console.log(addition);
  console.log(addition);
}

greet(); // calling the function

// function with single parameter
function newGreet(name) {
  console.log(`Hello ${name} welcome to the class!`);
}

newGreet("davit");

// function with multiple parameters

function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

add("davit", " ", "kochi");

// just my formula for tax example.

let income = 10000;
let tax = 0.2;
const payment = 10;

function paymentammount(income, tax, payment) {
  console.log((income - income * tax) / payment);
}

paymentammount(income, tax, payment);

// default parammeters

function greetStudent(name = "student") {
  console.log(`Hello ${name}, welcome to javascript class`);
}

greetStudent("Davit");

//return velues

function addNewNumber(num1, num2) {
  return num1 + num2;
}

const functionResult = addNewNumber(3, 6);
console.log(functionResult);

//arrow function

const greet1 = (myName) => {
  console.log(`hello ${myName} `);
};
greet1("davit");
