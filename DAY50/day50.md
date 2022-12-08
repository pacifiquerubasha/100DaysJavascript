
# CHAINING METHODS

_Example_

```Javascript

class Person{
	constructor(name, lastName){
		this.name = name;
		this.lastName = lastName;

	}

	changeName(name){
		this.name = name;
	}

	changeLastName(lastName){
		this.lastName = lastName;
	}

}

```

Let's say we want to change both the name and lastname using one line of code containing a chaining of changeName and changeLastName.


```Javascript

	const cyrrusDEL = new Person('Cyrrus', 'Delta Labs');
	cyrrus.changeName('CDL').changeLastName('Coorp');

```
First failed try!
We cannot chain method on each other because the second method(`changeLastName`) will be called on undefined because the `changeName` does not return anything.

The solution will then be making sure the first method returns the current object.



```Javascript
	class Person{

		/* constructor here */

		changeName(name){
			this.name = name;
			return this;
		}
	
		/* changeLastName here */

	}

	/* Rest of code here */


	cyrrus.changeName('CDL').changeLastName('Coorp');

```

And this method chaining will work perfectly fine! 




# Challenge
 
 
 ```Javascript
class Car {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}
	brake = function () {
		this.speed -= 5;
		console.log(this.speed);
		return this;
	};
	accelerate() {
		this.speed += 10;
		console.log(this.speed);
	}
	get speedUS() {
		return this.speed / 1.6;
	}
	set speedUs(speed) {
		this.speed = speed * 1.6;
	}
}

class EVCL extends Car {
	#charge;
	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}
	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		return this;
	}

	accelerate() {
		this.speed += 20;
		this.#charge -= 1;

		console.log(
			`Tesla is going at ${this.speed} km/h with a charge of ${this.#charge}%`
		);
		return this;
	}
}

const rivian = new EVCL("Rivian", 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().chargeBattery(50).brake();

```