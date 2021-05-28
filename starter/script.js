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
    console.log(2037 - this.birthYear);
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

const PersonProto = {
  clacAge() {
    // console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;

steven.clacAge();
// console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.clacAge();

// Lec 214 Coding challenge 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
ford.speedUS = 50;
// console.log(ford);

// Lec 215 Inheritance between classes (constructor fns)

const Person3 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person3.prototype.clacAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person3.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person3.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.clacAge();

// const human = new Person3('zumba', 59);
// console.log(human);

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person3);
// console.log(mike instanceof Object);

Student.prototype.constructor = Student;

// console.dir(Student.prototype.constructor);

// Lec 216 Coding Challenge 3

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const elon = new EV('Tesla', 120, 23);

// elon.accelerate();
// elon.brake();
// elon.accelerate();
// elon.chargeBattery(90);
// elon.accelerate();
// elon.accelerate();

// Lec 217 Inheritance btwn Classes (ES6 classes)

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  clacAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const martha = new StudentCl('Martha Jones', 2012); //(doesn't need constructor fn in student class)
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.clacAge();

// Lec 218

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.clacAge();

// Lec 219 Another class example
