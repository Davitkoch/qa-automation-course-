// numbers exmaple

newNumbers = [2, 2, 3, 3, 4, 4];

let numbers = new Set(newNumbers);

console.log(numbers);

// strings example

let colors = ["green", "red", "blue", "green", "yellow", "green"];

const colorsSet = new Set(colors);

console.log(colorsSet);

let colrs1 = "green";
const colorsSet1 = new Set(colrs1);
console.log(colorsSet1);

let text = "kochiashvili davit";
const textNew = new Set(text);
console.log(textNew);

let colrs2 = "green";
console.log(colrs2);

/// adding into map

const mySecondMap = new Map();

mySecondMap.set(["name", "Richard"]);
mySecondMap.set(["age", "22"]);

console.log(mySecondMap);
