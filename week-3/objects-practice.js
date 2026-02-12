// Task 1: Object Creation
const person = {
  name: "Davit",
  lastName: "Kochiashvili",
  yearOfBirth: 1989,
  ethnicity: "Georgian",
  country: {
    name: "Georgia",
    city: "Tbilisi",
  },

  // Task 2: Description Method
  description: function () {
    return `${this.name} ${this.lastName} was born in ${this.yearOfBirth}, is ${this.ethnicity}, and lives in ${this.country.city}, ${this.country.name}.`;
  },
  // Task 3: Update Method
  updateLastName: function (Koch) {
    this.lastName = Koch;
    return this.lastName;
  },
  // Task 4: Calculation Method
  getAge: function (currentYear) {
    return currentYear - this.yearOfBirth;
  },
};

//Task 5: Dot vs Bracket
const theName = person.name;
const year = person.yearOfBirth;

const lastName = person["lastName"];
const ethnicity = person["ethnicity"];

console.log(theName, year);
console.log(lastName, ethnicity);

//Task 6: Property Checker

function hasProperty(object, property) {
  return property in object;
}

console.log(hasProperty(person, "ethnicity"));
console.log(hasProperty(person, "hobby"));

//Task 7: Method Calls

let descriptionReturn = person.description();
let updatedLastNameReturn = person.updateLastName("Koch");
let ageReturn = person.getAge(2026);

console.log(descriptionReturn);
console.log(updatedLastNameReturn);
console.log(ageReturn);

// PART 5: PROPERTY MANIPULATION
// Task 8: Add a New Property (without using a method)
person.occupation = "Developer";
console.log(person);

// Task 9: Update a Property Directly (not through a method)
person.hasAcar = "Ford";
console.log(person.hasAcar);

// Task 10: Delete a Property
delete person.hasAcar;
console.log(person);

//ask 11: List Object Keys

const keys = Object.keys(person);
console.log("Object.keys:", keys);
console.log("Does keys include 'lastName'?", keys.includes("lastName"));

// Task 12: List Object Values

const values = Object.values(person);
console.log("Object.values:", values);
console.log("Does values include 'Davit'?", values.includes("Davit"));

//Task 13: List Object Entries

const entries = Object.entries(person);
console.log("Object.entries:", entries);

const flattenedEntries = entries.flat();
console.log("Flattened entries:", flattenedEntries);

////example

let myMovie = {
  title: "godfather",
  year: 1990,
  actors: ["brando", "pacino"],
  movieTitle() {
    return `The movie name is ${this.title} and the actors are ${this.actors}`;
  },
};

console.log(myMovie.movieTitle());

mocieTitle();
