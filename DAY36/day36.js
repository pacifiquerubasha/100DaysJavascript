/**
 *
 * Findindex Method
 *
 * returns the index of the first found element, not the element itself
 *
 */

const arr = [5, 12, 8, 160, 40];
const greaterNumber = (el) => el > 10;
console.log("******FINDINDEX******");
console.log(arr.findIndex(greaterNumber)); // print 1
console.log(arr.findIndex((el) => el > 100)); // print 3

/**
 *
 * Some and every method
 *
 * Some method tests whether at least one element in the array passes the test implemented in the callback function
 * returns true /false
 *
 * Every method tests if all the elements in the array passes the test in the callback function
 * returns true/ false
 *
 */

console.log("******SOME AND EVERY******");
console.log(arr.some((el) => el <= 0)); // prints false
console.log(arr.every((el) => el > 0)); // checks if all the elements of the array are positive, prints true

/**
 *
 * flat method
 *
 * flat method concantinates nested arrays into a new arrayup to the specified depth
 * depth paramenter specifies how deep the nested array should be flattened
 *
 */

const nestedArray = [
	[1, 2, 3],
	[4, 5, 6],
];
const doubleNested = [
	[1, 2, [3, 4]],
	[5, 6],
];

console.log("******FLAT******");
console.log(nestedArray.flat());
console.log(doubleNested.flat());
console.log(doubleNested.flat(2));

/**
 * flatmap method
 *
 * returns a new array formed by applying a callback function and the flattening the result by one level of depth
 * it is the same as a map() followed by a flat()
 *
 */

console.log("******FLATMAP******");
console.log(nestedArray.flatMap((num) => num));

/**
 *
 * Sorting array of integers with sort method
 *
 * sort method properly works on string
 * for it to work on integers, you have to pass in a callback function  that tells it how to sort the array
 *
 */

console.log("******SORTING******");
console.log(arr.sort()); // sorts the array as strings
console.log(arr.sort((a, b) => a - b));
