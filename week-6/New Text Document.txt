//Task 1

const studentName: string = "davit";
const course: string = "typescript";

//Task 2

let age: number = 36;
let price: number = 100;

//task 3

let isStudent: boolean = true;
let isOnline: boolean = true;

// part 2 - task4

let randomValue: any = 40;
randomValue = "kochi";
randomValue = true;

// part 3 - tsk 5

let city = "Tbilisi";

//city = 43 //Type 'number' is not assignable to type 'string'

// part 4 task 6

let carBrands: string[] = ["bmw", "Ford", "mazda", "vw"];

// task 7

let scores: number[] = [5, 10, 15, 20, 25];

// part 5 task 8

let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Davit",
  age: 36,
  isAdmin: true,
};
//task 9

let product: { title: string; price: number; inStock: boolean } = {
  title: "bread",
  price: 10,
  inStock: true,
};

// task 10

let student1: { name: string; age: number; isActive: boolean } = {
  name: "john",
  age: 25,
  isActive: true,
};
let student2: { name: string; age: number; isActive: boolean } = {
  name: "bob",
  age: 25,
  isActive: true,
};
let student3: { name: string; age: number; isActive: boolean } = {
  name: "ben",
  age: 25,
  isActive: true,
};
let students: { name: string; age: number; isActive: boolean }[] = [
  student1,
  student2,
  student3,
];
console.log(students);

// //////////////////////////////
// let students4: { name: string; age: number; isActive: boolean }[] = [
//   {
//     name: "John",
//     age: 25,
//     isActive: true,
//   },
//   {
//     name: "Bob",
//     age: 22,
//     isActive: false,
//   },
//   {
//     name: "Ben",
//     age: 28,
//     isActive: true,
//   },
// ];

// console.log(students4);
