/**
 * 
 */

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;

}


const ElectricCar = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;

}

ElectricCar.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

ElectricCar.prototype.accelerate = function(){
    this.speed+=20;
    this.charge -=1;

    console.log(`Tesla is going at ${this.speed} km/h with a charge of ${this.charge}%`)
}

const tesla = new ElectricCar('Tesla', 200, 50);

tesla.accelerate();

tesla.chargeBattery(80);

tesla.accelerate();