/**
 * 25. LCM of Two Numbers
 */

const lcm = (firstNumber, secondNumber)=>{

    if(firstNumber % secondNumber === 0) return firstNumber;
    
    else if (secondNumber % firstNumber === 0) return secondNumber;

    return firstNumber * secondNumber;
}

console.log(lcm(3, 6))


/**
 * 26. Find Value in a Binary Tree
 */

const findValueInBinaryTree = (arr, value)=>{
    return arr.flat(Infinity).includes(value)
}


console.log(findValueInBinaryTree([3, [ 8, [ 5, null, null], null], [ 7, null, null]], 51))



/**
 * 27. Reverse the Odd Length Words
 */

const reverseString = (string)=>{
    const splitString = string.split('');
    
    for(let [index, element] of splitString.entries()){

        if(index < splitString.length/2){
            const temp = splitString[splitString.length-1-index]
            splitString[splitString.length-1-index] = element
            splitString[index] = temp;

        }
    }

    return splitString.join('')

}


const shortHandReverseString = (string)=>{
    return string.split('').reverse().join('')
}

console.log("----------", rev("Bisimwa"))


const reverseOdds = (string)=>{
    const stringsArray = string.split(' ');

    const newArray = stringsArray.map((element, index) => {
            if(element.length % 2 !== 0) return reverseString(element)
            else return element;
                
    });

    return newArray.join(' ')

}

console.log(reverseOdds("I was there me"))


/**
 * 28. Pandigital Numbers
 */

const isPandigital = (number)=>{

    const digits = new Array(10).fill(0).map((_, i) => `${i++}`)

    for(let el of digits){
        if(!String(number).includes(el)) return false
    }

    return true

}

console.log(isPandigital(90864523148909))

/**
 * 29. Frequency Distribution
 */

const getFrequencies = (arr)=>{
    
    const obj = {};

    arr.forEach(element => {
        if(obj[element]) obj[element]++;
        else obj[element] = 1
    });

    return obj;

}

console.log(getFrequencies([true, false, true, false, false]))

/**
 * 30. Basic Arithmetic Operations on a String Number
 */

const arithmeticOperation = (string) => {

    const stringsArray = string.split(' ');
    const leftOperand = Number(stringsArray[0]), sign = stringsArray[1], rightOperand = Number(stringsArray[2]);
    
    switch(sign){
        case "+" :
            return leftOperand + rightOperand;
        case "-" :
            return leftOperand - rightOperand;
        case "*" :
            return leftOperand * rightOperand;
        case "/" :            
            return rightOperand === 0 ? -1 : leftOperand / rightOperand;

    }

}

console.log(arithmeticOperation("10 / 2"))

