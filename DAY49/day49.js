/**
 * Inheritance in ES6 Classes
 *
 * Uses extends and super kewords to implement inheritance
 * super() method in the constructor is used to access all parent’s properties and methods that are used by the derived class
 */

const Person = class {
	name;
	constructor(name) {
		this.name = name;
	}
	hey() {
		console.log(`Hey there. I'm ${this.name}`);
	}
};

class PoorPerson extends Person {
	constructor(name, net) {
		super(name);
		this.net = net;
	}
	hey() {
		console.log(`Hey there. I'm ${this.name} and my networth is ${this.net}`);
	}
}
let XY = new PoorPerson("xy", 0.5);
console.log(XY);
XY.hey();

/**
 *
 *Inheritance between classes: Object.create
 */
const XX = Object.create(Person);
const RichProto = Object.create(Person); // RichProto inherits from Person
const XZ = Object.create(RichProto); //XZ inherits from RichProto and from Person

/**
 *
 * Public, Private properties and methods
 *
 * class fields and methods are public by default
 *
 * private fields and methods are created using #
 */

class RichPeople {
	#privatename;
	#privatenet;

	#privateMethod() {}
}

/**
 *
 * Challenge
 */

const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

const ElectricCar = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
};

ElectricCar.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
	this.speed += 20;
	this.charge -= 1;

	console.log(
		`Tesla is going at ${this.speed} km/h with a charge of ${this.charge}%`
	);
};

const tesla = new ElectricCar("Tesla", 200, 50);

tesla.accelerate();

tesla.chargeBattery(80);

tesla.accelerate();
