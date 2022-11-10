/*
 * Challenge
 *
 * 1. Create an array of events of the different game events that happened
 * no duplicate
 *
 *
 */

const gameEvents = new Map([
	[17, "Goal"],
	[36, "Substitution"],
	[47, "Goal"],
	[61, "Substitution"],
	[67, "Yellow Card"],
	[69, "Red Card"],
	[76, "Goal"],
	[80, "Goal"],
]);

const gameEventsSet = [...new Set(gameEvents.values())];

console.log(gameEventsSet);

/**
 *
 * 2. Remove the event from game events log
 * Yellow card from minute 64
 */

gameEvents.delete(64);

/**
 *
 * 3. Print: An event happened, on average, every 9 minutes
 * A game has 90 minutes
 */

let average = 0;
const arr = [...gameEvents.keys()];
let sum = arr[arr.length - 1];
average = sum / arr.length;

console.log(`An event happened, on average, every ${average} minutes`);

/**
 * 4. Loop over the events and log them, marking whether it is in the first half or second
 *
 * [FIRST HALF] 17: Goal
 */

const gameEventsArray = [...gameEvents];
for (const [key, value] of gameEventsArray) {
	if (key <= 45) {
		console.log(`[FIRST HALF] ${key} : ${value}`);
	} else {
		console.log(`[SECOND HALF] ${key} : ${value}`);
	}
}
