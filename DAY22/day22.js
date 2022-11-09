/**
 *
 * Rest pattern and rest parameters
 *
 * ===========REST PATTERN===========
 *
 *
 * Rest pattern is used to collect multiple elements and put them in an array. Which is the opposite of what the spread operator does.
 *
 * Rest pattern has the same synthax asthe spread operator except that for rest ... is used on the left-hand side of =
 */

/**
 * 1. Rest pattern in arrays
 *
 */

const arr = [1, 2, ...[3, 4]]; //spread operator

const [x, y, ...others] = [1, 2, 3, 4, 5]; //rest pattern
console.log(x, y, others); // prints 1 2 [3,4,5]

/**
 * Rest pattern in objects
 */
const rubasha = {
	name: "Pacifique",
	age: 20,
	hobby1: "coding",
	hobby2: "eating",
};

const { name, ...about } = rubasha;
console.log(about); //prints rubasha except name
/**
 * ===========REST PARAMETERS============
 *
 * the rest parameter synthax allows a function to accept an indefinite number of arguments as an array
 */

function sum(...args) {
	let total = 0;
	for (let i = 0; i < args.length; i++) {
		total += args[i];
	}
	console.log(total);
}
sum(2, 3, 4, 5);
sum(4, 5, 6, 7, 8, 0);

/**
 * ==========SHORT CIRCUITING OPERATORS=========
 *
 * 1. AND (&&) short circuit
 *
 * The expression is evaluated until there is a false result
 */

console.log(false && true && 1 && 0); //prints false only because it is a falsy value and the evaluating stops there
console.log(6, "yes", "", undefined); //prints 6, yes, undefined(falsy value)

/**
 *
 * 2. OR (||) short circuiting
 *
 * The opposite of &&
 *
 * Evaluates until there's a true result
 */

console.log(6, "yes", "", undefined); //prints 6
console.log(false && true && 1 && 0); //prints false, true

/**
 * ===========Nullish Coalescing Operator(??)==========
 *
 * This is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined
 * Otherwise returns its left-hand side operand
 */
const num = null ?? 6;
console.log(num); // prints 6

const num6 = 0 ?? 6;
console.log(num6); //prints 0

/**
 *
 * Nullish Coalescing assignment
 *
 * (x ??= y): ??= operator assigns if x is nullish (null or undefined)
 */

const a = {
	num1: 20,
};
let num2;
a.num1 ??= 8;
num2 ??= 10;
console.log(a.num1); // prints 20
console.log(num2); //prints 10

/**
 *
 * Challenge
 * 1. Create one player array for each team
 *
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

//PLAYERS FROM THE GAME
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

//TEAM 1 PLAYERS
const [gk1, ...fieldPlayers1] = players1;
const team1Subtitutes = ["Munir", "DaPlayer", "DaKeeper"];

//TEAM 2 PLAYERS
const [gk2, ...fieldPlayers2] = players2;
const team2Subtitutes = ["Rudiger", "Asensio", "Rodrigo"];

//LIST OF ALL STARTER PLAYERS
const allPlayers = [...players1, ...players2];

//FINAL LIST OF PLAYERS
const player1Final = [...players1, ...team1Subtitutes];
const player2Final = [...players2, ...team2Subtitutes];

const allPlayersFinal = [...player1Final, ...player2Final];

const { team1Odd, draw, team2Odd } = game.odds;

const printGoals = (...players) => {
	for (const player of players) {
		if (game.scored.includes(player)) {
			let goals = 0;
			for (let score of game.scored) {
				score === player && goals++;
			}

			console.log(player, goals);
		}
	}

	console.log(`Total players passed: ${players.length}`);
};

printGoals(...allPlayersFinal);

const team1Winning = game.odds.team1 < game.odds.team2 && "Bayern Munich";
const team2Winning = !team1Winning && "Real Madrid";

console.log("TEAM1 WINNING", team1Winning);
console.log("TEAM2 WINNING", team2Winning);
