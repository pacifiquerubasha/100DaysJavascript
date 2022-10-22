/**
 * LOGICAL OPERATORS
 * 1. AND (&&)
 * 2. OR (||)
 * 3. NOT(!)
 * 
 * Used in decision making to add more flexibility in including alternatives to the conditions in conditional statements (IF-ELSE)
 * Used to compare boolean values only(including truthy and falsy values)!
 * 
 * TRUTH TABLE
 * 1. AND => Boolean && Boolean === TRUE if and only if all Booleans are TRUE 
 * 2. OR => Boolean || Boolean === TRUE if at least one of the Booleans is TRUE and FALSE if all are FALSE
 * 2. NOT => !Boolean === TRUE is Boolean is FALSE and FALSE if Boolean is TRUE
 * 
 * 
 */

/**
 * Challenge
 * Given two teams, Dolphin and Koalas and their scores for the last three games
 * DOLPHIN : 96, 108, 89
 * KOALAS : 88, 91, 110
 * 
 * 1. Compare the average scores of the teams to determine which one wins the tournament
 * 2. Find the winner if a constraint of Minimum score to win of 100 is applied to the scenario
 * 
 */

const dolphinOne = 96;
const dolphinTwo = 108;
const dolphinThree = 89;

const koalasOne = 88;
const koalasTwo = 91;
const koalasThree = 110;

// 1. Calculate AVERAGE
const averageDolphin = (dolphinOne+dolphinThree+dolphinTwo)/3;
const averageKoalas = (koalasOne+koalasThree+koalasTwo)/3;

console.log("AVERAGES", averageDolphin, averageKoalas);

//2. COMPARE AVERAGES TO DETERMINE WINNER

const dolphinWins = averageDolphin > averageKoalas;
const equalScores = averageDolphin === averageKoalas;

if(dolphinWins) console.log("DOLPHIN WINS")
else if(equalScores) console.log("BOTH TEAMS HAVE THE SAME AVERAGE")
else console.log("KOALAS WINS")


//3. ADD MINIMUM SCORE REQUIREMENT
const dolphinReallyWins = dolphinWins && (averageDolphin >= 100)
const koalasReallyWins = (averageKoalas > averageDolphin) && (averageKoalas >= 100)
const realDraw = (averageDolphin === averageKoalas) && (averageDolphin >= 100) && (averageKoalas >= 100)

if(dolphinReallyWins) console.log("DOLPHIN WINS")
else if(koalasReallyWins) console.log("KOALAS WINS")
else console.log("NO TEAM WON")


/**
 * SWITCH STATEMENT
 * Used in scenarios where we need to make a decision based on the value in a variable
 * 
 * Syntax
 * 
 * let variable = "value"
 * switch(variable){
 *  case "value" :
 *      DO SOMETHING
 *      break;
 * 
 *  case "another value" :
 *      DO SOMETHING ELSE
 *      break;
 *  ...
 *  default:
 *      DO SOMETHING DIFFERENT
 * 
 * }
 * 
 * Note that if we have two values for which we want to do the same thing, we do
 * 
 * case "valueOne":
 * case "valueTwo":
 *  DO SAME THING
 *  break;
 * 
 * Missing break; at the end of each case will cause the condition to execute cases below until it finds a break;
 * 
 */

const day= 'monday';

if(day ==='monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`)
}
else if( day ==='tuesday') console.log(`Prepare theory videos`)
else if(day === 'wednesday' || 'thursday') console.log(`Write code examples.`)
else if( day === 'saturday' || 'sunday') console.log(`Enjoy the weekend!`)
else console.log(`Not a valid day`);

//The code above can be translated into

switch(day){
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`)
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`)
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples.`)
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend!`)
        break;
    default:
        console.log(`Not a valid day`);

}