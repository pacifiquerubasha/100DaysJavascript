/**
 * SKIPPED Bitwise Operator to Check Odd, Regular Expression to Check Even
 */

/**
 * 31. Double Character Swap
 */

const doubleSwap = (string, c1, c2)=>{
    
    const swap = string.split('').map(el=>{
        if(el === c1) return c2;
        else if(el === c2) return c1
        else return el
    }).join('')

    return swap


}

console.log(doubleSwap("128 895 556 788 999", "8", "9"))

/**
 * 32. How Many Days Until 2021?
 */


const daysUntil2021 = (date)=>{
    return ((new Date("1/1/2021") - new Date(date)) / (1000 * 3600 * 24))
}


console.log(daysUntil2021("12/31/2020"))

/**
 * 33. Disarium Number
 */

const isDisarium = (number)=>{

    return String(number).split('').reduce((acc, el, index) => acc + Number(el) ** (index+1), 0) === number

}

console.log("ISD", isDisarium(518))

/**
 * 34. All About Strings

 */

const allAboutStrings = (string)=>{
    const result = [string.length, string[0], string[string.length-1]];

    if(string.length % 2 === 0) result.push(`${string[(string.length/2) - 1]}${string[string.length/2]} `)

    else result.push(`${string[Math.floor(string.length/2)]}`)

    let occurences = [];

    for(let [index, el] of string.split('').entries()){

        if(occurences.includes(el)){
            result.push(`@ index ${index}`)
            return result;
        }

        else if(el === string[1]) occurences.push(el)
    }

    return [...result, "not found"]

    
}

console.log(allAboutStrings("Computer")) 

/**
 * 35. Return the Most Expensive Piece of Jewellery
 */


const mostExpensive = (obj)=>{

    let highest = 0;
    let jewName;

    for(let [key, value] of Object.entries(obj)){
        if(value > highest){
            highest = value;
            jewName = key
        }
    }

    return `The most expensive one is the ${jewName}`

}


console.log(mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }));

  /**
   * 36. C*ns*r*d Str*ngs
   */

  const uncensor = (string, chars)=>{

    const stringArray = string.split('')

    let occurences = 0;

    for(let i = 0; i<stringArray.length; i++){
        if(stringArray[i] === '*'){
            stringArray[i] = chars[occurences]
            occurences++;

        }

    }

    return stringArray.join('');

  }

  console.log(uncensor("*PP*RC*S*", "UEAE"))