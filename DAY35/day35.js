/**
 * Challenge
 *
 * Chaining
 */
const calcAverageHumanAge = (dogsAgeArray) =>
	dogsAgeArray
		.map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
		.filter((dogAge) => dogAge > 18)

		.reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
