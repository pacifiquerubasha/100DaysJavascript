/**Reference error occurs when a variable that have not been initialized in the current scope is referenced.
 * In the example below, we are logging the variable 'num' before initializing it, and this will result into a reference error.
 * Reference error is fixed by correctly defining the variable and calling it in the right scope.
 */
console.log(num);
let num = 5;

num = 5;
console.log(num);
//Corrected

/**Synthax errors are mistakes in using the language. For instance: missing a comma, or misspelling a variable name.
 * In the example shown below, a synthax error will be flagged because the viariable 'now' has been spelled incorrectly.
 */

let yearOfBirth = 2002;
let now = 2022;
let age = no - yearOfBirth; //SyntaxError
age = now - yearOfBirth; //Corrected

/**In Javascript, it is not necessary to explicitly declare variables before they're used. And this allows variables to be dynamically changed.
 * In the example below, we are assigning a string value "Two Thousand and Two" to "yearOfBirth" that had a number value 2002 on the previous line and an error will not occur. This is called Dynamic typing.
 */
yearOfBirth = "Two Thousand and Two";

/**The let declaration declares a block-scoped local variable*/

let fName = "Rubasha";
if (fName === "Rubasha") {
	let fName = "Pacifique";
	console.log(fName); //Expected output: Pacifique
}
console.log(fName); //Expected output: Rubasha

/**The scope of var variable is the entire enclosing function*/
var a = 1;
var b = 2;

if (a === 1) {
	var a = 11; // the scope is global
	let b = 22; // the scope is inside the if-block

	console.log(a); // 11
	console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
