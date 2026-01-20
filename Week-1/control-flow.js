let age = 20;

// age > 18 >>> true
if (age > 18) {
  console.log(age, "hey, you are at an age you can go to college!!!");
}
if (age < 18) {
  console.log(age, "too young");
}
console.log(age);

let score = 95;

if (score >= 90) {
  console.log("grade A");
} else if (score >= 80) {
  console.log("grade B");
}

// swich statement

let day = 8;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Not a good day");
}

let Question = "answer good";

switch (Question) {
  case "answer good":
    console.log("true");
    break;
  case "answer wrong":
    console.log("false");
    break;
  default:
    console.log("aaaa");
}
