
/**
 * 7. How Many Days Between Two Dates
 * 
 */

const checkNumberOfDays = (day1, day2)=>{
    return (Math.abs(day2 - day1) / 1000) / (3600 * 24)
}


checkNumberOfDays(new Date("June 14, 2019"),
new Date("June 20, 2019"))

/**
 * 8. Length of a Nested Array
 */

const lenghOfNested = (array)=>{

    return array.flat(Infinity).length;

}

console.log(lenghOfNested([1, [2, [3, 4]]]))

/**
 * 9. Swapping Cards
 * Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if one player's number is larger than the other.

However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.
 */


const isPaulWinning = (paul, opponent)=>{
    const paulArray = String(paul).split('')
    const opponentArray = String(opponent).split('')

    let temp = opponentArray[0];

    if(paulArray[0] <= paulArray[1] ){

        opponentArray[0] = paulArray[0]
        paulArray[0] = temp
    }

    else{
        opponentArray[0] = paulArray[1];
        paulArray[1] = temp
    }

    return paulArray.join() > opponentArray.join()
}

console.log(isPaulWinning(68, 35))

/**
 * 10. If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.
 */

const calculateAverageSpeed = (uptime, upSpeed, downSpeed) => {
    uptime = uptime/60;
    let distance = uptime * upSpeed;
    let average = (distance * 2) / (uptime + distance / downSpeed)

    return average;

}

console.log(calculateAverageSpeed(30, 8, 24))

/**
 * 11. Check If the Brick Fits through the Hole
 */

const checkBrickFit = (height, width, depth, widthHole, heightHole) =>{
    const brickAreas = [height * width, width * depth, height * depth];
    const holeArea = widthHole * heightHole;

    let canFit = false;
    
    brickAreas.forEach((el)=>{
        if(el <= holeArea) canFit = true;
    })

    return canFit;

}

console.log(checkBrickFit(1, 1, 1, 1, 1))
console.log(checkBrickFit(1, 2, 1, 1, 1))
console.log(checkBrickFit(1, 2, 2, 1, 1))