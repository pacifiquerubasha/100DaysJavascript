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

/**
 * 
 * 3. Print: AN event happened, on average, every 9 minutes
 * A game has 90 minutes
 */

/**
 * Loop over the events and log them, marking whether it is in the first half or second
 * 
 * [FIRST HALF] 17: Goal
 */

for(const [time, event] of gameEvents.entries()) 
    console.log(`[${time<=45 ? 'FIRST' : 'SECOND'}HALF] ${time}: ${event}`);

