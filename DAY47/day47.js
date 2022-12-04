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
