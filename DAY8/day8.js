/**
 * Arrow Function
 * Synthax:
 * let/const/var functionName = (arg1, arg2, ..., argn) => statements
 * functionName is the function name
 * arg1, arg2, ..., argn are function arguments
 * statements is the function body
 */

 const product = (number1, number2)=> (number1 * number2)

console.log(product(2, 5));

/**
 * Arrow functions are just another way to write anonymous function expressions
 * If the arrow function contains one expression, curly braces can be omitted like we did in the example above.The function will be implicitly returned.
 * Arrow functions can never have duplicate named parameters.
 * In arrow function, function get hoisted where you define. If you call the function before initialisation there will be a referenceError
 */


/**
 * CHALLENGE 4
 * Two teams DOLPHIN AND KOALAS
 * 3 games
 * Win if avg score one one is double that of the other
 * Otherwise no team wins
 * 1. Function to calculate average scoore of teams
 * 2. Use function to calculate avg score of teams
 * 3. Function checkwinner taking avg scores as parameters
 * Log winner using the format Koalas win (30 vs 13)
 * 
 * TEST DATA 
 * DOLPHIN : 44, 23, 71
 * KOALAS : 65, 54, 49 
 */


const dolphinGameOne = 44;
const dolphinGameTwo = 23;
const dolphinGameThree = 71;


const koalasGameOne = 65;
const koalasGameTwo = 54;
const koalasGameThree = 49;

const calcAverage = (firstScore, secondScore, thirdScore)=> (firstScore+secondScore+thirdScore)/3

const avgDolphin = calcAverage(dolphinGameOne, dolphinGameTwo, dolphinGameThree);
const avgKoalas = calcAverage(koalasGameOne, koalasGameTwo, koalasGameThree);

console.log(avgDolphin, avgKoalas);

const checkWinner = ()=>{
    if(avgDolphin >= 2 * avgKoalas) console.log(`Dolphin wins (${avgDolphin} vs ${avgKoalas})`)
    else if(avgKoalas >= 2 * avgDolphin) console.log(`Koalas wins (${avgKoalas} vs ${avgDolphin})`)
    else console.log(`No winner`)

}

checkWinner();