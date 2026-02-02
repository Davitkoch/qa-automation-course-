// global scope

let globalVar = "I am global";
console.log(globalVar);

function printSomething() {
  globalVar = "hellooooo";
  if (14 > 2) {
    console.log();
  }
  console.log(globalVar);
}

printSomething();

//2 function scope

function greet() {
  let message = "hello from inside the functions!";
  console.log(message);
}

greet();
