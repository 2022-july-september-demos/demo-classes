class Vehicle {
  constructor(owner, wheels, brand) {
    this.owner = owner;
    this.wheels = wheels;
    this.brand = brand;
  }
}

class Motorcycle extends Vehicle {
  constructor(owner, brand) {
    super(owner, 2, brand);
  }
}

class Honda extends Motorcycle {
  constructor(owner) {
    super(owner, 'Honda');
  }
}

class Car extends Vehicle {
  constructor(owner, brand) {
    super(owner, 4, brand);
  }
}

class Tesla extends Car {
  constructor(owner) {
    super(owner, 'Tesla');
  }
}

module.exports = { Vehicle, Motorcycle, Honda, Car, Tesla };
