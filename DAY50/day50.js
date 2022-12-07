/**
 * Challenge
 */
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
