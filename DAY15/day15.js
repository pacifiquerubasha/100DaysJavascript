
/**
 * Biweekly challenge 1 PACIFIQUE
 */
//CHALLENGE1

/**
 * @function printEvenNumbers
 * @description Prints even numbers between 0 and 10
 * @returns array of even numbers
 */
function printEvenNumbers(){
    const evenNumbers = [];
    for(let i = 0; i<=10; i++){
        if(i % 2 === 0) evenNumbers.push(i);
    }

    return evenNumbers
}

// console.log(printEvenNumbers());

//CHALLENGE2

/**
 * @function multiplicationTable
 * @description Prints the multiplication table from 0 to 10
 */
function multiplicationTable(){
    for(let table = 0; table <= 10; table ++){
        console.log("Table ",  table)
        for(let row = 0; row <= 10; row++){
            console.table(`${table} * ${row} = ${table * row}`)            
        }
    }
}

// multiplicationTable();


//CHALLENGE3

/**
 * @function unitConverter
 * @description Receives a length in km then converts to miles
 * @param {*} length 
 * @returns the length in miles
 */
function unitConverter(length){
    return length * 0.621371;
}


//CHALLENGE4

/**
 * @function sumArrayElements
 * @description Calculates sum of array elements
 * @param {*} arr 
 * @returns sum of array elements
 */
function sumArrayElements(arr){
    let sum = 0;
    for(let item = 0; item <= arr.length-1; item++){
        sum+=arr[item]
    }
    return sum;
}

console.log(sumArrayElements([1, 2, 3]));


//CHALLENGE5

/**
 * @function reverseArray
 * @description Takes an array then returns its reverse
 * @param {*} arr 
 * @returns the reversed array
 */
function reverseArray(arr){
    let reversedArray = [];
    for(let item = arr.length-1; item >= 0; item--){
        reversedArray.push(arr[item]);
    }

    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

// const array = [1, 100, 5, 6, 3, 50]
// console.log(array.sort());

function sortArray(arr){

    const sortedArray = arr.sort((a, b) => a - b);

    console.log(sortedArray)
}

sortArray([3, 5, 2, 100, 7, 1, 6])

/**
 * Biweekly challenge SCHOLASTIQUE
 *
 * Print all even numbers between 0 and 10
 *
 */

function EvenNumbers() {
	let num = [];
	for (i = 0; i <= 10; i++) {
		if (i % 2 == 0) {
			// console.log(i);
			num.push(i);
		}
	}
	console.log(`The even numbers between 0 and 10 are: ${num}`);
}
EvenNumbers();
/**
 * A table containing multiplication table from 1 throught 10
 * @
 */

function calcMultiply() {
	for (let i = 1; i <= 10; i++) {
		console.log(`Multiplication Table of ${i}:`);
		for (let j = 1; j <= 10; j++) {
			answer = j * i;
			console.log(`${j} * ${i} = ${answer}`);
		}
	}
}
calcMultiply();

/**
 * Length Converter
 * Convert from kilometers to miles
 *
 * @function lengthConverter
 * @parameter kilo
 *
 */
let convertMile = 0.621371;
function lengthConverter(kilo) {
	mile = kilo * convertMile;
	return mile;
}
console.log(`Converted Value: ${lengthConverter(10)} miles`);

/**
 * sum of numbers in an array
 *
 */
let num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CalcSum = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += Number(arr[i]);
	}
	return sum;
};
console.log(`The sum of the numbers in the array is: ${CalcSum(num6)}`);

/**
 *
 * Function that reverses an array
 *
 */
let num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ReverseArray = (arr) => {
	const temp = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		temp.push(arr[i]);
	}
	return temp;
};

console.log(`The reversed array is: ${ReverseArray(num5)}`);

/**
 * Sorting an array from the lowest to the highest
 *
 */

const temperatures = [
	20, 2, 3, 4, 5, 20, 7, 3, 8, 30, 9, 10, 11, 12, 1, 100, 2002,
];

let sorted = [];
let index = -1;

for (i = 0; i < temperatures.length; i++) {
    index = i;
	for (j = i; j <= temperatures.length - 1; j++) {
		if (temperatures[j] < temperatures[index]) {
			index = j;
		}
	}

	temp = temperatures[i];
	temperatures[i] = temperatures[index];
	temperatures[index] = temp;
}

for (let i = 0; i < temperatures.length; i++) {
	sorted.push(temperatures[i]);
}
console.log("SORTED", temperatures);

