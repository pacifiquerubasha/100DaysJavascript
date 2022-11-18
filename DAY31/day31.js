/**
 * MORE ARRAY METHODS
 */


/**
 * array.slice(start, end); Splits the array from start item included to end item excluded. Returns the sliced array and does not affect the original array 
 * array.splice(start, end); Same as for slice but the splicing affects the original array
 * array.reverse(); reverses then returns the reversed array. This method mutates the original array
 * array.concat(arr); concatenates two arrays into one 
 * array.join(separator); returns a string of array elements joined by the separator
 * array.at(index); An alternative of finding an array element at the specified index
 * array.forEach((item, key)=>{ 
 *      logic here
 * }); Alternative to for loop that does not support continue and break statements
 * 
 */


const testArray = [1, 2, 3, 4];
const anotherArray = [5, 6, 7, 8];


console.log(testArray.slice(1, 3)) //[ 2, 3 ]
console.log(testArray); //[ 1, 2, 3, 4 ]


testArray.reverse();
console.log(testArray); //[ 4, 3, 2, 1 ]

console.log(testArray.concat(anotherArray)); // [ 4, 3, 2, 1, 5, 6, 7, 8 ]

console.log(anotherArray.join('-')); //5-6-7-8
console.log(anotherArray.at(0)); //5


anotherArray.forEach((item, key)=>{
    console.log(`ITEM ${key} ${item}`)  //prints 
                                        // ITEM 0 5
                                        // ITEM 1 6
                                        // ITEM 2 7
                                        // ITEM 3 8
})


console.log(testArray)
testArray.splice(1, 3)
console.log(testArray)