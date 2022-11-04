/**
 * SCOPES 
 * 
 * 1. Types : global scope, function scope and block scope
 * GLOBAL SCOPE : variables and functions accessible in the entire file 
 * FUNCTION SCOPE : variables and functions are accessible within the function they are declared in --> Use of let/const inside a function
 * BLOCK SCOPE : variables and functions are accessible inside the block in which they are declared. --> Use of let/const inside of if statements/loops
 * 
 * 2. Variables declared with var end up in the closest function, meaning they can be accessed outside of the function/block in which they are declared.
 * 
 * 3. The execution context takes into account three main aspects : scope chain, variable environment and "this" keyword
 * 
 * SCOPE CHAIN
 *  a.  SCOPE CHAIN principle states that every scope has access to all variables from all its outer scopes 
 *  b.  This means that a nested block has access to variables declared in all its parents. When a variable is not present in the current scope, the engine looks up
 *      in the scope chain to try to find the varible it is looking for. This is called VARIABLE LOOKUP
 * 
 * HOISTING
 *  a. HOISTING makes some types of variables accessible before their declaration
 *  b. Function declarations            => HOISTED and value is actual function
 *     Var variables                    => HOISTED and value is undefined 
 *     Let/Const variables              => NOT HOISTED and value is uninitialized (in TDZ)
 *     Function expressions/arrow f(x)  => DEPENDS on whether the function is declared using var(HOISTED) or let/const(NOT HOISTED)
 * 
 *  c. TDZ stands for Temporal Dead Zone. It is the zone where let/const variables called before declaration are kept, to say that 
 *     the variables are there but the execution hasn't founc them at that specific line where they are called
 * 
 *  d. Variables declared with the var keyword are accessible from the window object but same does not apply to those declared with let/const. 
 *     This can be checked by looking into the values stored in the window object. Log variableName == window.varibleName to check.
 * 
 */

const firstVariable = 1;
function firstFunction(){
    let secondVariable = 2;

    const secondFunction = ()=>{
        console.log(firstVariable);
        console.log(secondVariable);

    }

    var thirdFunction = ()=>{
        console.log("Third function")
        secondFunction(); //Accessible because secondFunction is a child of thirdFunction's parent hence in the Scope chain
    }
}

secondFunction(); //Error "secondFunction is not defined" because it is function scoped hence only accessible in firstFunction
thirdFunction(); //Error "secondFunction is not defined"


console.log(words) //Error "Cannot access 'words' before initialization" Variable in TDZ
console.log(sentence) //Error "Cannot access 'sentence' before initialization" Variable in TDZ
console.log(example) //Undefined


const words = "Some random words";
let sentence = "This is a sentence";
var example = "This is an example";

someRandomFunction(); //Execution complete as normal

function someRandomFunction(){
    console.log("Some random function")
}

anotherFunction(); //Error "Cannot access 'anotherFunction' before initialization" Function in TDZ
const anotherFunction = ()=>{
    console.log("Some other function")
}