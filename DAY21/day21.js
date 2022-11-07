/**
 * ARRAY DESTRUCTURING
 * 
 * Destructuring is a syntax that make it possible to unpack values from an array or object
 * 
 * ==============================1. ARRAY DESTRUCTUTING ===================================================
 * /
 * 

 /*
 * a. Normal destructuring 
 */

 const normalArray = [10, 20, 30]; //array to destructure
 const [a, b, c] = normalArray; //destructuring

 console.log(a, b, c) //prints 10, 20, 30 respectively at index 0, 1 and 2

 /*
 * b. Using holes to replace not needed values since destructuring arrays is ordered. You cannot get the third element without the first and second
 */

 const [, , item] = normalArray; //puts empty placeholders for the first and second items
 console.log("item", item) //prints the third item

 /*
 * c. Nested destructuring
 */

const multidimentionalArray = [1, 2, [3, 4]]
const [o, p, q] = multidimentionalArray;
const [, , [r, s]] = multidimentionalArray; //destructures elemts from the array at index 2

console.log("0", o, "P",  p, "Q", q) //prints 1, 2 and [3, 4]
console.log("R", r, "S",  s) // prints elements 3 and 4 

 /*
 * d. Default values help avoiding error if an element we intend to destructure is not in the array. 
      If the element is found, the default value will be ignored.
 */

 const [el=30, il=20, ol=50, ul=100] = multidimentionalArray; 
 console.log("EL", el, "IL", il, "OL", ol, "UL", ul) //prints 1, 2, [3, 4] and 100 



/*
 * 
 * 2. Object destructuring
 * 
 */


 /*
 * a. Normal destructuring 
 *    No need to worry about the order of elements, just the keys
 */

 const normalObject = {name:"John", age:50} //object to destucture 
 const {name, age} = normalObject; //destructuring(elements of destructured items should match keys of the original object)

 console.log(name, age)

 /*
 * b. Using aliases to change names of original keys. 
      Used especially when destructuring data from an api and we do want the variable names to match our project conventions
 */


const anotherObject = {word:"John", id:20, number:50}
const {word:firstName, id, number:userAge} = anotherObject; 
console.log("FIRSTNAME", firstName, "ID", id, "USER AGE",  userAge) //logs FIRSTNAME John ID 20 USER AGE 50

 /*
 * c. Using default values for the same purpose as for arrays
 */

 const justAnObject = {hair:"Black", smile:"SMILING/LAUGHING"};
 const {hair, smile:laugh, shout=false} = justAnObject;

 console.log(hair, laugh, shout); // logs Black SMILING/LAUGHING false

  /*
 * d. Nested destructuring
 */

const nestedArray = {one:1, two:{three: 3, four:4}};

const {one, two : {three, four}} = nestedArray;
console.log("WAN", one, "THREE", three, "FOUR", four) // logs 1, 3 and 4

  /*
 * e. Mutating variables
 */

  let first = "FIRST";
  let second = "SECOND";
  const randomObject = {first:1, second:2};

//   {first, second} = randomObject; gives an error because it does not expect an assignment to a code block(Js takes everything that starts with a curly brace as a code block)

({first, second} = randomObject);

console.log("FIRST", first, "SECOND", second) // prints FIRST 1 SECOND 2


/**
 *  * ==============================2. SPREAD OPERATOR ===================================================
 * 
 */


  /*
 * a. Used to create shallow copies of iterables
 *
 * Iterables are arrays, strings, maps and sets
 * Since ES 2018, spead operator is now used with objects but not to say they have been added to the list of iterables
 * 
 */

  const anArray = [1, 2, 50, 70];
  const shallowCopy = [...anArray];

  shallowCopy[1] = 87
  console.log("ORIGINAL COPY", anArray) // prints ORIGINAL COPY [ 1, 2, 50, 70 ]
  console.log("SHALLOW COPY", shallowCopy) //prints SHALLOW COPY [ 1, 87, 50, 70 ]

/*
 * b. Used to merge arrays
 */

const anotherArray = ["Morning", "Afternoon"]
const mergedArray = [...anArray, ...anotherArray];
console.log("MERGED ARRAY", mergedArray); //prints MERGED ARRAY [ 1, 2, 50, 70, 'Morning', 'Afternoon' ]


/*
 * c. Now used with objects which are not iterables
 */

const iterableObject = {keyOne: 1, keyTwo:2};
const shallowObjectCopy = {...iterableObject};
console.log("SHALLOW OBJECT COPY", shallowObjectCopy) //prints SHALLOW OBJECT COPY { keyOne: 1, keyTwo: 2 }

/*
 * d. Spread and strings literals
 */

// console.log(`The values in anotherArray are ${...anotherArray}`);  will raise a syntax error
console.log(`The values in anotherArray are ${{...anotherArray}}`);  // prints The values in anotherArray are [object Object]
