//1, string length

let text = "kochiashvili";
console.log(text.length);

//2.accesing characters

console.log(text[0]);
console.log(text[4]);

//3.changing case

console.log(text.toUpperCase());
console.log(text.toLowerCase());

//4.trimming spaces

text = "   kochiashvili  ";
console.log(text.trim());

//5.slice(start,end)

text = "kochiashvili";
console.log(text.slice(0, 4));
console.log(text.slice(4));

//6. replace (searchValue, newValue)

let newText = "David enjoyes coding";
console.log(newText.replace("enjoyes", "likes"));

//7.includes (substring)

console.log(newText.includes("coding"));
console.log(newText.includes("driving"));

//8.split (separator)

let string = "veni, vidi, vici";

console.log(string.split(","));
console.log(string.split(""));
console.log(string.split(" "));

//9.concat(string1,string2...)

console.log(string.concat(" ", text));

//10.indexOf (substring)

console.log(string.indexOf("veni"));
console.log(string.indexOf("alpha"));

//11.startswith() and endswith()

console.log(string.startsWith("veni"));
console.log(string.endsWith("vici"));

//template literals

let quote = `${text}, ${string}`;

console.log(quote);

//multi-line strings

let attantion = `

    warning
    wanted alive or dead
    dangerous
    `;

console.log(attantion);

//expressions inside taemplate literals

let aa = "apple";
let bb = "cinnamon";
let appplePie = aa + bb;
console.log(`you put together ${aa} and ${bb} you will get ${appplePie}`);

//combining string method + template literals'

let david = "good";
let age = 36;

console.log(`david is ${david.toUpperCase()} he is ${age}`);
