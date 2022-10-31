/**
 * Difference between expression and statement
 * An expression is a combination of values and functions that are combined and interpreted by the compiler to create a new value.
 * A statement is a standalone unit that does not return anyting
 * Examples
 */
let num = 6; // This is a statement, it produces nothing

num > 100; // This is an expression because it will either produce true or false

num + 1220; // this will alse produce a number
if (num === 6) {
	//This also is a statement
	//more statements
}

/**
 * The conditional (ternary) Operator takes three operands:
 * A condition followed by a question mark (?)
 * An expression toexecute if the condition is true followed by a colon (:)
 * An expression to execute if the condition is false
 * Example which is also challenge 4:
 * To build a tip calculator
 * 1. Calculate the tip depending on the bill value
 * 15% if the bill value is between 50 and 300
 * 20% otherwise
 * 2. Print a string that contains the bill, tip, and final value
 * Testing Data: 275, 40, 430
 */

let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
	`The bill was (${bill}) , the tip was (${tip}), and the total value (${
		bill + tip
	})`
);

/**
 * Javascript Evolution
 */
