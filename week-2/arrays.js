//1. array is a data type that can store multiple elements.

let fruits = ["apple", "orange", "banana", "kiwi"];
console.log(fruits);

//2. accessing array elements - arrays start from 0
console.log(fruits[0]);

//3. updating array elements

fruits[1] = "mango";
console.log(fruits);

fruits[3] = "strawberry";
console.log(fruits);

//4. array proparties leangth - returens how many elements

console.log(fruits.length);

// methods that return new array //
//5.      .concat() - merges array

let moreFruits = ["peach", "watermelon"];
console.log(moreFruits);

let allfruits = fruits.concat(moreFruits);

console.log(allfruits);

//6.      .flat()  -flattens the arrays

let nestedNumbers = [
  [1, 2],
  [3, 4],
];
console.log(nestedNumbers);

let flatNumbers = nestedNumbers.flat();
console.log(flatNumbers);

//7.     .slice() - extracts a portion of an array
//first numbber is included second number is not

let numbers = [1, 2, 3, 4, 5];
let slicednNumbersArray = numbers.slice(1, 4);
console.log(slicednNumbersArray);

//    methods that change the original array

// 1. copying an array

let fruitsFromGroceryStore = ["kiwi", "banana", "Cherry"];

const copyFruitsFromGroceryStore = [...fruitsFromGroceryStore];

console.log(fruitsFromGroceryStore);
console.log(copyFruitsFromGroceryStore);

//2. push() - add a new element into array

copyFruitsFromGroceryStore.push("coconut");

console.log(copyFruitsFromGroceryStore);

// 3. pop() - removes last element from the array

copyFruitsFromGroceryStore.pop();
console.log(copyFruitsFromGroceryStore);

//4.        .unshift() - adds the element in the beggining of the array

copyFruitsFromGroceryStore.unshift("grape");
console.log(copyFruitsFromGroceryStore);

//5. .shift removes first element from array

copyFruitsFromGroceryStore.shift();
console.log(copyFruitsFromGroceryStore);

//6 .reverse() - revereses an array

console.log(copyFruitsFromGroceryStore);
console.log(copyFruitsFromGroceryStore.reverse());

// sort

let string = ["a", "c", "z", "b"];
console.log(string.sort());

// methods that find an element in the array

//1.  indexOf() - returns the index of specific element inside an array
//first match
let favoriteColors = ["black", "white", "red", "blue"];
console.log(favoriteColors.indexOf("red"));

//2.  lastIndexOf() - returns the last index of specific element inside the array. always the last

favoriteColors = ["black", "white", "red", "blue", "red"];
console.log(favoriteColors.lastIndexOf("red"));

//3 at() - getss an element at a specific position

console.log(favoriteColors.at(3));

//4.     .includes() - checks id an elements exsits inside an array

console.log(favoriteColors.includes("white"));
console.log(favoriteColors.includes("orange"));

//    Joiners and converters

//1.     .join() - converts an array into string

let David = ["apple", "banana", "kiwi"];
let Davidstring = David.join();
console.log(Davidstring);
Davidstring = David.join(" ");
console.log(Davidstring);
Davidstring = David.join("$");
console.log(Davidstring);

//2.    Array.from() - creates sa new array from string

let str = "hello";
let chars = Array.from(str);
console.log(chars);

//3.  Array.isArray() - checks if a value is an array

let nycNumbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(nycNumbers));

nycNumbers = 1;
console.log(Array.isArray(nycNumbers));
