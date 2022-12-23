/**
 * 14. Numbers in strings
 */
const numInString = function (strings) {
	let array = [];
	strings.forEach((str) => {
		let strSplit = str.split("");
		for (s of strSplit) {
			if (Number.isInteger(s)) array.push(str);
		}
	});
	return array;
};
console.log(numInString(["m21", "you6", "m21"]));

/**
 * 15. Layers in a Rag
 */

countLayers = function (rug) {
	return new Set(rug).size;
};

/**
 * 16. Consecutive Sum Check
 */
const consecutiveSum = function (num) {
	return !Number.isInteger(Math.log2(n));
};
console.log();

/**
 * 17. Combinations
 */

const combinations = function (...args) {
	return args.filter((arg) => arg != 0).reduce((acc, num) => num * acc);
};
console.log(combinations(2, 3));
console.log(combinations(3, 7, 4));

/**
 * 18. RegEx: Character Classes X ⁠- \W
 */

/**
 * 18. Positive Dominant
 */

function isPositive(array) {
	let countPos = 0;
	let countNeg = 0;
	[...new Set(array)].forEach((num) => {
		if (num > 0) countPos++;
		if (num < 0) countNeg++;
	});

	return countPos > countNeg;
}
console.log(isPositive([1, 1, 1, 1, -3, -4]));
console.log(isPositive([5, 0]));
console.log(isPositive([0, -4, -1]));
