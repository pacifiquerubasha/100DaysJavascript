//Challenge

/*1. Seven Boom
 */

const sevenBoom = function (array) {
	return array.toString().includes(7) ? "Boom!" : "there is no 7 in the array";
};
console.log("Seven Boom Question");
console.log(sevenBoom([1, 2, 3, 4, 5, 74]));
console.log(sevenBoom([1, 2, 3, 1007]));

/**
 * 2. Tower of Hanoi
 */

const towerOfHanoi = function (nbrOfDisks) {
	return Math.pow(2, nbrOfDisks) - 1;
};
console.log("Tower Of Hanoi Question");
console.log(towerOfHanoi(3));
console.log(towerOfHanoi(5));
console.log(towerOfHanoi(0));

/**
 * 3. Number of Boomerangs
 */
const countBoomerangs = function (array) {
	let array1 = [];
	let array2 = [];
	for (i = 0; i < array.length; i++) {
		if (array[i] === array[i + 2] && array[i + 1] !== array[i]) {
			array1.push(array[i]);
			array1.push(array[i + 1]);
			array1.push(array[i + 2]);
			array2.push(array1);
		}
	}
	return array2.length;
};
console.log("Number of Boomerangs Question");
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));

/**
 * 4. Convert zero and one to 1 and 0
 */

const textToNumber = (string) => {
	str = string
		.replace(/zero/gi, "0")
		.replace(/one/gi, "1")
		.replace(/[^0-1]/g, "");

	return str.slice(0, Math.floor(str.length / 8) * 8);
};
console.log("Zero and one Question");
console.log(textToNumber("zero one zero one zero one zero one"));
console.log(textToNumber("Zero one zero one zero one zero one one two"));

/**
 * 5. Instances of the Fibonacci Sequence
 */

function fibbonacciSeq(number) {
	let array = [];
	let a = 0;
	let b = 1;
	let c;
	if (number === 0) return array;
	if (!number) return undefined;
	for (i = 0; i < number; i++) {
		array.push(a);
		c = a + b;
		a = b;
		b = c;
	}
	return array;
}
console.log("Fibbonacci Sequence Question");
console.log(fibbonacciSeq(4));
console.log(fibbonacciSeq(0));
console.log(fibbonacciSeq(7));

/**
 * 6. Oddish vs. Evenish
 */
const oddishOrEvenish = function (num) {
	let numbers = String(num);
	let sum = 0;
	[...numbers].forEach((number) => (sum += Number(number)));
	result = sum % 2 === 0 ? "Evenish" : "Oddish";
	return result;
};
console.log("Oddish and Evenish Question");
console.log(oddishOrEvenish(431));
console.log(oddishOrEvenish(3731));
