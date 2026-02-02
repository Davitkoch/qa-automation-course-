//1 for loop

for (let i = 1; i <= 5; i++) {
  console.log("count:", i);
}

const fruits = ["apple", "banana", "orange"];

for (let Y = 0; Y < fruits.length; Y++) {
  console.log(`fruit at index ${Y}:`, fruits[Y]);
}

//2. while loop

let price = 10;

while (price <= 15) {
  price++;
  console.log("stop price:", price);
}

//3. for of

const letters = ["a", "b", "c", "d", "E"];
for (const letter of letters) {
  console.log(letter);
}

//4 looping over object

const person = {
  name: "alice",
  age: 25,
  isStudent: true,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
