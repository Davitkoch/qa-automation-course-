//

if (6 > 3) {
  console.log("this is good");
}

if ("hello") {
  console.log("this is a truthy value");
}

if (0) {
  console.log("this is a falsy value"); // never runs because it falsy
}

if (null) {
  console.log("this is a falsy value"); // never runs because it falsy
}

if ("") {
  console.log("this is a falsy value"); // never runs because it falsy
}
