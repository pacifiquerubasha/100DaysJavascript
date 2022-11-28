
/**
 * CHALLENGE DAY
 */

/**
 * 1. Create a function which returns the number of true values there are in an array.
 * 
 */

function checkNumberOfTrue(array){
        
    return array.reduce((cum, el)=> {el && cum++; return cum}, 0);

}

console.log(checkNumberOfTrue([]));

/**
 * 2. Write a function redundant that takes in a string str and returns a function that returns str.
 * 
 */

function redundantFunction(str){

    return ()=>str
}

console.log(redundantFunction('me')());

/**
 * 3. Tile Teamwork Tactics
 * 
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. 
 * If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 * Can you reach your friend's tile number in the next roll? 
 * 
 * Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
 */

function isPossibleToAdvanceInSameTile([myPosition, friendPosition]){
    let possible = false;
    for(let i=1; i<=6; i++){
        if(myPosition + i === friendPosition) possible = true;
    }

    return possible;
}

console.log(isPossibleToAdvanceInSameTile([1, 7]))


/**
 * 4. RIGHT SHIFT BY DIVISION
 * The right shift operation is similar to floor division by powers of two.
 * Sample calculation using the right shift operator ( >> ):
 * 
 * 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
 * -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
 * -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
 * Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
 */

console.log("RIGHT SHIFT DIV", 80>>3);

function mimicRSD(left, right){
    return Math.floor(left/(2**right));
}

console.log("MY MIMIC", mimicRSD(80, 3))


/**
 * 5. Perimeters with a Catch
 * Write a function that takes a number and returns the perimeter of either a circle or a square. 
 * The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
 */

function calculatePerimeter(letter, value){    
    return letter === "s" ? value * 4 : value * 6.28;
}

console.log(calculatePerimeter("c", 4));

/**
 * 6. Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
 */

function countDigits(num){
    return String(num).length;
}

console.log(countDigits(1223455));


/**
 * 7. Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
 */

function addStolenItems(obj, name, value){
    return {...obj, [name]:value}
}

console.log(addStolenItems({ piano: 500 }, "Brutus", 400))


/**
 * 8. DERIVATIVE
 * Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
 */

function calculateDerivative(power, valueOfxAfterDerivation){
    return power*(valueOfxAfterDerivation**(power-1));

}

console.log(calculateDerivative(4, -3))