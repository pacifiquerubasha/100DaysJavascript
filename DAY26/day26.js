/**
 *
 * Working with strings
 *
 * Getting a character of the string at a certain position
 * Getting length of string
 * Works just like arrays
 */
const name1 = "Rubasha";
const name2 = "Pacifique";
console.log(name2[3]);
console.log("Ineza"[3]);
console.log(name1.length);
console.log("Scholastique".length);

/**
 *
 * ========METHODS=======
 */
/**indexOf
 *
 * Used to get the first position where a certain character is at
 *
 * lastIndexOf
 *
 * Used to get the last position
 */
console.log(name1.indexOf("q"));
console.log(name1.lastIndexOf("a"));

/**
 *
 * slice method
 *
 * Used to extract parts of the string
 * Takes indexes as arguments which is where it starts extracting from
 * Can specify the index at which slice will begin and end to extract from
 * Returns substring
 */

console.log(name2.slice(2));
console.log(name2.slice(2, 5));

/**
 *
 * Changing the case of the string
 *
 * To lower case
 *
 * Use toLowerCase methods
 * Takes no arguments
 *
 * To upper case
 * Use toUpperCase
 * Takes no arguments
 */

console.log("kishinyambwe".toUpperCase());
console.log(name1.toLowerCase());

/**
 *
 * replace method
 * Takes two arguments: the first one that'll be replace. the second one that'll replace it
 */

console.log("Scholaa".replace("a", ""));
console.log("Scholaa".replaceAll("a", ""));

/**
 * inludes, starsWith, endsWith methods return booleans
 */

console.log(name1.includes("ash")); //true
console.log("ineza".endsWith("ze")); //false
console.log(name2.startsWith("Ki")); //false

/**
 *
 * Split method
 *
 * Split a string into multiple parts based on the divider string
 *
 * takes the divider string as argument
 *
 * returns an array of the split parts
 */

console.log("scholastique+ineza".split("+")); //prints ['scholastique', 'ineza']

/**
 * Padding
 * Adding characters to a string until a certain desired length is achieved
 *
 * Add characters to the begining of the string: use padStart method
 * take the desired length, and the character we need to add as arguments
 *
 * To add characters at the end of the string use: padEnd
 */

console.log("mukanoheri".padStart(30, "*").padEnd(40, "+"));

/**
 *
 * repeat method
 *
 * used to repeat the same string multiple times
 * takes number argument of how many times it'll repeat the string
 */

console.log("DO NOT HIDE ".repeat(6)); //Prints DO NOT HIDE 6 times

/**
 * CHALLENGE
 *
 * A program that receives a list of variables in snake_case and convert them in camelCase
 */

const convertToCamelCase = (arguments) => {
	for (const [index, word] of arguments.entries()) {
		const i = word.indexOf("_");
		const convertedString =
			word.slice(0, i) + word[i + 1].toUpperCase() + word.slice(i + 2);

		const paddedString = convertedString.padEnd(25, ' ');
		const emoji = "✅";

		console.log(`${paddedString} ${emoji.repeat(index + 1)}`);
	}
};

convertToCamelCase([
	"underscore_Case",
	"first_name",
	"some_variable",
	"calculate_age",
	"delayed_departure",
]);
