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


/**
 * 5.Longest string in array
 * 
 */

 console.log("5. ############################")

 const findLongestString = (array)=>{
    let longestString = '';
    let longestLength = 0;
    for(const string of array){
        if(string.length > longestLength){
            longestLength = string.length
            longestString = string;
        }
    }

    return longestString;
 }

 console.log(findLongestString(['mxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxe', 'meeevvvvvvvvvvvv', 'a', 'eeeeeee']))

 /**
 * 6. Most Commonly Used Character in String
 * 
 */

console.log("6. ############################")

const findMostCommonlyUsed = (string)=>{
    const temp = {}

    for(const letter of string){
        
        if(Object.keys(temp).includes(letter)){
            temp[letter] += 1

        }
        
        else {
            temp[letter] = 1;
        }

    }

    let frequentLetter = '';
    let frequency = 0;

    for(const [key, el] of Object.entries(temp)){
        if(el > frequency){
            frequency = el;
            frequentLetter = key
        }
    }

    return frequentLetter;

}

console.log("MOST COMMON", findMostCommonlyUsed('Here we gggggggooo againo'))


 /**
 * 7. Two Strings Are Anagrams of Each Other
 * 
 * 
 */

  console.log("7. ############################")

  const checkAnagrams = (firstString, secondString)=>{

    let sameLetters = false;

    if(firstString.length === secondString.length){
        for(const letter of secondString.toLowerCase()){
            if(firstString.toLowerCase().includes(letter)) sameLetters = true;
            else return false
        }

    }
   
    return sameLetters;

  }

  console.log("SAME LETTERS ? ", checkAnagrams("Pacy", "YPCA"));