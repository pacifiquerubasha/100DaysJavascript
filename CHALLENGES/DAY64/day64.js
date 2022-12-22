/**
 * Challenge
 */
/**
 * 7. How many days between two dates
 */
const getDays = function (date1, date2) {
	return (date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24;
};
console.log("Get Days Question");
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));

/**
 * 8.Length of a nested array
 */
const getLength = function (array) {
	return array.flat(Infinity).length;
};
console.log("Length of nested array Question");
console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

/**
 * 9. Swapping Cards
 */
function swapCards(n1, n2) {
	[num1, num2] = String(n1);
	[num3, num4] = String(n2);
	num1 <= num2 ? ([num1, num3] = [num3, num1]) : ([num2, num3] = [num3, num2]);
	return num1 + num2 > num3 + num4;
}
console.log("Swapping Cards Question");
console.log(swapCards(41, 98));
console.log(swapCards(12, 28));
console.log(swapCards(67, 53));
console.log(swapCards(77, 54));

/**
 * 10. Up the hill, down the hill
 */
const aveSpd = function (upTime, upRate, downRate) {
	downTime = (upTime * upRate) / downRate;
	let aveTime = upTime + downTime;
	let avespd = (upTime * upRate) / aveTime + (downTime * downRate) / aveTime;
	return avespd;
};
console.log("Average Speed Question");
console.log(aveSpd(18, 20, 60));
console.log(aveSpd(30, 10, 30));
console.log(aveSpd(30, 8, 24));

/**
 * 11. Check If the Brick Fits through the Hole
 */
const doesBrickFit = function (a, b, c, w, h) {
	return a * b <= w * h || a * c <= w * h || b * c <= w * h;
};
console.log("Brick Fits Question");
console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));
/**
 * 12. Bulglary Series (12): Get Vodka Bottle
 */

const getVodkaBottle = function (obj, num) {
	for (bottle in obj) {
		if (bottle.includes("Rammstein") && obj[bottle] === num) return bottle;
	}
};

/**
 * 13. Function Times 3
 */
const product = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

console.log("Function * 3 Question");
console.log(product(1, 2)(1, 1)(2, 3));
console.log(product(10, 2)(5, 0)(2, 3));
console.log(product(1, 2)(2, 3)(3, 4));
console.log(product(1, 2)(0, 3)(3, 0));
