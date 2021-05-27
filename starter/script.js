'use strict';
// Lec 205  (constructor fns)
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create method inside a constructor fn
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
// console.log(Jonas);

// 1. New empty object {} is created
// 2. function is called, "this" keyword is set to newly created object {}
// 3. newly created object {} is linked to prototye
// 4. funtion automatically return the object {need not be empty}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);
// console.log(Jonas instanceof Person);

// Lec 206 (Prototypes)
// console.log(Person.prototype);
Person.prototype.clacAge = function () {
  // console.log(2037 - this.birthYear);
};
// Jonas.clacAge();
// matilda.clacAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.__proto__);

// console.log(Person.prototype.isPrototypeOf(jonas));
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [3, 2, 5, 3, 7, 2]; // new Array === []
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// Lec 209 coding challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// mercedes.brake();

// Lec 210 ES6 Classes
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  clacAge() {
    // console.log(2037 - this.birthYear);
  }
  greet() {
    // console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static methods
  static hey() {
    // console.log('Hello there 👋');
    // console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// console.log(PersonCl.prototype);
jessica.clacAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

// Lec 211 Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);

account.latest = 50;
// console.log(account.movements);

// Lec 212 Static Methods
const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const someOne = new Person2('yoyo', 45);
// hey methood is not in someOne object coz someOne is an instance

Person2.hey = function () {
  console.log('Hello there 👋');
  console.log(this);
};
// Person2.hey();

// Lec 213 3rd way of prototypal inheritance
