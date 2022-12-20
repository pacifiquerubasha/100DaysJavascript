
/**
 * Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
 */


const checkSeven = (array) =>{
    array.forEach(element => {
        return String(element).includes("7") ? "Boom!" : "there is no 7 in the array"        
    });
}

console.log(checkSeven([1, 2, 3, 7, 4, 5]))