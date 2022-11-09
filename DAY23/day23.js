/**
 * LOOPING THROUGH ARRAYS
 *
 */

/**
 * Using for ... of array loop to reduce the complexity of for loops
 * Using for ... of array.entries() to get array elements as well as the indexes
 */

const students = ["Emmanuel", "Murairi"];
for (const student of students) console.log("STUDENT", student); //prints STUDENT Emmanuel and STUDENT Murairi

for (const student of students.entries()) console.log("STDN", student); // prints STDN [ 0, 'Emmanuel' ] and STDN [ 1, 'Murairi' ]

//Using destructuring, we can separate the indices from the values

for (const [index, student] of students.entries()) console.log(index, student);

/**
 * ENHANCED OBJECT LITERALS
 */

const type = "coursework";

const assignment = {
	id: 1,
	description: "It is just an assignment",
	due_date: "20/12/2022",
	type, //instead of retyping type:type
	submit(file) {
		console.log("SUBMITTED");
		return 1;
	}, // instead of writing submit : function(file){...}
};

console.log(assignment.submit());
/**
 * Will print
 * {
 *  id: 1,
 *  description: 'It is just an assignment',
 *  due_date: '20/12/2022',
 *  type: 'coursework'
 * }
 */

/**
 * OPTIONAL CHAINING
 * It helps  in checking whether a property exists before going down the chain to look for deeper properties.
 * As soon as it finds an undefined property, it stops checking and returns undefined
 */

// console.log(assignment.description.shortened.length) //throws an exception for trying to read properties of undefined
console.log(assignment.description?.shortened?.length); //returns undefined

//NOTE To use variable names as object keys we need to use the parentheses notation

const desc = "description";

console.log("WITH DOTS", assignment.desc); // prints undefined
console.log("WITH BRACKETS", assignment[desc]); // prints It is just an assignment

console.log("=================OBJECTS");

/**
 * LOOPING OVER OBJECTS
 * 1. Using Object.keys(object)
 * 2. Using Object.values(object)
 * 03. Using Object.entries(object)
 */

// for(const item of assignment) console.log(item) //Trows exception because object is not iterable
for (const item of Object.keys(assignment)) console.log(item); //prints object keys
for (const item of Object.values(assignment)) console.log(item); //print object values
for (const item of Object.entries(assignment)) console.log(item); //prints [key, value] array that we can, of course, destructure

console.log("==============SETS");
/**
 * SETS
 * Used to avoid duplicate values in array
 *
 * Syntax const set = new Set(array);
 * Methods
 * 1. has(element) to check if an element is part of the set
 * 2. add(element) to append an element to the set
 * 3. delete(element) to delete an element from the set
 * 4. clear() to clear the set
 */

const positions = ["Manager", "CEO", "Manager", "CEO", "CTO"];
const positionsSet = new Set(positions);
console.log(positionsSet); //prints { 'Manager', 'CEO', 'CTO' }

console.log(positionsSet.has("CEO")); // prints true
console.log("ADD", positionsSet.add("CBO")); // prints { 'Manager', 'CEO', 'CTO', 'CBO' }

console.log(positionsSet.delete("CBO"));
console.log("DELETE", positionsSet); // prints { 'Manager', 'CEO', 'CTO' }

positionsSet.clear();
console.log("CLEAR", positionsSet); // prints {}

console.log("==================MAPS");

/**
 * MAPS
 * Are objects with the flexibility of adding anything as a key(objects accept only strings)
 *
 * Syntax : new Map()
 * Methods :
 * 1. set(key, value) to add a key => value pair to the map
 * 2. get(key) to retrieve a value
 * 3. has(key) to check if a key exists
 * 4. delete(key) to delete  a key => value pair
 */

const map = new Map();

console.log(map); // prints Map(0) {}

console.log("SET", map.set("studentId", 1)); // prints Map(1) { 'studentId' => 1 }
console.log("GET", map.get("studentId")); // prints 1
console.log("HAS", map.has("studentId")); // prints true
console.log("DELETE", map.delete("studentId")); // prints true

console.log("AFTER DELETION", map); // prints Map(0) {}

/**
 *
 * CHALLENGE
 *
 * 1. Loop over the game.scored array and print each *player name with the goal number
 * example : Goal 1: Lewandowiski
 */
const game = {
	team1: "Bayern Munchen",
	team2: "Real Madrid",
	players: [
		[
			"Sadio",
			"Mane",
			"Kimmich",
			"Frederich",
			"Lewandowski",
			"Gnarbi",
			"Hummels",
			"And",
			"Another",
			"Player",
		],
		[
			"Benzema",
			"Vini",
			"Jr",
			"Modrich",
			"Some",
			"One",
			"Else",
			"And",
			"Another",
			"Player",
		],
	],

	score: "4:0",
	scored: ["Lewandowski", "Gnarbi", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

for (const [i, player] of game.scored.entries())
	console.log(`Goal ${i + 1} : ${player}`);
/**
 *
 * 2.Use the loop to calculate the odd average and log it.
 *
 *
 */
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
	avg += odd;
	avg = avg / odds.length;
}
console.log(avg);

/**
 * 3. Print the 3 odds in a nice formatted way
 *
 * Odd of victory Bayern Munich: 1.33
 * Odd of draw: 1.33
 * Odd of victory Borussia Dortmund: 6.5
 */

for (const [team, odd] of Object.entries(game.odds)) {
	const teamwin = team === "x" ? "draw" : `victory ${game[team]}`;
	console.log(`Odd ${teamwin} ${odd}`);
}
