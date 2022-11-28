/**
 * 1. Sum of two numbers
 * takes two numbers
 * return their sum
 */
const sumOfTwoNumbers = function (num1, num2) {
	return (sum = num1 + num2);
};
console.log("********Number 1*******");
console.log(sumOfTwoNumbers(5, 5));

/**
 * 2. Convert minutes into seconds
 *
 */
const minutesToSeconds = (min) => min * 60;
console.log("********Number 2*******");
console.log(minutesToSeconds(3));

/**
 * 3. Return the next number
 */
function nextNumber(num) {
	return ++num;
}
console.log("********Number 3*******");
console.log(nextNumber(3));

/**
 * 4. Area of triangle
 * takes base and height
 * return area
 */
const areaOfTriangle = (base, height) => (base * height) / 2;
console.log("********Number 4*******");
console.log(areaOfTriangle(6, 3));

/**
 * 5. Convert Age to Days
 * takes age in years
 * return age in days
 */
const ageIntoDays = function (age) {
	return age * 365;
};
console.log("********Number 5*******");
console.log(ageIntoDays(65));

/**
 * 6. How much is true
 * returns a number of true values there are in an array
 */
let counter = 0;
const countTrue = function (arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === "true") {
			counter++;
		}
	}
	return counter;
};
console.log("********Number 6*******");
console.log(countTrue(["true", "true", "true", "false", "true", "false"]));

/**
 * 7. Redundant function
 * takes a string
 * returns a function that returns str
 */
function redudantThing(str) {
	const secondRedudant = function (str) {
		return str;
	};
	return secondRedudant(str);
}
console.log("********Number 7*******");
console.log(redudantThing("pass"));

/**
 * 38. Tile Teamwork
 * takes two parameters
 * returns boolean
 */

const possibleBonus = (a, b) => {
	let c = a;
	let d = b;
	for (i = 1; i <= 6; i++) {
		c += 1;
		if (c === d) {
			return true;
		}
	}
	return false;
};
console.log("********Number 8*******");
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));

/**
 * 9. Right shift by division
 *
 */
let c = 0;
const rightShift = function (a, b) {
	c = Math.floor(a / 2 ** b);
	return c;
};
console.log("********Number 9*******");
console.log(rightShift(80, 3));
console.log(rightShift(-24, 2));
console.log(rightShift(-5, 1));

/**
 * Perimeters with a catch
 * takes a number
 * returns perimeter of either circle or square
 */
let per = 0;
function perimeter(l, num) {
	if (l === "s") per = 4 * num;
	if (l === "c") per = 6.28 * num;
	return per;
}
console.log("********Number 10*******");
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));
