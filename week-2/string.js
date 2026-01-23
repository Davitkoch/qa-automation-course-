// lower case upper case

let greeting = "Hello World";

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

//     .trim()  removes extra space

let space = "   test ";
console.log(space.trim());

////  .slice (start, and)

let myName = "kochiashvili";

console.log(myName.slice(0, 4));

// replace

///   .replace()

let text = "i like cats";

console.log(text.replace("cats", "dogs"));

// .includes

let file = "report.pdf";
console.log(file.startsWith("report"));
console.log(file.endsWith(".pdf"));

const studentName = "Tamara";
console.log(`${studentName} loves coding`);
