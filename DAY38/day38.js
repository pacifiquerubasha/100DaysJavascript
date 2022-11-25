/**
 * Number and Math methods
 */
/**
 * Parsing with Number.parseInt(): Extracting integers from passed-in value
 * Parsing with Number.parseFloat(): Extracting floats from passed-in value
 * Extracting
 */
console.log(Number.parseInt("6rs", 10)); //6
console.log(Number.parseFloat("0.6rs", 10)); //0.6

/**
 * Number.isNAN()
 * checks if the value is not a number
 */
console.log(Number.isNaN(6)); // false

/**
 * Number.isFinite()
 * encouraged to use this for checking if a value is a number
 */
console.log(Number.isFinite(6)); // true

/**
 * Math.sqrt
 * returns the square root of the number that was passed in
 */
console.log(Math.sqrt(36)); // 6

/**
 * Math.max
 * returns the max value among the passed-in values
 *
 */
console.log(Math.max(1, 2, 3, 4, 5, 6, 8)); //8

/**
 * Math.min
 * does the opposite of Math.max
 */
console.log(Math.min(1, 2, 3, 4, 5, 6, 8)); //1

/**
 * Math.random
 * generates a bunch of random number
 */
console.log(Math.random() * 6); //generates values between 0 and 6 with decimals too but never 6

/**
 * Math.trunc
 * eliminates decimal points
 */
console.log(Math.trunc(61.0093)); //61

/**
 * Math.round
 * rounds the passed-in value
 */
console.log(Math.round(62.0093)); //62
console.log(Math.round(62.93)); //63

/**
 * Math.ceil
 * rounds up the passed-in value
 */
console.log(Math.ceil(64.0093)); //65
console.log(Math.ceil(64.93)); //65

/**
 * Math.floor
 * rounds down the passed-in value
 */
console.log(Math.floor(6.0093)); //6
console.log(Math.floor(6.93)); //6
