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
