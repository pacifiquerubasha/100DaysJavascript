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
		this.speedUS;
		console.log(this.speed);
	};
	accelerate = function () {
		this.speed += 10;
		this.speedUS;
		console.log(this.speed);
	};
	get SpeedUS() {
		return this.speed / 1.6;
	}
	set speedUs(speed) {
		this.speed = speed * 1.6;
	}
}
car1 = new Car("Ford", 120);
console.log(car1);
car1.brake();
car1.accelerate();
car1.brake();
car1.brake();
car1.accelerate();
