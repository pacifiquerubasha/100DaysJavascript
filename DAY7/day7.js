/**
 * FUNCTIONS
 * 
 * Used to create pieces of code that do a specific job and can be reused
 * Help in writing maintainable code, using the principle of DRY(Don't Repeat Yourself)
 * 
 * STRUCTURE
 * 
 * The structure is 
 * 
 * function functionName (parameters){
 *      CODE HERE
 * }
 * 
 * Which is then called like this:
 * 
 * functionName(arguments);
 * 
 * arguments are values of parameters or parameters are placeholders for arguments
 * 
 * 
 * A FUNCTION CAN EITHER DO SOMETHING OR DO AND RETURN SOMETHING
 * 
 * The return keyword is used to end the function and assigns it a value that can be stored in a variable by calling the function
 * 
 */


/**
 * @function sum
 * @description Example function that returns something. It takes number1 and number2 as parameters then returns their sum;
 * @param {Number} number1 
 * @param {Number} number2 
 * @returns sum of parameters
 */

function sum (number1, number2){
    let parametersSum;
    if(typeof number1 === "string" || typeof number2 === "string"){
        parametersSum = Number(number1) + Number(number2)
    }
    else if(typeof number1 === "number" || typeof number2 === "number"){
        parametersSum = number1 + number2
    }
    
    else parametersSum = 0; 

    return parametersSum;
}

sum();

/**
 * @function multiply
 * @description Example of a function that just does something. It takes two numbers as parameters then logs their product in the console.
 * @param {Number} number1 
 * @param {Number} number2 
 * @returns product of parameters
 */


function multiply (number1, number2){
    let product = number1 * number2

    console.log(product);
}

multiply(false, 5) //NOTE THAT MULTIPLYING A BOOLEAN BY A NUMBER RESULTS IN MULTIPLYING BY 1 IF BOOLEAN IS TRUE AND 0 IF FALSE


/**
 * The structure defined up there is an example of FUNCTION DECLARATION
 * There is another type of function called FUNCTION EXPRESSION which is an anonymous function that is declared inside a variable
 * 
 * Structure
 * 
 * const variableName = function(parameters){
 *      FUNCTION LOGIC HERE
 * }
 * 
 */


const product = function(number1, number2){
    return (number1 * number2)
}

console.log(product(2, 5))

