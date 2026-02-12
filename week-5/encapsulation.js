class Car {
  drive() {
    console.log("driving...");
  }
}

class SportCar extends Car {
  turboBoost() {
    console.log("turbo boost activated");
  }
}

const ferrari = new SportCar();
ferrari.drive();
ferrari.turboBoost();

////////////////////////

class Animal {
  speak() {
    console.log("animal Makes a sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("bark");
  }
}

const cat = new Cat();
cat.speak();
const dog = new Dog();
dog.speak();
