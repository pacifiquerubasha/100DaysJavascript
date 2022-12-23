/**
 * 13. Create a function that takes three collections of arguments and returns the sum of the product of numbers.
 */

const calculateSumOfProduct = (a, b)=> (c, d) => (e, f) => a * c * e + b * d * f;


console.log( calculateSumOfProduct(1,2)(2,3)(3,4) )

/**
 * 14. Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
 */


const checkContainNumbers = (strings)=>{

    let found = [];

    strings.forEach((string) => {
        let splittedString = string.split('');
        for(let char of splittedString) if(Number(char)) found.push(string)
    })

    return found;
}

console.log(checkContainNumbers(['me1', 'yo1u']))

/**
 * 15. Concentric layers
 */

const concentric = (rug)=>{

    let length = rug[0].length;

    for(let layer of rug){
        
    }


}


concentric(["AAAA",
"ABBA",
"AAAA"])

/**
 * 16. Consecutive Sum Check
 */

const isSumConsecutive = (number)=>{

    for(let i = 0; i< number; i++){
        if(2**i === number) return false;
    }

    return true

}

console.log(isSumConsecutive(65))

/**
 * 17. Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

 */

const combinations = (...args) => {
    
    let product = 1;
    args.forEach((number) => { if(number !== 0) product *= number })

    return product;
}

console.log(combinations(6, 7, 0))


/**
 * ==================JUMPED REGEX
 */

/**
 * 18. An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
 */

const checkPositiveDominant = (arr)=>{
    
   let negatives = 0;
   const positives = [...new Set(arr)].reduce((acc, el) => {
        let sum = 0

        if(el > 0) sum++;
        else if(el < 0) negatives++

        return acc + sum;

    }, 0)

    return positives > negatives

}

console.log(checkPositiveDominant([5, 99, 832, -3, -4]))