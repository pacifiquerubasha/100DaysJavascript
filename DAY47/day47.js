/**
 * Prototype of array
 *
 * Common knowledge: arrays are not primitives. they are objects of a super object Array.
 *
 * Because they are objects of the Array prototype, they have access to lots of methods of that prototype. We have used a lot of this methods.
 *
 * This is possible because there is something called prototypal inheritance. This type of inheritance allows objects to inherit properties and methods of their parent objects all the way to the Object prototype.
 *
 *
 */

/**
 * es6 classes
 *
 * forget about java classes or maybe don't
 * a class is still a blueprint. in this class for creating objects
 * but in js, classes are more like special functions but you can only declare classes with class expression and class declaration.
 *
 * p.s. your favorite arrow does not work on classes :(
 */

/**
 * Class declaration
 * uses class keyword then the class name
 *
 * thing you should remember:
 *
 * classes can not be hoisted, meaning you can't can't call them in code that appear before the class definition else you will get a reference error
 * classes ar first class citizens because they are kinda functions
 * classes are executed in strict mode
 */

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

/**
 * Class expression
 *
 */

const Person2 = class {
	constructor(height, weight) {
		this.height = height;
		this.weight = weight;
	}
};
console.log(new Person("Ineza", 35));
console.log(new Person2(169, 55));

/**
 * the constructor you keep seeing is a method. it is special. it is used to create and initialize an object created with a class.
 * there can only be 1 special method called constructor else a sysntaxerror will be thrown
 */

/**
 * getters and setters
 *
 * use keyword 'get' to define a getter.
 * use keyword 'set' to define a setter
 */
const Kishi = {
	name: "Rubasha",
	age: 20,

	get getName() {
		return this.name;
	},

	set setName(otherName) {
		this.name = otherName;
	},
	get getOtherName() {
		return this.otherName;
	},
};

console.log(Kishi.getName);//Rubasha

Kishi.setName = "Pacifique";
console.log(Kishi.name); //Pacifique

/**
 *
 * Challenge
 */
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
	// this.accelerate = () => {
	// 	this.speed += 10;
	// 	console.log(this.speed);
	// };
	// this.brake = () => {
	// 	this.speed -= 5;
	// 	console.log(this.speed);
	// };
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(this.speed);
};
Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(this.speed);
};

const small_car = new Car("BMW", 120);

small_car.accelerate();
small_car.brake();
