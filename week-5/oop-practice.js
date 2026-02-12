class Car {
  #fuelLevel = 100;
  static totalCars = 0;

  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
    Car.totalCars++;
  }

  drive() {
    this.#fuelLevel -= 10;
    this.#consumeFuel;
    return this.#fuelLevel;
  }

  refuel() {
    this.#fuelLevel = 100;
  }
  discount(amount) {
    this.price -= amount;
  }

  isExpensive(limit) {
    if (this.price > limit) {
      return "Expensive";
    } else {
      return "Affordable";
    }
  }

  getInfo() {
    return `${this.brand} costs ${this.price} and has ${this.#fuelLevel} left`;
  }

  get priceTag() {
    return "$" + this.price;
  }

  set updatePrice(newPrice) {
    if (newPrice < 0) {
      this.price = 0;
    } else {
      this.price = newPrice;
    }
  }
  #consumeFuel() {
    this.#fuelLevel -= 10;
  }
  showTotalCars() {
    return this.totalCars;
  }
}

class ElectircCar extends Car {
  constructor(batteryrange, price, brand) {
    super(price, brand);
    this.batteryrange = batteryrange;
  }
  drive() {
    this.batteryrange -= 20;
    return this.batteryrange;
  }
  charge() {
    this.batteryrange = 100;
    return this.batteryrange;
  }
}

const car = new Car("BMW", 80000);
car.drive();

console.log(car.getInfo());

car.refuel();
console.log(car.getInfo());

car.discount(10000);

console.log(car.getInfo());

console.log(car.isExpensive(30000));

console.log(car.priceTag);

car.updatePrice = 65000;
console.log(car.priceTag);

const car1 = new Car("Mercedes", 50000);
const car2 = new Car("Toyota", 50000);

console.log(Car.totalCars);

const newCar = new ElectircCar(100, 45000, "Tesla");
console.log(newCar.drive());

console.log(newCar.charge());

console.log(car.drive());

console.log("---------------------");

class Garage {
  constructor(garageName, array = [], price) {
    this.garageName = garageName;
    this.array = array;
    this.price = price;
  }
  addCar(newCars) {
    this.array.push(newCars);
  }
  listCars() {
    return this.array;
  }
  findExspensive(limit) {
    let result = [];
    for (let element of this.array) {
      if (element > limit) {
        result.push(element);
      }
    }
    return result;
  }
}

const carArray = new Garage();
