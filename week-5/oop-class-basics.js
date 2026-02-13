class Person {
  ////klasifikacia bluprint
  constructor(name, age) {
    ///////constructor kmnis strukturas blueprint, object builder for reuse not to create new object every time we can use this blueprint
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age} years old`);
  }
}

const david = new Person("David", 36); ///iyenebs im blueprints
const Tamara = new Person("Tamara", 38); ///iyenebs blueprints

console.log(david);
console.log(Tamara);

david.greet(); /// gamovidzaxet
Tamara.greet(); /// gamovidzaxet
///////////////////////////////////////////////////////////////////

class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  describe() {
    console.log(`this phone is a ${this.brand} ${this.model}`);
  }
  greetCustomer() {
    return "Hello";
  }
}

const phone = new Phone("Apple", "Iphone");
phone.describe();
const iphone = new Phone("apple", "17");
iphone.describe();
console.log(Phone.greetCustomer);
/////////////////////////////////

class Students {
  introduce() {
    console.log("hello students");
  }
  addition(number1, number2) {
    return number1 + number2;
  }
}

const student1 = new Students();
const student2 = new Students();

student1.introduce();
const value = student1.addition(5, 2);
console.log(value);
//////////////////////////////////////////////////
