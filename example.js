// const benny = {
//   name: 'Benny',
//   age: 7,
//   speak() {
//     console.log(`${this.name} says bark bark!`);
//   },
// };

// const finley = {
//   name: 'Finley',
//   age: 7,
//   speak() {
//     console.log(`${this.name} says bark bark!`);
//   },
// };

// benny.speak();

// function Animal(name, age) {
//   this.name = name;
//   this.age = age;

//   this.speak = function () {
//     console.log(`${this.name} says bark bark!`);
//   };
// }

// Animal.prototype.describeAnimal = function () {
//   console.log(`name: ${this.name}, age: ${this.age}`);
// };

// const benny = new Animal('Benny', 7);
// // benny.describeAnimal = function () {
// //   console.log(`name: ${this.name}, age: ${this.age}`);
// // };
// const finley = new Animal('Finley', 4);
// benny.speak();
// benny.describeAnimal();
// console.log(benny.age);
// finley.describeAnimal();
// benny.speak();
// benny.describeAnimal();

class Animal {
  // favoriteToy = 'stuffy';

  constructor(name, age, favoriteToy = 'stuffy') {
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
  }

  speak() {
    console.log(`${this.name} says bark bark!`);
  }

  describeAnimal() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

const benny = new Animal('Benny', 7);
console.log(benny);
const finley = new Animal('Finley', 4, 'ball');
benny.speak();
benny.describeAnimal();
console.log(finley.favoriteToy);

finley.favoriteToy = 'kong';
console.log(finley.favoriteToy);
