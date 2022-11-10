/**

 *
 * CHALLENGE
 *
 * 1. Loop over the game.scored array and print each *player name with the goal number
 * example : Goal 1: Lewandowiski
 */

console.log("========================CHALLENGE STARTS HERE");

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

let sum = 0;
for (const odd of Object.values(game.odds)) {
	sum += odd;
}

const avg = sum / odds.length;
console.log(avg);

/**
 * 3. Print the 3 odds in a nice formatted way
 *
 * Odd of victory Bayern Munich: 1.33
 * Odd of draw: 1.33
 * Odd of victory Real Madrid: 6.5
 */

for (const [team, odd] of Object.entries(game.odds)) {
	const teamwin = team === "x" ? "draw" : `victory ${game[team]}`;
	console.log(`Odd of ${teamwin} : ${odd}`);
}
>>>>>>> fec2236398c48eb864caab0ffdfb3696b7db1677
