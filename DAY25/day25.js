 /* 
 * Challenge
 * 
 * 1. Create an array of events of the different game events that happened
 * no duplicate
 * 
 * 
 */


const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substutution'],
    [67, 'Yellow Card'],
    [69, 'Red Card'],
    [76, 'Goal'],
    [80, 'Goal']
]);

/**
 * 
 * 2. Remove the event from game events log
 * Yellow card from minute 64
 */

gameEvents.delete(67);
console.log(gameEvents)


/**
 * 
 * 3. Print: AN event happened, on average, every 9 minutes
 * A game has 90 minutes
 */

let spansArray = [];
let previous = 0;
for(const [key] of gameEvents.entries()){
    spansArray.push(key-previous);

    previous = key

    // console.log("SPAN", spansArray)

}

console.log("SPANS", spansArray)

let sum = 0;
for(const span of spansArray){
    sum+=span;
}

console.log(`An event happened, on average, every ${sum/spansArray.length} minutes`)


/**
 * Loop over the events and log them, marking whether it is in the first half or second
 * 
 * [FIRST HALF] 17: Goal
 */

for(const [time, event] of gameEvents.entries()) 
    console.log(`[${time<=45 ? 'FIRST' : 'SECOND'}HALF] ${time}: ${event}`);

