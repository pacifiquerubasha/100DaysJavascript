/**
 * Challenge
 * Building a home thermometer
 * Given an array of temperatures and use them to calculate the temperature amplitude
 * Keep in mind that there might be a sensor error
 * Given array: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
 *
 * Temperature amplitude is the difference between the highest and the lowest temperature in the given array
 * Ignore the sensor error
 * 
 * Given two arrays, merge them
 */

const temp1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [1, 2, 3, 4, 5, 6, 7, 3, 8, 9, 10, 11, 12, 20];
const temperatures = temp1.concat(temp2);

let minValue = temperatures[0];
let maxValue = temperatures[0];
for (i = 1; i <= temperatures.length; i++) {
	if (typeof temperatures[i] !== "number") {
		continue;
	}
	if (temperatures[i] < minValue) {
		minValue = temperatures[i];
	}
	if (temperatures[i] > maxValue) {
		maxValue = temperatures[i];
	}
}
tempAmplitude = maxValue - minValue;
console.log(`The lowest temperature is ${minValue}`);
console.log(`The higest temperature is ${maxValue}`);
console.log(`The amplitude is ${tempAmplitude}`);
