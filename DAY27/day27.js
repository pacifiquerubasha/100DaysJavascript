/**
 * DEFAULT PARAMETERS
 * Allows us to specify default values for parameters that can be used in case no argument for that parameter is specified
 */

function printStudent(student = "John"){
    console.log("Student", student)

}

printStudent(); //prints Student John
printStudent("Dan"); //prints Student Dan

/**
 * In Javascript, parameters are not passed by reference(they are passed by value), 
 * which means variables passed as arguments do not reference those variables but are a copy of those 
 */


const randomName = 'Ross';

const printName = (name)=>{
    name = "Jay";
    console.log("NAME", name)
}

printName(randomName); //prints Jay
console.log(randomName); //prints Ross because changing the value of name in the above function did not affect the original variable passed as argument


const randomObject = {name:"Bob", age:20}
const changeObjectAge = (obj)=>{
    obj.age = 40;
    // obj = 100;
}

changeObjectAge(randomObject);
console.log(randomObject); // { name: 'Bob', age: 40 } 

/**
 * The value of age was changed to 40 because Js allows us to change values of an object but if we reassign the entire object, the original will not be affected
 * 
 * */
                   
/**
 * Javascript functions are called first class functions because they are treated like variables. They hold values, hence can be passed as arguments/stored in variables
 * High order functions are functions that can accept other functions as parameters
 * 
 * eg. addEventListener('click', functionName) accepts functionName as an argument(referred to as callback function)
 */




/**
 * Abstraction is a technique used in programming that consists of isolating some logic in a separate function and not caring about how it performs an action. Just call it
 */


/**
 * IN JAVASCRIPT, FUNCTIONS CAN RETURN OTHER FUNCTIONS
 */

const randomFunction = ()=>{
    return function(name){
        return name;
    }
}

console.log(randomFunction()); // prints [Function (anonymous)]
console.log(randomFunction()("Angel")); // prints Angel