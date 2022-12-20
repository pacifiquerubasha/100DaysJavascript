
/**
 * 1. Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
 * Otherwise, return "there is no 7 in the array".
 */


const checkSeven = (array) =>{
    let el = array.find(element => String(element).includes("7"));

    return el ? "Boom!" : "there is no 7 in the array";
}

console.log(checkSeven([1, 2, 3, 4, 4, 5, 47]))


/**
 * 2. There are three towers. The objective of the game is to move all the disks over to tower #3, 
 * but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi
 */


const towerHanoi = (discs) =>{
    return 2**discs - 1;

}

console.log(towerHanoi(3))
console.log(towerHanoi(5))

/**
 * 3. A boomerang is a V-shaped sequence that is either upright or upside down. 
 * Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
 * Create a function that returns the total number of boomerangs in an array.
 */


const totalBoomerangs = (array)=>{
    let numberOfBoomerangs = 0;

    array.forEach((element, key) => {
        if(key > 0 && key < array.length - 1)
            if((array[key-1] === array[key+1]) && array[key+1] !== element)
                numberOfBoomerangs++;
    });

    return numberOfBoomerangs;
}

console.log(totalBoomerangs([9, 5, 9, 5, 1, 1, 1]))


/**
 * 4. Create a function that takes a string as an argument. 
 * The function must return a string containing 1s and 0s based on the string argument's words. 
 * If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. 
 * The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
 */

const zeroGame = (string) => {
        
    const replacedString = string.toLowerCase().replaceAll('one', "1").replaceAll('zero', "0").split(" ")

    const allowedStrings = ['0', '1'];

    const filtered = replacedString.filter((el) => allowedStrings.includes(el))

    if(filtered.length > 8){
        filtered.splice(-(filtered.length % 8))
        return filtered.join('')
    }

    else if(filtered.length === 0) return filtered.join('');
    else return "";    

}

console.log(zeroGame("Zero one zero one zero one zero one one three"));

/**
 * 5. Instances of the Fibonacci Sequence
 */


const checkFibonacci = (instances)=>{
    if(instances === undefined) return undefined;

    let tempArray = [];

    for(let i = 0; i < instances; i++ ){
        i > 1 ? tempArray.push(tempArray[i-1]+tempArray[i-2]) : tempArray.push(i)
    }

    return tempArray;
}

console.log(checkFibonacci(7))


/**
 * 6. Create a function that determines whether a number is Oddish or Evenish. 
 * A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. 
 * If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
 */

const checkOddishEvenish = (number)=>{
    const digitsArray = String(number).split('')
    const sum = digitsArray.reduce((acc, el) => acc + Number(el), 0)

    return sum % 2 === 0 ? 'Evenish' : 'Oddish'
}

console.log(checkOddishEvenish(1251))