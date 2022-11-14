/**
 * CHALLENGE DAY 2
 */


/**
 * 1. Create a function that filters out negative numbers
 */

console.log("1. ############################")
const clearNegativeNumbers = (array)=>{
    const temp = [];
    for(const item of array){
        if(item>0) temp.push(item)
    }

    return temp;
}


console.log(clearNegativeNumbers([1, 2, -4, 5]))

/**
 * 2. Create a function that clears empty spaces
 */

 console.log("2. ############################")

 const clearEmptySpaces = (string)=>{
    let temp = "";
    for(const letter of string){
        // console.log(letter)
        if(letter !==" ") temp+=letter
    }

    console.log(string)

    console.log(temp)
 }

 clearEmptySpaces("I    went              there");

 /**
 * 3. Return a Boolean if a number is divisible by 10
 * 
 */

  console.log("3. ############################")

  const checkDivisibleByTen = (number)=>{
    return number % 10 === 0;
  }

  console.log(checkDivisibleByTen(24))


/**
 * 4. Return the number of vowels in a string
 * 
 */

console.log("4. ############################")

const checkNumberOfVowels = (string)=>{
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let numberOfVowels = 0;
    for(const letter of string){
        if(vowels.includes(letter)) numberOfVowels+=1;
    }

    return numberOfVowels;
}

console.log(checkNumberOfVowels("Permanganate"))