/**
 * Looping through an arrays with for loop
 * The for loop is an iterative statement that checks for certain conditions and then executes a block ofcode repeatedly as long as those conditions are met
 * We have seen several ways of reading through that require to hard-coding all the steps.
 * Loops will deliver the same results with less lines of code 
 */
const lift = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < lift.length; i++){
    console.log(lift[i])
}

/**
 * The break statement jumps out of a loop. 
 * Which literally means that it ends the loop when a certain condition is met. 
 */

 for (let i = 0; i < lift.length; i++){
    if (lift[i]===5) {break; }
     console.log(lift[i])
 }

/**
 * The continue statement on the other hand, breaks one iteration of the loop when a specified condition occurs and continues with the next iteration.
 */

 for (let i = 0; i < lift.length; i++){
    if (lift[i]===5) {continue; }
    
     console.log(lift[i])
 }

 /**
  * Looping Backwards
  * This is just like the normal loop except that it reads the array starting from the element in the last index.
 */

  for (let i = lift.length - 1; i >= 0; i--){
     console.log(lift[i])
 }

 /**
  * Nested for loops
  * This means that there is a for loop inside of another for loop
  * Watch this
  */
 
let output = '';
 for (i = 5; i >= 1 ; i--){
    for (j = 1; j <= i ; j++){
        output += '* '
    }
    console.log(output);
console.log("\n");

 }

 /**
  * While Loop
  * 
  */