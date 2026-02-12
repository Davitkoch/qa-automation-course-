const numbers = [3, 6, 9, 12, 15];

let tripled = numbers.map((num) => num * 3);
console.log("map():", tripled);

evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("filter():", evenNumbers);

console.log(numbers);
