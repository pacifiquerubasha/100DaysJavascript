/**
 * STATIC FUNCTIONS
 * Allow us to call them without creating an instance of the class(prototype)
 */


class Person{
	constructor(name = "PK", birthdate = 1500){
		this.name = name;
		this.birthdate = birthdate;
	}

	calcAge(){
		return new Date().getFullYear - this.birthdate;
	}

	static hey(){
		console.log(`Hey there. Person class here`)
	}
}

Person.bye = ()=>{
	console.log("SEE YOU SOON")
}

Person.hey();	//prints Hey there. Person class here
Person.bye()	//prints SEE YOU SOON



/**
 * OBJECT.CREATE
 * Creating a new object from a prototype
 */


 /**  
 * @param {*} name 
 */

Person.prototype.updateName = function(name){
	this.name = name
}


console.log("PRO", Person.prototype)				//prints PRO { updateName: [Function (anonymous)] }

class Student{
	constructor(name, school){
		this.name = name;
		this.school = school;
	}
}

console.log("STUDENT ", Student.prototype)

const NewStudent = Object.create(Person);

console.log("STUDENT OBJ", NewStudent.prototype)	// prints STUDENT OBJ { updateName: [Function (anonymous)] }



/**
 * INTER CLASS INHERITANCE
 * 
 */

const Human = function(name, birthdate){
	this.name = name;
	this.birthdate = birthdate;

}

Human.prototype.introduce = function(){
	console.log(`Human ${this.name} born in ${this.birthdate}`)
}

const Teacher = function(name, birthdate, degree){	
	Human.call(this, name, birthdate)
	this.degree = degree

}

console.log(Teacher.prototype);							//Empty at this stage

Teacher.prototype = Object.create(Human.prototype)		//bind the prototype of teacher to that of Human to be able to access Human methods

console.log("TEACHER PROTOTYPE", Teacher.prototype);	//  Human {} 

const allano = new Teacher("Allano", 1956, "SOME HCI")

allano.introduce();

console.log("ALLANO INSTANCE OF", allano instanceof Teacher && allano instanceof Human && allano instanceof Object) //true
console.log("TEACHER CONST BEFORE", Teacher.prototype.constructor)

Teacher.prototype.constructor = Teacher;

console.log("TEACHER CONST AFTER", Teacher.prototype.constructor)
console.log("ALLANO PROTO AFTER", allano.__proto__)





/**
 * Challenge
 *
 */


class Car {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}
	brake = function () {
		this.speed -= 5;
		console.log(this.speed);
	};
	accelerate = function () {
		this.speed += 10;
		console.log(this.speed);
	};
	get speedUS() {
		return this.speed / 1.6;
	}
	set speedUs(speed) {
		this.speed = speed * 1.6;
	}
}
car1 = new Car("Ford", 120);
console.log(car1.speedUS);

car1.speedUs = 80;
console.log(car1);
