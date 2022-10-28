/** 
 * Comparing Mark and John's BMI
 * BMI = MASS/ HEIGHT**2 = mass/ (height * height)
 * 1. Create an object with properties for their full name, mass, and height (Mark Miller, John Smith)
 * 2. Method CalcBMI on each object to calculate BMI. Store the BMI value to a property, and return it from the method
 * 3. Log to the console who has the higher BMI, with the full name and respective BMI.
 * Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
 * Mark weights 78 kg and 1.69 m tall
 * John weights 92 kg and is 1.95 m tall
 */
const markDetails = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,

    calcBMI : function(){
        this.bmi = this.mass/ (this.height * this.height)
        return this.bmi

    }
}

const johnDetails = { 
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    

    calcBMI : function(){
        this.bmi = this.mass/ (this.height * this.height)
        return this.bmi
    }
}


if (markDetails.calcBMI() > johnDetails.calcBMI())
    console.log(`${markDetails.fullName}'s BMI (${markDetails.calcBMI()}) is higher than ${johnDetails.fullName}'s (${johnDetails.calcBMI()})`);

else console(`${johnDetails.fullName}'s BMI (${johnDetails.calcBMI()}) is higher tha ${markDetails.fullName}'s (${markDetails.calcBMI()})`);


/**
 * LOOPS
 * 
 * FOR LOOP
 * 
 * Structure
 * 
 * for(counter declaration, condition, update counter){
 *      CODE HERE
 * }
 * 
 * 
 * 
 */


for(let i=0; i<=10; i++){
    console.log(`Printing number ${i}`);
}


