testArray = ["Toyota", "BMW", "Audi", "Tesla", "Mercedes", "Jeep", "Ford"];

// PART 1: for LOOP
console.log("---------------------------");
// Task 1: Print all element

function elements(testArray) {
  for (let index = 0; index < testArray.length; index++) {
    console.log(testArray[index]);
  }
}
elements(testArray);
console.log("---------------------------");
// // Task 2: Index + Value

function indexAndValue(testArray) {
  for (let i = 0; i < testArray.length; i++) {
    console.log(`car at index: ${i} - `, testArray[i]);
  }
}

indexAndValue(testArray);
console.log("---------------------------");
// Task 3: First and Last
function firstAndLast(testArray) {
  console.log("First:", testArray[0]);
  console.log("Last:", testArray[testArray.length - 1]);
}
firstAndLast(testArray);
console.log("---------------------------");
// PART 2: while LOOP (Strings)

testString = "Looping is very important";
console.log("---------------------------");
// Task 4: Loop through a string
function printCharacters(testString) {
  let i = 0;
  while (i < testString.length) {
    console.log("character:", testString[i]);
    i++;
  }
}
printCharacters(testString);

//PART 3: for LOOP + CONTROL FLOW
console.log("---------------------------");
// Task 5: Stop when found

function stopWhenFound(testArray, value) {
  for (let i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
    if (testArray[i] === value) {
      break;
    }
  }
}

stopWhenFound(testArray, "Jeep");

console.log("---------------------------");
//PART 4: for...of LOOP (Value Access)

// Task 6: Print values

function printValues(testArray) {
  for (let value of testArray) {
    console.log(value);
  }
}
printValues(testArray);

console.log("---------------------------");

// Task 7: Skip a value
function skipValue(testArray, skip) {
  for (let value of testArray) {
    if (value === skip) continue;
    console.log(value);
  }
}
skipValue(testArray, "Tesla");

console.log("----------11111-----------------");

// //PART 5: APPLYING LOGIC

// // Task 8a: Uppercase using for loop

function uppercaseWithFor(testArray) {
  let NewtestArray = [];
  for (let i = 0; i < testArray.length; i++) {
    NewtestArray.push(testArray[i].toUpperCase());
  }
  return NewtestArray;
}
console.log(uppercaseWithFor(testArray));

function uppercaseStrings(testArray) {
  let NewtestArray1 = [];
  for (let value of testArray) {
    NewtestArray1.push(value.toUpperCase());
  }
  return NewtestArray1;
}

console.log(uppercaseWithFor(testArray));

console.log("---------------------------");
// Task 9: Reverse order (no .reverse)

function printReverse(testArray) {
  for (let i = testArray.length - 1; i >= 0; i--) {
    console.log(testArray[i]);
  }
}
printReverse(testArray);
console.log("---------------------------");

// Task 10: Length checker
function printLongStrings(testArray) {
  for (let value of testArray) {
    if (value.length > 4) {
      console.log(value);
    }
  }
}

printLongStrings(testArray);
