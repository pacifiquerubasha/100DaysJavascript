console.log(num);
let num = 5;
//ReferenceError

let num = 5;
console.log(num);
//Corrected

let yearOfBirt h= 2002;
let now = 2022;
let age = no - yearOfBirth;
//SyntaxError
let age= no - yearOfBirth;
//Corrected

yearOfBirth = 'Two Thousand and Two';
//Dynamic Typing

//The let declaration declares a block-scoped local variable
let fName = "Rubasha";
if (fName === "Rubasha") {
	let fName = "Pacifique";
	console.log(fName); //Expected output: Pacifique
}
console.log(fName); //Expected output: Rubasha

//The scope of var variable is the entire enclosing function
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2