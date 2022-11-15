/**
 *
 * 1. Create a function that filters out negative numbers
 * Takes an array and returns an array
 */

const filteredArray = [];

function filter(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			filteredArray.push(arr[i]);
		}
	}
}
filter([3, 4, -5, -6, -7, 0]);
console.log(filteredArray);

/**
 *
 * 2. Remove spaces found in a string
 *
 * return string when all spaces are removed
 */
function trim(str) {
	return str.replaceAll(" ", "");
}

console.log(trim("A cold Monday"));

/**
 *
 * 3. Return a boolean if a number is divisible by 10
 * return true or false
 */

function Boolean10(num) {
	return num % 10 === 0;
}
console.log(Boolean10(9));
console.log(Boolean10(20));

/**
 *
 * 4. Function that returns the number of vowels in a string
 * returns an integer
 */
let num = 0;
const vowels = ["a", "e",  "i", "o", "u"];
function NumberOfVowels(str) {
	for ([v] of str) {
		if (vowels.includes (v) ) {
			num++;
		}
	}

	return num;
}
console.log(NumberOfVowels("Scholastique"));
